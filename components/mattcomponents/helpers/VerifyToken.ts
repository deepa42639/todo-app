import { jwtVerify } from "jose";


const secret = new TextEncoder().encode('123');

export const verifyToken = async (token: string) => {
    if (!token) {
    return null
    }
  
    try {
      const { payload } = await jwtVerify(token, secret);
      return payload;
    } catch (err) {
      return null
    }
  };