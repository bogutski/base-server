import message from '../utils/messages';

export default function errorHandling(app) {
  app.use((req, res, next) => res.status(404).json(message.fail('API not found'))); // eslint-disable-line no-unused-vars

  app.use((error, req, res, next) => {
    // eslint-disable-line no-unused-vars
    res
      .status(error.status || 500)
      .json(
        message.fail(
          'Something went wrong. If it looks critical, please send a screenshot to support',
        ),
      );
  });
}
