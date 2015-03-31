exports.apply = apply;

/*
value   - base value to modify
name    - name of the modifier
params  - parameters of the modifier
data    - array of data that is available for processing
options - additional options for object modifier
*/
function apply(value, name, params, data, options) {
	options = options || {};
	switch(name) {
		case 'htmlcomment':
        	value = '<!--' + value.toString() + '-->';
        	break;
		case 'length':
			value = value.length;
			break;
    }

    return value;
}
