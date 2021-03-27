import React from 'react';
import './App.css';
import useAsync from './hooks/UseAsync';
import { api } from './services/Api';

const data = () => api.apiQuestionsGet();

function App() {
  const { status, value, error } = useAsync(data, true);

  return (
    <div className="App">
      {status === 'pending' && <div>Pending</div>}
      {status === 'error' && <div>Error: {error}</div>}
      {value &&
      <div>
        {value.map(q =>
          <div key={q.id}>
            Q: {q.cs}
          </div>)}
      </div>
      }
    </div>
  );
}

export default App;
