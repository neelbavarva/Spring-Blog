import React, {useState, useEffect} from 'react';
import './Profile.css';

export default function Profile() {


    const [popup, setPopup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    return (
        <div class="main-container">
            <div class="main-header">
                <a class="menu-link-main" href="#">Profile</a>
            </div>

            <div class="content-wrapper">
               

                    
                <div class="content-section">
                    <div class="content-section-title">Your Posts</div>
                        <div class="apps-card">
                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    @neelbavarva
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button" onClick={() => setPopup("visible")}>Edit</button>
                                </div>
                            </div>
                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    After Effects
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button">Edit</button>
                                </div>
                            </div>
                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    After Effects
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button">Edit</button>
                                </div>
                            </div>

                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    @neelbavarva
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button">Edit</button>
                                </div>
                            </div>

                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    @neelbavarva
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button">Edit</button>
                                </div>
                            </div>

                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    @neelbavarva
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button">Edit</button>
                                </div>
                            </div>

                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    @neelbavarva
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button">Edit</button>
                                </div>
                            </div>

                            <div class="app-card">
                                <span>
                                    <img class="profile-img card_icon" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                    @neelbavarva
                                </span>
                                <div class="app-card__subtext">
                                    Industry Standart motion graphics & visual effects
                                </div>
                                <div class="app-card-buttons">
                                    <button class="content-button status-button">Edit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    );
}