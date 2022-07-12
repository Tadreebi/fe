import { useState } from 'react'
import AuthTemplate from '../'

const ResetChange = () => {
  const [resetData, setResetData] = useState({});

  const onReset = e => {
    e.preventDefault();
    console.log("Reset In", resetData)
  };

  const props = [
    {
      title: "Old Password",
      name: "oldPassword",
      type: "password",
      placeholder: "Old Password",
      required: true,
      fullwidth: true,
      value: resetData.oldPassword,
      onChange: e => setResetData(current => ({ ...current, oldPassword: e.target.value }))
    },
    {
      title: "New Password",
      name: "newPassword",
      type: "password",
      placeholder: "New Password",
      required: true,
      fullwidth: true,
      value: resetData.newPassword,
      onChange: e => setResetData(current => ({ ...current, newPassword: e.target.value }))
    },
    {
      title: "Repeat Password",
      name: "repeatPassword",
      type: "password",
      placeholder: "Repeat Password",
      required: true,
      fullwidth: true,
      value: resetData.repeatPassword,
      onChange: e => setResetData(current => ({ ...current, repeatPassword: e.target.value }))
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

export default ResetChange;
