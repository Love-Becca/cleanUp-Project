<template>
    <div id="drop">
        <div id="newbottle">
            <h1>Submit Bottle</h1>
            <h3>Details</h3>
            <form @submit="bottleDeposit">
                <label for="num-bottle">Number of Bottles</label><br>
                <input type="number" name="num-bottle" placeholder="Number of Bottles" minlength="10" id="spec" v-model="form.number">
            </form>
            <form @submit="bottleDeposit">
                <label for="bottle-size">Size of Bottles</label><br>
                <input type="size" name="bottle-size" placeholder="Size of Bottles" id="spec" v-model="form.size">
            </form>
            <form @submit="bottleDeposit">
                <label for="collector-id">Collector Id</label><br>
                <input type="collector" name="collector-id" placeholder="Collector-Id" id="spec" v-model="form.collector">
            </form>
            <form>
                <label for="comment">Comments</label><br>
                <textarea name="comment" id="remark" rows="6" cols="30">Comments............</textarea>
            </form>
        </div>
        <div id="location">
            <h3>View Collectors Nearby</h3>
            <p>Location</p>
            <div class="search-box">
                <input type="text" name="locate" placeholder="Type your location" class="search-txt">
                <a href="#" class="opt"><font-awesome-icon icon="search" class="idea"/></a>
            </div> 
            <div id="map-img">
                <img src="~/assets/googlemap.png" alt="location" height="250px" width="350">
            </div>
            <form @submit="bottleDeposit">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<style scoped>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppins,'Encode Sans', 'Open Sans';
    }

    #drop{
        display: flex;
        flex-direction: row;
        margin:0 auto;
        height: 32rem;
        width: 60rem;
        border: none;
        padding: 20px 40px;
        border-radius: 32px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

    }

    #newbottle{
        width: 25rem;
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 30rem;
        border: none;
    }

    h1{
        font-size: 20px;
        font-weight:700;
    }

    h3{
        font-size: 17px;
        font-weight: 700;
        color:rgba(119, 119, 119, 1);
    }

    form{
        margin-top: 10px;
    }

    #spec, input[type=submit]{
        width: 65%;
        height: 2rem;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        border: none;
        outline: none;
        border-radius: 0 7px 7px 7px ;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 300;
        padding: 10px;
    }

    input[type=submit]{
        width: 40%;
        height: 2.5rem;
        font-weight: 600;
        margin-left: 230px;
    }

    a{
        text-decoration: none;
    }

    label{
        font-size: 15px;
    }

    textarea{
        width: 65%;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        border: none;
        outline: none;
        border-radius: 0 7px 7px 7px ;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 300;
        padding: 10px;
    }

    #location{
        border: none;
        width: 50%;
        height: 30rem;
        padding: 25px 10px 0 30px;
        display: flex;
        flex-direction: column;
    }

    p{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    img{
        border-radius: 7px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    }
   .search-box {
        transform: translate(0%, 0%);
        background: white;
        height: 50px;
        width: 65%;
        border-radius: 40px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        padding: 10px;
        display: flex;
        margin-bottom: 30px;
    }
    .search-box:hover > .search-txt{
        width: 240px;
        padding: 0 6px;
    }
    .search-box:hover > .opt{
        background: white;
        color: black;
    }
    .opt{
        color: #eeeeee;
        width: 30px;
        height: 30px;
        border-radius: 40px;
        background: #2f3640;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
    .opt > .idea {
        font-size: 20px;
    }
    .search-txt {
        border: none;
        background: none;
        outline: none;
        padding: 0;
        color: rgba(0, 0, 0, 0.6);
        font-size: 16px;
        transition: 0.4s;
        line-height: 40px;
        width: 0px;
        font-weight: bold;
    }

    @media screen and (max-width:900px) {
        #drop{
        display: flex;
        flex-direction: row;
        height: 90vh;
        width: 90vw;
        padding: 10px;
        }
        img{
            width:40vw;
            height: 30vw;
        }
        #location{
        border: none;
        padding: 10px 10px 0 5px;
        }
        input[type=submit]{
        width: 50%;
        height: 2.5rem;
        font-weight: 600;
        margin-left: 20vw;
        }
        #spec{
        width: 30vw;
        font-size: 10px;
        }
        .search-box {
        height: 50px;
        width: 100%;
        margin-bottom: 20px;
        }
        .search-box:hover > .search-txt{
        width: 100%;
        padding: 0 3px;
        font-size: 10px;
        }
        textarea{
        font-size: 10px;
        }
    }
</style>

<script>

export default {
  data()  {
      return {
          form: {
                size: "",
                number: "",
                collector: "",
            }
        }
    },

    methods: {
        async bottleDeposit() {
            try {
                await this.bottleDeposit(
                    this.form.size,
                    this.form.number,
                    this.form.collector
                );
                this.$router.push("/dashboard");
                this.$toast.success("Bottle submitted successfully")
            } catch (error) {
            this.$toast.error(error.message)
            }
        }
    }
}
</script>