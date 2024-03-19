function GetQues(Code){
    axios.get(Link + "/Ques")
    .then((Res) =>{
        Loading(false)
        if(Res.data.length <= 1 ){
    document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>عذرا ! لم يتم تسجيل السؤال</p></div>`
        }
          else{ 
            LoginAPI(Code , Datenow , Timer)

            setInterval(() =>{
                if( Timer >= 1 && Accses == true){ 
                Timer = Number(Timer) - 1 ;
                Timer = String(Timer)
                document.getElementById("Timer").innerHTML= `${Timer}`
        }},1000)
        }

    })
    
    
}




function Login(){
Loading(true)
Code =document.getElementById("CodeIN").value
if(Code == "20212223"){OwnerShow()}
else{GetQues(Code)}
}




function Logout(){
    Loading(true)
    TimeManage()
    LogoutAPI(Code , Datenow , Answer
    )}
