<template>
    <div id="container">
        <div id="locate">
            <h2>Location</h2>
         <img src="~/assets/googlemap.png" alt="location"  width="980px" height="530px">
        </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins,'Encode Sans','Open Sans';
}

#container{
    width: 90vw;
    border:none;
    background-color: #E5E5E5;
    padding: 20px;
}

img{
    border-radius: 30px;
}

h2{
    color:rgba(0, 187, 59, 1);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
}

@media screen and (max-width:900px) {
    #container{
        width: 70vw;
    }

    img{
        height: 60vh ;
        width:60vw;
    }

}
</style>