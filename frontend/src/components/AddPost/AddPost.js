import React, {useState, useEffect} from 'react';
import './AddPost.css';
import * as SERVER from '../../ServerURL';

export default function AddPost({sendDataToParent}) {

    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);

    const [addPostProcess, setAddPostProcess] = useState("null");

    function fetchAddPost(){

        setAddPostProcess("loading")

        if(title!=null && content!=null){
            fetch(`${SERVER.LINK}/api/post/addPost`,{
                method:'POST',
                body: JSON.stringify({
                    title : title,
                    content : content,
                    createdOn : Date.now().toString(),
                    updatedOn : Date.now().toString()
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('SpringBlog_Token')
                }
            })
            .then(res => res.json())
            .then(value => {
                if(value.status == 200){
                    setAddPostProcess("done")
                }
            })
            .catch(e => {
                console.log(e)
            })
        } else {
            console.log("username");
        }
        
    }
    

    return (
            <div>
                <div class={`pop-up visible`}>
                    <div class="pop-up__title">
                        Add a New Post
                        <div onClick={() => sendDataToParent(null)} >
                            <svg class="close" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6M9 9l6 6" />
                            </svg>
                        </div>
                    </div>
                    <div class="pop-up__subtitle">Adjust your selections for advanced options as desired before continuing. <a href="#">Learn more</a></div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" onChange={e => setTitle(e.target.value)} placeholder="Title" />
                    </div>
                    <div class="checkbox-wrapper">
                        <textarea className="add_post_input content_input" onChange={e => setContent(e.target.value)} placeholder="Content" />
                    </div>
                    <div class="content-button-wrapper">
                        {addPostProcess == "done" ? 
                            <button class="content-button status-button">
                                Post Added Successfully
                            </button>
                            :
                            <button class="content-button status-button" onClick={() => fetchAddPost()}>
                                {addPostProcess == "null" ? <>Add Post</> : <>•••</>}
                            </button>
                        }
                    </div>
                </div>
            </div>
    );
}