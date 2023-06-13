● ¿Por qué evitar los callbacks en las llamadas asíncronas?
Se debe principalmente a la dificultad de mantener un código limpio, legible y mantenible cuando se utilizan muchos callbacks anidados.
● ¿Qué es una promesa?
Es un objeto en JavaScript que representa la finalización o el fracaso eventual de una operación asincrónica. Proporciona una forma más estructurada y legible de manejar operaciones asincrónicas en comparación con los callbacks.
● ¿Qué es el callback hell?
Es una situación en la que se anidan múltiples callbacks en código JavaScript debido a operaciones asincrónicas. Esto ocurre cuando se tienen muchas llamadas asincrónicas que dependen del resultado de otras llamadas asincrónicas anteriores.