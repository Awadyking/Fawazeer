

function TimeBlock(){
    TimeManage()
        SecStart = SecAll
        SecEnd = SecStart + 15
        
        setInterval(() =>{
            if( Accses == true){
            if(SecEnd <= SecAll){
                document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>عذرا ! لقد انتهى الوقت المخصص لإجابتك</p></div>`
                axios.put(Link + "/Logout" , {
                    Code : Code,
                    LogoutTime: Datenow,
                    Answer : Answer 
                    
                })
            }
        }
        } , 1000)
    }
    
    

    
function Loading(X){
if(X == true){
        document.getElementById("Load").style.visibility="visible";
        document.getElementById("Load").style.zIndex= 2000;
        document.getElementById("Scrn").style.opacity= "20%";
        
}if( X == false){
            document.getElementById("Load").style.visibility="hidden";
            document.getElementById("Load").style.zIndex= 500;
            document.getElementById("Scrn").style.opacity= "100%";
}
        }



        function CheckTime(x) {
            if (x < 10) {x = "0" + x};  
            return x;
          }
        
        function  CheckHours(x){
            if(x > 12){x = x - 12 ; x = "0" + x}
        else{x = "0" + x}
        return x;
           
        }