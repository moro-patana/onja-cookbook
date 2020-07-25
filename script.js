// Grab elements
const postList = document.querySelector(`#post-list`);
const formInput = document.querySelector(`.post-form`);
const submitBtn = document.querySelector(`.btn-primary`);
const addIngredientBtn = document.querySelector(`.add-ingredient`);
const addStepsBtn = document.querySelector(`.add-steps`);
const recipeName = document.querySelector(`input[name="recipeName"]`);
const resultImage = document.querySelector(`input[name="resultImage"]`);
const cookName = document.querySelector(`input[name="cookName"]`);
const difficultySelect = document.querySelector(`#difficulty-select`);
const timeSelect = document.querySelector(`#time-select`);
const ingredient = document.querySelector(`input[name="ingredients"]`);
const steps = document.querySelector(`input[name="steps"]`);


// Listen to the submit button
const addCookBook = (event) => {
    event.preventDefault();
const myHtml = `
    <div class="card">
      <div class="book">
        <h5 class="card-title">${recipeName.value}</h5>
        <img class="card-image" src="${resultImage.value}" alt="Card image cap">
        <p class="card-text"> It was ${difficultySelect.value} so it took me ${timeSelect.value}</p>
        <div>
            <ul>
            These are the ingredients:
                <li>${ingredient.value}</li>
            </ul>
        </div>
        <div>
            <ul>
            These are the steps:
                <li>${steps.value}</li>
            </ul>
        </div>
      </div>
    </div>`;

postList.insertAdjacentElement(`afterbegin`, myHtml);
console.log(myHtml)
};

const newIngredientsList = (event) => {
    event.preventDefault();
    const myIngredients = `
    <input type="text" class="form-ingredient" name="ingredients">`;
    addIngredientBtn.insertAdjacentHTML(`beforebegin`, myIngredients);
}
addIngredientBtn.addEventListener(`click`, newIngredientsList);

const stepsList = (event) => {
    event.preventDefault();
    const mySteps = `
    <input type="text" class="form-steps" name="steps">`;
    addStepsBtn.insertAdjacentHTML(`beforebegin`, mySteps);
}
addStepsBtn.addEventListener(`click`, stepsList);


submitBtn.addEventListener(`click`, addCookBook);
