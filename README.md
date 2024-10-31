# Proyecto de Implementación de Sistema de Base de Datos y Tableros

Este proyecto se centra en la implementación de un sistema de base de datos con tableros interactivos, desarrollado usando Vite para el frontend y otras tecnologías de backend y visualización. A continuación, se presentan los pasos necesarios para compilar el proyecto y las dependencias requeridas.

## Requisitos

Para ejecutar este proyecto en tu PC, asegúrate de tener instaladas las siguientes herramientas y tecnologías:

- **Node.js**: Se utiliza para manejar las dependencias del proyecto y ejecutar los scripts de compilación.
- **Vite**: Herramienta de desarrollo rápida para construir la aplicación frontend.
- **PostgreSQL**: Sistema de base de datos relacional que almacenará los datos de la aplicación.
- **Docker** (opcional): Facilita la administración de contenedores y el despliegue.
- **Tableau** y **Power BI**: Herramientas de visualización de datos (para ver los tableros interactivos).

## Instalación

1. **Clonar el Repositorio**  
   Clona el repositorio en tu máquina local:
   ```bash
   git clone <URL-del-repositorio>
   cd nombre-del-repositorio
   ```

2. **Instalar Dependencias**  
   Una vez dentro del proyecto, instalá las dependencias:
   ```bash
   npm install
   ```

## Compilación y Ejecución

Para compilar y ejecutar el proyecto en desarrollo o producción, seguí los pasos:

1. **Ejecución en Modo Desarrollo**  
   Para correr el proyecto en modo de desarrollo:
   ```bash
   npm run dev
   ```
   Esto iniciará un servidor local, generalmente accesible en [http://localhost:3000](http://localhost:3000).

2. **Compilación para Producción**  
   Para compilar y optimizar el proyecto para producción:
   ```bash
   npm run build
   ```
   Los archivos compilados estarán en la carpeta `dist`, listos para ser desplegados en un servidor de producción.

3. **Visualización de Datos**  
   Para ver los tableros de datos, asegurate de tener acceso a **Tableau** y **Power BI**. Estos tableros pueden encontrarse en las rutas documentadas en los anexos del proyecto.

## Estructura del Proyecto

- **Frontend**: Utiliza Vite, React y Tailwind CSS para construir la interfaz de usuario.
- **Backend**: Node.js para lógica del servidor y PostgreSQL para el manejo de la base de datos.

## Notas Adicionales

- Asegurate de configurar correctamente tu base de datos PostgreSQL antes de ejecutar la aplicación.
- Los tableros de datos están diseñados en **Tableau** y **Power BI** y deben cargarse en las aplicaciones respectivas para visualizarlos.
