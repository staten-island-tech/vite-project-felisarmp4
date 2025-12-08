const uploadmemebtn = document.querySelector(".uploadmeme");
const memeform = document.querySelector(".meme-form");
const container = document.querySelector("#meme-list");
const filterbtns = document.querySelectorAll(".filterbtn");

uploadmemebtn.addEventListener("click", () => {
  memeform.classList.toggle("show");
});

const memes = [
  {
    name: "dr cuddy cat",
    img: "src/photos/1house.jpg",
    desc: "cuddy as a cat. isn't this the best cat to pet? (yes)",
    type: "silly",
  },
  {
    name: "dr. freak",
    img: "src/photos/2house.jpg",
    desc: "definetly pick up this call!",
    type: "cursed",
  },
  {
    name: "papa louie: house md edition",
    img: "src/photos/3house.jpg",
    desc: "i think this vexes me as well dr foreman",
    type: "character moment",
  },
  {
    name: "vicodin juggling",
    img: "src/photos/4house.jpg",
    desc: "hes locked n loaded when it comes to drug abuse",
    type: "silly",
  },
  {
    name: "chase and cat",
    img: "src/photos/5house.jpg",
    desc: "me too me too dr chase im shocked too",
    type: "reaction",
  },
  {
    name: "gay?",
    img: "src/photos/6house.jpg",
    desc: "so are you or not?",
    type: "character moment",
  },
  {
    name: "hilson brain connection",
    img: "src/photos/7house.jpg",
    desc: "youre gonna live with these doctors this is normal for dr house and dr wilson",
    type: "ship",
  },
  {
    name: "taub fairy",
    img: "src/photos/8house.jpg",
    desc: "hes so sweet and innocent i hope taub never bites the curb",
    type: "reaction",
  },
  {
    name: "hilson couple counseling",
    img: "src/photos/9house.jpg",
    desc: "cuddy does NOT wanna be with these two together",
    type: "ship",
  },
  {
    name: "dr wilson fish",
    img: "src/photos/25house.jpg",
    desc: "i too am a fish on this website",
    type: "silly",
  },
  {
    name: "wilson smile",
    img: "src/photos/10house.jpg",
    desc: "he's getting the facebook mom in. don't forget to smile!!",
    type: "reaction",
  },
  {
    name: "wilson malewife",
    img: "src/photos/11house.jpg",
    desc: "house and him are the og doomes yaoi",
    type: "ship",
  },
  {
    name: "foreman happy",
    img: "src/photos/12house.png",
    desc: "buddy nothing can make you THIS happy youre a doctor for gosh sake",
    type: "reaction",
  },
  {
    name: "foreman monday",
    img: "src/photos/13house.jpg",
    desc: "keep calm and shoplift on",
    type: "silly",
  },
  {
    name: "all rounder house",
    img: "src/photos/14house.jpg",
    desc: "at any given time he can be all of them",
    type: "character moment",
  },
  {
    name: "crazy rejection",
    img: "src/photos/15house.jpg",
    desc: "this is very fititng for the doomed yaoi they have",
    type: "ship",
  },
  {
    name: "flexible house",
    img: "src/photos/16house.jpg",
    desc: "the amount of vicodin he would have to take to do this...",
    type: "cursed",
  },
  {
    name: "medical malpractice",
    img: "src/photos/17house.jpg",
    desc: "the fact the doawk and house have the same name lwk wild",
    type: "character moment",
  },
  {
    name: "house crazy",
    img: "src/photos/18house.jpg",
    desc: "there no hiding it we all know youre crazy house",
    type: "character moment",
  },
  {
    name: "house kidnapping",
    img: "src/photos/19house.jpg",
    desc: "house kidnapping a girl idk there no way i can describe this",
    type: "cursed",
  },
  {
    name: "two sided house",
    img: "src/photos/20house.jpg",
    desc: "i think were all agressive and serve tea sometimes",
    type: "reaction",
  },
  {
    name: "mommy watching house md",
    img: "src/photos/21house.jpg",
    desc: "the fire is to keep the child warm there no saftey hazards i swear",
    type: "cursed",
  },
  {
    name: "chase niche joke",
    img: "src/photos/22house.jpg",
    desc: "very very funny chase a real kneeslapper...",
    type: "character moment",
  },
  {
    name: "wilson sleeping",
    img: "src/photos/23house.jpg",
    desc: "yes wilson i honk mimimimi when i sleep",
    type: "reaction",
  },
  {
    name: "the ducklings",
    img: "src/photos/24house.jpg",
    desc: "hello chase and cameron and foreman!!",
    type: "character moment",
  },
];

function showmemes(filtertype) {
  container.innerHTML = "";
  memes.forEach((meme) => {
    if (filtertype === "all" || meme.type === filtertype) {
      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="display-card">
            <img class="display-img" src="${meme.img}" alt="${meme.name}">
            <h2 class="display-name">${meme.name}</h2>
            <h3 class="display-desc">${meme.desc}</h3>
            <button class="download" data-img="${meme.img}" data-name="${meme.name}">download</button>
          </div>
          `
      );
    }
  });
}

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("download")) {
    const url = e.target.dataset.img;
    const name = e.target.dataset.name;

    const filename = name.replace(/\s+/g, "_").toLowerCase() + ".png";

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }
});

showmemes("all");

document
  .querySelector(".filterbtn-all")
  .addEventListener("click", () => showmemes("all"));
document
  .querySelector(".filterbtn-silly")
  .addEventListener("click", () => showmemes("silly"));
document
  .querySelector(".filterbtn-cursed")
  .addEventListener("click", () => showmemes("cursed"));
document
  .querySelector(".filterbtn-reaction")
  .addEventListener("click", () => showmemes("reaction"));
document
  .querySelector(".filterbtn-ship")
  .addEventListener("click", () => showmemes("ship"));
document
  .querySelector(".filterbtn-cm")
  .addEventListener("click", () => showmemes("character moment"));

showmemes("all");

uploadmemebtn.addEventListener("click", () => {
  memeform.classList.add("show");
  container.style.display = "none";
});

memeform.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;
  const fileinput = document.querySelector("#img");
  const type = document.querySelector("#type").value;

  const file = fileinput.files[0];
  const imgurl = URL.createObjectURL(file);

  memes.push({
    name: title,
    img: imgurl,
    desc: desc,
    type: type,
  });

  memeform.classList.remove("show");
  container.style.display = "flex";
  showmemes("all");
  memeform.reset();
});

filterbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    memeform.classList.remove("show");
    container.style.display = "flex";

    const typeClass = btn.classList[1];

    switch (typeClass) {
      case "filterbtn-all":
        showmemes("all");
        break;
      case "filterbtn-cm":
        showmemes("character moment");
        break;
      case "filterbtn-silly":
        showmemes("silly");
        break;
      case "filterbtn-cursed":
        showmemes("cursed");
        break;
      case "filterbtn-reaction":
        showmemes("reaction");
        break;
      case "filterbtn-ship":
        showmemes("ship");
        break;
    }
  });
});

const modeswitch = document.querySelector("#modeswitch");

modeswitch.addEventListener("change", () => {
  document.body.classList.toggle("light", modeswitch.checked);
});
