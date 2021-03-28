import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { PatientDtoOut } from '../../../generated';
import TablePagination from '@material-ui/core/TablePagination';
import PatientRow from './PatientRow';


export default function PatientsTable({ data }: { data: Array<PatientDtoOut> }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky collapsible table">
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell>Personal Number</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>e-mail</TableCell>
              <TableCell>Registration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ overflow: 'scroll' }}>
            {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((patient) => (
              <PatientRow key={patient.id} patient={patient}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  container: {
    maxHeight: '92%'
  }
});

