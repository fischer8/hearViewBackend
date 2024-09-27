import jwt, { JwtPayload } from 'jsonwebtoken';

const secretKey: string = 'suaSenhaSecreta';

const configJWT: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload: object) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

const validateToken = (token: string) => {
  const data = jwt.verify(token, secretKey) as JwtPayload;
  return data;
};

export { generateToken, validateToken };

