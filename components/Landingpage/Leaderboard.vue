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
               <!-- Put the cartoon here -->
            </div>
    </div>
</template>
<style scoped>
.main{
    background-color:  rgba(128, 255, 0, 0.22);
    max-width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2em 5em;
}
.cartoon{
    width: 50%;
}
.details{
    width: 50%;
    font-family: 'Poppins';
    font-style: normal;
    display: flex;
    flex-direction: column;
}
.reward{
    font-weight: 700;
    font-size: 36px;
    line-height: 26px;
    color: #000000;
    padding-bottom: 1em;
}
.maindetail{
    opacity: 0.6;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
}
</style>