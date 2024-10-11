const bcrypt = require('bcrypt');

const plainPassword = '#aC2024#'; // Replace with your actual password
const saltRounds = 10;

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Hashed password:', hash);
});