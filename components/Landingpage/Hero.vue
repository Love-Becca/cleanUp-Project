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
                <button class="signin"><a href="##">Sign in</a></button>
            </nav>
        </div>
    </div>
    <div class="div-container">
        <div class="left">
            <div class="gval">
                Get Value For Plastic Waste
            </div>
            <div class="cont1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
                tristique aliquam laoreet mollis. Arcu adipiscing congue hendrerit
                sed sapien. Vestibulum suscipit enim donec nisl eu diam. Mauris
                fermentum in orci gravida bibendum eget. Nunc pretium luctus
                fames
            </div>
            <div class="btn">
                <button><a href="#"> Create an Account Free</a></button>
            </div>
        </div>
        <div class="right">
            <!-- insert the picture here and align to center -->
        </div>
            
    </div>
</div>    
</template>
<style scoped>
*{
    box-sizing: border-box;
}
.main{
    background-color: rgb(66, 255, 0);
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: linear-gradient(113.4deg, rgba(66, 255, 0, 0.81) -26.46%, #0066FF 113.47%);
    padding: 2em 5em;
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
.gval{
font-family: -apple-system, BlinkMacSystemFont,
 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 70px;
line-height: 74px;
color: white;
margin: 100px 0;
}
.cont1{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
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
font-size: 24px;
line-height: 28px;
margin: 0;

color: #FFFFFF;

}
.up{
font-family: -apple-system, BlinkMacSystemFont,
 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
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
/* .btn button::before,.btn button::after{
    content: "";
    top: -2px;
    left: -2px;
    position: absolute;
    background: linear-gradient(45deg 
    rgba(66, 255, 0, 0.81), 
    #0066FF,
    red,
    orange);
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: glow 20s linear infinite;
}
.btn button::after{
    filter: blur(30px);
}
@keyframes glow {
    0%{
        background-position: 0 0;
    }
    50%{
        background-position: 400% 0;
    }
    100%{
        background-position: 0 0;
    }
    
} */
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
    margin-right: 30px;
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
}
nav a:last-child:hover{
    border-bottom: none;
    color: black;

}
.signin{
    background: transparent;
    border: 2px solid white;
    border-radius: 10px;
    padding: 10px 0px;
}
.signin a{
      padding: 50px;
      font-weight: bold;
}


</style>
