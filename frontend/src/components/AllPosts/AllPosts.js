import React, {useState, useEffect} from 'react';
import './AllPosts.css';
import * as SERVER from '../../ServerURL';

export default function AllPosts() {

    const [popup, setPopup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    const [allPosts, setAllPosts] = useState(null);

    const fetchPosts = () => {
        fetch(`${SERVER.LINK}/api/post/view/all`)
        .then(res => res.json())
        .then(value => setAllPosts(value))
    }


    useEffect(()=>{
        fetchPosts()
    },[])

    return (
            <div class="main-container">
                <div class="main-header">
                    <a class="menu-link-main" href="#">All Posts</a>
                </div>

                <div class="content-wrapper">
                    <div class="content-wrapper-header">
                        <div class="content-wrapper-context">
                            <h3 class="img-content">
                                <img
                                    class="header_image"
                                    src="https://cdn3d.iconscout.com/3d/premium/thumb/code-4059153-3364039@0.png"
                                />
                                Blog App
                            </h3>
                            <div class="content-text">
                                This Blog App project is made using React.js for Frontend and
                                Spring Boot for Backend.
                            </div>
                            <a href="https://github.com/neelbavarva/Spring-Blog" target="_blank"><button class="content-button">View Repository</button></a>
                        </div>
                        <img
                            class="content-wrapper-img"
                            src="https://assets.codepen.io/3364143/glass.png"
                            alt=""
                        />
                    </div>

                        
                    <div class="content-section">
                        <div class="content-section-title">All Posts</div>
                            <div class="apps-card">

                                {allPosts == null ? <h1>Loading...</h1> : (
                                    <div class="apps-card">
                                        {allPosts.map(item =>{
                                            return(
                                                <div class="app-card">
                                                    <span>
                                                        <img class="profile-img card_icon post_item_title" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                                        
                                                        <div className="post_item_title">
                                                            {item.title}
                                                        </div>

                                                    </span>
                                                    <div class="app-card__subtext allpost_text">
                                                        <div className="post_item_content">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    </div>
            </div>
    );
}