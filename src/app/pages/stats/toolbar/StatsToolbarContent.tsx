import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SystemStatisticsDtoOut } from '../../../generated';

export default function StatsToolbarContent({ stats }: { stats: SystemStatisticsDtoOut }) {
  const classes = useStyles();
  return (
    <div className={classes.data}>
      <div>#E: {stats.emailsSentCount}</div>
      <div>#PD. {stats.patientsDataVerifiedCount}</div>
      <div>#R {stats.registrationsCount}</div>
    </div>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    data: {
      display: 'flex',
      flexFlow: 'row',
      alignSelf: 'flex-end',
      '& > div': {
        padding: '5px'
      }
    }
  })
);
