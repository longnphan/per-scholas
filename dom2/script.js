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

console.log("Tooooop", menuLinks);

let mainEl = document.querySelector("main");
console.log(mainEl);

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>SEI Rocks!</h1>`;
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-ctr");

menuLinks.forEach(item => {
  let linkItem = document.createElement("a");
  linkItem.setAttribute("href", item.href);
  linkItem.textContent = item.text;
  topMenuEl.appendChild(linkItem);
});

// Task 4.0
const subMenuEl = document.querySelector("#sub-menu");

// Task 4.1
subMenuEl.style.height = "100%";

// Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
subMenuEl.classList.add("flex-around");

// Task 4.4
subMenuEl.style.position = "absolute";

// Task 4.5
subMenuEl.style.top = "0";

// Task 5.0
// Updated menuLinks array up top.

// Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll("a");

// Task 5.2 & Task 5.3
topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (evt.target.localName !== "a") return;

  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  // Task 5.4
  for (let item of topMenuLinks) {
    item.classList.remove("active");
  }

  // Task 5.5
  if (evt.target) evt.target.classList.add("active");

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

  for (item of subArray) {
    let linkItem = document.createElement("a");
    linkItem.setAttribute("href", item.href);
    linkItem.textContent = item.text;
    subMenuEl.appendChild(linkItem);
  }
}

// Task 6.0
subMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.localName !== "a") return;

  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // Task 6.2
  for (let item of topMenuLinks) {
    item.classList.remove("active");
  }

  // Task 6.3
  mainEl.textContent = evt.target.textContent;

  // Task 6.4
  // updated on line 118
});
