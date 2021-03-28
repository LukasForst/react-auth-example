import { DataCorrectnessConfirmationDetailDtoOut, PatientDtoOut, VaccinationDetailDtoOut } from '../../../generated';
import { useAuthContext } from '../../../hooks/UseAuth';
import * as React from 'react';
import { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import PatientDetail from './PatientDetail';

export default function PatientRow({ patient }: { patient: PatientDtoOut }) {
  const { api } = useAuthContext();

  const [open, setOpen] = useState(false);
  const [vaccinationDetail, setVaccinationDetail]
    = useState<VaccinationDetailDtoOut | null>(null);
  const [dataCorrectnessDetail, setDataCorrectnessDetail]
    = useState<DataCorrectnessConfirmationDetailDtoOut | null>(null);
  const [state, setState] = useState<'pending' | 'idle'>('idle');

  const handleExpand = () => {
    const newOpen = !open;
    // get missing data if opening
    if (newOpen) {
      // create empty promise so we don't need to repeat code in the end
      setState('pending');
      const promises = [new Promise<void>(res => res())];
      // fetch data correctness if necessary
      if (dataCorrectnessDetail === null && patient.dataCorrect?.id) {
        promises.push(
          api.apiAdminDataCorrectnessIdGet({ id: patient.dataCorrect.id })
          .then(detail => setDataCorrectnessDetail(detail))
        );
      }
      // fetch vaccination ata if necessary
      if (vaccinationDetail === null && patient.vaccinated?.id) {
        promises.push(
          api.apiAdminVaccinationIdGet({ id: patient.vaccinated.id })
          .then(detail => setVaccinationDetail(detail))
        );
      }
      // wait on all requests to finis
      Promise.all(promises).then(() => {
        setState('idle'); // set state to idle to hide loading icon
        setOpen(newOpen); // and open the dialog
      });
    } else {
      setOpen(newOpen);
    }
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root} onClick={handleExpand}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={handleExpand}
          >
            {state === 'pending'
              ? (<CircularProgress size={'1.5rem'}/>)
              : open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>
            }
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{patient.personalNumber}</TableCell>
        <TableCell>{patient.firstName}</TableCell>
        <TableCell>{patient.lastName}</TableCell>
        <TableCell>{patient.email}</TableCell>
        <TableCell>{patient.registeredOn.toISOString()}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <PatientDetail
              patient={patient}
              dataCorrectnessDetail={dataCorrectnessDetail}
              vaccinationDetail={vaccinationDetail}/>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  root: {
    '&:hover': {
      cursor: 'pointer'
    },
    '& > *': {
      borderBottom: 'unset'
    }
  }
});
