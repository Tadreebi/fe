import { useState } from 'react'
import AuthTemplate from '../'

const CompanyRegister = () => {
  const [regData, setRegData] = useState({});

  const onRegister = e => {
    e.preventDefault();
    console.log("Registering", regData)
  };

  const inputs = [
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
      title={"Company Register"}
      description={"Register to start posting about your internship opportunity, in to receive student applications."}
      loginButton
      inputs={inputs}
      onSubmit={onRegister}
      onReset={() => setLoginData({})}
    />
  )
};

export default CompanyRegister;
