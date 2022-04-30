# ⭐️ Diseño de Software con TDD

```
TDD Design Software Technique

1. Write a test for the next bit of functionality you want to add.
2. Write the functional code until the test passes.
3. Refactor both new and old code to make it well structured.
```

Referencia: [TDD by Martin Fowler](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

Para este punto se debe tener un proyecto nuevo de js, con un `package.json`, con jest como dependencia, con una estructura de directorios y una prueba que falla.

# I Creación de un nuevo proyecto

1. Crea un nuevo proyecto de js, agrega jest para realizar pruebas de unidad.

Si tienes dudas con esto anterior, revisa el siguiente repositorio [Creación de proyectos en JS](https://github.com/DanielaBeltranCruz/My_LaunchX_App).

2. Crea de igual forma dos directorios `app` y `test`, y crea en la raíz el archivo `index.js`.

# II Agregando una prueba de unidad vacía

3. En la carpeta `test` agrega una prueba de unidad en jest que este fallando, crea el archivo `prueba.test.js`.

# III Test Driven Development by Martin Fowler

##  Step 1: Write a test for the next bit of functionality you want to add

Escribe el código de la siguiente función a agregar en la prueba existente.

## Step 2: Write the functional code until the test passes

Escribe el código necesario para solucionar los errores mostrados hasta que la prueba pase.

## Step 3: Refactor both new and old code to make it well structured

Una vez se hayan solucionado los errores arrojados cada vez que se ejecutan las pruebas, tu prueba ahora sí pasa todos los casos exitosamente.