let appendfun= function(data,container){
    data.forEach(function(ele){
        let div = document.createElement("div");
    
        let img=document.createElement("img");
        img.setAttribute("src",ele.imgUrl);
        let title=document.createElement("h2");
        title.innerHTML=ele.Title;
        let paragraph=document.createElement("h3");
        paragraph.innerHTML=ele.Para;
     
    
        div.append(img,title,paragraph);
        container.append(div)
      
    })
}

console.log(appendfun)
export default appendfun
