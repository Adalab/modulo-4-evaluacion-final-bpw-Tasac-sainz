# **REPOSITORIO DEL EJERCICIO DE EVALUACIÓN DEL MÓDULO 4 (ADALAB)**

#### **ENUNCIADO: Desarrollar una API de recetas de cocina que permita insertar nuevas recetas, listar, modificar y eliminar.**

He realizado todos los endpoints que requiere el ejercicio y los he probado con POSTMAN para verficar su funcionamiento.

Además, como complemento, he incorporado un proceso de autenticación de usuario, de manera que si el usuario está logueado, le devuelve el listado de recetas
que tiene asociado y le permite llevar a cabo las opciones descritas, en caso contrario, no le da acceso a las recetas. Para ello, he creado una nueva instancia en
la BD para almacenar usuarios. 

He desarrollado y maquetado un frontend que conserva las funcionalidades de listar recetas, añadir nueva receta y ver en detalle una receta selecionada, así como las funcionalidades de registro de nuevos usuarios y login. 

Esta API se ha desarrollado utilizando las siguientes tecnologías:
  - **MySQL Workbench** para la creación de la Base de Datos.
  - **Node JS y Express** para la creación del servidor, conexión con la Base de Datos y endpoints.
  - **Postman** para la verificacion de los endpoints antes y después del proceso de autenticación.

Además, he implementado una estructura de archivos que hace posible el uso de controladores en los endpoints para mejorar la legibilidad del código.

*A futuros: desarrollar en frontend funcionalidad para modificar receta y eliminarla. Añadir funcionalidad de logout*😎
