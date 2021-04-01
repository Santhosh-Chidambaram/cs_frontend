import React from "react";
import { AuthContext } from "./context";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });

  const authContext = React.useContext(AuthContext);
  const { setUserState } = authContext;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "http://ec2-18-207-140-67.compute-1.amazonaws.com/api/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginForm.email,
            password: loginForm.password,
          }),
        }
      );

      let res = await response.json();
      localStorage.setItem("token", res.token);
      history.replace("/scores");

      console.log(res);
      setUserState({
        token: res.token,
        user: res.user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-3">
      <div class="card">
        <div class="card-body">
          <form onSubmit={handleOnSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={(e) => {
                  setLoginForm({
                    ...loginForm,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <button type="submit" class="btn btn-primary mt-2 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
