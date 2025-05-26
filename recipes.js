// 🍽️ Expanded Recipe List – Sample Recipes in Required Format
const recipes = [
    {
      id: "1",
      title: "Vegan Pancakes",
      description: "Fluffy vegan pancakes with maple syrup.",
      category: "vegan",
      ingredients: ["Flour", "Almond milk", "Baking powder", "Maple syrup"],
      steps: [
        "Mix dry ingredients.",
        "Add almond milk and stir.",
        "Cook on a skillet until golden."
      ],
      image: "images/vegan-pancakes.jpg"
    },
    {
      id: "2",
      title: "Tofu Stir Fry",
      description: "Colorful stir-fried tofu and vegetables.",
      category: "vegan",
      ingredients: ["Tofu", "Bell peppers", "Soy sauce", "Broccoli"],
      steps: [
        "Press and cube the tofu.",
        "Sauté veggies and tofu.",
        "Add soy sauce and stir fry."
      ],
      image: "images/tofu-stirfry.jpg"
    },
    {
        id: "3",
        title: "Chickpea Salad",
        description: "A refreshing salad with chickpeas, cucumbers, and herbs.",
        category: "vegan",
        ingredients: ["Chickpeas", "Cucumber", "Tomatoes", "Parsley", "Lemon juice", "Olive oil"],
        steps: [
          "Rinse and drain chickpeas.",
          "Chop vegetables and herbs.",
          "Mix all ingredients with lemon juice and olive oil."
        ],
        image: "images/chickpea-salad.jpg"
      },
      {
        id: "4",
        title: "Vegan Buddha Bowl",
        description: "Nutritious bowl with quinoa, roasted veggies, and tahini sauce.",
        category: "vegan",
        ingredients: ["Quinoa", "Sweet potato", "Broccoli", "Chickpeas", "Tahini", "Garlic"],
        steps: [
          "Cook quinoa.",
          "Roast sweet potatoes and broccoli.",
          "Assemble bowl and drizzle with tahini sauce."
        ],
        image: "images/buddha-bowl.jpg"
      },
      {
        id: "5",
        title: "Vegan Curry",
        description: "A rich coconut-based curry with tofu and vegetables.",
        category: "vegan",
        ingredients: ["Tofu", "Coconut milk", "Curry powder", "Vegetables", "Ginger", "Garlic"],
        steps: [
          "Fry tofu until golden.",
          "Sauté vegetables with ginger and garlic.",
          "Add coconut milk and curry powder, simmer."
        ],
        image: "images/vegan-curry.jpg"
      },
      {
        id: "6",
        title: "Avocado Toast",
        description: "Simple and satisfying smashed avocado on toast.",
        category: "vegan",
        ingredients: ["Bread", "Avocado", "Lemon juice", "Chili flakes", "Salt"],
        steps: [
          "Toast the bread.",
          "Mash avocado with lemon juice and salt.",
          "Spread and top with chili flakes."
        ],
        image: "images/avocado-toast.jpg"
      },
      {
        id: "7",
        title: "Lentil Soup",
        description: "Hearty soup made with lentils and spices.",
        category: "vegan",
        ingredients: ["Lentils", "Onion", "Carrot", "Celery", "Tomato paste", "Spices"],
        steps: [
          "Sauté onions, carrots, and celery.",
          "Add lentils, tomato paste, and spices.",
          "Simmer until cooked."
        ],
        image: "images/lentil-soup.jpg"
      },
      {
        id: "8",
        title: "Vegan Wraps",
        description: "Wraps filled with hummus, veggies, and greens.",
        category: "vegan",
        ingredients: ["Tortillas", "Hummus", "Lettuce", "Tomatoes", "Cucumber", "Avocado"],
        steps: [
          "Spread hummus on tortilla.",
          "Add sliced veggies.",
          "Wrap and serve."
        ],
        image: "images/vegan-wraps.jpg"
      },
      {
        id: "9",
        title: "Stuffed Bell Peppers",
        description: "Bell peppers stuffed with rice and veggies.",
        category: "vegan",
        ingredients: ["Bell peppers", "Rice", "Black beans", "Corn", "Tomato sauce", "Spices"],
        steps: [
          "Cook rice and mix with beans, corn, and sauce.",
          "Stuff mixture into peppers.",
          "Bake until tender."
        ],
        image: "images/stuffed-peppers.jpg"
      },
      {
        id: "10",
        title: "Vegan Smoothie Bowl",
        description: "A thick fruit smoothie topped with nuts and seeds.",
        category: "vegan",
        ingredients: ["Banana", "Berries", "Plant milk", "Chia seeds", "Almonds"],
        steps: [
          "Blend fruits with plant milk.",
          "Pour into a bowl and top with seeds and nuts."
        ],
        image: "images/smoothie-bowl.jpg"
      },
      {
        id: "11",
        title: "Tofu Scramble",
        description: "Tofu scrambled with spices and vegetables.",
        category: "vegan",
        ingredients: ["Tofu", "Turmeric", "Bell pepper", "Onion", "Spinach", "Salt"],
        steps: [
          "Crumble tofu.",
          "Sauté veggies and add tofu with spices.",
          "Cook until heated through."
        ],
        image: "images/tofu-scramlbe.jpg"
      },
      {
        id: "12",
        title: "Vegan Chocolate Mousse",
        description: "A creamy mousse made with avocado and cocoa.",
        category: "vegan",
        ingredients: ["Avocado", "Cocoa powder", "Maple syrup", "Vanilla extract"],
        steps: [
          "Blend all ingredients until smooth.",
          "Chill and serve."
        ],
        image: "images/vegan-mousse.jpg"
    },
      
    {
      id: "13",
      title: "Paneer Butter Masala",
      description: "Rich paneer curry in tomato-cream gravy.",
      category: "vegetarian",
      ingredients: ["Paneer", "Tomatoes", "Cream", "Spices"],
      steps: [
        "Blend tomatoes and spices.",
        "Cook paneer in the gravy.",
        "Add cream and simmer."
      ],
      image: "images/paneer-butter-masala.jpg"
    },
    {
      id: "14",
      title: "Vegetable Pulao",
      description: "Aromatic rice with mixed vegetables.",
      category: "vegetarian",
      ingredients: ["Basmati rice", "Mixed veggies", "Whole spices"],
      steps: [
        "Sauté spices and veggies.",
        "Add rice and water.",
        "Cook until rice is done."
      ],
      image: "images/vegetable-pulao.jpg"
    },
    {
        id: "15",
        title: "Vegetable Biryani",
        description: "Spiced basmati rice cooked with mixed vegetables.",
        category: "vegetarian",
        ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Garam masala", "Mint", "Fried onions"],
        steps: [
          "Sauté vegetables with spices.",
          "Layer rice and vegetables.",
          "Cook on dum until fragrant."
        ],
        image: "images/vegetable-biryani.jpg"
      },
      {
        id: "16",
        title: "Palak Paneer",
        description: "Creamy spinach curry with soft paneer cubes.",
        category: "vegetarian",
        ingredients: ["Spinach", "Paneer", "Onion", "Garlic", "Garam masala", "Cream"],
        steps: [
          "Blanch and puree spinach.",
          "Sauté onions and garlic.",
          "Add paneer and cook with spices."
        ],
        image: "images/palak-paneer.jpg"
      },
      {
        id: "17",
        title: "Aloo Gobi",
        description: "A dry curry of potato and cauliflower with Indian spices.",
        category: "vegetarian",
        ingredients: ["Potatoes", "Cauliflower", "Turmeric", "Cumin", "Ginger", "Tomato"],
        steps: [
          "Sauté spices and ginger.",
          "Add potatoes and cauliflower.",
          "Cover and cook until soft."
        ],
        image: "images/aloo-gobi.jpg"
      },
      {
        id: "18",
        title: "Vegetable Sandwich",
        description: "Crispy sandwich stuffed with vegetables and chutney.",
        category: "vegetarian",
        ingredients: ["Bread", "Cucumber", "Tomato", "Beetroot", "Mint chutney", "Butter"],
        steps: [
          "Spread butter and chutney on bread.",
          "Layer sliced vegetables.",
          "Grill until golden brown."
        ],
        image: "images/veg-sandwich.jpg"
      },
      {
        id: "19",
        title: "Chole Masala",
        description: "Spicy chickpeas cooked with onion-tomato gravy.",
        category: "vegetarian",
        ingredients: ["Chickpeas", "Onions", "Tomatoes", "Chole masala", "Ginger-garlic paste"],
        steps: [
          "Cook chickpeas.",
          "Make masala with onion, tomato, and spices.",
          "Simmer chickpeas in gravy."
        ],
        image: "images/chole-masala.jpg"
      },
      {
        id: "20",
        title: "Vegetable Fried Rice",
        description: "Stir-fried rice with colorful vegetables and soy sauce.",
        category: "vegetarian",
        ingredients: ["Cooked rice", "Carrots", "Beans", "Capsicum", "Soy sauce", "Pepper"],
        steps: [
          "Sauté vegetables.",
          "Add rice and sauces.",
          "Mix and stir-fry on high heat."
        ],
        image: "images/veg-fried-rice.jpg"
      },
      {
        id: "21",
        title: "Cabbage Paratha",
        description: "Stuffed flatbread filled with spiced cabbage.",
        category: "vegetarian",
        ingredients: ["Whole wheat flour", "Cabbage", "Carom seeds", "Chili powder", "Salt"],
        steps: [
          "Prepare cabbage filling.",
          "Roll parathas with stuffing.",
          "Roast on tawa with ghee."
        ],
        image: "images/cabbage-paratha.jpg"
      },
      {
        id: "22",
        title: "Tomato Soup",
        description: "Creamy and tangy tomato soup served hot.",
        category: "vegetarian",
        ingredients: ["Tomatoes", "Garlic", "Cream", "Salt", "Pepper", "Cornstarch"],
        steps: [
          "Boil and blend tomatoes.",
          "Add cream and spices.",
          "Simmer and thicken slightly."
        ],
        image: "images/tomato-soup.jpg"
      },
      {
        id: "23",
        title: "Mixed Vegetable Curry",
        description: "Traditional curry with assorted seasonal vegetables.",
        category: "vegetarian",
        ingredients: ["Carrot", "Beans", "Peas", "Potato", "Coconut milk", "Spices"],
        steps: [
          "Cook veggies with spices.",
          "Add coconut milk and simmer.",
          "Serve with rice or roti."
        ],
        image: "images/mixed-veg-curry.jpg"
      },
      {
        id: "24",
        title: "Corn Cheese Balls",
        description: "Crispy fried balls with corn and cheese filling.",
        category: "vegetarian",
        ingredients: ["Corn", "Cheese", "Bread crumbs", "Flour", "Chili flakes"],
        steps: [
          "Mix and shape filling into balls.",
          "Coat with breadcrumbs.",
          "Deep fry until golden."
        ],
        image: "images/corn-cheese-balls.jpg"
    },
    {
      id: "25",
      title: "Chicken Curry",
      description: "Spicy Indian-style chicken curry.",
      category: "non-veg",
      ingredients: ["Chicken", "Onion", "Tomatoes", "Spices"],
      steps: [
        "Sauté onions and spices.",
        "Add chicken and cook.",
        "Simmer in tomato gravy."
      ],
      image: "images/chicken-curry.jpg"
    },
    {
      id: "26",
      title: "Grilled Chicken Salad",
      description: "Healthy salad with grilled chicken and greens.",
      category: "non-veg",
      ingredients: ["Chicken breast", "Lettuce", "Cherry tomatoes", "Dressing"],
      steps: [
        "Grill the chicken.",
        "Chop vegetables.",
        "Toss with dressing and serve."
      ],
      image: "images/grilled-chicken-salad.jpg"
    },
    {
        id: "27",
        title: "Chicken Biryani",
        description: "Aromatic rice cooked with marinated chicken and spices.",
        category: "non-veg",
        ingredients: ["Basmati rice", "Chicken", "Yogurt", "Biryani masala", "Mint", "Fried onions"],
        steps: [
          "Marinate chicken in yogurt and spices.",
          "Layer with cooked rice.",
          "Steam on low flame until done."
        ],
        image: "images/chicken-biryani.jpg"
      },
      {
        id: "28",
        title: "Egg Curry",
        description: "Boiled eggs simmered in spicy tomato-onion gravy.",
        category: "non-veg",
        ingredients: ["Boiled eggs", "Onions", "Tomatoes", "Ginger-garlic paste", "Spices"],
        steps: [
          "Sauté onion and tomato masala.",
          "Add spices and water.",
          "Add eggs and simmer."
        ],
        image: "images/egg-curry.jpg"
      },
      {
        id: "29",
        title: "Fish Fry",
        description: "Crispy fried fish fillets with lemon and spices.",
        category: "non-veg",
        ingredients: ["Fish fillets", "Turmeric", "Chili powder", "Rice flour", "Oil"],
        steps: [
          "Marinate fish in spices.",
          "Coat with flour.",
          "Shallow fry until crisp."
        ],
        image: "images/fish-fry.jpg"
      },
      {
        id: "30",
        title: "Butter Chicken",
        description: "Creamy tomato chicken curry from North India.",
        category: "non-veg",
        ingredients: ["Chicken", "Tomatoes", "Cream", "Butter", "Spices"],
        steps: [
          "Marinate and cook chicken.",
          "Prepare buttery tomato gravy.",
          "Combine and simmer."
        ],
        image: "images/butter-chicken.jpg"
      },
      {
        id: "31",
        title: "Prawn Masala",
        description: "Spicy prawns cooked in onion-tomato gravy.",
        category: "non-veg",
        ingredients: ["Prawns", "Onions", "Tomatoes", "Curry leaves", "Spices"],
        steps: [
          "Sauté onion-tomato mix.",
          "Add prawns and cook quickly.",
          "Garnish with coriander."
        ],
        image: "images/prawn-masala.jpg"
      },
      {
        id: "32",
        title: "Chicken 65",
        description: "Spicy fried chicken bites — South Indian style.",
        category: "non-veg",
        ingredients: ["Chicken", "Yogurt", "Ginger-garlic paste", "Cornflour", "Curry leaves"],
        steps: [
          "Marinate chicken.",
          "Deep fry until crisp.",
          "Toss with chili and curry leaves."
        ],
        image: "images/chicken-65.jpg"
      },
      {
        id: "33",
        title: "Grilled Chicken",
        description: "Healthy grilled chicken with herbs and lemon.",
        category: "non-veg",
        ingredients: ["Chicken breast", "Lemon", "Garlic", "Olive oil", "Mixed herbs"],
        steps: [
          "Marinate chicken.",
          "Grill until juicy and done.",
          "Serve with salad."
        ],
        image: "images/grilled-chicken.jpg"
      },
      {
        id: "34",
        title: "Keema Pav",
        description: "Spicy minced meat served with toasted bread.",
        category: "non-veg",
        ingredients: ["Minced chicken/mutton", "Onions", "Tomatoes", "Spices", "Pav buns"],
        steps: [
          "Cook keema in spicy masala.",
          "Toast pav with butter.",
          "Serve hot together."
        ],
        image: "images/keema-pav.jpg"
      },
      {
        id: "35",
        title: "Egg Bhurji",
        description: "Spicy Indian scrambled eggs.",
        category: "non-veg",
        ingredients: ["Eggs", "Onion", "Tomato", "Green chili", "Spices"],
        steps: [
          "Sauté onions and tomatoes.",
          "Add beaten eggs.",
          "Scramble with spices."
        ],
        image: "images/egg-bhurji.jpg"
      },
      {
        id: "36",
        title: "Chicken Manchurian",
        description: "Crispy chicken in tangy Indo-Chinese sauce.",
        category: "non-veg",
        ingredients: ["Boneless chicken", "Cornflour", "Soy sauce", "Garlic", "Chili sauce"],
        steps: [
          "Fry chicken pieces.",
          "Prepare Manchurian sauce.",
          "Toss chicken ichicken-manchuriann sauce."
        ],
        image: "images/chicken-manchurian.jpg"
    }, 
    {
        id: "37",
        title: "Chocolate Lava Cake",
        description: "Molten chocolate-filled dessert cake.",
        category: "dessert",
        ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour"],
        steps: [
          "Melt chocolate and butter.",
          "Mix with eggs and sugar.",
          "Pour into ramekins and bake."
        ],
        image: "images/lava-cake.jpg"
      },
      {
        id: "38",
        title: "Fruit Custard",
        description: "Chilled custard mixed with seasonal fruits.",
        category: "dessert",
        ingredients: ["Milk", "Custard powder", "Fruits", "Sugar"],
        steps: [
          "Prepare custard with milk.",
          "Cool and mix with chopped fruits.",
          "Chill before serving."
        ],
        image: "images/fruit-custard.jpg"
      },
      {
        id: "39",
        title: "Gulab Jamun",
        description: "Soft milk balls soaked in cardamom sugar syrup.",
        category: "dessert",
        ingredients: ["Milk powder", "Flour", "Ghee", "Sugar", "Cardamom"],
        steps: [
          "Make dough from milk powder and flour.",
          "Shape into balls and fry.",
          "Soak in warm sugar syrup."
        ],
        image: "images/gulab-jamun.jpg"
      },
      {
        id: "40",
        title: "Mango Kulfi",
        description: "Creamy frozen Indian dessert with mango flavor.",
        category: "dessert",
        ingredients: ["Mango pulp", "Condensed milk", "Cream", "Cardamom"],
        steps: [
          "Mix ingredients and blend.",
          "Pour into moulds.",
          "Freeze until set."
        ],
        image: "images/mango-kulfi.jpg"
      },
      {
        id: "41",
        title: "Rasgulla",
        description: "Spongy white balls made from chenna soaked in sugar syrup.",
        category: "dessert",
        ingredients: ["Chenna (paneer)", "Sugar", "Water", "Cardamom"],
        steps: [
          "Knead chenna and shape into balls.",
          "Boil in sugar syrup.",
          "Cool and serve chilled."
        ],
        image: "images/rasgulla.jpg"
      },
   
      {
        id: "43",
        title: "Chocolate Brownies",
        description: "Rich, fudgy chocolate brownies baked to perfection.",
        category: "dessert",
        ingredients: ["Dark chocolate", "Flour", "Sugar", "Butter", "Eggs"],
        steps: [
          "Melt chocolate and butter.",
          "Mix all ingredients.",
          "Bake until fudgy and crackly."
        ],
        image: "images/brownies.jpg"
      },
      {
        id: "44",
        title: "Rice Kheer",
        description: "Traditional Indian rice pudding flavored with cardamom.",
        category: "dessert",
        ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Nuts"],
        steps: [
          "Boil milk and add rice.",
          "Cook until thickened.",
          "Add sugar, cardamom, and nuts."
        ],
        image: "images/rice-kheer.jpg"
      },
      {
        id: "45",
        title: "Ice Cream Sandwich",
        description: "Vanilla ice cream between soft cookies.",
        category: "dessert",
        ingredients: ["Cookies", "Vanilla ice cream", "Chocolate chips"],
        steps: [
          "Scoop ice cream onto cookies.",
          "Top with another cookie.",
          "Roll edges in chocolate chips."
        ],
        image: "images/ice-cream-sandwich.jpg"
      },
      {
        id: "46",
        title: "Banana Split",
        description: "Classic dessert with bananas, ice cream, and toppings.",
        category: "dessert",
        ingredients: ["Bananas", "Ice cream", "Chocolate syrup", "Cherries", "Whipped cream"],
        steps: [
          "Split banana lengthwise.",
          "Place scoops of ice cream.",
          "Top with syrups, whipped cream, and cherries."
        ],
        image: "images/banana-split.jpg"
      },
      {
        id: "47",
        title: "Carrot Halwa",
        description: "Indian dessert made with grated carrots, milk, and ghee.",
        category: "dessert",
        ingredients: ["Carrots", "Milk", "Sugar", "Ghee", "Cardamom", "Nuts"],
        steps: [
          "Sauté carrots in ghee.",
          "Cook with milk until reduced.",
          "Add sugar, cardamom, and nuts."
        ],
        image: "images/carrot-halwa.jpg"
      },
      {
        id: "48",
        title: "Apple Crumble",
        description: "Warm apple dessert with crunchy cinnamon topping.",
        category: "dessert",
        ingredients: ["Apples", "Brown sugar", "Oats", "Butter", "Cinnamon"],
        steps: [
          "Chop and sweeten apples.",
          "Top with oat-sugar-butter mix.",
          "Bake until golden."
        ],
        image: "images/apple-crumble.jpg"
      }
      

  ];
  