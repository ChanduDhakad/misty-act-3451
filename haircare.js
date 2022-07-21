const arr = [
    {
        image : "https://cdn2.stylecraze.com/wp-content/uploads/2014/09/Best-Hair-Colors-For-Blue-Eyed-Woman-1.jpg.webp",
        description  : " Best Hair Colours For Blue Eyed Woman ",
        name:"BY ARSHIYA SYEDA",
    },
    {
        image : "https://cdn2.stylecraze.com/wp-content/uploads/2020/10/6-Potential-Benefits-Of-Avocado-Oil-For-Hair-And-How-To-Use-It.jpg.webp",
        description  : " Avacado Oil For Hair : 6 Potential benefits and How to use it",
        name:"MEDICALLY REVIEWED BY DR.SHRUTHI CHAVAN MBBS",
    },
    {
        image : "https://cdn2.stylecraze.com/wp-content/uploads/2012/07/How-To-Care-For-Your-Hair-In-Monsoon.jpg",
        description  : "How to Care for Your hair in Monsoon",
        name:"BY JYOTSANARAO",}
    
];
 let append = ()=>{
    let cont = document.getElementById("ran_1");
    arr.forEach((ele)=>{
        let card = document.createElement("div");
        let name = document.createElement("h3")
        name.setAttribute("class","countribute_1");
        name.innerText=ele.name;
        let image  = document.createElement("img");
        image.setAttribute("class","hair_01");

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
        image : " https://cdn2.stylecraze.com/wp-content/uploads/2012/07/2126-7-Benefits-Of-Grapefruit-Essential-Oil-For-Hair-is.jpg.webp",
        description  : " 7 Benefits Of GrapeFruit Essential Oil FOr Hair",
        name:"BY JYOTSANARAO"
    },
    {
        image : " https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Winter-Wavy-and-Curly-Hair-Tips-1.jpg.webp",
        description  : " 7 Winter Wavy and Curly Hair Tips",
        name:"BY JYOTSANA RAO",
    },
    {
        image : "https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Pick-Hair-Colors-For-Pale-Skin-1.jpg.webp",
        description  : "How to Pick Hair Colours for Pale Skin",
        name:"BY ARSHIYA SYEDA",
    },
    {
        image:" https://cdn2.stylecraze.com/wp-content/uploads/2017/05/1617-30-Ash-Blonde-Hair-Color-Ideas-That-You%E2%80%99ll-Want-To-Try-Out-Right-Away-ss.jpg.webp",
        description:"30 Awesome Ash Blonde Hair Colour Idead for Women to Try",
        name:"BY ARSHIYA SYEDA",
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2016/06/How-To-Apply-Oil-On-Hair-A-Step-By-Step-Guide.jpg.webp",
        description: "How to Apply Oil on Hair? A step-By -Step Guide",
        name:"BY ARSHIYA SYEDA",
    },
    {
        image:" https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Vegetal-Hair-Dye-%E2%80%93-What-Is-It-And-Why-To-Use-It.jpg.webp",
        description:"Vegetal hair Dye. What is it ? and How to Use it?",
        name:"BY JYOTSANA RAO "
    }
];


let append2 = ()=>{
    let cont2 = document.getElementById("bottom_div_1")
    array.forEach((ele)=>{
        let card1 = document.createElement("div");
        let name = document.createElement("h3")
        name.setAttribute("class","countribute_2");
        name.innerText=ele.name;
        let image  = document.createElement("img");
        image.setAttribute("class","hair_02");

        image.src=ele.image;

        let h3 = document.createElement("h3")
        h3.innerText=ele.description;

        card1.append(image,h3,name)
        cont2.append(card1); 
    })
}
append2()