import React, {useState, useEffect} from 'react';
import './SignIn.css';

export default function SignIn({sendDataToParent}) {

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
                    <div class="pop-up__subtitle">Adjust your selections for advanced options as desired before continuing. <a href="#">Learn more</a></div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" placeholder="Username" />
                    </div>
                    <div class="checkbox-wrapper">
                        <input className="add_post_input" placeholder="Password" />
                    </div>
                    <div class="content-button-wrapper">
                        <button class="content-button status-button" onClick={() => sendDataToParent(null)}>SignIn</button>
                    </div>
                </div>
            </div>
    );
}