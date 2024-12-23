export const USER_ROLE = {
  user: "user",
  admin: "admin",
} as const;

export type ROLE = keyof typeof USER_ROLE;
