import React, {useState, useEffect} from 'react';
import './SignIn.css';
import * as SERVER from '../../ServerURL';

export default function SignIn({sendDataToParent}) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [loginProcess, setLoginProcess] = useState("null");

    function fetchSignIn(){

        setLoginProcess("loading")

        if(username!=null && password!=null){
            fetch(`${SERVER.LINK}/api/auth/login`,{
                method:'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(value => {
                console.log(value)
                if(value.status == 200){
                    localStorage.setItem('SpringBlog_Token', value.token);
                    localStorage.setItem('SpringBlog_Username', username);
                    setLoginProcess("done")
                    window.location.reload();
                } else {
                    
                }
            })
        } else {
            console.log(username);
        }
        
    }

    return (
            <div>
                <div class={`pop-up visible`}>
                    <div class="pop-up__title">
                        SignIn
                        <div onClick={() => sendDataToParent(null)} >
                            <svg class="close" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6M9 9l6 6" />
                            </svg>
                        </div>
                    </div>
                    <div class="pop-up__subtitle">
                        {loginProcess == "done" ? <>LoggedIn</> : <>Fill the form</>}
                    </div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    </div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div class="content-button-wrapper">
                        {loginProcess == "done" ? 
                            <button class="content-button status-button">
                                Successfully LoggedIn
                            </button> : 
                            <button class="content-button status-button" onClick={() => fetchSignIn()}>
                                {loginProcess == "null" ? <>Login</> : <>•••</>}
                            </button>
                        }
                    </div>
                </div>
            </div>
    );
}