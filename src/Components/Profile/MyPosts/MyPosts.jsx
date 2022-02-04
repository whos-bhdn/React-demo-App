import classNames from "classnames";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={classNames(classes.postBlock)}>
                <h3 className={classNames("my-3")}>My posts</h3>
                <div className={classNames("input-group mb-3")}>
                    <input type="text" className={classNames("form-control mx-3")} placeholder="Write some post about your mood"
                           aria-describedby="button-addon2"/>
                    <button className={classNames("btn btn-outline-secondary")} type="button" id="button-addon2">Save post</button>
                </div>
                <Post />
                <Post />
                <Post />
            </div>
        );
}

export default MyPosts;