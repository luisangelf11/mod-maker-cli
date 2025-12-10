#!/usr/bin/env node

import inquirer from "inquirer";
import {
  componentOption,
  hookOption,
  pageOption,
  serviceOption,
  feactureAOption,
  feactureBOption,
  atomicOptionA,
  atomicOptionB,
} from "./commands/my-cmd.js";

const main = async () => {
  console.log("Welcome to mod-maker CLI ⚛️");
  try {
    const answers = await inquirer.prompt([
      {
        type: "select",
        name: "projectType",
        message: "What do you want to create ⚛️: ",
        choices: [
          "feacture-A",
          "feacture-B",
          "atomic-arc-A",
          "atomic-arc-B",
          "component",
          "page",
          "service",
          "hook",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Name:",
        validate(input) {
          if (input.trim() === "") {
            return "The name is empty. You need add a name.";
          }
          return true;
        },
      },
      {
        type: "select",
        name: "lang",
        message: "Select you language 🚀: ",
        choices: ["typescript 💙", "javascript 💛"],
      },
    ]);
    const { projectType, name, lang } = answers;

    // Genera la ruta del archivo o carpeta
    const targetPath = process.cwd();

    if (projectType === "feacture-A") feactureAOption(name, lang, targetPath);

    if (projectType === "feacture-B") feactureBOption(name, lang, targetPath);

    if (projectType === "atomic-arc-A") atomicOptionA(name, lang, targetPath);

    if (projectType === "atomic-arc-B") atomicOptionB(name, lang, targetPath);

    if (projectType === "component") componentOption(name, lang, targetPath);

    if (projectType === "page") pageOption(name, lang, targetPath);

    if (projectType === "service") serviceOption(name, lang, targetPath);

    if (projectType === "hook") hookOption(name, lang, targetPath);
  } catch (error) {
    console.log("Ups! An error occurred, try again...🥺");
    console.log(error.message);
  }
};

main();
