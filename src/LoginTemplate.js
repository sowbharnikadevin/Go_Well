import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function login() {
  return (
    <div>
    <table id="table" border="2" width={400} height={600} >
    <div>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
                <h1 class="mt-1 mb-5 pb-1"><b>GoWell</b></h1>
                <h5>Go Healthier</h5>
                <p>Please login to your account</p>
    <form id="for">
    <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Username" />
                    <label class="form-label" for="form2Example11"></label>
                  </div>
                  <br></br>
                  <div class="form-outline mb-4">
                  <input type="password" id="form2Example22" class="form-control" placeholder="Password"/>
                  <label class="form-label" for="form2Example22"></label>
                </div>
<br></br>
                <div class="text-center pt-1 mb-5 pb-1">
                  <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                    in</button>
                    <br></br>
                  <a class="text-muted" href="#!">Forgot password?</a>
                </div>
                <div class="d-flex align-items-center justify-content-center pb-4">
                <p class="mb-0 me-2">Don't have an account?</p>
                <button type="button" class="btn btn-outline-danger">Create new</button>
              </div>
    </form>
</div>
<div>
    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
      <h4 class="mb-4">We are more than just a company</h4>
      <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
 </div>
  </table>
  </div>
 
  );
}

export default login;