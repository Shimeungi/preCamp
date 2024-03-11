const wordGame = () => {
  console.log("클릭")
  let myWord = document.getElementById("myWord").value // 입력한 단어
  let orgWord = document.getElementById("word").innerText // 기존 단어

  if(myWord[0] === orgWord[orgWord.length-1]){
    document.getElementById("result").innerText = "정답입니다!"
    document.getElementById("word").innerText = myWord
    document.getElementById("myWord").value = ""
  } else {
    document.getElementById("result").innerText= "땡!"
    document.getElementById("myWord").value = ""
  }
}