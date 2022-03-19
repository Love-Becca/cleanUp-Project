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
.cartoon{
    width: 40%;
    align-content: flex-end;
    align-items: flex-end;
    padding: 5.5em;

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