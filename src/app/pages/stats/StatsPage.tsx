import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useRequireAuth } from '../../hooks/UseAuth';
import { PatientDtoOut, SystemStatisticsDtoOut } from '../../generated';
import { useEffect, useState } from 'react';
import StatsToolbarContent from './toolbar/StatsToolbarContent';
import { CircularProgress } from '@material-ui/core';
import PatientsTable from './table/PatientsTable';


export default function StatsPage() {
  const { api } = useRequireAuth();
  const [systemStats, setSystemStats] = useState<SystemStatisticsDtoOut | null>(null);
  const [patientsData, setPatientsData] = useState<Array<PatientDtoOut> | null>(null);
  // load data, one effect is ok as we check for null
  useEffect(() => {
    if (systemStats === null) {
      api.apiAdminStatisticsGet({}).then(data => setSystemStats(data));
    }
    if (patientsData === null) {
      api.apiAdminPatientFilterGet({}).then(data => setPatientsData(data));
    }
  }, [api, systemStats, patientsData]);

  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div className={classes.toolbar}>
        {systemStats === null
          ? (<CircularProgress style={{ alignSelf: 'center' }} size={'1.2rem'}/>)
          : (<StatsToolbarContent stats={systemStats!!}/>)
        }
      </div>
      <div className={classes.dataBox}>
        {patientsData === null
          ? (<CircularProgress style={{ alignSelf: 'center' }}/>)
          : (<PatientsTable data={patientsData!!}/>)
        }
      </div>
    </div>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    page: {
      display: 'flex',
      flexFlow: 'column',
      alignContent: 'top',
      height: '98%',
      width: '95%'
    },
    toolbar: {
      display: 'flex',
      flexFlow: 'column',
      width: '100%',
      marginTop: '20px',
      marginBottom: '20px'
    },
    dataBox: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }
  })
);
