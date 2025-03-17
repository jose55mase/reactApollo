






**Table of Contents**

[TOCM]

[TOC]
### Tecnologias
| Tecnologia  | Descripcion  | Tipo |
| :------------ |:---------------:| -----:|
|  React      | Fromtend |  |
| GraphQL |  Servicios       |      |
| Apollo |  Puente        |      |
| Mongo | Base de datos       |    d  |

![](https://t9013291308.p.clickup-attachments.com/t9013291308/130230cc-04a7-4357-aecd-3c65e2dff4b0/image.png)


### INTALACION

Usa descarga el repositorio, y dentro de cada proyecto usa el comando
`$ npm install `



###ESTRUCTURA DE CARPETAS

Carpetado:

![](https://t9013291308.p.clickup-attachments.com/t9013291308/23c1c57e-0e59-4f1f-bc06-8fd5484099b3/image.png)


> Client: donde esta el proyecto React.
> Server: donde esta el proyecto Node js.

----
                    
##Client
                   
![](https://t9013291308.p.clickup-attachments.com/t9013291308/e0554698-4a43-4bca-9c7a-8d932aa2cb63/image.png)

| Carpeta  | Descripcion  | Tipo |
| :------------ |:---------------:| -----:|
|  src      | Codigo generla del proyecto | Iniciador |
| component      | Usa la arquitectura Atomica       |   Modularizador  |
| config | Configuraciones para conectar con el back        |    Configuracion  |
| gql |  Peticiones a el back        |    configuracion  |
| page | Paginas que contine el aplicativo        |    Modularizador  |
| routes | Configuraciones para enrutar las paginas o hijos        |    Configuracion  |

###Iniciar apliacaion

Usa en la raiz del proyecto el comando
`$ npm start `

##Server
                   
![](https://t9013291308.p.clickup-attachments.com/t9013291308/7437775a-e4b1-45fc-bf24-ce3fe354deeb/image.png)

| Carpeta  | Descripcion  | Tipo |
| :------------ |:---------------:| -----:|
|  controller      | Logica de negocio | Configuracion |
| gql |  Configurar condultas       |    Configuracion  |
| Model | mapas para comunicar con mongo segunl a entidad        |    Modularizador  |
| routes | Configuraciones para enrutar las paginas o hijos        |    Configuracion  |

###Iniciar apliacaion

Usa en la raiz del proyecto el comando
`$ npm run dev `





