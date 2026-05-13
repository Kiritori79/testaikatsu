/**
 * 测验流程、计分、切页与结果渲染
 */

(function () {
  const data = window.AIKATSU_QUIZ_DATA;
  if (!data) {
    console.error("缺少 AIKATSU_QUIZ_DATA，请确认已先加载 js/data.js");
    return;
  }
  const { CHARACTER_IDS, CHARACTERS, QUESTIONS, MAX_SCORES_BY_CHARACTER } = data;

  /** @type {string} */
  let userDisplayName = "";

  const els = {
    stars: document.getElementById("stars"),
    home: document.getElementById("screen-home"),
    name: document.getElementById("screen-name"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
    btnStart: document.getElementById("btn-start"),
    btnNameGo: document.getElementById("btn-name-go"),
    btnNameSkip: document.getElementById("btn-name-skip"),
    inputCn: document.getElementById("input-cn"),
    btnRetry: document.getElementById("btn-retry"),
    progressBar: document.getElementById("progress-bar"),
    progressWrap: document.getElementById("progress-wrap"),
    quizCurrent: document.getElementById("quiz-current"),
    quizTotal: document.getElementById("quiz-total"),
    quizText: document.getElementById("quiz-text"),
    quizOptions: document.getElementById("quiz-options"),
    quizCard: document.getElementById("quiz-card"),
    resultFx: document.getElementById("result-fx"),
    resultLead: document.getElementById("result-lead"),
    resultHeroName: document.getElementById("result-hero-name"),
    resultPortrait: document.getElementById("result-portrait"),
    resultInitial: document.getElementById("result-initial"),
    resultPercent: document.getElementById("result-percent"),
    resultTags: document.getElementById("result-tags"),
    resultDesc: document.getElementById("result-desc"),
    resultQuote: document.getElementById("result-quote"),
    compositionText: document.getElementById("composition-text"),
    top3Bars: document.getElementById("top3-bars"),
  };

  /** @type {Record<string, number>} */
  let scores = {};
  let questionIndex = 0;
  let transitionLock = false;

  function emptyScores() {
    scores = {};
    CHARACTER_IDS.forEach((id) => {
      scores[id] = 0;
    });
  }

  function initStars() {
    if (!els.stars) return;
    const count = 22;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.setProperty("--tw", `${4 + Math.random() * 5}s`);
      s.style.setProperty("--td", `${Math.random() * 6}s`);
      els.stars.appendChild(s);
    }
  }

  /**
   * @param {'home' | 'name' | 'quiz' | 'result'} name
   */
  function showScreen(name) {
    const map = { home: els.home, name: els.name, quiz: els.quiz, result: els.result };
    Object.entries(map).forEach(([key, el]) => {
      if (!el) return;
      if (key === name) {
        el.classList.add("screen--active");
        el.removeAttribute("aria-hidden");
      } else {
        el.classList.remove("screen--active");
        el.setAttribute("aria-hidden", "true");
      }
    });
  }

  function goToNameScreen() {
    showScreen("name");
    if (els.inputCn) {
      els.inputCn.value = "";
      window.setTimeout(() => els.inputCn && els.inputCn.focus(), 420);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setProgress() {
    const total = QUESTIONS.length;
    const done = questionIndex;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    if (els.progressBar) els.progressBar.style.width = `${pct}%`;
    if (els.progressWrap) els.progressWrap.setAttribute("aria-valuenow", String(pct));
    if (els.quizCurrent) els.quizCurrent.textContent = String(Math.min(done + 1, total));
    if (els.quizTotal) els.quizTotal.textContent = String(total);
  }

  function renderQuestion() {
    const q = QUESTIONS[questionIndex];
    if (!q || !els.quizText || !els.quizOptions) return;
    const qText = q.text ?? q.question ?? "";
    els.quizText.textContent = qText;
    els.quizOptions.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const label = opt.label ?? opt.text ?? "";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = `${String.fromCharCode(65 + idx)}. ${label}`;
      btn.addEventListener("click", () => onPickOption(opt));
      els.quizOptions.appendChild(btn);
    });
    setProgress();
  }

  /** @param {{ scores: Record<string, number> }} opt */
  function applyScores(opt) {
    Object.entries(opt.scores).forEach(([id, v]) => {
      if (typeof scores[id] === "number") scores[id] += v;
    });
  }

  function pickWinner() {
    let bestId = CHARACTER_IDS[0];
    let best = scores[bestId] || 0;
    CHARACTER_IDS.forEach((id) => {
      const s = scores[id] || 0;
      if (s > best) {
        best = s;
        bestId = id;
      }
    });
    return bestId;
  }

  function matchPercentFor(id) {
    const raw = scores[id] || 0;
    const max = MAX_SCORES_BY_CHARACTER[id] || 1;
    return Math.min(100, Math.round((raw / max) * 100));
  }

  function buildTop3() {
    const ranked = CHARACTER_IDS.map((id) => ({
      id,
      score: scores[id] || 0,
    })).sort((a, b) => b.score - a.score);
    const top = ranked.slice(0, 3);
    const sum = top.reduce((acc, x) => acc + x.score, 0) || 1;
    return top.map((x) => ({
      ...x,
      share: Math.round((x.score / sum) * 1000) / 10,
    }));
  }

  /**
   * @param {{ id: string }[]} top3
   */
  function buildCompositionParagraph(top3) {
    const rows = top3
      .map((row) => {
        const ch = CHARACTERS[row.id];
        if (!ch || !ch.compLike || !ch.compAs || !ch.compOf) return null;
        return { name: ch.name, compLike: ch.compLike, compAs: ch.compAs, compOf: ch.compOf };
      })
      .filter(Boolean);

    if (rows.length === 0) return "";
    if (rows.length === 1) {
      return `你的气质里，最鲜明的是像${rows[0].name}一样${rows[0].compLike}。`;
    }
    if (rows.length === 2) {
      return `你的气质里，既有像${rows[0].name}一样${rows[0].compLike}，也带着${rows[1].name}般${rows[1].compAs}。`;
    }
    const [a, b, c] = rows;
    return `你拥有像${a.name}一样${a.compLike}，也带着${b.name}般${b.compAs}，同时还有一点属于${c.name}的${c.compOf}。`;
  }

  function clearResultFx() {
    if (els.resultFx) els.resultFx.innerHTML = "";
  }

  function playResultFx() {
    if (!els.resultFx) return;
    clearResultFx();
    const frag = document.createDocumentFragment();
    const petalCount = 16;
    for (let i = 0; i < petalCount; i++) {
      const el = document.createElement("span");
      el.className = "result-fx__petal";
      el.style.left = `${8 + Math.random() * 84}%`;
      el.style.animationDuration = `${4.5 + Math.random() * 3}s`;
      el.style.animationDelay = `${Math.random() * 0.8}s`;
      el.style.transform = `rotate(${Math.random() * 40}deg)`;
      const tones = ["rgba(255,200,218,0.55)", "rgba(255,235,240,0.75)", "rgba(245,220,200,0.45)"];
      el.style.background = tones[i % tones.length];
      frag.appendChild(el);
    }
    const moteCount = 10;
    for (let i = 0; i < moteCount; i++) {
      const el = document.createElement("span");
      el.className = "result-fx__glow";
      el.style.left = `${10 + Math.random() * 80}%`;
      el.style.top = `${35 + Math.random() * 35}%`;
      el.style.animationDuration = `${2.8 + Math.random() * 2}s`;
      el.style.animationDelay = `${0.1 * i}s`;
      frag.appendChild(el);
    }
    els.resultFx.appendChild(frag);
    window.setTimeout(() => clearResultFx(), 6500);
  }

  function renderResult() {
    const winnerId = pickWinner();
    const c = CHARACTERS[winnerId];
    if (!c) return;

    const pct = matchPercentFor(winnerId);
    const nick = userDisplayName.trim();

    if (els.resultLead) {
      els.resultLead.textContent = nick
        ? `${nick} 最接近的偶像气质是——`
        : "你最接近的偶像气质是——";
    }
    if (els.resultHeroName) {
      const rom = c.nameRomaji || "";
      els.resultHeroName.innerHTML = `
        <span class="result-reveal__name-cn">
          <span class="result-reveal__spark" aria-hidden="true">✨</span>${c.name}<span class="result-reveal__spark" aria-hidden="true">✨</span>
        </span>
        ${rom ? `<span class="result-reveal__name-ro" lang="en">${rom}</span>` : ""}
      `;
    }

    if (els.resultPortrait) {
      els.resultPortrait.style.background = c.cardGradient;
      els.resultPortrait.classList.toggle("ssr-card__portrait--dark", c.id === "yurika");
      els.resultPortrait.innerHTML = `<img src="${c.image}" alt="">`;
    }

    if (els.resultPercent) els.resultPercent.textContent = String(pct);
    if (els.resultDesc) els.resultDesc.textContent = c.description;

    if (els.resultQuote) {
      const q = c.quoteJa || "";
      els.resultQuote.textContent = q;
    }

    if (els.resultTags) {
      els.resultTags.innerHTML = "";
      c.keywords.forEach((kw) => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = kw;
        els.resultTags.appendChild(span);
      });
    }

    const top3 = buildTop3();
    if (els.compositionText) {
      els.compositionText.textContent = buildCompositionParagraph(top3);
    }

    if (els.top3Bars) {
      els.top3Bars.innerHTML = "";
      top3.forEach((row) => {
        const ch = CHARACTERS[row.id];
        const wrap = document.createElement("div");
        wrap.className = "top3-row";
        wrap.innerHTML = `
          <span class="top3-row__label">${ch ? ch.name : row.id}</span>
          <span class="top3-row__pct">${row.share}%</span>
          <div class="top3-row__track">
            <div class="top3-row__fill" data-fill="0"></div>
          </div>
        `;
        els.top3Bars.appendChild(wrap);
        const fill = wrap.querySelector(".top3-row__fill");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (fill instanceof HTMLElement) fill.style.width = `${row.share}%`;
          });
        });
      });
    }

    playResultFx();
  }

  /** @param {{ scores: Record<string, number> }} opt */
  function onPickOption(opt) {
    if (transitionLock) return;
    applyScores(opt);

    const nextIndex = questionIndex + 1;
    if (nextIndex >= QUESTIONS.length) {
      transitionLock = true;
      els.quizCard.classList.add("is-exit");
      window.setTimeout(() => {
        questionIndex = nextIndex;
        renderResult();
        showScreen("result");
        els.quizCard.classList.remove("is-exit");
        transitionLock = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 280);
      return;
    }

    transitionLock = true;
    els.quizCard.classList.add("is-exit");
    window.setTimeout(() => {
      questionIndex = nextIndex;
      els.quizCard.classList.remove("is-exit");
      els.quizCard.classList.add("is-enter");
      renderQuestion();
      window.setTimeout(() => {
        els.quizCard.classList.remove("is-enter");
        transitionLock = false;
      }, 400);
    }, 260);
  }

  function startQuiz() {
    emptyScores();
    questionIndex = 0;
    showScreen("quiz");
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function beginQuizFromName() {
    const raw = (els.inputCn && els.inputCn.value) || "";
    userDisplayName = raw.trim().slice(0, 24);
    startQuiz();
  }

  function skipNameAndQuiz() {
    userDisplayName = "";
    startQuiz();
  }

  function restart() {
    emptyScores();
    questionIndex = 0;
    userDisplayName = "";
    clearResultFx();
    showScreen("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (els.btnStart) els.btnStart.addEventListener("click", goToNameScreen);
  if (els.btnNameGo) els.btnNameGo.addEventListener("click", beginQuizFromName);
  if (els.btnNameSkip) els.btnNameSkip.addEventListener("click", skipNameAndQuiz);
  if (els.btnRetry) els.btnRetry.addEventListener("click", restart);

  if (els.inputCn) {
    els.inputCn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") beginQuizFromName();
    });
  }

  initStars();
})();
