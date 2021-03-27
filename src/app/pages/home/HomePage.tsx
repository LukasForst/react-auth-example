import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
  );
}
