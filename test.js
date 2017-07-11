const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = "godword20";
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

console.log(hash);