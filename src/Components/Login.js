import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
          <h3>Sign-In Form</h3>
          <form>
              {/* For Email */}
              <div className='form-group'>
                  <label>Enter address:</label>
                  <input type="email" className='form-control' placeholder='Enter your email'/> 
              </div>
             {/* For pwd */}
              <div className='form-group'>
                  <label>Password:</label>
                  <input type="email" className='form-control' placeholder='Enter your password'/> 
              </div>
               {/* For checkbox */}
              <div className='form-group'>
                  <div className='custom-control custom-checkbox'>
                  <input type="checkbox" id="customCheck" className='custom-control-input'/>
                  <label htmlFor='customCheck'>Remember Me</label>
                </div> 
              </div>
                   {/* For submit */}
              <button type="submit" class="btn btn-block btn-primary">Submit</button>
              <p className='forgot-pass text-right'>Forgot <a href="#">password?</a></p>
          </form>
      </div>
    )
  }
}
