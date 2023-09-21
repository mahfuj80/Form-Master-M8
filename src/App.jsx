import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
// import ReusableForm from './components/ReusableForm/ReusableForm';
// import HookForm from './components/HookForm/HookForm';
// import RefForm from './components/RefForm/RefForm';
// import SimpleForm from './components/SimpleForm/SimpleForm';
// import StatefulForm from './components/StatefulForm/StatefulForm';

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log('Sign up data', data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log('handle profile data', data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sign UP</h2>
          <p>please sign up Right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        submitButtonTitle={'Update'}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile Updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
