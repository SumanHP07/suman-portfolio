const bcrypt = require('bcryptjs')
const fs = require('fs')
const path = require('path')

const password = 'Sumankushi@0317'
const hash = bcrypt.hashSync(password, 10)

// Quote the hash value so Next.js doesn't misparse the $ signs
const envContent = [
  `NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co`,
  `NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key`,
  `SUPABASE_SERVICE_ROLE_KEY=your-service-role-key`,
  `ADMIN_PASSWORD_HASH="${hash}"`,
  `JWT_SECRET=suman_portfolio_jwt_secret_2026_xyz_secure_key`,
  `ADMIN_MAX_ATTEMPTS=5`,
].join('\r\n') + '\r\n'

const envPath = path.join(__dirname, '..', '.env.local')
fs.writeFileSync(envPath, envContent, 'utf8')
console.log('Written .env.local')
console.log('Hash:', hash)
console.log('Verify:', bcrypt.compareSync(password, hash))
