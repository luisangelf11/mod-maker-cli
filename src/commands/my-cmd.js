import fs from "fs";
import { join, dirname } from "path";
import { capitalizeString } from "../helpers/capitalize.js";
import { getExtension } from "../helpers/generate-ext.js";
import { templateJsx } from "../templates/template-jsx.js";
import { templateService } from "../templates/template-service.js";
import { templateHook } from "../templates/template-hook.js";

//COMPONENTS

export const componentOption = (name, lang, targetPath) => {
  console.log(`Creating new component: ${name} ⚛️`);
  const filePath = join(
    targetPath,
    `src/components/${capitalizeString(name)}${getExtension(lang, true)}`
  );

  const directoryPath = dirname(filePath);

  try {
    fs.mkdirSync(directoryPath, { recursive: true });
  } catch (error) {
    console.error(`Error to create directory ${directoryPath}:`, error.message);
    return;
  }
  fs.writeFileSync(filePath, `${templateJsx(name, false)}`, "utf8");
  setTimeout(() => console.log("The component was created!🚀"), 1500);
};

export const componentByFeacture = (name, lang, targetPath) => {
  const filePath = join(
    targetPath,
    `${capitalizeString(name)}${getExtension(lang, true)}`
  );
  console.log(`Creating new component: ${name} ⚛️`);
  fs.writeFileSync(filePath, `${templateJsx(name, false)}`, "utf8");
  setTimeout(() => console.log("The component was created!🚀"), 1500);
};

//PAGES

export const pageOption = (name, lang, targetPath) => {
  console.log(`Creating new page: ${name} ⚛️`);

  const filePath = join(
    targetPath,
    `src/pages/${capitalizeString(name)}Page${getExtension(lang, true)}`
  );

  const directoryPath = dirname(filePath);

  try {
    fs.mkdirSync(directoryPath, { recursive: true });
  } catch (error) {
    console.error(`Error to create directory ${directoryPath}:`, error.message);
    return;
  }

  fs.writeFileSync(filePath, `${templateJsx(name, true)}`, "utf8");
  setTimeout(() => console.log("The page was created!🚀"), 1500);
};

export const pageByFeacture = (name, lang, targetPath) => {
  const filePath = join(
    targetPath,
    `${capitalizeString(name)}Page${getExtension(lang, true)}`
  );
  console.log(`Creating new page: ${name} ⚛️`);
  fs.writeFileSync(filePath, `${templateJsx(name, true)}`, "utf8");
  setTimeout(() => console.log("The page was created!🚀"), 1500);
};

//SERVICES

export const serviceOption = (name, lang, targetPath) => {
  console.log(`Creating new service: ${name} ⚛️`);

  const filePath = join(
    targetPath,
    `src/services/${name.toLowerCase()}-service${getExtension(lang, false)}`
  );

  const directoryPath = dirname(filePath);

  try {
    fs.mkdirSync(directoryPath, { recursive: true });
  } catch (error) {
    console.log(`Error to create directory ${directoryPath}:`, error.message);
  }

  fs.writeFileSync(filePath, `${templateService(name)}`, "utf8");
  setTimeout(() => console.log("The service was created!🚀"), 1500);
};

export const serviceByFeacture = (name, lang, targetPath) => {
  const filePath = join(
    targetPath,
    `${name.toLowerCase()}-service${getExtension(lang, false)}`
  );
  console.log(`Creating new service: ${name} ⚛️`);
  fs.writeFileSync(filePath, `${templateService(name)}`, "utf8");
  setTimeout(() => console.log("The service was created!🚀"), 1500);
};

//HOOKS

export const hookOption = (name, lang, targetPath) => {
  console.log(`Creating new hook: ${name} ⚛️`);

  const filePath = join(
    targetPath,
    `src/hooks/${name.toLowerCase()}${getExtension(lang, false)}`
  );

  const directoryPath = dirname(filePath);

  try {
    fs.mkdirSync(directoryPath, { recursive: true });
  } catch (error) {
    console.log(`Error to create directory ${directoryPath}:`, error.message);
  }

  fs.writeFileSync(filePath, `${templateHook(name)}`, "utf8");
  setTimeout(() => console.log("The component was created!🚀"), 1500);
};

export const hookByFeacture = (name, lang, targetPath) => {
  const filePath = join(
    targetPath,
    `${name.toLowerCase()}${getExtension(lang, false)}`
  );
  console.log(`Creating new hook: ${name} ⚛️`);
  fs.writeFileSync(filePath, `${templateHook(name)}`, "utf8");
  setTimeout(() => console.log("The hook was created!🚀"), 1500);
};

//FEACTURE

export const feactureAOption = (name, lang, targetPath) => {
  console.log(`Creating new feacture: ${name} ⚛️`);
  const nameLower = name.toLowerCase();
  const filePathModule = join(targetPath, `src/${nameLower}`);
  const allPaths = [
    "components",
    "pages",
    "services",
    "hooks",
    "interfaces",
    "types",
    "constants",
    "styles",
  ];

  const exist = fs.existsSync(filePathModule);

  if (exist)
    return console.log(
      `This feacture exist in this project. Please write other name👀`
    );

  fs.mkdirSync(join(filePathModule), {
    recursive: true,
  });

  allPaths.forEach((path) => {
    fs.mkdirSync(join(filePathModule, path), {
      recursive: true,
    });
  });

  componentByFeacture(name, lang, `${filePathModule}/components`);
  pageByFeacture(name, lang, `${filePathModule}/pages`);
  serviceByFeacture(name, lang, `${filePathModule}/services`);
  hookByFeacture(name, lang, `${filePathModule}/hooks`);

  setTimeout(() => console.log("The feacture was created!🚀"), 1500);
};

export const feactureBOption = (name, lang, targetPath) => {
  console.log(`Creating new feacture: ${name} ⚛️`);
  const nameLower = name.toLowerCase();
  const filePathModule = join(targetPath, `src/${nameLower}`);
  const allPaths = ["components", "pages", "services", "hooks", "interfaces"];

  const exist = fs.existsSync(filePathModule);

  if (exist)
    return console.log(
      `This feacture exist in this project. Please write other name👀`
    );

  fs.mkdirSync(join(filePathModule), {
    recursive: true,
  });

  allPaths.forEach((path) => {
    fs.mkdirSync(join(filePathModule, path), {
      recursive: true,
    });
  });

  componentByFeacture(name, lang, `${filePathModule}/components`);
  pageByFeacture(name, lang, `${filePathModule}/pages`);
  serviceByFeacture(name, lang, `${filePathModule}/services`);
  hookByFeacture(name, lang, `${filePathModule}/hooks`);

  setTimeout(() => console.log("The feacture was created!🚀"), 1500);
};
