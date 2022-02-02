require('dotenv').config()

module.exports = {
  dialect: process.env.DIALECT,  
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  port: process.env.PORT,
  define: {
    timestamps: true,
    underscored: true,
  },
};
