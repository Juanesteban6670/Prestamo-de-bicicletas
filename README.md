🚴‍♂️ Sistema de Préstamo de Bicicletas
Bienvenido al repositorio del Sistema de Préstamo de Bicicletas, una aplicación completa para gestionar el préstamo y devolución de bicicletas en una comunidad. Esta plataforma permite a los usuarios agregar bicicletas, ver las disponibles, y gestionar su estado de préstamo. ¡Únete a nosotros para promover el uso de bicicletas y mantener la movilidad urbana verde!

🔧 Tecnologías Utilizadas
Este proyecto está construido con las siguientes tecnologías:

Frontend:

React.js: Una librería de JavaScript para construir interfaces de usuario dinámicas.

CSS: Para los estilos de la interfaz de usuario, haciendo todo más amigable y visual.

Backend:

Spring Boot: Framework de Java para desarrollar aplicaciones basadas en microservicios.

Java: El lenguaje de programación usado para el backend.

JPA (Java Persistence API): Para interactuar con la base de datos.

Base de Datos:

H2 Database: Base de datos en memoria utilizada para almacenar las bicicletas y sus estados.

Comunicación entre Frontend y Backend:

Fetch API: Para las peticiones HTTP desde el frontend (React) al backend (Spring Boot).

🚀 Instalación y Ejecución
1. Clona el repositorio
Primero, clona el repositorio en tu máquina local:

bash
Copiar
Editar
git clone https://github.com/TU_USUARIO/bicicletaprestamo.git
2. Configura el Backend (Spring Boot)
Dirígete a la carpeta del backend:

bash
Copiar
Editar
cd backend
Abre el proyecto en tu IDE favorito (recomendado: IntelliJ IDEA o Eclipse).

Compila y ejecuta el proyecto:

Si usas Maven, ejecuta:

bash
Copiar
Editar
mvn spring-boot:run
Esto iniciará el backend en el puerto 8080.

3. Configura el Frontend (React)
Dirígete a la carpeta del frontend:

bash
Copiar
Editar
cd frontend
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia la aplicación React:

bash
Copiar
Editar
npm start
Esto abrirá la aplicación en tu navegador en http://localhost:3000.

🧩 Funcionalidades Principales
Gestión de Bicicletas
Agregar Bicicletas: Los administradores pueden agregar nuevas bicicletas con su marca y modelo a la base de datos.

Prestar Bicicletas: Los usuarios pueden marcar las bicicletas como "prestadas", lo que actualizará su estado a no disponible.

Devolver Bicicletas: Los usuarios pueden marcar las bicicletas como "devueltas", cambiando su estado a disponible.

Interfaz de Usuario
Lista de Bicicletas: Una tabla muestra todas las bicicletas disponibles, con la opción de prestar o devolver cada una.

Notificaciones: Cada acción (agregar, prestar, devolver) genera una notificación visual para el usuario sobre el estado de la acción.

Tecnologías en Acción
CORS: Para permitir que el frontend en React se comunique con el backend en Spring Boot.

Fetch API: Usada para realizar las peticiones HTTP a los endpoints REST del backend.

Rutas del Backend
GET /bicicletas: Obtener todas las bicicletas.

POST /bicicletas: Agregar una nueva bicicleta.

PUT /bicicletas/{id}: Cambiar la disponibilidad de una bicicleta (prestada/disponible).

PUT /bicicletas/{id}/devolver: Devolver una bicicleta y marcarla como disponible.

PUT /bicicletas/{id}/prestar: Prestar una bicicleta y marcarla como no disponible.

🎨 Interfaz Visual
Tabla de Bicicletas: Muestra las bicicletas con columnas para el ID, marca, modelo, y estado (disponible/ocupada).

Botones de Acción: Los usuarios pueden interactuar con las bicicletas, ya sea para prestarlas o devolverlas.

Notificaciones de Éxito/Error: Después de cada acción, se muestra una notificación para informar al usuario si la operación fue exitosa o fallida.

📈 Mejoras Futuras
Autenticación de Usuario: Implementar un sistema de autenticación para controlar el acceso de los usuarios (administradores y usuarios comunes).

Persistencia de Datos: Mejorar la persistencia de datos con una base de datos más robusta como MySQL o PostgreSQL.

Interfaz de Mapa: Agregar una vista de mapa para mostrar la ubicación de las bicicletas disponibles en la ciudad.

Estadísticas de Uso: Añadir funcionalidades para registrar y visualizar estadísticas de uso de las bicicletas, como el número de veces que se han prestado.

💡 Contribuciones
¡Contribuir es muy fácil! Si deseas contribuir al proyecto, por favor sigue estos pasos:

Forkea este repositorio.

Crea una nueva rama (git checkout -b nueva-funcionalidad).

Realiza tus cambios y asegúrate de probar que todo funciona correctamente.

Haz un commit de tus cambios (git commit -am 'Añadir nueva funcionalidad').

Push a la rama (git push origin nueva-funcionalidad).

Abre un Pull Request.
