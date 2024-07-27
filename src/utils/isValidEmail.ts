
const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export const isValidEmail = (email : string) => pattern.test(email.trim());