import React, {useState, useEffect} from 'react';
import './Profile.css';
import Loading from '../Loading/Loading';
import * as SERVER from '../../ServerURL';

export default function Profile() {


    const [popup, setPopup] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    const [username, setUsername] = useState(null);

    const [allPosts, setAllPosts] = useState(null);

    const [editPost, setEditPost] = useState(null);

    const [editTitle, setEditTitle] = useState(null);
    const [editContent, setEditContent] = useState(null);

    const fetchPosts = () => {
        fetch(`${SERVER.LINK}/api/post/view/user/${localStorage.getItem('SpringBlog_Username')}`)
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

    const fetchEditPost = (id) => {
        fetch(`${SERVER.LINK}/api/post/update/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: editTitle,
                content: editContent
            }),
        })
        .then(res => res.json())
        .then(value => {
            console.log(value)
            setEditPost(null)
            setAllPosts(null)
            fetchPosts()

        })
    }

    const enableEdit = (item) => {
        setEditPost(item.id)
        setEditTitle(item.title)
        setEditContent(item.content)
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

                {editPost != null ? 
                <>
                    <div class="content-section-title">Edit Your Post</div>

                    <div class="app-card edit_card">
                        <span>
                            <input className="add_post_input edit_input" value={editTitle} onChange={e => setEditTitle(e.target.value)} placeholder="Title" />
                        </span>
                        <div class="app-card__subtext">
                            <textarea className="add_post_input content_input edit_input" value={editContent} onChange={e => setEditContent(e.target.value)} placeholder="Content" />
                        </div>
                        <div class="app-card-buttons">
                        <button class="content-button status-button status-red" onClick={() => setEditPost(null)}>Cancel</button>
                            <button class="content-button status-button" onClick={() => fetchEditPost(editPost)}>Done</button>
                        </div>
                    </div>
                </> : null}

                <div class="content-section">
                    <div class="content-section-title">Your Posts</div>
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
                                                <button class="content-button status-button status-red" onClick={() => fetchDeletePost(item.id)}>Delete</button>
                                                <button class="content-button status-button" onClick={() => enableEdit(item)}>Edit</button>
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