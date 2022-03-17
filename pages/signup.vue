<template>
<div class="section">
    <div class="sign">
        <signupform />
    </div>
    <div class="comp">
        <bottlecomp />
        <a href="#"><img src="../assets/whatsapp.jpg" height="55px" width="55px" alt="whatsapp icon" :style="{position:'relative', bottom:'20px', left:'270px'}"></a>
    </div>
</div>
</template>

<style scoped>

*{
    padding: 0;
    margin: 0;
}

.section{
    display: flex;
    flex-direction: row;
    margin-left: 270px;
}

img{
    border-radius: 50%;
}
</style>
