import './home.css';
import Header from '../../components/header/Header.jsx';
import Posts from '../../components/posts/Posts.jsx';
import SideBar from '../../components/sidebar/SideBar.jsx';

export default function Home() {
    return (
        <div>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </div>
    );
}
