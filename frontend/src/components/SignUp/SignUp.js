import React, {useState, useEffect} from 'react';
import './SignUp.css';
import * as SERVER from '../../ServerURL';

export default function SignUp({sendDataToParent}) {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [registerProcess, setRegisterProcess] = useState("null");

    const [allUsers, setAllUsers] = useState([]);

    const fetchUsers = () => {
        fetch(`${SERVER.LINK}/api/user/getAll`)
        .then(res => res.json())
        .then(value => setAllUsers(value))
        console.log(allUsers)
    }


    function fetchSignUp(){

        setRegisterProcess("loading")

        if(username!=null && email!=null && password!=null){
            fetch(`${SERVER.LINK}/api/auth/signup`,{
                method:'POST',
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(value => {
                if(value.status == 200){
                    setRegisterProcess("done")
                } else {
                    setRegisterProcess("error")
                }
            })
        } else {
            console.log(username);
        }
        
    }

    useEffect(()=>{
        fetchUsers()
    },[])


    return (
            <div>
                <div class={`pop-up visible`}>
                    <div class="pop-up__title">
                        SignUp
                        <div onClick={() => sendDataToParent(null)} >
                            <svg class="close" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6M9 9l6 6" />
                            </svg>
                        </div>
                    </div>
                    <div class="pop-up__subtitle">
                        {registerProcess == "error" ? <>Try again</> : registerProcess == "done" ? <>Login to continue</> : <>Fill the form</>}
                    </div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    </div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div class="content-button-wrapper">
                        {registerProcess == "done" ? 
                            <button class="content-button status-button">
                                Successfully Registered 
                            </button> : 
                            <button class="content-button status-button" onClick={() => fetchSignUp()}>
                                {registerProcess == "null" ? <>SignUp</> : <>•••</>}
                            </button>
                        }
                    </div>
                </div>
            </div>
    );
}