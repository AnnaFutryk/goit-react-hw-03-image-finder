import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <>
      <Button type="button" onClick={onClick}>
        Load more
      </Button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
