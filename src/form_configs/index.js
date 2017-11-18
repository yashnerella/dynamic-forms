import address from './addressFormConfig';
import customer from './customerFormConfig';
import recaps from './RecapConfig';

export default {
    address,
    customer,
    recaps
}

// TODO: Automate the above process somehow!
// var normalizedPath = require("path").join(__dirname, "routes");
//
// fs.readdirSync(normalizedPath).forEach(function(file) {
//    // require("./routes/" + file);
// });