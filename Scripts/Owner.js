

function GetRuselt(){
    axios.get(Link + "/Ques")
    .then((Res) =>{
        Loading(false)
        if(Res.data.length > 1 ){
    axios.get(Link + "/Result")
        .then((Res) =>{
        let Winners = Res.data.Winners    
        let Lossers = Res.data.Losers
    
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
    
    </div>`

    
    for(let i = 0; i < Winners.length ; i++){
    Time = new Date(Winners[i][1])
        document.getElementById("R-Table").innerHTML += `    <tr>
        <td id="R-status" style="background-color:green;"></td>
        <td id="R-Name">${Winners[i][0]}</td>
        <td id="R-Logout">${CheckHours(Time.getHours()) + ":" + CheckTime(Time.getMinutes()) + ":" + CheckTime(Time.getSeconds())}</td>
    </tr>`
    }
    
    for(let i = 0; i < Lossers.length ; i++){
    if(Lossers[i][1] != null){
        Time = new Date(Lossers[i][1])
            document.getElementById("R-Table").innerHTML += `    <tr>
            <td id="R-status" style="background-color:red;"></td>
            <td id="R-Name">${Lossers[i][0]}</td>
            <td id="R-Logout">${CheckHours(Time.getHours()) + ":" + CheckTime(Time.getMinutes()) + ":" + CheckTime(Time.getSeconds())}</td>
        </tr>`
        }if(Lossers[i][1] == null){
            document.getElementById("R-Table").innerHTML += `    <tr>
            <td id="R-status" style="background-color:gray;"></td>
            <td id="R-Name">${Lossers[i][0]}</td>
            <td id="R-Logout">--:--:--</td>
        </tr>`
        }}
    
        Loading(false)
    })
    }else(alert("There is No Question !"))
    })

}





    
    function PostQues(){
        document.getElementById("Scrn").innerHTML = `<div id="AddQBox">
        <p>أدخل معلومات السؤال</p>
        <input type="text" id="QuesIN" placeholder="Enter The Question"/>
        <div>
        <label>A</label>
        <input type="text" id="AIN" />
        </div>
        <div>
        <label>B</label>
        <input type="text" id="BIN" />
    </div>
    <div>
        <label>C</label>
        <input type="text" id="CIN" />
    </div>
    <div>
        <label>D</label>
        <input type="text" id="DIN" />
    </div>
    <div>
        <label>F</label>
        <input type="text" id="FIN" />
    </div>
    <div>
        <label>True Answer</label>
        <select id="SelAns">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
        </select>
    </div>
        <button id="AddQbtn" onclick="AddQ()">إضافة</button>
    </div>
    
    </div>
    `
    }

function AddQ(){
    QuesIN =document.getElementById("QuesIN").value
    AIN = document.getElementById("AIN").value
    BIN = document.getElementById("BIN").value
    CIN = document.getElementById("CIN").value
    DIN = document.getElementById("DIN").value
    FIN = document.getElementById("FIN").value
    TrueIN = document.getElementById("SelAns").value
    Loading(true)
    let pass = prompt("Enter The Password")
        if(pass == "20212223"){
            axios.post(Link + "/Ques/" + pass , {
        Ques : QuesIN ,
        A : AIN,
        B : BIN,
        C : CIN , 
        D : DIN , 
        F: FIN ,
        True : TrueIN
        })
        .then((Res)=>{alert(Res.data) ; Loading(false)})
        }else{alert("Password is Wrong")}
       }



function GetAllUsers(){
    Loading(true)
axios.get(Link + "/Users/")
.then((Res)=>{
    document.getElementById("Scrn").innerHTML = `<table id="R-Table">
        <tr>
            <td>#</td>
            <td >الاسم</td>
            <td>الحالة</td>
            <td>الإجابة</td>
            <td>وقت تسجيل الدخول</td>
            <td>وقت تسجيل الخروج</td>
        </tr>
    </table>`
    let LoginT;
    let LogoutT;
    let LoginTS;
    let LogoutTS;
    for(let i = 0; i < Res.data.length ; i++){
LoginT = new Date(Res.data[i].LoginTime)
        if(Res.data[i].LoginTime != null){LoginTS = CheckHours(LoginT.getHours()) + ":" +CheckTime(LoginT.getMinutes()) + ":" + CheckTime(LoginT.getSeconds())}
        else{LoginTS = "--:--:--"}

LogoutT = new Date(Res.data[i].LogoutTime)
        if(Res.data[i].LogoutTime != null){LogoutTS = CheckHours(LogoutT.getHours()) + ":" +CheckTime(LogoutT.getMinutes()) + ":" + CheckTime(LogoutT.getSeconds())}
        else{LogoutTS = "--:--:--"}


        document.getElementById("R-Table").innerHTML +=
        `<tr>
        <td>${Res.data[i]._id}</td>
        <td>${Res.data[i].Name}</td>
        <td id="statusAll">${String(Res.data[i].Status)}</td>
        <td>${Res.data[i].Answer}</td>
        <td>${LoginTS}</td>
        <td>${LogoutTS}</td>
        </tr>`

    }


Loading(false)
})

}






function ResetAll(){
    let pass = prompt("Enter Password")
    if(pass == "20212223"){
    axios.delete(Link + "/reset")
    .then((Res)=>{Loading(false) ; alert(Res.data) ;})
}}










function AddUClick(){
    Loading(true)
    let GCode = document.getElementById("GCodeIN").value;
    let GName = document.getElementById("GNameIN").value
        let pass = prompt("Please Enter The Password")
        if(pass = "20212223"){
            axios.post(Link + "/Users/20212223", {
                _id : GCode,
                Name: GName,
                Answer : "",
                Status : false,
                LoginTime : null,
                LogoutTime : null
            })
            .then(()=>{Loading(false) ;alert("Added")})
        }else{alert("Password is Wrong")}
    }

function AddUser(){

    document.getElementById("Scrn").innerHTML=`<div id="AddUserBox">
    <p>أدخل إسم و كود المستخدم</p>
    <input type="text" id="GCodeIN" placeholder="Code...."/>
    <input type="text" id="GNameIN" placeholder="Name..."/>
    <button id="AddUbtn" onclick="AddUClick()">إضافة</button>
</div>`
}












function DelUser(){
document.getElementById("Scrn").innerHTML = `
    <div id="DelUserBox">
    <p>أدخل كود المستخدم</p>
    <input type="text" id="DCodeIN" placeholder="Code...."/>
    <button id="DelUbtn" onclick = "DelUClick()">حذف</button>
</div>`
  
}

function DelUClick(){
    let DCode = document.getElementById("DCodeIN").value
    Loading(true)
      axios.put(Link + "/DelUsers/" ,{Code : DCode})
    .then((Res)=>{
        if(Res.data != undefined +" is Deleted"){alert(Res.data) ; Loading(false)}
        else{alert("This is an Error"); Loading(false)}

    })
}


function OwnerShow(){
    Loading(false)
    document.getElementById("Scrn").innerHTML = `
    <div class="Owner-d">
    <div onclick="GetRuselt();Loading(true)" class="Owner-block">عرض النتائج</div>
    <div onclick="AddUser();" class="Owner-block">إضافة مستخدم</div>
    <div onclick="DelUser()" class="Owner-block">حذف مستخدم</div>
    <div onclick="ResetAll();Loading(true)" class="Owner-block">إعادة الضبط</div>
    <div onclick="PostQues()" class="Owner-block">إضافة سؤال</div>
    <div onclick="GetAllUsers()" class="Owner-block">عرض جميع المستخدمين</div>
    </div>`
}
    


