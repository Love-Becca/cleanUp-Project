<template>
    <div class="image-bottle">
        <img src="~/assets/bottle.jpg" alt="bottle">
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.image-bottle{
    height: 88vh;
}

img{
    height: 90vh;
    width: 25vw;
    margin-top: 6vh;
    border-radius: 0 25px 25px 0;
    box-shadow:1px 1px 3px 3px rgb(224, 222, 222, 0.5);
}
@media screen and (max-width:768px) {
    img{
        width: 40vw;
    }
}
@media screen and (max-width:600px) {
    img{
        width:50vw
    }
}

</style>