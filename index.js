const express = require('express');
const app = express();
const path = require('path');
const route1 = require('./routes/route');
const val = require('./mongoconnection/mongos.js');
const cors = require('cors');
val();

app.use(express.json());
// app.use(cors({credentials:true,origin:"https://starlit-malasada-df2b99.netlify.app"}));
app.use(cors());

// app.get("/",(req,res)=>{
//   res.json("server start")
// })


// routes
app.use(route1);

// SERVER PUSHING TO HEROKU
// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get('*',(req,res) => {
//       res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server is running....');
})