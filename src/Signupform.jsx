import React, { useState, useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from './UserContext';
import './sign.css';
const Signupform = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(null);
  const [signupDetails, setSignupDetails] = useState({ 
    username: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    password: "",
    diabetes: "",
    bp: "",
    diseases: "",
   });
   
   const { setUser } = useContext(UserContext); 

  const checkUserExists = async (username) => {
      const response = await axios.get('http://localhost:5000/view');
      return response.data.some(user => user.username === username);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      console.log('User already exists. Redirecting to login...');
      navigate('/');
      return;
    }

    if (confirm !== signupDetails.password){
      alert('Password and Confirm Password are not same...')
      return;
    }

    axios.post('http://localhost:5000/insert', signupDetails)
      .then(response => {
        console.log('Signup successful:', response.data);
        setUser(response.data);
        navigate('/form');
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    // alert(e.target.name);
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div  id="sign">
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
    <div >
      <form onSubmit={handleSignup} >
      <br></br>
      <br></br>
      <h2 id="head">SIGN UP FORM</h2>

        <table id="up">
          <tbody>
            <tr>
              <td><b>NAME :</b></td>
              <td>
                <input
                  type="text"
                  name="username"
                  value={signupDetails.username}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
<br></br>

            <tr>
            <td><b>AGE :</b></td>
              <td>
                <input
                  type="text"
                  name="age"
                  value={signupDetails.age}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
<br></br>

            <tr>
              <td><b>GENDER :</b></td>
              <td>
                  <select name="gender" onChange={handleInputChange}>
                    <option></option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                    <option value="others">OTHERS</option>
                  </select>
              </td>
            </tr>
            <br></br>

            <tr>
              <td><b>MOBILE NUMBER:</b></td>
              <td>
                <input
                  type="tel"
                  name="contact"
                  value={signupDetails.contact}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </td>
            </tr>

            <br></br>
            <tr>
              <td><b>EMAIL:</b></td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={signupDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
<br></br>

            <tr>
              <td><b>PASSWORD:</b></td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={signupDetails.password}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <br></br>

            <tr>
              <td><b>CONFIRM PASSWORD:</b></td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirm}
                  onChange={handleConfirmPassword}
                  required
                />
              </td>
            </tr>

            <br></br>
           

   
            <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button type="submit">Register</button>
                </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Signupform;