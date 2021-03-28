import { Link } from 'react-router-dom';
import { routes } from '../../modules/Routing';

export default function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <Link to={routes.login}>Login</Link>
        </li>
        <li>
          <Link to={routes.userProfile}>User</Link>
        </li>
        <li>
          <Link to={routes.stats}>Stats</Link>
        </li>
      </ul>
    </div>
  );
}
