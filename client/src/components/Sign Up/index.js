import React from 'react';


function SignUp() {
    
    return(
    <div id='signUpForm'>
            <h1  id="loginFormID">
                Login
            </h1>
            <form action ="/user" method="post" id="signup">
                <div class="loginFormContainer">
                <label id="loginFormContainerEmail">
                        Username:
                    </label>
                    <input type="text" id="loginFormContainerInputs"
                        placeholder="Enter Username Here" name="username" required>
                    </input>
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
    
export default SignUp;