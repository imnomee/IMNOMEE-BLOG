import './post.css';
import postImg from '../../assets/profile.jpg';

export default function Post() {
    return (
        <div className="post">
            <img src={postImg} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Tech</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <div className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente numquam rerum dolor nulla iure dignissimos nobis, ex
                eos. Odio, nihil recusandae. Commodi sint, reiciendis
                repellendus at minus eligendi cum saepe libero voluptates non.
                Odit hic praesentium voluptas quo modi tempora maxime earum,
                rerum corrupti obcaecati corporis fuga tenetur quaerat dolore?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                libero provident enim sapiente illo facilis totam ad corrupti
                fuga pariatur, facere reprehenderit, culpa optio modi sequi,
                labore consequatur. Ipsam eligendi unde pariatur quam! Beatae
                illo amet, odit eligendi voluptates cumque nulla enim repellat
                ex blanditiis id. Enim ullam nisi, nulla veniam recusandae iure,
                quas autem, ab fugiat in accusamus at? Ipsam, iusto numquam
                ratione cumque alias natus facilis fuga! Sequi laboriosam
                dignissimos optio ipsam esse ipsa vitae est quibusdam
                necessitatibus neque! Excepturi, voluptatem quas culpa placeat
                impedit dolore voluptates rerum quibusdam voluptas labore!
                Eligendi reiciendis voluptas, numquam rerum odit autem.
            </div>
        </div>
    );
}
