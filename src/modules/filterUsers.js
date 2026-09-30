import { render } from "./render";

export const filterUsers = () => {
  const btsIsChildren = document.getElementById("bts-isChildren");
  const btsIsPermissions = document.getElementById("bts-isPermissions");
  const btsIsAll = document.getElementById("bts-isAll");

  btsIsChildren.addEventListener("click", () => {
    userService.filterUsers("children").then((users) => {
      render(users);
    });
  });
  btsIsPermissions.addEventListener("click", () => {
    userService.filterUsers("permission").then((users) => {
      render(users);
    });
  });
  btsIsAll.addEventListener("click", () => {
    userService.getUsers().then((users) => {
      render(users);
    });
  });
};
