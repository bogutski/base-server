const pauseController = (req, res, next) => {
  setTimeout(() => next(), 2000);
};

export default pauseController;
