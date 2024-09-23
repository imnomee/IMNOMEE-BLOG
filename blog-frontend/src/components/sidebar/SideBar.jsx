import './sidebar.css';
import sidebarImg from '../../assets/profile.jpg';
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImg" src={sidebarImg} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque temporibus dolores nobis iure saepe nesciunt libero
                    adipisci ipsum quam quidem.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-github"></i>
                    <i className="sidebarIcon fa-brands fa-square-whatsapp"></i>
                </div>
            </div>
        </div>
    );
}
