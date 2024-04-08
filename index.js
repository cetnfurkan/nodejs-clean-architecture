const { Read } = require('./src/config');
const { ExpressServer } = require('./src/server/express_server');
const { Postgres } = require('./src/database/postgres');

(async () => {
    const config = await Read();
    const db = new Postgres(config).NewPostgresDatabase();
    const app = new ExpressServer(config, db.Get());

    app.Start();
})();