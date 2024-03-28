const loadPhones = async(searchText , datalist)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data , datalist);
}

const displayPhone = (phones ,datalist) =>{
   
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = "";

// show the  Button
const showAll = document.getElementById("showAll");
if( datalist && phones.length > 10){
  phones = phones.slice(0,10);
  
  showAll.classList.remove('d-none');
  
  
  
}
else{
   showAll.classList.add('d-none')
}

// no found phone 
const noPhones = document.getElementById("no-phone");
if (  phones.length === 0) {
  noPhones.classList.remove('d-none');
} 
else {
  noPhones.classList.add('d-none');
}

    phones.forEach(phone => {
      document.getElementById("search-field").value = "";
        console.log(phone);
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML=`
        <div class="card p-4 shadow-md  rounded">
        <img class=" " src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="phoneDetails('${phone.slug}')" href = "#" class = "btn btn-danger"> Show  Details </button>
        </div>
      </div>
     
        `
     
        phoneContainer.appendChild(phoneDiv);
      });
      // stop loader
toggleSpinner(false);
}

const process = (datalist) =>{
     toggleSpinner(true);
     const searchField = document.getElementById("search-field");

     
     const  searchText = searchField.value;
     loadPhones(searchText , datalist);
     
};


document.getElementById("btn-search").addEventListener("click" , function(){
 

     process(10);
    
});

// search input field enter key handler  
document.getElementById('search-field').addEventListener('keypress' , function(e){
  // console.log(e.key);
  if(e.key === 'Enter'){
    process(10);
  }
});

const toggleSpinner = isLoading =>{
const loaderSection = document.getElementById("loader");
if(isLoading){
  loaderSection.classList.remove('d-none');
}
else{
  loaderSection.classList.add('d-none'); 
}
}


document.getElementById("btnShow").addEventListener("click",function(){

 process();
  
     

});



const phoneDetails = async id =>{
  const url= `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.data);


}

// loadPhones();


