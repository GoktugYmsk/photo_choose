const mockUsers = {
  clients: [
    {
      id: 1,
      email: "client@example.com",
      password: "client123",
      name: "Demo Client",
      role: "client",
    },
  ],
  admins: [
    {
      id: 1,
      email: "admin@example.com",
      password: "admin123",
      name: "Demo Admin",
      role: "admin",
    },
  ],
};

export const mockAuthService = {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const admin = mockUsers.admins.find(
          (user) => user.email === email && user.password === password
        );
        if (admin) {
          resolve({
            user: { ...admin, password: undefined },
            token: "mock-admin-token",
          });
          return;
        }

        const client = mockUsers.clients.find(
          (user) => user.email === email && user.password === password
        );
        if (client) {
          resolve({
            user: { ...client, password: undefined },
            token: "mock-client-token",
          });
          return;
        }

        reject(new Error("Invalid email or password"));
      }, 1000);
    });
  },

  logout: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        resolve();
      }, 500);
    });
  },

  updateAvatar: (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const user = JSON.parse(localStorage.getItem("user"));
          const updatedUser = {
            ...user,
            avatar: reader.result,
          };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          resolve(updatedUser);
        };
      }, 1000);
    });
  },

  updateBanner: (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const user = JSON.parse(localStorage.getItem("user"));
          const updatedUser = {
            ...user,
            banner: reader.result,
          };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          resolve(updatedUser);
        };
      }, 1000);
    });
  },
};
