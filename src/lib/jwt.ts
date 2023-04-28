import jsonwebtoken from 'jsonwebtoken';
import { SECRET_JWT } from '../config/index';

export const sign = (payload: any) => {
  return jsonwebtoken.sign(payload, SECRET_JWT!);
};

export const verifyToken = (token: string) => {
  try {
    return jsonwebtoken.verify(token, SECRET_JWT!);
  } catch (err) {
    console.log(err);
    return false;
  }
};
