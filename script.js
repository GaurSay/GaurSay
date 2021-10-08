/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".section_subtitle", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".main", { interval: 200 });
sr.reveal(".data-block", { interval: 200 });
sr.reveal(".skill-img", { interval: 200 });
sr.reveal(".skills_data", { interval: 40 });

var skillToggle = document.querySelectorAll(".skills_header");
for (var i = 0; i < skillToggle.length; i++) {
  skillToggle[i].addEventListener("click", function () {
    let skillList = this.nextElementSibling;
    skillList.classList.toggle("skills_list");
    skillList.classList.toggle("active");
  });
}

////// EDUCATION and Experience //////////////
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("exp_active");
    });

    target.classList.add("exp_active");

    tabs.forEach((tab) => {
      tab.classList.remove("exp_active-tab");
    });
    tab.classList.add("exp_active-tab");
  })
);
