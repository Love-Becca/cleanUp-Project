<template>
    <div id="notify">
        <div id="section">
            <h2>Notifications</h2>
            <img src="~/assets/bell.svg"  alt="bell">
        </div>
        <div id="content">
            <h3>Eco Saver</h3>
            <p>You just finish stage 1 Eco saver, you got yourself a perk, check for what you won.</p>
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

#notify{
    display: flex;
    flex-direction: column;
    width: 23.25rem;
    padding: 40px 25px 20px 25px;
    border-radius: 0 16px 16px 0;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

#section{
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
}

#content{
    border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
}

h2{
    width: 80%;
    font-size: 15px;
    font-weight: 600;
    color: rgba(101, 192, 9, 1);
}

h3{
    font-size: 15px;
    color:rgba(0, 0, 0, 0.6);
    font-weight: 600;
    margin-bottom: 10px;
}

p{
    font-size: 11px;
    color: rgba(0, 0, 0, 0.6);
    text-align: justify;
}
</style>