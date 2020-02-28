# Awesome profile cards :crocodile::monkey::palm_tree:

> Refactor del proyecto realizado en equipo durante el módulo 2 del bootcamp Adalab para la creación de tarjetas de visita virtuales. ([Pincha aquí para ver el repo original.](https://github.com/mariaglomana/project-promo-h-module-2-team-3-afternoon-jungle-wanderers))

## Tecnologías utilizadas

Los lenguajes utilizados han sido HTML, CSS preprocesado con SASS y JAVASCRIPT NATIVO.

## Funcionamiento

Con esta web puedes generar tu propia tarjeta de perfil personalizada, con la que podrán comunicarse contigo vía teléfono o email :e-mail:. Además, contiene enlaces directos a tus perfiles en linkedIn y GitHub para que puedan añadirte fácilmente otros usuarios 👥.

### Pasos a seguir

1️. Conviértete en diseñador eligiendo los colores que más te gusten de entre las paletas que ofrecemos y tres posibles tipografías.

2️. Rellena todos los campos con tus datos personales; si algún dato no es válido aparecerá un mensaje de error para que lo modifiques antes de crear la tarjeta.

3️. Prepara tu mejor foto para subirla.

4️. Comparte: Se generará automáticamente una URL con tu tarjeta, y un link para que puedas compartir tu tarjeta personal en Twitter y LinkedIn.

## Estructura del proyecto

La estructura de carpetas es la siguiente 📂:

```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
          - index.js

          - components
            - constants.js
            - dropDownMenu.js
            - palettes.js
            - fonts.js
            - form.js
            - previewCard.js
            - reset.js
            - createCard.js

          - services
            - api.js
   |  `|- scss
          - main.scss
   |     `- core
            - _functions.scss
            - _mixins.scss
            - _variables-scss
          - layout
            - _footer.scss
            - _form-toggle.scss
            - _header.scss
            - _mediaqueries.scss
          - pages
            - _landing.scss
          - vendor
            - _normalize.scss
   |
   `- templates
       - index.html
       - main.html
      `- partials
/
`
```
