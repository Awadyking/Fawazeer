
function LoginAPI(Code , Datenow , Timer){
    axios.put("https://fawazeer-api.onrender.com/Login" , {
        Code : Code , 
        LoginTime : Datenow ,
        Status : true
    })
    .then((Res)=>{
        if(Res.data[0].Status == false){
       document.getElementById("Scrn").innerHTML = 
       `<div id="Timer">${Timer}</div>
       <div id="H-div">مرحبا ${Res.data[0].Name} !</div><br>
       <div id="Q-div">
       <div id="Question">السؤال: <br>${Res.data[1].Ques}    ..؟</div>
       <div id="Answers">
       <input value="A" name="Answer" type="radio" id="Answer"  onclick="Answer = this.value"/>
       <label id="lblA">${Res.data[1].A}</label>
       <br>
       <input value="B" name="Answer" type="radio" id="Answer" onclick="Answer = this.value"/>
       <label id="lblB">${Res.data[1].B}</label>
       <br>
       <input value="C" name="Answer" type="radio" id="Answer" onclick="Answer = this.value"/>
       <label id="lblC">${Res.data[1].C}</label>
       <br>
       <input value="D" name="Answer" type="radio" id="Answer" onclick="Answer = this.value"/>
       <label id="lblD">${Res.data[1].D}</label>
       <br>
       <input value="F" name="Answer" type="radio" id="Answer" onclick="Answer = this.value"/>
       <label id="lblF">${Res.data[1].F}</label>
       <br>
       
       </div>
       <input id="Send" value="إرسال" type="button" onclick="Logout()">
       </div> `

       TimeBlock()
    
        
        }else{document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>عذرا! لقد قمت بتسجيل إجابتك بالفعل</p></div>`}
    
    })
    .catch((err) =>{document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>عذرا ! هذا الكود غير صحيح</p></div>`})
}



function LogoutAPI(Code , Datenow , Answer){
    axios.put("https://fawazeer-api.onrender.com/Logout" , {
        Code : Code,
        LogoutTime: Datenow,
        Answer : Answer 
        
    })
    .then((Res) => {
        if(Res.data == "Okay"){
            document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>تم تسجيل إجابتك بنجاح ! نتمنى لك التوفيق</p></div>`
        }else{
            document.getElementById("Scrn").innerHTML = `<div id="Q-div"><p>عذرا! حدث خطأ ما يرجى إعادة المحاولة لاحقا</p></div>`
            axios.put("https://fawazeer-api.onrender.com/Login" , {
        Code : Code , 
        LoginTime : null ,
        Status : false
    })
        }

        Accses = false;
    })
    .catch((err) =>{console.log("Error: " + err)})

}

