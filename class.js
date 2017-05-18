let moment = require('moment');
moment().format();

let dateOne = '2017-05-17';
let dateOneFormat = 'LLLL';

result = moment(dateOne).format(dateOneFormat);
console.log(result);