function totalScore(grade){
    if(grade >= 70 && grade <=100){
        result = "A"
    }
    else if(grade >=68 && grade  <70){
       result = "your score is A"
    }
    else if(grade >= 60 && grade <70 ){
        result = "B"
    }
    else if(grade >= 58 && grade <60 ){
        result = "Your score is B"
    }
    else if(grade >= 50 && grade <60 ){
        result = "C"
    }
    else if(grade >= 48 && grade <50 ){
        result = "Your score is C"
    }
    else if(grade >= 40 && grade <50 ){
        result = "D"
    }
    else if(grade >=38  && grade <40){
        result = "Your score is D"
    }
    else if(grade >= 0 && grade <40 ){
        result = "F"
    }
    else{
        result = "invalid  score"
    }
    console.log(result)
}
function score(CA1, CA2, exam){
    if(CA1, CA2 >= 0 && CA1, CA2 <=20){
        return CA1+CA2+exam
    }
    else if(exam >= 0 && exam <= 100){
        return CA1+CA2+exam
    } 
    else if(CA1, CA2 <0 && CA1, CA2 >20){
        console.log("Input right value")
    }
    
}
totalScore(score(9, 10, 34))
totalScore(score(10,12,36))
totalScore(score(17,8,34))
totalScore(score(12,9,20))
totalScore(score(7,19,55))

