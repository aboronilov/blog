import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img className="sideBarItemImg" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p className="sideBarItemP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolores, quis laudantium cumque odio natus non!</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Cinema</li>
                    <li className="sideBarListItem">Tech</li>
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
