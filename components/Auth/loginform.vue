<template>
    <div id="login">
        <div id="cleanup-logo">
            <h1>Clean<span>Up</span></h1>
        </div>
        <div id="user-login">
            <div id="sign-in">
                <h2>Login!</h2>
            </div>
            <button><img src="~/assets/googleicon.jpg" alt="google icon"><a href="#">Login With Google</a></button>
            <div id="line-break">
                <div id="line-break1"></div>
                <p id="line">or</p>
                <div id="line-break2"></div>
            </div>
            <div id="email-in">
                <form @submit.prevent="loginUser" >
                    <label for="email">Email Address </label><br>
                    <input type="text" name="email" placeholder="Email Address" v-model="form.email" minlength="6" maxlength="100"><font-awesome-icon icon="envelope" class="inbox"/>
                </form>
            </div>
            <div id="password-in">
                <form @submit.prevent="loginUser">
                    <label for="password">Password</label><br>
                    <input type="password" name="password" placeholder="Password" v-model="form.password" minlength="6" maxlength="100" class="eye">
                </form>
            </div>
            <div id="forget-pass">
                <p id="fg-pass">Forget Password?<a href="#"> Click here.</a></p>
            </div>
            <div id="login-btn">
                <form @submit.prevent="loginUser">
                    <input type="submit" value="Login">
                </form>
            </div>
            <p id="sign">Dont have an account? <nuxt-link to="/signup">Sign Up</nuxt-link></p>
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
    padding: 50px 30px;
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

#sign{
    color: rgb(146, 146, 146);
    font-size: 0.8rem;
    text-align: center;
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

input[type=text],[type=password]{
    width: 100%;
    height: 2rem;
    border: none;
    outline: none;
    border-radius: 0 7px 7px 7px ;
    padding: 2px 30px 2px 10px;
    margin-top: 5px;
    font-weight: 300;
    margin-bottom: 15px;
    box-shadow: 2px 1px 7px 1px rgb(219, 218, 218);
}

#fg-pass{
    font-size:0.8rem;
    text-align: center;
    color: rgb(146, 146, 146);
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

input[type=submit]:hover {
    cursor: pointer;
}

button{
    background-color: white;
    height: 2rem;
    width: 95%;
    border-radius:5px;
    border: none;
    box-shadow: 1px 1px 1px rgb(167, 165, 165);
}

a{
    text-decoration: none;
    color: rgba(101, 192, 9, 1);
}

.inbox{
    color:grey;
    position: relative; 
    bottom:45px; 
    left: 16rem;
}

.eye{
    padding: 2px 8px 2px 10px;
}

@media screen and (max-width:768px) {
    #user-login{
        width: 40vw;
        justify-content: center;
    }
    
}

@media screen and (max-width:600px) {
    #user-login{
        width: 50vw;
        justify-content: center;
    }
}

@media screen and (max-width:425px) {
     #user-login{
        width: 50vw;
        justify-content: center;
    }
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

<script>
export default {
    data(){
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
    async loginUser() {
        this.$toast.info('Logging in...')
      try {
       const response =  await this.$fire.auth.signInWithEmailAndPassword(
          this.form.email,
          this.form.password
        );
        this.$toast.success('Logged in!')
        this.$router.push("/dashboard");
        console.log(response)
        this.$store.dispatch("onAuthStateChangedAction", {authUser: response.user})
      } catch (error) {
       this.$toast.error(error.message)
      }
    }
    }
}
</script>