export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export interface TUser {
  id: string;
  name: TUserName;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
