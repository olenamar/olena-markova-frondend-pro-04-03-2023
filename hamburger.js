class Hamburger{
    static SIZE_SMALL = { 
        price: 100, 
        calories: 200 
    };
    static SIZE_BIG = { 
        price: 180, 
        calories: 350 
    };

    static STUFFING_CHEESE = { 
        price: 30, 
        calories: 40 
    };

    static TOPPING_MAYO = { 
        price: 30, 
        calories: 40 
    };
    static TOPPING_SAUCE = {
        price: 15, 
        calories: 20 
    };
  
    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
  
    addTopping(topping){
        this.toppings.push(topping);
    }
      
    calculateCalories(){
        let sumCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach((topping) => {
          sumCalories += topping.calories;
        });
        return sumCalories;
    }
  
    calculatePrice(){
        let sumPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach((topping) => {
            sumPrice += topping.price;
        });
        return sumPrice;
    }
  }
  
  // маленький гамбургер з начинкою з сиру
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
  // добавка з майонезу
  hamburger.addTopping(Hamburger.TOPPING_MAYO);
  
  // запитаємо скільки там калорій
  console.log(`Calories: ${hamburger.calculateCalories()}`);
  
  // скільки коштує
  console.log(`Price: ${hamburger.calculatePrice()} $`);
  
  // я тут передумав і вирішив додати ще приправу
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
  // А скільки тепер коштує?
  console.log(`Price with sauce: ${hamburger.calculatePrice()} $`);
  
