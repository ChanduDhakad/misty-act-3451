
// console.log("dsddtr")

//apend Data in heading section
let heading_data=document.getElementById("heading-section");


let heading_data_append=()=>{
    let div = document.createElement("div");
    let heading= document.createElement("h1");
    heading.innerHTML ="Swollen Uvula: Causes, Symptoms, & 8 Home Remedies To Manage";

    let author= document.createElement("h3");
    // author.setAttribute("class","onhover")
    author.innerHTML = `"Medically Reviewed by <a id="onhover1" href="https://www.stylecraze.com/dc/dr-zeel-gandhi-ayurvedic-doctor/">Dr. Zeel Gandhi</a> ,BAMS "`
    let date= document.createElement("h4");

    // author.setAttribute("class","onhover")
    date.innerHTML =`July 19, 2022 By   <a id="onhover2" href="https://www.stylecraze.com/author/shahen/">Shaheen Naser</a>`
    div.append()
    heading_data.append(heading,author,date)
}
heading_data_append();


//Add ON Hover envent in Heading Section

document.getElementById("onhover1").addEventListener("mouseover",fun1)
document.getElementById("onhover2").addEventListener("mouseover",fun2)

document.getElementById("onhover1").addEventListener("mouseout",function(){
document.querySelector("#hover-div").setAttribute("id","invisible")
document.querySelector("#hover-div").setAttribute("id","invisible")
   
})
document.getElementById("onhover2").addEventListener("mouseout",function(){
    document.querySelector("#hover-div").setAttribute("id","invisible")
    document.querySelector("#hover-div").setAttribute("id","invisible")
       
    })





function fun1(){


    let div=document.createElement("div");
div.setAttribute("id","hover-div");
let div1=document.createElement("div")

let img =document.createElement("img")
img.setAttribute("src","https://cdn2.stylecraze.com/wp-content/uploads/2020/07/zeelgandhi.jpg")
div1.append(img)


let div2=document.createElement("div")
let heading1=document.createElement("h3")
heading1.innerHTML=`<a style="color: #f35b74 href="https://www.stylecraze.com/dc/dr-zeel-gandhi-ayurvedic-doctor/">Dr. Zeel Gandhi</a>`

let heading2=document.createElement("h4")
heading2.innerHTML=`<span style="color: #f35b74;">Specialty:</span> Panchkarma therapies`

div2.append(heading1,heading2)
let div3=document.createElement("div");

div3.append(div1,div2);
let para=document.createElement("p")
para.innerHTML=`<p>Dr. Zeel Gandhi is an Ayurvedic doctor and an expert at providing holistic solutions for health problems encompassing Internal medicine, Panchakarma, Yoga, Ayurvedic Nutrition, and formulations. She graduated as a top ranker from Dr. D.Y.Pa...<a href="https://www.stylecraze.com/dc/dr-zeel-gandhi-ayurvedic-doctor/"> more</a></p>`,
div.append(div3,para)
// div.append(div1,para)


heading_data.append(div)
  
}


// Create a fuction for secound hover div?



function fun2(){
  

    let div=document.createElement("div");
div.setAttribute("id","hover-div");
let div1=document.createElement("div")

let img =document.createElement("img")
img.setAttribute("src","https://cdn2.stylecraze.com/static-content/author/shaheen.jpg")
div1.append(img)


let div2=document.createElement("div")
let heading1=document.createElement("h3")
heading1.innerHTML=`<a style="color: #f35b74 href="https://www.stylecraze.com/author/shahen/">Shaheen Naser</a>`

let heading2=document.createElement("h4")
heading2.innerHTML=`<span style="color: #f35b74;">in</span>`
heading2.setAttribute("src","https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/svg-image/linkedin-in-r.svg")

div2.append(heading1,heading2)
let div3=document.createElement("div");

div3.append(div1,div2);
let para=document.createElement("p")
para.innerHTML=`<p>Shaheen holds a postgraduate degree in Human Genetics and Molecular Biology. She is a Geneticist with proficiency in Biotechnology, Immunology, Medical Genetics, Biochemistry, Microbiology, and Geneti...<a href="https://www.stylecraze.com/author/shahen/"> more</a></p>`,

div.append(div3,para)
// div.append(div1,para)


heading_data.append(div)
  
}

// After  heading div Create a div and append a img and paragraph


let below_heading=document.getElementById("below-heading")

let after_heading=()=>{


    let div=document.createElement("div");



let img =document.createElement("img")
img.setAttribute("src","https://cdn2.stylecraze.com/wp-content/uploads/2019/04/Uvula-Swollen-And-Red.jpg.webp")

let para=document.createElement("p")
para.innerHTML="A constant feeling of having something stuck in your throat may not always indicate strep throat. It can be due to a swollen uvula. The uvula is the fleshy part that hangs down your throat and may sometimes become swollen or inflamed. This may cause continuous discomfort and, at times, may result in a cough. You can check this out in a mirror. Multiple factors may lead to a swollen uvula. Keep reading to know more about this condition, natural remedies, and how they may work to provide relief. Scroll down."


div.append(img,para);
below_heading.append(div)

}
after_heading()




//Eight li element add it work on onclick redirect
//  to related in currenrtpage section

let li_obj=[

    {name:"What Is Uvula"},
    {name:"Why Is My Uvula Swollen And Red? What Causes It?"},
    {name:"Risk Factors"},
    {name:"Signs And Symptoms"},

    {name:"How To Diagnose The Cause Of Uvulitis"},
    {name:"8 Natural Remedies To Manage Uvulitis"},
    {name:"How To Prevent A Swollen Uvula"},
    {name:"References"},
]

// create a function add with a element

let Artical_ans1=document.getElementById("li-links");

let Artical_ans=(li_obj)=>{

li_obj.forEach(function(ele){

let li=document.createElement("li")
// let a=document.createElement("div")
// a.setAttribute("")
li.innerHTML=` <a href="">${ele.name}</a>`
Artical_ans1.append(li)


})
}

Artical_ans(li_obj);
//Answer the artical 

let Uvula_obj={

    head:"What Is Uvula?",
    para1:"The roof of the mouth is divided into two parts: (i) the hard palate, which can be felt right above your tongue, and (ii) the soft palate, which is located behind the hard palate, forming the beginning of your throat. The fleshy part that hangs down the soft palate is the uvula.",
   para2:"While the soft palate helps to close your nasal passages as you swallow your food, the uvula helps to push food down your throat. The uvula is made of connective and muscle tissues along with mucous membranes that make it very flexible.",
   para3:"Although rare, in some cases, your uvula, as well as its surrounding areas, may become swollen and inflamed. This condition is referred to as uvulitis.",
   para4:"Inflammatory reactions within the body are often the major cause of a swollen uvula. Let us look at what causes reactions that can trigger uvulitis.",


}




let container_ans=document.getElementById("ans-of-links")

let Uvula=(ans)=>{

let div1=document.createElement("div")

let headline=document.createElement("h1")
headline.innerText=ans.head;
let iframe=document.createElement("iframe");
iframe.setAttribute("src","https://www.youtube.com/");



let p1=document.createElement("p")
p1.innerHTML=ans.para1
let p2=document.createElement("p")
p2.innerHTML=ans.para2
let p3=document.createElement("p")
p3.innerHTML=ans.para3
let p4=document.createElement("p")
p4.innerHTML=ans.para4

div1.append(headline,p1,iframe,p2,p3,p4)
container_ans.append(div1)
}


Uvula(Uvula_obj)


// Why Is My Uvula Swollen And Red? What Causes It?
// Append it

let obj_why_Uvula={
headline:"Why Is My Uvula Swollen And Red? What Causes It?",

para1:"Microbial infections, such as respiratory tract infections, strep throat, or mononucleosis can cause uvulitis, thereby causing your uvula to become red and swollen.",

para2:"It is very easy for those with a common cold to develop a swollen uvula as well. This is because those with blocked nasal passages often tend to breathe through their mouth, thereby increasing the chances of an inflamed uvula.Other possible triggers of an inflamed and swollen uvula are:",


para3:"Genetics – Congenital disorders like a cleft lip or palate can cause uvula to become enlarged, off place, or even missing in some cases.",
para4:"Allergic reactions – Some allergies can cause fluid to build up in the throat or mouth. This may result in swelling of the uvula. Such reactions can be triggered by certain foods or even an insect bite.",
para5:"Dry mouth",
para6:"Acid reflux",
para7:"Certain factors may also put an individual at a higher risk of developing a swollen uvula.",

}


// append why  My Uvula Swollen And Red? What Causes It? and Display it




let container1_ans=document.getElementById("ans1-of-links")

let why_Uvula=(ans)=>{

let div1=document.createElement("div")

let headline=document.createElement("h1")
headline.innerText=ans.headline;




let p1=document.createElement("p")
p1.innerHTML=ans.para1
let iframe1=document.createElement("iframe");
iframe1.style.backgroundClip
iframe1.setAttribute("src","https://www.youtube.com/");
// iframe1.setAttribute("")



let p2=document.createElement("p")
p2.innerHTML=ans.para2

let iframe2=document.createElement("iframe");
let url2="https://www.youtube.com/embed/PVrMzekLivQ"
iframe2.innerHTML=`<iframe width="560" height="315" src=${url2}

 frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

div1.append(headline,p1,iframe1,p2)
container1_ans.append(div1)
}


why_Uvula(obj_why_Uvula)

let li_item=document.getElementById("li-item")

let li=(ans,container1_ans)=>{
    let div1=document.createElement("div")
let p3=document.createElement("li")
p3.innerHTML=ans.para3
let l1=document.createElement("li")
l1.innerHTML=ans.para4
let l2=document.createElement("li")
l2.innerHTML=ans.para5
let l3=document.createElement("li")
l3.innerHTML=ans.para6

let p7=document.createElement("p")
p7.innerHTML=ans.para7;
div1.append(p3,l1,l2,l3,p7)
container1_ans.append(div1)

}

li(obj_why_Uvula,li_item)
//append adverstise on right side of artical page





//Advertise Img addrss obj

let obj_ads_img=[
    {
        url:"https://s.yimg.com/ch/75dbc68c-4bac-460e-810c-fc8b9e2358e8.png",
    },
    {
        url:"https://tpc.googlesyndication.com/daca_images/simgad/5395925217805690823",
    },


{
    url:"https://www.googleadservices.com/pagead/aclk?sa=L&ai=CMwUdNefaYrecOo6O9QPe17HoAY6I-a9rhK3y3JcQ6crk-5QwEAEguoTAM2Dl8ueD1A6gAefL3LEByAEG4AIAqAMByAMKqgTBAk_QkOCiTMkEjRvojGzLnpsbrigW2gFxjNMFqPUAL5ukQmYza-FDImdQb-RvnxeH6eNh_vqoWX5sMQmDwKsP12LZ-Kvm8fdK6jKgHCX5KaquYunzpw5bxKzXwlm1o07T2W_oCrwC3mkCnnto-kZyKNndKG2NiemazsWceQ5YmMZhR5wUKNL4sXKVDRzCIpNG05NMoHsPh0m5eu2wREpAleXbKbPDstz0ED7CAPo9z-QEKi_afZmHHvDxSUNB-046tN6gFIDogpaxcGkjES0g79HZPFSecBqGtU-T6YA7izEgvzak62t3UromkiJ66tdQiCdxmbIWsFPzIiO7UR_-ZPfAicNy9gKBPwmWuNYnfxgewbS7YgcEp6yEZ1cftKfMPW9fsxSeBSYZyi60XWyJt_0EpPhCJompWZYyrT0Od7Zm_8AEubzklI8E4AQBkAYBoAYugAeBtKPOAogHAZAHAqgHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB9-fsQLYBwHSCBIIABACGA0yAQA6B5_AgICAgATyCBthZHgtc3Vic3luLTc1MDUzOTAyNzI3MDg3NTexCWkKEgZGAarMgAoDigqUAmh0dHBzOi8vY2xpY2tzZXJ2ZS5kYXJ0c2VhcmNoLm5ldC9saW5rL2NsaWNrPyZkc19hX2NpZD03MDE3MzYxODMmZHNfYV9jYWlkPTE3NzI1ODYxMTU0JmRzX2FfYWdpZD0xNDE1MDkwNzQ0ODkmZHNfYV9maWlkPSZkc19hX2xpZD1hdWQtMTY1NDg5NTc0ODQ1NyZkc19hX2V4dGlkPSYmZHNfZV9hZGlkPTYwOTk1MDU1MzMyOCZkc19lX21hdGNodHlwZT1jb250ZW50JmRzX2VfZGV2aWNlPWMmZHNfZV9uZXR3b3JrPWQmJmRzX3VybF92PTImZHNfZGVzdF91cmw9e3VuZXNjYXBlZGxwdXJsfZgLAcgLAeALAbgMAbgTnSfYEwqIFALQFQH4FgGAFwE&ae=1&num=1&cid=CAMSeQClSFh3uaQBTFRGmX41Fl-yoqWsuekBgonv-r_7SGoC3hHgOKVdhV8GHRINWi-stzuYFmGj9ysGAOerqO_wf4T3OusJspg7_clW_UBA6bePwrL5MoxupWce0Mu4fGnk2aolZVCUihqL8Jo8zWB_YLiTnBIDIxD1N20&sig=AOD64_2NDt1ev_rMf2cJSOl28sNmbKO1Iw&client=ca-pub-8933329999391104&nb=7&adurl=https://playacademy.exceedlms.com/student/path/337023%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DIndiaSafetySection%26utm_content%3Dfeaturedcourse%26gclsrc%3Daw.ds%26gclid%3DCj0KCQjwlemWBhDUARIsAFp1rLVFKy69R7sxHaxCF9qEi3QTMm1FQ6TQVReGF1p3ZFhlwVfZIMMmd3MaAusCEALw_wcB",

},
{
    url:"https://s0.2mdn.net/simgad/13416799110265242383",
},
{
    url:"https://tpc.googlesyndication.com/simgad/4145000121580609200?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlr2WtfijIZNgjxCqjHTHSQmdTjQA"

},
{
    url:"https://tpc.googlesyndication.com/simgad/4145000121580609200?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlr2WtfijIZNgjxCqjHTHSQmdTjQA",
},

]





let ad1_container=document.getElementById("ads1");


let i=0;
let SlideAds=(container,obj)=>{
 
// clearTimeout(function)

setInterval(function(){
    container.innerHTML=""
    let url=obj[i].url
    let img=document.createElement("img")
    let p=document.createElement("p")
    p.innerHTML="Advertisement";

    img.setAttribute("src",url)
    container.append(p,img)
i++
if(i==obj.length){
    i=0
}
console.log("i ",i)

},4000)

}
SlideAds(ad1_container,obj_ads_img)

let apppend_img1=setTimeout(function(){

    function ads_img(container,url){

        let img=document.createElement("img")
        img.setAttribute("src",url)
        container.append(img)
    }

},4000)




// Right SIde Catergory

let popur_cat_obj=[
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2020/03/Coronavirus-Disease-COVID-19-Symptoms-Prevention-And-Treatment-340x255.jpg",
para:"Coronavirus Disease: Symptoms, Prevention, And ...",
url:"https://www.stylecraze.com/articles/coronavirus-infection-symptoms-causes-precautions/",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2020/03/Debunking-Myths-About-Coronavirus-340x255.jpg",
para:"Debunking Coronavirus Myths – Facts To Se...",
url:"https://www.stylecraze.com/articles/debunking-coronavirus-myths/",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Deal-With-Paranoid-Personality-Disorder-340x255.jpg.webp",
para:"Paranoid Personality Disorder: Causes, Symptoms...",
url:"https://www.stylecraze.com/articles/how-to-deal-with-paranoid-personality-disorder/",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Natural-Treatments-To-Manage-The-Symptoms-Of-Shingles-Causes-Symptoms-And-Prevention-Tips-340x255.jpg.webp",
para:"6 Effective Home Remedies & Natural Treatm...",
url:"https://www.stylecraze.com/articles/treatment-for-shingles/",
},
// ddff
];


let articals_obj=[
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2019/04/Uvula-Swollen-And-Red-85x60.jpg.webp",
para:"Swollen Uvula: Causes, Symptoms, & 8 Home...",
url:"https://www.stylecraze.com/articles/swollen-uvula-causes-remedies/",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2020/03/Coronavirus-Disease-COVID-19-Symptoms-Prevention-And-Treatment-85x60.jpg.webp",
para:"Coronavirus Disease: Symptoms, Prevention...",
url:"https://www.stylecraze.com/articles/coronavirus-infection-symptoms-causes-precautions/",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2020/03/Debunking-Myths-About-Coronavirus-85x60.jpg.webp",
para:"Debunking Coronavirus Myths - Facts To Se...",
url:"https://www.stylecraze.com/articles/debunking-coronavirus-myths/",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Diverticulitis-Symptoms-Causes-And-Treatment-Diet-85x60.jpg.webp",
para:"Diverticulitis: 9 Home Remedies And Natur...",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Deal-With-Paranoid-Personality-Disorder-85x60.jpg.webp",
para:"Paranoid Personality Disorder: Causes, Sy...",
url:"https://www.stylecraze.com/articles/diverticulitis-causes-treatment/",

},

{img:"https://cdn2.stylecraze.com/wp-content/uploads/2014/12/Home-Remedies-To-Treat-Scalp-Pain-And-Tenderness-85x60.jpg.webp",
para:"Home Remedies To Treat Scalp Pain And Ten...",
url:"https://www.stylecraze.com/articles/how-to-deal-with-paranoid-personality-disorder/",
},
{img:"https://cdn2.stylecraze.com/wp-content/uploads/2014/01/2833-Top-16-Effective-Home-Remedies-To-Get-Rid-Of-Chickenpox-ss-85x60.jpg.webp",
para:"Top 16 Effective Home Remedies To Get Rid...",
url:"https://www.stylecraze.com/articles/effective-home-remedies-to-treat-scalp-pain/",
},


]



//Write a fuction and display img and paragraph in different category


let popur_cat_container=document.getElementById("popular_cat");

let articals_container=document.getElementById("articals");


//add popular category


let append=(data,container)=>{


data.forEach(elem=>{
    console.log("dffgf",elem.url)
    let div=document.createElement("div");
    
let img1 =document.createElement("img")
img1.setAttribute("src",elem.img);

    let a =document.createElement("a");
    a.setAttribute("herf",elem.url)
    // a.innerHTML=` <a href="${elem.url}">${elem.para}</a>`
    a.innerText=elem.para;
 
  
 
    div.append(img1,a);
    container.append(div)
    console.log("div",div)

})
}

append(popur_cat_obj,popur_cat_container)
append(articals_obj,articals_container)





