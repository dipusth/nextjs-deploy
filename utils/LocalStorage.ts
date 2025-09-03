const REGISTERED_USERS = "registered_users"
const ACTIVE_USERS = "active_users"


export const Roles = {
  Superadmin: "SuperAdmin",
  Admin: "Admin",
  User: "User",
};
export interface IuserType {
  name: string;
  username: string;
  password: string;

}
const addNewUser = (user: IuserType) => {
   const useStr = localStorage.getItem(REGISTERED_USERS) || "[]";
   const users = JSON.parse(useStr) as IuserType[];
   users.push(user);

   localStorage.setItem(REGISTERED_USERS, JSON.stringify(users));
}

const isUserAlreadyReistered = (username: string): boolean => {
    const useStr = localStorage.getItem(REGISTERED_USERS) || null;
    if(useStr == null)
        return false;
    const users = JSON.parse(useStr) as IuserType[];
    const foundUser = users.find(x => x.username == username);
    return foundUser != null
}

const getUser = (username: string, password: string) => {
  const userStr = localStorage.getItem(REGISTERED_USERS) || null;
  if(userStr == null) return null;
  const users = JSON.parse(userStr) as IuserType[];
  const foundUser = users.find(x => x.username == username && x.password == password)
  console.log('foundUser', foundUser)
  return foundUser

};

const updateActiveUser = (user: IuserType) => {
  localStorage.setItem(ACTIVE_USERS, JSON.stringify(user));
}

const getActiveUser = () => {
  const activeUser = localStorage.getItem(ACTIVE_USERS) || null;
  if(activeUser == null) return null
  return JSON.parse(activeUser)
}
const deleteActiveUser = () => {
  localStorage.removeItem(ACTIVE_USERS);
}
export { addNewUser, isUserAlreadyReistered, getUser, updateActiveUser, getActiveUser, deleteActiveUser}