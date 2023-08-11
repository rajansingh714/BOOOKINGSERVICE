const express= require('express');
const bodyparser= require('body-parser');
const app = express();

const {PORT}= require('./config/serverconfig');
const apiroutes= require('./routes/index');
const db = require('./models/index');


const setupAndStartServer= ()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api', apiroutes);


    app.listen(3002,()=>{
        console.log(`server started as PORT ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    });
}


setupAndStartServer();
