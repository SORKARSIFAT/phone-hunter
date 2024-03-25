const loadPhones = async(searchText)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
}

const displayPhone = phones =>{
   
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = "";
phones = phones.slice(0,10);

// no found phone 
const noPhones = document.getElementById("no-phone");
if (phones.length === 0) {
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
        </div>
      </div>
     
        `
     
        phoneContainer.appendChild(phoneDiv);
      });
      // stop loader
toggleSpinner(false);
}

document.getElementById("btn-search").addEventListener("click" , function(){
  // start loader 
toggleSpinner(true);
     const searchField = document.getElementById("search-field").value;
     
     const  searchText = searchField ;
     loadPhones(searchText);
     
    
})

const toggleSpinner = isLoading =>{
const loaderSection = document.getElementById("loader");
if(isLoading){
  loaderSection.classList.remove('d-none');
}
else{
  loaderSection.classList.add('d-none'); 
}
}




// loadPhones();


