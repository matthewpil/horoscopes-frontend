let currentUser = null;

const CurrentUser = {
  get: () => currentUser,
  set: (user) => {
    currentUser = user;
  },
};

Object.freeze(CurrentUser);
export default CurrentUser;
