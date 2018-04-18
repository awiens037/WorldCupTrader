import React, { Component } from 'react';
import "./Wrapper.css";

class Wrapper extends Component {


    render(){
        return (
            <div>
<div className='main'>
                <div className="slideshow">
                    <div className="images">
                    </div>
                </div>

 <div className="login">

        <form>
            <label htmlFor="uname">
                <b>E-Mail</b>
            </label>
            <input type="text" placeholder="Enter your E-mail" name="uname" required/>

            <label htmlFor="psw">
                <b>Screen Name</b>
            </label>
            <input type="text" placeholder="Enter Screen Name" name="psw" required/>
            <label htmlFor="psw">
                <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <div className="buttons">
                <button type="submit">Create account</button>
                <button type="submit">Login</button>
            </div>



        </form>
        </div>
    <div className="push"></div>
    </div>
            </div>
        )
    }
};

// const Wrapper = props => (
//     <div className="wrapper">
//     <div id="slideshow">
//         <div className="slide-wrapper">
//             <div className="slide">
//             </div>
//             <div className="slide">
//             </div>
//             <div className="slide">
//             </div>
//             <div className="slide">
//             </div>
//         </div>
//     </div>


//     <div className="login">

//         <form action="/action_page.php">
//             <label htmlFor="uname">
//                 <b>E-Mail</b>
//             </label>
//             <input type="text" placeholder="Enter your E-mail" name="uname" required/>

//             <label htmlFor="psw">
//                 <b>Screen Name</b>
//             </label>
//             <input type="text" placeholder="Enter Screen Name" name="psw" required/>
//             <label htmlFor="psw">
//                 <b>Password</b>
//             </label>
//             <input type="password" placeholder="Enter Password" name="psw" required/>

//             <div className="buttons">
//                 <button type="submit">Create account</button>
//                 <button type="submit">Login</button>
//             </div>



//         </form>
//     </div>
// </div>
// );

export default Wrapper;