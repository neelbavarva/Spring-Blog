import React, {useState, useEffect} from 'react';
import './Profile.css';
import * as SERVER from '../../ServerURL';

export default function Profile() {


    const [popup, setPopup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    const [username, setUsername] = useState(null);

    useEffect(()=>{
        setUsername(localStorage.getItem('SpringBlog_Username'))
    },[])

    return (
        <div class="main-container">
            <div class="main-header">
                <a class="menu-link-main" href="#">Profile</a>
            </div>

            <div class="content-wrapper">
                    
                <div class="content-section">
                    <div class="content-section-title">Your Posts</div>
                        <div class="apps-card">
                            {username}
                            
                            {/* {allPosts == null ? <h1>Loading...</h1> : 
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
                            } */}

                        </div>
                    </div>
                </div>
        </div>
    );
}