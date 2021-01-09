import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: null,
    estados: [
      {
        text: 'Ciudad de México',
        value: 'cdmx',
      },
      {
        text: 'Chihuahua',
        value: 'chihuahua',
      },
      {
        text: 'Estado de México',
        value: 'estadodemexico',
      },
      {
        text: 'Guanajuato',
        value: 'guanajuato',
      },
      {
        text: 'Quintana Roo',
        value: 'quintanaroo',
      },
    ],
    summary: {
      cdmx: {
        state: 'Ciudad de México',
        date: '28 de septiembre 2020',
        location: 'Ciudad de México',
        text: 'Cada 28 de septiembre, Día de Acción Global por el Aborto Legal, Seguro y Gratuito las mujeres deciden tomar las calles de la CDMX para exigir el respeto a nuestra autonomía y a nuestras decisiones. Durante la manifestación el gobierno de Ciudad de México respondió a las manifestantes feministas con uso excesivo de la fuerza, además del encapsulamiento a las mujeres que estaban en los contingentes durante cuatro horas, aislandose de protestantes y poniéndolas en riesgo a cualquiera que queda dentro.Los policías usaron también gas pimienta, extintores y cohetones, estrategias y artículos que pertenecían al supuestamente extinto cuerpo de granaderos. Esto fue un ataque directo, ya que, al estar encapsuladas, las mujeres no podían dispersarse.',
        file: 'cdmx.json',
      },
      chihuahua: {
        state: 'Chihuahua',
        date: '6 de septiembre',
        location: 'Ciudad Juárez, Chihuahua',
        text: 'El pasado 6 de septiembre hubo una marcha feminista en contra del abuso policiaco, en apoyo a la manifestación de mujeres reprimida en León, Guanajuato, policias municipales detuvieron a 28 mujeres, cuatro de ellas menores de edad. Las mujeres detenidas declararon haber sufrido de violencia durante la detención. La Comisión Nacional para Prevenir y Erradicar la Violencia contra las Mujeres (Conavim), el Instituto Nacional de las Mujeres (Inmujeres), la Comisión Estatal de los Derechos Humanos de Chihuahua (CEDH) y el Instituto Chihuahuense de las Mujeres (Ichmujeres) expresaron su “preocupación” por la actuación de la policía municipal y el uso excesivo de la fuerza contra las detenidas.',
        file: 'chihuahua.json',
      },
      estadodemexico: {
        state: 'Estado de México',
        events: [
          {
            date: '11 de septiembre 2020',
            location: 'Ecatepec, Estado de México',
            text: `Un grupo de mujeres tomó las instalaciones de la Visitaduría General de la Comisión de Derechos del Estado de México (CDHEM) con sede en Ecatepec, con el fin de realizar una toma pacífica del lugar y exigir la renuncia de funcionarios de las instituciones responsables de prevenir y erradicar la violencia de género y los feminicidios, que ocurren con frecuencia en la entidad. Las mujeres que se encontraban en el lugar eran familiares de víctimas de desaparición, algunos niños y participantes de colectivas feministas, quienes exigían la pronta resolución de expedientes de casos olvidados e impunes.
            Personal de la Fiscalía de Justicia del Estado de México (FGJEM) entró por la fuerza en la madrugada a la sede y desalojó a las mujeres y niños, mediante el uso excesivo de la fuerza. Además, hubo 13 mujeres detenidas.`,
          },
          {
            date: '7 de noviembre 2020',
            location: 'Ecatepec, Estado de México',
            text: `El sábado 7 de noviembre un grupo de mujeres se reunió en Paseo Monte Fénix  y comenzaron una marcha por la carretera Melchor Ocampo-Cuautitlán para protestar y pedir justicia por el feminicidio de Ámbar Viridiana Uicab Tapia.  Ámbar Viridiana Uicab una mujer de 17 años que estuvo desaparecida desde el pasado 23 de octubre después de acudir a su escuela, en Cuautitlán y fue encontrada sin vida el 6 de noviembre en un canal de aguas negras en Estado de México. 
            Durante la manifestación que exigía justicia por el feminicidio de Ámbar elementos de la policía de la entidad mexiquense agredieron a las mujeres manifestantes y se llevaron detenidas a siete mujeres.`,
          },
        ],
        file: 'estadodemexico.json',
      },
      guanajuato: {
        state: 'Guanajuato',
        date: '22 de agosto 2020',
        location: 'León, Guanajuato',
        text: 'Un grupo de una centena de mujeres feministas se congregaron en el Arco de la Calzada, en León Guanajuato, para exigir #JusticiaparaEvelyn, una joven que denunció hace pocos días haber sido víctima de una agresión sexual por parte de un elemento de la policía municipal. Durante la manifestación se dieron 23 detenciones arbitrarias y con el uso de la fuerza, entre ellas activistas, periodistas y mujeres que no estuvieron en la manifestación, quienes estuvieron por horas incomunicadas. Además, la policía hizo uso excesivo de la fuerza durante las detenciones, causando lesiones en las mujeres detenidas.',
        file: 'guanajuato.json',
      },
      quintanaroo: {
        state: 'Quintana Roo',
        date: '9 de noviembre 2020',
        location: 'Cancún, Quintana Roo',
        text: `Durante una marcha para exigir justicia por el feminicidio de Bianca Alejandrina Lorenzana Alvarado, también conocida por amigos y familiares como Alexis. Bianca desapareció el sábado 7 de noviembre y su cuerpo apareció desmembrado en el fraccionamiento Vista Real de Cancún el 8 de noviembre.
        Durante la manifestación para exigir justicia y en la que participaron más de 500 personas, elementos del mando único de la policía estatal de Cancún disipó a balazos con armas largas la manifestación. En los disparos dos periodistas recibieron impactos de bala: una de ellas Cecilia Solís, recibió un impacto en la pierna, mientras que Roberto Becerril en el hombro.`,
        followUp: 'El Secretario de Seguridad Pública del Estado, Alberto Capella fue separado de su cargo mientras que el secretario general del Ayuntamiento, Isaac Janix, dimitió.',
        file: 'quintanaroo.json',
      },
    },
  },
  mutations: {
  },
  actions: {
    setSources({ state }, { estado, sources }) {
      state.summary = { ...state.summary, [estado]: { ...state.summary[estado], sources } };
    },
  },
  modules: {
  },
});
