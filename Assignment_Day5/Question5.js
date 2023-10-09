//5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
 
const obj = {
       a: 1,
        b: { c: 2, d: [3]},
        e: { f: 4 }
     };

const flattenObj = (obj) => {
	let result = {};
	for (const i in obj) {
		if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
			const temp = flattenObj(obj[i]);
			for (const j in temp) {
				result[i + '.' + j] = temp[j];
			}
		}
		else {
			result[i] = obj[i];
		}
	}
	return result;
};

console.log(flattenObj(obj));
