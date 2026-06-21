const bcrypt = require('bcryptjs')
const password = 'Sumankushi@0317'
const hash = bcrypt.hashSync(password, 12)
console.log('ADMIN_PASSWORD_HASH=' + hash)
