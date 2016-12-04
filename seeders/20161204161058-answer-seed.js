'use strict';
var models = require('../models');

var qaHelper = function (questions) {
  this.questions = questions;
};

qaHelper.prototype.getQuestionIdByName = function (name) {
  var questionId = null;
  this.questions.forEach(function (question) {
    if (question.description === name) {
      questionId = question.id;
    }
  });
  return questionId;
};

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Question.all()
      .then(function (questions) {
        var qa = new qaHelper(questions);
        return queryInterface.bulkInsert('answers', [{
          order: 1,
          description: 'Nunca tiene un estado emocional regulado. Sus sentimientos predominantes son tristeza, ira, frustración.',
          questionId: qa.getQuestionIdByName('Emotional status'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces tiene un estado emocional regulado. Sus sentimientos predominantes tristeza, ira, frustración.',
          questionId: qa.getQuestionIdByName('Emotional status'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'A veces presenta un estado emocional regulado. Oscila entre un estado de optimismo y calma, a un estado de tristeza, ira, frustración.',
          questionId: qa.getQuestionIdByName('Emotional status'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces presenta un estado emocional regulado en el que predomina una sensación de bienestar, optimismo y calma; tolerando la frustración y el estrés.',
          questionId: qa.getQuestionIdByName('Emotional status'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'La mayoría de las veces presenta un estado emocional regulado en el que predomina una sensación de bienestar, optimismo y calma; tolerando la frustración y el estrés. Además, colabora con mantener este estado en sus compañeras.',
          questionId: qa.getQuestionIdByName('Emotional status'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca recibe un reto con entusiasmo, sino que más bien se frustra y siente que la situación rebasa sus recursos.',
          questionId: qa.getQuestionIdByName('Challenge taker'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces recibe un reto con entusiasmo, sino que más bien se frustra y siente que la situación rebasa sus recursos.',
          questionId: qa.getQuestionIdByName('Challenge taker'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'A veces recibe un reto con entusiasmo, pero otras veces se frustra de modo anticipado.',
          questionId: qa.getQuestionIdByName('Challenge taker'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces recibe un reto con entusiasmo, confiando en que tiene los recursos para superarlo con éxito.',
          questionId: qa.getQuestionIdByName('Challenge taker'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre recibe un reto con entusiasmo, confiando en que tiene los recursos para superarlo con éxito.',
          questionId: qa.getQuestionIdByName('Challenge taker'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'No es capaz de adaptarse a nuevas situaciones: cambios repentinos y nuevos equipos. No tolera la incertidumbre. Ante una falla no busca una solución.Presenta serias dificultades para adaptarse a situaciones nuevas: cambios repentinos y nuevos equipos. Le resulta complicado tolerar la incertidumbre y cuando falla se demora en proponer una solución.',
          questionId: qa.getQuestionIdByName('Adaptability'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Presenta serias dificultades para adaptarse a situaciones nuevas: cambios repentinos y nuevos equipos. Le resulta complicado tolerar la incertidumbre y cuando falla se demora en proponer una solución.',
          questionId: qa.getQuestionIdByName('Adaptability'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'A veces puede adaptarse a situaciones nuevas, pero no es un comportamiento constante.',
          questionId: qa.getQuestionIdByName('Adaptability'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces puede adaptarse a situaciones nuevas: afrontando con optimismo cambios repentinos, nuevos equipos. Puede tolerar la incertidumbre y a veces propone soluciones creativas. Ante una falla, cambia de estrategia rápidamente.',
          questionId: qa.getQuestionIdByName('Adaptability'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre se adapta a situaciones nuevas: afronta con optimismo cambios repentinos y nuevos equipos. Lidia con la incertidumbre proponiendo soluciones creativas. Ante una falla, cambia de estrategia rápidamente.',
          questionId: qa.getQuestionIdByName('Adaptability'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Se le dificulta exponer sus ideas con claridad, lo que denota un vago entendimiento del proceso que ha realizado. Ante preguntas no sabe cómo responder. Su lenguaje no verbal denota inseguridad y no ayuda a transmitir su mensaje.',
          questionId: qa.getQuestionIdByName('Thinking out loud'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Hace esfuerzos por exponer sus ideas con claridad, pero presenta serias dificultades para lograrlo. Ante preguntas, contesta de manera vaga y no logra explicar lo que se le consultó. Su lenguaje no verbal denota inseguridad y no ayuda a transmitir su mensaje.',
          questionId: qa.getQuestionIdByName('Thinking out loud'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Logra exponer sus ideas con claridad con preparación previa, pero ante preguntas le cuesta responder de modo claro y no logra contestar lo que se le consultó. Su lenguaje no verbal denota poca seguridad.',
          questionId: qa.getQuestionIdByName('Thinking out loud'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces logra expresar sus ideas con claridad. Ante preguntas, la mayoría de las veces responde con una explicación clara y en pocas ocasiones es necesario repreguntarle para conseguir la respuesta que se buscaba. Su lenguaje no verbal denota seguridad y ayuda a transmitir su mensaje.',
          questionId: qa.getQuestionIdByName('Thinking out loud'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre expone sus ideas con claridad, logrando que los demás entiendan lo que quiere comunicar. Su lenguaje no verbal denota seguridad y ayuda a transmitir su mensaje (adecuado tono de voz y movimientos corporales expresivos). Ante preguntas, responde adecuadamente de modo que no es necesario repreguntarle.',
          questionId: qa.getQuestionIdByName('Thinking out loud'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'No escucha con atención cuando otra alumna está hablando. Sea porque conversa con otra compañera o porque está distraída con otro elemento. No tiene buena actitud para recibir feedbacks.',
          questionId: qa.getQuestionIdByName('Listening'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces escucha con atención cuando otra alumna está hablando. En varias ocasiones interrumpe sea porque conversa con otra compañera o porque está distraída con otro elemento. No acepta fácilmente las propuestas de otros, sino que se opone sin dar otras alternativas. No tiene buena actitud para recibir feedbacks.',
          questionId: qa.getQuestionIdByName('Listening'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'En algunas ocasiones presta atención, pero en otras no escucha a sus compañeras. A veces valora las propuestas de otros. En ocasiones tiene buena actitud para recibir feedback.',
          questionId: qa.getQuestionIdByName('Listening'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces escucha con atención cuando otra alumna está hablando. Valora las propuestas de sus compañeras, aunque no esta de acuerdo. Tiene una buena actitud para recibir feedback.',
          questionId: qa.getQuestionIdByName('Listening'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre escucha con atención las ideas de sus compañeras. Valora la opinión de las demás y construye nuevas ideas rescatando los puntos de vista de otras personas, además de los suyos. Tiene una buena actitud para recibir feedback.',
          questionId: qa.getQuestionIdByName('Listening'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca ofrece ideas para realizar el trabajo, ni propone sugerencias para su mejora. Sus intervenciones no son pertinentes ni contribuyen.',
          questionId: qa.getQuestionIdByName('Participation'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces ofrece ideas para realizar el trabajo, pero nunca propone sugerencias para su mejora. Sus intervenciones no son pertinentes ni contribuyen.',
          questionId: qa.getQuestionIdByName('Participation'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Algunas veces ofrece ideas para realizar el trabajo, pero pocas veces para mejorarlo. En ocasiones sus intervenciones no son pertinentes ni contribuyen.',
          questionId: qa.getQuestionIdByName('Participation'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'Casi siempre ofrece ideas para realizar el trabajo y para su mejora. La mayoría de las veces participa con ideas que aportan al desarrollo y discusión en el squad o en el salón. Sus intervenciones son pertinentes y contribuyen.',
          questionId: qa.getQuestionIdByName('Participation'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre ofrece ideas para realizar el trabajo y propone sugerencias para su mejora. Participa con ideas que aportan al desarrollo y discusión en el squad o en el salón. Sus intervenciones son pertinentes y contribuyen.',
          questionId: qa.getQuestionIdByName('Participation'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'No comunica sus errores, sino que intenta ocultarlos.',
          questionId: qa.getQuestionIdByName('Error communication'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces comunica sus errores, y cuando lo hace no tiene una propuesta de cómo mejorarlos.',
          questionId: qa.getQuestionIdByName('Error communication'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Algunas veces comunica sus errores, pero su propuesta para mejorarlos carece de planificación.',
          questionId: qa.getQuestionIdByName('Error communication'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces comunica sus errores y cuando lo hace tiene una propuesta de cómo mejorarlos.',
          questionId: qa.getQuestionIdByName('Error communication'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre puede comunicar sus dificultades y obstáculos en busca de ayuda. Diseña (sola o con ayuda) un plan para mejorar y no volver a cometer los mismos errores. Asimismo, comunica las complicaciones del grupo, asumiendo parte de la responsabilidad.',
          questionId: qa.getQuestionIdByName('Error communication'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'No muestra respeto por una figura de autoridad, se muestra desafiante y no logra comunicarse de manera adecuada.',
          questionId: qa.getQuestionIdByName('Communication & Respect'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces se comunica de manera respetuosa hacia la figura de autoridad, se exaspera al no estar de acuerdo y no logra dar a conocer su punto de vista.',
          questionId: qa.getQuestionIdByName('Communication & Respect'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Algunas veces logra comunicarse de manera respetuosa hacia la figura de autoridad, pudiendo tener dificultades para comunicar puntos de vista divergentes.',
          questionId: qa.getQuestionIdByName('Communication & Respect'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces se comunica de manera respetuosa hacia la figura de autoridad, incluso cuando tiene un punto de vista diferente.',
          questionId: qa.getQuestionIdByName('Communication & Respect'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre se comunica a figuras de autoridad en el squad de manera respetuosa.',
          questionId: qa.getQuestionIdByName('Communication & Respect'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca logra sentirse cómoda ante figurad de autoridad, mostrando un disconfor constante.',
          questionId: qa.getQuestionIdByName('Relationship with authority'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces se siente cómoda ante figuras de autoridad. En varias ocasiones guarda silencio, mostrándo dificultades para relacionarse con esta figura y evitando el contacto con ella.',
          questionId: qa.getQuestionIdByName('Relationship with authority'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Algunas veces logra sentirse cómoda ante figuras de autoridad, pero en otras actúa con nerviosismo y cautela.',
          questionId: qa.getQuestionIdByName('Relationship with authority'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de la veces se siente cómoda ante figuras de autoridad, logrando relacionarse con ellas.',
          questionId: qa.getQuestionIdByName('Relationship with authority'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre se siente cómoda ante figuras de autoridad, mostrando capacidad de relacionarse con ellas de manera simétrica, logrando una buena comunicación y relación.',
          questionId: qa.getQuestionIdByName('Relationship with authority'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca logra mantener una actitud positiva en el trabajo.',
          questionId: qa.getQuestionIdByName('Possitive attitude'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces logra mantener una actitud positiva en el trabajo, lo que afecta no sólo a ella misma, sino también a su squad.',
          questionId: qa.getQuestionIdByName('Possitive attitude'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Algunas veces logra  una actitud positiva en el trabajo, pero ante distintas circunstancias es posible que se desanime afectándo su desempeño.',
          questionId: qa.getQuestionIdByName('Possitive attitude'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces muestra una actitud positiva ante el trabajo y los nuevos desafíos, centrándose en los aspectos positivos de éste.',
          questionId: qa.getQuestionIdByName('Possitive attitude'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre muestra una actitud positiva ante el trabajo y los nuevos desafíos que éste trae. No se desanima ante las dificultades, sino que mantiene un buen ánimo, fomentando un buen ambiente en  su squad.',
          questionId: qa.getQuestionIdByName('Possitive attitude'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca demuestra pasión por su trabajo, se encuentra irritable y parece que esto no tiene un sentido para ella.',
          questionId: qa.getQuestionIdByName('Passion for work'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces logra transmitir pasión por su trabajo, se ve frustrada constantemente y no logra postergar alguna necesidad por alcanzar un bien mayor.',
          questionId: qa.getQuestionIdByName('Passion for work'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Algunas veces transmite pasión por su trabajo, pero  en circunstancias difíciles parece desmotivarse y olvidarse del objetivo mayor.',
          questionId: qa.getQuestionIdByName('Passion for work'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces demuestra pasión por su trabajo, es decir, disfruta de lo que hace y transmite amor hacia su oficio.',
          questionId: qa.getQuestionIdByName('Passion for work'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre demuestra pasión por su trabajo, es decir, disfruta lo que hace y contagia a quienes se encuentran cerca de ella. Además, si es necesario postergar ciertas necesidades propias logra visualizar que es por un bien mayor.',
          questionId: qa.getQuestionIdByName('Passion for work'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'No hay evidencias de su trabajo en el repositorio.',
          questionId: qa.getQuestionIdByName('Version Control System'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Tuvo problemas con la creación/conexión al repositorio, hay evidencias de su trabajo en el repositorio pero la organización no fue la adecuada.',
          questionId: qa.getQuestionIdByName('Version Control System'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Manejo del repositorio de manera correcta pero con faltas notables en la organización de branches y/o redacción de commits.',
          questionId: qa.getQuestionIdByName('Version Control System'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'Manejo del repositorio de manera correcta, se sugiere hacer mejoras en la redacción de los commit y/u organiación de los branches.',
          questionId: qa.getQuestionIdByName('Version Control System'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Manejo del repositorio de manera correcta, con correcta nomenclatura y uso de branches, buena redacción de commits y definición del .gitignore.',
          questionId: qa.getQuestionIdByName('Version Control System'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca utiliza lenguaje técnico',
          questionId: qa.getQuestionIdByName('Techie language'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces se refiere a las herramientas con un lenguaje técnico y cuando utiliza ese lenguaje es de manera excepcional o utilizándolo de manera vaga o poco clara.',
          questionId: qa.getQuestionIdByName('Techie language'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Logra utilizar un lenguaje técnico en algunas circunstancias, pero a veces no logra especificar las herramientas utilizadas, refiriéndose a ellas de manera genérica (cosa, eso, esto, etc).',
          questionId: qa.getQuestionIdByName('Techie language'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces utiliza un lenguaje técnico para referirse a las herramientas que está utilizando.',
          questionId: qa.getQuestionIdByName('Techie language'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre utiliza lenguaje técnico para referirse a distintas herramientas, logrando especificar de manera correcta aquellos elementos que está utilizando.',
          questionId: qa.getQuestionIdByName('Techie language'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca logra aplicar los conocimientos de programación adquirido, teniendo dificultades con conocimientos básicos.',
          questionId: qa.getQuestionIdByName('Programming fundamentals'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces logra resolver los problemas con los conocimientos de programación adquiridos, y cuando lo hace es de manera excepcional.',
          questionId: qa.getQuestionIdByName('Programming fundamentals'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Logra aplicar los conocimientos de programación adquiridos, pero en otras instancias no encuentra solución a problemas que debiese manejar.',
          questionId: qa.getQuestionIdByName('Programming fundamentals'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'Logra aplicar los conocimientos de programación adquiridos, sólo alcanza el mínimo requerido.',
          questionId: qa.getQuestionIdByName('Programming fundamentals'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre logra aplicar los conocimientos de programación ya adquiridos e incluso buscó nuevas soluciones que van más allá de lo exigido.',
          questionId: qa.getQuestionIdByName('Programming fundamentals'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca logra utilizar los elementos de la metodología ágil, teniendo dificultades en seguir la organización del squad en base a esta metodología.',
          questionId: qa.getQuestionIdByName('Agile methodologies'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces logra utilizar los elementos de la metodología ágil, incluso parece no entender cómo funciona esta metodología.',
          questionId: qa.getQuestionIdByName('Agile methodologies'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Logra utilizar los elementos de la metodología ágil en el algunas circunstancias, pero en otras toma decisiones propios olvidándose del squad.',
          questionId: qa.getQuestionIdByName('Agile methodologies'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces logra utilizar los elementos de la metodología ágil en el squad, sin embargo no siempre utiliza esta metodología en su documentación. ',
          questionId: qa.getQuestionIdByName('Agile methodologies'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre busca la manera de utilizar los distintos elementos de la metodología ágil, no sólo en el equipo,que también en su documentación. Además, es capaz de incentivar la organización del squad en torno a la utilización de esta metodología.',
          questionId: qa.getQuestionIdByName('Agile methodologies'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'Nunca logra buscar recursos para resolver problemas, fuera de los dados en la sala de clase.',
          questionId: qa.getQuestionIdByName('Being resourceful'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Muy pocas veces logra buscar recursos para resolver problemas, perdiendo mucho tiempo en la búsqueda de documentación, no sabiendo discriminar la información.',
          questionId: qa.getQuestionIdByName('Being resourceful'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'Logra buscar recursos para resolver problemas.',
          questionId: qa.getQuestionIdByName('Being resourceful'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'La mayoría de las veces logra buscar recursos para resolver los problemas, utilizando distintos fuentes de documentación. Además, no utiliza exceso de tiempo recopilando información innecesaria.',
          questionId: qa.getQuestionIdByName('Being resourceful'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'Siempre logra buscar distintos recursos para resolver problemas, utilizando distintas fuentes de documentación para encontrar la solución. Además, administra de manera eficiente su tiempo, enfocando su búsqueda en sitios específicos que puedan entregarle información.',
          questionId: qa.getQuestionIdByName('Being resourceful'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 1,
          description: 'El producto desarrollado carece de diseño y funcionalidad, siendo no utilizable.',
          questionId: qa.getQuestionIdByName('Look & feel / Usability / UX'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 2,
          description: 'Sólo algunas partes del producto se encuentran desarrolladas y diseñadas, existiendo carencias que no lo hacen utilizable.',
          questionId: qa.getQuestionIdByName('Look & feel / Usability / UX'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 3,
          description: 'El producto desarrollado tiene un buen diseño, resulta adecuado y atractivo para el usuario. Sin embargo, el producto no tiene la funcionalidad esperada, teniendo errores tanto en su interacción con el usuario como en su proceso lógico, siendo  un producto no utilizable.',
          questionId: qa.getQuestionIdByName('Look & feel / Usability / UX'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 4,
          description: 'El producto desarrollado es utilizable, pero hay algunas partes de éste que se podrían mejorar tanto a nivel de su interacción con el usuario como del proceso lógico del producto. Además, se podrían mejorar aspectos del diseño del producto.',
          questionId: qa.getQuestionIdByName('Look & feel / Usability / UX'),
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          order: 5,
          description: 'El producto desarrollado por la alumna es funcional a nivel de usuario. Lo anterior implica que la interacción con el producto desarrollado es de fácil utilización para el beneficiario. Además se espera que el proceso lógico del producto, es decir, como debería ser utilizado por el usuario sea simple y fácil de emplear. Por último, el diseño del producto debe ser adecuado a la necesidad y atractivo para el usuario.',
          questionId: qa.getQuestionIdByName('Look & feel / Usability / UX'),
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('answers', null, {});
  }
};
