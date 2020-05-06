//https://github.com/flesler/connect-pause
const generatePause = (delay = 1000, err) => {
  return function (req, res, next) {
    setTimeout(next, delay, err);
  };
};

export default function pause(app) {
  if (process.env.NODE_PAUSE) {
    app.use(generatePause(500));
  }
}
