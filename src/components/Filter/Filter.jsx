import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input className={css.filter__iput} type="text" onChange={changeFilter} />
    </label>
  );
};
