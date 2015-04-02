//Specifies the categories each product belongs to

// Categories are : 
				// (1) Food & Beverages
				// (2) Fruits & Vegetables
				// (3) Household Supplies

//does not return anything
		
var shop = require('./shop')
var chalk = require('chalk')
var user = require('readline-sync')
var fs = require('fs')

var spaza = new shop();


var products = spaza.getProducts();
var prices =spaza.getPrices();

var shopItems =[]
var cats =["Food & Beverages","Fruits & Vegetables","Household Supplies"]
console.log(chalk.bold.grey.bgWhite("Select Type of Shop Item for following items (Enter 1, 2 or 3"))
console.log(chalk.black.bgWhite("Types are \n 1.Food & Beverages \n 2.Fruits & Vegetables \n 3.Household Supplies"))
for (var product in products){
	var item = require('./shopItem')
	item = new item();
	item.name =product;
	item.price =prices[product]

	var num = user.question(product+" : ");
	item.type = cats[num-1];
	shopItems.push(item);
}
//console.log(shopItems)	

shopItems.forEach(function(item){
		var txt =item.type+";"+ item.name+";"+item.price+";"+item.unitsSold()+"\n"
		fs.appendFile( "productsSold.csv",txt,function (err) {if (err) throw err;});
})			
			