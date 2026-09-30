import { render } from "./render";

export const changePermission = () => {
  const tbody = document.getElementById("table-body");

  tbody.addEventListener("click", (event) => {
    if (event.target.closest("input[type=checkbox]")) {
      const tr = event.target.closest("tr");
      const input = tr.querySelector("input[type=checkbox]");
      const id = tr.dataset.key;
      userService.changeUser(id, { permission: input.checked }).then((res) => {
        userService.getUsers().then((users) => {
          render(users);
        });
      });
    }
  });
};
