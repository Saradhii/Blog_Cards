var x = localStorage.getItem("item");


let url="https://jsonmock.hackerrank.com/api/articles?page=2";
var data;

async function req(){
    try
    {
        let res = await fetch(url); 
        data = await res.json();
        console.log(data.data);
        let blogs = data.data;
        if(x=="Recent")
        {
            blogs.sort((a,b)=>{
                return Number(b.created_atacross) - Number(a.created_atacross);
            });
            appenddata(blogs);
        }
        else
        {
            blogs.sort((a,b)=>{
                return Number(b.num_comments) - Number(a.num_comments);
            });
            appenddata(blogs);
        }
       
    }
    catch(err)
    {
        console.log(err);
    }  
}
req();

var menu = document.querySelector(".main");
function appenddata(data){
    data.forEach(function(elem,index){
    
    var div = document.createElement("div");
    div.setAttribute("class","avtar")

    var div1 = document.createElement("div");
    div1.setAttribute("class", "item");
    var img = document.createElement("img");
    img.setAttribute("src","https://www.w3schools.com/howto/img_avatar.png")
    var h4 = document.createElement("p");
    h4.innerHTML=elem.author;
    div1.append(img,h4);

    var div2 = document.createElement("div");
    var title = document.createElement("p");
    title.innerText = elem.title;
    div2.append(title);

    var div3 = document.createElement("div");
    div3.setAttribute("class","item");
    var comments = document.createElement("h5");
    comments.innerText = `💬 ${elem.num_comments}`;
    var link = document.createElement("a");
    link.setAttribute("href",`${elem.url}`);
    link.innerText="Go to article";
    div3.append(comments,link);

    div.append(div1,div2,div3);
    menu.append(div);
    });
};

