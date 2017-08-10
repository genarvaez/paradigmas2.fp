const createStore = () => {
	let data = {};
	
	return {
		set: function(key, value){
			data[key] = value;
			return value;
		},
		get: function(key){
			return data[key]
		},
		keys: function(){
			var keys = [];
			for (var key in data) {
				keys.push(key);
			}
			return keys;
		},
		clear: function(){
			data = {};
			return data
		}
	}
};
var storage = createStore();
storage.set("estrella", "*")
storage.keys()
storage.clear()
console.log(storage.get("estrella"));
module.exports = createStore;
