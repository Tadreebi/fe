import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'src/components/Root/Buttons/'
import { Card, CardBody } from 'src/components/Root/Cards'
import AuthTemplate from '../'

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState({ username: "admin", password: "132" });

  const onLogin = e => {
    e.preventDefault();
    console.log("Loggin In", loginData)
    dispatch({ type: 'setJWT', JWT: "QwErTy12345" })
    navigate("/dashboard")
  };

  const inputs = [
    {
      title: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
      required: true,
      fullwidth: true,
      value: loginData.username,
      onChange: e => setLoginData(current => ({ ...current, username: e.target.value }))
    },
    {
      title: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      fullwidth: true,
      value: loginData.password,
      onChange: e => setLoginData(current => ({ ...current, password: e.target.value }))
    }
  ];

  return (
    <AuthTemplate
      title={"Login"}
      description={"Sign in to your account to access the dashboard"}
      inputs={inputs}
      onSubmit={onLogin}
      resetPassword
      additionCard={
        <Card className="text-white bg-success py-5" style={{ width: '44%' }}>
          <CardBody className="text-center">
            <div>
              <h2>Sign up</h2>

              <Link to="/register/student">
                <Button color="light" className="mt-3" >
                  Register as a Student
                </Button>
              </Link>

              <Link to="/register/company">
                <Button color="light" className="mt-3" >
                  Register as a Company Staff
                </Button>
              </Link>

              <Link to="/register/university">
                <Button color="light" className="mt-3" >
                  Register as a University Staff
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      }
    />
  )
}

export default Login;
