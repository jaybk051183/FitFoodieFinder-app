import React, {useState, useEffect} from "react";
import './CommentBox.css';

function CommentBox() {
    const [value, setValue] = useState("");
    const [comment, setComment] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);


    function handleChange (e) {
        setValue(e.target.value);
    }

    function handleCommentChange (e) {
        setComment(e.target.value);
    }

    function doSubmit () {
        const newPost = { name: value, comment };
        posts.push(newPost);
        setPosts(posts);
        setComment("");
        setValue("");
    }

    const doReset = () => {
        setPosts([]);
    };

    return (
        <form className="comments-box">
            <strong><p>Laat hier een leuk berichtje achter!:</p></strong>
            <div>
                <textarea
                    className="name-section"
                    placeholder="Naam"
                    rows={1}
                    cols={60}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <div>
                <textarea
                    className="comments-section"
                    placeholder="Opmerkingen"
                    rows={6}
                    cols={60}
                    value={comment}
                    onChange={handleCommentChange}
                />
            </div>
            <button
                className="comment-btn-send"
                type="button"
                onClick={doSubmit}>
                Plaats bericht
            </button>
            <br/>
            <button
                className="comment-btn-reset"
                type="button"
                onClick={doReset}>
                Wis bericht
            </button>
            <br/>
            {posts.map((post, index) => (
                <div className="posts-comment-box" key={`post-${index}`}>
                    <div>
                        Post from ({index}): {post.name}
                    </div>
                    <div>{post.comment}</div>
                </div>
            ))}
        </form>
    );
}

export default CommentBox;
