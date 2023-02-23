  // Collasping Sidebar Javascript
  
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
 

  // -----------------------------------------------------------------------------------------------------------------
  let mainSection = document.getElementById("data-list-wrapper");
  let paginationWrapper = document.getElementById("pagination-wrapper");
  

  
window.addEventListener("load", () => {
  fetchAndRenderEmployees();
  fetchAndRenderEmployees1() 
});

let CarsData = null;
let CarsData1=null;

function fetchAndRenderEmployees1() {
  fetch("https://63c55501f3a73b347853986b.mockapi.io/cars")
    .then((res) => {
      // let totalCats = 70

      // console.log(res)
      // showPagination(totalCats, 10);
      return res.json();
    })
    .then((data) => {
      
      CarsData1=data
      // console.log(vaccinearr);


      // mainSection.innerHTML = renderCardList(data);

      // renderCardList(data);
    
      
      
    });

    
}










// --------------------------------------------------------------------------------------------------------

function fetchAndRenderEmployees(pagenumber=1) {
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
  // mockapi returns first 10 tasks that are not completed
  
  // CarsData=data 

 mainSection.innerHTML=renderCardList(data)
  
  renderCardList(data)


}).catch(error => {
  // handle error
})

    
}
// -------------------------------------------------------------------------------------------------------------

// To Search The Cars From Globally CarsData,This Code Invoke Only One Time After Oninput In SearchBox

// const input = document.getElementById("searchbox");

// function handleInput() {
 
//  fetchAndRenderEmployees1()

// }

// function handleClick() {
//  input.removeEventListener("click", handleClick);
//  input.addEventListener("input", handleInput, { once: true });
// }

// input.addEventListener("click", handleClick);



// -----------------------------------------------------------------------------------------------------------------
// To Search the Cars

function search(){
 
 let q=document.querySelector("#searchbox").value

let newData=CarsData1.filter(function(elem){
    return elem.Name.toLocaleLowerCase().includes(q.toLocaleLowerCase());
});

renderCardList(newData)

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

  
}


// ---------------------------------------------------------------------------------------------------------------

function getCard(id,Name,price,img,Mills,Exterior,Available,Model,location,Year) {

  let card = `
  <div class="card" id="cardhover" data-id=${id} >
  <div class="card__img">
  <img src=${img} alt="Car Image" />
  </div>
  <div class="card__body">
      <div  class="card__item card__Button"  data-id=${id} ><button id="cardbtn">View Details</button></div>
    <h3 class="card__item card__title">${Name}</h3>
    
    <div class="card__item card__description">
      ${Mills} miles . ${Exterior}
    </div>
    <hr>
    <div class="card__item card__description">
      Available ${Available}
    </div>
    <hr>
    <div class="card__item card__description">
     Your Price $${price}
    </div>
    
  </div>
  </div>
  `;

  return card;


}





//  ----------------------------------------------------------------------------------------------------------------


  
// ------------------------------------------------------------------------------------------------------------------
// Sorting the Carsdata

let pagehide=document.getElementById("pagination-wrapper");

function handlesort1() {
  pagehide.style.display="none"
  CarsData1.sort((a, b) => b.Year - a.Year);
  renderCardList(CarsData1)
}

function handlesort2() {
  pagehide.style.display="none"
  CarsData1.sort((a, b) => a.Year - b.Year);
  renderCardList(CarsData1)
}

function handlesort3() {
  pagehide.style.display="none"
  CarsData1.sort((a, b) => a.Mills - b.Mills);
  renderCardList(CarsData1)
}
  
function handlesort4() {
  pagehide.style.display="none"
  CarsData1.sort((a, b) => b.Mills - a.Mills);
  renderCardList(CarsData1)
}
    
function handlesort5() {
  pagehide.style.display="none"
  CarsData1.sort((a, b) => a.price - b.price);
  renderCardList(CarsData1)
}

function handlesort6() {
  pagehide.style.display="none"
  CarsData1.sort((a, b) => b.price - a.price);
  renderCardList(CarsData1)
}

// -----------------------------------------------------------

function brand1() {
  let checkbox = document.getElementsByClassName("1");

  if (checkbox.checked == true) {
    let brand = document.getElementsByClassName("1").value;

    filterbrand = CarsData1.filter(function (elem) {
      return elem.Model == brand;
    });
  }

  renderCardList(filterbrand);
}















//  ----------------------------------------------------------------------------------------------------------------

// Resetting the page

function reset() {
  fetchAndRenderEmployees();
}



// ------------------------------------------------------------------------------------------------------------------



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

