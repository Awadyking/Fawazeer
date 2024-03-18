
function TimeBlock(){
TimeManage()
    SecStart = SecAll
    SecEnd = SecStart + 15
    
    setInterval(() =>{
        if( Accses == true){
        if(SecEnd <= SecAll){
            document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>عذرا ! لقد انتهى الوقت المخصص لإجابتك</p></div>`
            axios.put("https://fawazeer-api.onrender.com/Logout" , {
                Code : Code,
                LogoutTime: Datenow,
                Answer : Answer 
                
            })
        }
    }
    } , 1000)
}
function GetRuselt(Winners , Lossers){
    document.getElementById("Scrn").innerHTML = `<table id="R-Table">
    <tr>
        <td id="R-status">S.</td>
        <td id="R-Name">الاسم</td>
        <td id="R-Logout">وقت التسجيل</td>
    </tr>
</table>

<div id="Color">
<div>إجابة خاطئة :<div id="Red"></div></div>
<div>إجابة صحيحة :<div id="Green"></div></div>
<div>لم يجب : <div id="Gray"></div></div>

</div>

`
let Time ;
function CheckTime(x) {
    if (x < 10) {x = "0" + x};  
    return x;
  }

for(let i = 0; i < Winners.length ; i++){
Time = new Date(Winners[i][1])
    document.getElementById("R-Table").innerHTML += `    <tr>
    <td id="R-status" style="background-color:green;"></td>
    <td id="R-Name">${Winners[i][0]}</td>
    <td id="R-Logout">${CheckTime(Time.getHours()) + ":" + CheckTime(Time.getMinutes()) + ":" + CheckTime(Time.getSeconds())}</td>
</tr>`
}

for(let i = 0; i < Lossers.length ; i++){
if(Lossers[i][1] != null){
    Time = new Date(Lossers[i][1])
        document.getElementById("R-Table").innerHTML += `    <tr>
        <td id="R-status" style="background-color:red;"></td>
        <td id="R-Name">${Lossers[i][0]}</td>
        <td id="R-Logout">${CheckTime(Time.getHours()) + ":" + CheckTime(Time.getMinutes()) + ":" + CheckTime(Time.getSeconds())}</td>
    </tr>`
    }if(Lossers[i][1] == null){
        document.getElementById("R-Table").innerHTML += `    <tr>
        <td id="R-status" style="background-color:gray;"></td>
        <td id="R-Name">${Lossers[i][0]}</td>
        <td id="R-Logout">--:--:--</td>
    </tr>`
    }

}



}    





function Login(){
    Code =document.getElementById("CodeIN").value
if(Code == "20212223"){
axios.get("https://fawazeer-api.onrender.com/Result")
.then((Res) =>{
let Winners = Res.data.Winners    
let Lossers = Res.data.Losers
console.log(Lossers)
GetRuselt(Winners , Lossers)
})
}

else{
 axios.get("https://fawazeer-api.onrender.com/Ques")
    .then((Res) =>{
        if(Res.data.length <= 1 ){
document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>عذرا ! لم يتم تسجيل السؤال</p></div>`
        }
          else{ LoginAPI(Code , Datenow , Timer)
            setInterval(() =>{
                if( Timer >= 1 && Accses == true){ 
                Timer = Number(Timer) - 1 ;
                Timer = String(Timer)
                document.getElementById("Timer").innerHTML= `${Timer}`
        }},1000)
        }
    })

}
}  

function Logout(){
    TimeManage()
   
    LogoutAPI(Code , Datenow , Answer)}
