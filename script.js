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
    const recipes = [
        {
            title: `${recipeName.value}`,
            pictures: `${resultImage.value}`,
            author: `${cookName.value}`,
            difficulty: `${difficultySelect.value}`,
            timing: `${timeSelect.value}`,
            ingredients: [`${ingredient.value}`],
            steps: [`${steps.value}`]
        }
    ];
console.log(recipes);
form.reset()
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
