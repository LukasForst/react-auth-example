import { useAuth, useRequireAuth } from '../hooks/UseAuth';
import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';

const loginDto = (email: string, password: string) => {
  return {
    credentials: {
      email,
      password
    },
    nurseId: 'd84c66c4-70dc-41c1-8cad-2f36f3839f4e',
    vaccineSerialNumber: '124'
  };
};

export default function Login() {
  const { user } = useAuth();
  return (
    <div>
      {user ? <LoggedIn/> : <Unauthorized/>}
    </div>
  );
}

function Unauthorized() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [status, setStatus] = useState<'idle' | 'pending'>('idle');

  const handleLogin = (e: any) => {
    e.preventDefault();

    setStatus('pending');
    return login(loginDto(email!!, password!!))
    // no need to handle then because this will change whole context
    // and on success this component won't render at all
    .catch(err => {
      setWarning(`Status: ${err.status}, Text: ${err.statusText}`);
      setStatus('idle');
    });
  };

  return (
    <div>
      {status !== 'pending' &&
      <form>
        <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin} disabled={!(email && password)}>Login</button>
      </form>
      }
      {status === 'pending' && <CircularProgress/>}
      {warning && <div>{warning}</div>}
    </div>
  );
}

function LoggedIn() {
  const { user, logout } = useRequireAuth();
  const handleLogout = (e: any) => {
    e.preventDefault();

    logout();
  };

  return (
    <div>
      Hello World to {user?.token}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
