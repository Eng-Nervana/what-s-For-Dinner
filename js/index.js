var theImg=document.getElementById("theImg")
var ratingNum=document.getElementById("ratingNum")
var ratingReviews =document.getElementById("ratingReviews")
var PrepTime =document.getElementById("PrepTime")
var CookTime =document.getElementById("CookTime")
var Servings =document.getElementById("Servings")
var greenDiv =document.getElementById("greenDiv")
var blueDiv =document.getElementById("blueDiv")
var recepiTitle =document.getElementById("recepiTitle")
var recepiDisc  =document.getElementById("recepiDisc")
var timeWarning =document.getElementById("timeWarning")
var pOfTimeWarning =document.getElementById("pOfTimeWarning")
var ingredients =document.getElementById("ingredients")
var instructions =document.getElementById("instructions")
var nutrition =document.getElementById("nutrition")
var  tips=document.getElementById("tips")
var changeRecipeBtn =document.getElementById("change-recipe-btn")
var recipes=[




     pizza={
        theImg:"img/pizza.avif",
         ratingNum:"4.9",
         ratingReviews:"512 reviews",
         PrepTime:"90 min",
         CookTime:"12 min",
         Servings:"2 people",
         greenDiv:"Intermediate",
         blueDiv:"Italian",
         recepiTitle:"Margherita Pizza",
         recepiDisc:"Classic Italian pizza with fresh mozzarella and basil",
         timeWarning:"true",
         ingredients:`<div class="p-4 rounded-4">
      <ul class="list-unstyled d-flex flex-column rounded-4 gap-3 mb-0">
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">1</span> <span>300g pizza dough</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">2</span> <span>200g crushed tomatoes</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">3</span> <span>250g fresh mozzarella</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">4</span> <span>Fresh basil leaves</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">5</span> <span>2 tablespoons olive oil</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">6</span> <span>2 cloves garlic, minced</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">7</span> <span>Salt and pepper to taste</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">8</span> <span>Parmesan cheese for topping</span>
        </li>
      </ul>
    </div>`,
    instructions:` <div class="d-flex flex-column gap-3">
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">1</span><span>Let pizza dough come to room temperature and rest for 1 hour.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">2</span><span>Preheat oven to maximum temperature (usually 250°C/480°F).</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">3</span><span>Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">4</span><span>Roll out dough on a floured surface to desired thickness.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">5</span><span>Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">6</span><span>Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.</span></div>
    </div>
    `,
    nutrition:` <div class="row g-2">
    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between ">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-fire d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Calories</span>
        </div>
        <span class="fw-bold fs-4">580 kcal</span>
      </div>
    </div>
    
    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-dumbbell d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Protein</span>
        </div>
        <span class="fw-bold fs-4">24g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-wheat-awn d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Carbohydrates</span>
        </div>
        <span class="fw-bold fs-4">68g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-droplet d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Fat</span>
        </div>
        <span class="fw-bold fs-4">22g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-seedling d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Fiber</span>
        </div>
        <span class="fw-bold fs-4">4g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-cube p-2 d-flex justify-content-center align-items-center rounded-2"></i>
          <span class="text-muted">Sodium</span>
        </div>
        <span class="fw-bold fs-4">920mg</span>
      </div>
    </div>
  </div>`,
  tips:` <div class="d-flex flex-column gap-3">
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Use a pizza stone for crispier crust</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Don't overload with toppings - less is more</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Add basil after baking to keep it fresh</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Let dough rest properly for best texture</span></div>
    </div>`
         
         
         

    
},
 MediterraneanQuinoaBowl={
        theImg:"img/Mediterranean Quinoa Bowl.avif",
         ratingNum:"4.5",
         ratingReviews:"195 reviews",
         PrepTime:"20 min",
         CookTime:"35 min",
         Servings:"2 people",
         greenDiv:"easy",
         blueDiv:"Mediterranean",
         recepiTitle:"Mediterranean Quinoa Bowl",
         recepiDisc:"Healthy bowl with quinoa, vegetables, and tahini dressing",
         timeWarning:"true",
         ingredients:`<div class="p-4 rounded-4">
      <ul class="list-unstyled d-flex flex-column rounded-4 gap-3 mb-0">
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">1</span> <span>1 cup quinoa</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">2</span> <span>Cherry tomatoes, halved</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">3</span> <span>Cucumber, diced</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">4</span> <span>Red onion, sliced</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">5</span> <span>Kalamata olives</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">6</span> <span>
Feta cheese, crumbled</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">7</span> <span>Fresh parsley</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">8</span> <span>Tahini dressing</span>
        </li>
      </ul>
    </div>`,
    instructions:` <div class="d-flex flex-column gap-3">
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">1</span><span>Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.
</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">2</span><span>While quinoa cooks, prepare all vegetables and set aside.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">3</span><span>Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">4</span><span>RFor tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.
</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">5</span><span>Fluff cooked quinoa with a fork and let cool slightly.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">6</span><span>Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.</span></div>
    </div>
    `,
    nutrition:` <div class="row g-2">
    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between ">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-fire d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Calories</span>
        </div>
        <span class="fw-bold fs-4">480 kcal </span>
      </div>
    </div>
    
    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-dumbbell d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Protein</span>
        </div>
        <span class="fw-bold fs-4">18g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-wheat-awn d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Carbohydrates</span>
        </div>
        <span class="fw-bold fs-4">58g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-droplet d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Fat</span>
        </div>
        <span class="fw-bold fs-4">20g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-seedling d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Fiber</span>
        </div>
        <span class="fw-bold fs-4">10g
</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-cube p-2 d-flex justify-content-center align-items-center rounded-2"></i>
          <span class="text-muted">Sodium</span>
        </div>
        <span class="fw-bold fs-4">540mg</span>
      </div>
    </div>
  </div>`,
  tips:` <div class="d-flex flex-column gap-3">
 
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span></span> Rinse quinoa well to remove bitter coating

</div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Let quinoa cool before adding fresh ingredients

</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Make extra tahini dressing - it keeps well in the fridge

</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Add grilled chicken or chickpeas for extra protein</span></div>
    </div>`
         
         
         

    
},
CapreseSandwich={
     theImg:"img/Caprese Sandwich.avif",
         ratingNum:"4.5",
         ratingReviews:"189 reviews",
         PrepTime:"10 min",
         CookTime:"5 min",
         Servings:"2 people",
         greenDiv:"Easy",
         blueDiv:"Italian",
         recepiTitle:"Caprese Sandwich",
         recepiDisc:"Fresh Italian sandwich with mozzarella, tomato, and basil",
         timeWarning:"fals",
         ingredients:`<div class="p-4 rounded-4">
      <ul class="list-unstyled d-flex flex-column rounded-4 gap-3 mb-0">
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">1</span> <span>1 ciabatta bread</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">2</span> <span>200g fresh mozzarella, sliced</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">3</span> <span>2 large tomatoes, sliced</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">4</span> <span>Fresh basil leaves</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">5</span> <span>3 tablespoons pesto</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">6</span> <span>2 tablespoons balsamic glaze</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">7</span> <span>Olive oil</span>
        </li>
        <li class="d-flex align-items-center gap-3">
          <span class="badge rounded-circle  fs-6">8</span> <span>Salt and pepper</span>
        </li>
      </ul>
    </div>`,
    instructions:` <div class="d-flex flex-column gap-3">
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">1</span><span>Slice ciabatta bread in half horizontally.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">2</span><span>Toast bread lightly until just crispy.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">3</span><span>Spread pesto on both sides of bread.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4  fs-6">4</span><span>Layer mozzarella slices, tomato slices, and fresh basil leaves.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">5</span><span>Drizzle with olive oil and balsamic glaze. Season with salt and pepper.</span></div>
      <div class="d-flex align-items-center gap-3"><span class="badge rounded-4 fs-6">6</span><span>Close sandwich, cut in half, and serve immediately.</span></div>
    </div>
    `,
    nutrition:` <div class="row g-2">
    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between ">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-fire d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Calories</span>
        </div>
        <span class="fw-bold fs-4">480 kcal</span>
      </div>
    </div>
    
    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-dumbbell d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Protein</span>
        </div>
        <span class="fw-bold fs-4">22g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-wheat-awn d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Carbohydrates</span>
        </div>
        <span class="fw-bold fs-4">48g</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-droplet d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Fat</span>
        </div>
        <span class="fw-bold fs-4">22g
</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-seedling d-flex justify-content-center align-items-center p-2 rounded-2"></i>
          <span class="text-muted">Fiber</span>
        </div>
        <span class="fw-bold fs-4">3g
</span>
      </div>
    </div>

    <div class="col-6">
      <div class="nutrition-card p-3 rounded-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <i class="fa-solid fa-cube p-2 d-flex justify-content-center align-items-center rounded-2"></i>
          <span class="text-muted">Sodium</span>
        </div>
        <span class="fw-bold fs-4">680mg</span>
      </div>
    </div>
  </div>`,
  tips:` <div class="d-flex flex-column gap-3">
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Use ripe, in-season tomatoes for best flavor</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Buffalo mozzarella is traditional but harder to slice</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Toast bread lightly - not too crispy</span></div>
      <div class="p-3 rounded-3 border-start border-4 d-flex align-items-center gap-3"><i class="fa-solid fa-circle-check fs-5"></i><span>Add prosciutto or salami for a heartier sandwich</span></div>
    </div>`
         
         
         

    


}

]
function showRandomRecipe(){
    var randomIndex =Math.floor(Math.random()*recipes.length);
    var selectRecipe=recipes[randomIndex];
    theImg.src=selectRecipe.theImg;
    ratingNum.textContent=selectRecipe.ratingNum;
    ratingReviews.textContent=selectRecipe.ratingReviews;
    PrepTime.textContent=selectRecipe.PrepTime;
    CookTime.textContent=selectRecipe.CookTime;
    Servings.textContent=selectRecipe.Servings;

    greenDiv.textContent=selectRecipe.greenDiv;
    blueDiv.textContent=selectRecipe.blueDiv;
    recepiTitle.textContent=selectRecipe.recepiTitle;
    recepiDisc.textContent=selectRecipe.recepiDisc;
    ingredients.innerHTML=selectRecipe.ingredients;
    instructions.innerHTML=selectRecipe.instructions;
    nutrition.innerHTML=selectRecipe.nutrition;
    tips.innerHTML=selectRecipe.tips;
    if(selectRecipe.timeWarning)
    {
        timeWarning.classList.remove("d-none");
    }else{
        timeWarning.classList.add("d-none");    }
}
showRandomRecipe();
