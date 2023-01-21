/** Circle effect on homepage with button click**/
const url = window.location.href;
const lastSegment = url.split("/").pop();
if (lastSegment === "index.html") {

let circle = document.getElementById("circle");

let btnUp = document.getElementById("btnUp");
let btnDown = document.getElementById("btnDown");

let rotateValue = circle.style.transform;
console.log(rotateValue);
let rotateSum;

function upClick() {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

function downClick() {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
 }
} else if (lastSegment === "contact.html") {

/*Contact Form*/
/*Form Validation*/

//Validate Name Field
function validate() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("InputEmail");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  //check if empty
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    subjectInput.value == "" ||
    messageInput.value == ""
  ) {
    alert("Field cannot be empty");
    //check if name field has more that 6 chars
  } else if (nameInput.value.length < 6) {
    alert("Need 6 or more chars.");
    //check if name field has 20 or less chars
  } else if (nameInput.value.length > 20) {
    alert("Only 20 Chars allowed.");
    //success alert if validation is successful
  } else {
    alert("Form Validated Successfully.");
  }
}
} else if (lastSegment == "cart.html") {
 //Cart total calculation
 let quantity = document.getElementById("qty");
 let totalValue = document.getElementById("total-value");
 let price = document.getElementById("price");
 // let price = document.getElementsByTagName("h3")[1].innerHTML;

 quantity.addEventListener("change", () => {
   calculateTotal();
 });

 const calculateTotal = () => {
   // let total = parseInt(quantity.value) * parseInt(price.value);
   totalValue.innerText = parseInt(quantity.value) * parseInt(price.innerText);
 };
}
