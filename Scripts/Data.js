let Link = "https://plum-aggressive-cuttlefish.cyclic.app/";
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
let QuesIN;
let AIN;
let BIN;
let CIN;
let DIN;
let FIN;
let TrueIN;
let Time ;



function TimeManage(){
    Datenow = new Date()
    Hours = Datenow.getHours()
    Min = Datenow.getMinutes()
    Sec = Datenow.getSeconds()
    SecAll =Math.trunc( Datenow.getTime() / 1000)
}



setInterval(()=>{TimeManage()},1000)




