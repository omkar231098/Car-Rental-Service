window.addEventListener("load", () => {
 
  fetchAndRenderEmployees1() 
  fetchAndRenderEmployees();
});
 
 
 
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
 

// ------------------------------------------------------------------------------------------------------------------


let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");
  

  


let CarsData = null;
let CarsData1=null;

async function fetchAndRenderEmployees1() {
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



// -----------------------------------------------------------------------------------------------------------------

async function fetchAndRenderEmployees(pagenumber=1) {
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
 
}).then(data => {

 mainSection.innerHTML=renderCardList(data)
  
  renderCardList(data)


}).catch(error => {
  
})

    
}

// ------------------------------------------------------------------------------------------------------------------

// To Search the Cars

function search(){
 
 let q=document.querySelector("#searchbox").value

let newData=CarsData1.filter(function(elem){
    return elem.Name.toLocaleLowerCase().includes(q.toLocaleLowerCase());
});

renderCardList(newData)

}



// ------------------------------------------------------------------------------------------------------------------

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
      // console.log(currentId)
      fetchAndRenderEmployees3(currentId) 
      // console.log(`Clicked button id: ${currentId}`);
    });
  });
  
}
// ---------------------------------------------------------------------------------------------------------





// ---------------------------------------------------------------------------------------------------------------

function getCard(id,Name,price,img,Mills,Exterior,Available,Model,location,Year) {

  let card = `
  <div class="card" id="cardhover" data-id=${id} >
  <div class="card__img">
  <img width="80%" src=${img} alt="Car Image" />
  </div>
  <div class="card__body">
      <div  class="card__Button1"  ><button class="cardbtn" id=${id}>View Details</button></div>
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

// -------------------------------------------------------------------------------------------------------------------

function brand1() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box1")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box1").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.Model == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand2() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box2")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box2").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.Model == brand;
     });
  }

  renderCardList(filterbrand);
}


function brand3() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box3")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box3").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.Model == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand4() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box4")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box4").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.Model == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand5() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box5")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box5").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.Model == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand6() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box6")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box6").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.Model == brand;
     });
  }

  renderCardList(filterbrand);
}


function brand7() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box7")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box7").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.Model == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand8() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box8")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box8").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand9() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box9")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box9").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand10() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box10")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box10").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}


function brand11() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box11")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box11").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}


function brand12() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box12")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box12").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}


function brand13() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box13")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box13").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}


function brand14() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box14")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box14").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand15() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box15")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box15").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand16() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box16")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box16").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}

function brand17() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box17")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box17").value;
    
     filterbrand = CarsData1.filter(function (elem) {
       return elem.location == brand;
     });
  }

  renderCardList(filterbrand);
}


function brand20() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box20")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box20").value;
    
     filterbrand = CarsData1.filter(function (elem) {
      if(elem.Mills<=brand){
return elem.Mills
      }
       
     });
  }

  renderCardList(filterbrand);
}

function brand21() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box21")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box21").value;
    
     filterbrand = CarsData1.filter(function (elem) {
      if(elem.Mills<=brand){
return elem.Mills
      }
       
     });
  }

  renderCardList(filterbrand);
}
function brand22() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box22")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box22").value;
    
     filterbrand = CarsData1.filter(function (elem) {
      if(elem.Mills<=brand){
return elem.Mills
      }
       
     });
  }

  renderCardList(filterbrand);
}

function brand23() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box23")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box23").value;
    
     filterbrand = CarsData1.filter(function (elem) {
      if(elem.Mills<=brand){
return elem.Mills
      }
       
     });
  }

  renderCardList(filterbrand);
}

function brand24() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box24")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box24").value;
    
     filterbrand = CarsData1.filter(function (elem) {
      if(elem.Mills<=brand){
return elem.Mills
      }
       
     });
  }

  renderCardList(filterbrand);
}

function brand25() {
  pagehide.style.display="none"
  let checkbox = document.getElementById("box25")

  if (checkbox.checked === true) {
    let brand = document.getElementById("box25").value;
    
     filterbrand = CarsData1.filter(function (elem) {
      if(elem.Mills<=brand){
return elem.Mills
      }
       
     });
  }

  renderCardList(filterbrand);
}

//------------------------------------------------------------------------------------------------------------------

// Resetting the page

function reset() {
  window.location.reload()
}



//------------------------------------------------------------------------------------------------------------------

// Pagination Function

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

