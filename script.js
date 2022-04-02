console.log("welcome");
let products = [
    {img:"img/products/f1.jpg",brand:"ABC",price:"$12"},
    {img:"img/products/f2.jpg",brand:"ABC",price:"$11"},
    {img:"img/products/f3.jpg",brand:"ABC",price:"$13"},
    {img:"img/products/f4.jpg",brand:"ABC",price:"$15"},
    {img:"img/products/f5.jpg",brand:"ABC",price:"$14"},
    {img:"img/products/f6.jpg",brand:"ABC",price:"$20"},
    {img:"img/products/f7.jpg",brand:"ABC",price:"$10"},
    {img:"img/products/f8.jpg",brand:"ABC",price:"$16"},
]
Array.from(document.querySelectorAll(".pro")).forEach((element,i)=>{
   element.querySelector("img").src=products[i].img;
   element.querySelector(".brand").innerHTML=products[i].brand;
   element.querySelector("#price").innerHTML=products[i].price;
})