import React from 'react';

// Need to implement javascript logic for  the login

function Login() {
    return(
    <div>
        <h1>
            Login
        </h1>
        <form>
            <div class="container">
                <label>
                    Email:
                </label>
                <input type="email"
                    placeholder="Enter Email" name="email" required>
                </input>
                <label> 
                    Password:
                </label>
                <input type="password"
                    placeholder="Enter Password" name="password" required>
                </input>
                <button type="submit">
                    Login
                </button>
                <button type="button">
                    Sign up
                </button>
            </div>
        </form>
        </div>
    )
}

export default Login;