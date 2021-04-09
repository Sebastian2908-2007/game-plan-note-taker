const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const noteRoutes = require('./apiRoutes/noteRoutes/note');
const htmlRoutes = require('./apiRoutes/noteRoutes/htmlRoutes');
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parese incoming JSON data
app.use(express.json());
app.use(express.static('public/assets'));
//app.use('/api', noteRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
