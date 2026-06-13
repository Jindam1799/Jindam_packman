// data.js

const quizStages = [
  // ==========================================
  // 🚩 STAGE 1: 기초 인사말
  // ==========================================
  [
    {
      korean: '선생님 안녕하세요.',
      correct: '老师，您好 (lǎoshī, nínhǎo)',
      wrong: ['你好 (nǐhǎo)', '谢谢 (xièxie)', '对不起 (duìbuqǐ)'],
    },
    {
      korean: '(친구야) 안녕!',
      correct: '你好！ (nǐhǎo!)',
      wrong: ['老师好 (lǎoshī hǎo)', '没关系 (méiguānxi)', '再见 (zàijiàn)'],
    },
    {
      korean: '저는 ㅇㅇㅇ이에요.',
      correct: '我是ㅇㅇㅇ (wǒ shì)',
      wrong: [
        '你是ㅇㅇㅇ (nǐ shì)',
        '他是ㅇㅇㅇ (tā shì)',
        '谁是ㅇㅇㅇ (shéi shì)',
      ],
    },
    {
      korean: '고마워요(감사해요)',
      correct: '谢谢 (xièxie)',
      wrong: ['不客气 (búkèqi)', '没关系 (méiguānxi)', '对不起 (duìbuqǐ)'],
    },
    {
      korean: '별말씀을요(천만에!)',
      correct: '不客气 (búkèqi)',
      wrong: ['你好 (nǐhǎo)', '谢谢 (xièxie)', '再见 (zàijiàn)'],
    },
    {
      korean: '미안해(죄송해요)',
      correct: '对不起 (duìbuqǐ)',
      wrong: ['没关系 (méiguānxi)', '谢谢 (xièxie)', '不客气 (búkèqi)'],
    },
    {
      korean: '괜찮아(괜찮아요)',
      correct: '没关系 (méiguānxi)',
      wrong: ['对不起 (duìbuqǐ)', '谢谢 (xièxie)', '你好 (nǐhǎo)'],
    },
    {
      korean: '나는 너를 사랑해❤️',
      correct: '我爱你❤️ (wǒ ài nǐ)',
      wrong: [
        '我爱妈妈❤️ (wǒ ài māma)',
        '我爱爸爸❤️ (wǒ ài bàba)',
        '你爱我❤️ (nǐ ài wǒ)',
      ],
    },
    {
      korean: '나는 엄마를 사랑해❤️',
      correct: '我爱妈妈❤️ (wǒ ài māma)',
      wrong: [
        '我爱你❤️ (wǒ ài nǐ)',
        '我爱爸爸❤️ (wǒ ài bàba)',
        '妈妈爱我❤️ (māma ài wǒ)',
      ],
    },
    {
      korean: '나는 아빠를 사랑해❤️',
      correct: '我爱爸爸❤️ (wǒ ài bàba)',
      wrong: [
        '我爱妈妈❤️ (wǒ ài māma)',
        '我爱你❤️ (wǒ ài nǐ)',
        '爸爸爱我❤️ (bàba ài wǒ)',
      ],
    },
  ],

  // ==========================================
  // 🚩 STAGE 2: 인사표현 & 来(오다) 기본문형
  // ==========================================
  [
    {
      korean: '그는 옵니다.',
      correct: '他来。 (Tā lái)',
      wrong: [
        '他不来。 (Tā bù lái)',
        '我来。 (Wǒ lái)',
        '他来吗？ (Tā lái ma)',
      ],
    },
    {
      korean: '그는 안 옵니다.',
      correct: '他不来。 (Tā bù lái)',
      wrong: [
        '他来。 (Tā lái)',
        '我不来。 (Wǒ bù lái)',
        '他不来吗？ (Tā bù lái ma)',
      ],
    },
    {
      korean: '그는 옵니까?',
      correct: '他来吗？ (Tā lái ma)',
      wrong: [
        '他不来吗？ (Tā bù lái ma)',
        '他来不来？ (Tā lái bu lái)',
        '他来。 (Tā lái)',
      ],
    },
    {
      korean: '그는 안 옵니까?',
      correct: '他不来吗？ (Tā bù lái ma)',
      wrong: [
        '他来吗？ (Tā lái ma)',
        '他来不来？ (Tā lái bu lái)',
        '他不来。 (Tā bù lái)',
      ],
    },
    {
      korean: '그는 옵니까 안 옵니까?',
      correct: '他来不来？ (Tā lái bu lái)',
      wrong: [
        '他来吗？ (Tā lái ma)',
        '他不来吗？ (Tā bù lái ma)',
        '他不来。 (Tā bù lái)',
      ],
    },
    {
      korean: '그는 한국에 옵니다.',
      correct: '他来韩国。 (Tā lái Hánguó)',
      wrong: [
        '他不来韩国。 (Tā bù lái Hánguó)',
        '他来中国。 (Tā lái Zhōngguó)',
        '我来韩国。 (Wǒ lái Hánguó)',
      ],
    },
    {
      korean: '그는 한국에 안 옵니다.',
      correct: '他不来韩国。 (Tā bù lái Hánguó)',
      wrong: [
        '他来韩国。 (Tā lái Hánguó)',
        '他不来韩国吗？ (Tā bù lái Hánguó ma)',
        '我不来韩国。 (Wǒ bù lái Hánguó)',
      ],
    },
    {
      korean: '그는 한국에 옵니까?',
      correct: '他来韩国吗？ (Tā lái Hánguó ma)',
      wrong: [
        '他不来韩国吗？ (Tā bù lái Hánguó ma)',
        '他来不来韩国？ (Tā lái bu lái Hánguó)',
        '他来韩国。 (Tā lái Hánguó)',
      ],
    },
    {
      korean: '그는 한국에 안 옵니까?',
      correct: '他不来韩国吗？ (Tā bù lái Hánguó ma)',
      wrong: [
        '他来韩国吗？ (Tā lái Hánguó ma)',
        '他来不来韩国？ (Tā lái bu lái Hánguó)',
        '他不来韩国。 (Tā bù lái Hánguó)',
      ],
    },
    {
      korean: '그는 한국에 옵니까 안 옵니까?',
      correct: '他来不来韩国？ (Tā lái bu lái Hánguó)',
      wrong: [
        '他来韩国吗？ (Tā lái Hánguó ma)',
        '他不来韩国吗？ (Tā bù lái Hánguó ma)',
        '他去不去韩国？ (Tā qù bu qù Hánguó)',
      ],
    },
    {
      korean: '그는 듣습니다',
      correct: '他听。 (Tā tīng)',
      wrong: [
        '他不听。 (Tā bù tīng)',
        '他看。 (Tā kàn)',
        '他听吗？ (Tā tīng ma)',
      ],
    },
    {
      korean: '그는 안 듣습니다',
      correct: '他不听。 (Tā bù tīng)',
      wrong: [
        '他听。 (Tā tīng)',
        '他不看。 (Tā bù kàn)',
        '他听不听？ (Tā tīng bu tīng)',
      ],
    },
    {
      korean: '그는 듣습니까?',
      correct: '他听吗？ (Tā tīng ma)',
      wrong: [
        '他不听吗？ (Tā bù tīng ma)',
        '他听不听？ (Tā tīng bu tīng)',
        '他看吗？ (Tā kàn ma)',
      ],
    },
    {
      korean: '그는 안 듣습니까?',
      correct: '他不听吗？ (Tā bù tīng ma)',
      wrong: [
        '他听吗？ (Tā tīng ma)',
        '他听不听？ (Tā tīng bu tīng)',
        '他不看吗？ (Tā bù kàn ma)',
      ],
    },
    {
      korean: '그는 듣습니까 안 듣습니까?',
      correct: '他听不听？ (Tā tīng bu tīng)',
      wrong: [
        '他听吗？ (Tā tīng ma)',
        '他不听吗？ (Tā bù tīng ma)',
        '他看不看？ (Tā kàn bu kàn)',
      ],
    },
    {
      korean: '그는 음악을 듣습니다',
      correct: '他听音乐。 (Tā tīng yīnyuè)',
      wrong: [
        '他不听音乐。 (Tā bù tīng yīnyuè)',
        '他看电影。 (Tā kàn diànyǐng)',
        '他听音乐吗？ (Tā tīng yīnyuè ma)',
      ],
    },
    {
      korean: '그는 음악을 안 듣습니다',
      correct: '他不听音乐。 (Tā bù tīng yīnyuè)',
      wrong: [
        '他听音乐。 (Tā tīng yīnyuè)',
        '他不看电影。 (Tā bù kàn diànyǐng)',
        '他听音乐吗？ (Tā tīng yīnyuè ma)',
      ],
    },
    {
      korean: '그는 음악을 듣습니까?',
      correct: '他听音乐吗？ (Tā tīng yīnyuè ma)',
      wrong: [
        '他不听音乐吗？ (Tā bù tīng yīnyuè ma)',
        '他听不听音乐？ (Tā tīng bu tīng yīnyuè)',
        '他看电影吗？ (Tā kàn diànyǐng ma)',
      ],
    },
    {
      korean: '그는 음악을 안 듣습니까?',
      correct: '他不听音乐吗？ (Tā bù tīng yīnyuè ma)',
      wrong: [
        '他听音乐吗？ (Tā tīng yīnyuè ma)',
        '他听不听音乐？ (Tā tīng bu tīng yīnyuè)',
        '他不看电影吗？ (Tā bù kàn diànyǐng ma)',
      ],
    },
    {
      korean: '그는 음악을 듣습니까 안 듣습니까?',
      correct: '他听不听音乐？ (Tā tīng bu tīng yīnyuè)',
      wrong: [
        '他听音乐吗？ (Tā tīng yīnyuè ma)',
        '他不听音乐吗？ (Tā bù tīng yīnyuè ma)',
        '他看不看电影？ (Tā kàn bu kàn diànyǐng)',
      ],
    },
    {
      korean: '그는 봅니다',
      correct: '他看。 (Tā kàn)',
      wrong: [
        '他不看。 (Tā bù kàn)',
        '他听。 (Tā tīng)',
        '他看吗？ (Tā kàn ma)',
      ],
    },
    {
      korean: '그는 안 봅니다',
      correct: '他不看。 (Tā bù kàn)',
      wrong: [
        '他看。 (Tā kàn)',
        '他不听。 (Tā bù tīng)',
        '他看不看？ (Tā kàn bu kàn)',
      ],
    },
    {
      korean: '그는 봅니까?',
      correct: '他看吗？ (Tā kàn ma)',
      wrong: [
        '他不看吗？ (Tā bù kàn ma)',
        '他看不看？ (Tā kàn bu kàn)',
        '他听吗？ (Tā tīng ma)',
      ],
    },
    {
      korean: '그는 안 봅니까?',
      correct: '他不看吗？ (Tā bù kàn ma)',
      wrong: [
        '他看吗？ (Tā kàn ma)',
        '他看不看？ (Tā kàn bu kàn)',
        '他不听吗？ (Tā bù tīng ma)',
      ],
    },
    {
      korean: '그는 봅니까 안 봅니까?',
      correct: '他看不看？ (Tā kàn bu kàn)',
      wrong: [
        '他看吗？ (Tā kàn ma)',
        '他不看吗？ (Tā bù kàn ma)',
        '他听不听？ (Tā tīng bu tīng)',
      ],
    },
    {
      korean: '그는 영화를 봅니다',
      correct: '他看电影。 (Tā kàn diànyǐng)',
      wrong: [
        '他不看电影。 (Tā bù kàn diànyǐng)',
        '他听音乐。 (Tā tīng yīnyuè)',
        '他看电影吗？ (Tā kàn diànyǐng ma)',
      ],
    },
    {
      korean: '그는 영화를 안 봅니다',
      correct: '他不看电影。 (Tā bù kàn diànyǐng)',
      wrong: [
        '他看电影。 (Tā kàn diànyǐng)',
        '他不听音乐。 (Tā bù tīng yīnyuè)',
        '他看电影吗？ (Tā kàn diànyǐng ma)',
      ],
    },
    {
      korean: '그는 영화를 봅니까?',
      correct: '他看电影吗？ (Tā kàn diànyǐng ma)',
      wrong: [
        '他不看电影吗？ (Tā bù kàn diànyǐng ma)',
        '他看不看电影？ (Tā kàn bu kàn diànyǐng)',
        '他听音乐吗？ (Tā tīng yīnyuè ma)',
      ],
    },
    {
      korean: '그는 영화를 안 봅니까?',
      correct: '他不看电影吗？ (Tā bù kàn diànyǐng ma)',
      wrong: [
        '他看电影吗？ (Tā kàn diànyǐng ma)',
        '他看不看电影？ (Tā kàn bu kàn diànyǐng)',
        '他不听音乐吗？ (Tā bù tīng yīnyuè ma)',
      ],
    },
    {
      korean: '그는 영화를 봅니까 안 봅니까?',
      correct: '他看不看电影？ (Tā kàn bu kàn diànyǐng)',
      wrong: [
        '他看电影吗？ (Tā kàn diànyǐng ma)',
        '他不看电影吗？ (Tā bù kàn diànyǐng ma)',
        '他听不听音乐？ (Tā tīng bu tīng yīnyuè)',
      ],
    },
  ],

  // ==========================================
  // 🚩 STAGE 3: 听 (tīng) 듣다 기본문형
  // ==========================================
  [
    // 🔥 여기에 있던 추가 대괄호 [ ] 를 제거했습니다!
    {
      korean: '그는 누구예요?',
      correct: '他是谁？ (Tā shì shéi?)',
      wrong: [
        '你是谁？ (Nǐ shì shéi?)',
        '他是老师吗？ (Tā shì lǎoshī ma?)',
        '他是哪国人？ (Tā shì nǎ guó rén?)',
      ],
    },
    {
      korean: '그녀는 저의 엄마예요.',
      correct: '她是我的妈妈。 (Tā shì wǒ de māma.)',
      wrong: [
        '他是我的爸爸。 (Tā shì wǒ de bàba.)',
        '这是我的老师。 (Zhè shì wǒ de lǎoshī.)',
        '她是我姐姐。 (Tā shì wǒ jiějie.)',
      ],
    },
    {
      korean: '와, 잘생겼네요!',
      correct: '哇，很漂亮！ (Wā, hěn piàoliang.)',
      wrong: [
        '哇，很好吃！ (Wā, hěn hǎochī.)',
        '太贵了！ (Tài guì le!)',
        '他很高！ (Tā hěn gāo.)',
      ],
    },
    {
      korean: '감사해요.',
      correct: '谢谢。 (Xièxie.)',
      wrong: [
        '不客气。 (Bú kèqi.)',
        '对不起。 (Duìbuqǐ.)',
        '没关系。 (Méi guānxi.)',
      ],
    },
    {
      korean: '사장님, 저거 얼마에요?',
      correct: '老板，那个多少钱？ (Lǎobǎn, nà ge duōshao qián?)',
      wrong: [
        '老板，这个多少钱？ (Lǎobǎn, zhè ge duōshao qián?)',
        '老师，那个多少钱？ (Lǎoshī, nà ge duōshao qián?)',
        '那个太贵了。 (Nà ge tài guì le.)',
      ],
    },
    {
      korean: '어느 거요?',
      correct: '哪个？ (Nǎ ge?)',
      wrong: ['这个？ (Zhè ge?)', '那个。 (Nà ge.)', '哪儿？ (Nǎr?)'],
    },
    {
      korean: '(가리키면서) 저거요.',
      correct: '那个。 (Nà ge.)',
      wrong: ['这个。 (Zhè ge.)', '哪个？ (Nǎ ge?)', '哪儿？ (Nǎr?)'],
    },
    {
      korean: '100원이요.',
      correct: '一百块。 (Yìbǎi kuài.)',
      wrong: [
        '十块。 (Shí kuài.)',
        '两百块。 (Liǎngbǎi kuài.)',
        '一千块。 (Yìqiān kuài.)',
      ],
    },
    {
      korean: '당신은 매운 것을 좋아하세요?',
      correct: '你喜欢辣的吗？ (Nǐ xǐhuan là de ma?)',
      wrong: [
        '你喜欢甜的吗？ (Nǐ xǐhuan tián de ma?)',
        '我不喜欢辣的。 (Wǒ bù xǐhuan là de.)',
        '你想吃什么？ (Nǐ xiǎng chī shénme?)',
      ],
    },
    {
      korean: '좋아해요, 당신은요?',
      correct: '喜欢，你呢？ (Xǐhuan, nǐ ne?)',
      wrong: [
        '不喜欢，你呢？ (Bù xǐhuan, nǐ ne?)',
        '我很好，你呢？ (Wǒ hěn hǎo, nǐ ne?)',
        '谢谢，你呢？ (Xièxie, nǐ ne?)',
      ],
    },
    {
      korean: '그다지 매운 것을 좋아하지 않아요.',
      correct: '不太喜欢。 (Bú tài xǐhuan.)',
      wrong: [
        '很喜欢。 (Hěn xǐhuan.)',
        '很好吃。 (Hěn hǎochī.)',
        '太辣了。 (Tài là le.)',
      ],
    },
    {
      korean: '아, 그럼, 안 매운 것을 먹자.',
      correct: '哦，那，吃不辣的吧。 (Ò, nà, chī bú là de ba.)',
      wrong: [
        '哦，那，吃辣的吧。 (Ò, nà, chī là de ba.)',
        '我们去吃饭吧。 (Wǒmen qù chīfàn ba.)',
        '这个不辣。 (Zhè ge bú là.)',
      ],
    },
  ],

  // ==========================================
  // 🚩 STAGE 4: 看 (kàn) 보다 기본문형
  // ==========================================
  [],
];
