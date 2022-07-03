const database = require('./config/database')
const app = require('./app')

//conecting databse
database()

const server = app.listen(4000, () => {
    console.log(`Server started on PORT: 4000`);
})