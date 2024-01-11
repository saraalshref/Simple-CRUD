var title=document.getElementById("title");
var price=document.getElementById("price");
var tax=document.getElementById("tax");
var discount=document.getElementById("discount");
var category=document.getElementById("category");
var count=document.getElementById("count");
var search=document.getElementById("search");
var total=document.getElementById("total");

let mod="create";
let tmp;
let searchMod="title"
function get(){
    if(price.value !== ''){
    var result=(+price.value + +tax.value)- +discount.value; // + to convert string to n
    total.innerHTML=result;
    }
  
}


var arrayOfProduct;
if (localStorage.product !=null){
    arrayOfProduct=JSON.parse(localStorage.product);
   
}
else{
    arrayOfProduct=[];
}
var btncreat=document.getElementById("create");
btncreat.onclick=function(){
    var product={
                Title:title.value,
                Price:price.value,
                Tax:tax.value,
                Discount:discount.value,
                Category:category.value,
                Count:count.value,
                Total:total.innerHTML, //it is not element to use value
    }
    if(mod=="create"){
        if(count.value>1){
            for(let i=0 ;i<count.value;i++){
                arrayOfProduct.push(product);
                localStorage.setItem("product",JSON.stringify(arrayOfProduct))
            }
        }
        else
        {
            arrayOfProduct.push(product);
            
        }
    }
    else
    {
        arrayOfProduct[tmp]=product;
        mod="create";
        document.getElementById("create").innerHTML="Create"
        count.style.display="block"
    }
    localStorage.setItem("product",JSON.stringify(arrayOfProduct))
    
   
    
   clear();
   showData();

}

 function clear(){
                title.value=''
                price.value=''
                tax.value=''
                discount.value=''
                category.value=''
                count.value=''
                total.innerHTML=''

 }

 function showData(){
    var table=''
    for(var i=0;i<arrayOfProduct.length;i++){
       table+=` <tr>
       <td>${i+1}</td>
       <td>${arrayOfProduct[i].Title}</td>
       <td>${arrayOfProduct[i].Category}</td>
       <td>${arrayOfProduct[i].Price}</td>
       <td>${arrayOfProduct[i].Discount}</td>
       <td>${arrayOfProduct[i].Total}</td>
    
       <td><button class="btn color" onclick="updat(${i})">Update</button></td>
       <td><button class="btn color" onclick="delet(${i})">Delete</button></td>
       
       
   </tr>`

    }
    document.getElementById("table").innerHTML=table;
    if(arrayOfProduct.length>0){
        document.getElementById("addDelete").innerHTML=`
        <button class="col-12 btn color" onclick="deleteAll()">Delete All(${arrayOfProduct.length})</button>
        `
    }
    else{
        document.getElementById("addDelete").innerHTML=" "
    }
 }
 showData()

 function delet(i){
    arrayOfProduct.splice(i,1);
    localStorage.product=JSON.stringify(arrayOfProduct);
    showData();

 }
 function deleteAll(){
    localStorage.clear();
    arrayOfProduct.splice(0);
    showData();

 }
 function updat(i){
    title.value=arrayOfProduct[i].Title;
    price.value=arrayOfProduct[i].Price;
    tax.value=arrayOfProduct[i].Tax;
    discount.value=arrayOfProduct[i].Discount;
    total.innerHTML=arrayOfProduct[i].Total;
    count.value=arrayOfProduct[i].Count;
    category.value=arrayOfProduct[i].Category;
    count.style.display="none"
    document.getElementById("create").innerHTML="Update";
    mod="update";
    tmp=i;

    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
 }
 
let  t="title";
let searchBox=document.getElementById("search");
 function searchh(id){
    if(id=="title"){
       
        searchBox.placeholder="search by title"

    }
    else if(t==="cat")
    {
        searchBox.placeholder="search by category"
    }
    else{
        searchBox.placeholder="search by Author"
    }
 }
 function ssearch(){
     var table=" "
     let valu=searchBox.value;
 
    for(let i=0;i<arrayOfProduct.length;i++){
        if(searchMod == "title"){
        if(arrayOfProduct[i].Title.includes(valu)){
            table+=` <tr>
            <td>${i+1}</td>
            <td>${arrayOfProduct[i].Title}</td>
            <td>${arrayOfProduct[i].Category}</td>
            <td>${arrayOfProduct[i].Price}</td>
            <td>${arrayOfProduct[i].Discount}</td>
            <td>${arrayOfProduct[i].Total}</td>
            <td><button class="btn color" onclick="updat(${i})">Update</button></td>
            <td><button class="btn color" onclick="delet(${i})">Delete</button></td>
            
            
        </tr>`
        }
    }
    else
    {
        table+=` <tr>
        <td>${i+1}</td>
        <td>${arrayOfProduct[i].Title}</td>
        <td>${arrayOfProduct[i].Category}</td>
        <td>${arrayOfProduct[i].Price}</td>
        <td>${arrayOfProduct[i].Discount}</td>
        <td>${arrayOfProduct[i].Total}</td>
        <td><button class="btn color" onclick="updat(${i})">Update</button></td>
        <td><button class="btn color" onclick="delet(${i})">Delete</button></td>
        
        
    </tr>`
    }
        
    }
    document.getElementById("table").innerHTML=table;
 }
 