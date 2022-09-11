// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  let currentReview = 0;

  // create elements of HTML

  let app = document.querySelector("#app");

  let container = document.createElement("div");
  container.classList.add("review");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  let img = document.createElement("img");
  img.classList.add("person-img");
  img.src = reviews[currentReview].img; 

  let author = document.createElement("h3");
  author.setAttribute("id", "author");
  author.textContent = reviews[currentReview].name;

  let job = document.createElement("p");
  job.setAttribute("id", "job");
  job.textContent = reviews[currentReview].job;
  
  let review = document.createElement("div");
  review.setAttribute("id", "info");
  review.textContent = reviews[currentReview].text;

  let btnContainer = document.createElement("div");

  let prevBtn = document.createElement("button");
  prevBtn.classList.add("fas", "fa-chevron-left", "prev-btn");
  
  let nextBtn = document.createElement("button");
  nextBtn.classList.add("fas", "fa-chevron-right", "next-btn");

  let randomBtn = document.createElement("button");
  randomBtn.classList.add("random-btn");
  randomBtn.innerText = "random review";

  // create structure of document

  app.append(container);
  container.append(imgContainer, author, job, review, btnContainer, randomBtn);
  imgContainer.append(img);
  btnContainer.append(prevBtn, nextBtn);

  // events

  function showPerson () {
    let item = reviews[currentReview];
    img.src = item.img;
    author.innerText = item.name;
    job.innerText = item.job;
    review.innerText = item.text;
  }

  function randomReview () {
    return currentReview = Math.floor(Math.random() * reviews.length);
  }

  nextBtn.addEventListener("click", function () {
    currentReview++;
    if (currentReview > reviews.length - 1) currentReview = 0;
    showPerson();
  }
  );

  prevBtn.addEventListener("click", () => {
    currentReview--;
    if (currentReview < 0) currentReview = reviews.length - 1;
    showPerson();
  }
  );

  randomBtn.addEventListener("click", () => {
    randomReview();
    showPerson();
  })



