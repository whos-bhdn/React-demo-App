import nature from "../../shared/images/mainPhoto.jpg";
import avatar from "../../shared/images/avatar.png"
import classNames from "classnames";
import classes from "./Profile.module.css";


const Profile = () => {
    return (
        <div className={classNames(classes.blockContent)}>
            <div className={classNames("row", classes.imgBlockContainer)}>
                <img className={classes.imgMain} src={nature} alt="width photo"/>
            </div>
            <div className={classNames(classes.profileContent)}>
                <div className={classNames(classes.imgAvatar)}>
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className={classNames(classes.profileInfo)}>
                    <h3 className={classNames("my-4")}>Bohdan Sulyha</h3>
                    <ul className={classNames(classes.infoList)}>
                        <li>Date of Birth: </li>
                        <li>City: </li>
                        <li>Education: </li>
                        <li>Web Site: <a href='https://instagram.com/whos_bhdn'>Click me</a></li>
                    </ul>
                </div>
            </div>
            <div className={classNames(classes.postBlock)}>
                <h3 className={classNames("my-3")}>My posts</h3>
                <div className={classNames("input-group mb-3")}>
                    <input type="text" className={classNames("form-control mx-3")} placeholder="Write some post about your mood"
                           aria-describedby="button-addon2"/>
                        <button className={classNames("btn btn-outline-secondary")} type="button" id="button-addon2">Save post</button>
                </div>
            </div>
            <div className={classNames(classes.profileContent)}>
                <div className={classNames(classes.imgPost)}>
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className={classNames(classes.postInfo)}>
                    <p className={classNames(classes.postItem)}>
                        Hello, my name is Bohdan, and I`m doing this project
                    </p>
                </div>
            </div>
            <div className={classNames(classes.profileContent)}>
                <div className={classes.imgPost}>
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className={classes.postInfo}>
                    <p className={classes.postItem}>
                        Hello, my name is Bohdan, and I`m doing this project
                    </p>
                </div>
            </div>
            <div className={classes.profileContent}>
                <div className={classes.imgPost}>
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className={classes.postInfo}>
                    <p className={classes.postItem}>
                        Hello, my name is Bohdan, and I`m doing this project
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Profile