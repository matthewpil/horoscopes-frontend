export default function validateUserDetails(user) {
  if (!!user?.favoriteDinosaur?.name) return false;
  if (!!user?.profession?.name) return false;
  if (!!user?.dateOfBirth) return false;
  if (!!user?.hobbies) return false;
  if (!!user?.nthChild) return false;
  return true;
}
