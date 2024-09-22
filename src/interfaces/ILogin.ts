interface ILogin {
  email: string;
  password: string;
}

interface UserModel {
  id?: number;
  email: string;
  password: string;
}

export { UserModel, ILogin };

