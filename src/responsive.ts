let isMobile: boolean = window.innerWidth < 600;
console.log(isMobile);

const respond = (_isMobile: boolean, isMobile: boolean) => {
  if (_isMobile != isMobile) {
    console.log("Responding...");
    makeCardsMobile(isMobile);
  }
};

const setIsMobile = (_event: UIEvent) => {
  const _isMobile = isMobile;
  if (window.innerWidth < 600) isMobile = true;
  else isMobile = false;
  respond(_isMobile, isMobile);
};

window.addEventListener("resize", setIsMobile);

// SELECTORS
// Layout
// Members
const membersList = document.querySelector(".members__list");
const membersListCards = document.querySelectorAll(".members__list__card");

// Responsive Layout
// Responsive Member Cards
const makeCardsMobile = (isMobile: boolean) => {
  if (isMobile) {
    membersList?.classList.add("mobile");
    membersListCards.forEach((card) => card.classList.add("mobile"));
  } else {
    membersList?.classList.remove("mobile");
    membersListCards.forEach((card) => card.classList.remove("mobile"));
  }
};
