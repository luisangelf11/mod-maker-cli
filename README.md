# ⚛️ MOD-MAKER CLI

**Mod-Maker CLI** es una herramienta de _scaffolding_ (andamiaje) diseñada para desarrolladores de React/Frontend que utilizan una arquitectura orientada a **features** (características). Permite generar rápidamente estructuras de código como _features_, componentes, páginas, servicios y _hooks_ con una sola línea de comando, promoviendo la consistencia y la organización en proyectos grandes.

Puedes apoyarme en GitHub dandole una ⭐ estrella a mi repositorio.

```bash
https://github.com/luisangelf11/mod-maker-cli
```

---

## 🚀 Instalación

Dado que **`mod-maker-cli`** es una herramienta utilizada durante el desarrollo para generar código y no es necesaria en el entorno de producción, debe instalarse como una **dependencia de desarrollo (`devDependency`)**.

```bash
# Con npm
npm install mod-maker-cli --save-dev

# Con yarn
yarn add mod-maker-cli -D
```

## 🛠️ Uso Básico

Una vez instalado, puedes ejecutar el CLI directamente desde tu terminal dentro de la carpeta raíz de tu proyecto:

```bash
npx mod-maker
```

## ⭐ Comandos

- __feacture-A:__ Genera una estructura de carpetas basada en feacture, creando las carpetas de components, pages, services, hooks, interfaces, types, constants, styles y helpers.

- __feacture-B:__ Es una versión más básica del anterior, el cual solo crea las carpetas de components, pages, interfaces, hooks y services.

- __atomic-arc-A:__ Genera la estructura base de una arquitectura atómica. Dentro de la carpeta de components crea las subcarpetas atoms, molecules, organisms y templates. Además, genera una carpeta feacture para agrupar cada uno de los módulos a generar, creando dentro de esta carpeta la estructura del feacture-A.

- __atomic-arc-B:__ Genera la estructura base de una arquitectura atómica. Dentro de la carpeta de components crea las subcarpetas atoms, molecules, organisms y templates. Además, genera una carpeta feacture para agrupar cada uno de los módulos a generar, creando dentro de esta carpeta la estructura del feacture-B.

- __component:__ Crea el archivo con un template de un  componente dentro de ./src/components.

- __page:__ Crea el archivo con un template de una página dentro de ./src/pages.

- __service:__ Crea el archivo con un template de un servicio configurado con Axios dentro de ./src/services.

- __hook:__ Crea el archivo con un template de un hook dentro de ./src/hooks.

## 👨‍💻 Contribuciones

Si tienes sugerencias o quieres mejorar la herramienta (por ejemplo, añadiendo más opciones de feature o templates), ¡eres bienvenido! Por favor, abre un issue o envía un pull request.

## 📄 Licencia

Este proyecto está bajo la licencia ISC. Creado por Luis Angel Fernández Concepción.
