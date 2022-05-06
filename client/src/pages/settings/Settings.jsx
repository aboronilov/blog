import './settings.css';
import Sidebar from './../../components/sidebar/Sidebar';

const Settings = () => {
   return (
      <div className='settings'>
         <div className="settingsWrapper">
            <div className="settingsTitle">
               <span className="settingsUpdateTitle">Update your account</span>
               <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form className="settingsForm">
               <label>Profile Picture</label>
               <div className="settingPP">
                  <img
                     src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt=""
                  />
                  <label htmlFor="fileInput">
                     <i className="settingsPPIcon far fa-user-circle"></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: "none" }} />
               </div>
               <label>Username</label>
               <input type="text" placeholder="example" />
               <label>Email</label>
               <input type="email" placeholder="example@example.com" />
               <label>Password</label>
               <input type="password" />
               <button className="settingsSubmitButton" type="submit">
                  Update
               </button>
            </form>
         </div>
         <Sidebar />
      </div>
   );
}

export default Settings;
