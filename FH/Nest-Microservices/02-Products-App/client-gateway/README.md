 == Client Gateway 
 El gateway es el punto de comunicaion entre nuestros clientes y nuestros servicios. Es el encargado de resivir nuestras peticiones y enviarlas a nuestros servicios correspondientes y devolver una respuesta a nuestro cliente

 == Dev

 1.  Clonar el repositorio
 2. Instalar dependecias 
 3. Crear un archivo .env basado en el .env.template
 4. Levantar en el servidor de NATS
 ```
 docker run -d --name nats-main -p4222:4222 -p 8222-8222 nats
 ```
 5. Tener levantados los microservicios que se van a consumir 
 6.  Lavantar el proyecto con ` npm run start:dev`