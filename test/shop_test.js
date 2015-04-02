var assert = require("assert");

describe("Tests on Products", function(){

    it("Should get the popular product", function(){

        var shop = require('../functions/shop');
        shop =new shop();
        var result = shop.getPopularProduct()
        var expected ={ 'Mixed Sweets 5s': 172 }
        var comparison = JSON.stringify(result) == JSON.stringify(expected);
        assert.equal(comparison , true)
       

    });


    it("should get popular product with its category" , function(){
        var shop = require('../functions/shop');
        shop =new shop();
        var result = shop.PopularByCategory()
        var expected = { 'Mixed Sweets 5s': 172, type: 'Food & Beverages' }

        var comparison = JSON.stringify(result) == JSON.stringify(expected);
        assert.equal(comparison , true)
    })

    it("should get the product List", function () {

        var shop= require('../functions/shop');
        shop = new shop();
        var expected ={ 'Milk 1l': 142,
                        'Imasi': 125,
                        'Bread': 130,
                        'Chakalaka Can': 94,
                        'Gold Dish Vegetable Curry Can': 86,
                        'Fanta 500ml': 94,
                        'Coke 500ml': 159,
                        'Cream Soda 500ml': 75,
                        'Iwisa Pap 5kg': 47,
                        'Top Class Soy Mince': 98,
                        'Shampoo 1 litre': 26,
                        'Soap Bar': 50,
                        'Bananas - loose': 114,
                        'Apples - loose': 114,
                        'Mixed Sweets 5s': 172,
                        'Heart Chocolates': 20,
                        'Rose (plastic)': 14,
                        'Valentine Cards': 14 }

        assert.equal(JSON.stringify(shop.getProducts()) == JSON.stringify(expected),true );
        

    });

});