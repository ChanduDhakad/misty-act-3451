import header from "./header.js";
import foo from "./footer.js";
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = foo();

// DropDown function

let enterfun = (a, b) => {
  document.getElementById(a).addEventListener("mouseenter", function () {
    enter();
  });
  document.getElementById(b).addEventListener("mouseenter", function () {
    enter();
  });
  function enter() {
    document.getElementById(b).style.visibility = "visible";
    // document.getElementById(b).style.height = "300px";
  }
};

let exitfun = (x, y) => {
  document.getElementById(x).addEventListener("mouseleave", function () {
    exit();
  });
  document.getElementById(y).addEventListener("mouseleave", function () {
    exit();
  });
  function exit() {
    document.getElementById(y).style.visibility = "hidden";
  }
};

enterfun("cate1", "box1");
exitfun("cate1", "box1");
enterfun("cate2", "box2");
exitfun("cate2", "box2");
enterfun("cate3", "box3");
exitfun("cate3", "box3");
enterfun("cate4", "box4");
exitfun("cate4", "box4");
enterfun("cate5", "box5");
exitfun("cate5", "box5");
enterfun("cate6", "box6");
exitfun("cate6", "box6");
enterfun("cate7", "box7");
exitfun("cate7", "box7");

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
