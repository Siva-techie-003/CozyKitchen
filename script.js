 console.log("TastyBytes loaded.");

function setupDarkMode() {
    const toggleBtn = document.getElementById("darkToggle");
    if (!toggleBtn) return;

    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    });
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.setAttribute("data-category", recipe.category);
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="detail-img">
        <h4>${recipe.title}</h4>
        <p>${recipe.description}</p>
        <div class="tag">${capitalize(recipe.category)}</div>
        <a href="recipe.html?id=${recipe.id}">View Recipe</a>
    `;
    return card;
}

function loadCategoryRecipes(reset = true) {
    const recipeList = document.getElementById("recipeList");
    const categoryTitle = document.getElementById("categoryTitle");
    const type = getQueryParam("type") || 'all';  // Corrected line
    if (!recipeList) return;

    if (reset) {
        currentPage = 1;
        currentCategoryRecipes = type === "all" ? recipes : recipes.filter(r => r.category === type);
        recipeList.innerHTML = "";
        if (categoryTitle) {
            categoryTitle.textContent = type === "all" ? "All Recipes" : `${capitalize(type)} Recipes`;
        }
    }

    const start = (currentPage - 1) * recipesPerPage;
    const end = currentPage * recipesPerPage;
    const paginated = currentCategoryRecipes.slice(start, end);

    paginated.forEach(recipe => {
        recipeList.appendChild(createRecipeCard(recipe));
    });

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        if (currentPage * recipesPerPage >= currentCategoryRecipes.length) {
            loadMoreBtn.style.display = "none";
        } else {
            loadMoreBtn.style.display = "block";
        }
    }

    currentPage++;
}

function displayRecipeDetails() {
    console.log("displayRecipeDetails() is running!");
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    console.log("recipeId:", recipeId);
    const recipe = recipes.find(r => r.id === recipeId);
    console.log("recipe:", recipe);

    const recipeDetailsDiv = document.getElementById('recipeDetails');

    if (!recipeDetailsDiv) {
        console.error("recipeDetailsDiv not found in recipe.html!");
        return; // Exit the function if the element is not found
    }

    if (recipe) {
        recipeDetailsDiv.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" class="detail-img">
            <p>${recipe.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Steps:</h3>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        `;
    } else {
        recipeDetailsDiv.innerHTML = '<p>Recipe not found</p>';
    }
}

let currentPage = 1;
const recipesPerPage = 12;
let currentCategoryRecipes = [];
window.addEventListener("DOMContentLoaded", () => {
  setupDarkMode();
  displayRecipeDetails?.();
  loadCategoryRecipes?.();
});


