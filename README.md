# BACKEND COLETKIA
<p>Crear archivo .env con los siguientes datos:</br>
</br>
DATABASE_HOST=(host) </br>
DATABASE_USER=(user) </br>
DATABASE_PASSWORD=(pass) </br>
DATABASE=(namedatabase)
</p>

<p>Correr en la consola "npm install" para instalar y luego "npm start" para ejecutar en el puerto 3000 </br>
</p>
 
 <p> Modelo de Persona:</br>
 {</br>
    "name": String,</br>
    "description": String,</br>
    "image": Text,</br>
}</p>

<h2>Calls</h2>
  <ul>
        <li>Get todos las personas                                       --->  /personas</li>
        <li>Post crea una persona                                           --->  /personas/nuevo</li>
        <li>Get busca una persona por id                                                     --->  /personas/:id</li>
        <li>Put modifica una persona por id                                --->  /personas/:id</li>
        <li>Delete elimina una persona por id                              --->  /personas/:id</li>
                 
    </ul>

