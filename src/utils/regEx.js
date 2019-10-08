export const validatePassword = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)
