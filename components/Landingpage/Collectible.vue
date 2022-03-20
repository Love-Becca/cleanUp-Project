<template>

<div class="main">
        <div class="top">
            Collectibles
</div>
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
.main{
    background-color:  rgba(128, 255, 0, 0.09);
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2em 5em 0em 5em;
}
.top{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #000000;
    opacity: 0.3;

}
.content{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.glass{
    width: 578px;
    height: 277px;
    top: 3034px;
    left: 132px;
}
.plastic{
    width: 566px;
    height: 277px;
    top: 3034px;
    left: 726px;
}







</style>