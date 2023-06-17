// Variables
const mainEl = document.querySelector("main");
const topMenuEl = document.querySelector("#top-menu");
const subMenuEl = document.querySelector("#sub-menu");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Creates <a> elements for top and sub menu.
function createMenuElements(menuInfoArr, elToCreate, parentEl) {
  for (let item of menuInfoArr) {
    let newItem = document.createElement(elToCreate);
    newItem.setAttribute("href", item.href);
    newItem.textContent = item.text;
    parentEl.appendChild(newItem);
  }
}

function rmActiveClass() {
  for (let item of topMenuLinks) {
    item.classList.remove("active");
  }
}

function collapseSubMenu() {
  showingSubMenu = false;
  subMenuEl.style.top = "0";
}

createMenuElements(menuLinks, "a", topMenuEl);
const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.localName !== "a") return;

  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    collapseSubMenu();
    return;
  }

  rmActiveClass();
  evt.target.classList.add("active");

  const subArray = [];
  let linkName = evt.target.textContent;

  if (linkName === "about") {
    showingSubMenu = false;
    mainEl.innerHTML = `<h1>about</h1>`;
  } else {
    for (let info of menuLinks) {
      if (info.text === linkName && info.subLinks) {
        showingSubMenu = true;
        for (let sub of info.subLinks) subArray.push(sub);
      }
    }
  }

  if (showingSubMenu) {
    buildSubMenu(subArray);
    subMenuEl.style.top = "100%";
  } else {
    collapseSubMenu();
  }
});

function buildSubMenu(subArray) {
  subMenuEl.textContent = "";
  createMenuElements(subArray, "a", subMenuEl);
}

subMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.localName !== "a") return;
  collapseSubMenu();
  rmActiveClass();

  // Display link text to <main>.
  mainEl.textContent = evt.target.textContent;
});
