// 데이터 타입, 연산자 실습

1 + 1
// 2
1 + "1"
// '11'
10 - 9
// 1
10 - "9"
// 1
123 == "123"
// true
123 === "123"
// false

// 조건문

if ( 1+1 === 2){
  console.log("정답")
} else { 
  console.log("오답")
}
// VM2558:2 정답
undefined
if (true){
  console.log("정답")
} else { 
  console.log("오답")
}
// VM2572:2 정답

if (!true){
  console.log("정답")
} else { 
  console.log("오답")
}
// VM2575:4 오답

if (0){
  console.log("정답")
} else { 
  console.log("오답")
}
// VM2589:4 오답

const profile = {
  name : "철수",
  age : 12, 
  school : "다람쥐초"
}
if ( profile.age >= 20 ){
  console.log("성인입니다")
} else if ( profile.age >= 8){
  console.log("학생입니다")
} else if ( profile.age >= 0){
  console.log("어린이입니다")
} else {
  console.log("잘못 입력하셨습니다.")
}
// 학생입니다