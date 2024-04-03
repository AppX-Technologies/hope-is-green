export const getIsUserLoggedInFromLocal = () => {
  return Boolean(localStorage.getItem("user-is-loggedin"));
};

export const setIsUserLoggedInToLocal = (isLoggedIn) => {
  if (isLoggedIn) {
    localStorage.setItem("user-is-loggedin", isLoggedIn);
  } else {
    localStorage.clear();
  }
};

export const isAdmin = (role) => role === "Admin";
export const isMember = (role) => ["Member"].includes(role);
export const isMemberOrAdmin = (role) => ["Admin", "Member"].includes(role);
