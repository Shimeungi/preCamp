const changeFocus1 = () =>{
  let ph1 = document.getElementById("ph1").value
  
  if(ph1.length === 3){
    document.getElementById("ph2").focus()
  }
}

const changeFocus2 = () =>{
  let ph2 = document.getElementById("ph2").value
  
  if(ph2.length === 4){
    document.getElementById("ph3").focus()
  }
}