const Sequelize  = require('sequelize');
const sequenlize=require('../config/db');
const user=sequenlize.define('user',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,

 },
 name:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 phonenumber:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 email:{
    type:Sequelize.STRING,
    allowNull:false,
 }
},{
   timestamps: false // Disable timestamps
 }
)
    module.exports=user;
    