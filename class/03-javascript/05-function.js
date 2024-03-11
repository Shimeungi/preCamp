let isStarted = false;
const ps = () =>{

  if(isStarted === false){
    isStarted = true;
    let rand = String(Math.floor(Math.random()*1000000-1)).padStart(6,"0")
    let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16)
    
    document.getElementById("number").innerText = rand
    document.getElementById("number").style.color = colorCode
    document.getElementById("completedBtn").style.visibility = "visible";
  
    
    timerFunc()
  } else {
    
  }
  
}

let timerFunc = () =>{
  let time = 3

  let timer
  timer = setInterval(function(){
    if( time >= 0){
      let m = Math.floor(time / 60)
      let s = String(time % 60).padStart(2, "0");
    
      let result = `${m} : ${s}`
      time--
      console.log(time)
      document.getElementById("timer").innerText = result
    } else {
      document.getElementById("timer").innerText = "TimeOut"
      document.getElementById("completedBtn").disabled = true;
      
      isStarted = false;
      console.log("타이머작동중")
      clearInterval(timer)
      
    }
   
  }, 1000)
  
  
}

