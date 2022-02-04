import nature from "../../shared/images/mainPhoto.jpg";
import avatar from "../../shared/images/avatar.png"
import classNames from "classnames";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={classNames(classes.blockContent)}>
            <div className={classNames("row", classes.imgBlockContainer)}>
                <img className={classes.imgMain} src={nature} alt="width photo"/>
            </div>
            <div className={classNames(classes.container)}>
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
            <MyPosts />
        </div>
    );
}

export default Profile