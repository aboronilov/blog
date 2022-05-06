import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
   return (
      <div className='login'>
         <span className="loginTitle">Login</span>
         <form className="loginForm">
            <label>Email</label>
            <input type="email" placeholder='Enter your email...'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password...'/>
            <button className="liginButton">Login</button>
         </form>
         <button className="liginRegisterButton">
            <Link to='/register' className='link'>Register</Link>
         </button>
      </div>
   );
}

export default Login;
