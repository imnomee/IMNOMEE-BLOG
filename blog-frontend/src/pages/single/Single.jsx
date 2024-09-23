import './single.css';
import Sidebar from '../../components/sidebar/SideBar.jsx';
import SinglePost from '../../components/singlePost/SinglePost.jsx';

export default function single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}
