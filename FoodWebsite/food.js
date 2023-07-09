function displayCategory(category) {
    var categoryItems = document.getElementById("category-items");
    
    // Clear previous items
    categoryItems.innerHTML = "";
    
    // Display items based on category
    switch (category) {
      case "malnad":
        categoryItems.innerHTML = "Malnad Special items";
        break;
      case "non-veg":
        categoryItems.innerHTML = "Non Veg items";
        break;
      case "veg":
        categoryItems.innerHTML = "Veg items";
        break;
      case "chinese":
        categoryItems.innerHTML = "Chinese items";
        break;
      default:
        categoryItems.innerHTML = "Select the Category of your choice";
    }
  }
  