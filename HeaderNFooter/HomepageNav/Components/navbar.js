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
redirectfun("cate3", "skinCare.html");
redirectfun("cate4", "https://www.stylecraze.com/articles/hairstyles/");
redirectfun("cate5", "health-and-wellness.html");
redirectfun("cate6", "Celebrity-news.html");
redirectfun("cate7", "aboutus.html");
redirectfun("cate8", "products.html");
redirectfun("cate9", "tools.html");


let getSearchData = (query) => {
    console.log(query);
      let  url=`./search.html?q=${query}`;
      console.log(url);
      window.location.href = url;
  };

  let search = (e) => {
    let query = document.querySelector("#search_inp").value;

    if (e.key === "Enter") {
        getSearchData(query);
    }
  };

  let input = document.querySelector("#search_inp");
  input.addEventListener("keydown", search);


  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("header").style.padding = "30px 10px";
    document.getElementById("logo").style.width = "80%";
    // document.getElementById("categories").style.marginLeft="70px";
    document.getElementById("logo").style.marginLeft="25px";
    document.getElementById("logo").style.marginTop="6px";
  } else {
    // document.getElementById("header").style.padding = "80px 10px";
    document.getElementById("logo").style.width = "auto";
    // document.getElementById("categories").style.marginLeft="75px";
    document.getElementById("logo").style.marginLeft="-20px";
    document.getElementById("logo").style.marginTop="5px";
  }
}