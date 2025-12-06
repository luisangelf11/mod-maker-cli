import { capitalizeString } from "../helpers/capitalize.js";

export const templateHook = (name) => {
  return `import { useState } from "react";

export const use${capitalizeString(name)} = () => {
  const [state, setState] = useState();

  return { state, setState };
};`;
};
