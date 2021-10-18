import React, {useState, useEffect} from 'react';
import './AllPosts.css';

export default function AllPosts() {

    const [popup, setPopup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

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
                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        @neelbavarva
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>
                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        After Effects
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>
                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        After Effects
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>

                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        @neelbavarva
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>

                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        @neelbavarva
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>

                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        @neelbavarva
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>

                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        @neelbavarva
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>

                                <div class="app-card">
                                    <span>
                                        <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        @neelbavarva
                                    </span>
                                    <div class="app-card__subtext allpost_text">
                                        Industry Standart motion graphics & visual effects
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
    );
}