import React, {useState, useEffect} from 'react';
import './Home.css';
import AllPosts from '../AllPosts/AllPosts';
import AddPost from '../AddPost/AddPost';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';
import AllUsers from '../AllUsers/AllUsers';
import GradientDark from '../../assets/images/gradient_dark.png'
import GradientLight from '../../assets/images/gradient_light.jpg'
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { RiLoginCircleFill, RiLoginBoxFill, RiAddCircleFill, RiReactjsLine, RiUserFill, RiGithubFill, RiLink, RiUserSearchFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import UserDetail from '../UserDetail/UserDetail';


export default function Home() {

    const [viewMode, setViewMode] = useState("AllPosts");

    const [addPost, setAddPost] = useState(null);
    const [signin, setSignin] = useState(null);
    const [signup, setSignup] = useState(null);
    const [dropdown, setDropdown] = useState(null);
    const [background, setBackground] = useState(GradientLight);

    const [popup, setPopup] = useState(null);

    const [token, setToken] = useState(null);

    const [userDetail, setUserDetail] = useState(null);

    const adPostData = (isVisible) => {
        setAddPost(isVisible);
        setPopup(isVisible);
    };

    const signinData = (isVisible) => {
        setSignin(isVisible);
        setPopup(isVisible);
    };

    const signupData = (isVisible) => {
        setSignup(isVisible);
        setPopup(isVisible);
    };

    const userPage = (userDetail) => {
        setViewMode(userDetail.viewMode);
        setUserDetail(userDetail.username)
    };

    

    useEffect(()=>{
        setToken(localStorage.getItem('SpringBlog_Token'))
    },[])

    return (
        <div>
            <div class="video-bg">
                <img src={background} />
            </div>

            {signin == null ? null : <SignIn sendDataToParent={signinData} />}
            {signup == null ? null : <SignUp sendDataToParent={signupData} />}
            {addPost == null ? null : <AddPost sendDataToParent={adPostData} />}
            
            <div class={`app ${popup !=null ? "less_opacity" : null}`}>
                <div class="header">
                    <div class="menu-circle"></div>
                        <div class="header-profile">
                            <button onClick={() => background == GradientLight ? setBackground(GradientDark) : setBackground(GradientLight)} className="theme_button">Change Theme</button>
                            <img
                                class="profile-img header-profile-img"
                                src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg"
                            />
                            <div className="mobile-dropdown">
                                <div class="content-section">
                                    <div class="app-cad-buttons">
                                        <button class={`dropdown ${dropdown}`} onClick={() => dropdown == null ? setDropdown("is-active") : setDropdown(null)}>
                                            <ul>
                                                <li onClick={() => background == GradientLight ? setBackground(GradientDark) : setBackground(GradientLight)}><a>Change Theme</a></li>
                                                <li onClick={() => setViewMode("AllPosts")}><a>All Posts</a></li>
                                                <li onClick={() => setViewMode("AllUsers")}><a>All Users</a></li>
                                                {token == null ? 
                                                    <>
                                                        <li onClick={() => setSignin("visible") & setPopup("visible")}><a>SignIn</a></li>
                                                        <li onClick={() => setSignup("visible") & setPopup("visible")}><a>SignUp</a></li>
                                                    </> :
                                                    <>  
                                                        <li onClick={() => setViewMode("Profile")}><a>Profile</a></li>
                                                        <li onClick={() => setAddPost("visible") & setPopup("visible")}><a>Add Post</a></li>
                                                    </>
                                                }
                                                <li><a href="https://github.com/neelbavarva/Spring-Blog" target="_blank">GitHub</a></li>
                                                <li><a href="https://portfolio-neelbavarva.vercel.app/" target="_blank">Portfolio</a></li>
                                            </ul>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="wrapper">
                    <div class="left-side">
                        <div class="side-wrapper">
                        <div class="side-title">Apps</div>
                        <div class="side-menu">
                            <a onClick={() => setViewMode("AllPosts")}>
                                <AiFillHome />
                                All Posts
                            </a>
                            <a onClick={() => setViewMode("AllUsers")}>
                                <RiUserSearchFill />
                                All Users
                            </a>
                        </div>
                        </div>
                        <div class="side-wrapper">
                        <div class="side-title">Categories</div>
                        <div class="side-menu">
                            {token == null ? 
                                <>
                                    <a onClick={() => setSignin("visible") & setPopup("visible")}>
                                        <RiLoginCircleFill />
                                        Login
                                    </a>
                                    <a onClick={() => setSignup("visible") & setPopup("visible")}>
                                        <RiLoginBoxFill />
                                        SignUp
                                    </a>
                                </>
                                : 
                                <>
                                    <a onClick={() => setViewMode("Profile")}>
                                        <RiUserFill />
                                        Profile
                                    </a>
                                    <a onClick={() => setAddPost("visible") & setPopup("visible")}>
                                        <RiAddCircleFill />
                                        Add Post
                                    </a>
                                </>
                            }

                        </div>
                        </div>
                        <div class="side-wrapper">
                        <div class="side-title">Made With</div>
                        <div class="side-menu">
                            <a>
                                <RiReactjsLine />
                                React.js
                            </a>
                            <a>
                                <SiSpringboot />
                                Spring Boot
                            </a>
                        </div>
                        </div>
                        <div class="side-wrapper">
                        <div class="side-title">Project Info</div>
                        <div class="side-menu">
                            <a href="https://github.com/neelbavarva/Spring-Blog" target="_blank">
                                <RiGithubFill />
                                GitHub
                            </a>
                            <a href="https://portfolio-neelbavarva.vercel.app/" target="_blank">
                                <RiLink />
                                Portfolio
                            </a>
                        </div>
                        </div>
                    </div>

                    {viewMode == "AllPosts" && <AllPosts />}
                    {viewMode == "Profile" && <Profile />}
                    {viewMode == "AllUsers" && <AllUsers sendDataToParent={userPage} />}
                    {viewMode == "UserDetail" && <UserDetail userDetail={userDetail} />}

                </div>
            </div>
        </div>
    );
}