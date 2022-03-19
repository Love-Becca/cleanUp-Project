<template>
    <div id="notify">
        <div id="section">
            <h2>Notifications</h2>
            <img src="~/assets/bell.svg"  alt="bell">
        </div>
        <div id="content">
            <h3>Picker</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam quis varius hendrerit nunc hac nunc suspendisse tellus.</p>
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
    height: 97.6vh;
    padding: 40px 25px 20px 25px;
    background-color: rgba(42, 42, 42, 1);
    border-radius: 0 16px 16px 0;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

#section{
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
}

#content{
   border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
}

h2{
    width: 80%;
    font-size: 15px;
    font-weight: 600;
    color: rgba(101, 192, 9, 1);
}

h3{
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
    margin-bottom: 10px;
}

p{
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
    text-align: justify;
}
</style>