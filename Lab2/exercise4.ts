let baseObject:{
	width:number,
	length:number
} = { 
	width: 0, 
	length: 0 
}; 

let rectangle: any = Object.create(baseObject); //if we make the type baseObject, it will throw error.

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function(): number{ 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); 