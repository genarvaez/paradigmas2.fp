var createLogger = function mensaje (namespace){
	return function(str){
		return namespace + str
	}
}
var funcion = createLogger("[Hola]: ")
funcion("esto es un mensaje")

module.exports = createLogger;
