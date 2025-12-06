export const getExtension = (type, isComponent) => {
  if (isComponent) return type === "typescript 💙" ? ".tsx" : ".jsx";

  return type === "typescript 💙" ? ".ts" : ".js";
};
