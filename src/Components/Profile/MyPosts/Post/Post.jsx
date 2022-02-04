import classNames from "classnames";
import classes from "./Post.module.css";
import avatar from "../../../../shared/images/avatar.png";

const Post = () => {
    return (
        <div className={classNames(classes.container)}>
            <div className={classNames(classes.imgPost)}>
                <img src={avatar} alt="loading.."/>
            </div>
            <div className={classNames(classes.postInfo)}>
                <p className={classNames(classes.postItem)}>
                    Hello, my name is Bohdan, and I`m doing this project
                </p>
            </div>
        </div>
    )
}

export default Post;