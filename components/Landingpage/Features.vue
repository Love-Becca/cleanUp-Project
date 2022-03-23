<template>
    <div class="main">
        <div class="top">
            Features
        </div>
        <div class="content">
            <div class="cartoon">
               <img src="~/assets/featuregifts.png" alt="gifts">
            </div>
            <div class="details">
                <div class="reward">
                    Reward
                </div>
                <div class="maindetail">
                     Check out  how to get rewarded for your plastic waste
                      on your Dashboard through accumulation of points 
                      in order to claim perks and swags.
                    <b>GET REWARDED WHILE YOU CleanUP THE PLANET!</b>


                </div>
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
    padding: 2vw 5vw 0 5vw;
}
.top{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3.5vw;
    line-height: 5vw;
    color: #000000;
    opacity: 0.3;

}
.content{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.cartoon{
    width: 40%;
    align-content: center;
    align-items: center;
    object-fit: contain;
    padding: 4vw;

}
.details{
    width: 60%;
    font-family: 'Poppins';
    font-style: normal;
    display: flex;
    flex-direction: column;
}
.cartoon img{
    max-width: 100%;
}
.reward{
    font-weight: 700;
    font-size: 2.5vw;
    line-height: 1vw;
    color: #000000;
    padding-bottom: 3vw;
}
.maindetail{
    opacity: 0.6;
    font-weight: 400;
    font-size: 1.3vw;
    line-height: 1.8vw;
    color: #000000;
    text-align: justify;
}
@media screen and (max-width:800px) {
    .maindetail{
        font-size: 2vw;
        line-height: 2vw;
    }
}
</style>