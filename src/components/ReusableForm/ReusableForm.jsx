import PropTypes from 'prop-types';
const ReusableForm = ({
  formTitle,
  handleSubmit,
  submitButtonTitle = 'Submit',
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <h2>{formTitle}</h2>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitButtonTitle} />
      </form>
    </div>
  );
};
ReusableForm.propTypes = {
  formTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitButtonTitle: PropTypes.string,
  children: PropTypes.jsx,
};
export default ReusableForm;
