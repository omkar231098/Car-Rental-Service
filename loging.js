window.addEventListener("load",function(){
   showModal()
})




function showModal(){
   document.querySelector(".overlay").classList.add("showoverlay");
   document.querySelector(".loginform").classList.add("showloginform")
    }

   function hideModal(){
        document.querySelector(".overlay").classList.remove("showoverlay");
       //   document.querySelector(".loginform").classList.remove("showloginform")
    }




    
    let url=`https://63c638794ebaa80285418bc3.mockapi.io/products`;
    let username=document.querySelector("#username");
    let password=document.querySelector("#password");
    let loginBtn=document.querySelector("form");
    

    loginBtn.addEventListener("submit",(e)=>{
       e.preventDefault();
      fetch(url).then((res)=>{
       return res.json();
      }).then((data)=>{
       console.log(data)
    let user=data.filter((ele)=>{
       return ele.email==username.value
    })  
       if(user[0]==undefined){
           alert("Wrong Credientials")
       }else{
          if(user[0].password==password.value){
           alert("Login Success")
           window.location.assign("index.html")
          }else{
           alert("Wrong Password");
           password.value=null;
          }
       }
      })
    })