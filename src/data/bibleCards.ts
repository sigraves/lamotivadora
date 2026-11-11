export type CardAnswer = {
  id: string;
  label: string;
  reflection: string;
  bibleReference: string;
  bibleText: string;
};

export type CardScenario = {
  id: string;
  situation: string;
  context: string;
  answers: CardAnswer[];
};

export type BibleCardExperience = {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  accentFrom: string;
  accentTo: string;
  accentRing: string;
  accentButton: string;
  accentGlow: string;
  scenarios: CardScenario[];
};

export const bibleCardExperiences: Record<string, BibleCardExperience> = {
  ora: {
    id: 'ora',
    title: '¿Qué Hay en Tu Corazón?',
    subtitle: 'Ora Mujer',
    intro:
      'Te presentamos tres situaciones reales sobre la oración, la fe y la confianza en Dios. Lee cada caso, elige lo que harías y descubre una reflexión bíblica para tu corazón.',
    accentFrom: 'from-rose-500',
    accentTo: 'to-rose-700',
    accentRing: 'ring-rose-400',
    accentButton: 'from-rose-500 to-rose-700',
    accentGlow: 'shadow-rose-500/30',
    scenarios: [
      {
        id: 'ora-1',
        situation: 'Llevas semanas orando por una situación que no cambia. Una amiga te dice: "Tal vez Dios no te está escuchando". ¿Qué haces?',
        context: 'La espera puede hacerte dudar de que Dios escucha tu oración.',
        answers: [
          {
            id: 'a',
            label: 'Sigo orando con paciencia, confiando en que el tiempo de Dios no es el mío',
            reflection:
              'La espera no es sinónimo de silencio divino. Dios escucha cada oración, pero Su respuesta llega en el tiempo perfecto. Continuar orando no es terquedad; es fe activa. La persistencia fortalece tu relación con Él y demuestra que confías en Su soberanía más que en tus propios plazos.',
            bibleReference: 'Lucas 18:1 (NVI)',
            bibleText: 'Jesús les contó a sus discípulos una parábola para mostrarles que debían orar siempre y no darse por vencidos.',
          },
          {
            id: 'b',
            label: 'Dejo de orar porque siento que no sirve de nada',
            reflection:
              'El desánimo es humano, pero rendirse en la oración cierra el canal de comunicación con quien puede sostener tu corazón. Dios nunca dijo que respondería de inmediato; sí prometió estar cerca. En lugar de abandonar la conversación, lleva a Dios tu frustración. Los salmistas lo hicieron una y otra vez.',
            bibleReference: 'Salmo 13:1-2 (NVI)',
            bibleText: '¿Hasta cuándo, Señor? ¿Me olvidarás para siempre? ¿Hasta cuándo esconderás tu rostro de mí? ¿Hasta cuándo habré de tener angustias en el alma, penas en el corazón día y noche?',
          },
          {
            id: 'c',
            label: 'Busco en la Biblia si hay algo que me impide recibir respuesta',
            reflection:
              'Examinar el corazón ante Dios no es falta de fe; es madurez espiritual. A veces hay actitudes —el rencor, la falta de perdón, el orgullo— que estorban nuestra oración. No se trata de culparte, sino de permitir que el Espíritu te muestre si hay algo que ajustar. La oración es un diálogo, y Dios puede usar Su Palabra para guiarte.',
            bibleReference: 'Salmo 66:18 (NVI)',
            bibleText: 'Si en mi corazón hubiera yo abrigado maldad, el Señor no me habría escuchado.',
          },
        ],
      },
      {
        id: 'ora-2',
        situation: 'Tienes que tomar una decisión importante para tu familia. No sabes cuál es la mejor opción. ¿Cómo buscas la dirección de Dios?',
        context: 'La voluntad de Dios no siempre es obvia; requiere discernimiento.',
        answers: [
          {
            id: 'a',
            label: 'Oro pidiendo sabiduría y luego busco confirmación en Su Palabra y en consejos piadosos',
            reflection:
              'Dios concede sabiduría a quien la pide con fe, y esa sabiduría se confirma en la lectura de la Biblia y en el consejo de personas maduras en la fe. La dirección de Dios rara vez viene como una voz audible; viene como una convicción interior respaldada por Su Palabra y por la comunidad de fe.',
            bibleReference: 'Santiago 1:5 (NVI)',
            bibleText: 'Si a alguno de ustedes le falta sabiduría, pídasela a Dios, y él se la dará, pues Dios da a todos generosamente sin menospreciar a nadie.',
          },
          {
            id: 'b',
            label: 'Espero una señal milagrosa antes de decidir cualquier cosa',
            reflection:
              'Dios puede dar señales, pero no es Su método habitual. Exigir una señal puede ser una forma de evitar la responsabilidad de decidir con sabiduría. Dios te dio mente, comunidad y Su Palabra. La fe no es pasividad; es confianza activa que ora, busca y decide con lo que ya tienes.',
            bibleReference: 'Mateo 16:4 (NVI)',
            bibleText: 'Una generación malvada y adúltera pide una señal miraculous. Pero no se le dará más señal que la de Jonás.',
          },
          {
            id: 'c',
            label: 'Decido lo que me parezca más lógico y le pido a Dios que lo bendiga después',
            reflection:
              'No hay nada de malo en usar la lógica, pero cuando Dios queda al final del proceso —como un sello de aprobación— se invierte el orden. La invitación bíblica es buscar primero Su reino y Su justicia, y dejar que Él guíe la decisión. La lógica es herramienta, no autoridad final.',
            bibleReference: 'Proverbios 3:5-6 (NVI)',
            bibleText: 'Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas.',
          },
        ],
      },
      {
        id: 'ora-3',
        situation: 'Estás pasando por un momento difícil y sientes que tus oraciones son vacías, repetitivas. ¿Qué haces?',
        context: 'La rutina en la oración puede apagar la conexión con Dios.',
        answers: [
          {
            id: 'a',
            label: 'Cambio mi forma de orar: hablo con Dios como a un amigo cercano, con honestidad',
            reflection:
              'Dios no busca frases perfectas; busca corazones sinceros. La oración es una conversación, no una fórmula. Cuando te vuelves auténtica —con tus dudas, tus miedos, tus preguntas— la oración cobra vida. Los salmos son ejemplo de personas que le dijeron a Dios exactamente lo que sentían.',
            bibleReference: 'Salmo 62:8 (NVI)',
            bibleText: 'Confía en Dios en todo tiempo, pueblo mío; en él refugia tu corazón; derrama ante él tu corazón, que Dios es nuestro refugio.',
          },
          {
            id: 'b',
            label: 'Dejo de orar un tiempo hasta sentirme más inspirada',
            reflection:
              'El sentimiento es un mal amo para la vida espiritual. Esperar inspiración para orar es como esperar ganas para respirar. La oración es disciplina antes de ser emoción. A veces los momentos más secos son los más transformadores, porque en ellos oras por fe, no por feeling.',
            bibleReference: 'Romanos 12:12 (NVI)',
            bibleText: 'Alégrense en la esperanza, muestren paciencia en el sufrimiento, perseveren en la oración.',
          },
          {
            id: 'c',
            label: 'Busco orar con música de adoración o leer salmos que expresen lo que siento',
            reflection:
              'La música y las Escrituras son regalos que Dios nos dio precisamente para esos momentos en que las palabras propias no alcanzan. Cuando no sabes qué orar, deja que un salmo ore por ti, o que una canción exprese lo que tu corazón no puede articular. El Espíritu intercede cuando no sabemos qué pedir.',
            bibleReference: 'Romanos 8:26 (NVI)',
            bibleText: 'De igual manera, el Espíritu nos ayuda en nuestra debilidad, pues no sabemos qué orar, pero el Espíritu mismo intercede por nosotros con gemidos que no pueden expresarse con palabras.',
          },
        ],
      },
    ],
  },

  clama: {
    id: 'clama',
    title: '¿Qué Haces Cuando Ya No Puedes Más?',
    subtitle: 'Clama Mujer',
    intro:
      'Tres situaciones sobre la angustia, el sufrimiento y la perseverancia. Elige tu respuesta y descubre lo que la Palabra de Dios dice sobre clamar a Él en medio de la tormenta.',
    accentFrom: 'from-amber-500',
    accentTo: 'to-orange-700',
    accentRing: 'ring-amber-400',
    accentButton: 'from-amber-500 to-orange-700',
    accentGlow: 'shadow-amber-500/30',
    scenarios: [
      {
        id: 'clama-1',
        situation: 'Has perdido a alguien que amas profundamente. El dolor es tan grande que sientes que no puedes seguir. ¿Qué haces?',
        context: 'El duelo es uno de los momentos más difíciles de la vida.',
        answers: [
          {
            id: 'a',
            label: 'Clamo a Dios con honestidad, llorando y entregándole mi dolor sin esconder nada',
            reflection:
              'Dios no te pide que seas fuerte; te pide que seas honesta. Clamar con lágrimas no es falta de fe; es fe en su forma más cruda. Jesús mismo lloró la muerte de su amigo Lázaro. Tu dolor importa a Dios, y Él se acerca a los quebrantados de corazón.',
            bibleReference: 'Salmo 34:18 (NVI)',
            bibleText: 'El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.',
          },
          {
            id: 'b',
            label: 'Intento no sentir nada para no sufrir más',
            reflection:
              'Anestesiar el dolor puede parecer una salida, pero no lo es. El dolor no procesado no desaparece; se esconde y afecta el cuerpo, las relaciones y la fe. Dios no te llama a enterrar lo que sientes, sino a llevarlo a Él. Llorar es parte de sanar, y sanar es un proceso que Él acompaña.',
            bibleReference: 'Eclesiastés 3:4 (NVI)',
            bibleText: 'Tiempo de llorar, y tiempo de reír; tiempo de hacer duelo, y tiempo de bailar.',
          },
          {
            id: 'c',
            label: 'Busco apoyo en mi comunidad de fe y permito que oren por mí',
            reflection:
              'Dios diseñó la vida cristiana para vivirse en comunidad. Cuando tu fe tiembla, la fe de otros puede sostenerte. No es debilidad pedir oración; es sabiduría. Clamar a Dios en solitario es válido, pero clamar junto a otros amplifica la esperanza y te recuerda que no estás sola.',
            bibleReference: 'Santiago 5:14-15 (NVI)',
            bibleText: '¿Está enfermo alguno de ustedes? Haga llamar a los ancianos de la iglesia para que oren por él y lo unjan con aceite en el nombre del Señor. La oración de fe sanará al enfermo, y el Señor lo levantará.',
          },
        ],
      },
      {
        id: 'clama-2',
        situation: 'Estás en una situación de angustia económica que parece no tener salida. Ya no sabes cómo proveer para tu familia. ¿Qué haces?',
        context: 'La provisión es una necesidad real, y la angustia económica puede abrumar el alma.',
        answers: [
          {
            id: 'a',
            label: 'Clamo a Dios pidiéndole provisión y, al mismo tiempo, busco activamente soluciones',
            reflection:
              'La fe y la acción no se contradicen. Clamar a Dios por provisión es confiar en que Él es tu proveedor, pero esa confianza no te exime de buscar, trabajar y gestionar con sabiduría. Dios provee a través de puertas que Él abre, personas que Él mueve y oportunidades que Él trae. Ora y actúa.',
            bibleReference: 'Filipenses 4:19 (NVI)',
            bibleText: 'Mi Dios, pues, les proveerá de todo lo que necesiten, conforme a las gloriosas riquezas que tiene en Cristo Jesús.',
          },
          {
            id: 'b',
            label: 'Me quejo constantemente con todos sobre mi situación',
            reflection:
              'Es natural desahogarse, pero cuando la queja se vuelve constante, alimenta la ansiedad y aleja la esperanza. El pueblo de Israel se quejó en el desierto y prolongó lo que pudo ser un viaje corto. Clamar a Dios es distinto de quejarse de Dios: clamar busca Su ayuda; quejarse cuestiona Su bondad.',
            bibleReference: 'Filipenses 2:14 (NVI)',
            bibleText: 'Hagan todo sin quejas ni contiendas.',
          },
          {
            id: 'c',
            label: 'Me avergüenzo de mi situación y no le cuento a nadie, ni a Dios',
            reflection:
              'La vergüenza te aísla, y el aislamiento agrava la angustia. Dios no se avergüenza de ti ni de tu necesidad. Jesús invitó a los cansados y cargados a acercarse. Tu situación económica no define tu valor. Clamar es reconocer que necesitas ayuda, y eso es el primer paso hacia la provisión.',
            bibleReference: 'Hebreos 4:16 (NVI)',
            bibleText: 'Así que acerquémonos confiadamente al trono de la gracia, para recibir misericordia y hallar la gracia que nos ayude en el momento que la necesitemos.',
          },
        ],
      },
      {
        id: 'clama-3',
        situation: 'Sientes que tu fe se está apagando. Las circunstancias de la vida te han desgastado y ya no tienes las mismas ganas de seguir. ¿Qué haces?',
        context: 'El desgaste espiritual es real y no significa que hayas perdido tu fe.',
        answers: [
          {
            id: 'a',
            label: 'Clamo a Dios pidiéndole que renueve mi fe y no suelto Su mano',
            reflection:
              'La fe no es una llama que siempre arde igual; hay temporadas altas y bajas. Lo importante no es la intensidad del momento, sino la dirección de tu corazón. Clamar por renovación es ya un acto de fe. Dios responde al que persevera, y a veces la victoria es simplemente no soltar Su mano cuando todo te empuja a soltarla.',
            bibleReference: 'Lucas 18:7-8 (NVI)',
            bibleText: '¿Acaso Dios no hará justicia a sus escogidos, que claman a él día y noche? ¿Se tardará mucho en responderles? Les digo que sí les hará justicia, y sin demora.',
          },
          {
            id: 'b',
            label: 'Me alejo de todo lo relacionado con Dios hasta sentirme mejor',
            reflection:
              'Alejarse cuando se está desgastada es como apagar la antorcha cuando más se necesita luz. La distancia de Dios no restaura la fe; la alimenta el cansancio espiritual. El salmista experimentó esto y encontró que recordar las bendiciones pasadas reaviva la esperanza. No te alejes; acércate, incluso si es con lo último de tus fuerzas.',
            bibleReference: 'Salmo 42:11 (NVI)',
            bibleText: '¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Pon tu esperanza en Dios, que aún lo alabaré, ¡salvación mía y Dios mío!',
          },
          {
            id: 'c',
            label: 'Busco a alguien de fe que me acompañe y me recuerde quién es Dios',
            reflection:
              'Cuando tu fe está débil, la fe de otros puede cargarte. No fue casualidad que Jesús llevara a tres discípulos en los momentos más difíciles. La comunidad de fe existe para sostener al que cae, alentar al que duda y recordar al que olvida. Clamar a veces significa clamar junto a otros que claman contigo.',
            bibleReference: 'Eclesiastés 4:9-10 (NVI)',
            bibleText: 'Mejores son dos que uno, porque reciben mejor recompensa por su trabajo. Si uno cae, el otro le levanta. Pero ¡ay del que cae solo y no tiene quien lo levante!',
          },
        ],
      },
    ],
  },

  perdona: {
    id: 'perdona',
    title: '¿Perdonarías Tú?',
    subtitle: 'Perdona Mujer',
    intro:
      'Tres situaciones sobre traiciones, heridas emocionales y reconciliación. Elige lo que harías y descubre una reflexión bíblica sobre el perdón y los límites saludables.',
    accentFrom: 'from-sky-500',
    accentTo: 'to-indigo-700',
    accentRing: 'ring-sky-400',
    accentButton: 'from-sky-500 to-indigo-700',
    accentGlow: 'shadow-sky-500/30',
    scenarios: [
      {
        id: 'perdona-1',
        situation: 'Una persona cercana te traicionó profundamente. Te pide perdón, pero has descubierto que ya lo había hecho antes y prometió cambiar sin hacerlo. ¿Qué haces?',
        context: 'Perdonar no es lo mismo que confiar automáticamente.',
        answers: [
          {
            id: 'a',
            label: 'Perdono con el corazón, pero establezco límites claros para no seguir expuesta',
            reflection:
              'Perdonar es una decisión del corazón; confiar es un proceso que requiere cambio demostrado. Puedes perdonar a alguien y al mismo tiempo proteger tu vida. Los límites no son falta de perdón; son sabiduría. Dios nos enseña a perdonar setenta veces siete, pero también nos llama a ser prudentes. Perdonar libera tu alma; los límites protegen tu paz.',
            bibleReference: 'Mateo 18:21-22 (NVI)',
            bibleText: 'Pedro se acercó a Jesús y le preguntó: «Señor, ¿cuántas veces tengo que perdonar a mi hermano que peca contra mí? ¿Hasta siete veces?» Jesús le contestó: «No te digo hasta siete veces, sino hasta setenta y siete veces».',
          },
          {
            id: 'b',
            label: 'No perdono porque no lo merece después de hacerlo tantas veces',
            reflection:
              'El perdón no se concede porque la persona lo merezca; se concede porque tu corazón necesita liberarse. Retener el rencor no castiga al ofensor; te castiga a ti. Perdonar no significa que lo que hizo estuvo bien, ni que debas volver a exponerte. Significa que entregas la justicia a Dios y sueltas el peso que no te corresponde cargar.',
            bibleReference: 'Colosenses 3:13 (NVI)',
            bibleText: 'De modo que se toleren unos a otros y se perdonen si alguno tiene queja contra otro, así como el Señor los perdonó, también ustedes perdonen.',
          },
          {
            id: 'c',
            label: 'Lo perdono y vuelvo a confiar inmediatamente como si nada hubiera pasado',
            reflection:
              'El perdón es inmediato, pero la confianza se reconstruye con tiempo y evidencia. Volver a confiar sin cambios reales puede exponerte a nuevas heridas. Dios perdona, pero también llama al arrepentimiento genuino, que se demuestra con frutos. Amar a alguien incluye desear su bien, y parte de ese bien es no enable patrones destructivos.',
            bibleReference: 'Lucas 3:8 (NVI)',
            bibleText: 'Produzcan frutos que muestren arrepentimiento.',
          },
        ],
      },
      {
        id: 'perdona-2',
        situation: 'Alguien te hirió en el pasado y nunca te pidió perdón. Sientes que el resentimiento te consume. ¿Qué haces?',
        context: 'El perdón no requiere que la otra persona lo pida.',
        answers: [
          {
            id: 'a',
            label: 'Perdono aunque no me lo haya pedido, para liberar mi corazón del rencor',
            reflection:
              'El perdón no depende del arrepentimiento del otro; depende de tu decisión de soltar. Esperar a que te pidan perdón para perdonar deja tu paz en manos de quien te lastimó. Perdonar sin que te lo pidan no es minimizar la ofensa; es elegir no dejar que el pasado siga controlando tu presente. Es un acto de libertad.',
            bibleReference: 'Marcos 11:25 (NVI)',
            bibleText: 'Y cuando estén orando, si tienen algo contra alguien, pergrunen, para que también su Padre celestial les perdone a ustedes sus ofensas.',
          },
          {
            id: 'b',
            label: 'Espero a que me pida perdón para poder perdonarlo',
            reflection:
              'Es natural querer escuchar "perdóname", pero poner tu sanidad en pausa hasta que eso ocurre te deja prisionera del otro. El resentimiento mientras tanto sigue envenenando tu corazón. Jesús perdonó desde la cruz a quienes no lo pedían. Tu perdón no borra la ofensa; libera tu corazón para sanar.',
            bibleReference: 'Romanos 12:18 (NVI)',
            bibleText: 'Si es posible, y en cuanto dependa de ustedes, vivan en paz con todos.',
          },
          {
            id: 'c',
            label: 'Busco confrontar a esa persona para que reconozca lo que hizo',
            reflection:
              'La confrontación puede ser sana cuando se hace con el propósito de restaurar, no de acusar. Si la persona está dispuesta a escuchar, puede ser el inicio de la reconciliación. Pero si no lo está, la confrontación no debe ser condición para tu perdón. Habla la verdad con amor, y cualquiera que sea la respuesta, libera tu corazón.',
            bibleReference: 'Efesios 4:15 (NVI)',
            bibleText: 'Más bien, al vivir la verdad con amor, creceremos hasta ser en todo como aquel que es la cabeza, es decir, Cristo.',
          },
        ],
      },
      {
        id: 'perdona-3',
        situation: 'Creciste en un hogar donde te lastimaron repetidamente. Hoy como adulta, sabes que debes perdonar, pero el dolor es muy profundo. ¿Qué haces?',
        context: 'Las heridas de la infancia son profundas y el perdón no las minimiza.',
        answers: [
          {
            id: 'a',
            label: 'Le pido a Dios que me ayude a perdonar paso a paso, reconociendo que es un proceso',
            reflection:
              'El perdón de heridas profundas no es un evento; es un camino. No es debilidad necesitar tiempo; es honestidad. Puedes empezar pidiendo a Dios la disposición de perdonar, aunque aún no logres hacerlo completamente. Él conoce tu dolor y no te apura. El perdón es una semilla que Él riega mientras tú la cultivas.',
            bibleReference: 'Salmo 147:3 (NVI)',
            bibleText: 'Él sana a los deprimidos, y les cubre las heridas con vendas.',
          },
          {
            id: 'b',
            label: 'Decido que no puedo perdonar algo tan grande',
            reflection:
              'Es comprensible que el dolor parezca más grande que tu capacidad de perdonar. Pero el perdón no nace de tus fuerzas; nace de la gracia de Dios en ti. Jesús perdonó desde la cruz, en medio de Su propio sufrimiento. No tienes que perdonar con tus solas fuerzas; puedes pedirle a Él que perdone a través de ti.',
            bibleReference: 'Filipenses 4:13 (NVI)',
            bibleText: 'Todo lo puedo en Cristo que me fortalece.',
          },
          {
            id: 'c',
            label: 'Busco ayuda profesional y espiritual para procesar el dolor antes de forzar el perdón',
            reflection:
              'Buscar ayuda no es falta de fe; es sabiduría. Las heridas profundas necesitan cuidado integral: emocional, espiritual y a veces profesional. Forzar un perdón superficial sin procesar el dolor puede convertirlo en negación. Dios trabaja a través de terapeutas, consejeros y comunidad. Permítete sanar mientras aprendes a perdonar.',
            bibleReference: 'Proverbios 15:22 (NVI)',
            bibleText: 'Los planes fracasan por falta de consejo, pero se llevan a cabo con muchos consejeros.',
          },
        ],
      },
    ],
  },

  agradece: {
    id: 'agradece',
    title: '¿Puedes Encontrar la Bendición?',
    subtitle: 'Agradece Mujer',
    intro:
      'Tres situaciones sobre la gratitud, las bendiciones y la comparación. Elige tu respuesta y descubre una reflexión bíblica sobre cómo reconocer la fidelidad de Dios en cada temporada.',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-700',
    accentRing: 'ring-emerald-400',
    accentButton: 'from-emerald-500 to-teal-700',
    accentGlow: 'shadow-emerald-500/30',
    scenarios: [
      {
        id: 'agradece-1',
        situation: 'Ves en redes sociales que personas de tu edad tienen logros que tú aún no has alcanzado: casas, viajes, títulos. Sientes envidia. ¿Qué haces?',
        context: 'La comparación puede robar la gratitud y la paz.',
        answers: [
          {
            id: 'a',
            label: 'Reconozco lo que Dios ya me ha dado y le doy gracias por mi propia historia',
            reflection:
              'La comparación es el ladrón de la gratitud. Cuando miras lo que otros tienen, pierdes de vista lo que ya recibiste. Cada vida tiene un tiempo y un propósito distinto. Dios te ha bendecido de maneras que las redes sociales no muestran. La gratitud no niega los deseos; los reordena, recordándote que ya tienes razones para agradecer hoy.',
            bibleReference: '1 Tesalonicenses 5:18 (NVI)',
            bibleText: 'Den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús.',
          },
          {
            id: 'b',
            label: 'Sigo consumiendo ese contenido, alimentando la envidia',
            reflection:
              'La envidia no se apaga con más comparación; se alimenta de ella. Las redes sociales muestran los mejores momentos de otros, no la realidad completa. Alimentarse de lo que otros tienen es morir de hambre en un banquete de tus propias bendiciones. Dios te invita a abrir los ojos a tu propia mesa.',
            bibleReference: 'Proverbios 14:30 (NVI)',
            bibleText: 'El corazón tranquilo da vida al cuerpo, pero la envidia pudre los huesos.',
          },
          {
            id: 'c',
            label: 'Me alejo un tiempo de las redes y enfoco mi atención en bendecir a otros',
            reflection:
              'El distracción digital puede nublar la gratitud. Alejarte un tiempo no es huir; es cuidar tu alma. Y cuando enfocas tu atención en bendecir a otros, descubres que tienes mucho que dar. La gratitud se multiplica cuando se comparte. Dios te bendice para que seas bendición, y eso es motivo de agradecimiento.',
            bibleReference: 'Hechos 20:35 (NVI)',
            bibleText: 'En todo les he mostrado que con este trabajo duro debemos ayudar a los débiles, recordando las palabras del Señor Jesús: «Hay más dicha en dar que en recibir».',
          },
        ],
      },
      {
        id: 'agradece-2',
        situation: 'Estás atravesando una temporada difícil. Alguien te dice: "Tienes que dar gracias en todo". Sientes que es imposible agradecer en medio del dolor. ¿Qué haces?',
        context: 'La gratitud en el dolor es uno de los mayores desafíos de la fe.',
        answers: [
          {
            id: 'a',
            label: 'Busco algo —aunque sea pequeño— por lo que pueda dar gracias hoy',
            reflection:
              'La gratitud en el dolor no es negar el sufrimiento; es encontrar luz en medio de la oscuridad. No tienes que agradecer por la situación, pero puedes agradecer en la situación. Empezar pequeño —por un amigo, un abrazo, un día más— abre el corazón a la presencia de Dios. La gratitud no borra el dolor, pero le da un lugar donde sostenerse.',
            bibleReference: 'Salmo 28:7 (NVI)',
            bibleText: 'El Señor es mi fuerza y mi escudo; mi corazón en él confía. A él le doy gracias, y mi corazón se regocija.',
          },
          {
            id: 'b',
            label: 'Siento que es hipócrita dar gracias cuando estoy sufriendo',
            reflection:
              'Es válido sentir que la gratitud es difícil en medio del dolor. Dios no te pide una sonrisa forzada; te invita a una honestidad sincera. Los salmos están llenos de lamentos que terminan en confianza. La gratitud no es fingir que todo está bien; es reconocer que, aunque todo esté mal, Dios sigue siendo bueno.',
            bibleReference: 'Salmo 42:5 (NVI)',
            bibleText: '¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Pon tu esperanza en Dios, que aún lo alabaré, ¡salvación mía y Dios mío!',
          },
          {
            id: 'c',
            label: 'Le pido a Dios que me muestre qué puedo aprender de esta temporada',
            reflection:
              'Las temporadas difíciles rara vez son desperdiciadas en las manos de Dios. Pedirle que te muestre lo que puedes aprender no es buscarle justificación al dolor; es buscarle propósito. La gratitud por lo que se aprende en el sufrimiento es una de las más profundas, porque reconoce que Dios usa incluso lo difícil para formarte.',
            bibleReference: 'Romanos 8:28 (NVI)',
            bibleText: 'Y sabemos que en todas las cosas interviene Dios para bien de quienes lo aman, que han sido llamados según su propósito.',
          },
        ],
      },
      {
        id: 'agradece-3',
        situation: 'Recibiste una bendición que hace años esperabas. Después de unos días, la alegría se desvanece y empiezas a pensar en lo que te falta. ¿Qué haces?',
        context: 'La gratitud se desgasta si no se cultiva intencionalmente.',
        answers: [
          {
            id: 'a',
            label: 'Hago una pausa para recordar y agradecer todo el camino que Dios me llevó hasta aquí',
            reflection:
              'La gratitud necesita memoria. Cuando olvidas lo que Dios ha hecho, la siguiente bendición parece insuficiente. Recordar el camino —las oraciones respondidas, las puertas abiertas, las lágrimas secadas— renueva la gratitud. Dios te invita a levantar piedras de memorial, hitos que te recuerden Su fidelidad cuando la costumbre quiera apagarla.',
            bibleReference: 'Salmo 103:2 (NVI)',
            bibleText: 'Alabe el alma mía al Señor, y no olvide ninguno de sus beneficios.',
          },
          {
            id: 'b',
            label: 'Busco la siguiente cosa que quiero lograr para sentirme bien otra vez',
            reflection:
              'Vivir saltando de un deseo al siguiente es como beber agua salada: cuanto más bebes, más sed tienes. La gratitud no se encuentra en el próximo logro, sino en aprender a disfrutar lo que ya llegó. Dios te da bendiciones para que las disfrutes, no para que las uses como escalera hacia la siguiente insatisfacción.',
            bibleReference: 'Eclesiastés 5:10 (NVI)',
            bibleText: 'El que ama el dinero nunca se sacia con sus riquezas, ni el que ama el lujo se sacia con sus ganancias. Esto también es absurdo.',
          },
          {
            id: 'c',
            label: 'Comparto mi bendición con alguien más, agradeciendo a Dios por poder hacerlo',
            reflection:
              'La gratitud se profundiza cuando se comparte. Compartir lo que recibiste no empobrece; enriquece el corazón. Cuando bendices a otros con lo que Dios te bendijo, tu bendición cobra un propósito más grande que tu propia satisfacción. La gratitud generosa es la que más se parece al corazón de Dios.',
            bibleReference: '2 Corintios 9:11 (NVI)',
            bibleText: 'Podrán enriquecerse en todo para que con toda generosidad den a otros, y por medio de ellos se den gracias a Dios.',
          },
        ],
      },
    ],
  },
};

export function getBibleCardExperience(id: string): BibleCardExperience | undefined {
  return bibleCardExperiences[id];
}
