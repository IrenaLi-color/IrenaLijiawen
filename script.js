const stories = {
  campus: {
    kicker: "Campus",
    title: "在校经历",
    paragraphs: [
      "大学于我，从来不只是课堂。",
      "它更像一片辽阔的原野，让我不断尝试、不断靠近真正热爱的方向。有人在实验室寻找答案，有人在舞台上发光，而我，则希望成为连接人与人、知识与世界的那座桥。",
      "本科四年，我活跃于校团委、志愿者协会、学生社团等多个组织，从策划一场活动，到统筹一支团队，从写下一篇推文，到组织数百人的校园赛事，我逐渐学会如何把一个想法变成现实，也学会在合作中倾听、协调与成长。每一次会议、每一次活动、每一份策划案，都让我相信，好的组织力，本质上是一种对人的理解。",
      "后来，我走进实验室，开始接触另一种表达方式。参与汉字数字化研究，整理《说文解字》的义项关系，搭建汉字学习网站、设计汉字互动游戏……那些古老的文字，在数据、交互与设计中焕发新的生命。我第一次真切感受到，传统文化并不是停留在书页里的历史，它可以成为今天的人们重新认识世界的一种方式。",
      "来到暨南大学后，我继续担任研究生会主席团成员，策划校园活动、组织大型论坛、服务师生，也在学生助理岗位上参与学校行政与就业服务工作。不同的身份让我不断切换视角，也让我更加确信：成长，从来不是拥有更多头衔，而是在一次次实践中，成为一个更可靠、更有温度的人。"
    ],
    images: [
      "campus-01.jpeg",
      "campus-02.jpeg",
      "campus-03.jpeg",
      "campus-04.jpeg",
      "campus-05.png",
      "campus-06.png",
      "campus-07.jpeg",
      "campus-08.jpeg",
      "campus-09.jpeg",
      "campus-10.jpeg"
    ]
  },
  practice: {
    kicker: "Practice",
    title: "实习实践",
    paragraphs: [
      "如果说校园给予我成长的土壤，那么实践，则让我真正看见世界。",
      "我喜欢走进不同的行业，体验不同的角色。做过记者，也做过运营；写过新闻，也策划过活动；运营过社群，也参与过公益项目。我始终相信，每一次身份的转换，都是一次新的学习。",
      "在媒体实习期间，我穿梭于采访现场和编辑部之间，记录教育、金融、社会中的真实故事。那些不断追问、不断求证的过程，让我学会用更严谨的态度面对信息，也让我意识到，文字真正的力量，不只是表达，更是连接人与时代。",
      "后来，我与爱奇艺、腾讯、海尔等品牌共同完成校园推广、内容传播与社群运营。从策划一场活动，到运营数百人的社群，再到与不同团队协作，我逐渐理解，一个好的传播，不只是让更多人看见，更是让更多人愿意参与其中。",
      "我也曾参与公益组织，为动物保护整理案例、运营社交媒体、寻找更好的传播方式。那些经历让我相信，内容不仅能够创造影响力，也可以承载善意，推动一点点真实的改变。",
      "每一次实践，都让我离理想中的自己更近一步——保持好奇，认真倾听，并始终相信创作能够创造价值。"
    ],
    images: [
      "practice-01.png",
      "practice-02.png",
      "practice-03.jpeg",
      "practice-04.jpeg",
      "practice-05.jpeg",
      "practice-06.jpeg"
    ]
  },
  life: {
    kicker: "Life",
    title: "个人生活",
    paragraphs: [
      "生活之外，我依旧热爱观察这个世界。",
      "我喜欢旅行，喜欢走进陌生的城市，去听不同的人讲述他们的故事；喜欢摄影，把那些稍纵即逝的光影与情绪留在画面里；也喜欢音乐、展览、书店，以及所有能够激发灵感的新鲜事物。",
      "很多人问我，为什么总愿意尝试新的事情。",
      "或许是因为我始终相信，一个人的边界，不是专业决定的，而是好奇心决定的。一次采访、一场志愿活动、一段旅程、一件作品，看似毫无关联，却都会在未来的某一天重新相遇，成为新的灵感。",
      "我喜欢记录，也喜欢创造。从策划一个小游戏，到设计一个网站；从写下一篇文章，到完成一件作品，我希望每一次表达，都能够让复杂的问题变得简单，让文化与知识以更轻松的方式被理解。",
      "未来，我仍会继续出发。",
      "去看更多风景，认识更多人，学习更多未知，也期待把这些经历，慢慢沉淀成属于自己的作品。",
      "希望自己的创作可以吸引更多有趣的灵魂。"
    ],
    images: [
      "life-01.jpeg",
      "life-02.jpeg",
      "life-03.jpeg",
      "life-04.jpeg",
      "life-05.jpeg",
      "life-06.jpeg"
    ]
  }
};

const portraitButton = document.querySelector("#portraitButton");
const heroActions = document.querySelector("#heroActions");
const profileSection = document.querySelector("#profile");
const moreButton = document.querySelector("#moreButton");
const storyCards = document.querySelector("#storyCards");
const contactModal = document.querySelector("#contactModal");
const storyModal = document.querySelector("#storyModal");
const storyModalKicker = document.querySelector("#storyModalKicker");
const storyModalTitle = document.querySelector("#storyModalTitle");
const storyModalCopy = document.querySelector("#storyModalCopy");
const storyModalGallery = document.querySelector("#storyModalGallery");

let lastFocusedElement = null;

function setHeroActionsVisible(force) {
  const shouldShow = typeof force === "boolean" ? force : !heroActions.classList.contains("is-visible");
  heroActions.classList.toggle("is-visible", shouldShow);
  portraitButton.setAttribute("aria-expanded", String(shouldShow));
}

function revealProfile() {
  profileSection.hidden = false;
  profileSection.classList.add("is-visible");
  setHeroActionsVisible(false);
  requestAnimationFrame(() => {
    profileSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function openModal(modal) {
  lastFocusedElement = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const focusTarget = modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
  focusTarget?.focus();
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  if (!document.querySelector(".modal.is-open")) {
    document.body.classList.remove("modal-open");
  }

  lastFocusedElement?.focus();
}

function openStory(storyKey) {
  const story = stories[storyKey];

  storyModalKicker.textContent = story.kicker;
  storyModalTitle.textContent = story.title;
  storyModalCopy.replaceChildren(
    ...story.paragraphs.map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    })
  );
  storyModalGallery.replaceChildren(
    ...story.images.map((imageName, index) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = `assets/images/${imageName}`;
      image.alt = `${story.title}相关图片 ${index + 1}`;
      image.loading = "lazy";
      figure.append(image);
      return figure;
    })
  );

  openModal(storyModal);
}

portraitButton.addEventListener("click", () => setHeroActionsVisible());

document.querySelectorAll("[data-show-profile]").forEach((button) => {
  button.addEventListener("click", revealProfile);
});

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => openModal(contactModal));
});

moreButton.addEventListener("click", () => {
  const visible = !storyCards.classList.contains("is-visible");
  storyCards.classList.toggle("is-visible", visible);
  moreButton.setAttribute("aria-expanded", String(visible));
});

document.querySelectorAll("[data-story]").forEach((button) => {
  button.addEventListener("click", () => openStory(button.dataset.story));
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", () => {
    const modal = element.closest(".modal");
    if (modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  const open = document.querySelector(".modal.is-open");
  if (open) {
    closeModal(open);
  }
});
