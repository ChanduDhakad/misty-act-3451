

import foo from "./HeaderNFooter/HomepageNav/Components/footer.js";

document.getElementById("footer").innerHTML=foo();

document.getElementById("img1").addEventListener("click",handle);
function handle(){
    window.location.href="./facemakeup.html";
}
const arr = [
    {
        image : "https://cdn2.stylecraze.com/wp-content/uploads/2014/09/2073-Top-5-Naturals-Salon-Bridal-Makeup-Packages-is.jpg.webp",
        description  : "5 types of Bridal makeup Packages To Choose from ",
        name:"BY NISHA BHAGADIA",
    },
    {
        image : "https://cdn2.stylecraze.com/wp-content/uploads/2012/06/Great-Techniques-Of-Jolie%E2%80%99s-Makeup.jpg.webp",
        description  : "Angelina Julie Makeup tips & step-By-step tutorial",
        name:"BY NISHA BHAGADIA",
    },
    {
        image : " https://cdn2.stylecraze.com/wp-content/uploads/2015/08/Presenting-Kangana-Ranaut%E2%80%99s-Makeup-And-Beauty-Secrets.jpg.webp",
        description  : " Presenting Kangana Ranaut's Makeup and Body secrets",
        name:"BY NISHA BHAGADIA",
    },
    
];
 let append = ()=>{
    let cont = document.getElementById("ran");
    arr.forEach((ele)=>{
        let card = document.createElement("div");
        let name = document.createElement("h3")
        name.setAttribute("class","countribute");
        name.innerText=ele.name;
        let image  = document.createElement("img");
        image.setAttribute("class","bride");

        image.src=ele.image;

        let h3 = document.createElement("h3")
        h3.innerText=ele.description;

        card.append(image,h3,name)
        cont.append(card);

    })
 }

 append()


 const array = [
    {
        image : " https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Top-10-Most-Loved-Belly-Henna-Designs-You-Can-Try.jpg.webp",
        description  : " Top 10 Most Loved Belly Henna Designs you can try in 2022 ",
        name:"BY NISHA BHAGADIA",
    },
    {
        image : " https://cdn2.stylecraze.com/wp-content/uploads/2014/01/1648-Mehandi-Oil-%E2%80%93-What-Is-It-How-To-Use-And-What-Are-Its-Benefits-is.jpg",
        description  : "6 Best benefits of Mehindo Oil | What is it and How to use it",
        name:"BY NISHA BHAGADIA",
    },
    {
        image : " https://cdn2.stylecraze.com/wp-content/uploads/2013/10/3077-Nail-Art-Spas-In-Chennai-ss.jpg.webp",
        description  : "Top 10 Nail Art Spas in Chennai",
        name:"BY JYOTSANA RAO",
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/2993_Top-10-Nail-Art-Spas-In-Hyderabad_Ss.jpg.webp",
        description:"Top 10 Nail Art Spas in Hyderabad",
        name:"BY JYOTSANA RAO",
    },
    {
        image:" https://cdn2.stylecraze.com/wp-content/uploads/2013/07/2543-10-Pictures-of-Anushka-Sharma-Without-Makeup.jpg.webp",
        description: "10 Pictures of Anushka Sharma Without makeup",
        name:"BY NISHA BHAGADIA",
    },
    {
        image:" https://cdn2.stylecraze.com/wp-content/uploads/2013/06/2713-CAUGHT-Kareena-Kapoor-Without-Makeup.jpg.webp",
        description:"CAUGHT ! Kareena kapoor Without MakeUp",
        name:"BY NISHA BHAGADIA "
    }
];


let append2 = ()=>{
    let cont2 = document.getElementById("bottom_div")
    array.forEach((ele)=>{
        let card1 = document.createElement("div");
        let name = document.createElement("h3")
        name.setAttribute("class","countribute1");
        name.innerText=ele.name;
        let image  = document.createElement("img");
        image.setAttribute("class","bride1");

        image.src=ele.image;

        let h3 = document.createElement("h3")
        h3.innerText=ele.description;

        card1.append(image,h3,name)
        cont2.append(card1); 
    })
}
append2()

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