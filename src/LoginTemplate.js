import React from 'react';
import { Link } from 'react-router-dom';
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
    <div id="ta" >
    <table border="1" >
    <tr>
    <td><img src="hospital.jpg" width={1000} height={800}/></td>
    <td   width={600} height={600} id="tabl">
    <div>
    <img src="logo.jpg"
                style={{width: '185px'}} alt="logo" />
                <h1 class="mt-1 mb-5 pb-1"><b>GoWell</b></h1>
                <h3>Go Healthier</h3>
                <h4>Please login to your account</h4>
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
                  <Link to="form"><button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                    in</button></Link>
                    <br></br>
                  <a class="text-muted" href="#!">Forgot password?</a>
                </div>
                <div class="d-flex align-items-center justify-content-center pb-4">
                <p class="mb-0 me-2">Don't have an account?</p>
                <button type="button" class="btn btn-outline-danger">Create new</button>
              </div>
    </form>
</div>
</td></tr>
</table>
</div>

);
}
// </td>
// <td id="table"  width={400} height={400}>
// <div>
//     <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
//     <div class="text-white px-3 py-4 p-md-5 mx-md-4">
//       <h4 class="mb-4">We are more than just a company</h4>
//       <p class="small mb-0">Gowell is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.
//      Gowell is typically funded by public funding</p>
//     </div>
//   </div>
//  </div>

export default login;