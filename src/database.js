const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_test_jaya',{
useCreateIndex: true,
useNewUrlParser:true,
useFindAndModify:false,

})
.then(db => console.log('DB is connected'))
  .catch(err => console.error(err));