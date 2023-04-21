export const types = [
   "sleep",
   "healthiness",
   "satisfaction",
   "depression",
   "passivness",
   "emptiness",
   "anxiety",
];

export const questions = [
   {
      text: "Ваш сон поверхностный и неспокойный?",
      options: [
         { id: 0, text: "Всегда", type: "sleep", score: -2 },
         { id: 1, text: "Часто", type: "sleep", score: -1 },
         { id: 2, text: "Бывает иногда", type: "sleep", score: 0 },
         { id: 3, text: "Очень редко", type: "sleep", score: 1 },
         { id: 4, text: "Никогда", type: "sleep", score: 2 },
      ],
   },
   {
      text: "После сна Вы чувствуете себя усталым и «разбитым» (не отдохнувшим)?",
      options: [
         { id: 0, text: "Всегда", type: "sleep", score: -2 },
         { id: 1, text: "Часто", type: "sleep", score: -1 },
         { id: 2, text: "Бывает иногда", type: "sleep", score: 0 },
         { id: 3, text: "Очень редко", type: "sleep", score: 1 },
         { id: 4, text: "Никогда", type: "sleep", score: 2 },
      ],
   },
   {
      text: "Вам трудно бывает заснуть, если вас что-либо тревожит?",
      options: [
         { id: 0, text: "Всегда", type: "sleep", score: -2 },
         { id: 1, text: "Часто", type: "sleep", score: -1 },
         { id: 2, text: "Бывает иногда", type: "sleep", score: 0 },
         { id: 3, text: "Очень редко", type: "sleep", score: 1 },
         { id: 4, text: "Никогда", type: "sleep", score: 2 },
      ],
   },
   {
      text: "Чувствуете ли вы у себя повышенную утомляемость, усталость?",
      options: [
         { id: 0, text: "Всегда", type: "sleep", score: -2 },
         { id: 1, text: "Часто", type: "sleep", score: -1 },
         { id: 2, text: "Бывает иногда", type: "sleep", score: 0 },
         { id: 3, text: "Очень редко", type: "sleep", score: 1 },
         { id: 4, text: "Никогда", type: "sleep", score: 2 },
      ],
   },
   {
      text: "Замечаете ли вы, что стали более рассеянным и невнимательным?",
      options: [
         { id: 0, text: "Нет, не замечаю", type: "sleep", score: 2 },
         { id: 1, text: "Немного", type: "sleep", score: 1 },
         { id: 2, text: "Не знаю", type: "sleep", score: 0 },
         { id: 3, text: "Часто замчаю", type: "sleep", score: -1 },
         { id: 4, text: "Всегда", type: "sleep", score: -2 },
      ],
   },
   {
      text: "Беспокоят ли вас боли или неприятные ощущения в области сердца?",
      options: [
         { id: 0, text: "Всегда", type: "healthiness", score: -2 },
         { id: 1, text: "Часто", type: "healthiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "healthiness", score: 0 },
         { id: 3, text: "Очень редко", type: "healthiness", score: 1 },
         { id: 4, text: "Никогда", type: "healthiness", score: 2 },
      ],
   },
   {
      text: "У вас бывают ощущения сдавливания в груди и чувство нехватки воздуха при волнениях или расстройствах?",
      options: [
         { id: 0, text: "Всегда", type: "healthiness", score: -2 },
         { id: 1, text: "Часто", type: "healthiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "healthiness", score: 0 },
         { id: 3, text: "Очень редко", type: "healthiness", score: 1 },
         { id: 4, text: "Никогда", type: "healthiness", score: 2 },
      ],
   },
   {
      text: "Бывают ли у вас головные боли?",
      options: [
         { id: 0, text: "Всегда", type: "healthiness", score: -2 },
         { id: 1, text: "Часто", type: "healthiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "healthiness", score: 0 },
         { id: 3, text: "Очень редко", type: "healthiness", score: 1 },
         { id: 4, text: "Никогда", type: "healthiness", score: 2 },
      ],
   },
   {
      text: "Бывают ли у вас приступы учащенного сердцебиения?",
      options: [
         { id: 0, text: "Всегда", type: "healthiness", score: -2 },
         { id: 1, text: "Часто", type: "healthiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "healthiness", score: 0 },
         { id: 3, text: "Очень редко", type: "healthiness", score: 1 },
         { id: 4, text: "Никогда", type: "healthiness", score: 2 },
      ],
   },
   {
      text: "Вы замечали как у вас непроизвольно подергиваются голова и плечи, или веки, скулы, особенно, когда вы волнуетесь?",
      options: [
         { id: 0, text: "Всегда", type: "healthiness", score: -2 },
         { id: 1, text: "Часто", type: "healthiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "healthiness", score: 0 },
         { id: 3, text: "Очень редко", type: "healthiness", score: 1 },
         { id: 4, text: "Никогда", type: "healthiness", score: 2 },
      ],
   },
   {
      text: "Чувствуете ли вы себя подавленным и угнетенным?",
      options: [
         { id: 0, text: "Всегда", type: "satisfaction", score: -2 },
         { id: 1, text: "Часто", type: "satisfaction", score: -1 },
         { id: 2, text: "Бывает иногда", type: "satisfaction", score: 0 },
         { id: 3, text: "Очень редко", type: "satisfaction", score: 1 },
         { id: 4, text: "Никогда", type: "satisfaction", score: 2 },
      ],
   },
   {
      text: "Приходят ли вам мысли, что ваши друзья или близкие более счастливы, чем вы?",
      options: [
         { id: 0, text: "Всегда", type: "satisfaction", score: -2 },
         { id: 1, text: "Часто", type: "satisfaction", score: -1 },
         { id: 2, text: "Бывает иногда", type: "satisfaction", score: 0 },
         { id: 3, text: "Очень редко", type: "satisfaction", score: 1 },
         { id: 4, text: "Никогда", type: "satisfaction", score: 2 },
      ],
   },
   {
      text: "Приходит ли вам мысль, что в вашей жизни мало радости и счастья?",
      options: [
         { id: 0, text: "Всегда", type: "satisfaction", score: -2 },
         { id: 1, text: "Часто", type: "satisfaction", score: -1 },
         { id: 2, text: "Бывает иногда", type: "satisfaction", score: 0 },
         { id: 3, text: "Очень редко", type: "satisfaction", score: 1 },
         { id: 4, text: "Никогда", type: "satisfaction", score: 2 },
      ],
   },
   {
      text: "Считаете ли вы, что ваш труд на работе или дома недостаточно оценивается окружающими?",
      options: [
         { id: 0, text: "Не считаю", type: "satisfaction", score: 2 },
         {
            id: 1,
            text: "Крайне незначительно",
            type: "satisfaction",
            score: 1,
         },
         { id: 2, text: "Не знаю", type: "satisfaction", score: 0 },
         { id: 3, text: "Возможно частично", type: "satisfaction", score: -1 },
         {
            id: 4,
            text: "Считаю, и так быть не должно",
            type: "satisfaction",
            score: -2,
         },
      ],
   },
   {
      text: "Довольны ли вы своей профессией и/или карьерой?",
      options: [
         { id: 0, text: "Доволен", type: "satisfaction", score: 2 },
         { id: 1, text: "Частично", type: "satisfaction", score: 1 },
         { id: 2, text: "Не уверен", type: "satisfaction", score: 0 },
         { id: 3, text: "Не доволен", type: "satisfaction", score: -1 },
         {
            id: 4,
            text: "Я жалею о своем выборе",
            type: "satisfaction",
            score: -2,
         },
      ],
   },
   {
      text: "Замечаете ли вы, что прежняя работа дается вам труднее и требует больших усилий?",
      options: [
         { id: 0, text: "Всегда", type: "depression", score: -2 },
         { id: 1, text: "Часто", type: "depression", score: -1 },
         { id: 2, text: "Бывает иногда", type: "depression", score: 0 },
         { id: 3, text: "Очень редко", type: "depression", score: 1 },
         { id: 4, text: "Никогда", type: "depression", score: 2 },
      ],
   },
   {
      text: "Бывает ли у вас чувство, что к вам относятся безразлично, никто не стремится вас понять и посочувствовать, и вы ощущаете себя одиноким?",
      options: [
         { id: 0, text: "Всегда", type: "depression", score: -2 },
         { id: 1, text: "Часто", type: "depression", score: -1 },
         { id: 2, text: "Бывает иногда", type: "depression", score: 0 },
         { id: 3, text: "Очень редко", type: "depression", score: 1 },
         { id: 4, text: "Никогда", type: "depression", score: 2 },
      ],
   },
   {
      text: "У вас возникает чувство, что во многих неприятностях виноваты вы сами?",
      options: [
         { id: 0, text: "Всегда", type: "depression", score: -2 },
         { id: 1, text: "Часто", type: "depression", score: -1 },
         { id: 2, text: "Бывает иногда", type: "depression", score: 0 },
         { id: 3, text: "Очень редко", type: "depression", score: 1 },
         { id: 4, text: "Никогда", type: "depression", score: 2 },
      ],
   },
   {
      text: "Вы не можете сдерживать слезы и плачете?",
      options: [
         { id: 0, text: "Всегда", type: "depression", score: -2 },
         { id: 1, text: "Часто", type: "depression", score: -1 },
         { id: 2, text: "Бывает иногда", type: "depression", score: 0 },
         { id: 3, text: "Очень редко", type: "depression", score: 1 },
         { id: 4, text: "Никогда", type: "depression", score: 2 },
      ],
   },
   {
      text: "Вы замечаете, что ваши близкие относятся к вам равнодушно или даже неприязненно?",
      options: [
         { id: 0, text: "Всегда", type: "depression", score: -2 },
         { id: 1, text: "Часто", type: "depression", score: -1 },
         { id: 2, text: "Бывает иногда", type: "depression", score: 0 },
         { id: 3, text: "Очень редко", type: "depression", score: 1 },
         { id: 4, text: "Никогда", type: "depression", score: 2 },
      ],
   },
   {
      text: "Замечаете ли вы, что стали более медлительным и вялым, нет прежней энергичности?",
      options: [
         { id: 0, text: "Всегда", type: "passivness", score: -2 },
         { id: 1, text: "Часто", type: "passivness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "passivness", score: 0 },
         { id: 3, text: "Очень редко", type: "passivness", score: 1 },
         { id: 4, text: "Никогда", type: "passivness", score: 2 },
      ],
   },
   {
      text: "Вы стали более раздражительным и вспыльчивым?",
      options: [
         { id: 0, text: "Нет", type: "passivness", score: 2 },
         { id: 1, text: "Слегка", type: "passivness", score: 1 },
         { id: 2, text: "Не знаю", type: "passivness", score: 0 },
         {
            id: 3,
            text: "Стал, и мне это не нравится",
            type: "passivness",
            score: -1,
         },
         {
            id: 4,
            text: "Стал, и мне это нравится",
            type: "passivness",
            score: -2,
         },
      ],
   },
   {
      text: "Вы к концу работы так сильно устаете, что вам необходимо отдохнуть, прежде чем приняться за что-либо?",
      options: [
         { id: 0, text: "Всегда", type: "passivness", score: 2 },
         { id: 1, text: "Часто", type: "passivness", score: 1 },
         { id: 2, text: "Бывает иногда", type: "passivness", score: 0 },
         { id: 3, text: "Очень редко", type: "passivness", score: -1 },
         { id: 4, text: "Никогда", type: "passivness", score: -2 },
      ],
   },
   {
      text: "Легко ли меняется ваше настроение?",
      options: [
         { id: 0, text: "Всегда", type: "passivness", score: 2 },
         { id: 1, text: "Часто", type: "passivness", score: 1 },
         { id: 2, text: "Бывает иногда", type: "passivness", score: 0 },
         { id: 3, text: "Очень редко", type: "passivness", score: -1 },
         { id: 4, text: "Никогда", type: "passivness", score: -2 },
      ],
   },
   {
      text: "Вам больше нравится, если вас развлекают, чем самому развлекать других?",
      options: [
         { id: 0, text: "Всегда", type: "passivness", score: 2 },
         { id: 1, text: "Часто", type: "passivness", score: 1 },
         { id: 2, text: "Бывает иногда", type: "passivness", score: 0 },
         { id: 3, text: "Очень редко", type: "passivness", score: -1 },
         { id: 4, text: "Никогда", type: "passivness", score: -2 },
      ],
   },
   {
      text: "У вас плохой аппетит?",
      options: [
         { id: 0, text: "Всегда", type: "emptiness", score: -2 },
         { id: 1, text: "Часто", type: "emptiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "emptiness", score: 0 },
         { id: 3, text: "Очень редко", type: "emptiness", score: 1 },
         { id: 4, text: "Никогда", type: "emptiness", score: 2 },
      ],
   },
   {
      text: "Замечаете ли вы, что потребность в интимной жизни для вас стала меньше или даже стала вас тяготить?",
      options: [
         { id: 0, text: "Всегда", type: "emptiness", score: -2 },
         { id: 1, text: "Часто", type: "emptiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "emptiness", score: 0 },
         { id: 3, text: "Очень редко", type: "emptiness", score: 1 },
         { id: 4, text: "Никогда", type: "emptiness", score: 2 },
      ],
   },
   {
      text: "Легко ли вы обижаетесь?",
      options: [
         { id: 0, text: "Всегда", type: "emptiness", score: -2 },
         { id: 1, text: "Часто", type: "emptiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "emptiness", score: 0 },
         { id: 3, text: "Очень редко", type: "emptiness", score: 1 },
         { id: 4, text: "Никогда", type: "emptiness", score: 2 },
      ],
   },
   {
      text: "Бывает ли у вас страх оставаться в одиночестве в пустой квартире?",
      options: [
         { id: 0, text: "Всегда", type: "emptiness", score: -2 },
         { id: 1, text: "Часто", type: "emptiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "emptiness", score: 0 },
         { id: 3, text: "Очень редко", type: "emptiness", score: 1 },
         { id: 4, text: "Никогда", type: "emptiness", score: 2 },
      ],
   },
   {
      text: "Другие люди Вам безразличны?",
      options: [
         { id: 0, text: "Всегда", type: "emptiness", score: -2 },
         { id: 1, text: "Часто", type: "emptiness", score: -1 },
         { id: 2, text: "Бывает иногда", type: "emptiness", score: 0 },
         { id: 3, text: "Очень редко", type: "emptiness", score: 1 },
         { id: 4, text: "Никогда", type: "emptiness", score: 2 },
      ],
   },
   {
      text: "Вы испытываете тревогу и беспокойство за кого-нибудь или за что-нибудь? ",
      options: [
         { id: 0, text: "Всегда", type: "anxiety", score: -2 },
         { id: 1, text: "Часто", type: "anxiety", score: -1 },
         { id: 2, text: "Бывает иногда", type: "anxiety", score: 0 },
         { id: 3, text: "Очень редко", type: "anxiety", score: 1 },
         { id: 4, text: "Никогда", type: "anxiety", score: 2 },
      ],
   },
   {
      text: "Бывает ли у вас ощущение какого-то беспокойства (как будто что-то должно случиться), хотя особых причин и нет?",
      options: [
         { id: 0, text: "Всегда", type: "anxiety", score: -2 },
         { id: 1, text: "Часто", type: "anxiety", score: -1 },
         { id: 2, text: "Бывает иногда", type: "anxiety", score: 0 },
         { id: 3, text: "Очень редко", type: "anxiety", score: 1 },
         { id: 4, text: "Никогда", type: "anxiety", score: 2 },
      ],
   },
   {
      text: "У вас возникает страх заболеть тяжелым заболеванием (рак, инфаркт, психическое заболевание и т. д.)?",
      options: [
         { id: 0, text: "Всегда", type: "anxiety", score: -2 },
         { id: 1, text: "Часто", type: "anxiety", score: -1 },
         { id: 2, text: "Бывает иногда", type: "anxiety", score: 0 },
         { id: 3, text: "Очень редко", type: "anxiety", score: 1 },
         { id: 4, text: "Никогда", type: "anxiety", score: 2 },
      ],
   },
   {
      text: "У вас бывают периоды такого беспокойства, что вы даже не можете усидеть на месте?",
      options: [
         { id: 0, text: "Всегда", type: "anxiety", score: -2 },
         { id: 1, text: "Часто", type: "anxiety", score: -1 },
         { id: 2, text: "Бывает иногда", type: "anxiety", score: 0 },
         { id: 3, text: "Очень редко", type: "anxiety", score: 1 },
         { id: 4, text: "Никогда", type: "anxiety", score: 2 },
      ],
   },
   {
      text: "Ожидание вас тревожит и нервирует?",
      options: [
         { id: 0, text: "Всегда", type: "anxiety", score: -2 },
         { id: 1, text: "Часто", type: "anxiety", score: -1 },
         { id: 2, text: "Бывает иногда", type: "anxiety", score: 0 },
         { id: 3, text: "Очень редко", type: "anxiety", score: 1 },
         { id: 4, text: "Никогда", type: "anxiety", score: 2 },
      ],
   },
];

export const archetypes = {
   Простодушный:
      "Простодушный больше всего на свете не хочет ни за что отвечать. Он более склонен до последнего оттягивать принятие решений и декларацию намерений. Ему бы хотелось, чтобы все устроилось как-нибудь само собой.",
   Искатель:
      "Искатель стремится к деятельному поиску своего пути. Он постоянно встречается с чем-то новым. И не просто созерцает новое, но и взаимодействует с ним, пробует на зуб и пытается угадать свойства.",
   Мудрец:
      "Мудрецы превосходны в беспристрастном анализе, планировании, оценке и поиске решения. Когда другие впадают в панику, Мудрец просто абстрагируется от мира и уходит в себя, чтобы увидеть всю картину происходящего целиком. Он может даже 'заглянуть в будущее', чтобы узнать что делать.",
   Бунтарь:
      "Когда архетип Бунтаря активизируется в людях, они могут чувствовать свою отчужденность от господствующей культуры и презирать ее правление. Их могут привлекать поведение и действия, попирающие общие нормы этики, здоровья или приличий.",
   Маг: "Когда у человека активирован архетип Мага, он становится катализатором изменений. Доверяя синхронизму или значимым совпадениям, человек ожидает, что, если он сделает свою часть работы, Вселенная пойдет ему навстречу.",
   Герой: "Естественное окружение для Героя — это поле битвы, спортивное состязание, улицы, рабочее место, джунгли политики или любое другое место, где трудности или вызовы требуют мужественных и энергичных действий.",
   Любовник:
      "Любовник — это существо, очарованное кем-то или чем-то: картиной, девушкой, поэмой или решением задачи. Это человек, жаждущий ответа от мира, ожидающий любви и восхищения от других существ, так же, как восхищен ими сам.",
   Шут: "Шут не находит ничего более приятным, чем смеяться над другими. Люди этого архетипа склонны замечать смешное практически в любой ситуации, чтобы справиться с препятствиями и жизненными трудностями с помощью юмора. Шут как ребенок в конфетном магазине: чем больше новых впечатлений, тем веселее.",
   "Славный Малый":
      "Архетип Славный Малый сильно выражен во всех прогрессивных движениях: за гражданские права, женского движения и всех остальных, которые ставят перед собой цель добиться полного социального и экономического равноправия какой-либо группы или класса людей.",
   Заботливый:
      "Заботливый — это альтруист, которым движет сочувствие, щедрость и желание помогать окружающим. Его можно назвать также Спасатель или Брат Милосердия. По сути же своей он — Хранитель.",
   Правитель:
      "Архетип Правителя любит иерархические организации, потому что в них вы всегда знаете свое место. Ваша роль четко определена служебными инструкциями, которые доводят до вашего сведения, что вы должны делать.",
   Творец:
      "Творцом движет страсть к самовыражению в материальной форме. Если в человеке активизируется архетип Творца, он зачастую обречен постоянно творить или изобретать что-то новое — иначе он чувствует, что буквально задыхается.",
};
