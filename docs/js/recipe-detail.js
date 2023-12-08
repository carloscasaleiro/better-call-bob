/**
* Detailed recipe using the recipeId
*/

$(document).ready(function () {
    
    const recipeId = getQueryParam('id');
    console.log(recipeId);
    
    $.getJSON('cannabis_recipes.json', function (response) {

        console.log(response);
        
        //let newRecipe = recipe[0];
        let newRecipe = response.find(recipe => recipe.id == recipeId);

        console.log(newRecipe);

        const imageTitle = newRecipe.title;
        const $title = $("#title");
        $title.text(imageTitle);

        const description = newRecipe.description;
        const $description = $("#description");
        $description.text(description);

        $("#rating").text("Rating: " + newRecipe.rating);

        const imageSource = newRecipe.image;
        const $image = $("#image");
        $image.attr('src', imageSource);

        populateIngredientList(newRecipe);

        populateIntructionsList(newRecipe);

        $("#return").on('click', function () {
            window.location.href = `index.html`;
        });
    });
});


function populateIngredientList(recipe) {
    const ingredientListElement = $("#ingredient-list");
    ingredientListElement.empty();

    const titleElement = $("<h2>").text("Ingredients:");
    ingredientListElement.append(titleElement);

    for (let i = 1; recipe[`ingred${i}`] !== null; i++) {
        const ingredient = recipe[`ingred${i}`];

        if (ingredient) {
            const ingredientItem = $("<p>").text(ingredient);
            ingredientListElement.append(ingredientItem);
        }
    }

    const viewDetailsButton = $("<button>").text("Buy Ingredients");
    viewDetailsButton.addClass("details-button");
    ingredientListElement.append(viewDetailsButton);

    viewDetailsButton.on('click', () => {
        window.location.href = "https://weedonlinemarketplace.com/order-weed-online/cannabis-edibles/weed-cooking-ingredients/";
    });
}

function populateIntructionsList(recipe) {
    const instructionListElement = $("#instruction-list");

    instructionListElement.empty();

    const prepare = $("<h2>").text("Preparation time: " + recipe.prep_time);
    instructionListElement.append(prepare);

    for (let i = 1; recipe[`instruct${i}`] !== null; i++) {
        const instruction = recipe[`instruct${i}`];

        if (instruction) {
            const instructionItem = $("<p>").text(instruction);
            instructionItem.css("margin", "5px");
            instructionItem.css("padding", "0");
            instructionListElement.append(instructionItem);
        }
    }
}

function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

$('#btn-submit').on('click', () => {
    window.location.href = `index.html`;
});
