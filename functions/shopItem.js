module.exports =function(name){
	this.name ='default'
	this.price =0
	this.type="shop items"

	this.unitsSold =function(){

		var shop = require('./shop')
		var spaza = new shop();
		var items = spaza.getProducts();
	
		return items[this.name];

	}
}

