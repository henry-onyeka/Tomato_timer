/*
var start = document.getElementById("star");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");

var wm = document.getElementById("work-min")
var ws =document.getElementById("work-sec")
var bs =document.getElementById("break-sec")
var bm =document.getElementById("break-m")
var count =document.getElementById("counter")

var StartTimer

start.addEventListener('click', function(){
if (StartTimer === undefined){
StartTimer  = setInterval(setTimer, 1000)
}
else{
    alert("SORRY TIMER IS RUNNING")
}

}
)

reset.addEventListener('click', function(){
    wm.innerText = 25
    ws.innerText = '00'
    //bm.innerText = 5
    bs.innerText = '00'

    count.innerText = 0
   stopTimer()
   StartTimer =undefined
   console.log('it is continued')

})
pause.addEventListener('click', function(){

    stopTimer()
    StartTimer =undefined
    console.log('it is stopped')

})

//store variabe
function setTimer(){
    //wor timer count down
    if(ws.innerText != 0)
    {
        ws.innerText--;
    }
    else if(wm.innerText !=0 && ws.innerText == 0 )
    {
        ws.innerText = 59;
        wm.innerText --
    }
    //brea timer countdown
    if (wm.innerText == 0 && ws.innerText == 0){
    if(bs.innerText != 0){
        bs.innerText--
    }else if(bm.innerText != 0 && bs.innerText == 0)
    {
        bs.innerText = 59
        bm.innerText --
    }
}
//increment the counter by one when one cyce is compete
if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0)
{
    wm.innerText = 25
    ws.innerText = '00'
    bm.innerText = 5
    bs.innerText = '00'

    count.innerText++
}

}
function stopTimer(){
    clearInterval(setTimer)
}
*/

var Wm = document.getElementById("work-min")
var Ws = document.getElementById("work-sec")
var cyc= document.getElementById("counter")

var Bm = document.getElementById("break-min")
var Bs = document.getElementById("break-sec")

var start = document.getElementById("star")
var stop = document.getElementById("pause")
var reset = document.getElementById("reset")
var tar = undefined
//activate the start button
start.addEventListener("click",function(){
    if (tar == undefined){
   tar = setInterval(begin, 1000)
    }
    else alert("Your timer is runnning")
    console.log('it is stopped')
    
})
function alover(){
    cyc.innerText = 0
        Bm.innerText = 5
        Bs.innerText = '00'
        Wm.innerText = 25
        Ws.innerText = '00'
        stopTm()
        tar = undefined

}
//activate the reset button
reset.addEventListener("click",function(){
    alover()

        
    }

)
//stopping and pauisng the timer
stop.addEventListener("click",function(){
    stopTm()
    tar = undefined
})
//timer function

function begin(){

    if(Ws.innerText != 0){
Ws.innerText--
    }else if(Ws.innerText == 0 && Wm.innerText != 0)
{
    Ws.innerText = 59
    Wm.innerText--
}
if (Ws.innerText == 0 && Wm.innerText == 0){
    if( Bs.innerText != 0 ){
        Bs.innerText--
    }
    else if(Bs.innerText == 0 && Bm.innerText != 0){
        Bs.innerText = 59
        Bm.innerText--
    }
}
if (Ws.innerText == 0 && Wm.innerText == 0 &&  Bs.innerText == 0 && Bm.innerText == 0){
        cyc.innerText++
        Bm.innerText = 5
        Bs.innerText = '00'
        Wm.innerText = 25
        Ws.innerText = '00'

        if (cyc.innerText == 5){
        alover()
        console.log('it is stopped')
}
} 
/*else  {
    cyc.innerText = 0
    Bm.innerText = 30
    Bs.innerText = '00'
    Wm.innerText = 25
    Ws.innerText = '00'

}
*/
}
//activate stopping the timer
function stopTm(){
    clearInterval(tar)
}