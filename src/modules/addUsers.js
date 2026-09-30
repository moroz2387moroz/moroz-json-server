import { render } from "./render";

export const addUsers = () => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector("#form-name");
  const emailInput = form.querySelector("#form-email");
  const childrenInput = form.querySelector("#form-children");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.dataset.method) {
      if (!form.reportValidity()) return;
      if (!nameInput.value.trim() || !emailInput.value.trim()) return;

      const user = {
        name: nameInput.value,
        email: emailInput.value,
        children: childrenInput.checked,
        permission: false,
      };

      userService.addUser(user).then((createdUser) => {
        if (!createdUser) return;

        userService.getUsers().then((users) => {
          render(users);
          form.reset();
        });
      });
    }
  });
};
