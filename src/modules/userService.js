const API_URL = "http://localhost:4545";

const setRequestErrorVisible = (visible) => {
  const errorMessage = document.getElementById("request-error");
  if (errorMessage) errorMessage.hidden = !visible;
};

export class UserService {
  async getData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      const data = await response.json();
      setRequestErrorVisible(false);
      return data;
    } catch {
      setRequestErrorVisible(true);
      return null;
    }
  }

  async sendData(url, options) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      const body = await response.text();
      const data = body ? JSON.parse(body) : true;
      setRequestErrorVisible(false);
      return data;
    } catch {
      setRequestErrorVisible(true);
      return null;
    }
  }

  getUsers() {
    return this.getData(`${API_URL}/users`);
  }

  addUser(user) {
    return this.sendData(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  removeUser(id) {
    return this.sendData(`${API_URL}/users/${id}`, {
      method: "DELETE",
    });
  }

  changeUser(id, data) {
    return this.sendData(`${API_URL}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  getUser(id) {
    return this.getData(`${API_URL}/users/${id}`);
  }

  editUser(id, user) {
    return this.sendData(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  filterUsers(filterOption) {
    return this.getData(`${API_URL}/users?${filterOption}=true`);
  }

  getSortUsers(sortOption) {
    return this.getData(
      `${API_URL}/users?_sort=${sortOption.name}&_order=${sortOption.value}`,
    );
  }

  getSearchUsers(str) {
    return this.getData(`${API_URL}/users?name_like=${encodeURIComponent(str)}`);
  }
}
