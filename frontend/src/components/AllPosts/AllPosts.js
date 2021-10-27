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
        .then(value => setAllPosts(value.reverse()))
    }

    const [allUsers, setAllUsers] = useState(null);

    const fetchUsers = () => {
        fetch(`${SERVER.LINK}/api/user/getAll`)
        .then(res => res.json())
        .then(value => setAllUsers(value))
    }


    useEffect(()=>{
        fetchPosts()
        fetchUsers()
    },[])

    return (
            <div class="main-container">
                <div class="main-header">
                    <a class="menu-link-main" href="#">All Posts</a>
                </div>

                <div class="content-wrapper">
                    {/* <div class="content-section-title">New Users</div>
                    <div class="profile_wrapper">
                        {allUsers == null ? 
                        <h1>Loading...</h1> : 
                        <div class="profile_wrapper_scrolls">
                            {allUsers.map(item => {
                                return(
                                    <div className="user_display_card">
                                        <img src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                        <h1>{item}</h1>
                                    </div>
                                )
                            })}
                        </div>
                        }
                    </div> */}
                    <div class="content-section">
                        <div class="content-section-title all_post_title">All Posts</div>
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