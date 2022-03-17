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
                 <font-awesome-icon icon="user"/>
                <input type="text" name="username" placeholder="Username">
                </form>
            </div>
            <div id="info2">
                <form>
                    <label for="email">Email Address </label><br>
                    <input type="text" name="email" placeholder="Email Address"><font-awesome-icon icon="envelope"/>
                </form>
            </div>
            <div id="info3">
                <form>
                    <label for="password">Password</label><br>
                    <input type="text" name="password" placeholder="Password"><font-awesome-icon icon="eye-slash"/>
                </form>
            </div>
            <div id="info4">
                <form>
                    <label for="cfpassword">Confirm Password</label><br>
                    <input type="text" name="cfpassword" placeholder="Confirm Password"><font-awesome-icon icon="eye-slash"/>
                </form>
            </div>
            <div id="info5">
                <form>
                    <label for="phonenumber">Phone Number</label><br>
                    <input type="text" name="phonenumber" placeholder="+234"><font-awesome-icon icon="inbox"/>
                </form>
            </div>
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
    height: 97vh;
    /*background-image: url('../assets/bottle.jpg');
    background-size: cover;*/
}

#cleanup{
    color:rgb(146, 146, 146);
    font-size: 0.5rem;
    border: none;
    height: 6vh;
   /*justify-self: center;*/
    width: 50%;
    margin-left:30px;
}
span{
    color: black;
}

#user-info{
    display: grid;
    grid-template-rows: auto auto auto auto auto auto auto auto;
    /*justify-self:center;*/
    width: 65%;
    height: 85vh;
    border: none;
    border-radius: 20px;
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
    margin-bottom: 15px;
    background-color: aliceblue;
    box-shadow: 2px 1px 7px 1px rgb(114, 113, 113);
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
    color: rgb(2, 187, 2);
}

input[type=submit]{
    width: 100%;
    height: 2.5rem;
    background-color: rgb(2, 187, 2);
    color: whitesmoke;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px rgb(80, 79, 79);
}
label{
    font-size: 0.8rem;
    font-weight: 500;
}

::placeholder{
    font-weight: 300;
}
</style>