import { useRequireAuth } from '../hooks/UseAuth';
import { useState } from 'react';
import useAsync from '../hooks/UseAsync';
import { CircularProgress } from '@material-ui/core';

export default function UserProfile() {
  const { api, logout } = useRequireAuth();
  const [patients, setPatients] = useState<string>();

  const handleGetPatients = (e: any) => {
    e.preventDefault();
    return api.apiAdminPatientFilterGet({})
    .then(p => setPatients(JSON.stringify(p)));
  };
  const { execute, status } = useAsync(handleGetPatients);

  const handleLogout = (e: any) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <div>
        <button onClick={execute}>Get Patients</button>
        {status === 'pending' && <CircularProgress/>}
        {patients && <div>{patients}</div>}
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
