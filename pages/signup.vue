<template>
<div class="section">
    <div class="sign">
        <LazySignupform />
    </div>
    <div class="comp">
        <LazyBottlecomp />
        <a href="#"><img src="../assets/whatsapp.jpg" height="55px" width="55px" alt="whatsapp icon"></a>
    </div>
</div>
</template>

<style scoped>

*{
    padding: 0;
    margin: 0;
}

.section{
    display: flex;
    flex-direction: row;
    margin-left: 270px;
}

img{
    border-radius: 50%;
    position: relative; 
    bottom:20px; 
    left:270px;
}
@media screen and (max-width:768px) {
    img{
        left: 250px;
    }
    .section{
        margin-left: 0px;
    }
}

@media screen and (max-width:425px) {
    img{
        left: 140px;
    }
}

@media screen and (max-width:375px) {
    img{
        left: 110px;
    }
}
</style>
