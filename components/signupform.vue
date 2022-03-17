<template>
    <div id="sign-up">
        <div id="cleanup">
            <h1>Clean<span>Up</span></h1>
        </div>
        <div id="user-info">
            <div id="signup-info">
                <h2>Sign Up!</h2>
            </div>
            <div id="info1">
                <form>
                 <label for="username">Username</label><br>
                <input type="text" name="username" placeholder="Username"><font-awesome-icon icon="user" :style="{color:'grey',position: 'relative', bottom:'30px', left:'16rem'}"/>
                </form>
            </div>
            <div id="info2">
                <form>
                    <label for="email">Email Address </label><br>
                    <input type="text" name="email" placeholder="Email Address"><font-awesome-icon icon="envelope" :style="{color:'grey',position: 'relative', bottom:'30px', left:'16rem'}"/>
                </form>
            </div>
            <div id="info3">
                <form>
                    <label for="password">Password</label><br>
                    <input type="text" name="password" placeholder="Password"><font-awesome-icon icon="eye-slash" :style="{color:'grey',position: 'relative', bottom:'30px', left:'16rem'}"/>
                </form>
            </div>
            <div id="info4">
                <form>
                    <label for="cfpassword">Confirm Password</label><br>
                    <input type="text" name="cfpassword" placeholder="Confirm Password"><font-awesome-icon icon="eye-slash" :style="{color:'grey',position: 'relative', bottom:'30px', left:'16rem'}"/>
                </form>
            </div>
            <div id="info5">
                <form>
                    <label for="phonenumber">Phone Number</label><br>
                    <input type="text" name="phonenumber" placeholder="+234"><font-awesome-icon icon="inbox" :style="{color:'grey',position: 'relative', bottom:'30px', left:'16rem'}"/>
                </form>
            </div>
            <button><img src="../assets/googleicon.jpg" alt="google icon">Login With Google</button>
            <div id="easy-login">
                <p>Already have an account?<span id="login">Login</span></p>
            </div>
            <div id="submit-btn">
                <form>
                    <input type="submit" value="Sign Up">
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: Poppins, 'Encode Sans';
}

#sign-up{
    display: grid;
    grid-template-rows: auto auto ;
    width:100%;
}

#cleanup{
    border: none;
    height: 6vh;
    width: 40%;
    font-size: 0.5rem;
    color:rgb(146, 146, 146);
    margin-left: 30px;
}
span{
    color: black;
}

#user-info{
    display: grid;
    grid-template-rows: auto auto auto auto auto auto auto auto;
    /*justify-self:center;*/
    width: 28vw;
    height: 90vh;
    border: none;
    border-radius: 20px 0 0 20px;
    padding: 10px 50px;
    margin-left: 60px;
    box-shadow: 1px 1px 3px 3px rgb(224, 222, 222, 0.5);
}
#signup-info{
    text-align: center;
}

input[type=text]{
    width: 100%;
    height: 2rem;
    border: none;
    outline: none;
    border-radius: 0 7px 7px 7px ;
    padding: 2px 10px;
    margin-top: 5px;
    box-shadow: 2px 1px 7px 1px rgb(219, 218, 218);
}
#easy-login{
    height: 2rem;
    padding-top: 10px;
}
p{
    color: rgb(150, 146, 146);
    font-size:0.8rem;
    text-align: center;
}
#login{
    color: rgba(101, 192, 9, 1);
}

input[type=submit]{
    width: 100%;
    height: 2.5rem;
    background-color: rgba(101, 192, 9, 1);
    color: whitesmoke;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px rgb(167, 165, 165);
}
label{
    font-size: 0.8rem;
    font-weight: 500;
}

::placeholder{
    font-weight: 300;
}

button{
    background-color: white;
    height: 2rem;
    width: 95%;
    border-radius:5px;
}

img{
    position: relative;
    top: 5px;
    right: 10px;
    border-radius: 50%;
}
/*#submit-btn:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(28vw);
    margin-left: 340px;
    margin-top: 7.5vh;
    height: calc(90vh);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

#submit-btn:active {
    color: rgba(101, 192, 9, 1);
}

#submit-btn:active:after {
    background: transparent;
}

#submit-btn:hover:before {
    opacity: 1;
}

#submit-btn:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 90vh;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}*/

@media screen and (max-width:768px) {
    #user-info{
        width: 40vw;
        justify-content: center;
    }
    /*#submit-btn:before {
        width: 40vw;
        margin-left: 115px;
    }*/

}

@media screen and (max-width:600px) {
    #user-info{
        width: 50vw;
        justify-content: center;
    }
    /*#submit-btn:before {
        width: 50vw;
        margin-left: 40px;
    }*/
}

@media screen and (max-width:425px) {
     #user-info{
        width: 50vw;
        justify-content: center;
    }
    /*#submit-btn:before {
        width: 50vw;
        margin-left: 40px;
    }*/
}

@media screen and (max-width:375px) {
     #user-info{
        width: 50vw;
        justify-content: center;
    }
    #submit-btn:before {
        width: 50vw;
        margin-left: 40px;
    }
}
</style>