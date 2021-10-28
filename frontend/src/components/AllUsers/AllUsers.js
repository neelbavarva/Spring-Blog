import React, {useState, useEffect} from 'react';
import './AllUsers.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import * as SERVER from '../../ServerURL';
import UserDetail from '../UserDetail/UserDetail';
import Loading from '../Loading/Loading';

export default function AllUsers({sendDataToParent}) {

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

                    <div class="content-section">
                        <div class="content-section-title all_post_title">All Posts</div>
                            <div class="apps-card users_card">

                                {allUsers == null ? <Loading /> : (
                                    <div class="apps-card">
                                        {allUsers.map(item =>{
                                            return(
                                                <div onClick={() => sendDataToParent({
                                                    "viewMode" : "UserDetail",
                                                    "username" : item
                                                })} class="app-card user_card">
                                                    <span>
                                                        <img class="profile-img card_icon post_item_title" src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                                                        
                                                        <div className="post_item_title">
                                                            {item}
                                                        </div>

                                                    </span>
                                                    <div class="app-card__subtext allpost_text">
                                                        <div className="post_item_content user_link">
                                                            <span>View Profile</span>
                                                            <IoIosArrowDroprightCircle />
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