<template>
    <div class="main">
        <h2>Subscribe To Our Newsletter</h2>
        <input type="text" name="email" placeholder="Email Address"><font-awesome-icon icon='location-arrow' class="arrow"/>
        <div id="details">
            <div id='container'>
                <div id="section">
                    <div id="services">
                        <h4>Services</h4>
                        <p>Collect Recyclables</p>
                        <p>Deposit Recyclables</p>
                        <p>Franchise</p>
                        <p>Recycle</p>
                    </div>
                    <div id="about">
                        <h4>About Us</h4>
                        <p>Leaderboard</p>
                        <p>Reward</p>
                        <p>Eco-Innovation</p>
                        <p>Partners</p>
                        <p>Join Us</p>
                    </div>
                </div>
                <div id="connect">
                    <h4>Connect with us to get updated on recycling</h4>
                    <div id="social">
                        <img src="~/assets/icons8-facebook.svg" alt="facebook">
                        <img src="~/assets/instagram.svg" alt="instagram">
                        <img src="~/assets/linkedin.svg" alt="linkedin">
                        <img src="~/assets/twitter.svg" alt="twitter">
                    </div>
                </div>
            </div>
            <div id="contactus">
                <h4>Contact Us</h4>
                <p>Clean Up Address</p>
                <p id="ogun">50, FUNAAB,Alabata-Abeokuta,Ogun,Nigeria.</p>
                <p>Phones:+2349096804331, +2349038543480</p>
                <p>for enquires:founder@CleanUp.com</p>
                <p>for complaints:support@CleanUp.com</p>
            </div>
        </div>
    </div>        
</template>


<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, 'Encocde Sans', 'Open Sans';
}
.main{
    background-color:  #4c9800;
    opacity: 0.8;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3vw 5vw;
}
h2{
    font-size: 2vw;
    font-weight: 600;
    opacity: 0.8;
    align-self: center;

}
input{
    width: 40%;
    align-self: center;
    border-radius: 7px;
    border: none;
    outline:none;
    padding: 1vw 4vw 1vw 2vw;
}

.arrow{
    width: 40%;
    color: grey;
    position: relative; 
    bottom: 2.3vw; 
    left: 41vw;
} 

#details{
    display: flex;
    flex-direction: row;
    padding: 1vw;
}

#section{
    display: flex;
    flex-direction: row;
}

#container{
    width: 70%;
    border:none;
}

#contactus{
    width: 30%;
    border-left: blue 1px solid;
    padding: 1vw 0vw 1vw 2vw;
}

#connect{
    padding: 2vw 0px;
}

h4{
    font-size: 1.2vw;
    font-weight: 600;
    opacity: 0.8;
    align-self: center;
    margin-bottom: 1vw;
}
p{
    color: rgb(228, 228, 228);
    font-weight: 300;
    font-size: 1vw;
    text-align: justify;
}

#ogun{
    margin-bottom: 2vw;
}

#services{
    border-left: red 1px solid;
    width: 50%;
    padding: 1vw 0 1vw 2vw;
}

#about{
    border-left:gold 1px solid;
    width: 50%;
    padding: 1vw 0vw 1vw 2vw;
}

img{
    height: 40px;
    width: 40px;
}

@media screen and (max-width: 700px) {
    .arrow{
        visibility: hidden;
    }
    img{
        height: 25px;
        width:25px;
    }
}
</style>