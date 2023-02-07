const getRecipientEmail = (users: any[], userLoggedIn: { email: any }) => {
  return users?.filter(
    (userToFilter: any) => userToFilter !== userLoggedIn?.email
  )[0];
};
export default getRecipientEmail;
