//import { useState } from 'react'
import { Link } from 'react-router-dom';
import upcLogo from './../../assets/LogoHorizontal-upc.jpg'
import './Login.css'

function Login() {
  const iconStyle: React.CSSProperties = {
    backgroundImage: `url(${upcLogo})`,
    backgroundSize: 'cover',
    width: '175px',
    height: '60px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block'
  };

  return (
    <>
      <div className=".containerlogin">
        <div className="content">
          <i style={iconStyle} data-visualcompletion="css-img"></i>
          <form className="content__form">
            <div className="content__inputs">
              <label>
                <input className="" type="text" />
                <span>username or email</span>
              </label>
              <label>
                <input className="" type="password" />
                <span>Password</span>
              </label>
            </div>
            <Link to={'/home'}>
              <button>Log In</button>
            </Link>
          </form>
          <div className="content__or-text">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div className="content__forgot-buttons">
            <button>Forgot password?</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
