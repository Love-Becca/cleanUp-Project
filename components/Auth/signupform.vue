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
                <form @submit.prevent="createUser">
                 <label for="username">Username</label><br>
                <input type="name" name="username" placeholder="Username" v-model="form.name"  minlength="6" maxlength="50" ><font-awesome-icon icon="user" class="move"  />
                </form>
            </div>
            <div id="info2">
                <form @submit.prevent="createUser">
                    <label for="email">Email Address </label><br>
                    <input type="email" name="email" placeholder="Email Address"  v-model="form.email" minlength="6" maxlength="100"><font-awesome-icon icon="envelope" class="move" /> 
                </form>
            </div>
            <div id="info3">
                <form @submit.prevent="createUser">
                    <label for="password">Password</label><br>
                    <input type="password" name="password" placeholder="Password" v-model="form.password" minlength="6" maxlength="15" class="eye">
                </form>
            </div>
            <!---<div id="info4">
                <form @submit.prevent="createUser">
                    <label for="cfpassword">Confirm Password</label><br>
                    <input type="passwordconfirm" name="cfpassword" placeholder="Confirm Password" v-model="form.passwordconfirm" minlength="6" maxlength="15" class="eye">
                </form>
            </div>-->
            <div id="info5">
                <form>
                    <label for="phonenumber">Phone Number</label><br>
                    <input type="text" name="phonenumber" placeholder="+234" minlength="10" maxlength="20" v-model="form.text"><font-awesome-icon icon="inbox" class="move"  />
                </form>
            </div>
            <button><img src="~/assets/googleicon.jpg" alt="google icon"><a href="#">Login With Google</a></button>
            <div id="easy-login">
                <p>Already have an account?<span id="login"><nuxt-link to="/login">login</nuxt-link></span></p>
            </div>
            <div id="submit-btn">
                <form @submit.prevent="createUser">
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

input[type=text],[type=password], [type=name], [type=email], [type=passwordconfirm]{
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
    width: 15px;

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
    input[type=submit]{
        margin-top: 2.2vh;
    }
}

@media screen and (max-width:600px) {
    .move{
        left: 27.5vw;
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

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        //passwordconfirm:"",
      },
    };
  },
  methods: {
    async createUser() {
      this.$toast.info('Creating your account...')
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.form.email,
          this.form.password,
          this.form.name,
          //this.passwordconfirm,
        );
         this.$router.push("/login");
         this.$toast.success("Account created successfully, kindly login")
      } catch (error) {
        this.$toast.error(error.message)
      }
    },
  },
};
</script>