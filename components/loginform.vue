<template>
    <div id="login">
        <div id="cleanup-logo">
            <h1>Clean<span>Up</span></h1>
        </div>
        <div id="user-login">
            <div id="sign-in">
                <h2>Login!</h2>
            </div>
            <button><img src="../assets/googleicon.jpg" alt="google icon">Login With Google</button>
            <div id="line-break">
                <div id="line-break1"></div>
                <p id="line">or</p>
                <div id="line-break2"></div>
            </div>
            <div id="email-in">
                <form>
                    <label for="email">Email Address </label><br>
                    <input type="text" name="email" placeholder="Email Address"><font-awesome-icon icon="envelope" :style="{color:'grey',position: 'relative', bottom:'45px', left:'16rem'}"/>
                </form>
            </div>
            <div id="password-in">
                <form>
                    <label for="password">Password</label><br>
                    <input type="text" name="password" placeholder="Password"><font-awesome-icon icon="eye-slash" :style="{color:'grey',position: 'relative', bottom:'45px', left:'16rem'}"/>
                </form>
            </div>
            <div id="forget-pass">
                <p id="fg-pass">Forget Password?</p>
            </div>
            <div id="login-btn">
                <form>
                    <input type="submit" value="Login">
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, 'Encode Sans';
}

#login{
    width: 100%;
    height: 95vh;
    display: grid;
    grid-template-rows: auto auto;
}

#cleanup-logo{
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

#user-login{
    border: none;
    height: 90vh;
    width: 25vw;
    display: grid;
    margin-left: 50px;
    padding: 70px 30px;
    border-radius: 20px 0 0 20px;
    box-shadow: 1px 1px 3px 3px rgb(224, 222, 222, 0.5);
}

#sign-in{
    text-align: center;
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

#line-break{
    border: none;
    display: grid;
    grid-template-columns: auto auto auto;
}

#line-break1{
    border: none;
    width: 6rem;
    height: 0.7rem;
    border-bottom: rgb(138, 137, 137) 1.5px solid;
    
}

#line{
    border: none;
    width: 100%;
    height: 1rem;
    font-weight: 300;
    font-size: 0.7rem;
    margin-left: 30px;
}

#line-break2{
    border: none;
    width:7rem;
    height: 0.7rem;
    margin-left: 20px;
    border-bottom: rgb(138, 137, 137) 1.5px solid;
}

input[type=text]{
    width: 100%;
    height: 2rem;
    border: none;
    outline: none;
    border-radius: 0 7px 7px 7px ;
    padding: 2px 10px;
    margin-top: 5px;
    font-weight: 300;
    margin-bottom: 15px;
    box-shadow: 2px 1px 7px 1px rgb(219, 218, 218);
}

#fg-pass{
    font-size:0.8rem;
    text-align: center;
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

/*#login-btn:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(25vw);
    margin-left: 330px;
    margin-top: 7.5vh;
    height: calc(90vh);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

#login-btn:active {
    color: rgba(101, 192, 9, 1);
}

#login-btn:active:after {
    background: transparent;
}

#login-btn:hover:before {
    opacity: 1;
}

#login-btn:after {
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
}

@media screen and (max-width:768px) {
    #user-login{
        width: 40vw;
        justify-content: center;
    }
    #login-btn:before {
        width: 40vw;
        margin-left: 115px;
    }
    
}*/

@media screen and (max-width:600px) {
    #user-login{
        width: 50vw;
        justify-content: center;
    }
    /*#login-btn:before {
        width: 50vw;
        margin-left: 40px;
    }*/
}

@media screen and (max-width:425px) {
     #user-login{
        width: 50vw;
        justify-content: center;
    }
    /*#login-btn:before {
        width: 50vw;
        margin-left: 40px;
    }*/
    #line-break1{
        width: 4rem;
    }   
    #line-break2{
        width:4rem;
    }
}

@media screen and (max-width:375px) {
     #user-login{
        width: 50vw;
        justify-content: center;
    }
    /*#login-btn:before {
        width: 50vw;
        margin-left: 40px;
    }*/

    #line-break1{
        width: 2rem;
    }   
    #line-break2{
        width:2rem;
    }
    button{
        font-size: 0.6rem;
    }
}
</style>
