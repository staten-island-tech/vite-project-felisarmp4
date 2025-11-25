const container = document.querySelector("#meme-list");
const memes = [
  {
    name: "dr cuddy cat",
    img: "photos/1house.jpg",
    desc: "cuddy as a cat. isn't this the best cat to pet? (yes)",
    type: "silly",
  },
  {
    name: "dr. freak",
    img: "photos/2house.jpg",
    desc: "definetly pick up this call!",
    type: "cursed",
  },
  {
    name: "papa louie: house md edition",
    img: "photos/3house.jpg",
    desc: "i think this vexes me as well dr foreman",
    type: "character moment",
  },
  {
    name: "vicodin juggling",
    img: "photos/4house.jpg",
    desc: "hes locked n loaded when it comes to drug abuse",
    type: "silly",
  },
  {
    name: "chase and cat",
    img: "photos/5house.jpg",
    desc: "me too me too dr chase im shocked too",
    type: "reaction",
  },
  {
    name: "gay?",
    img: "photos/6house.jpg",
    desc: "so are you or not?",
    type: "character moment",
  },
  {
    name: "hilson brain connection",
    img: "photos/7house.jpg",
    desc: "youre gonna live with these doctors this is normal for dr house and dr wilson",
    type: "ship",
  },
  {
    name: "taub fairy",
    img: "photos/8house.jpg",
    desc: "hes so sweet and innocent i hope taub never bites the curb",
    type: "reaction",
  },
  {
    name: "hilson couple counseling",
    img: "photos/9house.jpg",
    desc: "cuddy does NOT wanna be with these two together",
    type: "ship",
  },
  {
    name: "dr wilson fish",
    img: "photos/25house.jpg",
    desc: "i too am a fish on this website",
    type: "silly",
  },
  {
    name: "wilson smile",
    img: "photos/10house.jpg",
    desc: "he's getting the facebook mom in. don't forget to smile!!",
    type: "reaction",
  },
  {
    name: "wilson malewife",
    img: "photos/11house.jpg",
    desc: "house and him are the og doomes yaoi",
    type: "ship",
  },
  {
    name: "foreman happy",
    img: "photos/12house.png",
    desc: "buddy nothing can make you THIS happy youre a doctor for gosh sake",
    type: "reaction",
  },
  {
    name: "foreman monday",
    img: "photos/13house.jpg",
    desc: "keep calm and shoplift on",
    type: "silly",
  },
  {
    name: "all rounder house",
    img: "photos/14house.jpg",
    desc: "at any given time he can be all of them",
    type: "character moment",
  },
  {
    name: "crazy rejection",
    img: "photos/15house.jpg",
    desc: "this is very fititng for the doomed yaoi they have",
    type: "ship",
  },
  {
    name: "flexible house",
    img: "photos/16house.jpg",
    desc: "the amount of vicodin he would have to take to do this...",
    type: "cursed",
  },
  {
    name: "medical malpractice",
    img: "photos/17house.jpg",
    desc: "the fact the doawk and house have the same name lwk wild",
    type: "character moment",
  },
  {
    name: "house crazy",
    img: "photos/18house.jpg",
    desc: "there no hiding it we all know youre crazy house",
    type: "character moment",
  },
  {
    name: "house kidnapping",
    img: "photos/19house.jpg",
    desc: "house kidnapping a girl idk there no way i can describe this",
    type: "cursed",
  },
  {
    name: "two sided house",
    img: "photos/20house.jpg",
    desc: "i think were all agressive and serve tea sometimes",
    type: "reaction",
  },
  {
    name: "mommy watching house md",
    img: "photos/21house.jpg",
    desc: "the fire is to keep the child warm there no saftey hazards i swear",
    type: "cursed",
  },
  {
    name: "chase niche joke",
    img: "photos/22house.jpg",
    desc: "very very funny chase a real kneeslapper...",
    type: "character moment",
  },
  {
    name: "wilson sleeping",
    img: "photos/23house.jpg",
    desc: "yes wilson i honk mimimimi when i sleep",
    type: "reaction",
  },
  {
    name: "the ducklings",
    img: "photos/24house.jpg",
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
          <button class="learnmore">learn more</button>
        </div>
        `
      );
    }
  });
}

showmemes("all");

document
  .querySelector(".filterbtn-all")
  .addEventListener("click", () => showmemes("all"));
document
  .querySelector(".filterbtn-charactermoment")
  .addEventListener("click", () => showmemes("character moment"));
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
