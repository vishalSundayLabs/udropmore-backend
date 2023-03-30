
export function validatePhoneNumber(value) {
  if (value.length > 10 || value.length < 5) {
    return false;
  }
  return true;
}

export function createOtp(): string {
  try {
    let otp: string = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
  } catch (error) {
    return error;
  }
}


export async function decodeBase64String(encrypt: string) {
  try {
    let decryptdata = encrypt.split(":");
    let email: string = decryptdata[0].toLowerCase();
    let password: string = decryptdata[1];
    return { email, password };
  } catch (error) {
    return error;
  }
}
