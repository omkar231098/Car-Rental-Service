let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

let UpdateCarName=document.getElementById("update-car-name");
let UpdateCarPrice=document.getElementById("update-car-price");
let UpdateCarImg=document.getElementById("update-car-img");
let UpdateCarMileage=document.getElementById("update-car-mileage");
let UpdateCarColor=document.getElementById("update-car-color");
let UpdateCarAvailable=document.getElementById("update-car-available");
let UpdateCarModel=document.getElementById("update-car-model");
let UpdateCarLocation=document.getElementById("update-car-location");
let UpdateCarYear=document.getElementById("update-car-year");
let UpdateCarbtn=document.getElementById("update-car");
 
let CarName=document.getElementById("car-name");
let CarPrice=document.getElementById("car-price");
let CarImg=document.getElementById("car-img");
let CarMileage=document.getElementById("car-mileage");
let CarColor=document.getElementById("car-color");
let CarAvailable=document.getElementById("car-available");
let CarModel=document.getElementById("car-model");
let CarLocation=document.getElementById("car-location");
let CarYear=document.getElementById("car-year");
let CarAddbtn=document.getElementById("add-car");

  
window.addEventListener("load", () => {
  fetchAndRenderEmployees();
 
});


// --------------------------------------------------------------------------------------------------------

function fetchAndRenderEmployees(pagenumber=1){
  const url = new URL('https://63c55501f3a73b347853986b.mockapi.io/cars');

url.searchParams.append('page', `${pagenumber}`);
url.searchParams.append('limit', 12);

fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
  
}).then(res => {
  if (res.ok) {
console.log(res)

    let totalCats =100
      showPagination(totalCats, 12);

      return res.json();


  }
  // handle error
}).then(data => {
  
  
  // CarsData=data 

 mainSection.innerHTML=renderCardList(data)
  
  renderCardList(data)


}).catch(error => {
  // handle error
})

    
}
// -------------------------------------------------------------------------------------------------------------

function renderCardList(data) {

  let cardList = `

    <div class="card-list">
      ${data.map((item) =>getCard(
            item.id,
            item.Name,
            item.price,
            item.img,
            item.Mills,
            item.Exterior,
            item.Available,
            item.Model,
            item.location,
            item.Year
          )
        )
        .join("")}
    </div>
  `;

  mainSection.innerHTML = cardList;


  const buttons = document.querySelectorAll('.card__Button1');

  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      const currentId = event.target.id;
      populateEditForms(currentId)
      // console.log(`Clicked button id: ${currentId}`);
    });
  });


  const buttons1 = document.querySelectorAll('.card__Button');

  buttons1.forEach(button => {
    button.addEventListener('click', function(event) {
      const currentId = event.target.id;
      populateEditForms1(currentId)
      // console.log(`Clicked button id: ${currentId}`);
    });
  });







}




// ---------------------------------------------------------------------------------------------------------------

function getCard(id,Name,price,img,Mills,Exterior,Available,Model,location,Year) {

  let card = `
  <div class="card" id="cardhover" data-id=${id} >
  <div class="card__img">
  <img width="80%" src=${img} alt="Car Image" />
  </div>
  <div class="card__body">
      <div  class="card__Button"  ><button class="cardbtn" id=${id}>Edit Details</button></div>
      <div  class="card__Button1"  ><button  class="cardbtn1" id=${id} >Delete Car</button></div>
    <h3 class="card_item card_title">${Name}</h3>
    
    <div class="card_item card_description">
      ${Mills} miles . ${Exterior}
    </div>
    <hr>
    <div class="card_item card_description">
      Available ${Available}
    </div>
    <hr>
    <div class="card_item card_description">
     Your Price $${price}
    </div>
    
  </div>
  </div>
  `;

  return card;


}


// ----------------------------------------------------------------------------------------------------------------

function showPagination(totalItems, limit) {
  const numOfButtons = Math.ceil(totalItems / limit); // 3 button

  paginationWrapper.innerHTML = null;

  for (let i = 1; i <= numOfButtons; i++) {
    paginationWrapper.append(getAButton(i, i));
  }
}

function getAButton(text, pageNumber) {
  let btn = document.createElement("button");
  btn.classList.add("pagination-button");
  btn.setAttribute("data-page-number", pageNumber);
  btn.textContent = text;

  btn.addEventListener("click", function (e) {
    let pageNumber = e.target.dataset["pageNumber"];
    fetchAndRenderEmployees(pageNumber);
    
  });

  return btn;
  // return `
  //   <button class="pagination-button" data-page-number="${pageNumber}" >${text}</button>
  // `
}

// --------------------------------------------------------------------------------------------------

function populateEditForms(currentId) {

  fetch(`https://63c55501f3a73b347853986b.mockapi.io/cars/${currentId}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
 
}).catch(error => {
  // handle error
})

fetchAndRenderEmployees();

}

// ------------------------------------------------------------------------------------



function populateEditForms1(currentId){

  fetch(`https://63c55501f3a73b347853986b.mockapi.io/cars/${currentId}`, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(data => {
    
    UpdateCarIdInputValue=data.id;

    UpdateCarName.value=data.Name;
    UpdateCarPrice.value=data.price;
    UpdateCarImg.value=data.img;
    UpdateCarMileage.value=data.Mills;
    UpdateCarColor.value=data.Exterior;
    UpdateCarAvailable.value=data.Available;
    UpdateCarModel.value=data.Model;
    UpdateCarLocation.value=data.location;
    UpdateCarYear.value=data.Year;



  }).catch(error => {
    // handle error
  })

}


UpdateCarbtn.addEventListener("click", function () {
  alert("Update the Car Data Successfully")
 
  let UpdateCarIdValue=UpdateCarIdInputValue;

  let UpdateCarNameValue = UpdateCarName.value;
  let UpdateCarPriceValue = +UpdateCarPrice.value;
  let UpdateCarImgValue = UpdateCarImg.value;
  let UpdateCarMileageValue = +UpdateCarMileage.value;
  let UpdateCarColorValue = UpdateCarColor.value;
  let UpdateCarAvailableValue = UpdateCarAvailable.value;
  let UpdateCarModelValue = UpdateCarModel.value;
  let UpdateCarLocationValue = UpdateCarLocation.value;
  let UpdateCarYearValue = +UpdateCarYear.value;

  let userObj = {
    Name: UpdateCarNameValue,
    price: UpdateCarPriceValue,
    img: UpdateCarImgValue,
    Mills: UpdateCarMileageValue,
    Exterior:UpdateCarColorValue,
    Available:UpdateCarAvailableValue,
    Model:UpdateCarModelValue,
    location:UpdateCarLocationValue,
    Year:UpdateCarYearValue
  }



fetch(`https://63c55501f3a73b347853986b.mockapi.io/cars/${UpdateCarIdValue}`, {
    method: "PUT",
    body: JSON.stringify(userObj),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    fetchAndRenderEmployees();
  });



});

// ------------------------------------------------------------------------------------------------------------

CarAddbtn.addEventListener("click", () => {


  let CarNameValue = CarName.value;
  let CarPriceValue = +CarPrice.value;
  let CarImgValue = CarImg.value;
  let CarMileageValue = +CarMileage.value;
  let CarColorValue = CarColor.value;
  let CarAvailableValue = CarAvailable.value;
  let CarModelValue = CarModel.value;
  let CarLocationValue = CarLocation.value;
  let CarYearValue = +CarYear.value;

// creating obj to passing by making json stringify

  let userObj = {
    Name:CarNameValue,
   price: CarPriceValue,
    img: CarImgValue,
   Mills: CarMileageValue,
    Exterior:CarColorValue,
    Available:CarAvailableValue,
   Model:CarModelValue,
    location:CarLocationValue,
    Year:CarYearValue
  };

// For adding any data to api data we use post method

  fetch("https://63c55501f3a73b347853986b.mockapi.io/cars", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    fetchAndRenderEmployees();
  });



});