# PREGUNTAS:

### ¿Por qué evitar los callbacks en las llamadas asíncronas?

- Los callbacks en las llamadas asíncronas pueden llevar a un código confuso y difícil de mantener. Cuando se utilizan callbacks, se crea una cadena de funciones anidadas, lo que puede generar un problema conocido como "callback hell" (infierno de callbacks). Esto dificulta la comprensión del flujo del programa y puede llevar a errores difíciles de depurar. Además, los callbacks no son tan flexibles como otras alternativas más modernas, como las promesas o async/await, que proporcionan un código más legible y fácil de trabajar.

### ¿Qué es una promesa?

- Una promesa es un objeto en la programación asíncrona que representa el resultado (éxito o fracaso) de una operación que aún no se ha completado. Es una forma de manejar tareas asíncronas de manera más estructurada y fácil de leer. Una promesa tiene tres estados posibles: pendiente, cumplida o rechazada. Cuando se crea una promesa, se pueden adjuntar funciones de "then" y "catch" para manejar los resultados. Por ejemplo, si tienes una promesa para cargar una imagen, puedes adjuntar una función "then" para manejar la imagen cargada con éxito o una función "catch" para manejar cualquier error que ocurra durante la carga.

### ¿Qué es el callback hell?

- El "callback hell" (infierno de callbacks) es una situación que ocurre cuando se anidan múltiples callbacks uno dentro de otro, especialmente en código asíncrono. Esto suele suceder cuando se trabaja con operaciones asíncronas en serie o en paralelo, y se utilizan callbacks para manejar los resultados. Con cada nueva operación asíncrona, se agrega otro nivel de anidación, lo que puede hacer que el código sea difícil de leer y mantener. Esto se considera una mala práctica en la programación moderna, y se recomienda utilizar alternativas como las promesas o async/await para evitar el callback hell.