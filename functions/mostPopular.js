
module.exports = function(){
		var fs = require('fs');

		this.getPopularProduct = function(){

				var path = '../NelisaSalesHistory.csv'
				var file = fs.readFileSync(path) 
				file=file.toString()
				file= file.split('\r')
				var products ={}
				file.forEach(function(row){
					if(file.indexOf(row)==0){return}
					var product = row.split(';')[2]
					if(product!=''){
							if(products[product]==undefined){
								products[product]=0
							}
							products[product]+=parseInt(row.split(';')[3])
					}
				})
				var max=0;
				var maxProduct='';
				for(var product in products){
						if(products[product] > max){
							max = products[product];
							maxProduct =product
						}
				};
				var maxMap ={}
				maxMap[maxProduct] = max;
				console.log(maxMap)


		}
}

var filereader = require('./mostPopular')
nelisa = new filereader();
nelisa.getPopularProduct();