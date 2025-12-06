import { capitalizeString } from "../helpers/capitalize.js";

export const templateJsx = (name, isPage) => {
  const title = isPage
    ? `${capitalizeString(name)}Page`
    : capitalizeString(name);

  return `export default function ${capitalizeString(title)}() {
  return (
    <div>
      <h1>Hello world from client ⚛️</h1>
    </div>
  );
}`;
};
