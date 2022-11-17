import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span>Ласкаво просимо, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Вийти
      </button>
    </div>
  );
}
