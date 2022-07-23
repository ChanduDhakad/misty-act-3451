import {
  innernav,
  funcDispBlock,
  funcDispNone,
} from "./HeaderNFooter/InnersiteNav/components/navbarComp.js";
import foo from "./HeaderNFooter/HomepageNav/Components/footer.js";

let nav = document.getElementById("header");
nav.innerHTML = innernav();
let footer = document.getElementById("footer");
footer.innerHTML = foo();

let hamburger = document.getElementById("hamburger");
let timesClicked = 0;

hamburger.addEventListener("click", function () {
  timesClicked++;
  if (timesClicked % 2 == 0) {
    funcDispBlock();
  } else {
    funcDispNone();
  }
});

// local Database
const category = [
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/09/Best-Nail-Polish-Colors-For-Olive-Tan-Light-Medium-Skins.jpg.webp",
    category: "Nail Art",
    title: "Best Nail Polish Colors That Look Great On All Skin...",
    detail:
      "A well-done coat of nail polish can make your hands look appealing. And there are some nail colors that look best on medium skin, some on olive skin, and",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/15-Best-Hairstyling-Products-For-All-Hair-Types-banner.jpg.webp",
    category: "Hair Styles",
    title: "17 Best Hairstyling Products As Per Women Hair Stylists",
    detail:
      "Using the best hair styling products can give the edge to the hairstyle you have always wanted to flaunt. Be it a hair cream, hair spray, foam, or mousse, using the",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/04/1274-10-Best-Foundations-For-Asian-Skin-Tone-ss.jpg.webp",
    category: "Face Makeup",
    title: "10 Best Foundations For Asian Skin Tone",
    detail:
      "A foundation helps cover all imperfections, blemishes, and dark spots on your skin. However, finding the best foundation for Asain skin tones is a real task. Asian",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/08/How-To-Get-Dewy-Skin-%E2%80%93-Easy-Tips.jpg.webp",
    category: "Beauty Secrets",
    title: "How To Get Dewy Skin: Best Products To Achieve A",
    detail:
      "Constantly wondering how to get dewy skin? Well, the answer resides right in the post! These days dewy skin is the most significant beauty trend. From runways",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/11-Best-Neutrogena-Products-For-Removing-Acne.jpg",
    category: "Skin",
    title: "Best Neutrogena Products For Acne That Actually Works – 2022",
    detail:
      "Acne is a common skin concern for many.  Acne-prone skin needs the correct products to prevent breakouts and scars.",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/03/3450-Awesome-Must-Have-Makeup-Items-For-Beginners-ss.jpg.webp",
    category: "Makeup",
    title: "The 11 Best Makeup Products For Beginners,",
    detail:
      "If you are a novice in the makeup world, you might have tons of questions in your mind regarding makeup, makeup kits, brushes. However,",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/10/21-Best-Anti-Aging-Eye-Creams-Of-2020-That-Work-Wonders-Banner-SC.jpg.webp",
    category: "Articles",
    title: "21 Best Anti-Aging Eye Creams You Must Try In",
    detail:
      "The skin around our eyes is very sensitive and delicate. Just moisturizing is not enough for this area. The best anti-aging eye creams provide overall nourishment",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/09/How-To-Apply-Makeup-For-Teens.jpg.webp",
    category: "Face Makeup",
    title: "The 7 Best Makeup Products For Teens That",
    detail:
      "As a teenager, you are most probably enthusiastic to try out lip liner, eye shadow, lip gloss, lipstick, mascara, and other makeup products. But do teenagers apply makeup",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/8-Best-Anti-Aging-Vegan-Night-Creams-That-Are-Absolutely-Worth-Trying.jpg",
    category: "Skin",
    title:
      "8 Best Anti-Aging Vegan Night Creams That Are Absolutely Worth Trying",
    detail:
      "You deserve only the best when it comes to skincare products. Especially for your",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/9-Best-Night-Creams-For-Acne-Scars-Recommended-By-Dermatologists.jpg",
    category: "Skin",
    title: "9 Best Night Creams For Acne Scars Recommended By Dermatologists",
    detail:
      "This might come as a shock but dermatologists do suggest the best night ",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/12-Best-Luxury-Hand-Soaps-To-Make-Your-Hands-Feel-Silky-Soft.jpg",
    category: "Skin",
    title:
      "12 Best Luxury Hand Soaps In 2022 To Make Your Hands Feel Silky Soft",
    detail:
      "necessary to keep ourselves safe and healthy from quickly spreading viruses",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/11-Best-Body-Oils-With-Anti-Aging-Benefits-For-Women.jpg",
    category: "Skin",
    title: "11 Best Body Oils With Anti-Aging Benefits For Women",
    detail:
      "Age brings wisdom and maturity, but it also makes your skin vulnerable to fine lines",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/10/15-Best-Foundations-For-Sensitive-Skin.jpg.webp",
    category: "Face Makeup",
    title: "The 15 Best Foundations For Sensitive Skin You Can Try",
    detail:
      "If you have sensitive skin, finding the right foundation might be challenging and troubling",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/12/150-shutterstock_234270049.jpg.webp",
    category: "Make up",
    title: "18 Best Makeup Brushes To Add To Your Beauty Kit +",
    detail:
      "Makeup brushes are essential tools that help you apply makeup smoothly and get an even",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2012/12/10-Of-The-Best-Cream-Foundations-Out-There.jpg.webp",
    category: "Face Makeup",
    title: "10 Best Cream Foundations In The Market",
    detail:
      "A cream foundation is a thick creamy makeup base that offers a great finish and even coverage",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/20-Must-Have-Products-For-Wavy-Hair-Banner-SC.jpg.webp",
    category: "Articles",
    title: "18 Best Products For Wavy Hair (2022) – Tips & Buying",
    detail:
      "Wavy hair needs a lot of moisturizing to keep it balanced and conditioned. The best products",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2013/02/Best-Cleansers-For-Oily-Skin-Our-Top-15-Picks-For-2019.jpg.webp",
    category: "Articles",
    title: "Best Cleansers For Oily Skin - Our Top 15 Picks For 2022",
    detail:
      "Too much of anything is bad. This is especially true when it comes to oily skin and",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/9-Bestselling-Drugstore-Body-Butters-Of-2022.jpg",
    category: "Skin",
    title: "9 Best Drugstore Body Butters For Deep Moisturizer",
    detail:
      "Winters are dry, and they even make your skin dry and dull-looking. Keeping your",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/9-Best-Products-To-Get-Rid-Of-Back-Acne.jpg",
    category: "Skin",
    title: "Best Products For Back Acne To Get Rid Of Bacne Quickly",
    detail:
      "Acne is an inevitable struggle, and it can pop up anywhere, be it your face, scalp, or back.",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/13-Best-BB-Creams-With-SPF-For-Flawless-Skin--Our-Top-Picks.jpg",
    category: "Skin",
    title: "13 Best BB Creams With SPF For Flawless Skin – Our Top",
    detail:
      "Makeup lovers around the world are going for simpler skincare routines. This is where the best",
  },

  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/02/Best-Smelling-Self-Tanners-For-A-Delicious-Bronzy-Glow.jpg",
    category: "Skin",
    title: "10 Best-Smelling Self Tanners For A Delicious",
    detail:
      "One of the most exciting things we do to welcome summer is get our tans on. Whether",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/02/11-Best-Peptide-Eye-Creams-To-Get-Rid-Of-Puffy-Eyes.jpg",
    category: "Skin",
    title: "11 Best Peptide Eye Creams To Get Rid Of Puffy Eyes",
    detail:
      "Eyes are like the windows of the human body to the outside world. Ergo, it is of utmost",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/01/13-Best-Shine-Free-Foundations-For-Oily-Skin-That-Is-Healthy-And-Glowing.jpg",
    category: "Skin",
    title: "13 Best Foundations For Oily Skin That Keep You Shine-Free All Day",
    detail:
      "While oily skin comes with its own set of woes, there’s no reason you shouldn’t",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/01/11-Best-Chemical-Peels-For-Wrinkles-To-Give-You-That-Youthful-Skin-Back.jpg",
    category: "Skin",
    title: "11 Best Chemical Peels For Wrinkles You Can Use At Home",
    detail:
      "Wrinkles are no longer a skin woe that only the elderlies must worry about. ",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/7-Best-Eyebrow-Pencils-For-Women-Over-60.png",
    category: "Make up",
    title: "The 7 Best Eyebrow Pencils For Women Over 60 In 2022",
    detail:
      "With advancing age, the eyebrows filtercat color and get thinner and droopy. Using the best",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/12-Best-Eyelash-Extension-Cleansers.jpg",
    category: "Make up",
    title: "12 Best Eyelash Extension Cleansers - 2022 Update",
    detail:
      "Eyelash extensions make your lashes look gorgeous, voluminous, and lengthy. And",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/Top-8-Mascaras-For-Eyelash-Extensions.jpg",
    category: "Make up",
    title: "Top 8 Mascaras For Eyelash Extensions In 2022",
    detail:
      "If you invest in eyelash extensions, you'd want them to look perfect. That is why you",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/9-Best-Shimmer-Bronzers-For-A-Sun-Kissed-Glow.jpg",
    category: "Make up",
    title: "9 Best Shimmer Bronzers For A Sun-Kissed Glow",
    detail:
      "Perfect skin or not, we all want the sun-kissed glow. But visiting the beach every week",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/7-Best-Mascaras-For-Green-Eyes.png",
    category: "Make up",
    title:
      "Best Mascaras For Green Eyes That Enhance Your Looks - Top Pics 2022",
    detail:
      "The appeal of gorgeous green eyes is immense! They stand alone quite",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/7-Best-Sweat-Proof-Makeup-Primers-To-Buy-In-2022.png",
    category: "Make up",
    title: "7 Best Sweat-Proof Makeup Primers To Buy In 2022",
    detail:
      "While you can control your makeup looks, you absolutely cannot control the weather!",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/01/10-Best-Stick-Concealers-Of-2021-For-A-Flawless-Skin-Tone.jpg",
    category: "Face Makeup",
    title: "10 Best Stick Concealers To Hide Uneven Skin Tone In",
    detail:
      "A concealer is one of the most essential parts of makeup that covers all traces of a ",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/01/10-Best-Liquid-Eyeliners-For-Beginners-To-Glam-Up-Your-Eye-Game.jpg",
    category: "Make up",
    title: "10 Best Liquid Eyeliners For Beginners For Makeup - 2021",
    detail:
      "In a world that's been masked up for the better part of 2 years, the eyes have taken",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/01/6-Best-Eye-Makeup-Removers-For-Dry-Eyes-That-Do-Not-Sting-.jpg",
    category: "Face Makeup",
    title: "6 Best Eye Makeup Removers For Dry Eyes That Do Not Sting",
    detail:
      "Smokey, kohl-rimmed eyes look effortless, glamorous, and fit all occasions. But taking",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2021/12/17-Best-Drugstore-Press-On-Nails-Under-10-That-Actually-Last.jpg",
    category: "Nail Art",
    title: "17 Best Drugstore Press-On Nails Under $10 That Actually Last",
    detail:
      "Trends keep evolving and renewing from year to year, and that's how we have again stumbled",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2022/01/The-10-Best-Tinted-Primers-Every-Makeup-Lover-Needs-To-Try.jpg",
    category: "Make up",
    title: "The 10 Best Tinted Primers Every Makeup Lover Needs To Try",
    detail:
      "When it comes to keeping your foundation in place, face primers are a no-brainer. After all,",
  },
  {
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2021/12/11-Best-Drugstore-Colored-Eyeliners-According-To-Reviews.png",
    category: "Make up",
    title: "11 Best Drugstore Colored Eyeliners According To Reviews",
    detail:
      "Eyeliners can define your eyes and draw attention to them. Naturally, you need some of ",
  },
];

// display function

let main = document.querySelector(".cont");
let dispData = (data) => {
  main.innerText = "";
  if (data != "") {
    data.forEach((ele) => {
      let div = document.createElement("div");
      div.className = "card";

      let img = document.createElement("img");
      img.src = ele.img;

      let cate = document.createElement("p");
      cate.innerText = ele.category;
      cate.className = "cate";

      let title = document.createElement("p");
      title.innerText = ele.title;
      title.className = "title";

      let desc = document.createElement("p");
      desc.innerText = ele.detail;
      desc.className = "desc";

      let read = document.createElement("a");
      read.innerText = "Read more...";
      read.className = "read";

      div.append(img, cate, title, desc, read);
      main.append(div);
    });
  } else {
    let div = document.createElement("div");
    div.className = "card";
    let img = document.createElement("img");
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GQU3QqYQOp7WHyS1RfgJJxp8USkvmBnmBA&usqp=CAU";
    div.append(img);
    main.append(div);
  }
};
dispData(category);

// filter function

let filtercat = () => {
  let filtervalue = document.querySelector("#cat_sort").value;
  if (filtervalue == "Category") {
    dispData(category);
  } else if (filtervalue == "Face Make Up") {
    let data = category.filter((ele) => {
      return ele.category == "Face Makeup";
    });
    dispData(data);
  } else if (filtervalue == "Beauty Secrets") {
    let data = category.filter((ele) => {
      return ele.category == "Beauty Secrets";
    });
    dispData(data);
  } else if (filtervalue == "Makeup") {
    let data = category.filter((ele) => {
      return ele.category == "Make up";
    });
    dispData(data);
  } else if (filtervalue == "Skin") {
    let data = category.filter((ele) => {
      return ele.category == "Skin";
    });
    dispData(data);
  } else if (filtervalue == "Articles") {
    let data = category.filter((ele) => {
      return ele.category == "Articles";
    });
    dispData(data);
  } else if (filtervalue == "Hairstyles") {
    let data = category.filter((ele) => {
      return ele.category == "Hairstyles";
    });
    dispData(data);
  } else if (filtervalue == "Nail art") {
    let data = category.filter((ele) => {
      return ele.category == "Nail Art";
    });
    dispData(data);
  }
  document.querySelector("#cat_sort").value = "";
};

let select = document.querySelector("#cat_sort");
select.addEventListener("click", filtercat);

// redirect function

let loc = document.querySelectorAll(".card");
loc.forEach((ele) => {
  ele.addEventListener("click", redire);
});

function redire(ele) {
  let parent = ele.target.parentElement;
  let child = parent.children[1].innerText;
  console.log(child);
  if (child == "Skin") {
    window.location.href = "skin.html";
  } else if (child == "Hair Styles") {
    window.location.href = "hairStyle.html";
  } else if (child == "Face Makeup") {
    window.location.href = "faceMakeup.html";
  }
}

//redirect function

let redirectfun = (c, loc) => {
  document.getElementById(c).addEventListener("click", function () {
    showMakeup();
  });
  function showMakeup() {
    window.location.href = loc;
  }
};
redirectfun("cate1", "makeup.html");
redirectfun("cate2", "haircare.html");
redirectfun("cate3", "skincare.html");
redirectfun("cate4", "hairstyles.html");
redirectfun("cate5", "health.html");
redirectfun("cate6", "news.html");
redirectfun("cate7", "aboutus.html");
redirectfun("cate8", "products.html");
redirectfun("cate9", "tools.html");