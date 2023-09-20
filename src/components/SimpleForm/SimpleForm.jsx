// import React from 'react';
// import PropTypes from 'prop-types';

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submited');
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

SimpleForm.propTypes = {};

export default SimpleForm;
