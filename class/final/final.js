// phone input focus

//ph1 -> ph2
const ph1_to_ph2 = () =>{
  let ph1 = document.getElementById("ph1").value
  
  if(ph1.length === 3){
    document.getElementById("ph2").focus()
  }
}

//ph2 -> ph3
const ph2_to_ph3 = () =>{
  let ph2 = document.getElementById("ph2").value
  
  if(ph2.length === 4){
    document.getElementById("ph3").focus()
  }
}

const ph3_to_authOn = () =>{
  let ph3 = document.getElementById("ph3").value

  if(ph3.length === 4){
    let authBtn = document.getElementById("authBtn")
    authBtn.disabled = false
    authBtn.style = "color: #0068FF; cursor: pointer;"
    
  }
}
let timerToken = true

const authBtn__onClick = () =>{

  let authBtn = document.getElementById("authBtn")
  let authNumber = document.getElementById("authNumber")
  let authSuccessBtn = document.getElementById("authSuccessBtn")

  let rand6__number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  
  authNumber.style = "color: #0068FF"
  authNumber.innerText = rand6__number

  // 인증 확인 버튼 활성화
  authSuccessBtn.disabled = false
  authSuccessBtn.style = "color: white; background-color : #0068FF; cursor: pointer"
  
  // 인증시간 활성화 -> timer()
  if(timerToken){
    timerToken = false;
    timer()
  }
}

const timer = () =>{
  let seconds = 180
  let authTimer = document.getElementById("authTimer")
  let authSuccessBtn = document.getElementById("authSuccessBtn")
  let authNumber = document.getElementById("authNumber")
  

    let timerSwitch = setInterval(function() {
      if(seconds >= 0 && timerToken === false){
        let m = Math.floor(seconds / 60)
        let s = String(seconds % 60).padStart(2, "0")
        let result = `${m} : ${s}`
    
        authTimer.innerText = result
        
        seconds--;
      } else {
        authSuccessBtn.disabled = true
        authSuccessBtn.style = "background-color: white; color: #D2D2D2" 
        authTimer.innerText = "3:00"
        authNumber.innerText = "000000"
        timerToken = true
        stop()
      }
    }, 1000)
  
  
    let stop = () =>{
      timerToken = true
      clearInterval(timerSwitch)
      
    }
  }


const authSuccessBtn__onClick = () =>{
  
  let submitBtn = document.getElementById("submitBtn")

  alert("인증이 완료되었습니다.")
  timerToken = true
  timer()
  submitBtn.disabled = false
}

const submit__onclick = () =>{
  let submitToken = true // true 일 때 submit O - false X
  // Input
  let userEmail = document.getElementById("userEmail").value
  let userName = document.getElementById("userName").value
  let userPw = document.getElementById("userPw").value
  let userPwCheck = document.getElementById("userPwCheck").value
  let userAddress = document.getElementById("userAddress").value
  let userSex =  document.getElementsByName("userSex")

  console.log(userEmail)
  // Error Msg
  let emailError = document.getElementById("emailError")
  let nameError = document.getElementById("nameError")
  let pwError = document.getElementById("pwError")
  let pwChkError = document.getElementById("pwChkError")
  let userAddressError = document.getElementById("userAddressError")
  let userSexError = document.getElementById("userSexError")

  // Email Error Check
  let check = true // @ 여부 체크
  if(!userEmail){
   
    emailError.innerText = "이메일이 올바르지 않습니다"
    submitToken = false
    console.log("emiail" + submitToken)
  } else {

    for(let i=0; i<userEmail.length; i++){
      if(userEmail[i] === "@"){
        check = false
      }
    }
  }

  if(check){
    emailError.innerText = "이메일이 올바르지 않습니다"
    submitToken = false
  } else {
    emailError.innerText = ""
  }
  

  // Name Error Check
  if(!userName){
    nameError.innerText = "이름이 올바르지 않습니다"
    submitToken = false
  } else{
    nameError.innerText = ""
  }

  // Password Error Check
  if(!userPw || !userPwCheck){
    if(!userPw){
      pwError.innerText = "비밀번호를 입력해주세요"
      submitToken = false
    }  else{
      pwError.innerText = ""
    }
    if(!userPwCheck){
      pwChkError.innerText = "비밀번호를 입력해주세요"
      submitToken = false
    } else{
      pwChkError.innerText = ""
    }
  } else{
      if(userPw !== userPwCheck){
        pwError.innerText = "비밀번호가 같지않습니다"
        pwChkError.innerText = "비밀번호가 같지않습니다"
        submitToken = false
      } else{
        pwError.innerText = ""
        pwChkError.innerText = ""
      }
  }

   if(userAddress === "0"){
    userAddressError.innerText = "지역을 선택해주세요"
    submitToken = false
   } else{
    userAddressError.innerText = ""
   }

   let checkedRadio = false
   userSex.forEach((radio) => {
    console.dir(radio)
    if(radio.checked){
      checkedRadio = true
    } 
   })

   if(!checkedRadio){
    userSexError.innerText = "성별을 선택해주세요"
    submitToken = false
   } else{
    userSexError.innerText = ""
   }
    

   if(submitToken){
    console.log(submitToken)
    alert("코드캡프 가입을 축하합니다")
   }
}