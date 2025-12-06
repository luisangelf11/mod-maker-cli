import { capitalizeString } from "../helpers/capitalize.js";

export const templateJsx = (name, isPage) => {
  const title = isPage
    ? `${capitalizeString(name)}Page`
    : capitalizeString(name);

  return `
    import React from 'react;
    
    export default function ${title}(){
        return <div>
            <h1>Hello world from ${name} ⚛️</h1>
        </div>
    }
    `;
};
