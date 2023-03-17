let listElements = document.querySelectorAll(".link");
const navIcon = document.querySelector(".navIcon");

listElements.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    if (listElement.classList.contains("active")) {
      listElement.classList.remove("active");
    } else {
      listElements.forEach((ListE) => {
        ListE.classList.remove("active");
      });
      listElement.classList.toggle("active");
    }
  });
});
