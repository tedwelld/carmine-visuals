const sql = require('mssql');
const config = {
  user: 'sa',
  password: 'your_password',
  server: 'DESKTOP-IF07HU6',
  database: 'CVA_DB',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    instanceName: 'SQLEXPRESS'
  }
};

sql.connect(config)
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Connection failed:', err));
