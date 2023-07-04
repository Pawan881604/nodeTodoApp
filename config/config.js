const mongoose = require('mongoose');

const createDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('mongoose database is connected');
        })
        .catch(err => {
            console.log('mongoose error:', err);
        });
};

module.exports = createDatabase;
