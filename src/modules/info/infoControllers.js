export const info = (req, res) => {
  const now = new Date();

  const message = {
    timestamp: now.getTime(),
    localeString: now.toLocaleString(),
    getTimezoneOffset: now.getTimezoneOffset(),
    tz: process.env.TZ,
    name: `APP v${process.env.npm_package_version}`,
  };

  res.status(209).json(message);
};
