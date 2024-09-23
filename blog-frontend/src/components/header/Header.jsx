import './header.css';
import testImage from '../../assets/profile.jpg';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={testImage} alt="testImage" />
        </div>
    );
}
