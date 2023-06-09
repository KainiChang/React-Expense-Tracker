import React from 'react';
import { useAuth } from '../../components/AuthContext'




function ForgetPW() {

  const { forgetPassWord ,signErr} = useAuth()

  const [email, setEmail] = React.useState(null)

  const [errData, setErrData] = React.useState( null)

  function handleChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    forgetPassWord(email)
  }


  const emailValidator = /^\S+@\S+\.\S+$/;
  function isValidEmail() {
    if (emailValidator.test(email) === false) {
      setErrData("Please enter valid email")
    }
    else {
      setErrData(null)
    }
  }

  return (
    <div className='sign'>
      <div className='sign-main'>
        <img className='sign-logo' src='./images/logo.png' alt='logo' />
        <h1>Reset Password</h1>
        <span className='sign-logo-slogan'>Please enter your email</span>
        <form className='sign-form'>
          <span> Email</span>
          <input className='form-text'  onChange={handleChange} onBlur={isValidEmail} placeholder='Enter your email' />
          {errData && <span className='err'>{errData}</span>}
          <button onClick={handleSubmit} >Reset Password</button>
          {signErr && <span className='err'>{signErr}</span>}
        </form>
      </div>
      <div className='sign-image' ></div>
    </div>

  )
}

export default ForgetPW
