// for(let i = 1; i<= 20 ; i+=1) {
//     console.log(i)
// }

let temp = ['apple', 'banana', 'Kiwi']
// temp.forEach((element, idx) => {
//     console.log(idx, element)
// });

let newValue = temp.map((element, idx) => {
    return `${idx+1}.${element}`
})
console.log(newValue)