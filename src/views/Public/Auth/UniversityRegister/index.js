import { useState } from 'react'
import AuthTemplate from '../'

const UniversityRegister = () => {
  const [regData, setRegData] = useState({});

  const onRegister = e => {
    e.preventDefault();
    console.log("Registering", regData)
  };

  const props = [
    {
      title: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
      required: true,
      value: regData.username,
      onChange: e => setRegData(current => ({ ...current, username: e.target.value }))
    },
    {
      title: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      value: regData.email,
      onChange: e => setRegData(current => ({ ...current, email: e.target.value }))
    },
    {
      title: "Name",
      name: "name",
      type: "text",
      placeholder: "Name",
      required: true,
      value: regData.name,
      onChange: e => setRegData(current => ({ ...current, name: e.target.value }))
    },
    {
      title: "Address",
      name: "address",
      type: "text",
      required: true,
      value: regData.address,
      onChange: e => setRegData(current => ({ ...current, address: e.target.value }))
    },
    {
      title: "Phone No",
      name: "phone",
      type: "text",
      placeholder: "Phone No",
      required: true,
      value: regData.phone,
      onChange: e => setRegData(current => ({ ...current, phone: e.target.value }))
    },
    {
      title: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      value: regData.password,
      onChange: e => setRegData(current => ({ ...current, password: e.target.value }))
    },
    {
      title: "Repeat Password",
      name: "passwordRepeat",
      type: "password",
      placeholder: "passwordRepeat",
      required: true,
      value: regData.passwordRepeat,
      onChange: e => setRegData(current => ({ ...current, passwordRepeat: e.target.value }))
    }
  ];

  return (
    <AuthTemplate
      title={"University Register"}
      description={"This is for illustration purposes only. In actual app use, staff data will be retrieved from university system."}
      loginButton
      inputs={props}
      onSubmit={onRegister}
      onReset={() => setLoginData({})}
    />
  )
};

export default UniversityRegister;
