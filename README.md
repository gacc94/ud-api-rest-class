# Proyecto NodeJS - Typescript (yarn) - Class

### Configuracion Iniciales
~~~
yarn init -y
~~~
## Instalaciones

1.  nicializa un nuevo proyecto con Yarn. Esto creará un archivo package.json inicial para tu proyecto.
~~~
yarn init -y
~~~
2.  Instalar Typescript
* typescript: El compilador de TypeScript que se utiliza para transpilar el código TypeScript a JavaScript. Puedes instalarlo ejecutando el siguiente comando:
~~~
yarn add -D typescript
~~~
* ts-node: Una herramienta que permite ejecutar archivos TypeScript directamente sin necesidad de compilarlos previamente. Puedes instalarlo ejecutando el siguiente comando:
~~~
yarn add -D ts-node
~~~
* @types/node: proporciona definiciones de tipo para Node.js. Es el paquete oficial de TypeScript para las definiciones de tipo de Node.js.
~~~
yarn add -D @types/node
~~~
* tsconfig.json: Un archivo de configuración que se utiliza para especificar las opciones y ajustes del compilador de TypeScript. Puedes generar este archivo de configuración ejecutando el siguiente comando:
~~~
npx tsc --init
~~~
3. Asegúrate de tener instalado nodemon. Puedes instalarlo ejecutando el siguiente comando
~~~
yarn add -D nodemon
~~~
4. Agregar depedncia de RXJS para programacion Reactiva (Opcional)
~~~
yarn add rxjs
~~~
5. Ahora puedes comenzar a agregar las dependencias Express
* 
~~~
yarn add express
~~~
* Ejecuta el siguiente comando para instalar Express y las definiciones de tipo como dependencias de desarrollo:
~~~
yarn add -D @types/express 
~~~
6. Para leer archivos .env en una aplicación de Node.js, puedes utilizar la dependencia dotenv
~~~
yarn add dotenv
~~~
7. Instalar libreria de Jose para JWT
~~~
yarn add -E(--exact) jose
~~~
8. Instalar Libreria para JSON Schmea
~~~
yarn add ajv
~~~
~~~
yarn add @sinclair/typebox --dev
~~~
~~~
yarn add ajv-formats
~~~
~~~
yarn add ajv-errors
~~~
9. Instalar Libreria mongoose
~~~
yarn add -E mongoose
~~~
~~~
yarn add -D @types/mongoose
~~~
~~~
yarn add -E mongodb
~~~
10. Instalar libreria lodash
~~~
yarn add -E lodash
~~~
~~~
yarn add -D @types/lodash
~~~
11. Instalaciones Iniciales Totales(Opcionales)
~~~
yarn add express-validator express cors dotenv multer nanoid mongoose bcryptjs jsonwebtoken class-transformer uuid multer rxjs
~~~
~~~
yarn add @types/express @types/uuid @types/bcryptjs @types/cors @types/dotenv @types/multer @types/mongoose typescript ts-node  typescript nodemon @types/node @types/multer @types/jsonwebtoken module-alias @typegoose/typegoose -D 
~~~
12. Instalaciones Auth ()
~~~
yarn add bcryptjs jsonwebtoken
~~~
~~~
yarn add @types/bcryptjs @types/jsonwebtoken -D
~~~ 