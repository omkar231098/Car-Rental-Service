let formElement=document.querySelector("form");
let countryInp=document.getElementById("country");

let firstName=document.getElementById("firstName");

let lastName=document.getElementById("last-name");

let mobileNo=document.querySelector("#mobile");

let emailId=document.getElementById("email");

let firstPassword=document.getElementById("firstPassword");

let secondPassword=document.getElementById("secondPassword");
let addressInput=document.getElementById("address");

let zipcodeInput=document.getElementById("zipcode");

let submit=document.getElementById("submit")
;

let url=`https://63c638794ebaa80285418bc3.mockapi.io/products`;
formElement.addEventListener("submit",(e)=>{
e.preventDefault();
    let obj={
        name:`${firstName.value} ${lastName.value}`,
        mobile:mobileNo.value,
        email:emailId.value,
        password:firstPassword.value,
        address:addressInput.value,
        zipcode:zipcodeInput.value,
        country:countryInp.value
    }
   if(firstPassword.value==secondPassword.value){
    //console.log(obj);
    alert("Successfully Registred");
    fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{ "Content-Type" : "application/json"}
    }).then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data)
    })

   }else{
    alert("Password Mismatched")
    secondPassword.value=null;
   }
   
})