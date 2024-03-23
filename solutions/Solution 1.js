function studentMarks(marks){
  

    if (marks >= 79 && marks<100){
       return "A"
   
    } if (marks >=60 && marks<100) {
       return "B"
    } if (marks >= 49 && marks<100 ) {
       return "C"
   
    }
     if (marks>= 40 && marks<100 ){
       return "D"
     } if (marks <40 && marks<100 && marks>0){
       return "E"}
        if (marks<=0 || marks>100 ) {
        return "Invalid"
      }
      
    }
 