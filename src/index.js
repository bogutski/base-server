import express from 'express';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import ignoreFavicon from './modules/core/ignoreFavicon';
import routes from './modules/core/routes';
import cors from './modules/core/cors';
import errorHandling from './modules/core/errorHandling';
import pause from './modules/core/pause';

const PORT = +process.env.PORT || 5000;
const app = express();

app.disable('x-powered-by'); // DISABLE EXPRESS SIGNATURE
logger(app);
parseResponse(app);
cors(app);
ignoreFavicon(app);
pause(app);
routes(app);
errorHandling(app);

// ===== PORT =====
app.listen(PORT, () => {
  console.log(
    `Node cluster worker ${process.pid}: listening on port ${PORT} - env: ${process.env.NODE_ENV}`,
  );
});

export default app;
