import { useAuth, useRequireAuth } from '../hooks/UseAuth';
import React, { useState } from 'react';

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

  const handleLogin = (e: any) => {
    e.preventDefault();

    login(loginDto(email!!, password!!))
    .catch(err => {
      setWarning(`Status: ${err.status}, Text: ${err.statusText}`);
    });
  };

  return (
    <div>
      <form>
        <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin} disabled={!(email && password)}>Login</button>
      </form>
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
