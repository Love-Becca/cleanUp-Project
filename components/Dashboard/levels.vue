<template>
    <div id="details">
        <h2>Badges</h2>
        <div id="stage">
            <table>
                <tr>
                    <th>Badge</th>
                    <th>Stage</th>
                    <th>Points</th>
                    <th>Bottles</th>
                    <th>Points To Next Level</th>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>1</td>
                    <td>1000</td>
                    <td>0 - 100</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>2</td>
                    <td>5000</td>
                    <td>100 - 500</td>
                    <td>4000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>3</td>
                    <td>15000</td>
                    <td>500 - 1500</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>4</td>
                    <td>30000</td>
                    <td>1500 - 3000</td>
                    <td>15000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>5</td>
                    <td>50000</td>
                    <td>3000 - 5000</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>6</td>
                    <td>75,000</td>
                    <td>5000 - 7500</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>7</td>
                    <td>100000</td>
                    <td>7500 - 10,000</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>8</td>
                    <td>125000</td>
                    <td>10000 - 12500</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>9</td>
                    <td>150000</td>
                    <td>12500 - 15000</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td><img src="~/assets/stage.svg" alt="badge"></td>
                    <td>10</td>
                    <td>150000</td>
                    <td>150000</td>
                    <td>Unlock the Gem</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins,'Encode Sans', 'Open Sans';
}

#details{
    width: 90vw;
    border:none;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    padding: 10px 30px;
}

h2{
    font-size: 4vh;
    color: rgba(0, 187, 59, 1);
    margin-bottom: 1.5vw;
}
table{
    width: 65vw;
    text-align: center;
    border: none;
    border-collapse: collapse;
    box-shadow: 0px 0px 7px rgba(238, 237, 237, 0.829);
}

img{
    width: 40px;
    height: 45px;
}

th{
    color: rgb(207, 204, 204);
    background-color: rgba(0, 187, 59, 1);
    border-style: none;
    height: 3.5vw;
}

tr:nth-child(even) {
    background-color: white;
}

td{
    font-weight: 400;
    font-size: 2.5vh;
}

@media screen and (max-width:900px) {
    #details{
        width: 70vw;
        padding: 10px;
    }
    td{
        font-weight: 400;
        font-size: 1.2vh;
    }   
    
    th{
        font-size: 1.5vh;
    }
}

</style>