<template>
    <div class="maincontent">
        <div class="vid">
            <img src="~/assets/waste.jpg" alt="waste">
        </div>
        <div class="stat">
            <div class="icon"> 
                <div><img src="~/assets/recyclelogo.png" alt="recycle"></div>
                <div>4,800,000</div>
                <div>People Recycling</div>
            </div>
            <div class="icon">
                <div><img src="~/assets/bottle.png" alt="bottle"></div>
                <div>4,800,000</div>
                <div>People Using </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.vid {
    justify-content: center;
    align-items: center;
    object-fit: contain;
}
.vid img{
     max-width: 100%;
}
.maincontent{
    display: flex;
    flex-direction: column;
    padding: 4vw;
}
.stat{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.icon{
    margin: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 2vw;
    color: rgba(0, 0, 0, 0.4);
}
</style>