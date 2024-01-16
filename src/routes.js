const cors = require('cors');
const noteRouter = require('./routes/note.route');
const userRouter = require('./routes/user.route');

async function routes (app) {
    app.use(cors());

    app.use('/notes', noteRouter);
    app.use('/users', userRouter);
}

module.exports = routes;