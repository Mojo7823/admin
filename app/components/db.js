// nextjs/app/components/db.tsx
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'pakq2544_adminbg',
  password: 'dlVxHx%tW,VzW-Zt)_',
  database: 'pakq2544_customer'
});

module.exports = pool.promise();