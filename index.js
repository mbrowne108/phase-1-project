document.addEventListener('DOMContentLoaded', runPage)
function runPage() {
    const recipeDisplay = document.querySelector("#display-recipe")
    const likedDisplay = document.querySelector("#saved-recipes")
    
    const button = document.getElementById('button')
    const buttonInput = document.querySelector("#spirit-list")
    button.addEventListener('click', fetchRecipe)

    function fetchRecipe() {
        recipeDisplay.innerHTML = ''
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + buttonInput.value)
        .then(res => res.json())
        .then(displayRecipes)
    }

    function displayRecipes(data) {
            const drinkInfo = data.drinks[Math.floor(Math.random() * data.drinks.length)]
            const drinkName = document.createElement('p')
            drinkName.innerHTML = `<h2>${drinkInfo.strDrink}</h2><img src="${drinkInfo.strDrinkThumb + '/preview'}"/><br><br><button id="liked">👍</button>`
            recipeDisplay.append(drinkName)
            const thumbsUp = document.getElementById('liked')
            thumbsUp.addEventListener('click', () => {
                likedDisplay.style.display = "inline"
                const likedDrink = document.createElement('li')
                likedDrink.innerText = `${drinkInfo.strDrink} `
                likedDisplay.append(likedDrink)
        })
    }
}


