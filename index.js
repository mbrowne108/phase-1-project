document.addEventListener('DOMContentLoaded', runPage)
function runPage() {
    const recipeDisplay = document.querySelector("#display-recipe")
    const likedDisplay = document.querySelector("#saved-recipes")
    
    const button = document.getElementById('button')
    const buttonInput = document.querySelector("#spirit-list")
    button.addEventListener('click', fetchRecipe)


    // const form = document.querySelector('form')
    // const formInput = document.querySelector("#spirit")
    // form.addEventListener('submit', fetchRecipeForm);

    // function fetchRecipeForm(e) {
    //     recipeDisplay.innerHTML = ''
    //     e.preventDefault();
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + formInput.value)
    //     .then(res => res.json())
    //     .then(displayRecipes)
    // }

    function fetchRecipe(e) {
        recipeDisplay.innerHTML = ''
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + buttonInput.value)
        .then(res => res.json())
        .then(displayRecipes)
        console.log(buttonInput)
    }

    function displayRecipes(data) {
            let drinkInfo = data.drinks[Math.floor(Math.random() * data.drinks.length)]
            let drinkName = document.createElement('p')
            drinkName.innerHTML = `<h2>${drinkInfo.strDrink}&nbsp</h2><img src="${drinkInfo.strDrinkThumb + '/preview'}"/><br><br><button id="liked">👍</button>`
            recipeDisplay.append(drinkName)
            const thumbsUp = document.getElementById('liked')
            thumbsUp.addEventListener('click', (e) => {
                likedDisplay.style.display= "inline"
                let likedDrink = document.createElement('li')
                likedDrink.innerText = `${drinkInfo.strDrink} `
                likedDisplay.append(likedDrink)
                // let del = document.createElement('button')
                // del.textContent = "X"
                // del.style.color = "Red"
                // del.style.fontSize = "medium"
                // likedDrink.appendChild(del)
                // del.addEventListener('click', (e) => {
                //     e.target.parentNode.remove()
                // })
        })
    }
}


