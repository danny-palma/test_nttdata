# Client Service API

## Desarrollador
**Nombre:** Daniel Alejandro Palma Garcia  
**Correo:** dannypalmadev@gmail.com  

## Propósito
Este proyecto consiste en el backend de una prueba técnica para NTT Data. El servicio REST permite la gestión de información de clientes, brindando la capacidad de consultar datos básicos como nombre, dirección y tipo de identificación. Está diseñado para demostrar habilidades en el desarrollo de APIs RESTful con Java y Spring Boot.

## Empresa
**Nombre de la Empresa:** NTT Data

## Descripción
El servicio permite la consulta de clientes a través de un endpoint REST. Utiliza un conjunto de clientes simulados (mock) para demostrar las funcionalidades del sistema. La información de los clientes incluye:
- Tipo de documento (Cédula, Pasaporte)
- Número de documento
- Nombres y apellidos
- Teléfono
- Dirección
- Ciudad de residencia

## Tecnologías Utilizadas
- Java 22
- Spring Boot
- Maven
- SLF4J para logging
- Logback para configuración de logs

## Instalación

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar Dependencias**
   Asegúrate de tener Maven instalado en tu máquina. Ejecuta el siguiente comando en la raíz del proyecto:
   ```bash
   mvn clean install
   ```

## Ejecución del Proyecto

1. **Ejecutar la Aplicación**
   Una vez instaladas las dependencias, puedes ejecutar la aplicación con el siguiente comando:
   ```bash
   mvn spring-boot:run
   ```

2. **Acceder al Servicio**
   El servicio estará disponible en el siguiente URL:
   ```
   http://localhost:8090/api/clients/query
   ```

3. **Ejemplo de Solicitud**
   Realiza una solicitud GET al servicio con los parámetros de tipo y número de documento:
   ```
   GET http://localhost:8090/api/clients/query?documentType=c&documentNumber=23445322
   ```

## Manejo de Logs
El proyecto está configurado para registrar tanto las solicitudes como las respuestas en la consola y en un archivo de log. Los logs se encuentran en el directorio `logs` y el archivo principal de log es `application.log`.

## Contribuciones
Si deseas contribuir a este proyecto, por favor envía un pull request o abre un issue en el repositorio.

## Licencia
Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.