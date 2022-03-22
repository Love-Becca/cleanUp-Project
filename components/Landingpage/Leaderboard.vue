<template>
    <div class="main">           
            <div class="details">
                <div class="reward">
                    Leaderboard
                </div>
                <div class="maindetail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Consequat, volutpat platea bibendum ut netus volutpat.
                  Magna dolor, diam, feugiat volutpat.
                   Mauris natoque at nisl in venenatis ac parturient vestibulum commodo. 
                   Donec amet mauris, id ac tincidunt ullamcorper tincidunt vulputate. 
                   Lectus nullam bibendum pharetra quam. 
                   Ultricies in viverra fermentum tellus purus lobortis venenatis gravida risus. 
                   Iaculis porta neque euismod odio..

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
    padding: 2vw 5vw;
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
}
.reward{
    font-weight: 700;
    font-size: 3vw;
    line-height: 2vw;
    color: #000000;
    padding-bottom: 1vw;
}
.maindetail{
    opacity: 0.6;
    font-weight: 400;
    font-size: 1.5vw;
    line-height: 1.8vw;
    color: #000000;
    text-align: justify;
}
</style>