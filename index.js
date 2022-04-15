//https://raw.githubusercontent.com/priyankanick/MCU/master/data.json

var e;
 async function api_call()
{
   
    var data = await fetch('https://raw.githubusercontent.com/priyankanick/MCU/master/data.json')
    e = await data.json();
    console.log(e);
    for(let i=0;i<e.length;i++){
        let img_arr=`<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">`
        for(let j=0;j<e[i].poster.length;j++)
        {
           if(j==0){
            img_arr+=` <div class="carousel-item active">
                <img src="${e[i].poster[j]}" class="d-block w-100" alt="...">
              </div>`
           }else{
            img_arr+=` <div class="carousel-item">
            <img src="${e[i].poster[j]}" class="d-block w-100" alt="...">
          </div>`
           }
              
           
        }
       
       img_arr+=` </div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button></div>`
    document.getElementById("row").innerHTML+=` <div class="col-xxl-3 col-lg-4 col-md-6">
    <div class="card" style="width: 100%">
       
        <img src="${e[i].poster[3]}" class="card-img-top poster" alt="...">
        <div class="card-body">
            <h5 class="card-title">${e[i].title}</h5>
            <p class="card-text">${e[i].details}</p>
            <a href="./page2.html"  class="btn btn-primary"  onClick="saveData('${i}')">Trailer</a>
        </div>
    </div>
</div>`
    }
}

function saveData(i){
    console.log(e[i]);
    localStorage.setItem("name",JSON.stringify(e[i]));
}