/**
* Menu with six random recipes
*/

$(document).ready(function () {

    const suggestionsDatalist = document.getElementById('suggestions');
    const searchInput = document.querySelector('#search-bar input');

    $.getJSON('cannabis_recipes.json', function (response) {

        response = response.filter(e => e.id !== 132 && e.id !== 133 && e.id !== 130 && e.id !== 10 && e.id !== 13 && e.id !== 54 && e.id !== 74 && e.id !== 88 && e.id !== 114 && e.id !== 116 && e.id !== 121 && e.id !== 58);
        console.log(response);


        //DATALIST
        response.forEach(recipe => {
            const option = document.createElement('option');

            option.value = recipe.title;

            if (option.value.startsWith("How to make")) {
                option.value = option.value.split('make ')[1].charAt(0).toUpperCase() + option.value.slice(13);
            }

            suggestionsDatalist.appendChild(option);

            searchInput.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    const selectedRecipeTitle = "How to make " + this.value;
                    const selectedRecipe = response.find(recipe => recipe.title.toLowerCase() === selectedRecipeTitle.toLowerCase());

                    if (selectedRecipe) {
                        window.location.href = `recipe-detail.html?id=${selectedRecipe.id}`;
                    }
                }
            });
        });

        const shuffledRecipes = shuffleArray(response);

        const imageElements = ['#img1', '#img2', '#img3', '#img4', '#img5', '#img6'];
        const titleElements = ['#title1', '#title2', '#title3', '#title4', '#title5', '#title6'];

        for (let i = 0; i < 6; i++) {

            const recipe = shuffledRecipes[i];
            const imageSource = recipe.image;

            let imageTitle = recipe.title;

            if (imageTitle.startsWith("How to make")) {
                imageTitle = imageTitle.split('make ')[1].charAt(0).toUpperCase() + imageTitle.slice(13);
            }

            const $image = $(imageElements[i]);
            $image.attr('src', imageSource);

            const $title = $(titleElements[i]);
            $title.text(imageTitle);

            $image.on('click', function () {
                window.location.href = `recipe-detail.html?id=${recipe.id}`;
            });
        }

        $('#btn1').click(function () {
            var filteredRecipes = shuffledRecipes.filter(function (recipe) {
                return recipe.category === 1;
            });
            const shuffledCategoryRecipes = shuffleArray(filteredRecipes);
            displayRecipes(shuffledCategoryRecipes);
        });

        $('#btn2').click(function () {
            var filteredRecipes = shuffledRecipes.filter(function (recipe) {
                return recipe.category === 2;
            });
            const shuffledCategoryRecipes = shuffleArray(filteredRecipes);
            displayRecipes(shuffledCategoryRecipes);
        });

        $('#btn3').click(function () {
            var filteredRecipes = shuffledRecipes.filter(function (recipe) {
                return recipe.category === 3;
            });
            const shuffledCategoryRecipes = shuffleArray(filteredRecipes);
            displayRecipes(shuffledCategoryRecipes);
        });

        $('#btn4').click(function () {
            var filteredRecipes = shuffledRecipes.filter(function (recipe) {
                return recipe.category === 4;
            });
            const shuffledCategoryRecipes = shuffleArray(filteredRecipes);
            displayRecipes(shuffledCategoryRecipes);
        });

        $('#btn5').click(function () {
            var filteredRecipes = shuffledRecipes.filter(function (recipe) {
                return recipe.category === 5;
            });
            const shuffledCategoryRecipes = shuffleArray(filteredRecipes);
            displayRecipes(shuffledCategoryRecipes);
        });

        $('#btn6').click(function () {
            var filteredRecipes = shuffledRecipes.filter(function (recipe) {
                return recipe.rating >= 5;
            });
            const shuffledCategoryRecipes = shuffleArray(filteredRecipes);
            displayRecipes(shuffledCategoryRecipes);
        });

        $('#about').click(function () {
            window.open("https://shattereddisk.github.io/rickroll/rickroll.mp4", "_blank");
        });
        $('#dealer').click(function () {
            window.open("https://www.google.com/maps/dir//Bairro+do+Cerco+do+Porto,+Porto/@41.1629526,-8.5654477,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2463820c6556c9:0x27e8ddae2a940cf2!2m2!1d-8.5654477!2d41.1629531?entry=ttu", "_blank");
        });
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function displayRecipes(filteredRecipes) {

        const imageElements = ['#img1', '#img2', '#img3', '#img4', '#img5', '#img6'];
        const titleElements = ['#title1', '#title2', '#title3', '#title4', '#title5', '#title6'];

        for (let i = 0; i < 6; i++) {

            const recipe = filteredRecipes[i];
            const imageSource = recipe.image;

            let imageTitle = recipe.title;

            if (imageTitle.startsWith("How to make")) {
                imageTitle = imageTitle.split('make ')[1].charAt(0).toUpperCase() + imageTitle.slice(13);
            }

            const $image = $(imageElements[i]);
            $image.attr('src', imageSource);

            const $title = $(titleElements[i]);
            $title.text(imageTitle);

            $image.on('click', function () {
                window.location.href = `recipe-detail.html?id=${recipe.id}`;
            });
        }
    }
});