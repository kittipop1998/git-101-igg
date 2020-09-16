const calculateGrade = (point) => {
    let grade = null
    if (point >= 80 && point  <=100) {
        grade = "A"
    } else if(point >=70 && point <= 79){
        grade = "B"
    } else if(point >=60 && point <= 69){
        grade = "C"
    } else if(point >=50 && point <= 59){
        grade = "D"
    } else if(point >=0 && point <= 49){
        grade = "F"
    } else {
        grade = "คะแนนไม่ถูกต้อง"
    }
    return grade
}
console.log(calculateGrade(80));
