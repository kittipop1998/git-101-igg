 //1
 for(let i = 1; i<= 20 ; i+=1) {
      console.log(i)
  }

  //2
 for(let i = 1; i<= 20 ; i+=1) {
      console.log(i%2 === 0 ? i : "") //fromของการเขียน if else
  }

 //3
 let result1 = [-1, 2, 3, 56, -93, 0, 4].map(el => el*2)
 console.log(result1)

 //4
let result2 = [10, 13, 44, 55, 89, 0, 12, 1].filter(el => el%2 === 0)
console.log(result2)