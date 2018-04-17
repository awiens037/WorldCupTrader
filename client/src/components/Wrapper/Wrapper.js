import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="wrapper">

        <div id="slideshow">
            <div class="slide-wrapper">
                <div class="slide">
                    <h1 class="slide-text"></h1>
                </div>
                <div class="slide">
                    <h1 class="slide-text"></h1>
                </div>
                <div class="slide">
                    <h1 class="slide-text"></h1>
                </div>
                <div class="slide">
                    <h1 class="slide-text"></h1>
                </div>
            </div>
        </div>


        <div class="login">

            <form action="/action_page.php">
                <label for="uname">
                    <b>E-Mail</b>
                </label>
                <input type="text" placeholder="Enter your E-mail" name="uname" required/>

                <label for="psw">
                    <b>Screen Name</b>
                </label>
                <input type="text" placeholder="Enter Screen Name" name="psw" required/>
                <label for="psw">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <div class="buttons">
                    <button type="submit">Create account</button>
                    <button type="submit">Login</button>
                </div>



            </form>
        </div>
    </div>



);

export default Wrapper;