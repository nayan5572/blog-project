import { User } from "./user.model";

// Find the last user ID for a specific role
export const findLastUserId = async (role: string) => {
  const lastUser = await User.findOne({ role }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id ? lastUser.id.substring(2) : undefined;
};

// Generate a new user ID
export const generateUserId = async () => {
  let currentId = (0).toString();
  const lastUserId = await findLastUserId("user");

  if (lastUserId) {
    currentId = lastUserId;
  }

  const incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  return `U-${incrementId}`; // Prefix "U-" for users
};

// Find the last admin ID
export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne({ role: "admin" }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

// Generate a new admin ID
export const generateAdminId = async () => {
  let currentId = (0).toString();
  const lastAdminId = await findLastAdminId();

  if (lastAdminId) {
    currentId = lastAdminId;
  }

  const incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  return `A-${incrementId}`; // Prefix "A-" for admins
};
