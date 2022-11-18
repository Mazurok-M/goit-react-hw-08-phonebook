import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { FilterForm, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <FilterForm>
      Find contacts by name
      <Input type="text" onChange={changeFilter} />
    </FilterForm>
  );
};
