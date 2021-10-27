import React, {useState, useEffect} from 'react';
import './Profile.css';
import * as SERVER from '../../ServerURL';

export default function Profile() {


    const [popup, setPopup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    const [username, setUsername] = useState(null);

    const [allPosts, setAllPosts] = useState(null);

    const fetchPosts = () => {
        fetch(`${SERVER.LINK}/api/post/view/user/${localStorage.getItem('SpringBlog_Username')}`)
        .then(res => res.json())
        .then(value => setAllPosts(value.reverse()))
    }

    const fetchLogout = () => {
        localStorage.removeItem('SpringBlog_Token')
        localStorage.removeItem('SpringBlog_Username')
        window.location.reload();
    }

    useEffect(()=>{
        setUsername(localStorage.getItem('SpringBlog_Username'))
        fetchPosts()
    },[])

    return (
        <div class="main-container">
            <div class="main-header">
                <a class="menu-link-main" href="#">Profile</a>
            </div>

            <div className="profile_header_container">
                <div className="profile_header_left">
                    <img src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                    <h1>@{username}</h1>
                </div>
                <div className="profile_header_right">
                    <button onClick={() => fetchLogout()}>
                        Logout
                    </button>
                </div>
            </div>

            <div class="content-wrapper">
                    
                <div class="content-section">
                    <div class="content-section-title">Your Posts</div>
                        <div class="apps-card">
                            
                            {allPosts == null ? <h1>Loading...</h1> : 
                                allPosts.map(item => {
                                    return(
                                        <div class="app-card">
                                            <span>
                                                <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                                {item.title}
                                            </span>
                                            <div class="app-card__subtext">
                                                {item.content}
                                            </div>
                                            <div class="app-card-buttons">
                                                <button class="content-button status-button" onClick={() => setPopup("visible")}>Edit</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
        </div>
    );
}