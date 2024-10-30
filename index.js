
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
const $935c18e1e4c44162$export$923ea8233b386e99 = `https://forkify-api.herokuapp.com/api/v2/recipes`;


const $d165aaa8e92cff4c$export$d047a7c56db64af4 = async function(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        // Handling error
        if (!res.ok) // data.message is coming from the res.json() data
        throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};


var $3c44b89be267b746$exports = {};
$3c44b89be267b746$exports = new URL("icons.e4634d3e.svg", "file:" + __filename).toString();


// import icons from 'url:../../img/icons.svg';
var $32fbacdac798257a$exports = {};
$32fbacdac798257a$exports = new URL("icons.e4634d3e.svg", "file:" + __filename).toString();


class $ea36a10d11ca4367$export$2e2bcd8739ae039 {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError("Recipe not found!");
        this._data = data;
        const markup = this._generateMarkup();
        // Emptying the recipe container
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError("Recipe not found!");
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = " ";
    }
    renderSpinner() {
        const markup = // the svg used here has been animated in the css file, causing the svg file to rotate. components.SCSS: Line 170 - 190
        `
        <div class="spinner">
                <svg>
                  <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($32fbacdac798257a$exports)))}#icon-loader"></use> 
                </svg>
        </div>
      `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    // error handling
    renderError(message) {
        const markup = `
      <div class="error">
          <div>
          <svg>
              <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($32fbacdac798257a$exports)))}#icon-alert-triangle"></use>
          </svg>
          </div>
          <p>${message}</p>
      </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}


class $0b71f65e232ddbdf$var$RecipeView extends (0, $ea36a10d11ca4367$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = "We could not find that recipe. Please try another one!";
    _message = "";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest("btn--update-servings");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handler(updateTo);
        });
    }
    // bookmark functionality
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
            
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
          <svg>
            <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
          <svg>
            <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-bookmark ${this._data.bookmarked ? "-fill" : ""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">

    
    ${this._data.ingredients // looping over the ingredients array to create new ingredients html element
        .map((ing)=>{
            return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
      `;
        }).join("")} 

    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${0, (/*@__PURE__*/$parcel$interopDefault($3c44b89be267b746$exports))}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
    }
}
var $0b71f65e232ddbdf$export$2e2bcd8739ae039 = new $0b71f65e232ddbdf$var$RecipeView();


const $03b39f3f8afc8a92$export$ca000e230c0caa3e = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: 10
    },
    bookmarks: []
};
const $03b39f3f8afc8a92$export$b96725c7a035d60b = async function(id) {
    try {
        const data = await (0, $d165aaa8e92cff4c$export$d047a7c56db64af4)(`${(0, $935c18e1e4c44162$export$923ea8233b386e99)}/${id}`);
        const res = await fetch(`${(0, $935c18e1e4c44162$export$923ea8233b386e99)}/${id}`);
        // Reformatting the data property names
        // let recipe = data.data.recipe
        const { recipe: recipe } = data.data;
        $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        if ($03b39f3f8afc8a92$export$ca000e230c0caa3e.bookmarks.some((bookmark)=>bookmark.id === id)) $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.bookmarked = true;
        else $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.bookmarked = false;
        console.log($03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe);
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const $03b39f3f8afc8a92$export$be2b23a594353a40 = async function(query) {
    try {
        $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.query = query;
        const data = await (0, $d165aaa8e92cff4c$export$d047a7c56db64af4)(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);
        console.log(data);
        console.log($03b39f3f8afc8a92$export$ca000e230c0caa3e.search.results);
        // reformatting the data property names
        $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
        console.log($03b39f3f8afc8a92$export$ca000e230c0caa3e.search.results);
        $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.page = 1;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const $03b39f3f8afc8a92$export$8c2e2ac0b8a4e1c4 = function(page = $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.page) {
    $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.page = page;
    const start = (page - 1) * $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.resultsPerPage; //0;
    const end = page * $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.resultsPerPage; //9;
    // return part of the results from 1 to 10
    return $03b39f3f8afc8a92$export$ca000e230c0caa3e.search.results.slice(start, end);
};
const $03b39f3f8afc8a92$export$5e23f4642ecad5ea = function(newServings) {
    $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.servings;
    });
    $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.servings = newServings;
};
const $03b39f3f8afc8a92$export$72009cc673d27d80 = function(recipe) {
    // Add bookmark
    $03b39f3f8afc8a92$export$ca000e230c0caa3e.bookmarks.push(recipe);
    // Mark current recipe as bookmark
    if (recipe.id === $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.id) $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.bookmarked = true;
};
const $03b39f3f8afc8a92$export$136048bcb9946c75 = function(id) {
    // Delete bookmark
    const index = $03b39f3f8afc8a92$export$ca000e230c0caa3e.bookmarks.findIndex((el)=>el.id === id);
    $03b39f3f8afc8a92$export$ca000e230c0caa3e.bookmarks.splice(index, 1);
    // Mark current recipe as not bookmarked
    if (id === $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.id) $03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.bookmarked = false;
};



class $c83e1311f96ab226$var$searchView {
    _parentElement = document.querySelector(".search");
    getQuery() {
        return this._parentElement.querySelector(".search__field").value;
    }
    addHandlerSearch(handler) {
        // Adding the event listener on the entire form
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
var $c83e1311f96ab226$export$2e2bcd8739ae039 = new $c83e1311f96ab226$var$searchView();


// import View from '../view.js';


class $a727b40bc7a69d12$var$ResultView extends (0, $ea36a10d11ca4367$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipe found for your query. Please try again!";
    _message = "";
    _generateMarkup() {
        return this._data.map(this.__generateMarkupPreview.bind(this)).join("");
    }
    __generateMarkupPreview(result) {
        return `
    <li class="preview">
        <a class="preview__link preview__link--active" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${0, (/*@__PURE__*/$parcel$interopDefault($32fbacdac798257a$exports))}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
var $a727b40bc7a69d12$export$2e2bcd8739ae039 = new $a727b40bc7a69d12$var$ResultView();




class $6ce847354a0b2ccf$var$Paginationview extends (0, $ea36a10d11ca4367$export$2e2bcd8739ae039) {
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _parentElement = document.querySelector(".pagination");
    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        console.log(numPages);
        // Page 1, and there are other pages
        if (this._data.page === 1 && numPages > 1) return `
      <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($32fbacdac798257a$exports))}#icon-arrow-right"></use>
            </svg>
         </button>`;
        // Page 1, and there are no other pages
        // Last page
        if (this._data.page === numPages && numPages > 1) return `
      <button data-goto="${this._data.page - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($32fbacdac798257a$exports))}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
        </button>
      `;
        // Other  page
        if (this._data.page < numPages) return `
      <button data-goto="${this._data.page - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($32fbacdac798257a$exports))}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
        </button>

        <button data-goto="${this._data.page + 1} class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($32fbacdac798257a$exports))}#icon-arrow-right"></use>
            </svg>
         </button>
      `;
        // Page 1, and there are no other pages
        return " ";
    }
}
var $6ce847354a0b2ccf$export$2e2bcd8739ae039 = new $6ce847354a0b2ccf$var$Paginationview();


// import View from '../view.js';


// import icons from '../img/icons.svg';
class $3255eb5ad9c434a7$var$BookmarksView extends (0, $ea36a10d11ca4367$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it ;)";
    _message = "";
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>previewView.render(bookmark, false)).join("");
    }
}
var $3255eb5ad9c434a7$export$2e2bcd8739ae039 = new $3255eb5ad9c434a7$var$BookmarksView();



// Parent container for the recipe section
const $794e83499e771000$var$recipeContainer = document.querySelector(".recipe");
const $794e83499e771000$var$timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// Creating a loading spinner
/*const renderSpinner = function (parentEl) {
  onst markup =
    // the svg used here has been animated in the css file, causing the svg file to rotate. components.SCSS: Line 170 - 190
    `
    <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use> 
            </svg>
    </div>
  `;
  parentEl.innerHTML = ' ';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
*/ const $794e83499e771000$var$controlRecipe = async function() {
    try {
        const id = window.location.hash.slice(1); // window.location rep the entire url on the browser
        console.log(id);
        if (!id) return;
        // 1) Loading Recipe
        // Application of the loading spinner
        (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).renderSpinner();
        await $03b39f3f8afc8a92$export$b96725c7a035d60b(id); //mvc refactoring
        const { recipe: recipe } = $03b39f3f8afc8a92$export$ca000e230c0caa3e;
        /*
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    // Handling error
    if (!res.ok) {
      // data.message is coming from the res.json() data
      throw new Error(`${data.message} (${res.status})`);
    }

    console.log(res);
    console.log(data);

    // Reformatting the data property names
    // let recipe = data.data.recipe
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
    */ // 2) Rendering recipe
        (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).render($03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe);
        /*
    const markup = `
            
    <figure class="recipe__fig">
    <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        recipe.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        recipe.servings
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${icons}#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">

    
    ${recipe.ingredients // looping over the ingredients array to create new ingredients html element
      .map(ing => {
        return `
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
      `;
      })
      .join('')} 

    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        recipe.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${recipe.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
    // Emptying the recipe container
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
    */ // TESTING
        $794e83499e771000$var$controlServings();
    // error handling
    } catch (err) {
        console.log(err);
        (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).renderError(`We could not find that recipe. Please try another one!`);
    }
};
// controll search result
const $794e83499e771000$var$controlSearchResults = async function() {
    try {
        (0, $a727b40bc7a69d12$export$2e2bcd8739ae039).renderSpinner();
        // Get search query
        const query = (0, $c83e1311f96ab226$export$2e2bcd8739ae039).getQuery();
        if (!query) return;
        //load search results
        await $03b39f3f8afc8a92$export$be2b23a594353a40(query);
        //render results
        // resultView.render(model.state.search.results)
        // calling pagination functionality
        // resultView.render(model.getSearchResultPage(1))
        (0, $a727b40bc7a69d12$export$2e2bcd8739ae039).render($03b39f3f8afc8a92$export$8c2e2ac0b8a4e1c4(1));
        // Render initial pagination buttons
        (0, $6ce847354a0b2ccf$export$2e2bcd8739ae039).render($03b39f3f8afc8a92$export$ca000e230c0caa3e.search);
    } catch (err) {
        console.log(err);
    }
};
const $794e83499e771000$var$controlPagination = function(goToPage) {
    // render new result
    (0, $a727b40bc7a69d12$export$2e2bcd8739ae039).render($03b39f3f8afc8a92$export$8c2e2ac0b8a4e1c4(goToPage));
    // Render new  pagination buttons
    (0, $6ce847354a0b2ccf$export$2e2bcd8739ae039).render($03b39f3f8afc8a92$export$ca000e230c0caa3e.search);
};
const $794e83499e771000$var$controlServings = function(newServings) {
    // Update the recipe servings in the state
    $03b39f3f8afc8a92$export$5e23f4642ecad5ea(newServings);
    // Update the recipe view
    // recipeView.render(model.state.recipe);
    (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).update($03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe);
};
// Controlling Add bookmark
const $794e83499e771000$var$controlAddBookmark = function() {
    // Add or Remove Bookmark
    if (!$03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.bookmarked) $03b39f3f8afc8a92$export$72009cc673d27d80($03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe);
    else $03b39f3f8afc8a92$export$136048bcb9946c75($03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe.id);
    console.log($03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe);
    // Update recipe view
    (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).update($03b39f3f8afc8a92$export$ca000e230c0caa3e.recipe);
    // Render the bookmarks
    (0, $3255eb5ad9c434a7$export$2e2bcd8739ae039).render($03b39f3f8afc8a92$export$ca000e230c0caa3e.bookmarks);
};
const $794e83499e771000$var$init = function() {
    (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).addHandlerRender($794e83499e771000$var$controlRecipe);
    (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).addHandlerUpdateServings($794e83499e771000$var$controlServings);
    (0, $0b71f65e232ddbdf$export$2e2bcd8739ae039).addHandlerAddBookmark($794e83499e771000$var$controlAddBookmark);
    (0, $c83e1311f96ab226$export$2e2bcd8739ae039).addHandlerSearch($794e83499e771000$var$controlSearchResults);
    (0, $6ce847354a0b2ccf$export$2e2bcd8739ae039).addHandlerClick($794e83499e771000$var$controlPagination);
};
$794e83499e771000$var$init(); // controlRecipe();
 // ['hashchange', 'load'].forEach(ev =>
 //   window.addEventListener(ev, controlRecipe)
 // );
 // this method above is also the same with using the below  method
 // window.addEventListener('hashchange', controlRecipe);
 // window.addEventListener('load', controlRecipe);


//# sourceMappingURL=index.js.map
