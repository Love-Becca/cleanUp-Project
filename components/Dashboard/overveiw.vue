<template>
    <div id="details">
        <div id="section1">
            <div id="greetings">
                <p>Good Morning</p>
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
                    <img src="~/assets/award.png"  alt="badge">
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
            <div id="graph"></div>
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

#details{
    height: 97.6vh;
    width: 60.375rem;
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
    margin: 25px 0px;
    padding: 0 3rem;
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
    margin-bottom:20px;
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
@media screen and (max-width:600px) {
    #section1{
        width: 100vw;
        padding: 10px;
    }
    #boards{
    }
    #details{
        height: 100vh;
    }
    #fly{
    border: none;
    position:absolute;
    top: 2rem;
    right:  -5rem;
    width: 250px;
    height: 250px;
    }
    #greetings{
    width: 10rem;
    margin-right: 0rem ;
    padding: 30px 0px;
    text-align:left;
    }

    p, h2{
        font-weight: 10px;
    }
}
</style>