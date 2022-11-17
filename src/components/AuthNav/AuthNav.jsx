import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact>
        Реєстрація
      </NavLink>
      <NavLink to="/login" exact>
        Логін
      </NavLink>
    </div>
  );
}
