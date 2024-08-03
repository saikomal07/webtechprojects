const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/products');

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.get('/gateway',(req,res)=>{
  res.render('gateway');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
