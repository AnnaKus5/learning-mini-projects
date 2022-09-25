function fetchMenu() {
  fetch("./db.json")
  .then(response => response.json())
  .then(menuData => {
    let menu = menuData.menu;
    loadMenu(menu);
    loadBtnMenu(menu)
  })
  .catch(e => console.log(e)); 
}

fetchMenu();


function loadMenu(menu) {
  let sectionCenter = document.querySelector(".section-center");
  let listOfMeals = menu.map(item => {
    return `
    <article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`
  }).join("");

  sectionCenter.innerHTML = listOfMeals;
}

function loadBtnMenu (menu) {

  addBtns();
  addBtnsEvents();

  function addBtns() {
    let btnContainer = document.querySelector(".btn-container");
    let categories = new Set(menu.map(item => item.category));
  
    categories.forEach(item => {
      let btn = document.createElement("button");
      btn.classList.add("filter-btn");
      btn.textContent = item;
      btnContainer.append(btn);
    });
  }

  function addBtnsEvents() {
    let btns = document.querySelectorAll("button");

    btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        let category = e.currentTarget.textContent;
        if (category === "all") {
          loadMenu(menu);
        }
        else {
          let categoryMenu = menu.filter(item => item.category === category);
          loadMenu(categoryMenu);
        }
      })
    })
  }
}
