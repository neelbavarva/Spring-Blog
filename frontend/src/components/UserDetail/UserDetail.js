import React, {useState, useEffect} from 'react';
import './UserDetail.css';
import { RiHeart3Fill } from "react-icons/ri";
import * as SERVER from '../../ServerURL';
import Loading from '../Loading/Loading';

export default function UserDetail({userDetail}) {


    const [popup, setPopup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    const [username, setUsername] = useState(null);

    const [allPosts, setAllPosts] = useState(null);

    const fetchPosts = () => {
        fetch(`${SERVER.LINK}/api/post/view/user/${userDetail}`)
        .then(res => res.json())
        .then(value => setAllPosts(value.reverse()))
    }

    const fetchDeletePost = (id) => {
        fetch(`${SERVER.LINK}/api/post/delete/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(value => {
            console.log(value)
            window.location.reload()
        })
    }

    const fetchLogout = () => {
        localStorage.removeItem('SpringBlog_Token')
        localStorage.removeItem('SpringBlog_Username')
        window.location.reload();
    }

    useEffect(()=>{
        setUsername(localStorage.getItem('SpringBlog_Username'))
        fetchPosts()
        console.log(userDetail)
    },[])

    return (
        <div class="main-container">
            <div class="main-header">
                <a class="menu-link-main" href="#">User Page</a>
            </div>

            <div className="profile_header_container">
                <div className="profile_header_left">
                    <img src="https://unblast.com/wp-content/uploads/2018/12/Colorful-Sci-Fi-Textures-2.jpg" />
                    <h1>@{userDetail}</h1>
                </div>
            </div>

            <div class="content-wrapper">
                    
                <div class="content-section">
                    <div class="content-section-title">User Posts</div>
                        <div class="apps-card">
                            
                            {allPosts == null ? <Loading /> : 
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
                                                <button class="like_button" onClick={() => setPopup("visible")}><RiHeart3Fill /></button>
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