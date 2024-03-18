let Code ; 
let Datenow;
let Hours;
let Min;
let Sec;
let Timer = 15;
let SecStart ;
let SecEnd;
let Accses = true;
let Answer;

function TimeManage(){
    Datenow = new Date()
    Hours = Datenow.getHours()
    Min = Datenow.getMinutes()
    Sec = Datenow.getSeconds()
    SecAll =Math.trunc( Datenow.getTime() / 1000)
}

setInterval(()=>{TimeManage()},1000)




