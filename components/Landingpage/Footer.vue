<template>
    <div class="main">
        <h2>Subscribe To Our Newsletter</h2>
        <input type="text" name="email" placeholder="Email Address"><font-awesome-icon icon='location-arrow' class="arrow"/>
        <h3>Services</h3>
        <a href="url">Collect Recyclables</a>
         <a href="url">Deposit Recyclables</a>
         <a href="url">Franchise</a>
      <a href="url">Recycle</a>
      
      <div class="about"> <h3>About Us</h3>
      </div>
    <div class="about1"> <a href="url">Leaderboard</a><br>
         <a href="url">Reward</a><br>
         <a href="url">Eco-Inovation</a><br>
      <a href="url">Partners</a><br>
        <a href="url">Join Us</a>
    </div>
      <div class="contact"> <h3>Contact Us</h3>
      </div>
      <div class="contact1">
          <h4>CleanUp HQ
50, FUNAAB, Alabata-Abeokuta, Ogun, Nigeria. <br>

Phones: +234 909 743 9630, +234 909 743 9630 <br>
for enquiries: founders@CleanUp.com <br>
for complaints: wesupport@CleanUp.com</h4>
      </div>
      <div class="connect"><h3 >Connect with us for the latest recycling news and tips</h3></div>
       <div class="copyright"><h6 >© Copyright 2022 Team CleanUp. All rights reserved.</h6></div>
  <img src="~/assets/instagram.png" alt="" width="50" height="50">
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
    max-width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;
}
h2{
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
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
h3{
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;

}
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a{
    color: #ffffff;
}

.about{
    position: relative;
    left: 25%;
    bottom: 38%;
}
.about1{ position: relative;
    left: 25%;
    bottom: 39%;

}
.contact{ position: relative;
    left: 60%;
    bottom: 84%;

}
.contact1{ position: relative;
    left: 60%;
    bottom: 84%;
     font-size: 15px;
    font-weight: 10;
    color: #ffffff;


}
.connect{
     position: relative;
    left: 0%;
    bottom: 70%
}
.copyright{position: relative;
    left: 36%;
    bottom: 48%


}
img{
    position: relative;
    left: 0%;
    bottom: 75%
}
</style>