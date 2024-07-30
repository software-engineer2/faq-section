const questions = document.querySelectorAll(".question");
const icons = document.querySelectorAll(".icon");

const togglingText = function (section) {
  const text = section.querySelector(".text");
  text.classList.toggle("hide-display");

  const iconPlus = section.querySelector(".icon-plus");
  const iconMinus = section.querySelector(".icon-minus");
  iconPlus.classList.toggle("hide-display");
  iconMinus.classList.toggle("hide-display");
};

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    // Find the parent section of the clicked question
    const section = question.closest("section");
    togglingText(section);
  });
});

icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    const section = icon.closest("section");
    togglingText(section);
  });
});
