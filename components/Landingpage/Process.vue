<template>
    <div class="main">
        <div class="top">
            The Process
        </div>
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
.main{
    background-color:  #ffffff;
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
.cartoon1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: static;
    width: 300px;
    height: 100px;
    left: 32.08%;
    right: 32.08%;
    top: 0px;

}

.cartoon2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: static;
    width: 250px;
    height: 93px;
    left: 32.04%;
    right: 32.04%;
    top: 0px;
    bottom: 48.39%;

}
.cartoon3{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: static;
    width: 250px;
    height: 93px;
    left: 32.04%;
    right: 32.04%;
    top: 0px;
    bottom: 48.39%;

}
.cartoon4{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: static;
    width: 250px;
    height: 93px;
    left: 32.04%;
    right: 32.04%;
    top: 0px;
    bottom: 48.39%;

}
.collect{
    font-family: Roboto;
    font-style: SemiBold;
    font-size: 18px;
    line-height: 21px;
    align: left;
    vertical-align: top;

}
.depo{
    font-family: Roboto;
    font-style: SemiBold;
    font-size: 18px;
    line-height: 21px;
    align: left;
    vertical-align: top;

}
.fran{
    font-family: Roboto;
    font-style: SemiBold;
    font-size: 18px;
    line-height: 21px;
    align: left;
    vertical-align: top;

}
.recycle{
    font-family: Roboto;
    font-style: SemiBold;
    font-size: 18px;
    line-height: 21px;
    align: left;
    vertical-align: top;

}

</style>