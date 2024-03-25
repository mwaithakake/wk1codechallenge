let grossSalary = 50000

function calculateMonthlyPaye(grossSalary){

if (grossSalary <24000){
    return  payee = (grossSalary *0.1 )
}

if (grossSalary <=32333){
    return payee = ((grossSalary - 24000)*0.25)

}

if (grossSalary <=500000){
    return payee = ((grossSalary - 32333)*0.3)

}

if (grossSalary <= 800000) {
    return payee = ((grossSalary - 500000)* 0.325)

}

if (grossSalary > 800000) {
    return payee = ((grossSalary - 800000)* 0.35)
}

}



function calculateYearlyPaye(grossSalary){

if (grossSalary <288000){
    return payee = (grossSalary *0.1 )
}

if (grossSalary <=388000){
    return payee = ((grossSalary - 288000)*0.25)

}

if (grossSalary <=6000000){
    return payee = ((grossSalary - 388000)*0.3)

}

if (grossSalary <= 9600000) {
    return payee = ((grossSalary - 6000000)* 0.325)

}

if (grossSalary > 9600000) {
      return payee = (grossSalary - 9600000)* 0.35
}

}


function calculateNHIF(grossSalary){
  if (grossSalary < 5999){
     return deduction = 150
  }

  if (grossSalary <= 7999){
    return deduction = 300
  }

 if (grossSalary <= 11999){
    return deduction = 400
 }

if (grossSalary <= 14999){
    return deduction = 500
}
if (grossSalary <= 19999) {
      return deduction = 600
  }
  if (grossSalary <=24999){
     return deduction = 750
  }
  if (grossSalary <= 29999){
    return deduction = 850
  }
  if (grossSalary <= 34999){
    return deduction = 900
  }
  if (grossSalary <= 39999) {
    return deduction = 950
}
if (grossSalary <= 44999) {
    return deduction = 1000

}
if (grossSalary <= 49999) {
    return deduction = 1100
}
if (grossSalary <= 59999) {
  return deduction = 1200
}
if (grossSalary <= 69999){
  return deduction = 1300
}
if (grossSalary <=79999) {
   return deduction = 1400
}
if (grossSalary <= 89999){

  return deduction = 1500
}

if (grossSalary <= 99999){
  return deduction = 1600
}
if (grossSalary >100000){
  return deduction = 1700

}
}

function calculateNSSF(grossSalary){
  return NSSF = (grossSalary *0.06)
  
}

function calculateHousingLevy(grossSalary){
  return housingLevy = (grossSalary * 0.015)
}

function calculateNetSalary(grossSalary){
  const fullDeductions = calculateMonthlyPaye(grossSalary) + calculateNHIF(grossSalary) + calculateNSSF(grossSalary) + calculateHousingLevy(grossSalary)
  return netSalary = grossSalary - fullDeductions
}


 console.log ("grossSalary") + console.log  (grossSalary)
console.log("Payee") + console.log (calculateMonthlyPaye(grossSalary))
console.log ("NHIF Deductions") + console.log (calculateNHIF(grossSalary))
console.log("NSSF Deductions") + console.log (calculateNSSF(grossSalary))
console.log("Housing Levy") + console.log (calculateHousingLevy(grossSalary))
console.log("NetSalary") + console.log (calculateNetSalary(grossSalary))