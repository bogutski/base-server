const message = {};

message.success = (text = '', payload, silent = true) => ({
  message: text,
  success: true,
  fail: false,
  silent: true,
  payload,
});

message.fail = (text = '', payload, silent = true) => ({
  message: text,
  success: false,
  fail: true,
  silent: true,
  payload,
});

export default message;
