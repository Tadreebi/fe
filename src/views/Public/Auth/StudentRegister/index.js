import { useState } from 'react'
import AuthTemplate from '../'

const faculties = [
  { id: 1, name: "IT" },
  { id: 2, name: "Eng" },
  { id: 3, name: "Med" },
  { id: 4, name: "Edu" },
];

const StudentRegister = () => {
  const [regData, setRegData] = useState({});

  const onRegister = () => {
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
      title: "GPA",
      name: "gpa",
      type: "number",
      step: 0.1,
      placeholder: "GPA",
      required: true,
      value: regData.gpa,
      onChange: e => setRegData(current => ({ ...current, gpa: e.target.value }))
    },
    {
      title: "Faculty",
      name: "faculty",
      type: "select",
      double: true,
      required: true,
      value: regData.faculty,
      onChange: e => setApplication(current => ({ ...current, faculty: e.target.value })),
      options: faculties.map(faculty => ({ title: faculty.name, value: faculty.id }))
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
    },
  ];

  return (
    <AuthTemplate
      title={"Student Register"}
      description={"This is for illustration purposes only. In actual app use, student data will be retrieved from university system."}
      loginButton
      inputs={inputs}
      onSubmit={onRegister}
      onReset={() => setLoginData({})}
    />
  )
};

export default StudentRegister;
