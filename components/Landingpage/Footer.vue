<template>
    <div class="main">
        <h2>Subscribe To Our Newsletter</h2>
        <input type="text" name="email" placeholder="Email Address"><font-awesome-icon icon='location-arrow' class="arrow"/>
    </div>        
</template>


<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, 'Encocde Sans', 'Open Sans';
}
.main{
    background-color:  #4c9800;
    max-width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;
}
h2{
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    align-self: center;

}
input{
    width: 40%;
    align-self: center;
    border-radius: 7px;
    border: none;
    outline:none;
    padding: 10px 40px 10px 20px;
}

.arrow{
    width: 40%;
    color: grey;
    position: relative; 
    bottom: 28px; 
    left: 35rem;

}

</style>