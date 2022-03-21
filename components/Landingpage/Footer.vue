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
                        <font-awesome-icon icon='envelope' />
                        <font-awesome-icon icon='envelope' />
                        <font-awesome-icon icon='envelope' />
                        <font-awesome-icon icon='envelope' />
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
    height: 75vh;
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;
}
h2{
    font-size: 18px;
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
    padding: 10px 40px 10px 20px;
}

.arrow{
    width: 40%;
    color: grey;
    position: relative; 
    bottom: 28px; 
    left: 35rem;
}

#details{
    display: flex;
    flex-direction: row;
    padding: 20px;
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
    padding: 10px 0px 10px 20px;
}

#connect{
    padding: 40px 0px;
}

h4{
    font-size: 17px;
    font-weight: 600;
    opacity: 0.8;
    align-self: center;
    margin-bottom: 20px;
}
p{
    color: rgb(228, 228, 228);
    font-weight: 300;
    font-size: 0.9rem;
    text-align: justify;
}

#ogun{
    margin-bottom: 30px;
}

#services{
    border-left: red 1px solid;
    width: 50%;
    padding: 10px 0px 10px 20px;
}

#about{
    border-left:gold 1px solid;
    width: 50%;
    padding: 10px 0px 10px 20px;
}
</style>