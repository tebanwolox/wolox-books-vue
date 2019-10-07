export const validatePassword = function (password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)
}
