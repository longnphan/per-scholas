// Variables
const mainEl = document.querySelector("main");
const topMenuEl = document.querySelector("#top-menu");

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
function addMenuElements(menuInfoArr, elToCreate, parentEl) {
  for (let item of menuInfoArr) {
    let newItem = document.createElement(elToCreate);
    newItem.setAttribute("href", item.href);
    newItem.textContent = item.text;
    parentEl.appendChild(newItem);
  }
}

// Removes "active" class from elements
function rmActiveClass() {
  for (let item of topMenuLinks) {
    item.classList.remove("active");
  }
}

// Create top menu links.
addMenuElements(menuLinks, "a", topMenuEl);

const subMenuEl = document.querySelector("#sub-menu");
const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.localName !== "a") return;

  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  // Removes active class from top menu links.
  rmActiveClass();

  // Task 5.5
  evt.target.classList.add("active");

  // Task 5.6
  const subArray = [];
  let textName = evt.target.textContent;

  if (textName !== "about") {
    for (let info of menuLinks) {
      if (info.text === textName && info.subLinks) {
        showingSubMenu = true;

        for (let sub of info.subLinks) subArray.push(sub);
      }
    }
  }

  if (textName === "about") {
    showingSubMenu = false;

    // Task 6.4
    mainEl.innerHTML = `<h1>about</h1>`;
  }

  // Task 5.7
  if (showingSubMenu) {
    buildSubMenu(subArray);
    subMenuEl.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  }
});

// Task 5.8
function buildSubMenu(subArray) {
  subMenuEl.textContent = "";
  addMenuElements(subArray, "a", subMenuEl);
}

// Task 6.0
subMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.localName !== "a") return;

  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // Removes active class from top menu links.
  rmActiveClass();

  // Task 6.3
  mainEl.textContent = evt.target.textContent;
});
