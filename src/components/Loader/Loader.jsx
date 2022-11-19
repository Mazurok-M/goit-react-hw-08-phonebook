import Spinner from 'react-bootstrap/Spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrap}>
      <Spinner animation="border" />
    </div>
  );
}

export default Loader;
