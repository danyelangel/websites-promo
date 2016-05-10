(function () {
  'use strict';

  angular
    .module('Slides', [])
    .service('Slides', Slides);

  function Slides() {
    var self = this;
    self.title = {
      es: 'Webcat',
      en: 'Webcat'
    };
    self.header = {
      es: 'Sitios web.<Br>Fácil y Rápido.',
      en: 'Websites.<br>Fast and easy.'
    };
    self.intro = {
      es: 'Construye tu presencia online de forma sencilla y sin complicaciones. Paga solo por lo que necesitas.',
      en: 'Build your online presence in a simple and no nonsense way. Pay only for what you need.'
    };
    self.menu = [
      {
        title: {
          en: 'About',
          es: 'Acerca'
        },
        hash: 'about'
      },
      {
        title: {
          en: 'Portfolio',
          es: 'Portafolio'
        },
        hash: 'portfolio'
      },
      {
        title: {
          en: 'Services',
          es: 'Servicios'
        },
        hash: 'services'
      },
      {
        title: {
          en: 'Contact',
          es: 'Contacto'
        },
        hash: 'contact'
      }
    ];
    self.slides = [
      {
        type: 'nav',
        hash: 'about'
      },
      {
        title: {
          es: 'Personalizado.',
          en: 'Personalized.'
        },
        description: {
          es: 'Tú eres único. Por eso mereces una página única que te represente.<br><br>Todas nuestras páginas son hechas desde cero y totalmente personalizadas.<br><br>También tienen un administrador de contenidos intuitivo que te permite actualizar fácilmente la información en tu página. Si sabes usar Word, te sentirás como en casa.',
          en: 'You are unique. That\'s why you deserve a unique website that represents you.<br><br>Every website that we make is designed from scratch and completely personalized.<br><br>They also have a custom made content manager that you can ouse to update the information on your website. If you know Word, you\'l feel right at home.'
        },
        img: {
          src: 'images/personalized.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#f44336'
        }
      },
      {
        title: {
          es: 'Compatible.',
          en: 'Compatible.'
        },
        description: {
          es: 'Cada página web es un nuevo proyecto programado desde ceros con los últimos estándares de calidad y compatibilidad para los navegadores más comunes. Soportamos:<br><ul><li>Chrome</li><li>Safari</li><li>Firefox</li><li>Internet Explorer</li></ul>',
          en: 'Each website is a brand new proyect developed from scratch with the latest quality and compatibility standards for the most common browsers. We support:<br><ul><li>Chrome</li><li>Safari</li><li>Firefox</li><li>Internet Explorer</li></ul>'
        },
        img: {
          src: 'images/compatible.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#9C27B0'
        }
      },
      {
        title: {
          es: 'Multiplataforma.',
          en: 'Multiplataforma.'
        },
        description: {
          es: 'Garantizamos que cada página web funcionará de manera óptima en cualquier dispositivo, independientemente de su tamaño.<br><br>Ten la tranquilidad de que tu página se verá de la mejor manera, ya sea en un celular, tablet, computador o hasta un televisor.',
          en: 'We guarantee that each website will work in an optimal manner on every device, regardless of the size.<br><br>Be sure that your website will look beautiful on a smartphone, tablet, laptop or even a TV.'
        },
        img: {
          src: 'images/multiplatform.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#3F51B5'
        }
      },
      {
        type: 'nav',
        hash: 'portfolio'
      },
      {
        title: {
          es: 'Algunos de nuestros bebés.',
          en: 'Some of our babies.'
        },
        description: {
          es: 'Estos son algunos de los proyectos de los que nos sentimos más orgullosos.',
          en: 'These are some of the projects that we feel most proud of.'
        },
        img: {
          src: 'images/babies.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#1976D2'
        }
      },
      {
        title: {
          es: 'Portafolio de Daniel Ángel.',
          en: 'Daniel Ángel\'s Portfolio.'
        },
        description: {
          es: 'Este portafolio resalta los mejores trabajos del artista y diseñador digital colombiano Daniel Ángel.<br><br>Contiene imágenes grandes que, acompañadas con poco texto, comunican los servicios que ofrece.<br><br><a href="http://danielangel.co/" target="_blank">Ver Sitio</a>',
          en: 'This portfolio shows the best work of the Colombian digital artist and designer Daniel Ángel.<br><br>It contains big and bold images that with little text, convey the services he offers.<br><br><a href="http://danielangel.co/" target="_blank">View Site</a>'
        },
        img: {
          src: 'images/danielangel.png',
          depth: true
        },
        background: {
          src: 'images/danielangel_bg.jpg'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Archipelago Ent.',
          en: 'Archipelago Ent.'
        },
        description: {
          es: 'Archipelago Entertainment es una compañía multi-media estadounidense. Su sitio web tenía que mostrar la exclusividad y simplicidad de sus servicios.<br><br>Para esto usamos un look oscuro e interacciones animadas. Esto muestra realmente quién es Archipelago.<br><br><a href="http://archipelagoent.com/" target="_blank">Ver Sitio</a>',
          en: 'Archipelago Entertainment is an American multi-media company. Their website needed to show the uniqueness and simplicity of their offerings.<br><br>With a dark theme and animated effects, this website shows what Archipelago really is about.<br><br><a href="http://archipelagoent.com/" target="_blank">Ver Sitio</a>'
        },
        img: {
          src: 'images/archipelago.png',
          depth: true
        },
        background: {
          src: 'images/archipelago_bg.jpg'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Kina.',
          en: 'Kina.'
        },
        description: {
          es: 'Kina es una empresa que crea ambientes interactivos. Se especializan en projection mapping, animación y arte con luz para adaptar espacios de cualquier tipo.<br><br>Para comunicar sus conocimientos de iluminación, usamos un look brillante y simple, pero que poco a poco se va volviendo colorido, representando la transición de un ambiente sin adaptar, a un ambiente completamente modificado.<br><br><a href="http://kina.media/" target="_blank">Ver Sitio</a>',
          en: 'Kina is a company that creates interactive environments. They are specialized in projection mapping, animation and art with light to adapt any kind of space.<br><br>To communicate their lighting knowledge we used a bright and simple look that evolves when you scroll to show a more colorful and dynamic design which represents the transition from an unchanged environment to an immersive experience.<br><br><a href="http://kina.media/" target="_blank">Ver Sitio</a>'
        },
        background: {
          src: 'images/kina_bg.png'
        },
        img: {
          src: 'images/kina.png',
          depth: true
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Cultura Experimental.',
          en: 'Experimental Culture.'
        },
        description: {
          es: 'Este sitio web fue un experimento para analizar cuál era la manera más sencilla de invitar al usuario a leer un ensayo de 3 páginas de forma amena y entretenida.<br><br>Para eso usamos varios colores brillantes acompañados de imágenes provocativas que invitan al usuario a seguir leyendo hasta el final.<br><br><a href="http://danielangel.co/experimental-culture" target="_blank">Ver Sitio</a>',
          en: 'This website was an experiment to analyze what was the simplest way to invite the user to read a 3 page essay in a fun way.<br><br>To do this we used bright colors together with provocative images that invite the user to keep reading till the end.<br><br><a href="http://danielangel.co/experimental-culture" target="_blank">Ver Sitio</a>'
        },
        img: {
          src: 'images/experimental.png',
          depth: true
        },
        background: {
          src: 'images/experimental.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#9abbb4'
        }
      },
      {
        title: {
          es: 'Eternity Films.',
          en: 'Eternity Films.'
        },
        description: {
          es: 'Eternity Films es una comañía de medios basada en Miami, FL que provee servicios de producción de principio a fin. La idea principal era comunicar la variedad de servicios en una forma sencilla de entender.<br><br>Para esto usamos una paleta de 5 colores brillantes, uno por cada servicio (video, fotografía, web, diseño y marketing), acompañados de un fondo blanco.<br><br>Adicionalmente, el sitio web comienza con una historia animada para mantener al lector interesado en el contenido.<br><br><a href="http://eternity-films.com/" target="_blank">Ver Sitio</a>',
          en: 'Eternity Films is a media company based in Miami, FL that provides end to end production services. Their core idea was to communicate the variety of their offerings in a straigtforward way.<br><br>To do this we used a palette of 5 bright colors, one for each of their offerings (film, photography, web, design and marketing), accompanied with a white background.<br><br>Additionally, the website starts as an animated story to keep the reader engaged with the content.<br><br><a href="http://eternity-films.com/" target="_blank">Ver Sitio</a>'
        },
        img: {
          src: 'images/eternity_bg.png',
          depth: true
        },
        background: {
          src: 'images/eternity.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        type: 'nav',
        hash: 'services'
      },
      {
        title: {
          es: 'Modelo de pagos.',
          en: 'Pricing model.'
        },
        description: {
          es: 'Nuestro modelo de pago es sencillo y directo.<br><br>Paga por separado cada funcionalidad que necesites y siempre obtén el mejor precio acomodado a tus necesidades.',
          en: 'Our pricing model is simple and straightforward.<br><br>Pay separately for all the features you need and always get the best price that fits your needs.'
        },
        background: {
          src: 'images/pricing.jpg'
        },
        img: {
          src: 'images/pricing.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#212121'
        }
      },
      {
        title: {
          es: 'Plan Básico.',
          en: 'Basic Plan.'
        },
        description: {
          es: 'Para un sitio web necesitas, como mínimo, un contenido base y el desarrollo y publicación de la página. Estos 2 pasos los hacemos de la siguiente manera:',
          en: 'You need, at least, a base content and development/deployment for a basic website. This is our most basic plan which works in 2 steps:'
        },
        img: {
          src: 'images/content.png'
        },
        children: [
          {
            title: {
              es: '1. Contenido.',
              en: '1. Content.'
            },
            description: {
              es: 'Analizamos el contenido que nos entregues (texto, imágenes, videos) y lo diagramamos en un diseño que sea acorde a éste. Puedes darnos más contenido del que quieras publicar y nosotros lo resumiremos.',
              en: 'We analyze the content that you give us (text, images, videos) and we organize it in a way that goes accordigly. You can give us as much content as you want and we can synthesize it into a more concise story.'
            }
          },
          {
            title: {
              es: '2. Desarrollo.',
              en: '2. Development.'
            },
            description: {
              es: 'Una vez aprobado el contenido, se hará un diseño acorde. Puedes pedir cambios del diseño hasta 3 veces. Luego se programará tu página con los últimos estándares para todos los dispositivos.',
              en: 'Once you approve the content, we will make design guidelines that go accordignly. You can request changes for up to 3 times. Then we will code your website with the latest standards for every device.'
            },
            styles: {
              color: '#fff',
              backgroundColor: '#00ACC1'
            }
          }
        ],
        styles: {
          color: '#fff',
          backgroundColor: '#039BE5'
        }
      },
      {
        title: {
          es: 'Funcionalidades adicionales.',
          en: 'Additional features.'
        },
        description: {
          es: 'Dependiendo de las necesidades que tengas, puedes añadir soluciones prediseñadas que funcionan armónicamente con tu sitio web. Dentro de estas funcionalidades están carritos de compras, catálogos, inventarios, integración con redes sociales, y más.',
          en: 'Depending on your needs, you can add premade and tested solutions that work harmonically with your website. Among these features there are shopping carts, product catalogues, inventories, social integration and more.'
        },
        img: {
          src: 'images/functionality.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#009688'
        }
      },
      {
        title: {
          es: 'Compras En Línea.',
          en: 'Online shopping.'
        },
        description: {
          es: 'Éstas son nuestras funcionalidades de compras en línea:<ul><li><b>Compras con tarjeta:</b> Recibe tarjetas débito y crédito directamente en tu página.</li><br><li><b>Administrador de direcciones:</b> Maneja las direcciones de tus clientes en caso de que quieras proveer servicios a domicilio o hacer envíos.</li><br><li><b>Productos descargables:</b> Si vendes un producto digital como música, libros, software, etc, podemos ofrecerte un link de descarga único para cada comprador y así prevenir la piratería.',
          en: 'These are our online shopping features:<ul><li><b>Credit/Debit Card Payment:<b/> Receive credit and debit card payments directly from your website.</li><br><li><b>Address management:</b> Manage your customer home addresses in case you want to do deliveries or shipping.</li><br><li><b>Downloadables:</b> If you sell a digital product like music, books, software, etc, we can offer you a unique download link for each buyer and that way you can prevent piracy.</li></ul>'
        },
        img: {
          src: 'images/shopping.png'
        },
        styles: {
          color: 'rgba(0,0,0,0.75)',
          backgroundColor: '#8BC34A'
        }
      },
      {
        title: {
          es: 'Manejo de Inventario.',
          en: 'Inventories.'
        },
        description: {
          es: 'También ofrecemos inventariado de productos:<ul><li><b>Base de datos:</b> Administra todos tus productos desde un mismo lugar. Nunca más olvidarás ordenar ese producto que se agota rápido.</li><br><li><b>Múltiples bodegas:</b> ¿Tus productos están en diversas locaciones? Ubica tus productos en tiempo real e incluso entérate de cuándo están siendo transportados.</li><br><li><b>App móvil:</b> Usa códigos QR para hacer check-in o check-out de tus productos y siempre mantén sus locaciones actualizadas eficientemente y en tiempo real (Funciona en iPhone y Android)</li></ul>',
          en: 'We also offer product inventories:<ul><li><b>Inventory database:</b> Manage all your products from the same place. You will never forget to order that product that always gets out of stock.</li><br><li><b>Multiple locations:</b> Are your products constantly moving between multiple locations? Locate everything from the same place and in real time. Know even when your products are being transported.</li><br><li><b>Mobile App:</b> Use QR codes to check-in and check-out products and always keep their location updated in real time. (Works in iPhone and Android)</li></ul>'
        },
        img: {
          src: 'images/inventory.png'
        },
        styles: {
          color: 'rgba(0,0,0,0.75)',
          backgroundColor: '#FFC107'
        }
      },
      {
        title: {
          es: 'Noticias y redes sociales.',
          en: 'News and social media.'
        },
        description: {
          es: 'Una página que no es social es una página hecha en piedra. Permítele a tus usuarios estar constantemente actualizados e interactuando con tu contenido. Ofrecemos:<ul><li><b>Blogs:</b> Mantén a tu audiencia actualizada con las noticias e historias más importantes que tengas para contar.</li><br><li><b>Comentarios:</b> Permítele a tus seguidores comentar en tus historias. Puedes integrar comentarios de Facebook, Disqus o un sistema propio de comentarios.</li><br><li><b>Me Gusta/Compartir:</b> Integra funcionalidades sociales de las redes sociales más comunes. Soportamos Twitter, Facebook, Instagram, entre otras.</li></ul>',
          en: 'A website without social features is like a website made in stone. Let your users interact with your content and keep them updated. We offer:<ul><li><b>Blogs:</b> Keep your audience updated with the most important news and stories that you want to share with them.</li><br><li><b>Comments:</b> Let your users comment on your content. You can use Facebook or Disqus comments, or even have your own system.</li><br><li><b>Like/Share:</b> Add the most common social media features from the leading social networks. We support Twitter, Facebook, Instagram, among others.</li></ul>'
        },
        img: {
          src: 'images/social.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#FF5722'
        }
      },
      {
        title: {
          es: 'Boletería y agendación.',
          en: 'Ticketing and scheduling.'
        },
        description: {
          es: 'Si necesitas cuadrar citas con clientes o manejar el ingreso de personas a un evento con boletería, éstas son tus opciones:<ul><li><b>Agenda + citas:</b> Permítele a tus usuarios agendar sus citas online y mantén un calendario con todas tus citas de forma fácil.</li><br><li><b>Creación + verificación de boletas:</b> ¿Tienes un evento y necesitas ingresar varias personas? Utiliza nuestro sistema para generar boletería y haz check-in y check-out de forma siemple y sin complicaciones.</li><br><li><b>App móvil:</b> Usa códigos QR en las boletas para hacer check-in o check-out de tus clientes y organiza el ingreso de forma rápida y eficiente (Funciona en iPhone y Android)</li></ul>',
          en: 'If you need booking or ticket based crowd management, these are your options:<ul><li><b>Schedule + appointments:</b> Let your users book their appointments online and keep a calendar with all your appointmens in a simple way.</li><br><li><b>Ticket generation + verification:</b> Do you have an event and need to check-in many people? Use our system to generate tickets and do check-in and check-out efficiently.</li><br><li><b>Mobile App:</b> Use QR codes in your tickets to check-in and check-out people and manage crowds rapidly and efficiently. (Works in iPhone and Android)</li></ul>'
        },
        img: {
          src: 'images/ticketing.png'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#795548'
        }
      },
      {
        type: 'nav',
        hash: 'contact'
      },
      {
        title: {
          es: 'Contacto.',
          en: 'Contact.'
        },
        description: {
          es: '¡Contáctanos! Queremos conocer tu siguiente proyecto.<br><br>T. +57 305.763.9326<br>E. angel@kina.media<br><br>Bogotá, Colombia.',
          en: 'Contact us! We\'d love to learn about your next project.<br><br>T. +57 305.763.9326<br>E. angel@kina.media<br><br>Bogotá, Colombia.<br>South America.'
        },
        img: {
          src: 'images/contact.png',
          display: 'round'
        },
        styles: {
          color: '#fff',
          backgroundColor: '#424242'
        }
      }
    ];
  }
}());
