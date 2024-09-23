import './write.css';
import writeImg from '../../assets/profile.jpg';

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src={writeImg} alt="" />
            <form className="writeForm" action="">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                    />
                    <input
                        className="writeInput"
                        type="text"
                        id="fileInput"
                        placeholder="Title"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        type="text"
                        placeholder="Tell your story..."></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}
