import { useRequireAuth } from '../hooks/UseAuth';
import { useState } from 'react';

export default function UserProfile() {
  const { api, logout } = useRequireAuth();
  const [patients, setPatients] = useState<string>();

  const handleGetPatients = (e: any) => {
    e.preventDefault();
    api.apiAdminPatientFilterGet({}).then(p => setPatients(JSON.stringify(p)));
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      <div>
        <button onClick={handleGetPatients}>Get Patients</button>
        {patients && <div>{patients}</div>}
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
