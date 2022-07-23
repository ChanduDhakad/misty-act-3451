let innernav = () => {
  return `
    <div class="container">
      <div id="toggle">
        <div id="hamburger"><i class="fa-solid fa-2x fa-bars"></i></div>
        <div id="img">
          <div id="logodiv">
            <a href="index.html"
              ><img
                id="logo"
                src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png"
                alt="logo"
            /></a>
          </div>
        </div>
        <div id="categories">
          <div class="child">
            <div id="cate1">MAKEUP</div>
            <div id="cate2">HAIR CARE</div>
            <div id="cate3">SKIN CARE</div>
            <div id="cate4">HAIRSTYLES</div>
            <div id="cate5">HEALTH & WELLNESS</div>
            <div id="cate6">NEWS</div>
            <div id="cate9">TOOLS</div>
            <div id="cate8">PRODUCTS</div>
            <div id="cate7">ABOUT US</div>
          </div>
        </div>
      </div>
    </div>
    `;
};

let funcDispBlock = () => {
  document.getElementById("categories").style.display = "flex";
  document.getElementById("img").style.display = "none";
};
let funcDispNone = () => {
  document.getElementById("categories").style.display = "none";
  document.getElementById("img").style.display = "block";
};

export { innernav, funcDispBlock, funcDispNone };
