let checkValidation = function(){
  let userId = document.getElementById("userId").value
  let userPw = document.getElementById("userPw").value
  let userPwChk = document.getElementById("userPwChk").value
  let submit = document.getElementById("submit")

  if(userId && userPw && userPwChk){
    console.log("모두 빈칸이 아님")
    if(userPw === userPwChk){
      console.log("비밀번호 확인")
      console.log("회원가입완료")
      submit.disabled = false
    } else{
      submit.disabled = true
      console.log("비밀번호이 같지 않음")
    }
  } else{
    submit.disabled = true
    console.log("빈칸이 있음")
  }
}