// Create Obj Of Array For News category paragraph
let new_category_para = [
    ["Brand News "],
    ["Inspiration "],
    ["Celebrity News"],
    ["Trends"],
    ["Rangoli"],
    ["Flowers"],
    ["Tattoos"],
    ["Top 10'S"],
    ["Fashion"],
   
];

let new_category = document.getElementById("new-category");

new_category_para.forEach(function (ele) {
    let div = document.createElement("div");
    let category = document.createElement("p");
    category.innerHTML = ele;

    div.append(category)
    new_category.append(div)
});


//  Create  a feture box which has display is flex

let feture_box = document.getElementById("feature-box-para")

// Create two div and append inside feture _ box
feture_boxfun();
function feture_boxfun() {

    let feture_box_title = document.createElement("h1");
    feture_box_title.innerHTML = "6 Brilliant DIY Ideas For Nail Polish Removers";
    let feture_box_para = document.createElement("p");
    feture_box_para.innerHTML = "DIY ideas for nail polish removers can save you on an unfortunate day! How? Imagine you are all set to go for a party, trying to find your shoes, when suddenly your eyes notice your fingernails with chipped nail polish! […]";
    let feture_box_para1 = document.createElement("p");
    feture_box_para1.innerHTML ="BY RAMYA KARAMSETTI";

    feture_box.append(feture_box_title, feture_box_para, feture_box_para1)

};

// In the middle section of Celebrity News page
//  Create three div 
// and append inside middle section

let middle_container = document.getElementById("middle-section")
// Create Object

let Middle_section_data = [
    {

        imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2020/02/40-Beautiful-Semicolon-Tattoo-Designs-And-Their-Meanings.jpg.webp",
        Title:"40 Beautiful Semicolon Tattoo Designs And Their Meanings", 
        Para:"BY NISHA BAGHADIA ",
    },
    {

        imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2017/12/How-To-Measure-Shoe-Size-%E2%80%93-A-Guide-With-Sizing-Chart.jpg",
        Title:"How To Measure Shoe Size – A Perfect Guide With Sizing Chart", 
        Para:"BY PRATIMA ATI ",
    },
    {

        imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2015/08/2922-6-Best-Vipassana-Centers-In-Hyderabad-ss.jpg.webp",
        Title:"6 Best Vipassana Centers In Hyderabad", 
        Para:"BY JYOTSANA RAO",
    },
    
]

//Import append function from div.js file

import appendfun  from "./div.js";
// append data in middle section 

appendfun(Middle_section_data,middle_container);


//  Create  a Middle Section feture box which has display is flex

let feture_box2 = document.getElementById("feature-box2-para")

// Create two div and append inside feture _ box in News Page
feture_box2fun();
function feture_box2fun() {

    let feture_box2_title = document.createElement("h1");
    feture_box2_title.innerHTML = "Acupressure Points On Ears: What Are They And Do They Work?";

    let feture_box2_para = document.createElement("p");
    feture_box2_para.innerHTML ="Our body is a temple. It is a mind-boggling entity capable of unbelievable things. For instance, a little knowledge about acupressure points and willpower can help you heal yourself. This article talks particularly about the pressure points on the ears […]";

    let feture_box2_para1 = document.createElement("p");
    feture_box2_para1.innerHTML = "BY JYOTSANA RAO ";
    feture_box2.append(feture_box2_title, feture_box2_para, feture_box2_para1)

}

// Using Imported appendfun and Created Six div In Button Section
// Created Object of array data for buttom section


let Buttom_section_data=[
    {
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/815_8-Best-Ways-To-Increase-Oxygen-Level-In-Blood_shutterstock_133834292.jpg",
    Title:"8 Best Ways To Increase Oxygen Levels In Blood",
    Para:"BY JYOTSANA RAO",
},
{
    imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2014/12/857_20-Most-Beautiful-Flowers-That-Are-Commonly-Available-In-India_155732036.jpg.webp",
    Title:"20 Most Beautiful Flowers That Are Commonly Available In India",
    Para:"BY RAMYA KARAMSETTI ",
},

    {
        imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2017/12/20-Best-Ways-To-Wear-Joggers.jpg.webp",
        Title:"20 Best Ways To Wear Joggers To Look Stylish",
        Para:"BY PRATIMA ATI",
    },
    
    {
        imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2018/04/Best-Places-To-Donate-Clothes.jpg.webp",
        Title:"9 Best Places To Donate Clothes And Do A Good Deed",
        Para:"BY PRATIMA ATI ",
    },
    {
        imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2014/02/16-Best-Pongal-Kolam-Designs-That-You-Should-Try.jpg.webp",
        Title:"16 Best Pongal Kolam Designs That You Should Try In 2022",
        Para:"BY JYOTSANA RAO",
    },
    
        {
            imgUrl:"https://cdn2.stylecraze.com/wp-content/uploads/2013/09/2910-Best-Sanskar-Bharti-Rangoli-Designs-Our-Top-10-ss.jpg.webp",
            Title:"10 Best Sanskar Bharti Rangoli Designs To Try In 2022",
            Para:"BY JYOTSANA RAO",
        },

]
let buttom_container=document.getElementById("buttom-section")

appendfun(Buttom_section_data,buttom_container);


//Import footer function from footer.js file

// import footer from "../Footer/footer.js";
// Footer section append in footer part

// document.getElementById("footer-Section").innerHTML=footer()
