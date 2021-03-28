import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataCorrectnessConfirmationDetailDtoOut, PatientDtoOut, VaccinationDetailDtoOut } from '../../../generated';

interface PatientDetailProps {
  patient: PatientDtoOut
  dataCorrectnessDetail: DataCorrectnessConfirmationDetailDtoOut | null
  vaccinationDetail: VaccinationDetailDtoOut | null
}

export default function PatientDetail(
  { patient, dataCorrectnessDetail, vaccinationDetail }: PatientDetailProps
) {
  const classes = useStyles();
  return (
    <Box sx={{ margin: 1 }}>
      <Typography variant="h6" gutterBottom component="div">
        Patient {patient.firstName} {patient.lastName}
      </Typography>
      <div className={classes.patientDetailContainer}>
        <div className={classes.patientDetail}>
          {/* common section */}
          <div>
            <PatientProperty name={'ID'} value={patient.id}/>
            <PatientProperty name={'First Name'} value={patient.firstName}/>
            <PatientProperty name={'Last Name'} value={patient.lastName}/>
            <PatientProperty name={'Personal Number'} value={patient.personalNumber}/>
            <PatientProperty name={'Email'} value={patient.email}/>
            <PatientProperty name={'District'} value={patient.district}/>
            <PatientProperty name={'Zip Code'} value={patient.zipCode}/>
            <PatientProperty name={'Indication'} value={patient.indication}/>
            <PatientProperty name={'Insurance Company'} value={patient.insuranceCompany}/>
          </div>
          {/* system section */}
          <div>
            <PatientProperty name={'Registered'} value={patient.registeredOn.toISOString()}/>
            <PatientProperty name={'Email Sent'} value={patient.registrationEmailSentOn?.toISOString()}/>
          </div>
          {/* data correctness section */}
          <div>
            <PatientProperty name={'Data Checked'} value={dataCorrectnessDetail !== null ? 'yes' : 'no'}/>
            {dataCorrectnessDetail !== null && (
              <span>
                <PatientProperty name={'Checked On'} value={dataCorrectnessDetail.checked.toISOString()}/>
                <PatientProperty name={'Data State'} value={dataCorrectnessDetail.dataAreCorrect ? 'correct' : 'incorrect'}/>
                <PatientProperty
                  name={'Responsible Doctor'}
                  value={`${dataCorrectnessDetail.doctor.firstName} ${dataCorrectnessDetail.doctor.lastName}`}/>
                <PatientProperty name={'Notes'} value={dataCorrectnessDetail.notes}/>
                <PatientProperty name={'Nurse'} value={dataCorrectnessDetail.nurse}/>
              </span>
            )}
          </div>
          {/* vaccination section */}
          <div>
            <PatientProperty name={'Patient Vaccinated'} value={vaccinationDetail !== null ? 'yes' : 'no'}/>
            {vaccinationDetail !== null && (
              <span>
                <PatientProperty name={'Vaccinated On'} value={vaccinationDetail.vaccinatedOn.toISOString()}/>
                <PatientProperty name={'Vaccine #'} value={vaccinationDetail.vaccineSerialNumber}/>
                <PatientProperty name={'Body Part'} value={vaccinationDetail.bodyPart}/>
                <PatientProperty name={'ISIN Export'}
                                 value={vaccinationDetail.exportedToIsinOn ?? 'not yet'}/>
                <PatientProperty name={'Responsible Doctor'}
                                 value={`${vaccinationDetail.doctor.firstName} ${vaccinationDetail.doctor.lastName}`}/>
                <PatientProperty name={'Notes'} value={vaccinationDetail.notes}/>
                <PatientProperty name={'Nurse'} value={vaccinationDetail.nurse}/>
              </span>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
}

function PatientProperty<T>({ name, value }: { name: string, value: T }) {
  return value ? (
    <div>
      <span>{name}:</span> <span>{value}</span>
    </div>
  ) : <span/>;
}

const useStyles = makeStyles({
  patientDetailContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  patientDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    flexFlow: 'row',
    '& > div': {
      padding: '10px'
    }
  }
});
