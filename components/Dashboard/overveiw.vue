<template>
    <div id="details">
        <div id="section1">
            <div id="greetings">
                <p id="greet">Good Morning</p>
                <h2>Arlene McCoy</h2>
                <p id="bottle-level">24 Bottles to Next Level</p>
            </div>
            <div id="trabaye">
                <img src="~/assets/trabaye.svg"  id="fly" alt="boost" width="300" height="300">
            </div>
        </div>
        <div id="section2">
            <div id="overveiw">
                <form>
                    <label for="intervals">Overview</label>
                    <select name="periods" id="intervals">
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </form>
            </div>
            <div id="boards">
                <div id="board1">
                    <h2 id="sep">10</h2>
                    <p id="sep">Level</p>
                </div>
                <div id="board2">
                    <h2 id="sep">3,164</h2>
                    <p id="sep">Points</p>
                </div>
                <div id="board3">
                    <img src="~/assets/stage.svg"  alt="badge" width="70px" height="30px">
                    <p id="sep">Current Badges</p>
                </div>
                <div id="board4">
                    <h2 id="sep">1,255</h2>
                    <p id="sep">Total Bottles</p>
                </div>
            </div>
        </div>
        <div id="section3">
            <h2 id="progress">Progress Bar</h2>
            <div id="graph">
                <div id="bar-one"></div>
                <div id="bar-two"></div>
                <div id="bar-three"></div>

                <ul class="numbers">
                    <li><div class="bar-height">10,000</div></li>
                    <li><div class="bar-height">5,000</div></li>
                    <li><div class="bar-height">1,000</div></li>
                    <li><div class="bar-height">500</div></li>
                    <li><div class="bar-height">200</div></li>
                    <li><div class="bar-height">100</div></li>
                    <li><div class="bar-height">0</div></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Poppins,'Encode Sans','Open Sans';
}

#details{
    width: 90vw;
    border:none;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    padding: 0 30px;
}

#section1{
    display: flex;
    flex-direction: row;
    border: none;
    height: 10rem;
    background: rgba(0, 187, 59, 1);
    margin: 25px 0px 15px 0px;
    border-radius: 16px;
}

#greetings{
    border: none;
    width: 10.75rem;
    margin-right: 30rem ;
    padding: 40px 0px;
    text-align: center;
}

#trabaye{
    border: none;
    width: 25%;
}

#section2{
    display: flex;
    flex-direction: column;
    border: none;
    height: 10.5rem;
    margin-bottom: 10px;
}

#boards{
    display: flex;
    flex-direction: row;
    border: none;
    height: 80%;
}

#overveiw{
    height: 20%;
    margin-bottom: 20px;
}

p{
    font-size: 16px;
    color: white;
    font-weight: 300;
}

h2{
    font-size: 17px;
    color: white;
}

#bottle-level{
    font-size: 11px;
}

#fly{
    border: none;
    position:relative;
    bottom: 30px;
    right: 50px;
}

label{
    color:rgba(0, 187, 59, 1);
    font-size: 17px;
}

select{
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: none;
    width: 91px;
    height: 30px;
    color:rgba(0, 0, 0, 0.4);
}

#board1, #board2, #board3, #board4 {
    width: 23%;
    height: 110px;
    border: none;
    padding: 30px 10px 30px 20px;
    border-radius: 10px 10px 10px 20px;
    margin: 0px 20px;
    color: rgba(0, 0, 0, 0.6);
    background-color: white;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.09);
}
#board1{
    margin-left: 0px;
}

#board4{
    margin: 0px 0px;
}

#sep{
    color: rgba(0, 0, 0, 0.6);
}

#progress{
    color: rgba(101, 192, 9, 1);
    font-size: 17px;
    font-weight: 600;
}

#section3{
    display: flex;
    flex-direction: column;
    border: none;
    height: 18rem
}

#graph{
    display: flex;
    flex-direction: row;
    align-self: center;
    position: relative;
    height: 13rem;
    width: 50rem;
    border-left: 2px solid  rgba(101, 192, 9, 1);;
    border-bottom: 2px solid grey;
    margin-top: 1rem;
    z-index: 0;
    
}

#numbers{
    position: relative;
    height: 13rem;
    top: 0px;
    left: -30px;
    z-index: 100;
}

li{
    position: relative;
    border-bottom: none;
    height: 26px;
    left: -45px;
    height: 29px;
    font-size: 0.8rem;
    opacity: 0.8;
}

li::before{
    content: '';
    border: 2px solid red;
    position: absolute;
    bottom:  -1px;
    left: 30px;
    height: 40%;
    border:solid grey 2px;
    transform: skew(45deg);
    width: 0px;
}

li div{
    position: absolute;
    width:30px;
    left: -15px;
    padding-top: 0px;
    text-align: right;
}

#bar-one,#bar-two,#bar-three{
    width: 20px;
    height: 50px;
    border-radius: 50px;
    background-color: green;
    position: absolute;
    left:3%;
    bottom: 0px;
    border: none;
    z-index: 1000;
}

#bar-two{
    left: 7%;
    height:100px;
    background-color: rgb(173, 173, 173);
    
}

#bar-three{
    left: 11%;
    height:150px;
    background-color: green;
}

@media screen and (max-width:900px) {
    img{
        height: 20px;
        width: 60px;
    }

    #boards{
        display: flex;
        flex-direction: column;
    }

    #board1, #board2, #board3, #board4 {
        margin: 0;
        width: 25vw;
        height: 15vh;
        align-self: center;
        margin-bottom: 2vw;
    }

    #board3{
        padding: 10px;
        text-align: center;
    }

    #details{
        width: 60vw;
        padding: 0 10px;
    }
    p{
        font-size: 10px;
    }
    h2{
        font-size: 12px;
    }
    #greetings{
        width: 30vw;
        margin-right: 0;
        padding: 30px 10px;
        text-align: center;
    }
    #fly{
        width: 40vw;
        height: 30vh;
        position:relative;
        bottom: 0px;
        right: 5vw;
    }
    #section2{
        height: 75vh;
    }
    #overveiw{
        height: 9vh;
    }
    form{
        align-self: center;
    }
    #graph{
        width: 30vw;
        align-self: flex-start;
        margin-left: 15vw;
    }
    #bar-two{
        left:10vw;
    }
    #bar-three{
        left:18vw;
    }
    
}
</style>


<script>
//export default {
//    myDate = new Date(),
//    hours =  myDate.getHours(),
//    greetings,
//
//    methods: {
//        if (this.hours < 12) {
//        greetings = 'Good Morning',
//        }else if(hours >= 12 && hours <= 17){
//        greetings = 'Good Afternoon',
//        }else if(hours >= 17 && hours <= 24) {
//        greetings = 'Good Evening',
//        },
//    },
    
//    document.getElementById('greet').innerHTML = greetings,
//}
</script>