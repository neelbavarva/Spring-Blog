import React, {useState, useEffect} from 'react';
import './Home.css';
import AllPosts from '../AllPosts/AllPosts';
import AddPost from '../AddPost/AddPost';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';
import GradientBackground from '../../assets/images/gradient-background.png'
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { RiLoginCircleFill, RiLoginBoxFill, RiAddCircleFill, RiReactjsLine, RiUserFill, RiGithubFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";


export default function Home() {

    const [viewMode, setViewMode] = useState("AllPosts");

    const [addPost, setAddPost] = useState(null);
    const [signin, setSignin] = useState(null);
    const [signup, setSignup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    const [popup, setPopup] = useState(null);

    const [token, setToken] = useState(null);

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

    useEffect(()=>{
        setToken(localStorage.getItem('SpringBlog_Token'))
    },[])

    return (
        <div>
            <div class="video-bg">
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg" />
            </div>

            {signin == null ? null : <SignIn sendDataToParent={signinData} />}
            {signup == null ? null : <SignUp sendDataToParent={signupData} />}
            {addPost == null ? null : <AddPost sendDataToParent={adPostData} />}
            
            <div class={`app ${popup !=null ? "less_opacity" : null}`}>
                <div class="header">
                    <div class="menu-circle"></div>
                        <div class="header-profile">
                            <img
                                class="profile-img header-profile-img"
                                src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg"
                            />
                            <div className="mobile-dropdown">
                                <div class="content-section">
                                    <div class="app-cad-buttons">
                                        <button class={`dropdown ${dropdown}`} onClick={() => dropdown == null ? setDropdown("is-active") : setDropdown(null)}>
                                            <ul>
                                                <li onClick={() => setViewMode("AllPosts")}><a>All Posts</a></li>
                                                <li onClick={() => setViewMode("Profile")}><a>Profile</a></li>
                                                <li onClick={() => setSignin("visible") & setPopup("visible")}><a>SignIn</a></li>
                                                <li onClick={() => setSignup("visible") & setPopup("visible")}><a>SignUp</a></li>
                                                <li onClick={() => setAddPost("visible") & setPopup("visible")}><a>Add Post</a></li>
                                                <li><a href="#">GitHub</a></li>
                                                <li><a href="#">Portfolio</a></li>
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
                        </div>
                        </div>
                        <div class="side-wrapper">
                        <div class="side-title">Categories</div>
                        <div class="side-menu">
                            {token == null? 
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
                            <a href="#">
                                <RiReactjsLine />
                                React.js
                            </a>
                            <a href="#">
                                <SiSpringboot />
                                Spring Boot
                            </a>
                        </div>
                        </div>
                        <div class="side-wrapper">
                        <div class="side-title">Project Info</div>
                        <div class="side-menu">
                            <a href="#">
                                <RiGithubFill />
                                GitHub
                            </a>
                            <a href="#">
                                <svg viewBox="0 0 512 512" fill="currentColor">
                                    <path
                                    d="M196 151h-75v90h75c24.814 0 45-20.186 45-45s-20.186-45-45-45z"
                                    />
                                    <path
                                    d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM196 271h-75v105c0 8.291-6.709 15-15 15s-15-6.709-15-15V136c0-8.291 6.709-15 15-15h90c41.353 0 75 33.647 75 75s-33.647 75-75 75zm210-60c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.291-6.709 15-15 15s-15-6.709-15-15V241h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-24.814 20.186-45 45-45h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-8.276 0-15 6.724-15 15v45h45z"
                                    />
                                </svg>
                                Portfolio
                            </a>
                        </div>
                        </div>
                    </div>

                    {viewMode == "AllPosts" && <AllPosts />}
                    {viewMode == "Profile" && <Profile />}

                </div>
            </div>
        </div>
    );
}