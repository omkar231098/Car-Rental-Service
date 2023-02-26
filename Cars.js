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

let mainSection1 = document.getElementById("data-list-wrapperr");
let mainSectionn = document.getElementById("sidenav1");
let mydisplay=document.getElementById("CarDataMain");

async function fetchAndRenderEmployees3(currentId) {
mydisplay.style.display="none"
  fetch(`https://63c55501f3a73b347853986b.mockapi.io/cars/${currentId}`, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(data => {


  mainSection1.innerHTML=getCard1(
    data.id,
    data.Name,
    data.price,
    data.img,
    data.Mills,
    data.Exterior,
    data.Available,
    data.Model,
    data.location,
    data.Year
        )

  getCard1(
    data.id,
    data.Name,
    data.price,
    data.img,
    data.Mills,
    data.Exterior,
    data.Available,
    data.Model,
    data.location,
    data.Year
        )
  

  mainSectionn.innerHTML=getcard2(
    data.id,
    data.Name,
    data.price,
    data.img,
    data.Mills,
    data.Exterior,
    data.Available,
    data.Model,
    data.location,
    data.Year
    
        )

        getcard2(
          data.id,
    data.Name,
    data.price,
    data.img,
    data.Mills,
    data.Exterior,
    data.Available,
    data.Model,
    data.location,
    data.Year
    
        )
   


  // Do something with the list of tasks
}).catch(error => {
  // handle error
})
}





function getcard2(id,Name,price,img,Mills,Exterior,Available,Model,location,Year) {

  let card = `
  <div data-id=${id} >
          
          <div >
             
            <h3 class="PriceTitle">Your Price $${price}/-</h3>
            <hr>
            <div class="downpayment">
            Sample Payment : ${(price * 0.00575 * Math.pow((1 + 0.00575), 72)) / (Math.pow((1 + 0.00575),72) - 1)} /Month
            </div>
            
            <div class="downpayment">
              72 Months @ 6.9% A.P.R. (estimated financing rate) $0 Down Payment
            </div>
            
            <div >
            <button onClick="window.location.href='payment.html'" class="Payment">Make Full Payment</button>
            
            </div>
            <div class="downpayment">
              <button onClick="window.location.href='payment.html'" class="Payment1">Make Payment in EMI</button>
              
              </div>
              <div class="downpayment">
                Available for Test drive ${Available}
                
                </div>
  
                <div class="downpayment">
                  12 Month Warranty
                  
                  </div>
  
                  <div id="info">
                    <div id="info1" >Request More Info</div>
                    <div id="info2">Finance</div>
                  </div>
                  <hr>
  
                  <div id="lastinfo">
                    <h3>We're here to help</h3>
                    <h3>855-850-0040</h3>
                  </div>
              
            
          </div>
          </div>
  `;
  
  
  
  mainSectionn.innerHTML=card
  
  }
  
  
  
  function getCard1(id,Name,price,img,Mills,Exterior,Available,Model,location,Year) {

    let card = `
    <div  data-id=${id} >
            <div >
            <img  src=${img} alt="Car Image" />
            </div>
            <div >
                <div  class="carname"><b>${Name}</b></div>
                <div class="carprice">
                  <b>Your Price $ ${price}<b/> 
                 </div>
              
              <div class="caravailable">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                </svg> Available for Test drive ${Available}<br>
                &ensp;&ensp;&ensp; Call 855-850-0040 To Start Your Ultimate Test Drive or
                to request more<br>
                &ensp;&ensp; &ensp;information
              </div>
             
              <div class="carlocation">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg> Located at ${location}
              </div>
             
              <div class="Cardetails">
              <div id="box26" >
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Exterior Color</div>
              <div>${Exterior}</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Interior Color</div>
              <div>Black</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Mileage</div>
              <div>${Mills} miles</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Body/Seating</div>
              <div>CUV/5 seats</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Fuel Economy</div>
              <div>24/30 MPG City/Hwy</div>
                
              </div>
    
              <div id="box27">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Transmission</div>
                <div>Automatic</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Drivetrain</div>
                <div>Front-wheel Drive</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Engine</div>
                <div>I-4 cyl</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;VIN</div>
                <div>JA4APUAU6MU036731</div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>&ensp;Stock Number</div>
                <div>JA4APUAU6MU036731</div>
    
              </div>
              </div>
              
              <div id="infodiv">
                Estimated Loan term, monthly payment and APR are all based on approved
                credit. Your actual APR, monthly payment and loan term could change
                 depending on your actual credit and amount financed.
    
                Please note: If SiriusXM is available as one of the entertainment 
                features on the pre-owned vehicle, SiriusXM Satellite radio trial
                duration with used vehicle purchase is only for 3 months, irrespective
                 of what shows in the details below.
              </div>
    
              <div id="bottomimg">
    
                <img width="100%" src="https://pictures.dealer.com/a/aviscarsalesgroup/1757/1ca78ee3e0bfd28a8180a2bb530f9ec7x.jpg" alt="bottomimg">
              </div>
    
              
    
               <H3 id="title" >Highlighted Features</H3>
    
               <div id="features">
    
                <div id="box28" >
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-sign-turn-right-fill" viewBox="0 0 16 16">
                    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466Z"/>
                  </svg>&ensp;Lane departure</div>
    
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-thermometer-sun" viewBox="0 0 16 16">
      <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
      <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
    </svg>&ensp;Automatic temperature control</div>
    
    <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bluetooth" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"/>
                  </svg>&ensp;Wireless phone connectivity</div>
    
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                  </svg>&ensp;Exterior parking camera rear</div>
                 
                  </div>
        
                  <div id="box29">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                    </svg>&ensp;Auto high-beam headlights</div>
    
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                    </svg>&ensp;Rain sensing wipers</div>
    
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-record2-fill" viewBox="0 0 16 16">
                      <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                      <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>&ensp;Auto-dimming rearview mirror</div>
    
    
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>&ensp;Split folding rear seat</div>
                    
        
                  </div>
    
    
               </div>
    
    
    
            </div>
            </div>
    `;
    
    
    
    mainSection1.innerHTML=card
    
    }
    
    

















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

