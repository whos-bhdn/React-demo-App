import nature from "../../shared/images/mainPhoto.jpg";
import avatar from "../../shared/images/avatar.png"
import "./Profile.css"
// import classes from "./Profile.css";


const Profile = () => {
    return (
        <div className="blockContent">
            <div className="row imgBlockContainer">
                <img className="imgMain" src={nature} alt="mnb"/>
            </div>
            <div className="profileContent">
                <div className="imgAvatar">
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className="profileInfo">
                    <h3 className="my-4">Bohdan Sulyha</h3>
                    <ul className="infoList">
                        <li>Date of Birth: </li>
                        <li>City: </li>
                        <li>Education: </li>
                        <li>Web Site: <a href='https://instagram.com/whos_bhdn'>Click me</a></li>
                    </ul>
                </div>
            </div>
            <div className="postBlock">
                <h3 className="my-3">My posts</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control mx-3" placeholder="Write some post about your mood"
                           aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Save post</button>
                </div>
            </div>
            <div className="profileContent">
                <div className="imgPost">
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className="postInfo">
                    <p className="postItem">
                        Hello, my name is Bohdan, and I`m doing this project
                    </p>
                </div>
            </div>
            <div className="profileContent">
                <div className="imgPost">
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className="postInfo">
                    <p className="postItem">
                        Hello, my name is Bohdan, and I`m doing this project
                    </p>
                </div>
            </div>
            <div className="profileContent">
                <div className="imgPost">
                    <img src={avatar} alt="loading.."/>
                </div>
                <div className="postInfo">
                    <p className="postItem">
                        Hello, my name is Bohdan, and I`m doing this project
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Profile