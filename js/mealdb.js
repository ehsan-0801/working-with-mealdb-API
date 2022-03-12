const searchfood = () =>{
    const searchfield = document.getElementById('search_field')
    const searchText =searchfield.value;
    // console.log(searchText);
    searchfield.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResults(data.meals))
}
const displaySearchResults = meals =>{
    // console.log(meals)
    const searchResult = document.getElementById('search_result')
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if(meals.length == 0){
        console.log('efwe')
    }
    else{
        meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <h3 class='text-light'>Search Results</h3>
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">
                        ${meal.strInstructions.slice(0,200)}
                    </p>
                </div>
          </div>
        `;
        searchResult.appendChild(div)
        
    })
    }
    
}
const loadMealDetail = mealId =>{
    // console.log(mealId);
    // console.log(typeof(mealId));
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    console.log(meal)
    const mealdetails = document.getElementById('meal_details')
    const div =document.createElement('div')
    div.classList.add('card')
    div.innerHTML =`
                <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">
                        ${meal.strInstructions.slice(0,150)}
                    </p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Watch  videos</a>
                    </div>`;
                    mealdetails.appendChild(div)

}
const searchBtn = document.getElementById("button_search");
const searchInput = document.getElementById("search_field");

// Execute a function when the user releases a key on the keyboard
searchInput.addEventListener("keypress", function(event) {
    console.log(event);
  // Number 13 is the "Enter" key on the keyboard
  if (event.key == 'Enter') {
    // Cancel the default action, if needed
    // event.preventDefault();
    // Trigger the button element with a click

    searchBtn.click();
  }
});