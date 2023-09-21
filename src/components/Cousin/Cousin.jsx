import PropTypes from 'prop-types';
import Special from '../Special/Special';
const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section className="flex">
        {asset && <Special asset={asset}></Special>}
      </section>
    </div>
  );
};

Cousin.propTypes = {
  name: PropTypes.jsx,
  asset: PropTypes.string,
};

export default Cousin;
