(function () {
  const APP_VERSION = "20260820c";
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const curriculumRuntimeManifest = [
    "./data/hiragana/hiragana-h-l1-foundations.json",
    "./data/arrival/arrival-a-l1-arrival-essentials.json",
    "./data/convenience-store/convenience-store-c-l1-conbini-basics.json",
    "./data/trains/trains-t-l1-station-essentials.json",
    "./data/directions/directions-d-l1-street-navigation.json",
    "./data/restaurant/restaurant-r-l1-menu-basics.json",
    "./data/restaurant/restaurant-r-l2-ordering-basics.json",
    "./data/restaurant/restaurant-r-l3-server-interaction.json",
    "./data/restaurant/restaurant-r-l4-paying-and-finishing.json",
  ];
  const STORAGE_KEYS = {
    completedLessonLevelIds: "japan-study.completedLessonLevelIds",
    choicesHidden: "japan-study.choicesHidden",
    savedLessonSession: "japan-study.savedLessonSession",
  };

  async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register(`./sw.js?v=${APP_VERSION}`, {
        scope: "./",
      });

      registration.addEventListener("updatefound", () => {
        const installingWorker = registration.installing;
        if (!installingWorker) {
          return;
        }
        installingWorker.addEventListener("statechange", () => {
          if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
            console.info("A new offline-ready version is available. Reload to update.");
          }
        });
      });
    } catch (error) {
      console.warn("Service worker registration failed.", error);
    }
  }

  let curriculumRuntime = null;

  const cityMap = [
    {
      id: "tokyo",
      name: "Tokyo",
      nameJp: "東京",
      theme: "tokyo",
      image: "./assets/cities/tokyo.png",
      levels: [
        {
          id: "tokyo-hiragana",
          title: "Hiragana",
          titleJp: "ひらがな",
          shortTitle: "Hiragana",
          state: "available",
          position: 10,
          sublevels: [
            { id: "H-L1-S1", title: "Vowels and First Words", state: "available", playable: true },
            { id: "H-L1-S2", title: "K and S Rows", state: "available", playable: true },
            { id: "H-L1-S3", title: "T and N Rows", state: "available", playable: true },
            { id: "H-L1-S4", title: "H M Y R W Rows", state: "available", playable: true },
            { id: "H-L1-S5", title: "Voiced Sounds and Combos", state: "available", playable: true },
            { id: "H-L1-S6", title: "Read Real Words", state: "available", playable: true }
          ]
        },
        {
          id: "tokyo-arrival",
          title: "Arrival",
          titleJp: "到着",
          shortTitle: "Arrival",
          state: "available",
          position: 28,
          sublevels: [
            { id: "tokyo-arrival-airport", title: "Airport Basics", state: "available", playable: true },
            { id: "tokyo-arrival-transfer", title: "Transfer to City", state: "available", playable: true },
            { id: "tokyo-arrival-checkin", title: "Hotel Check-In", state: "available", playable: true },
          ],
        },
        {
          id: "tokyo-restaurant",
          title: "Restaurant",
          titleJp: "飲食店",
          shortTitle: "Restaurant",
          state: "available",
          position: 46,
          sublevels: [
            { id: "R-L1-S1", title: "Food Words", state: "available", playable: true },
            { id: "R-L1-S2", title: "Menu Categories", state: "available", playable: true },
            { id: "R-L1-S3", title: "Reading a Real Menu", state: "available", playable: true },
            { id: "R-L1-S4", title: "What Is This?", state: "available", playable: true },
            { id: "R-L1-S5", title: "Sushi Basics", state: "available", playable: true },
            { id: "R-L2-S1", title: "Ordering One Item", state: "available", playable: true },
            { id: "R-L2-S2", title: "Ordering a Drink", state: "available", playable: true },
            { id: "R-L2-S3", title: "Meals and Set Meals", state: "available", playable: true },
            { id: "R-L2-S4", title: "Get the Server's Attention", state: "available", playable: true },
            { id: "R-L3-S1", title: "First Server Question", state: "available", playable: true },
            { id: "R-L3-S2", title: "Simple Modifications", state: "available", playable: true },
            { id: "R-L3-S3", title: "Extra Requests", state: "available", playable: true },
            { id: "R-L3-S4", title: "Short Guided Exchange", state: "available", playable: true },
            { id: "R-L3-S7", title: "Food Descriptions and Preferences", state: "available", playable: true },
            { id: "R-L3-S5", title: "Condiments and Table Items", state: "available", playable: true },
            { id: "R-L3-S6", title: "Dessert and Cafe Flow", state: "available", playable: true },
            { id: "R-L4-S1", title: "Asking for the Check", state: "available", playable: true },
            { id: "R-L4-S2", title: "Cash or Card", state: "available", playable: true },
            { id: "R-L4-S3", title: "One Bill", state: "available", playable: true },
            { id: "R-L4-S4", title: "Thank You and Leaving", state: "available", playable: true }
          ],
        },
        {
          id: "tokyo-city",
          title: "City Systems",
          titleJp: "都市システム",
          shortTitle: "City Systems",
          state: "available",
          position: 66,
          sublevels: [
            { id: "tokyo-city-conbini", title: "Conbini Basics", state: "available", playable: true },
            { id: "tokyo-city-trains", title: "Trains & Stations", state: "available", playable: true },
            { id: "tokyo-city-directions", title: "Directions & Navigation", state: "available", playable: true },
          ],
        },
        {
          id: "tokyo-shopping",
          title: "Shopping",
          titleJp: "買い物",
          shortTitle: "Shopping",
          state: "locked",
          position: 84,
          sublevels: [
            { id: "tokyo-shopping-donki", title: "Donki", state: "locked", playable: false },
            { id: "tokyo-shopping-akiba", title: "Akiba", state: "locked", playable: false },
          ],
        },
      ],
    },
    {
      id: "hakone",
      name: "Hakone",
      nameJp: "箱根",
      theme: "hakone",
      image: "./assets/cities/hakone.png",
      levels: [
        {
          id: "hakone-transit",
          title: "Transit",
          titleJp: "移動",
          shortTitle: "Transit",
          state: "locked",
          position: 18,
          sublevels: [
            { id: "hakone-romancecar", title: "Romancecar", state: "locked", playable: false },
            { id: "hakone-loop", title: "Loop Route", state: "locked", playable: false },
          ],
        },
        {
          id: "hakone-ryokan",
          title: "Ryokan",
          titleJp: "旅館",
          shortTitle: "Ryokan",
          state: "locked",
          position: 52,
          sublevels: [
            { id: "hakone-checkin", title: "Ryokan Check-In", state: "locked", playable: false },
            { id: "hakone-onsen", title: "Onsen", state: "locked", playable: false },
          ],
        },
        {
          id: "hakone-views",
          title: "Scenic Day",
          titleJp: "景色",
          shortTitle: "Scenic Day",
          state: "locked",
          position: 82,
          sublevels: [
            { id: "hakone-lake", title: "Lake Ashi", state: "locked", playable: false },
            { id: "hakone-ropeway", title: "Ropeway & Cruise", state: "locked", playable: false },
          ],
        },
      ],
    },
    {
      id: "kyoto",
      name: "Kyoto",
      nameJp: "京都",
      theme: "kyoto",
      image: "./assets/cities/kyoto.png",
      levels: [
        {
          id: "kyoto-temples",
          title: "Temples",
          titleJp: "寺社",
          shortTitle: "Temples",
          state: "locked",
          position: 18,
          sublevels: [
            { id: "kyoto-shrine", title: "Fushimi Inari", state: "locked", playable: false },
            { id: "kyoto-etiquette", title: "Temple Etiquette", state: "locked", playable: false },
          ],
        },
        {
          id: "kyoto-market",
          title: "Markets",
          titleJp: "市場",
          shortTitle: "Markets",
          state: "locked",
          position: 49,
          sublevels: [
            { id: "kyoto-nishiki", title: "Nishiki Market", state: "locked", playable: false },
            { id: "kyoto-dinner", title: "Dinner & Kaiseki", state: "locked", playable: false },
          ],
        },
        {
          id: "kyoto-arashiyama",
          title: "Arashiyama",
          titleJp: "嵐山",
          shortTitle: "Arashiyama",
          state: "locked",
          position: 82,
          sublevels: [
            { id: "kyoto-bamboo", title: "Bamboo Grove", state: "locked", playable: false },
            { id: "kyoto-river", title: "River Boat", state: "locked", playable: false },
          ],
        },
      ],
    },
    {
      id: "hiroshima",
      name: "Hiroshima",
      nameJp: "広島",
      theme: "hiroshima",
      image: "./assets/cities/hiroshima.png",
      levels: [
        {
          id: "hiroshima-daytrip",
          title: "Day Trip",
          titleJp: "日帰り",
          shortTitle: "Day Trip",
          state: "locked",
          position: 32,
          sublevels: [
            { id: "hiroshima-guide", title: "Shinkansen Out", state: "locked", playable: false },
            { id: "hiroshima-meal", title: "Landmarks & Lunch", state: "locked", playable: false },
          ],
        },
        {
          id: "hiroshima-evening",
          title: "Evening Return",
          titleJp: "帰路",
          shortTitle: "Return",
          state: "locked",
          position: 74,
          sublevels: [
            { id: "hiroshima-station", title: "Station Return", state: "locked", playable: false },
          ],
        },
      ],
    },
    {
      id: "nara",
      name: "Nara",
      nameJp: "奈良",
      theme: "nara",
      image: "./assets/cities/nara.png",
      levels: [
        {
          id: "nara-park",
          title: "Park Day",
          titleJp: "公園",
          shortTitle: "Park Day",
          state: "locked",
          position: 28,
          sublevels: [
            { id: "nara-landmarks", title: "Deer & Landmarks", state: "locked", playable: false },
            { id: "nara-snacks", title: "Temple Visit", state: "locked", playable: false },
          ],
        },
        {
          id: "nara-souvenirs",
          title: "Souvenirs",
          titleJp: "土産",
          shortTitle: "Souvenirs",
          state: "locked",
          position: 72,
          sublevels: [
            { id: "nara-gion", title: "Snacks & Souvenirs", state: "locked", playable: false },
          ],
        },
      ],
    },
    {
      id: "osaka",
      name: "Osaka",
      nameJp: "大阪",
      theme: "osaka",
      image: "./assets/cities/osaka.png",
      levels: [
        {
          id: "osaka-street-food",
          title: "Street Food",
          titleJp: "屋台",
          shortTitle: "Street Food",
          state: "locked",
          position: 30,
          sublevels: [
            { id: "osaka-kuromon", title: "Kuromon", state: "locked", playable: false },
            { id: "osaka-dotonbori", title: "Dotonbori", state: "locked", playable: false },
          ],
        },
        {
          id: "osaka-day",
          title: "City Day",
          titleJp: "大阪",
          shortTitle: "City Day",
          state: "locked",
          position: 74,
          sublevels: [
            { id: "osaka-shinkansen", title: "Castle & Return", state: "locked", playable: false },
          ],
        },
      ],
    },
  ];

  const appState = {
    screen: "world",
    currentIndex: 0,
    secondsRemaining: 10,
    timerId: null,
    revealTriggered: false,
    transitionId: null,
    successId: null,
    errorId: null,
    celebrationId: null,
    activeCityId: "tokyo",
    activeLevelId: "tokyo-restaurant",
    activeSublevelId: "R-L1-S1",
    expandedLevelId: null,
    lessonSession: null,
    completedLessonLevelIds: [],
    activeLessonPicker: null,
    activeSupportAsset: null,
    choicesHidden: false,
  };

  function loadCompletedLessonLevelIds() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEYS.completedLessonLevelIds);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
    } catch (error) {
      console.warn("Failed to load saved lesson progress.", error);
      return [];
    }
  }

  function loadChoicesHiddenPreference() {
    try {
      return window.localStorage.getItem(STORAGE_KEYS.choicesHidden) === "true";
    } catch (error) {
      console.warn("Failed to load hint visibility preference.", error);
      return false;
    }
  }

  function saveCompletedLessonLevelIds() {
    try {
      window.localStorage.setItem(
        STORAGE_KEYS.completedLessonLevelIds,
        JSON.stringify(appState.completedLessonLevelIds)
      );
    } catch (error) {
      console.warn("Failed to save lesson progress.", error);
    }
  }

  function saveChoicesHiddenPreference() {
    try {
      window.localStorage.setItem(STORAGE_KEYS.choicesHidden, String(appState.choicesHidden));
    } catch (error) {
      console.warn("Failed to save hint visibility preference.", error);
    }
  }

  function loadSavedLessonSession() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEYS.savedLessonSession);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed?.lessonSession?.queueIds?.length) return null;
      return parsed;
    } catch (error) {
      console.warn("Failed to load saved lesson session.", error);
      return null;
    }
  }

  function saveLessonSession() {
    try {
      if (!appState.lessonSession?.queue?.length) return;
      const lessonSession = appState.lessonSession;
      window.localStorage.setItem(
        STORAGE_KEYS.savedLessonSession,
        JSON.stringify({
          activeCityId: appState.activeCityId,
          activeLevelId: appState.activeLevelId,
          activeSublevelId: appState.activeSublevelId,
          lessonSession: {
            sublevelId: lessonSession.sublevelId,
            lessonLevelId: lessonSession.lessonLevelId,
            currentComponentIndex: lessonSession.currentComponentIndex,
            queueIds: lessonSession.queue.map((question) => question.id),
            completedQuestions: lessonSession.completedQuestions,
          },
        })
      );
    } catch (error) {
      console.warn("Failed to save lesson session.", error);
    }
  }

  function restoreLessonSession(savedSession) {
    const savedLesson = savedSession?.lessonSession;
    if (!savedLesson?.queueIds?.length) return null;

    const lessonSession = buildLessonSession(
      savedSession.activeSublevelId,
      savedLesson.lessonLevelId
    );
    if (!lessonSession) return null;

    const questionById = new Map();
    lessonSession.components.forEach((component) => {
      (component.runtimeQuestions || []).forEach((question) => {
        questionById.set(question.id, question);
      });
    });

    const restoredQueue = savedLesson.queueIds
      .map((questionId) => questionById.get(questionId))
      .filter(Boolean);
    if (!restoredQueue.length) return null;

    const maxComponentIndex = Math.max(0, lessonSession.components.length - 1);
    lessonSession.currentComponentIndex = Math.min(
      Math.max(0, Number(savedLesson.currentComponentIndex) || 0),
      maxComponentIndex
    );
    lessonSession.queue = restoredQueue;
    lessonSession.completedQuestions = Math.max(
      0,
      Math.min(
        lessonSession.totalQuestions - restoredQueue.length,
        Number(savedLesson.completedQuestions) || 0
      )
    );
    return lessonSession;
  }

  function clearSavedLessonSession() {
    try {
      window.localStorage.removeItem(STORAGE_KEYS.savedLessonSession);
    } catch (error) {
      console.warn("Failed to clear saved lesson session.", error);
    }
  }

  appState.completedLessonLevelIds = loadCompletedLessonLevelIds();
  appState.choicesHidden = loadChoicesHiddenPreference();

  const worldScreen = document.getElementById("worldScreen");
  const worldStatus = document.getElementById("worldStatus");
  const lessonShell = document.getElementById("lessonShell");
  const worldMapScroll = document.getElementById("worldMapScroll");
  const worldMapTrack = document.getElementById("worldMapTrack");
  const worldPopoverLayer = document.getElementById("worldPopoverLayer");
  const worldModalLayer = document.getElementById("worldModalLayer");
  const worldModalBackdrop = document.getElementById("worldModalBackdrop");
  const lessonPickerClose = document.getElementById("lessonPickerClose");
  const lessonPickerImage = document.getElementById("lessonPickerImage");
  const lessonPickerKicker = document.getElementById("lessonPickerKicker");
  const lessonPickerTitle = document.getElementById("lessonPickerTitle");
  const lessonPickerList = document.getElementById("lessonPickerList");
  const supportModalLayer = document.getElementById("supportModalLayer");
  const supportModalBackdrop = document.getElementById("supportModalBackdrop");
  const supportModalClose = document.getElementById("supportModalClose");
  const supportModalTitle = document.getElementById("supportModalTitle");
  const supportModalImage = document.getElementById("supportModalImage");
  const supportAssetButton = document.getElementById("supportAssetButton");
  const lessonBackButton = document.getElementById("lessonBackButton");
  const locationLabel = document.getElementById("locationLabel");
  const sublevelLabel = document.getElementById("sublevelLabel");
  const characterTag = document.getElementById("characterTag");
  const guidePromptMode = document.getElementById("guidePromptMode");
  const guideLinePrimary = document.getElementById("guideLinePrimary");
  const guideLineSecondary = document.getElementById("guideLineSecondary");
  const answerInput = document.getElementById("answerInput");
  const submitButton = document.getElementById("submitButton");
  const choicesToggleButton = document.getElementById("choicesToggleButton");
  const feedback = document.getElementById("feedback");
  const progressCount = document.getElementById("progressCount");
  const progressFill = document.getElementById("progressFill");
  const progressSpark = document.getElementById("progressSpark");
  const choicesGrid = document.getElementById("choicesGrid");
  const timerProgress = document.getElementById("timerProgress");
  const romajiRevealButton = document.getElementById("romajiRevealButton");
  const lessonLeft = document.getElementById("lessonLeft");
  const characterFrame = document.getElementById("characterFrame");
  const writingStage = document.getElementById("writingStage");
  const choicesPanel = document.getElementById("choicesPanel");
  const characterDialogue = document.getElementById("characterDialogue");
  const celebrationLayer = document.getElementById("celebrationLayer");
  const celebrationConfetti = document.getElementById("celebrationConfetti");
  const celebrationWord = document.getElementById("celebrationWord");
  const celebrationSubword = document.getElementById("celebrationSubword");
  const celebrationMascot = document.getElementById("celebrationMascot");

  const successCelebrations = [
    { jp: "やった!", en: "Nice!" },
    { jp: "すごい!", en: "Amazing!" },
    { jp: "おめでとう!", en: "Great job!" },
  ];

  const errorCelebrations = [
    { jp: "おしい!", en: "So close!" },
    { jp: "もう一回!", en: "Try again!" },
    { jp: "がんばって!", en: "You got this!" },
  ];

  const successMascots = [
    "./assets/mascots/chibi-celebrate-openarms.png",
    "./assets/mascots/chibi-celebrate-1.png",
  ];

  const errorMascots = ["./assets/mascots/chibi-encourage.png"];

  const timerCircumference = 2 * Math.PI * 26;
  timerProgress.style.strokeDasharray = String(timerCircumference);

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function normalizeAnswer(value) {
    return value.replace(/\s+/g, "").trim();
  }

  function getQuestionSetMeta() {
    const city = cityMap.find((item) => item.id === appState.activeCityId);
    const level = city?.levels.find((item) => item.id === appState.activeLevelId) || null;
    const sublevel = level?.sublevels.find((item) => item.id === appState.activeSublevelId) || null;
    return { city, level, sublevel };
  }

  function getCurrentQuestion() {
    return appState.lessonSession?.queue?.[0] || null;
  }

  function getCurrentComponent() {
    if (!appState.lessonSession) return null;
    return appState.lessonSession.components[appState.lessonSession.currentComponentIndex] || null;
  }

  function getCurrentSublevelRuntime(sublevelId) {
    return curriculumRuntime?.sublevelsById?.[sublevelId] || null;
  }

  function syncCurriculumProgressToMap() {
    if (!curriculumRuntime) return;

    cityMap.forEach((city) => {
      city.levels.forEach((level) => {
        let levelHasRuntimeSublevels = false;
        let levelCompleted = true;

        level.sublevels.forEach((sublevel) => {
          const runtimeSublevel = getCurrentSublevelRuntime(sublevel.id);
          if (!runtimeSublevel) {
            levelCompleted = false;
            return;
          }

          levelHasRuntimeSublevels = true;
          const lessonLevels = getLessonLevelsForSublevel(runtimeSublevel);
          const completedCount = lessonLevels.filter((lessonLevel) =>
            isLessonLevelCompleted(lessonLevel.id)
          ).length;

          if (completedCount >= lessonLevels.length && lessonLevels.length > 0) {
            sublevel.state = "completed";
            sublevel.playable = true;
          } else {
            sublevel.state = "available";
            sublevel.playable = true;
            levelCompleted = false;
          }
        });

        if (levelHasRuntimeSublevels) {
          level.state = levelCompleted ? "completed" : "available";
        }
      });
    });
  }

  function getLessonLevelsForSublevel(runtimeSublevel) {
    if (!runtimeSublevel) return [];
    if (Array.isArray(runtimeSublevel.lessonLevels) && runtimeSublevel.lessonLevels.length > 0) {
      return runtimeSublevel.lessonLevels;
    }

    return [
      {
        id: `${runtimeSublevel.id}-LEVEL-1`,
        title: "Level 1",
        components: runtimeSublevel.components || [],
      },
    ];
  }

  function getInstructorImage(city, level) {
    if (level?.id === "tokyo-restaurant" || level?.id === "tokyo-hiragana") {
      return "./assets/restaurant-guide-v1.png";
    }

    return city?.image || "./assets/restaurant-guide-v1.png";
  }

  function isLessonLevelCompleted(lessonLevelId) {
    return appState.completedLessonLevelIds.includes(lessonLevelId);
  }

  function buildReferenceChoicesFromItems(targetItem, items) {
    const distractors = items
      .filter((item) => item.jp !== targetItem.jp)
      .slice(0, 3);

    return [targetItem, ...distractors].slice(0, 4);
  }

  function containsJapanese(value) {
    return /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(value || "");
  }

  function isLikelyEnglish(value) {
    return /[A-Za-z]/.test(value || "") && !containsJapanese(value || "");
  }

  function createChoice(primary, secondary, value) {
    return { primary, secondary: secondary || "", value };
  }

  function buildChoiceDisplayFromItems(targetItem, items) {
    return buildReferenceChoicesFromItems(targetItem, items).map((item) =>
      createChoice(item.jp, item.romaji || "", item.jp)
    );
  }

  function createLexicon(bundles) {
    const jpToEn = {};
    const jpToRomaji = {};

    function consumeComponents(components) {
      (components || []).forEach((component) => {
        (component.items || []).forEach((item) => {
          if (item.jp && item.en) {
            jpToEn[item.jp] = item.en;
          }
          if (item.jp && item.romaji) {
            jpToRomaji[item.jp] = item.romaji;
          }
        });
      });
    }

    bundles.forEach((bundle) => {
      bundle.sublevels.forEach((sublevel) => {
        consumeComponents(sublevel.components);
        (sublevel.lessonLevels || []).forEach((lessonLevel) => {
          consumeComponents(lessonLevel.components);
        });
      });
    });

    return { jpToEn, jpToRomaji };
  }

  function buildPromptText(question, component) {
    const source = question.promptPrimary || question.prompt?.text || "";

    switch (question.promptMode) {
      case "How do you say":
        return `How do you say "${source}"?`;
      case "Which hiragana is":
        return `Which hiragana is "${source}"?`;
      case "Which one means":
        return containsJapanese(source) ? `What does "${source}" mean?` : `Which one means "${source}"?`;
      case "What sound is":
        return `What sound is "${source}"?`;
      case "How do you read":
        return `How do you read "${source}"?`;
      case "Which heading should this go under":
        return `Which heading should "${source}" go under?`;
      case "Which price matches":
        return `Which price matches "${source}"?`;
      case "Complete the phrase":
        return `Complete the phrase: "${source}"`;
      case "Build the phrase for":
        return `How would you say "${source}"?`;
      case "Say this politely":
        return `How would you say "${source}" politely?`;
      case "Which reply fits":
        return source;
      case "The server says":
        return `The server says "${source}"`;
      case "What are they asking":
        return `What does "${source}" mean?`;
      case "Exchange step":
        return source;
      case "Choose the best flow":
        return source;
      case "Choose the best next line":
        return source;
      default:
        if (component.componentType === "vocabulary_intro") {
          return `How do you say "${source}"?`;
        }
        return source;
    }
  }

  function buildQuestionChoices(question, lexicon) {
    const referenceChoices = question.referenceChoices || [];
    const acceptedAnswers = question.acceptedAnswers || question.expectedAnswers || [];
    const shouldUseEnglishChoices =
      referenceChoices.some((choice) => choice.en) &&
      (acceptedAnswers.some((answer) => isLikelyEnglish(answer)) ||
        containsJapanese(question.promptPrimary || ""));

    if (shouldUseEnglishChoices) {
      return referenceChoices.map((choice) => {
        const english = choice.en || lexicon.jpToEn[choice.jp] || choice.jp;
        return createChoice(english, "", english);
      });
    }

    return referenceChoices.map((choice) =>
      createChoice(choice.jp, choice.romaji || "", choice.jp || choice.en || "")
    );
  }

  function buildAcceptedAnswers(question, lexicon) {
    const acceptedAnswers = question.acceptedAnswers || question.expectedAnswers || [];
    const firstAccepted = acceptedAnswers.find((answer) => containsJapanese(answer));

    const shouldInvertToEnglish =
      question.promptMode === "Which one means" &&
      firstAccepted &&
      isLikelyEnglish(question.promptPrimary || "");

    if (shouldInvertToEnglish) {
      return acceptedAnswers.map((answer) => lexicon.jpToEn[answer] || answer);
    }

    return acceptedAnswers;
  }

  function buildQuestionsForComponent(component, sublevelTitle) {
    const lessonLevelTitle = component.lessonLevelTitle || "";
    const { city, level } = getQuestionSetMeta();
    const locationLabel = level?.shortTitle || city?.name || "Lesson";
    const componentSupportAsset = component.supportAsset || null;
    const componentSupportAssetTitle = component.supportAssetTitle || "";
    const componentSupportAssetLabel = component.supportAssetLabel || "View Reference";
    const introPromptText = level?.id === "tokyo-hiragana" ? "Which hiragana is" : "How do you say";

    if (Array.isArray(component.questions)) {
      return component.questions.map((question) => ({
        id: question.id,
        locationLabel,
        sublevelLabel: sublevelTitle,
        lessonLevelTitle,
        componentLabel: "",
        promptLabel: "",
        promptText: buildPromptText(question, component),
        promptSecondary: question.promptSecondary || "",
        acceptedAnswers: buildAcceptedAnswers(question, curriculumRuntime.lexicon),
        referenceChoices: buildQuestionChoices(question, curriculumRuntime.lexicon),
        supportAsset: question.supportAsset || componentSupportAsset,
        supportAssetTitle: question.supportAssetTitle || componentSupportAssetTitle,
        supportAssetLabel: question.supportAssetLabel || componentSupportAssetLabel,
      }));
    }

    if (Array.isArray(component.items)) {
      return component.items.map((item, index, items) => ({
        id: `${component.id}-intro-${index + 1}`,
        locationLabel,
        sublevelLabel: sublevelTitle,
        lessonLevelTitle,
        componentLabel: "",
        promptLabel: "",
        promptText: `${introPromptText} "${item.en}"?`,
        promptSecondary: "",
        acceptedAnswers: [item.jp],
        referenceChoices: buildChoiceDisplayFromItems(item, items),
        supportAsset: componentSupportAsset,
        supportAssetTitle: componentSupportAssetTitle,
        supportAssetLabel: componentSupportAssetLabel,
      }));
    }

    return [];
  }

  function buildLessonSession(sublevelId, preferredLessonLevelId = null) {
    const runtimeSublevel = getCurrentSublevelRuntime(sublevelId);
    if (!runtimeSublevel) return null;

    const lessonLevels = getLessonLevelsForSublevel(runtimeSublevel);
    const nextLessonLevel =
      lessonLevels.find((lessonLevel) => lessonLevel.id === preferredLessonLevelId) ||
      lessonLevels.find((lessonLevel) => !isLessonLevelCompleted(lessonLevel.id)) ||
      lessonLevels[0];

    const components = (nextLessonLevel?.components || []).map((component) => ({
      ...component,
      lessonLevelTitle: nextLessonLevel?.title || "Level 1",
      runtimeQuestions: buildQuestionsForComponent(component, runtimeSublevel.title),
    }));

    const totalQuestions = components.reduce(
      (sum, component) => sum + component.runtimeQuestions.length,
      0
    );

    return {
      sublevelId,
      sublevelTitle: runtimeSublevel.title,
      lessonLevelId: nextLessonLevel?.id || `${runtimeSublevel.id}-LEVEL-1`,
      lessonLevelTitle: nextLessonLevel?.title || "Level 1",
      lessonLevelIndex: Math.max(
        0,
        lessonLevels.findIndex((lessonLevel) => lessonLevel.id === nextLessonLevel?.id)
      ),
      lessonLevelCount: lessonLevels.length,
      components,
      currentComponentIndex: 0,
      queue: components[0]?.runtimeQuestions ? [...components[0].runtimeQuestions] : [],
      totalQuestions,
      completedQuestions: 0,
    };
  }

  function moveToNextComponent() {
    if (!appState.lessonSession) return false;

    while (appState.lessonSession.currentComponentIndex < appState.lessonSession.components.length - 1) {
      appState.lessonSession.currentComponentIndex += 1;
      const nextComponent = getCurrentComponent();
      const nextQueue = nextComponent?.runtimeQuestions ? [...nextComponent.runtimeQuestions] : [];
      if (nextQueue.length > 0) {
        appState.lessonSession.queue = nextQueue;
        return true;
      }
    }

    appState.lessonSession.queue = [];
    return false;
  }

  function completeSublevel() {
    const { level } = getQuestionSetMeta();
    const sublevel = level?.sublevels.find((item) => item.id === appState.activeSublevelId);
    const runtimeSublevel = getCurrentSublevelRuntime(appState.activeSublevelId);
    const lessonLevels = getLessonLevelsForSublevel(runtimeSublevel);
    const currentLessonLevelId = appState.lessonSession?.lessonLevelId;

    if (currentLessonLevelId && !isLessonLevelCompleted(currentLessonLevelId)) {
      appState.completedLessonLevelIds.push(currentLessonLevelId);
      saveCompletedLessonLevelIds();
    }

    clearSavedLessonSession();

    const sublevelFullyCompleted = lessonLevels.every((lessonLevel) =>
      isLessonLevelCompleted(lessonLevel.id)
    );

    if (sublevel) {
      sublevel.state = sublevelFullyCompleted ? "completed" : "available";
      sublevel.playable = true;
    }
    syncCurriculumProgressToMap();
    appState.activeLessonPicker = null;
    appState.expandedLevelId = appState.activeLevelId;
    showScreen("world");
    renderWorldMap();
  }

  function setWorldStatus(message = "", kind = "") {
    if (!worldStatus) return;
    if (!message) {
      worldStatus.textContent = "";
      worldStatus.className = "world-status hidden";
      return;
    }
    worldStatus.textContent = message;
    worldStatus.className = `world-status ${kind}`.trim();
  }

  async function loadCurriculumRuntime() {
    const results = await Promise.allSettled(
      curriculumRuntimeManifest.map(async (path) => {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`Failed to load runtime bundle: ${path}`);
        }
        return response.json();
      })
    );

    const bundles = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    const failedCount = results.length - bundles.length;

    if (failedCount === results.length) {
      throw new Error("All lesson bundles failed to load.");
    }

    const sublevelsById = {};
    const levelsById = {};
    const lexicon = createLexicon(bundles);

    bundles.forEach((bundle) => {
      levelsById[bundle.levelId] = bundle;
      bundle.sublevels.forEach((sublevel) => {
        sublevelsById[sublevel.id] = { ...sublevel, levelId: bundle.levelId };
      });
    });

    curriculumRuntime = { bundles, levelsById, sublevelsById, lexicon };

    if (failedCount > 0) {
      setWorldStatus(`Some lesson data failed to load. The map is still available, but a few branches may be missing.`, "warning");
    } else {
      setWorldStatus();
    }
  }

  function setTimerProgress(progressRatio) {
    const offset = timerCircumference * (1 - progressRatio);
    timerProgress.style.strokeDashoffset = String(offset);
    lessonShell.classList.toggle("timer-urgent", progressRatio <= 0.3 && progressRatio > 0);
  }

  function clearFeedback() {
    feedback.textContent = "";
    feedback.classList.remove("success", "error");
  }

  function setFeedback(message, kind) {
    feedback.textContent = message;
    feedback.classList.remove("success", "error");
    if (kind) {
      feedback.classList.add(kind);
    }
  }

  function updateSubmitVisibility() {
    if (normalizeAnswer(answerInput.value)) {
      submitButton.classList.remove("hidden");
    } else {
      submitButton.classList.add("hidden");
    }
  }

  function renderProgress() {
    const totalCount = appState.lessonSession?.totalQuestions || 0;
    const completed = appState.lessonSession?.completedQuestions || 0;
    const currentCount = Math.min(completed + 1, totalCount || 1);
    const percent = totalCount ? (completed / totalCount) * 100 : 0;
    progressCount.textContent = `${currentCount} / ${totalCount || 1}`;
    progressFill.style.width = `${percent}%`;
    progressSpark.style.left = `calc(${percent}% - 10px)`;
  }

  function clearChoiceSelection() {
    choicesGrid.querySelectorAll(".choice-pill").forEach((node) => {
      node.classList.remove("selected");
    });
  }

  function clearTransientState() {
    if (appState.successId) {
      window.clearTimeout(appState.successId);
      appState.successId = null;
    }
    if (appState.errorId) {
      window.clearTimeout(appState.errorId);
      appState.errorId = null;
    }
    if (appState.celebrationId) {
      window.clearTimeout(appState.celebrationId);
      appState.celebrationId = null;
    }

    lessonShell.classList.remove("is-correct", "is-wrong", "timer-urgent");
    lessonLeft.classList.remove("is-correct", "is-wrong");
    characterFrame.classList.remove("is-correct", "is-wrong");
    writingStage.classList.remove("is-correct", "is-wrong");
    choicesPanel.classList.remove("is-correct", "is-wrong");
    characterDialogue.classList.remove("is-correct", "is-wrong");
    celebrationLayer.className = "celebration-layer";
    celebrationLayer.setAttribute("aria-hidden", "true");
    celebrationConfetti.innerHTML = "";
  }

  function syncChoicesVisibility() {
    choicesPanel.classList.toggle("is-collapsed", appState.choicesHidden);
    choicesToggleButton.classList.toggle("is-hidden", appState.choicesHidden);
    choicesToggleButton.setAttribute("aria-expanded", String(!appState.choicesHidden));
    choicesToggleButton.setAttribute("aria-label", appState.choicesHidden ? "Show hints" : "Hide hints");
    choicesToggleButton.setAttribute("title", appState.choicesHidden ? "Show hints" : "Hide hints");
  }

  function spawnConfetti(kind) {
    celebrationConfetti.innerHTML = "";
    const pieceCount = kind === "success" ? 42 : 18;
    for (let index = 0; index < pieceCount; index += 1) {
      const piece = document.createElement("span");
      piece.className = `confetti-piece ${kind}`;
      piece.style.setProperty("--x-start", `${Math.random() * 100}%`);
      piece.style.setProperty("--x-drift", `${(Math.random() - 0.5) * 34}vw`);
      piece.style.setProperty("--delay", `${Math.random() * 0.16}s`);
      piece.style.setProperty("--duration", `${0.8 + Math.random() * 0.6}s`);
      piece.style.setProperty("--rotate", `${Math.random() * 520}deg`);
      piece.style.setProperty("--size", `${8 + Math.random() * 12}px`);
      celebrationConfetti.appendChild(piece);
    }
  }

  function showCelebration(kind) {
    const copy = kind === "success" ? randomItem(successCelebrations) : randomItem(errorCelebrations);
    celebrationWord.textContent = copy.jp;
    celebrationSubword.textContent = copy.en;
    celebrationMascot.src = kind === "success" ? randomItem(successMascots) : randomItem(errorMascots);
    celebrationMascot.alt = kind === "success" ? "Celebrating chibi mascot" : "Encouraging chibi mascot";
    spawnConfetti(kind);
    celebrationLayer.className = `celebration-layer is-visible ${kind}`;
    celebrationLayer.setAttribute("aria-hidden", "false");
    appState.celebrationId = window.setTimeout(() => {
      celebrationLayer.className = "celebration-layer";
      celebrationLayer.setAttribute("aria-hidden", "true");
      celebrationConfetti.innerHTML = "";
      appState.celebrationId = null;
    }, kind === "success" ? 1350 : 1050);
  }

  function triggerCorrectState() {
    clearTransientState();
    lessonShell.classList.add("is-correct");
    lessonLeft.classList.add("is-correct");
    characterFrame.classList.add("is-correct");
    writingStage.classList.add("is-correct");
    choicesPanel.classList.add("is-correct");
    characterDialogue.classList.add("is-correct");
    showCelebration("success");
    appState.successId = window.setTimeout(() => {
      clearTransientState();
    }, 1350);
  }

  function triggerErrorState() {
    clearTransientState();
    lessonShell.classList.add("is-wrong");
    lessonLeft.classList.add("is-wrong");
    characterFrame.classList.add("is-wrong");
    writingStage.classList.add("is-wrong");
    choicesPanel.classList.add("is-wrong");
    characterDialogue.classList.add("is-wrong");
    showCelebration("error");
    appState.errorId = window.setTimeout(() => {
      clearTransientState();
    }, 1050);
  }

  function revealRomaji() {
    if (appState.revealTriggered) return;
    appState.revealTriggered = true;
    document.querySelectorAll(".choice-romaji").forEach((node) => {
      node.classList.add("revealed");
    });
    romajiRevealButton.classList.add("is-revealed");
  }

  function stopTimer() {
    if (appState.timerId) {
      window.clearInterval(appState.timerId);
      appState.timerId = null;
    }
    lessonShell.classList.remove("timer-urgent");
  }

  function startTimer() {
    stopTimer();
    appState.secondsRemaining = 10;
    appState.revealTriggered = false;
    setTimerProgress(1);
    romajiRevealButton.classList.remove("is-revealed");
    document.querySelectorAll(".choice-romaji").forEach((node) => {
      node.classList.remove("revealed");
    });

    appState.timerId = window.setInterval(() => {
      appState.secondsRemaining -= 0.1;
      const clamped = Math.max(0, appState.secondsRemaining);
      setTimerProgress(clamped / 10);
      if (clamped <= 0) {
        stopTimer();
        revealRomaji();
      }
    }, 100);
  }

  function renderChoices(referenceChoices) {
    choicesGrid.innerHTML = "";
    referenceChoices.forEach((choice) => {
      const pill = document.createElement("button");
      pill.className = "choice-pill";
      pill.type = "button";
      pill.setAttribute("aria-label", `Use answer ${choice.primary}`);

      const jp = document.createElement("div");
      jp.className = "choice-jp";
      jp.textContent = choice.primary;

      const romaji = document.createElement("div");
      romaji.className = "choice-romaji";
      romaji.textContent = choice.secondary || "";

      if (!choice.secondary) {
        romaji.classList.add("no-secondary");
      }

      pill.append(jp, romaji);
      pill.addEventListener("click", () => {
        clearChoiceSelection();
        pill.classList.add("selected");
        pill.classList.remove("choice-picked");
        void pill.offsetWidth;
        pill.classList.add("choice-picked");
        answerInput.value = choice.value;
        updateSubmitVisibility();
        clearFeedback();
        answerInput.focus();
      });
      choicesGrid.appendChild(pill);
    });
  }

  function renderQuestionFrame() {
    const question = getCurrentQuestion();
    if (!question) return;
    const { city, sublevel } = getQuestionSetMeta();
    locationLabel.textContent = city?.name || question.locationLabel;
    characterTag.textContent = `${question.locationLabel || city?.name || "Lesson"} Guide`;
    const lessonLevelText = appState.lessonSession?.lessonLevelCount > 1
      ? ` · ${appState.lessonSession.lessonLevelTitle}`
      : "";
    sublevelLabel.textContent = `${sublevel?.title || question.sublevelLabel}${lessonLevelText}`;
    guidePromptMode.textContent = question.promptLabel || "";
    guidePromptMode.hidden = !question.promptLabel;
    guideLinePrimary.textContent = question.promptText || question.promptPrimary;
    guideLineSecondary.textContent = question.promptSecondary || "";
    if (question.supportAsset) {
      supportAssetButton.textContent = question.supportAssetLabel || "View Reference";
      supportAssetButton.classList.remove("hidden");
    } else {
      supportAssetButton.classList.add("hidden");
    }
    answerInput.value = "";
    clearChoiceSelection();
    updateSubmitVisibility();
    clearFeedback();
    dismissSupportModal(true);
    renderProgress();
    renderChoices(question.referenceChoices);
    syncChoicesVisibility();
    saveLessonSession();
    startTimer();
  }

  function renderQuestion(animate) {
    const question = getCurrentQuestion();
    if (!question) {
      completeSublevel();
      return;
    }

    clearTransientState();
    if (!animate) {
      renderQuestionFrame();
      lessonShell.classList.add("is-entering");
      appState.transitionId = window.setTimeout(() => {
        lessonShell.classList.remove("is-entering");
        appState.transitionId = null;
      }, 520);
      return;
    }

    if (appState.transitionId) {
      window.clearTimeout(appState.transitionId);
      appState.transitionId = null;
    }

    lessonShell.classList.remove("is-entering");
    lessonShell.classList.add("is-transitioning");

    appState.transitionId = window.setTimeout(() => {
      renderQuestionFrame();
      lessonShell.classList.remove("is-transitioning");
      lessonShell.classList.add("is-entering");
      appState.transitionId = window.setTimeout(() => {
        lessonShell.classList.remove("is-entering");
        appState.transitionId = null;
      }, 460);
    }, 180);
  }

  function advanceQuestion() {
    if (!appState.lessonSession) return;

    appState.lessonSession.completedQuestions += 1;
    appState.lessonSession.queue.shift();

    if (appState.lessonSession.queue.length > 0) {
      renderQuestion(true);
      return;
    }

    if (moveToNextComponent()) {
      renderQuestion(true);
      return;
    }

    completeSublevel();
  }

  function showScreen(screenName) {
    appState.screen = screenName;
    worldScreen.classList.toggle("hidden-screen", screenName !== "world");
    lessonShell.classList.toggle("hidden-screen", screenName !== "lesson");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (screenName !== "lesson") {
      stopTimer();
      clearTransientState();
      dismissSupportModal(true);
    }
  }

  function dismissSupportModal(skipFocus = false) {
    appState.activeSupportAsset = null;
    supportModalLayer.classList.add("hidden");
    supportModalLayer.setAttribute("aria-hidden", "true");
    supportModalImage.src = "";
    supportModalImage.alt = "";
    if (!skipFocus && !supportAssetButton.classList.contains("hidden")) {
      supportAssetButton.focus();
    }
  }

  function openSupportModal(question) {
    if (!question?.supportAsset) return;
    appState.activeSupportAsset = question.supportAsset;
    supportModalTitle.textContent = question.supportAssetTitle || "Lesson Reference";
    supportModalImage.src = question.supportAsset;
    supportModalImage.alt = question.supportAssetTitle || "Lesson reference image";
    supportModalLayer.classList.remove("hidden");
    supportModalLayer.setAttribute("aria-hidden", "false");
  }

  function createIconMarkup(level) {
    if (level.state === "locked") {
      return `<img class="stop-icon-svg stop-icon-lock" src="./assets/icons/lock.svg" alt="" aria-hidden="true">`;
    }

    return `<img class="stop-icon-svg stop-icon-pin" src="./assets/icons/pin.svg" alt="" aria-hidden="true">`;
  }

  function renderWorldMap() {
    window.scrollTo(0, 0);
    worldMapTrack.innerHTML = "";
    worldPopoverLayer.innerHTML = "";
    dismissLessonPicker(true);

    let expandedLevelRef = null;

    cityMap.forEach((city) => {
      const citySection = document.createElement("section");
      citySection.className = `city-column theme-${city.theme}`;
      if (city.image) {
        citySection.classList.add("has-art");
        citySection.style.setProperty("--city-scene-image", `url("${city.image}")`);
      }

      const cityTitle = document.createElement("div");
      cityTitle.className = "city-title-banner";
      cityTitle.innerHTML = `
        <h2 class="city-title-mask">
          <span class="city-title-latin">${city.name}</span>
          <span class="city-title-jp">${city.nameJp}</span>
        </h2>
      `;

      const cityStage = document.createElement("div");
      cityStage.className = "city-stage";
      cityStage.innerHTML = `
        <div class="city-stage-scene">
          <div class="city-stage-image"></div>
        </div>
        <div class="city-route" aria-hidden="true"></div>
      `;

      const routeLayer = cityStage.querySelector(".city-route");

      city.levels.slice(0, -1).forEach((level, index) => {
        const nextLevel = city.levels[index + 1];
        const segment = document.createElement("div");
        segment.className = "city-route-segment";
        segment.style.left = `calc(${level.position}% + var(--stop-size) / 2 - 10px)`;
        segment.style.width = `calc(${nextLevel.position - level.position}% - var(--stop-size) + 20px)`;
        routeLayer.appendChild(segment);
      });

      city.levels.forEach((level) => {
        const stop = document.createElement("div");
        stop.className = `city-stop is-${level.state} ${appState.expandedLevelId === level.id ? "is-expanded" : ""}`;
        stop.style.setProperty("--stop-x", `${level.position}%`);

        const label = document.createElement("div");
        label.className = "city-stop-label";
        label.innerHTML = `
          <span class="city-stop-jp">${level.titleJp}</span>
          <span class="city-stop-en">${level.shortTitle}</span>
        `;

        const iconWrap = document.createElement(level.state === "locked" ? "div" : "button");
        iconWrap.className = `city-stop-trigger is-${level.state}`;
        iconWrap.innerHTML = createIconMarkup(level);

        if (level.state !== "locked") {
          iconWrap.type = "button";
          iconWrap.setAttribute("aria-expanded", appState.expandedLevelId === level.id ? "true" : "false");
          iconWrap.addEventListener("click", () => {
            appState.expandedLevelId = appState.expandedLevelId === level.id ? null : level.id;
            renderWorldMap();
          });
        }

        stop.append(label, iconWrap);

        if (appState.expandedLevelId === level.id && level.state !== "locked") {
          expandedLevelRef = { city, level, iconWrap };
        }

        cityStage.appendChild(stop);
      });

      citySection.append(cityTitle, cityStage);
      worldMapTrack.appendChild(citySection);
    });

    if (expandedLevelRef) {
      renderWorldPopover(expandedLevelRef);
    }
  }

  function renderWorldPopover({ city, level, iconWrap }) {
    const overlayRect = worldScreen.getBoundingClientRect();
    const stopRect = iconWrap.getBoundingClientRect();

    const menu = document.createElement("div");
    menu.className = "city-stop-menu";
    menu.style.left = `${stopRect.left - overlayRect.left - 8}px`;
    menu.style.top = `${stopRect.bottom - overlayRect.top + 18}px`;

    const menuBody = document.createElement("div");
    menuBody.className = "city-stop-menu-body";

    const availableHeight = Math.max(180, overlayRect.bottom - stopRect.bottom - 40);
    menuBody.style.maxHeight = `${Math.min(320, availableHeight)}px`;

    level.sublevels.forEach((sublevel) => {
      const branchRow = document.createElement("div");
      branchRow.className = "city-stop-menu-row";

      const node = document.createElement("div");
      node.className = `city-stop-menu-node is-${sublevel.state}`;

      const row = document.createElement(sublevel.playable ? "button" : "div");
      row.className = `sublevel-menu-item is-${sublevel.state}`;
      const runtimeSublevel = getCurrentSublevelRuntime(sublevel.id);
      const lessonLevels = getLessonLevelsForSublevel(runtimeSublevel);
      const completedCount = lessonLevels.filter((lessonLevel) => isLessonLevelCompleted(lessonLevel.id)).length;
      const progressText = lessonLevels.length > 1 ? `${completedCount} / ${lessonLevels.length}` : "";

      row.innerHTML = `
        <span class="sublevel-menu-text">${sublevel.title}</span>
        ${progressText ? `<span class="sublevel-menu-state">${progressText}</span>` : ""}
      `;

      if (sublevel.playable) {
        row.type = "button";
        row.addEventListener("click", () => {
          openLessonPicker(city, level, sublevel);
        });
      }

      if (sublevel.state === "locked") {
        row.innerHTML += `<span class="sublevel-menu-state">Locked</span>`;
      }

      if (sublevel.state === "preview") {
        row.innerHTML += `<span class="sublevel-menu-state">Soon</span>`;
      }

      branchRow.append(node, row);
      menuBody.appendChild(branchRow);
    });

    menu.appendChild(menuBody);
    worldPopoverLayer.appendChild(menu);
  }

  function dismissWorldPopover() {
    if (!appState.expandedLevelId) {
      return;
    }

    appState.expandedLevelId = null;
    renderWorldMap();
  }

  function dismissLessonPicker(silent = false) {
    appState.activeLessonPicker = null;
    worldModalLayer.classList.add("hidden");
    worldModalLayer.setAttribute("aria-hidden", "true");
    lessonPickerList.innerHTML = "";
    if (!silent && appState.expandedLevelId) {
      renderWorldMap();
    }
  }

  function openLessonPicker(city, level, sublevel) {
    const runtimeSublevel = getCurrentSublevelRuntime(sublevel.id);
    const lessonLevels = getLessonLevelsForSublevel(runtimeSublevel);
    appState.activeLessonPicker = { cityId: city.id, levelId: level.id, sublevelId: sublevel.id };

    lessonPickerImage.src = getInstructorImage(city, level);
    lessonPickerImage.alt = `${level.shortTitle} lesson instructor`;
    lessonPickerKicker.textContent = `${city.name} / ${level.shortTitle}`;
    lessonPickerTitle.textContent = sublevel.title;
    lessonPickerList.innerHTML = "";

    const completedCount = lessonLevels.filter((lessonLevel) => isLessonLevelCompleted(lessonLevel.id)).length;

    lessonLevels.forEach((lessonLevel, index) => {
      const isCompleted = isLessonLevelCompleted(lessonLevel.id);
      const isAvailable = isCompleted || index <= completedCount;
      const row = document.createElement(isAvailable ? "button" : "div");
      row.className = `lesson-level-row is-${isCompleted ? "completed" : isAvailable ? "available" : "locked"}`;

      row.innerHTML = `
        <span class="lesson-level-check">${isCompleted ? "✓" : ""}</span>
        <span class="lesson-level-copy">
          <span class="lesson-level-title">${lessonLevel.title}</span>
          <span class="lesson-level-summary">${lessonLevel.components.length} components</span>
        </span>
        <span class="lesson-level-meta">${isCompleted ? "Clear" : isAvailable ? "Play" : "Locked"}</span>
      `;

      if (isAvailable) {
        row.type = "button";
        row.addEventListener("click", () => {
          appState.activeCityId = city.id;
          appState.activeLevelId = level.id;
          appState.activeSublevelId = sublevel.id;
          appState.lessonSession = buildLessonSession(sublevel.id, lessonLevel.id);
          dismissLessonPicker(true);
          showScreen("lesson");
          renderQuestion(false);
        });
      }

      lessonPickerList.appendChild(row);
    });

    worldModalLayer.classList.remove("hidden");
    worldModalLayer.setAttribute("aria-hidden", "false");
  }

  submitButton.addEventListener("click", () => {
    const question = getCurrentQuestion();
    if (!question) return;
    const submitted = normalizeAnswer(answerInput.value);
    const correct = question.acceptedAnswers.some(
      (candidate) => normalizeAnswer(candidate) === submitted
    );

    if (correct) {
      stopTimer();
      revealRomaji();
      triggerCorrectState();
      setFeedback("Perfect. Next prompt coming up.", "success");
      window.setTimeout(() => {
        advanceQuestion();
      }, 1350);
      return;
    }

    revealRomaji();
    triggerErrorState();
    setFeedback("Close. Compare against the Japanese choices and try again.", "error");
    if (appState.lessonSession?.queue?.length) {
      const [current] = appState.lessonSession.queue.splice(0, 1);
      appState.lessonSession.queue.push(current);
    }
    window.setTimeout(() => {
      renderQuestion(true);
    }, 1050);
  });

  choicesToggleButton.addEventListener("click", () => {
    appState.choicesHidden = !appState.choicesHidden;
    saveChoicesHiddenPreference();
    syncChoicesVisibility();
  });

  answerInput.addEventListener("input", () => {
    clearChoiceSelection();
    updateSubmitVisibility();
  });

  supportAssetButton.addEventListener("click", () => {
    const question = getCurrentQuestion();
    openSupportModal(question);
  });

  romajiRevealButton.addEventListener("click", () => {
    stopTimer();
    revealRomaji();
  });

  supportModalClose.addEventListener("click", () => dismissSupportModal());
  supportModalBackdrop.addEventListener("click", () => dismissSupportModal());

  lessonBackButton.addEventListener("click", () => {
    clearSavedLessonSession();
    showScreen("world");
  });

  worldModalBackdrop.addEventListener("click", () => dismissLessonPicker(true));
  lessonPickerClose.addEventListener("click", () => dismissLessonPicker(true));

  worldMapScroll.addEventListener("scroll", () => {
    dismissWorldPopover();
    dismissLessonPicker(true);
  }, { passive: true });
  window.addEventListener("resize", () => {
    dismissWorldPopover();
    dismissLessonPicker(true);
    dismissSupportModal(true);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !supportModalLayer.classList.contains("hidden")) {
      dismissSupportModal();
    }
  });

  async function init() {
    try {
      loadCompletedLessonLevelIds();
      await loadCurriculumRuntime();
      syncCurriculumProgressToMap();
      const savedSession = loadSavedLessonSession();
      const savedRuntimeSublevel = savedSession
        ? getCurrentSublevelRuntime(savedSession.activeSublevelId)
        : null;

      const restoredLessonSession = savedRuntimeSublevel
        ? restoreLessonSession(savedSession)
        : null;

      if (restoredLessonSession) {
        appState.activeCityId = savedSession.activeCityId;
        appState.activeLevelId = savedSession.activeLevelId;
        appState.activeSublevelId = savedSession.activeSublevelId;
        appState.lessonSession = restoredLessonSession;
        showScreen("lesson");
        renderQuestion(false);
      } else {
        clearSavedLessonSession();
        appState.lessonSession = buildLessonSession(appState.activeSublevelId);
        renderWorldMap();
        showScreen("world");
      }
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
      setWorldStatus("Lesson data couldn't load correctly. Refresh the page or restart the local server.", "error");
      renderWorldMap();
      showScreen("world");
      setFeedback("Couldn't load lesson data.", "error");
    }
  }

  registerServiceWorker();
  init();
})();
