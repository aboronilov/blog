import "./sidebar.css";
import { useState, useEffect } from 'react';
import axios from "axios";

const Sidebar = () => {
   const [cats, setCats] = useState([])
   useEffect(() => {
      const getCats = async () => {
         const res = await axios.get("/categories")
         setCats(res.data)
      }
      getCats()
   }, [])
    return (
        <div className="sidebar">
            <div className="aboutMe">
                <p className="sideBarTitle">ABOUT ME</p>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolores, quis laudantium cumque odio natus non!</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fab fa-facebook-square"></i>
                    <i className="sideBarIcon fab fa-instagram-square"></i>
                    <i className="sideBarIcon fab fa-pinterest-square"></i>
                    <i className="sideBarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
