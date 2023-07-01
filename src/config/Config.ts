type env = {
  PORT: Number;
  NODE_ENV: string;
  JWTSECRET: string;
  ISSUER: string;
  DBURI: string;
  EMAIL: string;
  EMAILPASSWORD: string;
  SECRETACCESSKEY: string;
  ACCESSKEYID: string;
  REGION: string;
  SESSIONTOKEN: string;
  BUCKETNAME: string;
  COOLDROP_SECURITY_FEES: Number;
  MEGADROP_SECURITY_FEES: Number;
  DASHDROP_SECURITY_FEES: Number;
  TIME_TO_BUY: Number;
}


export const config: env = {
  PORT: parseInt(process.env.PORT) || 8080,
  NODE_ENV: process.env.NODE_ENV,
  JWTSECRET: process.env.JWTSECRET,
  ISSUER: process.env.ISSUER,
  DBURI: process.env.MONGO_URI,
  EMAIL: process.env.EMAIL,
  EMAILPASSWORD: process.env.EMAILPASSWORD,
  SECRETACCESSKEY: process.env.SECRETACCESSKEY,
  ACCESSKEYID: process.env.ACCESSKEYID,
  REGION: process.env.REGION,
  SESSIONTOKEN: process.env.SESSIONTOKEN,
  BUCKETNAME: process.env.BUCKETNAME,
  COOLDROP_SECURITY_FEES: +process.env.COOL_DROP_SECURITY_FEES,
  MEGADROP_SECURITY_FEES: +process.env.MEGA_DROP_SECURITY_FEES,
  DASHDROP_SECURITY_FEES: +process.env.DASH_DROP_SECURITY_FEES,
  TIME_TO_BUY: +process.env.TIME_TO_BUY
}

export default config;
