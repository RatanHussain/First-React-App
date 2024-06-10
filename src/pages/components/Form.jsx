import React from 'react'
import Headers from '../../common/Headers'
import Footer from '../../common/Footer'

export default function Form() {
  return (
      <div>
          <Headers/>

          <div className="container">
              <form >
                  <h1>Sing Up Form</h1>
                  <div className="form-input">
                      <label htmlFor="uname">User Name :</label>
                      <input type="text" name="uname" id="uname" />
                  </div>
                  <div className="form-input">
                      <label htmlFor="uemail">Email address :</label>
                      <input type="email" name="uemail" id="uemail" />
                  </div>
                  <div className="form-input">
                      <label htmlFor="uphone">Mobile number :</label>
                      <input type="number" name="uphone" id="uphone" />
                  </div>
                  <div className="form-input">
                      <label htmlFor="upassword">Password :</label>
                      <input type="password" name="upassword" id="upassword" />
                  </div>

                  <button>Save</button>
              </form>
          </div>


          <Footer/>
    </div>
  )
}
