/* Establishes time of day */
function recipeTime() {

    const d = new Date();
    const hr = d.getHours();
    let recipeType;

    if (hr > 12) {
   	recipeType = "dinner"
    } else {
    recipeType = "lunch";
    }
    displayRecipe(recipeType); //Note: hoisting, able to call function before 
}

//Type =  parameter to establish either lunch or dinner recipe
function displayRecipe(type) {

    const container = document.createElement('div'); //Creates div tag
    const recipeHeading = document.createElement('h2'); //Creates h2 for lunch or dinner title
    const orderList = document.createElement('ol'); //Creates the ordered list tag for the recipe steps
    let steps; //Creates variable for the array of recipe instructions

    //Determines which recipe step to use
    if (type === "lunch") {
        steps = [
            "Heat oven to 400°F. Line rimmed baking pan with aluminum foil.",
            "Place salmon into prepared pan. Sprinkle with lemon zest, salt and pepper.",
            "Divide Butter with Olive Oil & Sea Salt evenly among tops of salmon fillets. Pour lemon juice over top.",
            "Bake, uncovered, 12-15 minutes or until salmon flakes easily with fork.",
            "Serve with lemon wedges and fresh parsley sprigs, if desired."  
        ];
        //Writes in document the recipe name in h2
        recipeHeading.innerHTML = "Lunch Recipe: Baked Salmon";

    } else {
        steps = [
            "Cook pasta according to package directions. Drain; keep warm. Set aside.",
            "Melt Butter with Olive Oil & Sea Salt in 12-inch skillet over medium heat until sizzling.",
            "Add garlic and parsley; sauté 30 seconds. Add wine; cook 1 minute. Add shrimp; cook, turning once, 2-3 minutes or until shrimp are pink.",
            "Add hot, cooked pasta. Toss lightly until pasta is well coated. Sprinkle with Parmesan cheese."
        ];
        //Writes in document the recipe name in h2
        recipeHeading.innerHTML = "Dinner Recipe: Shrimp Pasta";
    }

    const recipeItem = document.getElementById(type); //Calls specific id using the parameter
    container.appendChild(recipeHeading); //Adds h2 heading
    recipeItem.appendChild(container); //Adds div tag
    container.appendChild(orderList); //Adds ordered list tag
    orderList.classList.add('steps'); //Adds class="steps" to ordered list tag

    //ForEach Loop to iterate over array of recipe steps and create list items for each step; 'step' represents each array item being iterated
    steps.forEach(step => {
        const stepsList = document.createElement('li'); //Create list tag element
        stepsList.textContent = step; //establishes text to the step parameter
        orderList.appendChild(stepsList); //Adds list tags with iterated steps to frontend
    });    
}
recipeTime();



/* 
*************************
    My old functions
*************************
function recipeTime() {

    let d = new Date();
    let hr = d.getHours();
    if (hr > 12) {
   	return dinnerTime();
    } else {
    return lunchTime();
    }
   
//Lunch Recipe //

    function lunchTime() {
        const lunchSteps = [
            "Heat oven to 400°F. Line rimmed baking pan with aluminum foil.",
            "Place salmon into prepared pan. Sprinkle with lemon zest, salt and pepper.",
            "Divide Butter with Olive Oil & Sea Salt evenly among tops of salmon fillets. Pour lemon juice over top.",
            "Bake, uncovered, 12-15 minutes or until salmon flakes easily with fork.",
            "Serve with lemon wedges and fresh parsley sprigs, if desired."
        ];
        
        const container = document.createElement('div');
        let recipeHeading = document.createElement('h2');
        let recipeItem;
        const orderList = document.createElement('ol');
      
        //Calls section for lunch recipe
        recipeItem = document.querySelector("#lunch");
      
        //Adds h2 heading
        container.append(recipeHeading);
      
        //Adds div tag
        recipeItem.appendChild(container);
      
      
        //Establishes h2 title
        recipeHeading.innerHTML = "Lunch Recipe: Baked Salmon";
          //Adds ordered list to container
          container.appendChild(orderList);
          orderList.classList.add('steps') 
          
        for (let i = 0; i < lunchSteps.length; i++) {
      
          //Creates new list items
          const stepsList = document.createElement('li');
          const recipe = `${lunchSteps[i]}`;
          //Add list of items
          stepsList.innerHTML = recipe;
          orderList.appendChild(stepsList);
      
        }  
    }
    
    lunchTime();
    
    //Dinner Recipe //
    function dinnerTime() {
        const dinnerSteps = [
          "Cook pasta according to package directions. Drain; keep warm. Set aside.",
          "Melt Butter with Olive Oil & Sea Salt in 12-inch skillet over medium heat until sizzling.",
          "Add garlic and parsley; sauté 30 seconds. Add wine; cook 1 minute. Add shrimp; cook, turning once, 2-3 minutes or until shrimp are pink.",
          "Add hot, cooked pasta. Toss lightly until pasta is well coated. Sprinkle with Parmesan cheese."
        ];
      
        const container = document.createElement('div');
        let recipeHeading = document.createElement('h2');
        let recipeItem;
        const orderList = document.createElement('ol');
      
        //Calls section for dinner recipe
        recipeItem = document.querySelector("#dinner");
      
        //Adds h2 heading
        container.append(recipeHeading);
      
        //Adds div tag
        recipeItem.appendChild(container);
      
      
        //Establishes h2 title
        recipeHeading.innerHTML = "Dinner Recipe: Shrimp Pasta";
          //Adds ordered list to container
          container.appendChild(orderList);
          orderList.classList.add('steps') 
          
        for (let i = 0; i < dinnerSteps.length; i++) {
      
          //Creates new list items
          const stepsList = document.createElement('li');
          const recipe = `${dinnerSteps[i]}`;
          //Add list of items
          stepsList.innerHTML = recipe;
          orderList.appendChild(stepsList);
      
        }
      
      }
      dinnerTime();
    }
    recipeTime();
*/