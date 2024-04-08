const { Read } = require('./src/config');
const { ExpressServer } = require('./src/server/express_server');

(async () => {
    const config = await Read();
    const app = new ExpressServer(config);

    app.Start();
})();