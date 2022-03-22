<template>
    <div class="main">
        <h1>Collectibles</h1>  
        <div class="content">
            <div class="glass">
                <img src="~/assets/glass.png" alt="gifts">
            </div>
            <div class="glass">
                <img src="~/assets/plastic.png" alt="gifts">
            </div>
        </div>
    </div>
</template>


<style scoped>
*{
    padding: 0;
    margin: 0;
    font-family: Poppins, 'Encocde Sans', 'Open Sans';
    box-sizing: border-box;
}

.main{
    background-color:  rgba(128, 255, 0, 0.09);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vw 5vw;
}
h1{
    font-weight: 700;
    font-size: 3vw;
    line-height: 4vw;
    opacity: 0.3;

}
.content{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1vw;
}
.content div{
    display: flex;
    object-fit: contain;
    width: 100%;
    justify-content: center;
    align-items: center;
}
img{
   width: 100%;
}
</style>