import React from 'react';

// Need to implement javascript logic for  the login

function Login() {
    return(
    <div id='loginForm'>
        <h1  id="loginFormID">
            Login
        </h1>
        <form action="/user/login" method="post" id="login">
            <div class="loginFormContainer">
                <label id="loginFormContainerEmail">
                    Email:
                </label>
                <input type="email" id="loginFormContainerInputs"
                    placeholder="Enter Email" name="email" required>
                </input>
                <label> 
                    Password:
                </label>
                <input type="password" id="loginFormContainerInputs"
                    placeholder="Enter Password" name="password" required>
                </input>
                <button type="submit" id="loginFormContainerButton">
                    Login
                </button>
                <button type="button" id="loginFormContainerButton">
                    Sign up
                </button>
            </div>
        </form>
        </div>
    )
}


export default Login;