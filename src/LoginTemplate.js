import React, { useState, useEffect, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext"; // Import UserContext
import { Email } from "@mui/icons-material";
import "./login.css";

import { TextField } from "@mui/material";

function LoginTemplate() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://6564372dceac41c0761da07b.mockapi.io/api/v1/posts")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(
      (user) => user.username === loginDetails.username
    );

    console.log(foundUsers);

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]);
      // alert("user found");
      navigate("/form");
    } else {
      alert("Account not found please register");
      navigate("/co");
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <div id="ta">
      <table border="1">
        <tr>
          <td>
            <img src="hospital.jpg" width={800} height={600} />
          </td>
          <td width={600} height={600} id="tabl">
            <div>
              <img src="logo.jpg" style={{ width: "185px" }} alt="logo" />
              <h1 class="mt-1 mb-5 pb-1">GOWELL</h1>
              <h3>Go Healthier</h3>
              <h4>Please login to your account</h4>
              <form onSubmit={handleLogin}>
                <div class="form-outline mb-4">
                  <lable>
                    <input
                      type="email"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      label="Required"
                      value={loginDetails.username}
                      onChange={handleInputChange}
                    />
                  </lable>
                </div>
                <br></br>
                <div class="form-outline mb-4">
                  <lable>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={loginDetails.password}
                      onChange={handleInputChange}
                      label="Required"
                    />
                  </lable>
                  <label class="form-label" for="form2Example22"></label>
                </div>
                <br></br>
                <div class="text-center pt-1 mb-5 pb-1">
                  <Link to="form">
                    <button onClick={handleLogin}
                      className="su1"
                      class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                      type="submit"
                    >
                      Log in
                    </button>
                  </Link>
                  <br></br>
                </div>
              </form>
              <div class="d-flex align-items-center justify-content-center pb-4">
                <p class="mb-0 me-2">
                  <h3>Don't have an account?</h3>
                </p>
                <Link to="/co">
                  <button type="button" class="btn btn-outline-danger">
                    Create new
                  </button>
                </Link>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default LoginTemplate;
