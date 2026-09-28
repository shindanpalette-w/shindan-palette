// ========================================
// 診断パレット｜恋愛タイプ診断
// ========================================

const loveQuestions = [
  {
    text: "好きな人ができたら？",
    answers: [
      ["自分から距離を縮める", { love: 2, passion: 2 }],
      ["相手から来てほしい", { dependence: 1, love: 1 }],
      ["しばらく様子を見る", { stability: 2 }],
      ["好きでも自分のペースは崩さない", { freedom: 2 }]
    ]
  },
  {
    text: "恋人から半日返信がないと？",
    answers: [
      ["ちょっと不安になる", { dependence: 1, love: 1 }],
      ["かなり気になって何度も確認する", { dependence: 3 }],
      ["忙しいんだろうと思う", { stability: 2 }],
      ["特に気にならない", { freedom: 2 }]
    ]
  },
  {
    text: "理想のデートは？",
    answers: [
      ["家でずっと一緒に過ごす", { dependence: 2, love: 2 }],
      ["ロマンチックなデート", { passion: 2, love: 1 }],
      ["旅行や新しい体験をする", { excitement: 3 }],
      ["落ち着いた食事やお出かけ", { stability: 2 }]
    ]
  },
  {
    text: "恋人と喧嘩したら？",
    answers: [
      ["すぐ仲直りしたい", { love: 2, dependence: 1 }],
      ["相手から謝ってほしい", { passion: 1, dependence: 1 }],
      ["一人になって考えたい", { freedom: 2 }],
      ["冷静に話し合いたい", { stability: 3 }]
    ]
  },
  {
    text: "恋人とはどのくらい会いたい？",
    answers: [
      ["できれば毎日", { dependence: 3, love: 2 }],
      ["週3〜4回くらい", { love: 2 }],
      ["週1〜2回くらい", { stability: 2 }],
      ["回数にはあまりこだわらない", { freedom: 3 }]
    ]
  },
  {
    text: "恋愛で一番求めるものは？",
    answers: [
      ["たくさんの愛情表現", { love: 3, dependence: 1 }],
      ["安心感", { stability: 3 }],
      ["刺激や楽しさ", { excitement: 3, passion: 1 }],
      ["お互いの自由", { freedom: 3 }]
    ]
  },
  {
    text: "恋人との記念日は？",
    answers: [
      ["絶対に大切にしたい", { love: 3 }],
      ["覚えていてくれたら嬉しい", { love: 2, stability: 1 }],
      ["大きな記念日だけでいい", { stability: 2 }],
      ["あまり気にしない", { freedom: 2 }]
    ]
  },
  {
    text: "恋人が異性と仲良くしていたら？",
    answers: [
      ["かなり嫉妬する", { dependence: 3, passion: 1 }],
      ["少し気になる", { dependence: 1, love: 1 }],
      ["信頼していれば平気", { stability: 3 }],
      ["交友関係はお互い自由", { freedom: 3 }]
    ]
  },
  {
    text: "恋人から突然「会いたい」と言われたら？",
    answers: [
      ["予定を変えてでも会う", { love: 3, dependence: 2 }],
      ["すごく嬉しい", { love: 2, passion: 1 }],
      ["その日の予定次第", { stability: 2 }],
      ["急なら断ることもある", { freedom: 3 }]
    ]
  },
  {
    text: "恋愛と自分の時間、どちらを優先する？",
    answers: [
      ["恋愛をかなり優先する", { dependence: 3, love: 2 }],
      ["どちらかというと恋愛", { love: 2 }],
      ["半々くらい", { stability: 3 }],
      ["自分の時間も絶対必要", { freedom: 3 }]
    ]
  },
  {
    text: "恋人との将来についてどう考える？",
    answers: [
      ["好きなら早く一緒になりたい", { love: 3, passion: 1 }],
      ["将来の話をしてくれる人がいい", { stability: 2, love: 1 }],
      ["時間をかけて判断したい", { stability: 3 }],
      ["将来より今が楽しいことも大切", { excitement: 2, freedom: 1 }]
    ]
  },
  {
    text: "あなたの「好き」の伝え方に近いのは？",
    answers: [
      ["相手のために尽くす", { love: 3 }],
      ["言葉やスキンシップで伝える", { passion: 3, love: 1 }],
      ["一緒に楽しい時間を作る", { excitement: 3 }],
      ["必要なときにそっと支える", { stability: 3 }]
    ]
  }
];

const loveResults = {
  devoted: {
    title: "一途な尽くし型",
    emoji: "♡",
    catch: "好きになったら、とことん大切にする。",
    description:
      "あなたは好きな人への愛情がとても深いタイプ。相手が喜ぶことを自然に考えられ、恋人を大切にする力があります。",
    behavior:
      "好きになるほど相手を優先しやすく、会える時間や連絡を大切にします。言葉だけではなく行動で愛情を示すことも多そう。",
    strength:
      "愛情深く、一度大切だと思った相手を簡単には見放さないところ。",
    weakness:
      "頑張りすぎると、自分ばかりが尽くして疲れてしまうことも。自分の時間も同じくらい大切に。",
    match: "慎重な安定型・クールな現実型",
    ratings: { "愛情深さ": 5, "一途さ": 5, "自由度": 2, "刺激度": 2 }
  },

  loved: {
    title: "追われたい愛され型",
    emoji: "♡",
    catch: "愛されている実感が、恋のエネルギー。",
    description:
      "あなたは相手からの愛情をしっかり感じられる恋愛に幸せを感じるタイプ。言葉や態度で気持ちを示してくれる人と相性が良い傾向があります。",
    behavior:
      "相手の連絡や反応が気になりやすい一方、愛情を感じられると一気に安心できます。",
    strength:
      "相手からの愛情に素直に応えられ、恋愛の幸福感を大切にできるところ。",
    weakness:
      "相手の反応だけで自分の価値を判断しないことが大切。",
    match: "一途な尽くし型・情熱的な直感型",
    ratings: { "愛情深さ": 4, "一途さ": 4, "自由度": 2, "刺激度": 3 }
  },

  stable: {
    title: "慎重な安定型",
    emoji: "♢",
    catch: "ドキドキより、長く続く安心感。",
    description:
      "あなたは信頼と安心感を大切にするタイプ。勢いだけで恋に飛び込むより、相手を知りながら関係を育てます。",
    behavior:
      "恋愛中も冷静さを保ちやすく、問題が起きたときには話し合って解決しようとします。",
    strength:
      "安定した関係を長く築きやすいところ。",
    weakness:
      "慎重になりすぎると、好意を伝えるタイミングを逃してしまうことも。",
    match: "一途な尽くし型・自由なマイペース型",
    ratings: { "愛情深さ": 4, "一途さ": 4, "自由度": 3, "刺激度": 2 }
  },

  free: {
    title: "自由なマイペース型",
    emoji: "☁",
    catch: "恋人も大事。でも、自分らしさも大事。",
    description:
      "あなたは恋愛だけに生活を染めず、自分の時間や世界も大切にできるタイプ。",
    behavior:
      "束縛の少ない自然な関係を好み、いつも一緒にいるより、お互いが自立した恋愛を求めます。",
    strength:
      "恋愛に振り回されにくく、自分らしさを保てるところ。",
    weakness:
      "相手によっては『気持ちが分からない』と思われることも。時々言葉で愛情を伝えると◎。",
    match: "慎重な安定型・刺激を求める冒険型",
    ratings: { "愛情深さ": 3, "一途さ": 3, "自由度": 5, "刺激度": 3 }
  },

  passionate: {
    title: "情熱的な直感型",
    emoji: "♥",
    catch: "恋に落ちたら、気持ちは一直線。",
    description:
      "あなたは理屈よりも『好き』という感覚を大切にするタイプ。恋をすると日常まで鮮やかになりやすい人です。",
    behavior:
      "好きな人には積極的になりやすく、愛情表現も比較的ストレート。",
    strength:
      "気持ちを行動に移せることと、相手を夢中にさせる熱量。",
    weakness:
      "気持ちが盛り上がったときほど、一度冷静になる時間を持つと恋愛が安定します。",
    match: "追われたい愛され型・刺激を求める冒険型",
    ratings: { "愛情深さ": 5, "一途さ": 3, "自由度": 2, "刺激度": 5 }
  },

  close: {
    title: "密着型",
    emoji: "♡♡",
    catch: "大好きな人とは、できるだけ近くにいたい。",
    description:
      "あなたは恋人とのつながりを強く感じたいタイプ。会うことや連絡を取ることが愛情確認につながりやすい傾向があります。",
    behavior:
      "好きになるほど相手の存在が大きくなり、たくさん一緒に過ごしたくなります。",
    strength:
      "恋人との絆を深める力が強く、愛情表現も豊か。",
    weakness:
      "恋愛が生活のすべてにならないよう、自分だけの楽しみも残しておくのがおすすめ。",
    match: "一途な尽くし型・追われたい愛され型",
    ratings: { "愛情深さ": 5, "一途さ": 5, "自由度": 1, "刺激度": 3 }
  },

  cool: {
    title: "クールな現実型",
    emoji: "◇",
    catch: "恋愛にも、自分なりのバランス感覚。",
    description:
      "あなたは感情だけで動かず、相手との現実的な相性や信頼関係を大切にするタイプ。",
    behavior:
      "恋愛中でも状況を客観的に見られ、無理な関係を続けるより健全な距離感を選びます。",
    strength:
      "感情に流されすぎず、冷静な判断ができるところ。",
    weakness:
      "気持ちを内側にしまいすぎると、相手には伝わらないことがあります。",
    match: "一途な尽くし型・慎重な安定型",
    ratings: { "愛情深さ": 3, "一途さ": 4, "自由度": 4, "刺激度": 1 }
  },

  adventure: {
    title: "刺激を求める冒険型",
    emoji: "✦",
    catch: "恋するなら、ワクワクしていたい。",
    description:
      "あなたは新鮮さや楽しさを大切にするタイプ。同じ毎日の繰り返しより、一緒に色々な経験ができる恋愛に惹かれます。",
    behavior:
      "デートや旅行など、新しい体験を恋人と共有することで愛情が深まりやすい傾向があります。",
    strength:
      "恋愛を楽しくするアイデアと行動力。",
    weakness:
      "刺激だけを求めすぎず、何もない日を一緒に楽しめる関係も大切。",
    match: "自由なマイペース型・情熱的な直感型",
    ratings: { "愛情深さ": 3, "一途さ": 2, "自由度": 4, "刺激度": 5 }
  }
};

let currentQuestion = 0;

let loveScores = {
  love: 0,
  dependence: 0,
  stability: 0,
  freedom: 0,
  excitement: 0,
  passion: 0
};


// 「診断する」ボタン
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector('[data-diagnosis="love"]');

  if (startButton) {
    startButton.addEventListener("click", startLoveDiagnosis);
  }
});


function startLoveDiagnosis() {
  currentQuestion = 0;

  loveScores = {
    love: 0,
    dependence: 0,
    stability: 0,
    freedom: 0,
    excitement: 0,
    passion: 0
  };

  showLoveQuestion();
}


function showLoveQuestion() {
  const q = loveQuestions[currentQuestion];

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          QUESTION ${currentQuestion + 1} / ${loveQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${((currentQuestion + 1) / loveQuestions.length) * 100}%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${currentQuestion + 1}
        </p>

        <h2>${q.text}</h2>

        <div class="answer-list">

          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectLoveAnswer(${index})"
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${answer[0]}
            </button>
          `).join("")}

        </div>

      </section>

    </main>
  `;
}


function selectLoveAnswer(answerIndex) {
  const score = loveQuestions[currentQuestion].answers[answerIndex][1];

  Object.keys(score).forEach(key => {
    loveScores[key] += score[key];
  });

  currentQuestion++;

  if (currentQuestion < loveQuestions.length) {
    showLoveQuestion();
  } else {
    showLoveResult();
  }
}


function determineLoveType() {
  const s = loveScores;

  // 密着型
  if (
    s.dependence >= 12 &&
    s.love >= 14
  ) {
    return "close";
  }

  // 刺激を求める冒険型
  if (
    s.excitement >= 9 &&
    s.freedom >= 5
  ) {
    return "adventure";
  }

  // 情熱的な直感型
  if (
    s.passion >= 7 &&
    s.love >= 8
  ) {
    return "passionate";
  }

  // 自由なマイペース型
  if (
    s.freedom >= 10
  ) {
    return "free";
  }

  // 追われたい愛され型
  if (
    s.dependence >= 7 &&
    s.love >= 7
  ) {
    return "loved";
  }

  // 慎重な安定型
  if (
    s.stability >= 11
  ) {
    return "stable";
  }

  // 一途な尽くし型
  if (
    s.love >= 12
  ) {
    return "devoted";
  }

  // それ以外
  return "cool";
}


function showLoveResult() {
  const type = determineLoveType();
  const result = loveResults[type];

  const ratingsHTML = Object.entries(result.ratings)
    .map(([name, value]) => {
      return `
        <div class="rating-row">
          <span>${name}</span>
          <strong>
            ${"♥".repeat(value)}${"♡".repeat(5 - value)}
          </strong>
        </div>
      `;
    })
    .join("");

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          あなたの恋愛タイプは…
        </p>

        <div class="result-icon">
          ${result.emoji}
        </div>

        <h1>${result.title}</h1>

        <p class="result-catch">
          ${result.catch}
        </p>

        <div class="result-description">
          ${result.description}
        </div>


        <div class="result-card">
          <h2>♡ 好きになるとどうなる？</h2>
          <p>${result.behavior}</p>
        </div>


        <div class="result-card">
          <h2>あなたの恋愛パラメーター</h2>
          ${ratingsHTML}
        </div>


        <div class="result-two-column">

          <div class="result-card">
            <h2>◎ あなたの強み</h2>
            <p>${result.strength}</p>
          </div>

          <div class="result-card">
            <h2>△ 気をつけたいこと</h2>
            <p>${result.weakness}</p>
          </div>

        </div>


        <div class="result-card match-card">
          <h2>♡ 相性が良いタイプ</h2>
          <p>${result.match}</p>
        </div>

      <div class="share-area">
  <p>この結果をシェアする ♡</p>

  <div class="share-buttons">
    <button onclick="shareOnX('${result.title}')">
      𝕏でシェア
    </button>

    <button onclick="shareOnLine('${result.title}')">
      LINEでシェア
    </button>

    <button onclick="copyResult('${result.title}')">
      結果をコピー
    </button>
  </div>
</div>  
<div class="result-buttons">
  <button onclick="openTalkPost('恋愛タイプ診断', '${result.title}')">
    みんなの診断トークに投稿する ♡
  </button>
</div>
        <div class="result-buttons">

          <button onclick="startLoveDiagnosis()">
            もう一度診断する
          </button>

          <button onclick="location.reload()">
            診断一覧に戻る
          </button>

        </div>

      </section>

    </main>
  `;
}// ===== SNSシェア機能 =====

function shareOnX(title) {
  const text =
    `私の恋愛タイプは「${title}」でした♡\n` +
    `#診断パレット #恋愛タイプ診断`;

  const url = window.location.href;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    "_blank"
  );
}

function shareOnLine(title) {
  const text =
    `私の恋愛タイプは「${title}」でした♡\n` +
    `#診断パレット #恋愛タイプ診断\n` +
    window.location.href;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function copyResult(title) {
  const text =
    `私の恋愛タイプは「${title}」でした♡\n` +
    `#診断パレット #恋愛タイプ診断\n` +
    window.location.href;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("診断結果をコピーしました♡");
    })
    .catch(() => {
      alert("コピーできませんでした");
    });
}// ========================================
// 恋愛依存度診断
// ========================================

const dependenceQuestions = [
  {
    text: "恋人から返信が遅いとどう感じる？",
    answers: [
      ["かなり不安になって何度も確認する", 3],
      ["少し気になってしまう", 2],
      ["忙しいのかなと思う", 1],
      ["ほとんど気にならない", 0]
    ]
  },
  {
    text: "恋人の予定はどのくらい知っていたい？",
    answers: [
      ["できれば全部知っていたい", 3],
      ["ある程度は知っていたい", 2],
      ["話してくれた分だけでいい", 1],
      ["特に知らなくても平気", 0]
    ]
  },
  {
    text: "友達との予定と恋人からの誘いが重なったら？",
    answers: [
      ["恋人を優先する", 3],
      ["できれば恋人に会いたい", 2],
      ["先に入っていた予定を優先する", 1],
      ["基本的に予定は変えない", 0]
    ]
  },
  {
    text: "恋人と1日連絡を取らなくても平気？",
    answers: [
      ["かなりつらい", 3],
      ["少し寂しい", 2],
      ["たまになら平気", 1],
      ["全然平気", 0]
    ]
  },
  {
    text: "恋人が異性と楽しそうに話していたら？",
    answers: [
      ["かなり嫉妬する", 3],
      ["少しモヤモヤする", 2],
      ["ちょっと気になる程度", 1],
      ["特に気にならない", 0]
    ]
  },
  {
    text: "恋人との別れを想像すると？",
    answers: [
      ["考えるだけでもかなり不安", 3],
      ["できれば考えたくない", 2],
      ["悲しいけど仕方ないと思う", 1],
      ["恋愛にはそういうこともあると思う", 0]
    ]
  },
  {
    text: "恋人の好みに合わせて自分を変えられる？",
    answers: [
      ["かなり変えられる", 3],
      ["多少なら合わせる", 2],
      ["無理のない範囲なら", 1],
      ["自分らしさは変えたくない", 0]
    ]
  },
  {
    text: "恋人と会えない日が続くと？",
    answers: [
      ["かなり気分が落ちる", 3],
      ["寂しくなる", 2],
      ["少し寂しいけど平気", 1],
      ["自分の時間を楽しめる", 0]
    ]
  },
  {
    text: "恋人のSNSのオンライン状況や投稿は？",
    answers: [
      ["かなり頻繁に確認する", 3],
      ["つい確認してしまう", 2],
      ["たまに見る程度", 1],
      ["ほとんど確認しない", 0]
    ]
  },
  {
    text: "恋人から愛情表現が少ないと？",
    answers: [
      ["嫌われたのかとかなり不安になる", 3],
      ["少し不安になる", 2],
      ["たまには言ってほしいと思う", 1],
      ["普段の態度で分かれば平気", 0]
    ]
  },
  {
    text: "恋人がいても一人の時間を楽しめる？",
    answers: [
      ["一人だと寂しくて楽しめない", 3],
      ["恋人といる方がかなり楽しい", 2],
      ["どちらも楽しめる", 1],
      ["一人の時間もかなり好き", 0]
    ]
  },
  {
    text: "恋愛以外の友達・趣味・仕事も大切にできる？",
    answers: [
      ["恋をすると恋愛がほぼ最優先になる", 3],
      ["恋愛を優先することが多い", 2],
      ["バランスを取りたい", 1],
      ["恋愛以外も同じくらい大切", 0]
    ]
  }
];

const dependenceResults = [
  {
    max: 7,
    title: "自立恋愛タイプ",
    percent: "0〜20%",
    emoji: "☁",
    catch: "恋人がいても、自分の世界を大切にできる。",
    description:
      "あなたは恋愛に振り回されにくく、自分の時間や人間関係を大切にできるタイプ。恋人とは適度な距離を保ちながら付き合う傾向があります。",
    good:
      "相手に依存しすぎず、お互いに自立した関係を築きやすいところ。",
    caution:
      "愛情表現が少なすぎると、相手から『本当に好き？』と思われることも。気持ちは時々言葉にすると◎。"
  },
  {
    max: 14,
    title: "マイペース恋愛タイプ",
    percent: "21〜40%",
    emoji: "♢",
    catch: "恋愛も大切。でも自分の時間も必要。",
    description:
      "あなたは恋人との時間を楽しみながら、自分自身の生活も比較的しっかり保てるタイプです。",
    good:
      "恋愛と自分の生活のバランスを取りやすいところ。",
    caution:
      "一人で平気だからこそ、相手が寂しがっていないか時々確認すると関係がさらに安定しそう。"
  },
  {
    max: 21,
    title: "バランス恋愛タイプ",
    percent: "41〜60%",
    emoji: "♡",
    catch: "好きだから近くにいたい。でも自分も大切。",
    description:
      "あなたは恋人への愛情と自立のバランスが比較的取れているタイプ。相手を大切にしながら、自分の生活も保とうとします。",
    good:
      "恋人との距離感を状況に合わせて調整しやすいところ。",
    caution:
      "不安になったときに一人で考え込みすぎず、素直に伝えることも大切です。"
  },
  {
    max: 28,
    title: "恋人優先タイプ",
    percent: "61〜80%",
    emoji: "♥",
    catch: "好きな人は、生活の中でもかなり大きな存在。",
    description:
      "あなたは恋人とのつながりを強く大切にするタイプ。連絡や会う時間、愛情表現によって安心感を得やすい傾向があります。",
    good:
      "愛情が深く、恋人を大切にできるところ。",
    caution:
      "相手中心になりすぎると疲れてしまうことも。友達や趣味など、自分だけの時間も残しておくと◎。"
  },
  {
    max: 36,
    title: "どっぷり恋愛タイプ",
    percent: "81〜100%",
    emoji: "♡♡",
    catch: "恋をすると、頭の中は大好きな人でいっぱい。",
    description:
      "あなたは恋愛への熱量がかなり高いタイプ。好きな人との連絡や時間、愛情表現をとても大切にします。",
    good:
      "好きな相手に深い愛情を注げるところ。恋人にとって『大切にされている』と感じやすい存在です。",
    caution:
      "相手の反応だけで一日の気分が決まってしまうなら、自分自身が楽しめる時間を少しずつ増やしてみるのもおすすめです。"
  }
];

let dependenceQuestion = 0;
let dependenceScore = 0;


// 恋愛依存度診断のボタンを有効化
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(
    '[data-diagnosis="dependence"]'
  );

  if (button) {
    button.addEventListener(
      "click",
      startDependenceDiagnosis
    );
  }
});


function startDependenceDiagnosis() {
  dependenceQuestion = 0;
  dependenceScore = 0;

  showDependenceQuestion();
}


function showDependenceQuestion() {
  const q = dependenceQuestions[dependenceQuestion];

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          恋愛依存度診断　
          QUESTION ${dependenceQuestion + 1}
          / ${dependenceQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${
              ((dependenceQuestion + 1)
              / dependenceQuestions.length) * 100
            }%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${dependenceQuestion + 1}
        </p>

        <h2>
          ${q.text}
        </h2>

        <div class="answer-list">

          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectDependenceAnswer(${index})"
            >
              <span>
                ${String.fromCharCode(65 + index)}
              </span>

              ${answer[0]}
            </button>
          `).join("")}

        </div>

      </section>

    </main>
  `;
}


function selectDependenceAnswer(index) {
  dependenceScore +=
    dependenceQuestions[dependenceQuestion]
      .answers[index][1];

  dependenceQuestion++;

  if (
    dependenceQuestion <
    dependenceQuestions.length
  ) {
    showDependenceQuestion();
  } else {
    showDependenceResult();
  }
}


function getDependenceResult() {
  return dependenceResults.find(
    result => dependenceScore <= result.max
  );
}


function showDependenceResult() {
  const result = getDependenceResult();

  const percentage =
    Math.round(
      (dependenceScore / 36) * 100
    );

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          あなたの恋愛依存度は…
        </p>

        <div class="result-icon">
          ${result.emoji}
        </div>

        <h1>
          ${result.title}
        </h1>

        <p class="result-catch">
          ${result.catch}
        </p>


        <div class="dependence-score">

          <span>恋愛依存度</span>

          <strong>
            ${percentage}%
          </strong>

          <div class="dependence-meter">
            <div
              class="dependence-meter-bar"
              style="width:${percentage}%"
            ></div>
          </div>

        </div>


        <div class="result-description">
          ${result.description}
        </div>


        <div class="result-two-column">

          <div class="result-card">
            <h2>◎ あなたの良いところ</h2>
            <p>
              ${result.good}
            </p>
          </div>

          <div class="result-card">
            <h2>△ 気をつけたいこと</h2>
            <p>
              ${result.caution}
            </p>
          </div>

        </div>


        <div class="share-area">

          <p>
            この結果をシェアする ♡
          </p>

          <div class="share-buttons">

            <button
              onclick="shareDependenceX(
                '${result.title}',
                ${percentage}
              )"
            >
              𝕏でシェア
            </button>

            <button
              onclick="shareDependenceLine(
                '${result.title}',
                ${percentage}
              )"
            >
              LINEでシェア
            </button>

            <button
              onclick="copyDependenceResult(
                '${result.title}',
                ${percentage}
              )"
            >
              結果をコピー
            </button>

          </div>

        </div>

<div class="result-buttons">
  <button onclick="openTalkPost('恋愛依存度診断', '${result.title} 依存度${percentage}%')">
    みんなの診断トークに投稿する ♡
  </button>
</div>
        <div class="result-buttons">

          <button
            onclick="startDependenceDiagnosis()"
          >
            もう一度診断する
          </button>

          <button
            onclick="location.reload()"
          >
            診断一覧に戻る
          </button>

        </div>

      </section>

    </main>
  `;
}


// ===== 恋愛依存度 SNSシェア =====

function shareDependenceX(title, percentage) {

  const text =
    `私の恋愛依存度は${percentage}%！\n` +
    `結果は「${title}」でした♡\n` +
    `#診断パレット #恋愛依存度診断`;

  window.open(
    `https://twitter.com/intent/tweet?text=${
      encodeURIComponent(text)
    }&url=${
      encodeURIComponent(window.location.href)
    }`,
    "_blank"
  );
}


function shareDependenceLine(title, percentage) {

  const text =
    `私の恋愛依存度は${percentage}%！\n` +
    `結果は「${title}」でした♡\n` +
    `#診断パレット #恋愛依存度診断`;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${
      encodeURIComponent(window.location.href)
    }&text=${
      encodeURIComponent(text)
    }`,
    "_blank"
  );
}


function copyDependenceResult(title, percentage) {

  const text =
    `私の恋愛依存度は${percentage}%！\n` +
    `結果は「${title}」でした♡\n` +
    `#診断パレット #恋愛依存度診断\n` +
    window.location.href;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(
        "診断結果をコピーしました♡"
      );
    })
    .catch(() => {
      alert(
        "コピーできませんでした"
      );
    });
}// ========================================
// モテタイプ診断
// ========================================

const charmQuestions = [
  {
    text: "初対面の人とも比較的すぐ話せる？",
    answers: [
      ["かなり得意", { friendly: 3, active: 2 }],
      ["わりと話せる", { friendly: 2, active: 1 }],
      ["相手による", { mystery: 1, gap: 1 }],
      ["かなり苦手", { mystery: 2, gap: 1 }]
    ]
  },
  {
    text: "好きな人ができたら？",
    answers: [
      ["自分から積極的にいく", { active: 3, sexy: 1 }],
      ["さりげなくアピールする", { sexy: 2, friendly: 1 }],
      ["相手の様子を見る", { mystery: 2, healing: 1 }],
      ["なかなか行動できない", { gap: 2, mystery: 1 }]
    ]
  },
  {
    text: "友達から相談されることは？",
    answers: [
      ["かなり多い", { healing: 3, friendly: 1 }],
      ["わりと多い", { healing: 2 }],
      ["たまにある", { friendly: 1 }],
      ["ほとんどない", { mystery: 2 }]
    ]
  },
  {
    text: "みんなで集まったときのあなたは？",
    answers: [
      ["場を盛り上げる", { friendly: 3, active: 2 }],
      ["みんなと楽しく話す", { friendly: 2, healing: 1 }],
      ["仲のいい人と話す", { healing: 1, gap: 1 }],
      ["聞き役になることが多い", { mystery: 2, healing: 2 }]
    ]
  },
  {
    text: "見た目や雰囲気を褒められることは？",
    answers: [
      ["よくある", { sexy: 3, mystery: 1 }],
      ["たまにある", { sexy: 2 }],
      ["どちらともいえない", { friendly: 1 }],
      ["あまりない", { healing: 1, gap: 1 }]
    ]
  },
  {
    text: "「意外だね」と言われることは？",
    answers: [
      ["かなり多い", { gap: 3 }],
      ["たまにある", { gap: 2 }],
      ["あまりない", { friendly: 1 }],
      ["ほぼない", { healing: 1 }]
    ]
  },
  {
    text: "人と話すときは？",
    answers: [
      ["相手の話を聞く方が得意", { healing: 3 }],
      ["聞く方が少し多い", { healing: 2, mystery: 1 }],
      ["半々くらい", { friendly: 2 }],
      ["自分が話す方が多い", { active: 2, friendly: 1 }]
    ]
  },
  {
    text: "自分だけの趣味や世界を持っている？",
    answers: [
      ["かなり持っている", { mystery: 3, gap: 1 }],
      ["そこそこある", { mystery: 2 }],
      ["普通だと思う", { friendly: 1 }],
      ["あまりない", { healing: 1 }]
    ]
  },
  {
    text: "人にお願いしたり頼ったりするのは？",
    answers: [
      ["自然にできる", { sexy: 2, friendly: 2 }],
      ["わりとできる", { friendly: 2 }],
      ["少し苦手", { gap: 2 }],
      ["かなり苦手", { mystery: 2, gap: 1 }]
    ]
  },
  {
    text: "気になる人には特別扱いする？",
    answers: [
      ["かなり分かりやすくする", { active: 3 }],
      ["さりげなくする", { sexy: 2, active: 1 }],
      ["あまり態度に出さない", { mystery: 2, gap: 1 }],
      ["むしろ避けてしまう", { gap: 3 }]
    ]
  },
  {
    text: "「何を考えているか分からない」と言われる？",
    answers: [
      ["よく言われる", { mystery: 3 }],
      ["たまに言われる", { mystery: 2 }],
      ["あまり言われない", { friendly: 1 }],
      ["全然言われない", { friendly: 2, healing: 1 }]
    ]
  },
  {
    text: "一緒にいる人から言われやすいのは？",
    answers: [
      ["落ち着く", { healing: 3 }],
      ["楽しい", { friendly: 3 }],
      ["面白い・意外", { gap: 3 }],
      ["印象に残る", { sexy: 2, active: 2 }]
    ]
  }
];

const charmResults = {
  healing: {
    title: "愛され癒やし系",
    icon: "♡",
    catch: "一緒にいるだけで、なんだか落ち着く。",
    reason: "あなたの最大の魅力は安心感。話しやすく、自然体でいられる雰囲気が人を惹きつけます。",
    impression: "優しそう・話を聞いてくれそう・一緒にいると落ち着きそうと思われやすいタイプ。",
    weapon: "無理にアピールしなくても、時間をかけるほど魅力が伝わるところ。",
    weakness: "いい人で終わってしまうことも。好きな相手には少しだけ特別感を出すと◎。"
  },

  sexy: {
    title: "小悪魔系",
    icon: "♥",
    catch: "気づいたら、なぜか気になってしまう。",
    reason: "距離の縮め方や雰囲気に、人を惹きつける魅力を持っているタイプです。",
    impression: "ちょっと気になる・もっと知りたい・なんとなく目で追ってしまうと思われやすいタイプ。",
    weapon: "自然な距離感と、さりげない特別扱い。",
    weakness: "無意識の行動が思わせぶりに見える場合もあります。"
  },

  mystery: {
    title: "高嶺の花系",
    icon: "♢",
    catch: "簡単には読めない。その距離感が魅力。",
    reason: "自分の世界を持ち、周囲に流されにくいところがあなたの魅力です。",
    impression: "気になるけど少し近づきにくい・もっと知ってみたいと思われやすいタイプ。",
    weapon: "全部を見せすぎない独特の雰囲気。",
    weakness: "興味がないように見られることも。気になる相手には笑顔やリアクションを少し多めに。"
  },

  friendly: {
    title: "友達から恋人系",
    icon: "♧",
    catch: "気づいたら、一番近い存在になっている。",
    reason: "親しみやすさが強み。自然に距離を縮められるので、友達関係から恋に発展しやすいタイプです。",
    impression: "話しやすい・楽しい・また会いたいと思われやすいタイプ。",
    weapon: "自然体のコミュニケーション力。",
    weakness: "友達感が強くなりすぎることも。恋愛対象には少し違う一面を見せると◎。"
  },

  gap: {
    title: "ギャップ萌え系",
    icon: "✦",
    catch: "知れば知るほど、印象が変わる。",
    reason: "第一印象と仲良くなった後の違いが魅力になるタイプです。",
    impression: "最初は気づかなかったけど、意外と面白い・かわいいと思われやすいタイプ。",
    weapon: "仲良くなった人だけが知れる意外な一面。",
    weakness: "魅力が伝わるまで少し時間がかかりやすいところ。"
  },

  active: {
    title: "情熱アタック系",
    icon: "♥",
    catch: "好きになったら、恋のチャンスは自分でつかむ。",
    reason: "積極性と分かりやすい好意があなたの魅力。恋愛を動かす力を持っています。",
    impression: "明るい・自信がありそう・一緒にいると刺激がありそうと思われやすいタイプ。",
    weapon: "チャンスを逃しにくい行動力。",
    weakness: "相手のペースより先に進みすぎないよう、反応を見る余裕を持つと◎。"
  }
};

let charmQuestion = 0;

let charmScores = {
  healing: 0,
  sexy: 0,
  mystery: 0,
  friendly: 0,
  gap: 0,
  active: 0
};


// 「診断する」ボタンを動かす
document.addEventListener("DOMContentLoaded", () => {
  const charmButton =
    document.querySelector('[data-diagnosis="charm"]');

  if (charmButton) {
    charmButton.addEventListener("click", startCharmDiagnosis);
  }
});


function startCharmDiagnosis() {
  charmQuestion = 0;

  charmScores = {
    healing: 0,
    sexy: 0,
    mystery: 0,
    friendly: 0,
    gap: 0,
    active: 0
  };

  showCharmQuestion();
}


function showCharmQuestion() {
  const q = charmQuestions[charmQuestion];

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          モテタイプ診断　
          QUESTION ${charmQuestion + 1} / ${charmQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${((charmQuestion + 1) / charmQuestions.length) * 100}%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${charmQuestion + 1}
        </p>

        <h2>${q.text}</h2>

        <div class="answer-list">

          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectCharmAnswer(${index})"
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${answer[0]}
            </button>
          `).join("")}

        </div>

      </section>
    </main>
  `;
}


function selectCharmAnswer(index) {
  const points =
    charmQuestions[charmQuestion].answers[index][1];

  Object.entries(points).forEach(([type, point]) => {
    charmScores[type] += point;
  });

  charmQuestion++;

  if (charmQuestion < charmQuestions.length) {
    showCharmQuestion();
  } else {
    showCharmResult();
  }
}


function getCharmType() {
  return Object.keys(charmScores).reduce(
    (best, type) =>
      charmScores[type] > charmScores[best] ? type : best,
    "healing"
  );
}


function showCharmResult() {
  const type = getCharmType();
  const result = charmResults[type];

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          あなたのモテタイプは…
        </p>

        <div class="result-icon">
          ${result.icon}
        </div>

        <h1>${result.title}</h1>

        <p class="result-catch">
          ${result.catch}
        </p>

        <div class="result-card">
          <h2>♡ あなたがモテる理由</h2>
          <p>${result.reason}</p>
        </div>

        <div class="result-two-column">

          <div class="result-card">
            <h2>異性からどう見られやすい？</h2>
            <p>${result.impression}</p>
          </div>

          <div class="result-card">
            <h2>あなたの恋愛の武器</h2>
            <p>${result.weapon}</p>
          </div>

        </div>

        <div class="result-card">
          <h2>△ ちょっと損しやすいところ</h2>
          <p>${result.weakness}</p>
        </div>

        <div class="share-area">

          <p>この結果をシェアする ♡</p>

          <div class="share-buttons">

            <button onclick="shareCharmX('${result.title}')">
              𝕏でシェア
            </button>

            <button onclick="shareCharmLine('${result.title}')">
              LINEでシェア
            </button>

            <button onclick="copyCharmResult('${result.title}')">
              結果をコピー
            </button>

          </div>
        </div>
<div class="result-buttons">
  <button onclick="openTalkPost('モテタイプ診断', '${result.title}')">
    みんなの診断トークに投稿する ♡
  </button>
</div>
        <div class="result-buttons">

          <button onclick="startCharmDiagnosis()">
            もう一度診断する
          </button>

          <button onclick="location.reload()">
            診断一覧に戻る
          </button>

        </div>

      </section>
    </main>
  `;
}


// ===== モテタイプ診断 SNSシェア =====

function shareCharmX(title) {
  const text =
    `私のモテタイプは「${title}」でした♡\n` +
    `#診断パレット #モテタイプ診断`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`,
    "_blank"
  );
}


function shareCharmLine(title) {
  const text =
    `私のモテタイプは「${title}」でした♡\n` +
    `#診断パレット #モテタイプ診断`;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`,
    "_blank"
  );
}


function copyCharmResult(title) {
  const text =
    `私のモテタイプは「${title}」でした♡\n` +
    `#診断パレット #モテタイプ診断\n` +
    window.location.href;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("診断結果をコピーしました♡");
    })
    .catch(() => {
      alert("コピーできませんでした");
    });
}// ========================================
// ふたりの相性診断
// ========================================

const compatibilityQuestions = [
  {
    category: "contact",
    text: "恋人との連絡はどのくらい取りたい？",
    answers: [
      "一日中こまめに連絡したい",
      "毎日ある程度は連絡したい",
      "必要なときに連絡できればいい",
      "数日連絡しなくても平気"
    ]
  },
  {
    category: "distance",
    text: "恋人とはどのくらい会いたい？",
    answers: [
      "できれば毎日",
      "週に3〜4回くらい",
      "週に1〜2回くらい",
      "会う回数にはこだわらない"
    ]
  },
  {
    category: "affection",
    text: "恋人からの愛情表現は？",
    answers: [
      "たくさんしてほしい",
      "わりとしてほしい",
      "たまにあれば十分",
      "言葉より行動で分かればいい"
    ]
  },
  {
    category: "distance",
    text: "恋人が異性の友達と遊ぶのは？",
    answers: [
      "かなり嫌",
      "少し気になる",
      "事前に聞いていれば平気",
      "基本的に自由でいい"
    ]
  },
  {
    category: "distance",
    text: "恋人がいても一人の時間は？",
    answers: [
      "ほとんど必要ない",
      "少しあればいい",
      "ある程度必要",
      "かなり大切"
    ]
  },
  {
    category: "communication",
    text: "喧嘩したときはどうしたい？",
    answers: [
      "すぐ話し合って仲直りしたい",
      "少し時間を置いてから話したい",
      "相手から話しかけてほしい",
      "一人で気持ちを整理したい"
    ]
  },
  {
    category: "values",
    text: "恋人とのお金の使い方は？",
    answers: [
      "思い出のためなら結構使いたい",
      "楽しみつつ無理なく使いたい",
      "できるだけ計画的に使いたい",
      "かなり節約したい"
    ]
  },
  {
    category: "values",
    text: "理想の休日は？",
    answers: [
      "外に出ていろいろ遊びたい",
      "デートや外食を楽しみたい",
      "家でゆっくり過ごしたい",
      "それぞれ好きなことをしたい"
    ]
  },
  {
    category: "values",
    text: "恋人との将来については？",
    answers: [
      "早めに結婚などを考えたい",
      "付き合いながら具体的に考えたい",
      "時間をかけて考えたい",
      "今が楽しければあまり考えない"
    ]
  },
  {
    category: "affection",
    text: "恋愛に一番求めるのは？",
    answers: [
      "ドキドキする刺激",
      "たくさんの愛情",
      "安心感と信頼",
      "自由と心地よい距離感"
    ]
  }
];

let compatibilityPerson = "self";
let compatibilityQuestion = 0;

let selfAnswers = [];
let partnerAnswers = [];


// 相性診断ボタン
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(
    '[data-diagnosis="compatibility"]'
  );

  if (button) {
    button.addEventListener(
      "click",
      startCompatibilityDiagnosis
    );
  }
});


function startCompatibilityDiagnosis() {
  compatibilityPerson = "self";
  compatibilityQuestion = 0;

  selfAnswers = [];
  partnerAnswers = [];

  showCompatibilityIntro();
}


function showCompatibilityIntro() {
  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <p class="quiz-number">
          STEP 1
        </p>

        <h2>
          まずは、あなたについて答えてね♡
        </h2>

        <p class="result-description">
          このあと同じ10問に、
          相手についても答えてもらいます。
          <br><br>
          できるだけ「こうだったらいいな」ではなく、
          実際の考え方に近いものを選んでね。
        </p>

        <div class="result-buttons">
          <button onclick="showCompatibilityQuestion()">
            診断スタート
          </button>
        </div>

      </section>

    </main>
  `;
}


function showCompatibilityQuestion() {
  const q =
    compatibilityQuestions[compatibilityQuestion];

  const personText =
    compatibilityPerson === "self"
      ? "あなたについて"
      : "相手について";

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          ${personText}　
          QUESTION ${compatibilityQuestion + 1}
          / ${compatibilityQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${
              ((compatibilityQuestion + 1) /
              compatibilityQuestions.length) * 100
            }%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${compatibilityQuestion + 1}
        </p>

        <h2>
          ${q.text}
        </h2>

        <div class="answer-list">

          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectCompatibilityAnswer(${index})"
            >
              <span>
                ${String.fromCharCode(65 + index)}
              </span>

              ${answer}
            </button>
          `).join("")}

        </div>

      </section>

    </main>
  `;
}


function selectCompatibilityAnswer(index) {

  if (compatibilityPerson === "self") {
    selfAnswers.push(index);
  } else {
    partnerAnswers.push(index);
  }

  compatibilityQuestion++;

  if (
    compatibilityQuestion <
    compatibilityQuestions.length
  ) {
    showCompatibilityQuestion();
    return;
  }

  if (compatibilityPerson === "self") {
    compatibilityPerson = "partner";
    compatibilityQuestion = 0;

    showPartnerIntro();
  } else {
    showCompatibilityResult();
  }
}


function showPartnerIntro() {
  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <p class="quiz-number">
          STEP 2
        </p>

        <h2>
          次は、相手について答えてね♡
        </h2>

        <p class="result-description">
          相手本人に答えてもらってもOK。
          <br><br>
          難しい場合は、
          あなたから見た相手の考え方を選んでね。
        </p>

        <div class="result-buttons">
          <button onclick="showCompatibilityQuestion()">
            相手の診断スタート
          </button>
        </div>

      </section>

    </main>
  `;
}


// 1問ごとの近さを0〜100点に変換
function compatibilityPoint(a, b) {
  const difference = Math.abs(a - b);

  if (difference === 0) return 100;
  if (difference === 1) return 80;
  if (difference === 2) return 55;

  return 30;
}


function calculateCompatibility() {

  let total = 0;

  const categoryScores = {
    contact: [],
    distance: [],
    affection: [],
    communication: [],
    values: []
  };

  compatibilityQuestions.forEach(
    (question, index) => {

      const point = compatibilityPoint(
        selfAnswers[index],
        partnerAnswers[index]
      );

      total += point;

      categoryScores[
        question.category
      ].push(point);
    }
  );

  const average = values => {
    if (values.length === 0) return 0;

    return Math.round(
      values.reduce((a, b) => a + b, 0) /
      values.length
    );
  };

  return {
    total: Math.round(
      total / compatibilityQuestions.length
    ),

    contact:
      average(categoryScores.contact),

    distance:
      average(categoryScores.distance),

    affection:
      average(categoryScores.affection),

    communication:
      average(categoryScores.communication),

    values:
      average(categoryScores.values)
  };
}


function getCompatibilityMessage(score) {

  if (score >= 90) {
    return {
      title: "息ぴったり相性",
      catch:
        "自然体のままでも、かなりテンポが合いやすいふたり。",
      description:
        "恋愛で大切にしたいことや距離感がかなり近い組み合わせ。似ている部分を大切にしつつ、違う部分も楽しめるとさらに心地よい関係になりそう。"
    };
  }

  if (score >= 75) {
    return {
      title: "かなり好相性",
      catch:
        "違いはあるけど、基本的な感覚は近め。",
      description:
        "ふたりには共通する恋愛感覚が多く、比較的理解し合いやすい組み合わせ。少し違う部分も、話し合うことでお互いの魅力になりそう。"
    };
  }

  if (score >= 60) {
    return {
      title: "バランス相性",
      catch:
        "似ているところと違うところ、どちらもあるふたり。",
      description:
        "全部が同じではないからこそ、お互いから学べる組み合わせ。相手の考え方を決めつけずに確認することが、関係を深めるポイント。"
    };
  }

  if (score >= 45) {
    return {
      title: "凸凹コンビ相性",
      catch:
        "違いがあるからこそ、ハマると強い。",
      description:
        "恋愛のペースや考え方に違いが出やすいふたり。相手が自分と同じだと思わず、お互いの『普通』を伝え合うことが大切です。"
    };
  }

  return {
    title: "正反対タイプ相性",
    catch:
      "かなり違うふたり。でも、相性は数字だけでは決まらない。",
    description:
      "恋愛で求めるものや距離感に違いが出やすい組み合わせ。違いを我慢するのではなく、どこまでならお互い心地よく合わせられるかを話すことがポイント。"
  };
}


function heartRating(score) {
  if (score >= 90) return "★★★★★";
  if (score >= 75) return "★★★★☆";
  if (score >= 60) return "★★★☆☆";
  if (score >= 45) return "★★☆☆☆";

  return "★☆☆☆☆";
}


function showCompatibilityResult() {

  const scores = calculateCompatibility();

  const result =
    getCompatibilityMessage(scores.total);

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          ふたりの総合相性は…
        </p>

        <div class="result-icon">
          ♡
        </div>

        <h1>
          ${scores.total}%
        </h1>

        <h2>
          ${result.title}
        </h2>

        <p class="result-catch">
          ${result.catch}
        </p>


        <div class="dependence-score">

          <span>
            ふたりの相性
          </span>

          <strong>
            ${scores.total}%
          </strong>

          <div class="dependence-meter">
            <div
              class="dependence-meter-bar"
              style="width:${scores.total}%"
            ></div>
          </div>

        </div>


        <div class="result-description">
          ${result.description}
        </div>


        <div class="result-card">

          <h2>
            ふたりの相性を詳しく見る
          </h2>

          <div class="rating-row">
            <span>連絡のテンポ</span>
            <strong>
              ${heartRating(scores.contact)}
            </strong>
          </div>

          <div class="rating-row">
            <span>距離感</span>
            <strong>
              ${heartRating(scores.distance)}
            </strong>
          </div>

          <div class="rating-row">
            <span>愛情表現</span>
            <strong>
              ${heartRating(scores.affection)}
            </strong>
          </div>

          <div class="rating-row">
            <span>話し合い</span>
            <strong>
              ${heartRating(scores.communication)}
            </strong>
          </div>

          <div class="rating-row">
            <span>価値観</span>
            <strong>
              ${heartRating(scores.values)}
            </strong>
          </div>

        </div>


        <div class="share-area">

          <p>
            ふたりの結果をシェアする ♡
          </p>

          <div class="share-buttons">

            <button
              onclick="shareCompatibilityX(
                ${scores.total},
                '${result.title}'
              )"
            >
              𝕏でシェア
            </button>

            <button
              onclick="shareCompatibilityLine(
                ${scores.total},
                '${result.title}'
              )"
            >
              LINEでシェア
            </button>

            <button
              onclick="copyCompatibilityResult(
                ${scores.total},
                '${result.title}'
              )"
            >
              結果をコピー
            </button>

          </div>

        </div>
<div class="result-buttons">
  <button onclick="openTalkPost('ふたりの相性診断', '${result.title} ${scores.total}%')">
    みんなの診断トークに投稿する ♡
  </button>
</div>

        <div class="result-buttons">

          <button
            onclick="startCompatibilityDiagnosis()"
          >
            もう一度診断する
          </button>

          <button
            onclick="location.reload()"
          >
            診断一覧に戻る
          </button>

        </div>

      </section>

    </main>
  `;
}


// ===== 相性診断 SNSシェア =====

function shareCompatibilityX(score, title) {

  const text =
    `ふたりの相性は${score}%♡\n` +
    `結果は「${title}」でした！\n` +
    `#診断パレット #相性診断`;

  window.open(
    `https://twitter.com/intent/tweet?text=${
      encodeURIComponent(text)
    }&url=${
      encodeURIComponent(window.location.href)
    }`,
    "_blank"
  );
}


function shareCompatibilityLine(score, title) {

  const text =
    `ふたりの相性は${score}%♡\n` +
    `結果は「${title}」でした！\n` +
    `#診断パレット #相性診断`;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${
      encodeURIComponent(window.location.href)
    }&text=${
      encodeURIComponent(text)
    }`,
    "_blank"
  );
}


function copyCompatibilityResult(score, title) {

  const text =
    `ふたりの相性は${score}%♡\n` +
    `結果は「${title}」でした！\n` +
    `#診断パレット #相性診断\n` +
    window.location.href;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("相性診断の結果をコピーしました♡");
    })
    .catch(() => {
      alert("コピーできませんでした");
    });
}//
// ========================================
// サイコパス傾向診断
// ========================================

const psychopathQuestions = [
  {
    text: "トラブルが起きたとき、感情より先に解決方法を考える？",
    answers: [
      ["かなり当てはまる", 3],
      ["まあ当てはまる", 2],
      ["あまり当てはまらない", 1],
      ["全然当てはまらない", 0]
    ]
  },
  {
    text: "緊張する場面でも、冷静でいられる方？",
    answers: [
      ["かなり冷静", 3],
      ["比較的冷静", 2],
      ["少し焦る", 1],
      ["かなり焦る", 0]
    ]
  },
  {
    text: "誰かが泣いていると、自分までつらくなる？",
    answers: [
      ["かなり影響される", 0],
      ["少し影響される", 1],
      ["あまり影響されない", 2],
      ["ほとんど影響されない", 3]
    ]
  },
  {
    text: "欲しい結果のためなら、作戦を考えて動く方？",
    answers: [
      ["かなりそう", 3],
      ["わりとそう", 2],
      ["あまりしない", 1],
      ["ほとんどしない", 0]
    ]
  },
  {
    text: "小さな嘘をつくことへの抵抗は？",
    answers: [
      ["かなり抵抗がある", 0],
      ["少し抵抗がある", 1],
      ["状況によっては平気", 2],
      ["あまり抵抗はない", 3]
    ]
  },
  {
    text: "少し危険でも、面白そうなら挑戦したくなる？",
    answers: [
      ["かなりなる", 3],
      ["少しなる", 2],
      ["あまりならない", 1],
      ["安全な方を選ぶ", 0]
    ]
  },
  {
    text: "他人から嫌われたかも…と長く気にする？",
    answers: [
      ["かなり気にする", 0],
      ["少し気にする", 1],
      ["あまり気にしない", 2],
      ["ほとんど気にしない", 3]
    ]
  },
  {
    text: "初対面でも堂々としていられる？",
    answers: [
      ["かなり得意", 3],
      ["わりと平気", 2],
      ["少し緊張する", 1],
      ["かなり緊張する", 0]
    ]
  },
  {
    text: "失敗したことを何日も引きずる？",
    answers: [
      ["かなり引きずる", 0],
      ["少し引きずる", 1],
      ["切り替えは早い", 2],
      ["ほぼ引きずらない", 3]
    ]
  },
  {
    text: "本音や感情を顔に出さないのは得意？",
    answers: [
      ["かなり得意", 3],
      ["わりと得意", 2],
      ["少し出てしまう", 1],
      ["すぐ顔に出る", 0]
    ]
  },
  {
    text: "ルールより結果を優先したくなることがある？",
    answers: [
      ["よくある", 3],
      ["たまにある", 2],
      ["あまりない", 1],
      ["ほとんどない", 0]
    ]
  },
  {
    text: "プレッシャーが強いほど燃えるタイプ？",
    answers: [
      ["かなり燃える", 3],
      ["少し燃える", 2],
      ["少し苦手", 1],
      ["かなり苦手", 0]
    ]
  }
];

const psychopathResults = [
  {
    max: 7,
    title: "共感重視タイプ",
    catch: "人の気持ちに寄り添う、やさしさ強めタイプ。",
    description: "周囲の感情や空気を感じ取りやすく、人とのつながりを大切にする傾向があります。",
    feature: "相手の立場を想像しながら行動するのが得意。困っている人を見ると放っておけないことも。",
    caution: "周囲の気持ちを優先しすぎて、自分が疲れてしまわないように注意。"
  },
  {
    max: 14,
    title: "やさしい現実派",
    catch: "やさしさも冷静さも持っている現実派。",
    description: "人の気持ちを考えながら、必要な場面では現実的な判断もできるタイプです。",
    feature: "共感と冷静さを切り替えながら、自分で考えて行動できるところ。",
    caution: "人に合わせすぎず、自分の意見も大切にするとさらにバランス◎。"
  },
  {
    max: 21,
    title: "冷静バランスタイプ",
    catch: "感情と冷静さを使い分けるバランス派。",
    description: "感情だけにも理屈だけにも偏りにくく、状況を見ながら判断する傾向があります。",
    feature: "相手の気持ちを考えながら、一歩引いて状況を見ることもできます。",
    caution: "考えすぎて、自分の本音を後回しにしないようにすると◎。"
  },
  {
    max: 28,
    title: "クール戦略タイプ",
    catch: "感情に流されにくい、頭脳派タイプ。",
    description: "プレッシャーのある場面でも比較的冷静で、先の展開を考えて行動する傾向があります。",
    feature: "状況を客観的に見たり、結果までの道筋を考えたりするのが得意。",
    caution: "合理性を優先しすぎると、悪気がなくても冷たく見られることがあります。"
  },
  {
    max: 36,
    title: "超冷静大胆タイプ",
    catch: "動じにくさMAX級。大胆に進めるタイプ。",
    description: "感情に左右されにくく、プレッシャーのある状況でも思い切った判断をしやすい傾向があります。",
    feature: "緊張する場面でも冷静さを保ちやすく、迷いすぎず行動できるところ。",
    caution: "自分では気にならないことでも、相手は違う感じ方をしている場合があります。"
  }
];

let psychopathQuestion = 0;
let psychopathScore = 0;


// ボタン接続
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(
    '[data-diagnosis="psychopath"]'
  );

  if (button) {
    button.addEventListener("click", startPsychopathDiagnosis);
  }
});


// 診断スタート
function startPsychopathDiagnosis() {
  psychopathQuestion = 0;
  psychopathScore = 0;
  showPsychopathQuestion();
}


// 質問表示
function showPsychopathQuestion() {
  const q = psychopathQuestions[psychopathQuestion];

  const progress =
    ((psychopathQuestion + 1) / psychopathQuestions.length) * 100;

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          サイコパス傾向診断
          QUESTION ${psychopathQuestion + 1} / ${psychopathQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${progress}%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${psychopathQuestion + 1}
        </p>

        <h2>${q.text}</h2>

        <div class="answer-list">
          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectPsychopathAnswer(${index})"
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${answer[0]}
            </button>
          `).join("")}
        </div>

        <p style="
          margin-top: 25px;
          font-size: 12px;
          line-height: 1.7;
          color: #999;
          text-align: center;
        ">
          ※この診断はエンタメ目的です。
          医学的・心理学的な診断ではありません。
        </p>

      </section>
    </main>
  `;
}


// 回答
function selectPsychopathAnswer(index) {
  psychopathScore +=
    psychopathQuestions[psychopathQuestion].answers[index][1];

  psychopathQuestion++;

  if (psychopathQuestion < psychopathQuestions.length) {
    showPsychopathQuestion();
  } else {
    showPsychopathResult();
  }
}


// 結果判定
function getPsychopathResult() {
  return psychopathResults.find(
    result => psychopathScore <= result.max
  );
}


// 結果表示
function showPsychopathResult() {
  const result = getPsychopathResult();

  const percentage = Math.round(
    (psychopathScore / 36) * 100
  );

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          あなたのサイコパス傾向度は…
        </p>

        <div class="dependence-score">

          <span>サイコパス傾向度</span>

          <strong>${percentage}%</strong>

          <div class="dependence-meter">
            <div
              class="dependence-meter-bar"
              style="width:${percentage}%"
            ></div>
          </div>

        </div>

        <h1>${result.title}</h1>

        <p class="result-catch">
          ${result.catch}
        </p>

        <div class="result-description">
          ${result.description}
        </div>

        <div class="result-two-column">

          <div class="result-card">
            <h2>◎ あなたの特徴</h2>
            <p>${result.feature}</p>
          </div>

          <div class="result-card">
            <h2>△ 気をつけたいところ</h2>
            <p>${result.caution}</p>
          </div>

        </div>

        <p style="
          margin: 25px 0;
          font-size: 12px;
          line-height: 1.7;
          color: #999;
        ">
          ※この診断はエンタメ目的です。
          医学的・心理学的にサイコパシーを
          判定するものではありません。
        </p>

        <div class="share-area">

          <p>この結果をシェアする ♡</p>

          <div class="share-buttons">

            <button onclick="sharePsychopathX('${result.title}', ${percentage})">
              𝕏でシェア
            </button>

            <button onclick="sharePsychopathLine('${result.title}', ${percentage})">
              LINEでシェア
            </button>

            <button onclick="copyPsychopathResult('${result.title}', ${percentage})">
              結果をコピー
            </button>

          </div>
        </div>
<div class="result-buttons">
  <button onclick="openTalkPost('サイコパス傾向診断', '${result.title} サイコパス傾向度${percentage}%')">
    みんなの診断トークに投稿する ♡
  </button>
</div>
        <div class="result-buttons">

          <button onclick="startPsychopathDiagnosis()">
            もう一度診断する
          </button>

          <button onclick="location.reload()">
            診断一覧に戻る
          </button>

        </div>

      </section>
    </main>
  `;
}


// Xシェア
function sharePsychopathX(title, percentage) {
  const text =
    `サイコパス傾向診断をやってみた！\n` +
    `サイコパス傾向度 ${percentage}%\n` +
    `結果は「${title}」でした。\n` +
    `#診断パレット #サイコパス傾向診断`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`,
    "_blank"
  );
}


// LINEシェア
function sharePsychopathLine(title, percentage) {
  const text =
    `サイコパス傾向診断\n` +
    `サイコパス傾向度 ${percentage}%\n` +
    `結果は「${title}」でした！`;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`,
    "_blank"
  );
}


// 結果コピー
function copyPsychopathResult(title, percentage) {
  const text =
    `サイコパス傾向診断\n` +
    `サイコパス傾向度 ${percentage}%\n` +
    `結果：「${title}」\n` +
    `#診断パレット`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("診断結果をコピーしました♡");
    })
    .catch(() => {
      alert("コピーできませんでした");
    });
}
// ========================================
// 腹黒度診断
// ========================================

const darknessQuestions = [
  {
    text: "苦手な人と話すとき、普通に笑顔で接することができる？",
    answers: [
      ["かなりできる", 3],
      ["まあできる", 2],
      ["態度に少し出る", 1],
      ["完全に顔に出る", 0]
    ]
  },
  {
    text: "本音と建前を使い分けることは多い？",
    answers: [
      ["かなり多い", 3],
      ["たまにある", 2],
      ["あまりない", 1],
      ["ほとんどない", 0]
    ]
  },
  {
    text: "人を褒めるとき、相手との関係を良くする目的も考える？",
    answers: [
      ["かなり考える", 3],
      ["少し考える", 2],
      ["あまり考えない", 1],
      ["純粋に思ったことだけ言う", 0]
    ]
  },
  {
    text: "人の弱点や苦手なことに気づくのは早い方？",
    answers: [
      ["かなり早い", 3],
      ["わりと早い", 2],
      ["普通だと思う", 1],
      ["あまり気づかない", 0]
    ]
  },
  {
    text: "誰かを助けるとき、自分にもメリットがあるか考える？",
    answers: [
      ["よく考える", 3],
      ["少し考える", 2],
      ["あまり考えない", 1],
      ["全く考えない", 0]
    ]
  },
  {
    text: "人から聞いた秘密はどうする？",
    answers: [
      ["必要なら情報として使うこともある", 3],
      ["状況によっては誰かに話す", 2],
      ["基本的には話さない", 1],
      ["絶対に誰にも話さない", 0]
    ]
  },
  {
    text: "嫌なことをされた相手のことを覚えている？",
    answers: [
      ["かなり長く覚えている", 3],
      ["わりと覚えている", 2],
      ["そのうち忘れる", 1],
      ["すぐ気にしなくなる", 0]
    ]
  },
  {
    text: "SNSでは実際の自分より良く見えるように投稿することがある？",
    answers: [
      ["かなりある", 3],
      ["たまにある", 2],
      ["ほとんどない", 1],
      ["全くない", 0]
    ]
  },
  {
    text: "誰かにお願いするとき、頼むタイミングを考える？",
    answers: [
      ["かなり考える", 3],
      ["少し考える", 2],
      ["あまり考えない", 1],
      ["思ったときにそのまま頼む", 0]
    ]
  },
  {
    text: "人間関係の中で『誰が一番影響力を持っているか』気になる？",
    answers: [
      ["かなり気になる", 3],
      ["少し気になる", 2],
      ["あまり気にならない", 1],
      ["全く気にならない", 0]
    ]
  },
  {
    text: "嫌いな人にも、自分に必要なら普通に接することができる？",
    answers: [
      ["全く態度を変えない", 3],
      ["だいたい普通にできる", 2],
      ["少し態度に出る", 1],
      ["無理。完全に態度に出る", 0]
    ]
  },
  {
    text: "何か行動するとき、その後どうなるか先まで考える方？",
    answers: [
      ["かなり先まで考える", 3],
      ["ある程度考える", 2],
      ["あまり考えない", 1],
      ["ほぼ直感で動く", 0]
    ]
  }
];


// ========================================
// 腹黒度 結果5タイプ
// ========================================

const darknessResults = [
  {
    max: 7,
    title: "ピュア透明タイプ",
    catch: "裏表ほぼゼロ。思ったことがそのまま表に出やすいタイプ。",
    description:
      "駆け引きよりも素直さを大切にする傾向があります。計算して人と接するより、自然体でいる方がラクなタイプ。",
    face:
      "明るく素直。周囲からも「分かりやすい人」と思われやすそう。",
    hidden:
      "実は裏の顔もかなり表と同じ。秘密の作戦を練るより、その場の気持ちで動きやすいタイプ。",
    strategy:
      "★☆☆☆☆",
    insight:
      "★★☆☆☆"
  },
  {
    max: 14,
    title: "ほんのり計算タイプ",
    catch: "基本は素直。でも必要なときだけちょっぴり計算。",
    description:
      "普段は自然体ですが、人間関係をスムーズにするための建前や気遣いも使えるタイプです。",
    face:
      "親しみやすく、裏表が少ない印象を持たれやすい。",
    hidden:
      "実は相手や状況を見て、少しだけ言い方や行動を変えていることも。",
    strategy:
      "★★☆☆☆",
    insight:
      "★★★☆☆"
  },
  {
    max: 21,
    title: "隠れ策士タイプ",
    catch: "自然に見えて、実はちゃんと考えている。",
    description:
      "素直さと計算高さのバランス型。必要な場面では先を読んで行動できる傾向があります。",
    face:
      "自然体で話しやすく、そこまで計算高い印象は与えにくいタイプ。",
    hidden:
      "実は人の反応やタイミングを意外とよく見ている。頭の中では先の展開を考えていることも。",
    strategy:
      "★★★☆☆",
    insight:
      "★★★☆☆"
  },
  {
    max: 28,
    title: "かなりの策士タイプ",
    catch: "人間関係の空気を読みながら、先回りできる策士。",
    description:
      "相手の性格や状況を観察して、自分の動き方を調整するのが得意な傾向があります。",
    face:
      "感じがよく、状況に合わせて柔軟に対応できる人に見られやすい。",
    hidden:
      "実はかなり周囲を観察しているタイプ。誰に何を言うか、タイミングまで考えていることも。",
    strategy:
      "★★★★☆",
    insight:
      "★★★★☆"
  },
  {
    max: 36,
    title: "笑顔の戦略家タイプ",
    catch: "表ではニコニコ。頭の中では何手も先を読んでいるかも。",
    description:
      "感情だけで動くより、相手・状況・タイミングを見ながら行動する傾向がかなり強いタイプです。",
    face:
      "落ち着いていて、人付き合いも器用。表面上は本音を読まれにくいかも。",
    hidden:
      "人の特徴や力関係をよく観察し、必要なら自分に有利な動き方を考えられる戦略派。",
    strategy:
      "★★★★★",
    insight:
      "★★★★★"
  }
];


let darknessQuestion = 0;
let darknessScore = 0;


// ========================================
// ボタン接続
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const darknessButton = document.querySelector(
    '[data-diagnosis="darkness"]'
  );

  if (darknessButton) {
    darknessButton.addEventListener(
      "click",
      startDarknessDiagnosis
    );
  }
});


// ========================================
// 診断スタート
// ========================================

function startDarknessDiagnosis() {
  darknessQuestion = 0;
  darknessScore = 0;

  showDarknessQuestion();
}


// ========================================
// 質問表示
// ========================================

function showDarknessQuestion() {
  const q = darknessQuestions[darknessQuestion];

  const progress =
    ((darknessQuestion + 1) / darknessQuestions.length) * 100;

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          腹黒度診断
          QUESTION ${darknessQuestion + 1} / ${darknessQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${progress}%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${darknessQuestion + 1}
        </p>

        <h2>${q.text}</h2>

        <div class="answer-list">
          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectDarknessAnswer(${index})"
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${answer[0]}
            </button>
          `).join("")}
        </div>

      </section>

    </main>
  `;
}


// ========================================
// 回答
// ========================================

function selectDarknessAnswer(index) {
  darknessScore +=
    darknessQuestions[darknessQuestion].answers[index][1];

  darknessQuestion++;

  if (darknessQuestion < darknessQuestions.length) {
    showDarknessQuestion();
  } else {
    showDarknessResult();
  }
}


// ========================================
// 結果判定
// ========================================

function getDarknessResult() {
  return darknessResults.find(
    result => darknessScore <= result.max
  );
}


// ========================================
// 結果表示
// ========================================

function showDarknessResult() {
  const result = getDarknessResult();

  const percentage = Math.round(
    (darknessScore / 36) * 100
  );

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          あなたの腹黒度は…
        </p>

        <div class="dependence-score">

          <span>腹黒度</span>

          <strong>${percentage}%</strong>

          <div class="dependence-meter">
            <div
              class="dependence-meter-bar"
              style="width:${percentage}%"
            ></div>
          </div>

        </div>

        <h1>${result.title}</h1>

        <p class="result-catch">
          ${result.catch}
        </p>

        <div class="result-description">
          ${result.description}
        </div>

        <div class="result-two-column">

          <div class="result-card">
            <h2>♡ 表の顔</h2>
            <p>${result.face}</p>
          </div>

          <div class="result-card">
            <h2>☾ 裏の顔</h2>
            <p>${result.hidden}</p>
          </div>

        </div>

        <div class="result-card">

          <div class="rating-row">
            <span>駆け引き力</span>
            <strong>${result.strategy}</strong>
          </div>

          <div class="rating-row">
            <span>人を見る力</span>
            <strong>${result.insight}</strong>
          </div>

        </div>


        <div class="share-area">

          <p>この結果をシェアする ♡</p>

          <div class="share-buttons">

            <button
              onclick="shareDarknessX('${result.title}', ${percentage})"
            >
              𝕏でシェア
            </button>

            <button
              onclick="shareDarknessLine('${result.title}', ${percentage})"
            >
              LINEでシェア
            </button>

            <button
              onclick="copyDarknessResult('${result.title}', ${percentage})"
            >
              結果をコピー
            </button>

          </div>

        </div>

<div class="result-buttons">
  <button onclick="openTalkPost('腹黒度診断', '${result.title} 腹黒度${percentage}%')">
    みんなの診断トークに投稿する ♡
  </button>
</div>
        <div class="result-buttons">

          <button onclick="startDarknessDiagnosis()">
            もう一度診断する
          </button>

          <button onclick="location.reload()">
            診断一覧に戻る
          </button>

        </div>

      </section>

    </main>
  `;
}


// ========================================
// Xシェア
// ========================================

function shareDarknessX(title, percentage) {
  const text =
    `腹黒度診断をやってみた！\n` +
    `腹黒度 ${percentage}%\n` +
    `結果は「${title}」でした。\n` +
    `#診断パレット #腹黒度診断`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`,
    "_blank"
  );
}


// ========================================
// LINEシェア
// ========================================

function shareDarknessLine(title, percentage) {
  const text =
    `腹黒度診断\n` +
    `腹黒度 ${percentage}%\n` +
    `結果は「${title}」でした！`;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`,
    "_blank"
  );
}


// ========================================
// 結果コピー
// ========================================

function copyDarknessResult(title, percentage) {
  const text =
    `腹黒度診断\n` +
    `腹黒度 ${percentage}%\n` +
    `結果：「${title}」\n` +
    `#診断パレット`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("診断結果をコピーしました♡");
    })
    .catch(() => {
      alert("コピーできませんでした");
    });
}
// ========================================
// 精神年齢診断
// ========================================

const mentalAgeQuestions = [
  {
    text: "楽しみにしていた予定が急に中止になったら？",
    answers: [
      ["かなり不機嫌になる", 0],
      ["ちょっと引きずる", 1],
      ["仕方ないと切り替える", 2],
      ["すぐ別の楽しみを考える", 3]
    ]
  },
  {
    text: "欲しいものを見つけたときは？",
    answers: [
      ["欲しかったらすぐ買う", 0],
      ["少し悩んで買う", 1],
      ["本当に必要か考える", 2],
      ["予算や今後の出費まで考える", 3]
    ]
  },
  {
    text: "誰かと意見がぶつかったら？",
    answers: [
      ["自分が正しいと押し通す", 0],
      ["少し感情的になる", 1],
      ["相手の意見も聞く", 2],
      ["お互い納得できる方法を探す", 3]
    ]
  },
  {
    text: "臨時収入が入ったらどうする？",
    answers: [
      ["全部好きなことに使う", 0],
      ["欲しいものを買う", 1],
      ["一部使って一部残す", 2],
      ["貯金や今後の予定も考える", 3]
    ]
  },
  {
    text: "人から注意されたときは？",
    answers: [
      ["イラッとして聞きたくない", 0],
      ["表では聞くけど納得しにくい", 1],
      ["一度考えてみる", 2],
      ["必要なら自分の行動を見直す", 3]
    ]
  },
  {
    text: "何も予定がない休日は？",
    answers: [
      ["その日の気分だけで動く", 0],
      ["とりあえず好きなことをする", 1],
      ["やりたいことを軽く決める", 2],
      ["休む時間とやることを考える", 3]
    ]
  },
  {
    text: "失敗してしまったときは？",
    answers: [
      ["誰かや環境のせいにしたくなる", 0],
      ["かなり落ち込む", 1],
      ["原因を考える", 2],
      ["原因と次の対策まで考える", 3]
    ]
  },
  {
    text: "5年後の自分について考えることは？",
    answers: [
      ["ほとんど考えない", 0],
      ["たまに想像する", 1],
      ["ある程度考えている", 2],
      ["具体的な目標まで考えている", 3]
    ]
  },
  {
    text: "友達から悩み相談をされたら？",
    answers: [
      ["自分ならこうするとすぐ答える", 0],
      ["とにかく励ます", 1],
      ["まず話を聞く", 2],
      ["話を聞いて相手に合う方法を考える", 3]
    ]
  },
  {
    text: "嫌なことがあった日は？",
    answers: [
      ["ずっと機嫌が悪くなる", 0],
      ["しばらく引きずる", 1],
      ["時間が経てば切り替える", 2],
      ["気持ちを整理して切り替える", 3]
    ]
  },
  {
    text: "新しいことを始めるときは？",
    answers: [
      ["楽しそうならすぐやる", 0],
      ["とりあえず試してみる", 1],
      ["メリットやリスクも考える", 2],
      ["調べてから計画的に始める", 3]
    ]
  },
  {
    text: "自分と全く違う考えの人がいたら？",
    answers: [
      ["理解できないと思う", 0],
      ["できれば関わりたくない", 1],
      ["そういう考えもあると思う", 2],
      ["なぜそう考えるのか興味を持つ", 3]
    ]
  }
];


// ========================================
// 精神年齢 結果
// ========================================

const mentalAgeResults = [
  {
    max: 7,
    age: "13〜17歳",
    title: "無邪気な自由人タイプ",
    catch: "「今楽しい！」を大切にする、自由な感性の持ち主。",
    description:
      "好奇心や感情を大切にして、難しく考えるより直感で動きやすいタイプです。",
    adult:
      "好きなものに対して素直で、周りまで楽しくさせるエネルギーがあります。",
    child:
      "感情がそのまま表に出やすかったり、先のことより今を優先したくなることも。",
    impression:
      "明るい・素直・自由・分かりやすい人と思われやすそう。"
  },
  {
    max: 14,
    age: "18〜22歳",
    title: "好奇心いっぱいタイプ",
    catch: "大人になりつつ、まだまだ冒険もしたい。",
    description:
      "現実も考え始めているけれど、楽しさや新しい経験も大切にするタイプです。",
    adult:
      "必要なときには現実的に考えられる柔軟さがあります。",
    child:
      "楽しそうなことを見つけると、計画より先に動きたくなることも。",
    impression:
      "フットワークが軽く、一緒にいると楽しい人と思われやすそう。"
  },
  {
    max: 21,
    age: "23〜29歳",
    title: "現実派バランスタイプ",
    catch: "楽しさも現実も、どちらも大切にできる。",
    description:
      "感情と現実のバランスを取りながら、自分なりに考えて行動するタイプです。",
    adult:
      "状況に合わせて気持ちを切り替えたり、相手の意見を聞いたりできます。",
    child:
      "好きなことになると急に夢中になる、無邪気な部分も残っています。",
    impression:
      "話しやすく、しっかりした部分もある人と思われやすそう。"
  },
  {
    max: 28,
    age: "30〜39歳",
    title: "落ち着き大人タイプ",
    catch: "感情だけに流されず、一歩先まで考える大人派。",
    description:
      "目の前だけでなく、その後のことまで考えて判断する傾向が強いタイプです。",
    adult:
      "感情を整理したり、問題が起きたときに解決策を考えたりするのが得意。",
    child:
      "普段は落ち着いていても、好きなものには意外とテンションが上がる一面も。",
    impression:
      "落ち着いている・頼れそう・しっかりしていると思われやすそう。"
  },
  {
    max: 33,
    age: "40〜49歳",
    title: "頼れるしっかり者タイプ",
    catch: "目先だけじゃなく、先のことまで考える慎重派。",
    description:
      "経験や結果を想像しながら、落ち着いて物事を判断する傾向があります。",
    adult:
      "計画性や感情のコントロールが強く、周囲から相談されることも多そう。",
    child:
      "慎重になりすぎて、勢いだけで楽しむ機会を逃してしまうことも。",
    impression:
      "安心感がある・真面目・相談しやすい人と思われやすそう。"
  },
  {
    max: 36,
    age: "50歳以上",
    title: "達観マスタータイプ",
    catch: "一歩引いて物事を見られる、落ち着きMAX級。",
    description:
      "感情だけで判断せず、長い目で物事を見る傾向がかなり強いタイプです。",
    adult:
      "違う考え方も受け止めながら、先を考えて冷静に判断できるところ。",
    child:
      "考えすぎて慎重になりすぎることも。たまには直感だけで楽しむのも◎。",
    impression:
      "落ち着いている・冷静・大人っぽい人と思われやすそう。"
  }
];


let mentalAgeQuestion = 0;
let mentalAgeScore = 0;


// ========================================
// ボタン接続
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const mentalAgeButton = document.querySelector(
    '[data-diagnosis="mental-age"]'
  );

  if (mentalAgeButton) {
    mentalAgeButton.addEventListener(
      "click",
      startMentalAgeDiagnosis
    );
  }
});


// ========================================
// 診断スタート
// ========================================

function startMentalAgeDiagnosis() {
  mentalAgeQuestion = 0;
  mentalAgeScore = 0;

  showMentalAgeQuestion();
}


// ========================================
// 質問表示
// ========================================

function showMentalAgeQuestion() {
  const q = mentalAgeQuestions[mentalAgeQuestion];

  const progress =
    ((mentalAgeQuestion + 1) / mentalAgeQuestions.length) * 100;

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          精神年齢診断
          QUESTION ${mentalAgeQuestion + 1} / ${mentalAgeQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${progress}%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${mentalAgeQuestion + 1}
        </p>

        <h2>${q.text}</h2>

        <div class="answer-list">
          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectMentalAgeAnswer(${index})"
            >
              <span>${String.fromCharCode(65 + index)}</span>
              ${answer[0]}
            </button>
          `).join("")}
        </div>

      </section>

    </main>
  `;
}


// ========================================
// 回答
// ========================================

function selectMentalAgeAnswer(index) {
  mentalAgeScore +=
    mentalAgeQuestions[mentalAgeQuestion].answers[index][1];

  mentalAgeQuestion++;

  if (mentalAgeQuestion < mentalAgeQuestions.length) {
    showMentalAgeQuestion();
  } else {
    showMentalAgeResult();
  }
}


// ========================================
// 結果判定
// ========================================

function getMentalAgeResult() {
  return mentalAgeResults.find(
    result => mentalAgeScore <= result.max
  );
}


// ========================================
// 結果表示
// ========================================

function showMentalAgeResult() {
  const result = getMentalAgeResult();

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          あなたの精神年齢は…
        </p>

        <div class="dependence-score">

          <span>精神年齢</span>

          <strong>${result.age}</strong>

        </div>

        <h1>${result.title}</h1>

        <p class="result-catch">
          ${result.catch}
        </p>

        <div class="result-description">
          ${result.description}
        </div>

        <div class="result-two-column">

          <div class="result-card">
            <h2>◎ 大人っぽいところ</h2>
            <p>${result.adult}</p>
          </div>

          <div class="result-card">
            <h2>♡ 子ども心</h2>
            <p>${result.child}</p>
          </div>

        </div>

        <div class="result-card">
          <h2>周りからはこう見られやすい</h2>
          <p>${result.impression}</p>
        </div>

        <p style="
          margin: 25px 0;
          font-size: 12px;
          line-height: 1.7;
          color: #999;
        ">
          ※この診断はエンタメ目的です。
          実際の年齢や心理的な成熟度を
          医学的・心理学的に判定するものではありません。
        </p>


        <div class="share-area">

          <p>この結果をシェアする ♡</p>

          <div class="share-buttons">

            <button
              onclick="shareMentalAgeX('${result.age}', '${result.title}')"
            >
              𝕏でシェア
            </button>

            <button
              onclick="shareMentalAgeLine('${result.age}', '${result.title}')"
            >
              LINEでシェア
            </button>

            <button
              onclick="copyMentalAgeResult('${result.age}', '${result.title}')"
            >
              結果をコピー
            </button>

          </div>

        </div>

<div class="result-buttons">
  <button onclick="openTalkPost('精神年齢診断', '${result.age} ${result.title}')">
    みんなの診断トークに投稿する ♡
  </button>
</div>
        <div class="result-buttons">

          <button onclick="startMentalAgeDiagnosis()">
            もう一度診断する
          </button>

          <button onclick="location.reload()">
            診断一覧に戻る
          </button>

        </div>

      </section>

    </main>
  `;
}


// ========================================
// Xシェア
// ========================================

function shareMentalAgeX(age, title) {
  const text =
    `精神年齢診断をやってみた！\n` +
    `私の精神年齢は「${age}」\n` +
    `タイプは「${title}」でした。\n` +
    `#診断パレット #精神年齢診断`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`,
    "_blank"
  );
}


// ========================================
// LINEシェア
// ========================================

function shareMentalAgeLine(age, title) {
  const text =
    `精神年齢診断\n` +
    `精神年齢は「${age}」\n` +
    `結果は「${title}」でした！`;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`,
    "_blank"
  );
}


// ========================================
// 結果コピー
// ========================================

function copyMentalAgeResult(age, title) {
  const text =
    `精神年齢診断\n` +
    `精神年齢：「${age}」\n` +
    `結果：「${title}」\n` +
    `#診断パレット`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("診断結果をコピーしました♡");
    })
    .catch(() => {
      alert("コピーできませんでした");
    });
}
// ========================================
// 隠れ性格診断
// ========================================

const hiddenPersonalityQuestions = [
  {
    text: "初対面の人が多い場所ではどうする？",
    answers: [
      ["自分からどんどん話しかける", { social: 3, assertive: 2 }],
      ["話しかけられたら普通に話す", { social: 2, careful: 1 }],
      ["まず周りを観察する", { careful: 3, sensitive: 1 }],
      ["できれば目立たずにいたい", { sensitive: 2, freedom: 1 }]
    ]
  },
  {
    text: "完全に自由な休日。何をしたい？",
    answers: [
      ["友達や恋人と出かける", { social: 3 }],
      ["前からやりたかったことをする", { freedom: 3 }],
      ["家でのんびり過ごす", { sensitive: 2, freedom: 1 }],
      ["その日の気分で決める", { freedom: 3, assertive: 1 }]
    ]
  },
  {
    text: "突然『今日会わない？』と誘われたら？",
    answers: [
      ["楽しそうならすぐOK", { social: 2, freedom: 2 }],
      ["相手によって決める", { careful: 2, social: 1 }],
      ["予定を確認してから決める", { careful: 3 }],
      ["急な誘いはちょっと苦手", { sensitive: 2, careful: 2 }]
    ]
  },
  {
    text: "人には言っていない秘密がある？",
    answers: [
      ["ほとんどない", { social: 2, assertive: 1 }],
      ["少しだけある", { careful: 1, sensitive: 1 }],
      ["結構ある", { careful: 2, sensitive: 2 }],
      ["本当の自分はあまり見せない", { sensitive: 3, careful: 3 }]
    ]
  },
  {
    text: "ずっと欲しかったものを友達が先に買っていたら？",
    answers: [
      ["普通に『いいな！』と思う", { social: 2 }],
      ["ちょっと悔しい", { assertive: 2 }],
      ["自分はもっといいものが欲しくなる", { assertive: 3, freedom: 1 }],
      ["表には出さないけど結構気になる", { sensitive: 2, assertive: 2 }]
    ]
  },
  {
    text: "グループで自分だけ意見が違ったら？",
    answers: [
      ["普通に自分の意見を言う", { assertive: 3 }],
      ["やんわり伝える", { assertive: 2, social: 1 }],
      ["とりあえず周りに合わせる", { sensitive: 2, careful: 1 }],
      ["言わないけど心の中では変えない", { freedom: 2, careful: 2 }]
    ]
  },
  {
    text: "人からすごく褒められたら？",
    answers: [
      ["素直にめちゃくちゃ嬉しい", { social: 2, sensitive: 1 }],
      ["嬉しいけど照れる", { sensitive: 2 }],
      ["本当にそう思ってる？と少し疑う", { careful: 3 }],
      ["当然かも、と思うこともある", { assertive: 3 }]
    ]
  },
  {
    text: "大きな失敗をしたときの本音は？",
    answers: [
      ["かなり落ち込む", { sensitive: 3 }],
      ["悔しくて次は絶対成功したい", { assertive: 3 }],
      ["原因をじっくり考える", { careful: 3 }],
      ["まあ何とかなると思う", { freedom: 3 }]
    ]
  },
  {
    text: "旅行に行くならどのタイプ？",
    answers: [
      ["予定をかなり細かく決める", { careful: 3 }],
      ["大事なところだけ決める", { careful: 2, freedom: 1 }],
      ["現地で気分次第", { freedom: 3 }],
      ["誰かに計画してもらいたい", { social: 2, sensitive: 1 }]
    ]
  },
  {
    text: "好きな人ができたとき、意外とどうなる？",
    answers: [
      ["自分から距離を縮める", { assertive: 3, social: 2 }],
      ["相手の反応をかなり見る", { careful: 3, sensitive: 1 }],
      ["普段より甘えたくなる", { sensitive: 3, social: 1 }],
      ["好きでも自分のペースは崩さない", { freedom: 3 }]
    ]
  },
  {
    text: "ストレスがたまったときは？",
    answers: [
      ["誰かに話したくなる", { social: 3 }],
      ["一人で考える", { careful: 2, sensitive: 1 }],
      ["好きなことをして忘れる", { freedom: 3 }],
      ["表では普通だけど内心かなり抱える", { sensitive: 3 }]
    ]
  },
  {
    text: "あなたの『本当の性格』を知っている人は？",
    answers: [
      ["かなり多いと思う", { social: 3, assertive: 1 }],
      ["仲のいい人なら知っている", { social: 1, sensitive: 1 }],
      ["ほんの数人だけ", { careful: 2, sensitive: 2 }],
      ["たぶん誰にも全部は見せていない", { sensitive: 3, freedom: 2 }]
    ]
  }
];


// ========================================
// 状態
// ========================================

let hiddenQuestion = 0;

let hiddenScores = {
  social: 0,
  careful: 0,
  sensitive: 0,
  freedom: 0,
  assertive: 0
};


// ========================================
// ボタン接続
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const hiddenButton = document.querySelector(
    '[data-diagnosis="hidden-personality"]'
  );

  if (hiddenButton) {
    hiddenButton.addEventListener(
      "click",
      startHiddenPersonalityDiagnosis
    );
  }
});


// ========================================
// 診断スタート
// ========================================

function startHiddenPersonalityDiagnosis() {
  hiddenQuestion = 0;

  hiddenScores = {
    social: 0,
    careful: 0,
    sensitive: 0,
    freedom: 0,
    assertive: 0
  };

  showHiddenPersonalityQuestion();
}


// ========================================
// 質問表示
// ========================================

function showHiddenPersonalityQuestion() {
  const q = hiddenPersonalityQuestions[hiddenQuestion];

  const progress =
    ((hiddenQuestion + 1) /
      hiddenPersonalityQuestions.length) * 100;

  document.body.innerHTML = `
    <main class="quiz-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="quiz-box">

        <div class="quiz-progress-text">
          隠れ性格診断
          QUESTION ${hiddenQuestion + 1}
          / ${hiddenPersonalityQuestions.length}
        </div>

        <div class="quiz-progress">
          <div
            class="quiz-progress-bar"
            style="width:${progress}%"
          ></div>
        </div>

        <p class="quiz-number">
          Q${hiddenQuestion + 1}
        </p>

        <h2>${q.text}</h2>

        <div class="answer-list">

          ${q.answers.map((answer, index) => `
            <button
              class="answer-button"
              onclick="selectHiddenPersonalityAnswer(${index})"
            >
              <span>
                ${String.fromCharCode(65 + index)}
              </span>

              ${answer[0]}
            </button>
          `).join("")}

        </div>

      </section>
    </main>
  `;
}


// ========================================
// 回答
// ========================================

function selectHiddenPersonalityAnswer(index) {
  const points =
    hiddenPersonalityQuestions[hiddenQuestion]
      .answers[index][1];

  Object.keys(points).forEach(key => {
    hiddenScores[key] += points[key];
  });

  hiddenQuestion++;

  if (
    hiddenQuestion <
    hiddenPersonalityQuestions.length
  ) {
    showHiddenPersonalityQuestion();
  } else {
    showHiddenPersonalityResult();
  }
}


// ========================================
// 結果判定
// ========================================

function getHiddenPersonalityResult() {

  const {
    social,
    careful,
    sensitive,
    freedom,
    assertive
  } = hiddenScores;


  if (
    sensitive >= 12 &&
    social >= 7
  ) {
    return {
      title: "隠れ甘えんぼタイプ",
      icon: "♡",
      catch: "しっかり見えて、実は誰かに甘えたい。",
      description:
        "普段は普通に振る舞っていても、本当に信頼した人には意外と甘えたい一面を持っているタイプです。",
      outside:
        "しっかりしている・普通に一人でも平気そうと思われやすい。",
      inside:
        "本当は安心できる人の前では、頼ったり甘えたりしたい気持ちが強め。",
      charm:
        "心を許した相手にだけ見せるギャップが大きな魅力。"
    };
  }


  if (
    assertive >= 13 &&
    careful >= 6
  ) {
    return {
      title: "実は超負けず嫌いタイプ",
      icon: "🔥",
      catch: "平気そうな顔をして、心の中ではかなり燃えている。",
      description:
        "表では冷静に見えても、自分の中には強い向上心や負けたくない気持ちを持っているタイプです。",
      outside:
        "落ち着いていて、そこまで勝ち負けを気にしないように見られやすい。",
      inside:
        "実は悔しさをエネルギーに変えて、こっそり努力できるタイプ。",
      charm:
        "静かに努力して結果を出すところが魅力。"
    };
  }


  if (
    freedom >= 13 &&
    social < 10
  ) {
    return {
      title: "静かな自由人タイプ",
      icon: "☾",
      catch: "合わせているようで、心の中はかなり自由。",
      description:
        "周囲と普通に付き合いながらも、自分の世界やペースをかなり大切にするタイプです。",
      outside:
        "穏やかでマイペースな人に見られやすい。",
      inside:
        "実は人に決められるのが苦手。自分の好きなように動きたい気持ちが強め。",
      charm:
        "周囲に流されすぎない独自の感性が魅力。"
    };
  }


  if (
    social >= 14
  ) {
    return {
      title: "愛されムードメーカータイプ",
      icon: "☀",
      catch: "人といると自然に魅力が出るタイプ。",
      description:
        "人とのコミュニケーションからエネルギーをもらいやすく、自然と周囲を明るくできるタイプです。",
      outside:
        "話しやすい・明るい・親しみやすいと思われやすい。",
      inside:
        "実は周囲の反応を意外と気にしていて、一人になると考え込むことも。",
      charm:
        "人との距離を自然に縮められるところが最大の武器。"
    };
  }


  if (
    sensitive >= 13 &&
    careful >= 9
  ) {
    return {
      title: "繊細な観察者タイプ",
      icon: "◇",
      catch: "何も気にしてなさそうで、実は全部見ている。",
      description:
        "人の表情や空気の変化を細かく感じ取りやすく、慎重に行動するタイプです。",
      outside:
        "静か・落ち着いている・控えめと思われやすい。",
      inside:
        "実はかなり多くのことに気づいていて、頭の中では色々考えている。",
      charm:
        "人が気づかない小さな変化に気づける優しさと観察力。"
    };
  }


  if (
    freedom >= 11
  ) {
    return {
      title: "マイペースな天才肌タイプ",
      icon: "✦",
      catch: "普通に合わせるより、自分の感覚を信じたい。",
      description:
        "周囲の常識より、自分が面白いと思うことや納得できることを大切にするタイプです。",
      outside:
        "マイペース・独特・何を考えているか分からないと思われることも。",
      inside:
        "実は自分なりの考えやこだわりがかなりはっきりしています。",
      charm:
        "他の人にはない発想や独自の世界観が魅力。"
    };
  }


  if (
    assertive >= 10
  ) {
    return {
      title: "面倒見のいいリーダータイプ",
      icon: "♛",
      catch: "気づけば周りをまとめている頼れる存在。",
      description:
        "必要なときには自分の意見を言えて、周囲を引っ張る力を持っているタイプです。",
      outside:
        "頼れる・しっかりしている・行動力があると思われやすい。",
      inside:
        "実は責任感が強く、自分が何とかしなきゃと思いすぎることも。",
      charm:
        "迷ったときに一歩前へ出られる行動力。"
    };
  }


  return {
    title: "クールに見える情熱家タイプ",
    icon: "♢",
    catch: "落ち着いて見えて、内側には熱い気持ちを持っている。",
    description:
      "感情を全部表には出さないけれど、好きなものや大切なことには強い気持ちを持つタイプです。",
    outside:
      "冷静・落ち着いている・大人っぽいと思われやすい。",
    inside:
      "実は好き嫌いがはっきりしていて、大切なことにはかなり情熱的。",
    charm:
      "普段とのギャップと、内側に秘めた熱さが魅力。"
  };
}


// ========================================
// 結果表示
// ========================================

function showHiddenPersonalityResult() {

  const result =
    getHiddenPersonalityResult();

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          あなたの隠れ性格は…
        </p>

        <div class="result-icon">
          ${result.icon}
        </div>

        <h1>${result.title}</h1>

        <p class="result-catch">
          ${result.catch}
        </p>

        <div class="result-description">
          ${result.description}
        </div>


        <div class="result-two-column">

          <div class="result-card">
            <h2>☀ 周りから見えるあなた</h2>
            <p>${result.outside}</p>
          </div>

          <div class="result-card">
            <h2>☾ 本当のあなた</h2>
            <p>${result.inside}</p>
          </div>

        </div>


        <div class="result-card">
          <h2>♡ あなたの隠れた魅力</h2>
          <p>${result.charm}</p>
        </div>


        <div class="share-area">

          <p>この結果をシェアする ♡</p>

          <div class="share-buttons">

            <button
              onclick="shareHiddenX('${result.title}')"
            >
              𝕏でシェア
            </button>

            <button
              onclick="shareHiddenLine('${result.title}')"
            >
              LINEでシェア
            </button>

            <button
              onclick="copyHiddenResult('${result.title}')"
            >
              結果をコピー
            </button>

          </div>

        </div>

<div class="result-buttons">
  <button onclick="openTalkPost('隠れ性格診断', '${result.title}')">
    みんなの診断トークに投稿する ♡
  </button>
</div>
        <div class="result-buttons">

          <button
            onclick="startHiddenPersonalityDiagnosis()"
          >
            もう一度診断する
          </button>

          <button onclick="location.reload()">
            診断一覧に戻る
          </button>

        </div>

      </section>
    </main>
  `;
}


// ========================================
// Xシェア
// ========================================

function shareHiddenX(title) {

  const text =
    `隠れ性格診断をやってみた！\n` +
    `私の隠れ性格は「${title}」でした。\n` +
    `#診断パレット #隠れ性格診断`;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`,
    "_blank"
  );
}


// ========================================
// LINEシェア
// ========================================

function shareHiddenLine(title) {

  const text =
    `隠れ性格診断の結果は` +
    `「${title}」でした！`;

  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`,
    "_blank"
  );
}


// ========================================
// 結果コピー
// ========================================

function copyHiddenResult(title) {

  const text =
    `隠れ性格診断\n` +
    `結果：「${title}」\n` +
    `#診断パレット`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("診断結果をコピーしました♡");
    })
    .catch(() => {
      alert("コピーできませんでした");
    });
}
// ========================================
// 診断トーク 投稿画面
// ========================================

function openTalkPost(diagnosisName, resultName) {

  document.body.innerHTML = `
    <main class="result-page">

      <div class="quiz-logo">
        ♡ 診断パレット
      </div>

      <section class="result-box">

        <p class="result-small">
          みんなの診断トーク
        </p>

        <h1>結果を投稿する ♡</h1>

        <div class="result-card">
          <p><strong>${diagnosisName}</strong></p>
          <h2>${resultName}</h2>
        </div>

        <p style="
          margin-top:25px;
          color:#8c7080;
          font-weight:bold;
        ">
          ひとこと書いてみよう
        </p>

        <textarea
          id="talkComment"
          maxlength="100"
          placeholder="例：思ったより当たってた！"
          style="
            width:100%;
            min-height:120px;
            margin-top:10px;
            padding:16px;
            border:1px solid #eadde5;
            border-radius:18px;
            font-size:16px;
            resize:none;
            box-sizing:border-box;
          "
        ></textarea>

        <p style="
          font-size:12px;
          color:#999;
          margin-top:10px;
        ">
          ※個人情報・連絡先・出会い目的の投稿は禁止です。
        </p>

        <div class="result-buttons">

          <button onclick="submitTalkPost(
            '${diagnosisName}',
            '${resultName}'
          )">
            投稿する
          </button>

          <button onclick="location.reload()">
            キャンセル
          </button>

        </div>

      </section>

    </main>
  `;
}


// ========================================
// 投稿チェック
// ========================================

function submitTalkPost(diagnosisName, resultName) {

  const comment =
    document.getElementById("talkComment").value.trim();

  if (!comment) {
    alert("ひとことを入力してね");
    return;
  }


  // 個人情報・出会い目的などの簡易チェック
  const blockedPatterns = [

    /line\s*id/i,
    /line交換/i,
    /ライン交換/i,

    /インスタ交換/i,
    /instagram交換/i,

    /カカオ/i,

    /会おう/i,
    /会いたい人/i,
    /会える人/i,

    /彼氏募集/i,
    /彼女募集/i,

    /セフレ/i,

    /\b\d{2,4}[-ー－]\d{2,4}[-ー－]\d{3,4}\b/,

    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i

  ];


  const blocked =
    blockedPatterns.some(pattern =>
      pattern.test(comment)
    );


  if (blocked) {

    alert(
      "個人情報・連絡先・出会い目的と思われる内容は投稿できません。"
    );

    return;
  }


  // 今は接続前なのでここまで
  alert(
    "投稿内容OK！\n\n" +
    diagnosisName + "\n" +
    resultName + "\n\n" +
    comment
  );
}