let persons = [
  {name: "철수", age: 17},
  {name: "영희", age: 22},
  {name: "도우너", age: 5},
  {name: "구루트", age: 65},
  {name: "도비", age: 3}
  ]

for(let count = 0; count<persons.length; count++){
  if(persons[count].age >= 19){
      console.log(persons[count].name + "은 성인입니다")
  } else {
      console.log(persons[count].name + "은 미성년자입니다.")
  }
}

// VM4841:5 철수은 미성년자입니다.
// VM4841:3 영희은 성인입니다
// VM4841:5 도우너은 미성년자입니다.
// VM4841:3 구루트은 성인입니다
// VM4841:5 도비은 미성년자입니다.

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스캣"},
  { number: 3, title: "산청딸기"},
  { number: 4, title: "한라봉"},
  { number: 5, title: "사과"},
  { number: 6, title: "애플망고"},
  { number: 7, title: "딸기"},
  { number: 8, title: "천혜향"},
  { number: 9, title: "귤"},
  ]

for(let i=0; i<fruits.length; i++){
  console.log(fruits[i].number + " " + fruits[i].title)
 }
// VM5228:2 1 레드향
// VM5228:2 2 샤인머스캣
// VM5228:2 3 산청딸기
// VM5228:2 4 한라봉
// VM5228:2 5 사과
// VM5228:2 6 애플망고
// VM5228:2 7 딸기
// VM5228:2 8 천혜향
// VM5228:2 9 귤