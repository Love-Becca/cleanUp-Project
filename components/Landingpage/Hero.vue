<template>
<div class="main">
    <div class="top">
        <div class="logo">
                <span class="clean">Clean</span><span class="up">Up</span>
        </div>
        <div class="nav">
             <nav>
                <a href="##">Home</a>
                <a href="##">About</a>
                <a href="##">Contact</a>
                <button class="signin"><nuxt-link to="/login">Sign in</nuxt-link></button>
            </nav>
        </div>
    </div>
    <div class="div-container">
        <div class="left">
            <div class="gval">
                <div class="static-txt">
                    Get Value For Plastic Waste
                </div>
                <div class="dynamic-text">
                    <li><span style="color: rgb(50, 248, 43) ;">Today</span></li>
                    <li><span style="color: rgb(200, 252, 13);">Tomorrow</span></li>
                    <li><span style="color:  rgb(11, 61, 201);">Everyday</span></li>
                </div>
                
            </div>
            <div class="cont1">
                From 2.3 million tons in 1950 to 448 million tons in 2015, plastic production has grown at an exponential rate.
                Single-use plastics account for 40% of all plastics manufactured each year, and these items end up as waste, polluting land and aquatic bodies.
                <b>CleanUP</b> is a platform that collects plastic waste by rewarding environmentally conscious individuals who dropdrop their plastic waste to one of our many collectors.
                <b>CleanUP</b> provides an effective and efficient waste collection system

            </div>
            <div class="btn">
                <button> <nuxt-link to="/signup">Create an Account Free</nuxt-link></button>
            </div>
        </div>
        <div class="right">
            <img src="~/assets/trashcan.png" alt="trash cans">
        </div>
            
    </div>
</div>    
</template>
<style scoped>
*{
    box-sizing: border-box;
}
.main{
    background-color: rgb(9, 170, 3);
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: linear-gradient(95deg, rgb(9, 170, 3) 55%, #0066FF 130%);
    padding: 2rem 5rem;
}
.top{
    display: flex;
    flex-direction: row;
    /* align-items: space-between; */
    width: 100%;
}
.div-container{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.right,.left{
    display: flex;
    flex-direction: column;
    width: 50%;
}
.right{
    justify-content: center;
    align-items: center;
    object-fit:contain;
    max-width: 50%;
    max-height: 50%;
}
.gval{
font-family: -apple-system, BlinkMacSystemFont,
 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.3rem;
line-height: 4.6rem;
color: white;
margin: 5% 0;
}
.cont1{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 24px;
color: #FFFFFF;
margin: 20px 0;
}
.clean{
font-family: -apple-system, BlinkMacSystemFont,
 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.5rem;
line-height: 28px;
margin: 0;

color: #ffffff;

}
.up{
font-family: -apple-system, BlinkMacSystemFont,
 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.5rem;
line-height: 28px;
margin: 0;

color: rgba(0, 0, 0, 0.71);
}
.logo{
    align-content: flex-start;
    width: 50%;
}
.btn button{
background: #00BB3B;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
.dynamic-text{
    height: 90px;
    line-height: 90px;
    overflow: hidden;
}
.dynamic-text li{
    list-style: none;
    font-family: 'Poppins';
    font-size: 60px;
    font-weight: 500;
    animation: slide 4.5s steps(3) infinite;
    position: relative;
    top: 0;
}
@keyframes slide {
    100%{
        top: -270px;
    }
}
.dynamic-text li span{
    position: relative;
}
.dynamic-text li span::after{
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    border-left: 2px solid;
    background:  rgb(9, 170, 3);
    animation: typing 1.5s steps(8) infinite;
}
@keyframes typing {
    100%{
        left: 100%;
        margin: 0 -35px 0 35px;
    }
    
}
.btn button a{
font-family: -apple-system, BlinkMacSystemFont,
 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
  'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
text-decoration: none;
padding: 15px;
}
.nav{
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: right;
}
nav a{
    margin-right: 2em;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    color:white;

}
nav a:last-child{
    margin-right: 0;
}
nav a:active{
    font-weight: bold;
    color: black;
}
nav a:hover{
    border-bottom: 2px solid #FFFFFF;
    padding-bottom: 2px;
    font-weight: bold;
}
nav a:last-child:hover{
    border-bottom: none;
    font-weight: bolder;

}
.signin{
    background: transparent;
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px 0px;
}
.signin a{
      padding: 3rem;
      font-weight: 500;
}


</style>

