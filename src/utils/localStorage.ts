import { UserType } from "./types";

export const addUserToLocalStorage = (user: UserType) => {
  const { name, email, preferences, nickname, phone, location } = user;
  localStorage.setItem('user', JSON.stringify({ name, email, preferences, nickname, phone, location }));
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  return user;
}