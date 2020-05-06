import infoRouter from '../info/infoRoutes';
import baseRouter from '../_base/Routes';

export default function routes(app) {
  app.use('/base', baseRouter);
  app.use('/info', infoRouter);
}
