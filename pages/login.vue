<template>
<div id="wrap">
    <div class="form">
        <LazyLoginform />
    </div>
    <div class="image-position">
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

#wrap{
    display: flex;
    flex-direction: row;
    margin-left:270px;
}
img{
    border-radius: 50%;
    position: relative; 
    bottom: 20px; 
    left: 270px;
}
@media screen and (max-width:768px) {
    #wrap{
        margin-left: 0px;
        justify-content: center;
        width: 100vw;
    }
    img{
        left:230px;
        bottom:30px;
    }
    
}
@media screen and (max-width:600px) {
    #wrap{
        margin-left: 0px;
        justify-content: center;
        width: 100vw;
    }
    img{
        left:230px;
        bottom:30px;
    }
    
}
@media screen and (max-width:425px) {
     #wrap{
        margin-left: 0px;
        justify-self: center;
    }

    img{
        left:150px
    }
}


@media screen and (max-width:375px) {
    img{
        left: 100px;
    }
}



</style>