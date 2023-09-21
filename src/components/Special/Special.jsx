import PropTypes from 'prop-types';

const Special = ({ asset }) => {
  return (
    <div>
      <h2>Special</h2>
      <p> has: {asset}</p>
    </div>
  );
};

Special.propTypes = {
  asset: PropTypes.string,
};

export default Special;
