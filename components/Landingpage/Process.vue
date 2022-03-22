<template>
    <div class="main">
        <h1>The Process</h1>
        <div class="content">
            <div class="cartoon1">
               <img src="~/assets/vector.png" alt="gifts"> <div class="collect">Collect Recyclables</div>
            </div>
            <div class="cartoon2">
               <img src="~/assets/vector.svg" alt="gifts"><div class="depo">Deposit Recyclables</div>
            </div>
            <div class="cartoon3">
               <img src="~/assets/vector.svg" alt="gifts"> <div class="fran"> Franchise</div>
            </div>
               <div class="cartoon4">
               <img src="~/assets/vector (1).png" alt="gifts"><div class="recycle">Recycle</div>
            </div>
        </div>
    </div>
</template>


<style scoped>
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, 'Encocde Sans', 'Open Sans';
}

.main{
    background-color: rgba(299, 299, 299, 1);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vw 5vw;
}
h1{
    font-weight: 700;
    font-size: 3vw;
    opacity: 0.3;
    margin-bottom: 1vw;
}
.content{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    text-align: center;
    font-weight: 600;
}
.content div div{
    font-size: 2vw;
}
</style>