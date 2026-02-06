# Prueba Técnica - UI Development

Esta es mi solución para la prueba de maquetación.

##Cómo abrir el proyecto

Como he usado tecnologías estándar sin herramientas complejas, es muy fácil de ver:

1. Descarga la carpeta.
2. Haz doble clic en el archivo `index.html`.
3. Se abrirá directamente en tu navegador (Chrome, Edge, etc.). No hace falta instalar nada.

## ¿Por qué he diseñado así la estructura?

He usado dos técnicas diferentes según lo que necesitaba cada parte de la página:

* **Para las tarjetas de los Posts (Grid):** He usado *CSS Grid* porque es la mejor herramienta para crear rejillas. Permite que las tarjetas se coloquen y se ajusten solas según el tamaño de la pantalla sin complicar el código.
* **Para el Menú y la Estructura general (Flexbox):** He usado *Flexbox* porque es ideal para poner elementos en fila (como los botones del menú) y separarlos correctamente.

## Accesibilidad 

He prestado mucho interes en que la web sea usable por cualquiera, incluyendo personas que navegan solo con teclado o lectores de pantalla:

1.  **Etiquetas correctas:** No he usado solo `divs`. He usado etiquetas con significado (`header`, `nav`, `main`, `button`) para que el navegador entienda qué es cada cosa.
2.  **Teclado:**
    * He añadido un enlace oculto ("Skip Link") al principio para saltar al contenido principal sin pasar por todo el menú.
    * Se ve claramente dónde estás cuando te mueves con el tabulador.
    * El menú del móvil se puede abrir y cerrar usando solo el teclado.
3.  **Lectores de pantalla:**
    * He añadido avisos invisibles para que, cuando filtres los posts, el ordenador te lea cuántos resultados quedan.
    * Los botones indican si están "pulsados" o no.

## Tecnologías usadas

* **HTML5:** Estructura semántica.
* **CSS3:** He usado variables para guardar los colores y espacios en un solo sitio , así es más fácil hacer cambios globales.
* **JavaScript:** Código sencillo , sin librerías externas.

## ¿Qué mejoraría con más tiempo?

1.  **Modo Oscuro:** Usando las variables que ya he creado, sería fácil añadir un botón para cambiar a fondo negro y asi no dañar tanto la vista del usuario.
2.  **Cargar datos reales:** Ahora los datos están en el código, pero en el futuro los traería de una base de datos real, sinedo asi totalmente funcional.
3.  **Carga rápida de imágenes:** Optimizaría más la carga si hubiera muchísimas fotos.


**Nombre:** María Abascal Jiménez