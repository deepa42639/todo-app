
import { SignJWT, jwtVerify,JWTPayload } from 'jose';



const secret = new TextEncoder().encode('123');

export async function CreateSession(payload: JWTPayload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);
  return token;
}


