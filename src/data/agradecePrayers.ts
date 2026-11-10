// 100 Spanish gratitude prayers for the Agradece Mujer library
// Each prayer is unique and personalized — no template phrases

export type AgradecePrayer = {
  id: number;
  slug: string;
  title: string;
  topic: string;
  lifeStage: string;
  bibleReference: string;
  body: string;
};

export const agradecePrayers: AgradecePrayer[] = [
  {
    "id": 1,
    "slug": "por-un-nuevo-amanecer",
    "title": "Por un nuevo amanecer",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 118:24",
    "body": "Padre Celestial, hoy abrí los ojos y vi la luz del amanecer. Qué regalo tan sencillo y tan extraordinario a la vez: un día que nobody me garantizó, pero que Tú, en Tu misericordia, decidiste regalarme. Gracias por el primer respiro de la mañana, por el silencio antes de que empiece el ruido del día, por la oportunidad de comenzar de nuevo. Ayúdame a no dar por sentado el privilegio de estar viva. Que cada amanecer me recuerde que Tu fidelidad se renueva cada mañana. En el nombre de Jesús. Amén."
  },
  {
    "id": 2,
    "slug": "por-el-regalo-de-estar-viva",
    "title": "Por el regalo de estar viva",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Santiago 1:17",
    "body": "Señor, hoy quiero detenerme y agradecerte por el regalo más básico y más profundo: estar viva. Hubo días en que no quise despertar, noches en que pensé que no resistiría, y sin embargo aquí estoy. Tú sostuviste mi corazón cuando yo no tenía fuerzas para sostenerlo. Gracias por cada latido que no tuve que producir, por cada respiración que Tu gracia hizo posible. No quiero vivir un solo día más sin reconocer que la vida es Tu regalo, no mi mérito. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 3,
    "slug": "por-el-aire-que-respiro",
    "title": "Por el aire que respiro",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Dios de misericordia, gracias por el aire que respiro. Es algo que hago sin pensar, un acto tan automático que rara vez lo reconozco como un milagro. Pero cada inspiración es un regalo de Tu creación, cada exhalación una prueba de que mi cuerpo funciona según Tu diseño. Perdóname cuando me quejo de lo que me falta y olvido agradecer lo que nunca me ha faltado. Que mi respiración misma sea una oración constante de gratitud hacia Ti. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 4,
    "slug": "por-el-alimento-de-hoy",
    "title": "Por el alimento de hoy",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Padre proveedor, hoy me senté a la mesa y tuve qué comer. No todos pueden decir lo mismo. Gracias por el alimento que nutre mi cuerpo, por las manos que lo preparon y por los recursos que lo hicieron posible. Líbrame de la ingratitud de quien mira el plato y solo ve comida, sin ver la provisión de Dios detrás de cada bocado. Enséñame a compartir mi pan con quien tiene menos, para que mi gratitud se exprese en generosidad. En el nombre de Jesús. Amén."
  },
  {
    "id": 5,
    "slug": "por-un-hogar-donde-descansar",
    "title": "Por un hogar donde descansar",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 103:2",
    "body": "Señor, gracias por el techo que me cobija. Sé que un hogar es mucho más que cuatro paredes: es el lugar donde puedo ser yo misma, donde lloro sin testigos y donde río sin filtros. Gracias por la cama donde descanso, por la cocina donde preparo mis comidas, por la silla donde leo y oro. Si mi hogar es pequeño, que sea lleno de Tu presencia; si es grande, que nunca se llene de soberbia. Que mi casa sea un lugar de refugio para otros, como lo ha sido para mí por Tu gracia. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 6,
    "slug": "por-la-belleza-de-la-creacion",
    "title": "Por la belleza de la creación",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Filipenses 4:6",
    "body": "Creador del universo, gracias por la belleza que me rodea. Por el cielo que cambia de color al atardecer, por las flores que crecen sin que nadie las plante, por el canto de los pájaros que me despierta algunas mañanas. Tú pudiste hacer un mundo funcional y gris, pero decidiste llenarlo de detalles hermosos. Que mis ojos aprendan a ver Tu firma en cada amanecer, en cada hoja, en cada nube. La creación me habla de Ti constantemente; ayúdame a escucharla. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 7,
    "slug": "por-los-pequenos-detalles",
    "title": "Por los pequeños detalles",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 136:1",
    "body": "Padre atento, gracias por los pequeños detalles que hacen la vida más llevadera. Un mensaje a tiempo, una taza de café caliente, una palabra de aliento que alguien dijo sin pensarlo dos veces pero que a mí me sostuvo todo el día. Tú estás detrás de cada uno de esos gestos pequeños, moviendo corazones para que lleguen a mí en el momento justo. Enséñame a ser yo también instrumento de pequeños detalles para otros. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 8,
    "slug": "por-una-noche-de-descanso",
    "title": "Por una noche de descanso",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Dios de paz, gracias por las noches en que pude dormir y descansar de verdad. No todas son así, y por eso valoro las que sí lo son. Gracias por el cuerpo que se relaja, por la mente que se aquieta y por la mañana que llega con fuerzas renovadas. Cuando el insomnio venga, ayúdame a usar esas horas para hablar contigo en lugar de pelear con mis pensamientos. Y cuando el sueño llegue, que mi último pensamiento sea de gratitud. En el nombre de Jesús. Amén."
  },
  {
    "id": 9,
    "slug": "por-las-oportunidades-de-este-dia",
    "title": "Por las oportunidades de este día",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 9:1",
    "body": "Señor de los cielos, gracias por las oportunidades que trae este día. Hay puertas que pueden abrirse, conversaciones que pueden transformar relaciones, decisiones que pueden cambiar dirección. No siempre las veo cuando llegan, por eso te pido discernimiento para reconocerlas y valentía para tomarlas. No permitas que el miedo me haga perder lo que Tu gracia me ofrece. Que al final del día pueda decir que aproveché cada oportunidad de amar, servir y crecer. En el nombre de Jesús. Amén."
  },
  {
    "id": 10,
    "slug": "por-una-vida-imperfecta-pero-bendecida",
    "title": "Por una vida imperfecta pero bendecida",
    "topic": "Vida y bendiciones cotidianas",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 100:4",
    "body": "Padre Celestial, gracias por mi vida imperfecta pero bendecida. Si la comparo con la imagen que tenía en mi cabeza, parece incompleta. Si la comparo con la de otros, parece insuficiente. Pero si la miro con Tus ojos, veo una historia tejida con gracia, donde incluso mis errores han sido terreno para Tu restauración. No quiero esperar a que todo sea perfecto para agradecer. Hoy, en medio de lo que aún no se resuelve, te doy gracias por lo que ya tengo y por lo que Tú seguirás haciendo. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 11,
    "slug": "por-el-amor-inagotable-de-dios",
    "title": "Por el amor inagotable de Dios",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 118:24",
    "body": "Padre Eterno, gracias por Tu amor que no se agota. Lo he probado en días de abundancia y en días de escasez, en momentos de fe y en momentos de duda. Tu amor no depende de mi desempeño ni de mi constancia; depende de Tu naturaleza, y eso me da una paz que no puedo explicar. Cuando lo merezco y cuando no, Tu amor está ahí, esperándome. Enséñame a vivir desde la certeza de ser amada, para que mi vida sea respuesta a ese amor y no intento de ganarlo. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 12,
    "slug": "por-la-gracia-que-no-merezco",
    "title": "Por la gracia que no merezco",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Santiago 1:17",
    "body": "Dios de gracia, gracias por lo que recibo sin merecerlo. La salvación, el perdón, las segundas oportunidades, la paz que sobrepasa el entendimiento: todo es regalo, nada es salario. Si tuvieras que darme lo que merezco, yo estaría perdida. Pero Tu gracia interviene donde mi justicia falla. Que esta verdad no me vuelva negligente, sino agradecida y humilde. Que mi respuesta a tanta gracia sea una vida que te honre, no por obligación sino por gratitud. En el nombre de Jesús. Amén."
  },
  {
    "id": 13,
    "slug": "por-la-misericordia-de-cada-manana",
    "title": "Por la misericordia de cada mañana",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Señor misericordioso, gracias porque cada mañana Tu misericordia se renueva. Ayer cometí errores, hoy encuentro Tu perdón esperándome. Antes de que yo pida, Tú ya estás dispuesto a restaurar. Esta misericordia no es debilidad Tuya; es Tu fortaleza expresada como paciencia. Que yo también aprenda a ser misericordiosa con otros, a no guardar rencor donde Tú guardas gracia, a no condenar donde Tú perdonas. Que la misericordia que recibo cada día transforme la manera en que trato a quienes me rodean. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 14,
    "slug": "por-el-sacrificio-de-jesucristo",
    "title": "Por el sacrificio de Jesucristo",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Padre santo, gracias por el sacrificio de Tu Hijo en la cruz. Jesús dio Su vida para que yo tuviera acceso a Ti, para que mi pecado no fuera la última palabra de mi historia. No hay gratitud más profunda que la que nace al mirar el Calvario. Que la cruz no sea solo un símbolo que uso en mi joyería o decoración, sino la realidad que define mi identidad y mi propósito. Vivo porque Él murió. Soy libre porque Él se entregó. Gracias, en el nombre de Jesucristo. Amén."
  },
  {
    "id": 15,
    "slug": "por-el-perdon-que-recibi",
    "title": "Por el perdón que recibí",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 103:2",
    "body": "Dios compasivo, gracias por el perdón que me has dado. Hay cosas en mi pasado de las que me avergüenzo, decisiones que tomé sin consultarTe, palabras que herieron y silencios que deberían haber sido gritos. Pero Tu perdón lavó lo que yo no podía limpiar. No permitas que viva como una perdonada que olvida lo que costó su perdón. Que mi gratitud por Tu gracia se note en cómo trato a los demás, especialmente a los que me fallan. En el nombre de Jesús. Amén."
  },
  {
    "id": 16,
    "slug": "por-la-presencia-del-espiritu-santo",
    "title": "Por la presencia del Espíritu Santo",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Filipenses 4:6",
    "body": "Señor, gracias por el regalo de Tu Espíritu Santo. No me dejaste sola en este mundo; pusiste dentro de mí a Alguien que me guía, me consuela, me recuerda Tus palabras y intercede cuando no sé qué orar. Gracias por esa voz interior que me redirige cuando me desvío, por esa paz que llega sin razón lógica, por ese impulso de amar cuando todo en mí quería responder con dureza. Que nunca apague Su voz ni ignore Su dirección. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 17,
    "slug": "por-la-palabra-que-me-orienta",
    "title": "Por la Palabra que me orienta",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 136:1",
    "body": "Padre, gracias por Tu Palabra. En un mundo lleno de voces contradictorias, la Biblia es mi brújula. Gracias por los versículos que me hablaron en el momento exacto, por las historias que me dieron esperanza cuando estaba a punto de rendirme, por los mandamientos que me protegen aunque a veces los vea como restricciones. Tu Palabra es lámpara a mis pies y luz a mi camino. Enséñame a leerla no por obligación sino por hambre de conocerte más. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 18,
    "slug": "por-la-libertad-de-orar",
    "title": "Por la libertad de orar",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Dios cercano, gracias por la libertad de orar. Puedo hablar contigo en cualquier momento, en cualquier lugar, con palabras hermosas o con balbuceos que apenas forman frases. No necesito un intermediario, un templo especial ni un horario. Tú escuchas mi corazón donde quiera que esté. Esta libertad costó la vida de Tu Hijo, y no quiero tratarla como algo barato. Que mi oración no sea solo petición, sino también gratitud, adoración y escucha. En el nombre de Jesús. Amén."
  },
  {
    "id": 19,
    "slug": "por-las-oraciones-respondidas",
    "title": "Por las oraciones respondidas",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 9:1",
    "body": "Padre fiel, gracias por las oraciones que respondiste. Algunas respuestas llegaron rápido, otras tardaron años, algunas fueron distintas a lo que pedí pero exactamente lo que necesitaba. Miro hacia atrás y veo un patrón de fidelidad que no siempre vi en el momento. Perdóname por las veces que oré con ansiedad y luego olvidé agradecer cuando llegaste. Hoy quiero ser la mujer que recuerda, que testimonia y que declara: Dios respondió, Dios es fiel. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 20,
    "slug": "por-las-respuestas-que-aun-espero",
    "title": "Por las respuestas que aún espero",
    "topic": "Fe y relación con Dios",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 100:4",
    "body": "Señor, hoy te agradezco incluso por las oraciones que todavía no tienen respuesta. Sé que Tu silencio no es Tu ausencia y que Tu demora no es Tu negativa. Quizás lo que pido no es lo mejor para mí, o quizás el momento aún no es el indicado. Gracias porque puedo confiar en Tu sabiduría más que en mi urgencia. Mientras espero, ayúdame a seguir orando sin perder la fe, y a vivir con gratitud por lo que ya tengo mientras espero lo que viene. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 21,
    "slug": "por-mi-madre",
    "title": "Por mi madre",
    "topic": "Familia y generaciones",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 118:24",
    "body": "Padre Celestial, gracias por mi madre. Su amor, sus sacrificios y sus oraciones me sostienen incluso hoy. Ella me enseñó con su ejemplo lo que sus palabras intentaron explicarme. Si tengo fe, en parte es porque ella oró por mí antes de que yo supiera orar. Si tengo fortaleza, es porque vi cómo ella resistió cuando le tocó difícil. Bendícela donde quiera que esté, devuélvele en bendiciones lo que invirtió en mí. Si nuestra relación es imperfecta, sana lo que falta sanar y agradezco lo que sí fue bueno. En el nombre de Jesús. Amén."
  },
  {
    "id": 22,
    "slug": "por-mi-padre",
    "title": "Por mi padre",
    "topic": "Familia y generaciones",
    "lifeStage": "Adulta",
    "bibleReference": "Santiago 1:17",
    "body": "Dios, gracias por mi padre. Su presencia en mi vida me formó de maneras que solo ahora entiendo. Si estuvo presente, gracias por su cuidado y dirección. Si estuvo ausente, gracias por lo que aprendí de su ausencia y por las personas que pusiste para suplir lo que faltó. Bendícelo, perdona sus errores como perdono los míos, y ayúdame a honrarlo no por perfección sino por gratitude. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 23,
    "slug": "por-mis-hijos",
    "title": "Por mis hijos",
    "topic": "Familia y generaciones",
    "lifeStage": "Adulta",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Padre de las familias, gracias por mis hijos. Son regalo Tuyo, no logro mío. Cada uno es distinto, cada uno me enseña algo que no sabía que necesitaba aprender. Gracias por sus risas, por sus abrazos, por las veces que me dicen \"te quiero\" sin que se lo pida. Protégelos donde yo no puedo llegar y dame sabiduría para criarlos sin asfixiarlos ni soltarlos demasiado. Que crezcan conociendo Tu amor y desarrollando su propia fe. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 24,
    "slug": "por-mis-nietos",
    "title": "Por mis nietos",
    "topic": "Familia y generaciones",
    "lifeStage": "Adulta mayor",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Señor de generaciones, gracias por mis nietos. Pensé que ya había visto todo lo que la vida podía dar, y luego llegaron ellos y renovaron mi capacidad de asombro. Gracias por sus preguntas, por su energía, por la forma en que me hacen sentir joven otra vez. Dame salud y tiempo para verlos crecer, y sabiduría para transmitirles una fe que no hereden por tradición sino por convicción. Que mi legado en ellos no sea cosas materiales, sino amor por Dios. En el nombre de Jesús. Amén."
  },
  {
    "id": 25,
    "slug": "por-mis-abuelos",
    "title": "Por mis abuelos",
    "topic": "Familia y generaciones",
    "lifeStage": "Joven",
    "bibleReference": "Salmo 103:2",
    "body": "Dios de las generaciones, gracias por mis abuelos. Ellos vivieron épocas que yo solo conozco por sus historias, y sin embargo su fe es la herencia que sostiene la mía. Gracias por sus oraciones, por su sabiduría acumulada, por el amor que me dieron sin condiciones. Si ya partieron, gracias por el tiempo que tuve con ellos y por la esperanza del reencuentro. Si siguen aquí, ayúdame a valorar cada conversación y a aprender de su experiencia. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 26,
    "slug": "por-mis-hermanos",
    "title": "Por mis hermanos",
    "topic": "Familia y generaciones",
    "lifeStage": "Todas las edades",
    "bibleReference": "Filipenses 4:6",
    "body": "Padre Celestial, gracias por mis hermanos. Crecimos juntos, compartimos techo, comida, risas y peleas. La vida nos llevó por caminos distintos, pero el vínculo que nos une sigue siendo fuerte. Gracias por las veces que me defendieron, por los recuerdos que solo nosotros compartimos y por la complicidad que no necesita palabras. Si hoy estamos distantes, acércanos. Si estamos juntos, ayúdanos a valorarnos más. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 27,
    "slug": "por-mi-esposo",
    "title": "Por mi esposo",
    "topic": "Familia y generaciones",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 136:1",
    "body": "Señor, gracias por mi esposo. No es perfecto, pero es el compañero que Tú pusiste a mi lado. Gracias por su trabajo, por su cuidado, por las veces que me escucha sin juzgar y por las veces que me hace reír cuando solo quiero llorar. Bendice nuestro matrimonio, ayúdanos a crecer juntos y a no dejar que la rutina apague lo que un día nos unió. Que nuestro hogar sea un lugar donde Tu presencia se sienta y donde el amor sea más fuerte que las diferencias. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 28,
    "slug": "por-la-familia-que-me-acogio",
    "title": "Por la familia que me acogió",
    "topic": "Familia y generaciones",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Padre de los huérfanos, gracias por la familia que me acogió cuando mi propia familia no pudo. Tú pusiste en el corazón de personas generosas el deseo de recibirme como hija, hermana o nieta. Su amor no fue por obligación sino por gracia, y eso lo hace aún más valioso. Bendícelos por cada gesto de cariño, por cada sacrificio silencioso y por la paciencia que tuvieron con mis heridas. Que yo pueda ser para alguien más lo que ellos fueron para mí. En el nombre de Jesús. Amén."
  },
  {
    "id": 29,
    "slug": "por-los-recuerdos-de-mi-infancia",
    "title": "Por los recuerdos de mi infancia",
    "topic": "Familia y generaciones",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 9:1",
    "body": "Dios de los recuerdos, gracias por mi infancia. Aunque no todo fue perfecto, hubo momentos hermosos que atesoro: juegos en el patio, olores de la cocina de mi casa, voces que me hacían sentir segura. Gracias por lo que fue bueno y gracias también por lo que fue difícil, porque ambas cosas me formaron. Sana los recuerdos que todavía duelen y ayúdame a guardar los que me hacen sonreír. Que mi pasado no sea cadena sino plataforma. En el nombre de Jesús. Amén."
  },
  {
    "id": 30,
    "slug": "por-el-legado-de-fe-en-mi-familia",
    "title": "Por el legado de fe en mi familia",
    "topic": "Familia y generaciones",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 100:4",
    "body": "Señor de las generaciones, gracias por el legado de fe que recibí de mi familia. Alguien en mi linaje decidió seguirte, y eso cambió la trayectoria de las generaciones siguientes. Ahora me toca a mí mantener viva esa fe y transmitirla a mis hijos y nietos. Que mi vida sea un eslabón fuerte en esta cadena de fe que comenzó antes que yo y continuará después de mí. Que nadie en mi familia pierda lo que costó tanto ganar. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 31,
    "slug": "por-el-amor-que-compartimos",
    "title": "Por el amor que compartimos",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 118:24",
    "body": "Padre del amor, gracias por el amor que mi esposo y yo compartimos. En un mundo donde las relaciones se rompen con facilidad, valoro lo que Tú has construido entre nosotros. Gracias por los años juntos, por las dificultades que superamos y por el cariño que sigue creciendo. Que nunca nos creamos merecedores de este amor, sino agradecidos. Enséñanos a cuidarlo con diligencia, a no descuidarlo por costumbre y a buscarlo intencionalmente. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 32,
    "slug": "por-los-anos-de-matrimonio",
    "title": "Por los años de matrimonio",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Santiago 1:17",
    "body": "Dios fiel, gracias por los años de matrimonio. Cada aniversario es testimonio de Tu gracia sosteniéndonos. Hubo días felices y días difíciles, pero aquí estamos, porque Tú nos mantuviste unidos cuando nuestras fuerzas no alcanzaban. Gracias por la paciencia mutua, por el perdón que nos dimos una y otra vez y por el amor que maduró con el tiempo. Que los años que vienen sean aún más profundos. En el nombre de Jesús. Amén."
  },
  {
    "id": 33,
    "slug": "por-la-paciencia-en-nuestra-relacion",
    "title": "Por la paciencia en nuestra relación",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Señor, gracias por la paciencia que has cultivado en nuestro matrimonio. No fue fácil aprender a vivir con alguien tan distinto a mí, pero Tú nos enseñó a escucharnos, a esperar, a no reaccionar con ira. Gracias por las veces que mi esposo fue paciente con mis defectos y por las veces que yo logré serlo con los suyos. Que esta paciencia siga creciendo, porque sabemos que el amor sin paciencia se rompe. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 34,
    "slug": "por-los-desacuerdos-que-nos-ensenaron",
    "title": "Por los desacuerdos que nos enseñaron",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Padre, gracias incluso por los desacuerdos en nuestro matrimonio. Cada discusión fue una oportunidad de conocernos mejor, de aprender a negociar y de practicar el perdón. No siempre los manejamos bien, pero Tú los usaste para fortalecer nuestra relación. Enséñanos a discordar sin lastimarnos, a pelear sin destruirnos y a reconciliarnos sin rencor. Que cada conflicto nos acerque más, no nos separe. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 35,
    "slug": "por-la-reconciliacion-despues-de-una-discusion",
    "title": "Por la reconciliación después de una discusión",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 103:2",
    "body": "Dios de reconciliación, gracias por las veces que mi esposo y yo supimos reconciliarnos después de una discusión. Es fácil herirse; lo difícil es humillarse, pedir perdón y restaurar. Gracias por las noches en que, después de pelear, nos acostamos abrazados. Eso no fue mérito nuestro; fue Tu gracia ablandando nuestros corazones. Que nunca se nos haga costumbre el conflicto, pero tampoco se nos olvide el camino de vuelta al amor. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 36,
    "slug": "por-la-fidelidad-y-el-compromiso",
    "title": "Por la fidelidad y el compromiso",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Filipenses 4:6",
    "body": "Señor, gracias por la fidelidad en nuestro matrimonio. En una cultura que descarta lo que se daña, Tú nos enseñaste a permanecer. El compromiso no es sentimiento; es decisión, y la fidelidad es su fruto. Gracias por las veces que elegimos quedarnos cuando sería más fácil irnos, por las veces que trabajamos en la relación en lugar de buscar reemplazarla. Bendice nuestra fidelidad y hazla ejemplo para quienes nos rodean. En el nombre de Jesús. Amén."
  },
  {
    "id": 37,
    "slug": "por-el-carino-en-los-dias-comunes",
    "title": "Por el cariño en los días comunes",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 136:1",
    "body": "Padre, gracias por el cariño de los días comunes. No todos los días son aniversarios ni fechas especiales. La mayoría son días ordinarios, y sin embargo ahí también hay amor: en el café que él me sirve, en la llamada a media tarde, en el gesto de cubrirme con la cobija cuando tengo frío. Enséñame a no buscar el amor solo en los grandes gestos, sino a encontrarlo en los pequeños, que son los más constantes. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 38,
    "slug": "por-el-apoyo-de-mi-pareja",
    "title": "Por el apoyo de mi pareja",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Colosenses 3:15",
    "body": "Dios, gracias por el apoyo de mi pareja. En los días en que sentí que no daba más, él estuvo ahí para sostenerme. En las decisiones difíciles, me acompañó en lugar de juzgarme. Gracias por las veces que creyó en mí cuando yo misma dudaba. Que yo sea para él el mismo apoyo que él ha sido para mí, y que nuestro matrimonio sea siempre un lugar donde ambos encontremos refugio. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 39,
    "slug": "por-aprender-a-amar-sin-controlar",
    "title": "Por aprender a amar sin controlar",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 9:1",
    "body": "Señor, gracias por enseñarme a amar sin controlar. Me costó entender que el amor no es posesión ni dirección autoritaria. Mi esposo no es mi proyecto; es mi compañero. Gracias por las veces que me corregiste cuando intentaba controlarlo y por las veces que me mostraste que soltar es también una forma de amar. Que mi amor le dé libertad, no cadenas; confianza, no vigilancia. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 40,
    "slug": "por-la-oportunidad-de-volver-a-empezar-en-el-amor",
    "title": "Por la oportunidad de volver a empezar en el amor",
    "topic": "Matrimonio y amor",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 100:4",
    "body": "Padre de segundas oportunidades, gracias por darme la posibilidad de volver a amar después de una pérdida o un fracaso. Pensé que mi corazón había cerrado para siempre, pero Tú lo reopening con cuidado. Gracias por la persona que pusiste en mi camino y por la valentía que me diste para confiar de nuevo. Que esta nueva etapa sea más sana, más madura y más consciente que las anteriores. En el nombre de Jesús. Amén."
  },
  {
    "id": 41,
    "slug": "por-una-amiga-fiel",
    "title": "Por una amiga fiel",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 118:24",
    "body": "Señor, gracias por una amiga fiel. En un mundo de relaciones superficiales, tener alguien que me conoce de verdad y sigue a mi lado es un tesoro. Gracias por las conversaciones que me dieron claridad, por los abrazos que no necesitaron palabras y por las veces que oró por mí cuando yo no tenía fuerzas para hacerlo. Bendícela, multiplica las amistades así en mi vida y ayúdame a ser yo también esa amiga fiel para alguien más. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 42,
    "slug": "por-las-personas-que-me-escuchan",
    "title": "Por las personas que me escuchan",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Santiago 1:17",
    "body": "Dios, gracias por las personas que me escuchan. No las que oyen por cortesía, sino las que prestan atención de verdad, las que hacen preguntas que demuestran interés, las que recuerdan lo que les conté. En un mundo donde todos hablan y pocos escuchan, estas personas son regalo Tuyo. Ayúdame a ser como ellas: a escuchar para comprender, no para responder; a dar espacio al otro sin interrumpir; a hacer de mis oídos un refugio. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 43,
    "slug": "por-quienes-me-corrigieron-con-amor",
    "title": "Por quienes me corrigieron con amor",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Padre, gracias por las personas que me corrigieron con amor. No es fácil decirle a alguien que se equivoca sin lastimarlo, y tampoco es fácil recibir la corrección sin defenderse. Gracias por esas amigas que me hablaron con verdad cuando lo que necesitaba escuchar no era lo que quería escuchar. Su corrección me salvó de decisiones peores. Dame humildad para seguir recibiéndola y sabiduría para ofrecerla cuando sea necesaria. En el nombre de Jesús. Amén."
  },
  {
    "id": 44,
    "slug": "por-los-vecinos-que-me-ayudaron",
    "title": "Por los vecinos que me ayudaron",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Señor, gracias por los vecinos que me han ayudado. El que me prestó azúcar cuando no tenía, el que cuidó mi casa cuando viajé, el que me avisó cuando vio algo sospechoso. La comunidad empieza en el vecindario, y muchas veces pasamos años junto a alguien sin saber su nombre. Ayúdame a ser una buena vecina: disponible, amable y atenta. Que mi calle sea un lugar más seguro porque yo estoy en ella. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 45,
    "slug": "por-las-amistades-de-muchos-anos",
    "title": "Por las amistades de muchos años",
    "topic": "Amistad y comunidad",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 103:2",
    "body": "Dios de los vínculos largos, gracias por las amistades de muchos años. Esas que empezaron en la escuela y siguen hoy, que sobrevivieron mudanzas, cambios, silencios y distancias. No todas las amistades duran, y por eso las que permanecen son oro. Gracias por las conversaciones que recogen exactamente donde se quedaron, por el conocimiento mutuo que solo da el tiempo y por la confianza que no necesita pruebas. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 46,
    "slug": "por-los-nuevos-amigos",
    "title": "Por los nuevos amigos",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Filipenses 4:6",
    "body": "Padre, gracias por los nuevos amigos que has traído a mi vida. Nunca es tarde para conocer a alguien que enriquezca mi camino. Gracias por las conversaciones que apenas empiezan, por las afinidades que se descubren y por la promesa de algo que puede crecer. Ayúdame a darles espacio, a no compararlos con amistades viejas y a invertir tiempo en construir algo sólido. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 47,
    "slug": "por-quienes-oran-por-mi",
    "title": "Por quienes oran por mí",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 136:1",
    "body": "Señor, gracias por las personas que oran por mí. Algunas me lo dicen, otras lo hacen en silencio, pero todas son pilares invisibles en mi vida. Qué privilegio saber que alguien menciona mi nombre ante Ti, que intercede cuando yo no tengo palabras, que clama cuando yo solo puedo suspirar. Bendícelos, y ayúdame a ser yo también una que ora por otros con la misma constancia. En el nombre de Jesús. Amén."
  },
  {
    "id": 48,
    "slug": "por-las-personas-que-me-ensenaron",
    "title": "Por las personas que me enseñaron",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Dios de la sabiduría, gracias por las personas que me enseñaron. Maestras, mentoras, jefas, amigas mayores: cada una dejó una semilla que hoy da fruto. Algunas me enseñaron con paciencia, otras con exigencia; algunas me enseñaron qué hacer, otras me enseñaron qué no hacer. A todas las agradezco, porque mi vida es suma de sus lecciones. Que yo sepa transmitir lo que recibí a quienes vienen detrás de mí. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 49,
    "slug": "por-la-iglesia-y-la-comunidad-de-fe",
    "title": "Por la iglesia y la comunidad de fe",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 9:1",
    "body": "Padre, gracias por mi iglesia y mi comunidad de fe. No es perfecta, pero es el lugar donde aprendí a adorar, donde encontré hermanos que me sostienen y donde descubrí mis dones. Gracias por los cultos que me fortalecieron, por los estudios que me desafiaron y por el servicio que me enseñó a amar con acciones. Que mi comunidad sea cada vez más un reflejo de Tu reino: inclusiva, compasiva, transformadora. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 50,
    "slug": "por-la-oportunidad-de-ayudar-a-alguien",
    "title": "Por la oportunidad de ayudar a alguien",
    "topic": "Amistad y comunidad",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 100:4",
    "body": "Señor, gracias por la oportunidad de ayudar a alguien. Cada vez que puedo servir, dar o acompañar, siento que mi vida tiene propósito. No es mérito mío; es Tu gracia poniendo en mi camino a quien necesita lo que yo tengo para ofrecer. Que mi ayuda nunca sea por reconocimiento, sino por amor. Y que al servir, yo sea más bendecida que la persona a quien sirvo, porque dar es mejor que recibir. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 51,
    "slug": "por-la-salud-que-tengo-hoy",
    "title": "Por la salud que tengo hoy",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 118:24",
    "body": "Padre sanador, gracias por la salud que tengo hoy. No es perfecta, pero me permite levantarme, moverme, trabajar y amar. Cuando estuve enferma, aprendí a valorar lo que antes daba por sentado: caminar sin dolor, respirar sin dificultad, dormir sin interrupciones. Que la gratitud por mi salud no dure solo mientras la tengo, sino que me haga cuidarla con responsabilidad y compartirla con quienes están enfermos. En el nombre de Jesús. Amén."
  },
  {
    "id": 52,
    "slug": "por-mi-cuerpo-y-sus-capacidades",
    "title": "Por mi cuerpo y sus capacidades",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Santiago 1:17",
    "body": "Creador del cuerpo humano, gracias por mi cuerpo. Aunque a veces lo miro con crítica y solo veo defectos, él es obra Tuya. Gracias por mis manos que abrazan y trabajan, por mis ojos que ven la belleza, por mis piernas que me llevan donde necesito ir, por mi voz que pronuncia Tu nombre. Enséñame a cuidarlo como templo de Tu Espíritu, a no castigarlo por no encajar en un estándar, y a honrarlo como Tu creación. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 53,
    "slug": "por-los-medicos-y-cuidadores",
    "title": "Por los médicos y cuidadores",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Señor, gracias por los médicos, enfermeras y cuidadores. Ellos dedican su vida a restaurar la de otros. Gracias por su conocimiento, por su paciencia, por las veces que trabajaron horas extras para atenderme a mí o a alguien que amo. Bendícelos, protégelos del agotamiento y recompénsalos por su servicio. Que nunca pierdan la compasión que los llevó a elegir esa vocación. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 54,
    "slug": "por-una-recuperacion-dificil",
    "title": "Por una recuperación difícil",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Padre de la sanidad, gracias por una recuperación que costó mucho. Hubo días en que pensé que no mejoraría, noches de dolor y mañanas sin fuerzas. Pero aquí estoy, poco a poco recuperando lo que perdí. Gracias por la paciencia que cultivé en la espera, por las personas que me cuidaron y por Tu mano sanadora obrando a través del tiempo. Que mi recuperación no sea solo física, sino también espiritual: más agradecida, más consciente, más viva. En el nombre de Jesús. Amén."
  },
  {
    "id": 55,
    "slug": "por-la-fuerza-para-enfrentar-la-enfermedad",
    "title": "Por la fuerza para enfrentar la enfermedad",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 103:2",
    "body": "Dios de la fortaleza, gracias por la fuerza que me diste cuando enfrenté la enfermedad. No era una fuerza mía; era Tuya sosteniéndome cuando la mía se agotaba. Gracias por los días en que solo pude dar un paso y aun así lo di, por las noches en que resistí el miedo y amanecí con esperanza. Si la enfermedad vuelve, confío en que Tu gracia será suficiente otra vez. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 56,
    "slug": "por-los-dias-sin-dolor",
    "title": "Por los días sin dolor",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Filipenses 4:6",
    "body": "Señor, gracias por los días sin dolor. Cuando se vive con dolor crónico, los días buenos son milagros discretos. Gracias por la mañana en que me desperté y nada dolía, por el momento en que pude moverme libre, por la actividad que disfruté sin limitaciones. Que estos días me recuerden que Tú eres el sanador y que la salud es regalo, no derecho. Que mi gratitud por los días sin dolor me haga compasiva con quienes no los tienen. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 57,
    "slug": "por-el-descanso-despues-del-cansancio",
    "title": "Por el descanso después del cansancio",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 136:1",
    "body": "Padre, gracias por el descanso después del cansancio. Hay una satisfacción profunda en recostarse cuando el cuerpo ha trabajado duro, en cerrar los ojos cuando la mente ha dado todo. Gracias por enseñarme que el descanso no es pereza sino necesidad, y que Tú mismo descansaste en el séptimo día. Que no viva para descansar ni descanse para huir, sino que encuentre en el descanso la renovación que me permite seguir. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 58,
    "slug": "por-mi-salud-emocional",
    "title": "Por mi salud emocional",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Señor de la mente, gracias por mi salud emocional. Hubo temporadas en que mi interior fue un caos, en que no podía nombrar lo que sentía ni manejar lo que pensaba. Hoy, aunque no todo es perfecto, tengo herramientas, recursos y personas que me ayudan a mantener el equilibrio. Gracias por la terapia, por las conversaciones que me sanaron y por Tu Espíritu que renueva mi mente. Que cuidar mi salud emocional sea prioridad, no lujo. En el nombre de Jesús. Amén."
  },
  {
    "id": 59,
    "slug": "por-la-capacidad-de-pedir-ayuda",
    "title": "Por la capacidad de pedir ayuda",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 9:1",
    "body": "Dios, gracias por la capacidad de pedir ayuda. Me costó mucho aprender que necesitar a otros no es debilidad. Pensé que ser fuerte significaba no pedir nada, y me di cuenta de que solo me estaba aislando. Gracias por las personas que me enseñaron que la vulnerabilidad es valentía y que la interdependencia es salud. Que nunca me falte la humildad de pedir ayuda ni la generosidad de ofrecerla. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 60,
    "slug": "por-el-valor-para-cuidar-de-mi",
    "title": "Por el valor para cuidar de mí",
    "topic": "Salud y fortaleza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 100:4",
    "body": "Padre, gracias por el valor que estoy aprendiendo a tener para cuidar de mí. Durante años me puse al final de la lista, creyendo que amar a otros significaba olvidarme de mí. Pero Tú me enseñaste que no puedo dar lo que no tengo, y que cuidarme es también una forma de honrar lo que Tú creaste. Gracias por las veces que dije no, por las veces que descansé sin culpa y por las veces que busqué ayuda. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 61,
    "slug": "por-mi-trabajo",
    "title": "Por mi trabajo",
    "topic": "Trabajo y provisión",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 118:24",
    "body": "Señor proveedor, gracias por mi trabajo. No siempre es perfecto ni siempre es fácil, pero es fuente de sustento y de propósito. Gracias por las habilidades que me permiten hacerlo, por las personas con quienes lo comparto y por las oportunidades que me ha abierto. Que mi trabajo no sea solo medio de ingresos, sino también lugar donde sirvo, donde creo y donde reflejo Tu carácter. En el nombre de Jesús. Amén."
  },
  {
    "id": 62,
    "slug": "por-las-puertas-laborales-que-se-abrieron",
    "title": "Por las puertas laborales que se abrieron",
    "topic": "Trabajo y provisión",
    "lifeStage": "Adulta",
    "bibleReference": "Santiago 1:17",
    "body": "Dios de las oportunidades, gracias por las puertas laborales que se abrieron cuando menos las esperaba. Hubo temporadas de desempleo en que oré sin ver resultados, y luego llegaron ofertas, contactos y proyectos que solo pueden explicarse por Tu intervención. Que mi gratitud no se exprese solo en palabras, sino en excelencia: haciendo mi trabajo con integridad, dedicación y generosidad. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 63,
    "slug": "por-las-habilidades-que-he-aprendido",
    "title": "Por las habilidades que he aprendido",
    "topic": "Trabajo y provisión",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Padre, gracias por las habilidades que he aprendido a lo largo de los años. Algunas las estudié, otras las aprendí haciendo, muchas las desarrollé en medio de desafíos que no busqué. Cada competencia es una herramienta que Tú me diste para servir y proveer. Que nunca deje de aprender, que mi mente se mantenga curiosa y mis manos dispuestas a practicar. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 64,
    "slug": "por-el-sustento-de-mi-familia",
    "title": "Por el sustento de mi familia",
    "topic": "Trabajo y provisión",
    "lifeStage": "Adulta",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Jehová Jireh, mi proveedor, gracias por el sustento de mi familia. No siempre sobra, pero nunca nos ha faltado. Pan en la mesa, techo sobre la cabeza, ropa para vestirnos. Tú has usado mi trabajo, la generosidad de otros y Tu provisión sobrenatural para sostenernos. Que mi confianza esté en Ti, no en mi salario ni en mis ahorros. Enséñame a administrar con sabiduría y a compartir con alegría. En el nombre de Jesús. Amén."
  },
  {
    "id": 65,
    "slug": "por-la-oportunidad-de-estudiar",
    "title": "Por la oportunidad de estudiar",
    "topic": "Trabajo y provisión",
    "lifeStage": "Joven",
    "bibleReference": "Salmo 103:2",
    "body": "Señor, gracias por la oportunidad de estudiar. El acceso a la educación es un privilegio que no todos tienen. Gracias por los maestros que me retaron, por los libros que abrieron mi mente y por el conocimiento que me da herramientas para el futuro. Que mis estudios no sean solo para mi beneficio, sino para servir mejor a quien me rodea y para honrar lo que Tú has invertido en mí. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 66,
    "slug": "por-las-personas-que-me-dieron-una-oportunidad",
    "title": "Por las personas que me dieron una oportunidad",
    "topic": "Trabajo y provisión",
    "lifeStage": "Adulta",
    "bibleReference": "Filipenses 4:6",
    "body": "Dios, gracias por las personas que me dieron una oportunidad cuando nadie más lo hacía. El jefe que me contrató sin experiencia, el cliente que confió en mi trabajo, el mentor que me recomendó. Su confianza fue el puente que necesitaba para cruzar al siguiente nivel. Bendícelos, y ayúdame a ser yo también alguien que da oportunidades a quienes otros rechazan. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 67,
    "slug": "por-los-recursos-que-puedo-administrar",
    "title": "Por los recursos que puedo administrar",
    "topic": "Trabajo y provisión",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 136:1",
    "body": "Padre, gracias por los recursos que me has confiado. No son muchos, pero son suficientes, y todos vienen de Ti. Enséñame a administrarlos con sabiduría: ni despilfarrando por ansiedad ni acaparando por miedo. Que mi relación con el dinero sea sana, que mi generosidad sea proporcional a lo que recibo y que mi confianza esté en el Dador, no en los dones. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 68,
    "slug": "por-aprender-a-vivir-con-sencillez",
    "title": "Por aprender a vivir con sencillez",
    "topic": "Trabajo y provisión",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Señor, gracias por enseñarme a vivir con sencillez. Hubo temporadas en que creí que necesitaba más para ser feliz, y Tú me mostraste que la contentura no depende de la abundancia. Aprendí a disfrutar lo esencial, a no compararme con quien tiene más y a encontrar riqueza en lo que no se compra. Que mi vida sencilla sea una declaración de libertad frente al consumismo. En el nombre de Jesús. Amén."
  },
  {
    "id": 69,
    "slug": "por-los-proyectos-que-pude-terminar",
    "title": "Por los proyectos que pude terminar",
    "topic": "Trabajo y provisión",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 9:1",
    "body": "Dios de la perseverancia, gracias por los proyectos que pude terminar. Algunos tomaron meses, otros años. Hubo momentos en que quise abandonar, pero Tú me diste constancia. Gracias por la satisfacción de ver algo concluido, por lo que aprendí en el proceso y por las personas que me acompañaron. Que cada proyecto terminado sea una prueba de que, con Tu ayuda, puedo completar lo que Tú me llama a hacer. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 70,
    "slug": "por-la-creatividad-y-las-nuevas-ideas",
    "title": "Por la creatividad y las nuevas ideas",
    "topic": "Trabajo y provisión",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 100:4",
    "body": "Creador infinito, gracias por la creatividad que me has dado. Es reflejo de Tu imagen en mí. Gracias por las ideas que llegan en momentos inesperados, por la capacidad de imaginar algo que no existe y por la valentía de intentar lo que no se ha hecho. Que mi creatividad no sirva solo a mi ego, sino a Tu reino: para resolver problemas, para embellecer el mundo, para comunicar Tu verdad de maneras frescas. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 71,
    "slug": "por-las-lecciones-de-mis-errores",
    "title": "Por las lecciones de mis errores",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 118:24",
    "body": "Padre, gracias por las lecciones que aprendí de mis errores. No te agradezco el error mismo, sino lo que Tú sacaste de él. Cada caída me enseñó algo que no hubiera aprendido de otra manera: humildad, prudencia, dependencia de Ti. Gracias por no descartarme cuando me equivocé, por restaurarme y por darme la oportunidad de hacerlo mejor. Que mi vida sea prueba de que el error no es el final cuando Tu gracia interviene. En el nombre de Jesús. Amén."
  },
  {
    "id": 72,
    "slug": "por-la-fortaleza-en-la-adversidad",
    "title": "Por la fortaleza en la adversidad",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Santiago 1:17",
    "body": "Señor de las pruebas, gracias por la fortaleza que creció en medio de la adversidad. No pedí el problema, pero tampoco quiero desperdiciar lo que él produjo en mí. La resistencia me hizo más fuerte, el dolor me hizo más compasiva, la espera me hizo más paciente. Todo lo que el enemigo quiso usar para destruirme, Tú lo usaste para formarme. Que mi testimonio sea: lo que me dolió también me transformó. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 73,
    "slug": "por-la-paciencia-que-estoy-aprendiendo",
    "title": "Por la paciencia que estoy aprendiendo",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Dios paciente, gracias por la paciencia que estás cultivando en mí. No es algo que nazca fácil; es fruto de procesos donde no tengo control. Gracias por las situaciones que me obligaron a esperar, por las personas que me obligaron a tolerar y por los sueños que tardan en llegar. Que esta paciencia no sea resignación, sino confianza activa: hacer lo que puedo mientras espero lo que no puedo acelerar. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 74,
    "slug": "por-las-puertas-que-se-cerraron",
    "title": "Por las puertas que se cerraron",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Padre, gracias por las puertas que se cerraron. Cuando sucedió, dolió; pensé que era lo mejor para mí, pero Tú sabías que no lo era. Cada no que recibí fue redirección, cada rechazo fue protección, cada oportunidad perdida fue una mejor oportunidad preparada. Hoy miro atrás y agradezco lo que no obtuve porque me condujo a lo que sí tengo. Que confíe en Tu no tanto como en Tu sí. En el nombre de Jesús. Amén."
  },
  {
    "id": 75,
    "slug": "por-la-esperanza-en-tiempos-inciertos",
    "title": "Por la esperanza en tiempos inciertos",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 103:2",
    "body": "Señor de la esperanza, gracias por mantener viva la esperanza en tiempos inciertos. Cuando el futuro era niebla y el presente era caos, Tu Espíritu me susurró que habría luz. Gracias por no dejarme rendir, por las personas que me recordaron Tu fidelidad y por las Escrituras que se volvieron ancla. La esperanza no fue optimismo; fue confianza en Ti cuando todo era oscuro. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 76,
    "slug": "por-las-lagrimas-que-dios-conoce",
    "title": "Por las lágrimas que Dios conoce",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Filipenses 4:6",
    "body": "Padre que ves en secreto, gracias por conocer cada lágrima que he derramado. Algunas las lloré delante de todos, otras en la soledad de mi cuarto, algunas ni siquiera llegaron a mis ojos pero las sentí en el pecho. Tú las contaste todas, las guardaste todas. Ninguna fue desperdiciada. Gracias por ser el Dios que no solo ve el sufrimiento sino que lo recoge y lo transforma en algo redentivo. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 77,
    "slug": "por-haber-sobrevivido-a-dias-dificiles",
    "title": "Por haber sobrevivido a días difíciles",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 136:1",
    "body": "Dios de la supervivencia, gracias por haberme sostenido en los días más difíciles de mi vida. Hubo momentos en que pensé que no resistiría, en que el dolor era tan grande que no veía cómo seguir. Pero aquí estoy. No porque fuera más fuerte que otros, sino porque Tu gracia me sostuvo. Gracias por cada día que sobreviví sin saber cómo, por cada mañana que amaneció después de una noche oscura. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 78,
    "slug": "por-aprender-a-establecer-limites",
    "title": "Por aprender a establecer límites",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Señor, gracias por enseñarme a establecer límites. Me costó entender que decir no no es egoísmo, que no todo lo que me piden es mi responsabilidad y que cuidar mi paz es también cuidar lo que Tú me confió. Gracias por las personas que respetaron mis límites cuando empecé a ponerlos y por las que me enseñaron cómo hacerlo. Que mis límites no sean muros sino cercas: protegen lo valioso sin aislar. En el nombre de Jesús. Amén."
  },
  {
    "id": 79,
    "slug": "por-las-segundas-oportunidades",
    "title": "Por las segundas oportunidades",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 9:1",
    "body": "Dios de las segundas oportunidades, gracias por no ser un Dios de una sola chance. Me diste otra oportunidad cuando fracasé, cuando caí, cuando merecía consequences. Tu gracia no borra las consequences, pero ofrece un nuevo comienzo. Gracias por restaurar lo que yo rompí, por abrir caminos que yo cerré y por creer en mí cuando yo había dejado de hacerlo. Que cada segunda oportunidad sea vivida con más sabiduría que la primera. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 80,
    "slug": "por-la-sabiduria-adquirida-con-los-anos",
    "title": "Por la sabiduría adquirida con los años",
    "topic": "Pruebas y crecimiento",
    "lifeStage": "Adulta mayor",
    "bibleReference": "Salmo 100:4",
    "body": "Padre de los años, gracias por la sabiduría que solo el tiempo puede dar. No la que viene de libros, sino la que nace de vivencias, errores, pérdidas y recuperaciones. Cada arruga cuenta una historia, cada cana representa una lección. Que esta sabiduría no me vuelva arrogante sino humilde, no crítica sino compasiva. Que la comparta con quienes la necesitan, sin imponerla, como ofrenda de quien ya caminó ese tramo. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 81,
    "slug": "por-mi-juventud-y-sus-aprendizajes",
    "title": "Por mi juventud y sus aprendizajes",
    "topic": "Etapas de la mujer",
    "lifeStage": "Joven",
    "bibleReference": "Salmo 118:24",
    "body": "Señor, gracias por mi juventud. Por la energía que tengo, por los sueños que me inspiran y por la capacidad de intentar y fallar y volver a intentar. Esta etapa tiene deslices y aciertos, pero todo es aprendizaje. Que no desperdicie estos años en lo superficial, que invierta en lo que perdura: fe, relaciones, carácter. Que mi juventud sea ofrenda agradable a Ti. En el nombre de Jesús. Amén."
  },
  {
    "id": 82,
    "slug": "por-la-mujer-que-soy-hoy",
    "title": "Por la mujer que soy hoy",
    "topic": "Etapas de la mujer",
    "lifeStage": "Todas las edades",
    "bibleReference": "Santiago 1:17",
    "body": "Padre Creador, gracias por la mujer que soy hoy. No soy la que soñé ser a los veinte, ni la que temí ser en los momentos difíciles. Soy una versión que Tú has ido formando con mis decisiones, mis circunstancias y Tu gracia. Gracias por no dejarme estancada en quien fui, por seguir transformándome. Que mi identidad se funde en lo que Tú dices de mí, no en lo que el mundo dice o en lo que yo solía creer. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 83,
    "slug": "por-los-cambios-de-mi-cuerpo",
    "title": "Por los cambios de mi cuerpo",
    "topic": "Etapas de la mujer",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Dios, gracias por los cambios de mi cuerpo a lo largo de las etapas. La pubertad, la maternidad, la madurez: cada uno transformó mi cuerpo de maneras que a veces costó aceptar. Pero cada cambio cuenta una historia: el embarazo que formó vida, las cicatrices que hablan de batallas, las líneas que expresan años vividos. Enséñame a no odiar lo que cambia, sino a honrarlo como evidencia de que sigo viva. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 84,
    "slug": "por-la-madurez-que-estoy-alcanzando",
    "title": "Por la madurez que estoy alcanzando",
    "topic": "Etapas de la mujer",
    "lifeStage": "Adulta",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Señor, gracias por la madurez que estoy alcanzando. No es solo edad; es perspectiva. Cosas que antes me devastaban hoy las veo con más calma. Personas que antes me intimidaban hoy las miro con más compasión. Decisiones que antes tomaba por impulso hoy las peso con más sabiduría. Gracias por el proceso, aunque sea lento. Que mi madurez no me haga rígida, sino más tierna, más patiente, más sabia. En el nombre de Jesús. Amén."
  },
  {
    "id": 85,
    "slug": "por-mi-vida-como-madre-soltera",
    "title": "Por mi vida como madre soltera",
    "topic": "Etapas de la mujer",
    "lifeStage": "Adulta",
    "bibleReference": "Salmo 103:2",
    "body": "Padre de los hogares, gracias por mi vida como madre soltera. No fue el plan que imaginé, pero es el lugar donde Tú me has sostenido. Gracias por la fortaleza que no sabía que tenía, por la provisión que llegó cuando no veía cómo, y por mis hijos que me dan razón para seguir. Bendice mi hogar, suple lo que falta, y ayúdame a criar hijos que te conozcan. Que nadie me mire con lástima: soy bendecida. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 86,
    "slug": "por-mi-vida-como-mujer-sin-hijos",
    "title": "Por mi vida como mujer sin hijos",
    "topic": "Etapas de la mujer",
    "lifeStage": "Adulta",
    "bibleReference": "Filipenses 4:6",
    "body": "Señor, gracias por mi vida como mujer sin hijos. No por falta de deseo en algunos casos, no por decisión en otros, pero sea cual sea la razón, Tú me has dado una vida con propósito fuera de la maternidad. Gracias por los hijos espirituales que has puesto en mi camino, por los corazones que puedo influir, por el legado que no requiere sangre. Que mi vida sea fértil en amor, en servicio y en fe. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 87,
    "slug": "por-mi-solteria-y-mi-libertad",
    "title": "Por mi soltería y mi libertad",
    "topic": "Etapas de la mujer",
    "lifeStage": "Joven",
    "bibleReference": "Salmo 136:1",
    "body": "Padre, gracias por mi soltería. No la veo como espera de algo mejor, sino como temporada con su propia belleza. Gracias por la libertad que tengo para servir, para viajar, para conocerme, para invertir en relaciones sin la presión de un compromiso. Que no viva esta etapa esperando que pase, sino aprovechándola con intention. Si llega el matrimonio, quiero llegar entera; si no llega, quiero vivir plena. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 88,
    "slug": "por-mi-etapa-de-nido-vacio",
    "title": "Por mi etapa de nido vacío",
    "topic": "Etapas de la mujer",
    "lifeStage": "Adulta",
    "bibleReference": "Colosenses 3:15",
    "body": "Señor, gracias por mi etapa de nido vacío. Duelen los cuartos silenciosos, pero también agradezco lo que significa: mis hijos crecieron, se independizaron, construyen su propia vida. Gracias por los años de crianza y por esta nueva temporada de relación adulta con ellos. Que el silencio no me hundal, sino que me invite a redescubrir propósito, hobbies, amistades y mi relación contigo sin la intensidad de antes. En el nombre de Jesús. Amén."
  },
  {
    "id": 89,
    "slug": "por-los-anos-de-mi-vejez",
    "title": "Por los años de mi vejez",
    "topic": "Etapas de la mujer",
    "lifeStage": "Adulta mayor",
    "bibleReference": "Salmo 9:1",
    "body": "Dios de los días largos, gracias por los años de mi vejez. No todos llegan a esta etapa, y yo lo reconozco como privilegio. Gracias por la memoria que conserva lo importante, por el cuerpo que sigue funcionando aunque más lento y por el corazón que ha acumulado tanto amor. Que mis últimos años sean de paz, de testimonio y de legado. Que transmita a los jóvenes lo que solo los años enseñan. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 90,
    "slug": "por-descubrir-un-nuevo-proposito",
    "title": "Por descubrir un nuevo propósito",
    "topic": "Etapas de la mujer",
    "lifeStage": "Adulta mayor",
    "bibleReference": "Salmo 100:4",
    "body": "Padre de los nuevos comienzos, gracias por descubrir un nuevo propósito cuando pensaba que mi vida ya no tenía uno. Tú no me hiciste para una sola temporada; cada etapa trae su llamada. Gracias por la energía que renueva cuando me entrego a algo más grande que yo. Que este nuevo propósito sea de bendición para otros y de gloria para Ti. No es tarde para empezar lo que Tú me llamas a hacer. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 91,
    "slug": "por-la-paz-que-viene-de-dios",
    "title": "Por la paz que viene de Dios",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 118:24",
    "body": "Príncipe de paz, gracias por la paz que solo Tú puedes dar. No es la ausencia de problemas; es la presencia de Tu calma en medio de ellos. Cuando todo alrededor se agita, mi interior se aquieta porque Tú estás ahí. Gracias por las veces que Tu paz me guardó de tomar decisiones impulsivas, de decir palabras que lastimarían, de rendirme cuando podía seguir. Que Tu paz sea mi brújula y mi refugio. En el nombre de Jesús. Amén."
  },
  {
    "id": 92,
    "slug": "por-la-alegria-de-compartir",
    "title": "Por la alegría de compartir",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Santiago 1:17",
    "body": "Señor, gracias por la alegría de compartir. Hay algo profundamente satisfactorio en dar, en ver a otro sonreír porque yo le di algo, en sentir que mi vida toca la de alguien para bien. Esta alegría no la da el acumular sino el repartir. Enséñame a dar sin esperar reconocimiento, a compartir sin condiciones, a vivir con manos abiertas. Que la alegría de dar sea mi testimonio de un corazón agradecido. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 93,
    "slug": "por-las-promesas-de-dios",
    "title": "Por las promesas de Dios",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Lamentaciones 3:22-23",
    "body": "Dios fiel a Tus promesas, gracias por cada palabra tuya que se ha cumplido en mi vida. Las que ya vi realizarse me dan confianza para esperar las que aún no llegan. Tú no olvidas lo que prometiste; Tu tiempo es perfecto aunque no coincida con mi urgencia. Que mis pies se apoyen en Tus promesas como en roca sólida, y que mi boca las proclame como testimonio de Tu fidelidad. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 94,
    "slug": "por-la-esperanza-de-la-vida-eterna",
    "title": "Por la esperanza de la vida eterna",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "1 Tesalonicenses 5:18",
    "body": "Padre eterno, gracias por la esperanza de la vida eterna. Esta vida tiene belleza pero también dolor, y la certeza de que no termina aquí cambia la manera en que vivo. Gracias por Jesucristo, quien abrió el camino al Padre y conquistó la muerte. Que esta esperanza no sea escape del presente sino fuerza para vivirlo con purpose. Que mis ojos vean más allá de lo visible y mi corazón anhelo el hogar definitivo. En el nombre de Jesús. Amén."
  },
  {
    "id": 95,
    "slug": "por-las-personas-que-sirven-con-compasion",
    "title": "Por las personas que sirven con compasión",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 103:2",
    "body": "Señor, gracias por las personas que sirven con compasión. Las que cuidan a los enfermos, las que acogen a los huérfanos, las que alimentan a los hambrientos, las que acompañan a los solos. Su servicio es Tu corazón extendido en el mundo. Bendícelas, dales fuerzas cuando se agoten y recuérdalos cuando se sientan invisibles. Que yo sea una de ellas, que mi vida deje huellas de compasión donde quiera que vaya. En el nombre de Yeshúa. Amén."
  },
  {
    "id": 96,
    "slug": "por-la-justicia-que-anhelo",
    "title": "Por la justicia que anhelo",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Filipenses 4:6",
    "body": "Dios de justicia, gracias por poner en mi corazón un anhelo por lo justo. Me duele la opresión, me indigna la desigualdad, me afecta el sufrimiento ajeno. Gracias por ese dolor que no es debilidad sino sensibilidad a lo que también Te duele a Ti. Ayúdame a convertir el anhelo en acción, la indignación en servicio, la queja en propuesta. Que mi vida sea semilla de justicia en mi entorno. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 97,
    "slug": "por-el-consuelo-en-medio-del-duelo",
    "title": "Por el consuelo en medio del duelo",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 136:1",
    "body": "Padre de todo consuelo, gracias por sostenerme en el duelo. Perder a quien amo es uno de los dolores más profundos, pero Tú no me dejaste sola en él. Gracias por las personas que me acompañaron, por las Escrituras que me dieron esperanza y por Tu Espíritu que me abrazó cuando no había palabras. El dolor sigue, pero el consuelo también. Que mi experiencia de consuelo me habilite para consolar a otros que atraviesan lo mismo. En el nombre de Cristo Jesús. Amén."
  },
  {
    "id": 98,
    "slug": "por-las-bendiciones-que-aun-no-reconozco",
    "title": "Por las bendiciones que aún no reconozco",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Colosenses 3:15",
    "body": "Señor, gracias por las bendiciones que aún no reconozco. Sé que hay regalos Tuyos en mi vida que no he identificado, puertas que abriste sin que yo lo viera, peligros de los que me libraste sin que me enterara. Hoy te agradezco por lo que no veo pero confío que está. Que mi gratitud no dependa de mi percepción, sino de mi confianza en que Tú eres bueno siempre, incluso cuando no lo entiendo. En el nombre de Jesús. Amén."
  },
  {
    "id": 99,
    "slug": "por-la-posibilidad-de-cambiar",
    "title": "Por la posibilidad de cambiar",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 9:1",
    "body": "Dios de la transformación, gracias por la posibilidad de cambiar. No estoy atrapada en quien fui; Tu gracia me permite ser nueva. Gracias por los hábitos que logré modificar, por los patrones de pensamiento que renovaste y por el carácter que estás puliendo. El cambio es lento y a veces doloroso, pero es posible porque Tú estás en mí. Que nunca me conforme con mi estado actual, sino que siga creciendo hacia la imagen de Cristo. En el nombre de Jesucristo. Amén."
  },
  {
    "id": 100,
    "slug": "por-todo-lo-que-dios-es-mas-alla-de-lo-que-me-da",
    "title": "Por todo lo que Dios es, más allá de lo que me da",
    "topic": "Alabanza y esperanza",
    "lifeStage": "Todas las edades",
    "bibleReference": "Salmo 100:4",
    "body": "Padre Celestial, gracias por todo lo que Tú eres, más allá de lo que me das. Si no me dieras nada más, ya sería suficiente porque me diste a Tu Hijo y con Él me diste todo. Te adoro por Tu santidad, Tu justicia, Tu misericordia, Tu paciencia, Tu fidelidad. No te busco solo por Tus dones; te busco por quién eres. Que mi gratitud no sea transacción sino adoración, no petición sino reconocimiento de que Tú eres Dios y yo soy Tu hija, amada y redimida. En el nombre de Yeshúa. Amén."
  }
];

export const agradeceTopics: string[] = [...new Set(agradecePrayers.map(p => p.topic))].sort();

export const agradeceLifeStages: string[] = [...new Set(agradecePrayers.map(p => p.lifeStage))].sort();

export function getAgradecePrayerBySlug(slug: string): AgradecePrayer | undefined {
  return agradecePrayers.find(p => p.slug === slug);
}
