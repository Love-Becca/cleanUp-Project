<template>
<div id="wrap">
    <div class="form">
        <loginform />
    </div>
    <div class="image-position">
        <bottlecomp />
        <img src="../assets/whatsapp.jpg" height="55px" width="55px" alt="whatsapp icon" :style="{position:'relative', bottom:'20px', left:'270px'}">
    </div>
</div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}

#wrap{
    display: flex;
    flex-direction: row;
    margin-left:270px;
}
img{
    border-radius: 50%;
}
</style>