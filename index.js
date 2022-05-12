document.addEventListener('DOMContentLoaded', () => {

   getPolish()
   
   
})


function getPolish(){
    let main = document.getElementById('main ul')
    let brandList = document.getElementById('brand-list')

  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`)
  .then(resp => resp.json())
  .then(polish => {
      polish.map(polish => {
          brandList.innerHTML += `
          <li>
            <a href="#" data-id="$polish.id}"> ${polish.brand}</a>
            </li>`

      })
   seeInfo()
  })

}
  

function seeInfo(){
    const polish = document.querySelectorAll('li a')

    polish.forEach(polish => {
        polish.addEventListener('click', bottleCard)
    })
    
}


function bottleCard(e){
    let card = document.getElementById('info-card')
     
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`)
    .then(resp => resp.json())
    .then(polish => { 
        polish.forEach(polish => {
        card.innerHTML += `
    <div class="card">
    <h2>${polish.name}</h2>
    <img src="${polish.image_link}" class="bottle-image" />
    <p>${polish.price}</p>
    <p>${polish.description}</p>
    
  </div>
  `
    })
})

}

