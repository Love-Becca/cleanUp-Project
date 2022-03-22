<template>
  <div class="main">
    <h1>Partners</h1>
    <div class="content">
      <div class="who">
        <img src="~/assets/who.png" alt="gifts">
      </div>
      <div class="united">
        <img src="~/assets/united.png" alt="gifts">
      </div>
      <div class="google">
        <img src="~/assets/Google Icon.png" alt="gifts">
      </div>
      <div class="who1">
        <img src="~/assets/who.png" alt="gifts">
      </div>
      <div class="united1">
        <img src="~/assets/united.png" alt="gifts">
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  font-family: Poppins, 'Encocde Sans', 'Open Sans';
  box-sizing: border-box;
}
.main{
  background-color: rgba(299, 299, 299, 1);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2vw 5vw 0em 5vw;
}

h1{
  font-weight: 700;
  font-size: 3vw;
  opacity: 0.3;
  margin-bottom: 2vw;
}

.content{
  width: 80%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
}
.content div{
  object-fit: contain;
}
.content div img{
  max-width: 100%;
}
</style>

