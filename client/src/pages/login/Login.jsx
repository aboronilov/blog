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
         <button className="liginRegisterButton">Register</button>
      </div>
   );
}

export default Login;
