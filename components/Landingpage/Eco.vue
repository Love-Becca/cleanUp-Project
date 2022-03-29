<template>
   <div id="main">
       <div id="logo">
           <img src="~/assets/adventure.png" alt="gifts">
       </div>
       <div id="details">
           <h1> Eco Innovation</h1>
           <p>Eco-Innovation is a CLEANUP initiative that is designed to increase the use of plastic waste. This initiative supports small and medium-scale local recycling operations in rural regions and is open to anybody who can come up with unique product ideas to produce from collected plastics around.
                These product concepts should be of high quality and, ideally, have little or no market competition from new plastic items. Here are some of our CleanUp product ideas:Planters for houseplants, Bricks for construction, Rugs and mats, Bags and sacks.
            </p>
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
#main{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgba(128, 255, 0, 0.09);
    border: none;
    padding: 30px;
}

#logo{
    width: 50%;
    padding: 1vw 4vw;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
}

#details{
    width: 60%;
}

h1{
    font-weight: 700;
    font-size: 2.5vw;
    margin-bottom: 2vw;
}
p{
    font-size: 1.3vw;
    font-weight: 400;
    opacity: 0.6;
    text-align: justify;
}
@media screen and (max-width: 700px){
    img{
        width: 99px;
        height: 67px;
    }    
}
</style>