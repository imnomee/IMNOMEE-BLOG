import './settings.css';
import SideBar from '../../components/sidebar/SideBar.jsx';
import profilePicture from '../../assets/profile.jpg';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Your Account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={profilePicture} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Nomee" />
                    <label>Email</label>
                    <input type="email" placeholder="Nomee" />
                    <label>password</label>
                    <input type="password" placeholder="Nomee" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    );
}
