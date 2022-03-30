<template>
    <div class="main">           
            <div class="details">
                <div class="reward">
                    Leaderboard
                </div>
                <div class="maindetail">
                    View Top contributors of the week and find out where you stand on the Leaderboard. To qualify to be on the leader board   <nuxt-link to="/signup" :style="{'text-decoration':'none'}"><span>create an account</span></nuxt-link>
                </div>  
            </div>
             <div class="cartoon">
               <img src="~/assets/leaderboardhero.png" alt="Hero Leader">
            </div>
    </div>
</template>
<style scoped>
.main{
    background-color: rgba(299, 299, 299, 1);
    max-width: 100%;
    display: flex;
    flex-direction: row;
    padding: 4vw 5vw;
}
.cartoon{
    width: 40%;
    padding: 3vw 0 2vw 8vw;
    object-fit: contain;
}
.cartoon img{
    max-width: 100%;
}
.details{
    width: 60%;
    font-family: 'Poppins';
    font-style: normal;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-right: 15vw ;
}
.reward{
    font-weight: 700;
    font-size: 2.5vw;
    line-height: 2vw;
    color: #000000;
    padding-bottom: 2.5vw;
}
.maindetail{
    opacity: 0.6;
    font-weight: 400;
    font-size: 1.3vw;
    line-height: 1.8vw;
    color: #000000;
    text-align: justify;
}

span{
    color:rgba(101, 192, 9, 1);
    text-decoration: none;
}
</style>