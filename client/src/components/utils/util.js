export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) return true;
  return false;
};
