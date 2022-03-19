<template>
    <div id="bar">
        <div id="section1">
            <div id="name">
                <h2>C</h2>
            </div>
            <div id="add-bootle">
                <img src="~/assets/frame39.png"  alt="add" id="cross">
            </div>
            <div id="perks">
                <img src="~/assets/codesandbox.png" alt="perk">
            </div>
            <div id="badges">
                <img src="~/assets/award.png"  alt="badge">
            </div>
            <div id="location">
                <img src="~/assets/map-pin.png" alt="location">
            </div>
            <div id="notifictaion">
                <img src="~/assets/mail.png" alt="location">
            </div>
        </div>
        <div id="section2">
            <div id="dark-mode">
                <img src="~/assets/moon.png" alt="dark">
            </div>
            <div id="log-out">
                <img src="~/assets/log-out.png" alt="logout">
            </div>
            <div id="profile-pic">
                <img src="~/assets/panda.jpg" alt="profile" id="panda" height="30px" width="30px">
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins,'Encode Sans','Open Sans';
}

#bar{
    display: grid;
    height: 97.6vh;
    width: 102px;
    border: none;
    border-radius: 10px 0 0 10px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

#section1{
    display: grid;
    border: none;
    height: 55vh;
    margin-bottom: 110px;
    justify-content: center;
    align-items: center;
}
#section2{
    display: grid;
    border: none;
    height: 23vh;
    justify-content: center;
}
#name{
    font-size: 24px;
    text-align: center;
    font-weight: 600;
}
#panda{
    border-radius: 50%;
    border: none;
}

#cross{
    height: 40px;
    width: 40px
}
</style>