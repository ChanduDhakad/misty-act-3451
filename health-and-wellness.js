// Create Obj Of Array For health category paragraph
//navbar append function
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















let health_category_para = [
    ["Health Conditions And Diseases"],
    ["Ayurveda "],
    ["Weight Gain"],
    ["Nutrition"],
    ["Healthy Food"],
    ["Diet Tips"],
    ["Yoga"],
    ["Weight Loss"],
    ["Home Remedies"],
    ["Ingredients"],
];


// health category paragraph And Creatwe a div append to health-category Id

let health_category = document.getElementById("health-category");
health_category_para.forEach(function (ele) {
    let div = document.createElement("div");
    let category = document.createElement("p");
    category.innerHTML = ele;

    div.append(category)
    health_category.append(div)
})


//  Create  a feture box which has display is flex

let feture_box = document.getElementById("feature-box-para")

// Create two div and append inside feture _ box
feture_boxfun();
function feture_boxfun() {

    let feture_box_title = document.createElement("h1");
    feture_box_title.innerHTML = "Swollen Uvula: Causes, Symptoms, & 8 Home Remedies To Manage";
    let feture_box_para = document.createElement("p");
    feture_box_para.innerHTML = "A constant feeling of having something stuck in your throat may not always indicate strep throat. It can be due to a swollen uvula. The uvula is the fleshy part that hangs down your throat and may sometimes become swollen […]";
    let feture_box_para1 = document.createElement("p");
    feture_box_para1.innerHTML = "MEDICALLY REVIEWED BY DR. ZEEL GANDHI, BAMS, BAMS"


    feture_box.append(feture_box_title, feture_box_para, feture_box_para1)

}

// In the middle section of health& willness page
//  Create three div 
// and append inside middle section

let middle_container = document.getElementById("middle-section")
// Create Object

let Middle_section_data = [
    {

        imgUrl: "https://cdn2.stylecraze.com/wp-content/uploads/2015/07/How-To-Get-Rid-Of-A-Hickey-9-Simple-Ways.jpg.webp",

        Title: "How To Get Rid Of A Hickey – 13 Simple And Effective Ways",
        Para: "MEDICALLY REVIEWED BY DR. HARI HARA SUDHAN, MD, MD",
    },

    {

        imgUrl: "https://cdn2.stylecraze.com/wp-content/uploads/2018/01/7-Day-2000-Calorie-Diet-To-Kick-start-Weight-Loss.jpg.webp",
        Title: "A 7-Day Healthy 2000-Calorie Diet Plan For Weight Loss",
        Para: "REVIEWED BY KRISTEN ARNOLD, MS, RDN, CSSD, RDN, CSSD "
    },
    {

        imgUrl: "https://cdn2.stylecraze.com/wp-content/uploads/2021/07/10-Potential-Benefits-Of-Pecans-For-Skin-Hair-And-Health.jpg.webp",
        Title: "10 Potential Benefits Of Pecans For Skin, Hair, And Health",
        Para: "MEDICALLY REVIEWED BY KELLY MULHALL, DIP NT, MBANT, MANP, MGNC , DIP NT, MBANT, MANP, MGNC"
    },
]

//Import append function from div.js file

import appendfun  from "./div.js";
// append data in middle section 

appendfun(Middle_section_data,middle_container);


//  Create  a Middle Section feture box which has display is flex

let feture_box2 = document.getElementById("feature-box2-para")

// Create two div and append inside feture _ box
feture_box2fun();
function feture_box2fun() {

    let feture_box2_title = document.createElement("h1");
    feture_box2_title.innerHTML = "7 Benefits of Maqui Berry, Nutrition, Recipes, And More";

    let feture_box2_para = document.createElement("p");
    feture_box2_para.innerHTML ="The nutrient-dense composition and antioxidants are responsible for the health benefits of maqui berries. These berries may help lower cholesterol and blood glucose levels and reduce inflammation. They also help one combat metabolic disorders like diabetes, obesity, and cardiovascular disorders. […]"
    let feture_box2_para1 = document.createElement("p");
    feture_box2_para1.innerHTML = "MEDICALLY REVIEWED BY GABRIELLE KANE, MS, RDN, CSP, LD , RDN, CSP, LD"


    feture_box2.append(feture_box2_title, feture_box2_para, feture_box2_para1)

}
// Using Imported appendfun and Created Six div In Button Section
// Created Object of array data for buttom section

let Buttom_section_data=[
    {
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2015/08/Adenomyosis-%E2%80%93-Symptoms-Causes-Treatment-And-Diet-Prevention-Tips.jpg.webp",
    Title:"10 Home Remedies To Heal Adenomyosis + Causes And Diet",
    Para:"BY SUCHARITA MISHRA",
},
{
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2015/04/2314_8-Surprising-White-Angelica-Oil-Benefits-That-You-Never-Knew-Existed-Until-Now_ss.jpg_1.jpg.webp",

    Title:"9 Amazing Benefits And Uses Of Angelica Root Essential Oil",
    Para:"9 Amazing Benefits And Uses Of Angelica Root Essential Oil",
},
{
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2015/03/Brown-Rice-Recipes-%E2%80%93-Healthy-Tasty.jpg.webp",  
    Title:"20 Healthy Brown Rice Recipes (With Cooking Tips)",
    Para:"REVIEWED BY MADHU SHARMA, RD, RD",
},
{
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2014/03/The-Soy-Story-How-Are-Soybeans-Beneficial-For-You-What-Is-Special-About-Them.jpg.webp",
    Title:"8 Benefits Of Soybeans, Nutrition Facts, And Side Effects",
    Para:"REVIEWED BY IONUT IGNAT, (RDN, PHD, MD), RDN ",
},
{
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2014/03/Benefits-And-Risks-Of-Senna.jpg.webp",
    Title:"Senna – Health Benefits, Side Effects, And Risks",
    Para:"MEDICALLY REVIEWED BY LUCAS AOUN, ND, ND  ",
},
{
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2014/01/12-Ways-To-Naturally-Gain-Weight-At-Home.jpg.webp",
    Title:"12 Ways To Naturally Gain Weight At Home",
    Para:"REVIEWED BY MERLIN ANNIE RAJ, REGISTERED DIETITIAN NUTRITIONIST, RD (REGISTERED DIETITIAN)",

}

]

let buttom_container=document.getElementById("buttom-section")

appendfun(Buttom_section_data,buttom_container);


//


document.getElementById("onclick-img").addEventListener("click",nextpage)
function nextpage(){
   window.location.href="health-and-wellness-Artical.html"
}