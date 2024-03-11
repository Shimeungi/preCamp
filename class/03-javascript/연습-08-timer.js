let time = 10
setInterval(function(){
  if(time >= 0){
      console.log(time)
      time--;
  }
}, 1000)


// 3분 카운트다운
let time2 = 180
setInterval(function(){
  if(time2 >= 0){
      let m = Math.floor(time2 / 60);
      let s = String(time2 % 60).padStart(2, "0");

      console.log(`${m} : ${s}`)
      time2--;
  }} ,1000)