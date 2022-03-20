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
                <input type="text" name="username" placeholder="Username" minlength="6" maxlength="50"><font-awesome-icon icon="user" class="move"  />
                </form>
            </div>
            <div id="info2">
                <form>
                    <label for="email">Email Address </label><br>
                    <input type="text" name="email" placeholder="Email Address" minlength="6" maxlength="100"><font-awesome-icon icon="envelope" class="move" /> 
                </form>
            </div>
            <div id="info3">
                <form>
                    <label for="password">Password</label><br>
                    <input type="password" name="password" placeholder="Password" minlength="6" maxlength="15" class="eye">
                </form>
            </div>
            <div id="info4">
                <form>
                    <label for="cfpassword">Confirm Password</label><br>
                    <input type="password" name="cfpassword" placeholder="Confirm Password" minlength="6" maxlength="15" class="eye">
                </form>
            </div>
            <div id="info5">
                <form>
                    <label for="phonenumber">Phone Number</label><br>
                    <input type="text" name="phonenumber" placeholder="+234" minlength="10" maxlength="20"><font-awesome-icon icon="inbox" class="move"  />
                </form>
            </div>
            <button><img src="../assets/googleicon.jpg" alt="google icon"><a href="#">Login With Google</a></button>
            <div id="easy-login">
                <p>Already have an account?<span id="login"><nuxt-link to="/login">login</nuxt-link></span></p>
            </div>
            <div id="submit-btn">
                <form>
                    <nuxt-link to="/login"><input type="submit" value="Sign Up"></nuxt-link>
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

input[type=text],[type=password]{
    width: 100%;
    height: 2rem;
    border: none;
    outline: none;
    border-radius: 0 7px 7px 7px ;
    padding: 2px 30px 2px 10px;
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

input[type=submit]:hover{
    cursor: pointer;
    
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
    border: none;
}

img{
    position: relative;
    top: 5px;
    right: 10px;
    border-radius: 50%;
}

a{
    text-decoration: none;
    color: rgba(101, 192, 9, 1);
}

form{
    height: 5.2rem;
}

.move{
    color: grey;
    position: relative; 
    bottom: 30px; 
    left: 16rem;
}

.eye{
    padding: 2px 8px 2px 10px;
}

@media screen and (max-width:768px) {
    #user-info{
        width: 40vw;
        justify-content: center;
    }
    form{
        height: 4rem;
    }
    .move{
        left: 11.5rem;
    }
}

@media screen and (max-width:600px) {
    #user-info{
        width: 50vw;
        justify-content: center;
    }
    .move{
        left: 11rem;
    }
}

@media screen and (max-width:425px) {
     #user-info{
        width: 50vw;
        justify-content: center;
        padding: 10px 20px ;
    }
    .move{
        left: 9.3rem;
    }
}

@media screen and (max-width:375px) {
     #user-info{
        width: 50vw;
        justify-content: center;
    }
    p{
        font-size: 0.5rem;
    }

    button{
        font-size: 0.6rem;
    }
    #user-info{
        padding: 10px;
    }
    .move{
        left: 9rem;
    }
}

@media screen and (max-width:320px) {
    .move{
        left: 7.5rem;
    }
}

</style>