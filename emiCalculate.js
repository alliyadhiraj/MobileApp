// for emi

let loanAmount = document.getElementById("amount"); 
let interestRate = document.getElementById("interest");
let loanDuration = document.getElementById("loantenure");
let calculate = document.getElementById("calculate");

 calculate.addEventListener('click',(e)=>{
  e.preventDefault();
  calculateEmi();
})

function calculateEmi(){
    let isYear = document.getElementById("year").checked;
    let isMonth = document.getElementById("Month").checked;
    let noOfMonths = 0;

    if(isYear == "" && isMonth == ""){
        console.log("print")
        alert("Please select loan Tenure type-> Month or Year")
    } 
    else{ 
    if(isYear == true){
       noOfMonths = loanDuration.value * 12;
    }
    else{
      noOfMonths = loanDuration.value;
    }

    let r = parseFloat(interestRate.value)/12/100;
    let p = loanAmount.value;
    let n =noOfMonths;

    let EMI = (p*r *Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
    let totalInterest = (EMI * n) - p;
    let totalPayment = totalInterest + parseFloat(p);

    document.getElementById("emi").innerText = "Rs" + Math.round(EMI);
    document.getElementById("totalinterest").innerText = "Rs" + Math.round(totalInterest);
    document.getElementById("totalpayment").innerText = "Rs" + Math.round(totalPayment);

  }
}