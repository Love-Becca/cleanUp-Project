<template>
    <div id="container">
        <div id="locate">
            <h2>Location</h2>
         <img src="~/assets/googlemap.png" alt="location"  width="900px" height="530px">
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
    height: 97.6vh;
    width: 60.375rem;
    border:none;
    background-color: #E5E5E5;
    padding: 20px 30px;
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
</style>