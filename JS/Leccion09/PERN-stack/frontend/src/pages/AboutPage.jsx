function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold py-4 px-3 text-center">
        Tecnologías utilizadas
      </h1>
      <h2 className="text-2xl font-bold px-2 py-4">
        Antes de profundizar en el desarrollo, echemos un vistazo a las tecnologías clave
        que usaremos en este proyecto:
      </h2>
      <h3 className="px-2 py-4">
        {" "}
        PostgreSQL: Una potente base de datos relacional que almacenará nuestros datos de
        usuario y tareas.
        Express: Un marco de desarrollo de Node.js que proporcionará un servidor para la
        aplicación y gestionará las solicitudes de API.
        React: La biblioteca Javascript que utilizaremos para construir la intefaz de usuario de nuestra
        aplicación.
        Node.js: El entorno de tiempo de ejecución que ejecutará nuestro servidor y la lógica del lado del servidor.
        JSON Web Token (JWT): Utilizaremos JWT para la autenticación de usuarios, permitiendo que los usuarios se
        autentiquen y accedan a sus tareas de manera segura.
      </h3>
      <h2 className="text-2xl font-bold px-2 py-4">Configuración del proyecto</h2>
      <h3 className="px-2 py-4">
        {" "}
        Cada vez que se cree un nuevo proyecto, se creará un archivo de configuración llamado .env y se anexara
        una serie de variables de entorno que contienen las credenciales de conexión a la base de datos.
        Por ejemplo, si usaramos PostgreSQL, la configuración de .env contendrá la cadena de conexión a la base de
        datos, el usuario y la contraseñas.
      </h3>
      <h2 className="text-2xl font-bold px-2 py-4">
        Ventajas de la autenticación de usuarios y CRUD de tareas
      </h2>
      <h3 className="px-2 py-4">
        En esta aplicación, utilizaremos la autenticación de usuarios y operaciones CRUD (Crear, Leer, Actualizar, Eliminar)
        de tareas. Este proyecto versátil es ideal para una amplia gama de aplicaciones, desde listas de tareas
        personales hasta aplicaciones de gestión de proyectos.
      </h3>
    </div>
  )
}

export default AboutPage