# 🚴‍♂️ **Sistema de Préstamo de Bicicletas**

Bienvenido al repositorio del **Sistema de Préstamo de Bicicletas**, una aplicación completa para gestionar el préstamo y devolución de bicicletas en una comunidad. Esta plataforma permite a los usuarios agregar bicicletas, ver las disponibles, y gestionar su estado de préstamo. ¡Únete a nosotros para promover el uso de bicicletas y mantener la movilidad urbana verde!

## 🔧 **Tecnologías Utilizadas**

Este proyecto está construido con las siguientes tecnologías:

- **Frontend:**
  - **React.js**: Una librería de JavaScript para construir interfaces de usuario dinámicas.
  - **CSS**: Para los estilos de la interfaz de usuario, haciendo todo más amigable y visual.
  
- **Backend:**
  - **Spring Boot**: Framework de Java para desarrollar aplicaciones basadas en microservicios.
  - **Java**: El lenguaje de programación usado para el backend.
  - **JPA (Java Persistence API)**: Para interactuar con la base de datos.

- **Base de Datos:**
  - **H2 Database**: Base de datos en memoria utilizada para almacenar las bicicletas y sus estados.

- **Comunicación entre Frontend y Backend:**
  - **Fetch API**: Para las peticiones HTTP desde el frontend (React) al backend (Spring Boot).

## 🚀 **Instalación y Ejecución**

### 1. Clona el repositorio

Primero, clona el repositorio en tu máquina local:

git clone https://github.com/Juanesteban6670/Prestamo-de-bicicletas.git

### 2. Configura el Backend (Spring Boot)

Dirígete a la carpeta del backend:

cd backend
Abre el proyecto en tu IDE favorito (recomendado: IntelliJ IDEA o Eclipse).

Compila y ejecuta el proyecto:

Si usas Maven, ejecuta:

mvn spring-boot:run
Esto iniciará el backend en el puerto 8080.

### 3. Configura el Frontend (React)
Dirígete a la carpeta del frontend:

cd prestamo-bicicletas-front

Instala las dependencias:

npm install

Inicia la aplicación React:

npm run dev

Esto abrirá la aplicación en tu navegador en http://localhost:5173.
