const crypto = require('crypto');
const _env          = process.env.APP_PLATFORM || "local";
const confs         = require("../config/" + _env + ".js");
let secret = '';

const init = appSecret => {
  secret = appSecret;
};

const encrypt = (str, salt) => {
  const cipher = crypto.createCipher('aes-256-cbc', salt);
  let crypted = cipher.update(str, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const decrypt = (str, salt) => {
  try {
    const decipher = crypto.createDecipher('aes-256-cbc', salt);
    let dec = decipher.update(str, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  } catch (e) {
    return null;
  }
};

const createSalt = () => confs.appSecret;

module.exports = {
  init,
  encrypt,
  decrypt,
  createSalt
};
