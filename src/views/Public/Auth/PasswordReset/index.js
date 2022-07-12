import { useState } from 'react'
import AuthTemplate from '../'

const ResetPassword = () => {
  const [resetData, setResetData] = useState({});

  const onReset = e => {
    e.preventDefault();
    console.log("Reset In", resetData)
  };

  const props = [
    {
      title: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      fullwidth: true,
      value: resetData.email,
      onChange: e => setResetData(current => ({ ...current, email: e.target.value }))
    },
  ];

  return (
    <AuthTemplate
      title={"Reset Password"}
      description={"Enter your Email To Send You the Reset Email"}
      loginButton
      inputs={props}
      onSubmit={onReset}
    />
  )
}

export default ResetPassword;
