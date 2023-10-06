const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars'); usef for handlebars

const app = express(); 

const errorController = require('./controllers/error');
const db = require('./util/database');


// app.set('view engine', 'pug'); Used when using pug templating engine

// app.engine('handlebars', expressHbs.engine({
//     extname: "handlebars",
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout"
//   }));   Used for handlebar templatinf engine. 
 
app.set('view engine', 'ejs'); 
app.set('views', 'views');  

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/admin', adminRoutes); 
app.use(shopRoutes);

app.use(errorController.get404);
 
app.listen(3000);
