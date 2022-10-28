import PropTypes from 'prop-types';
import css from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filter}>
    Find contacts by name
    <input
      className={css.filter__iput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
