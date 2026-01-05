// Step 1: Declare a global variable age
let age = 25;

// Step 2: Create a function that prints the value of age
function displayAge() {
  console.log("Age inside displayAge():", age);
}

// Step 3: Create another function that changes the value of age
function changeAge() {
  age = 30; // updating the global variable
  console.log("Age updated inside changeAge():", age);
}

// Step 4: Call the functions
displayAge();   // Outputs original global age
changeAge();    // Updates the global age
displayAge();   // Shows updated age after change