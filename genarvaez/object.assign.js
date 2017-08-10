 // tu código acá


function extend(){
	 
	const obj3 = Object.assign({}, ...arguments) 
	return obj3;
}
extend("a:1", "b:2", "c:3");

exports.extend = extend
