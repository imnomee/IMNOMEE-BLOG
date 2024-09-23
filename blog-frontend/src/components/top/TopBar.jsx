import './topbar.css';
import profile from '../../assets/profile.jpg';

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-square-x-twitter"></i>
                <i className="topIcon fa-brands fa-square-github"></i>
                <i className="topIcon fa-brands fa-square-whatsapp"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">POSTS</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                    className="profileImg"
                    src={profile}
                    alt="profile"
                    height="200"
                    width="200"
                />
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
