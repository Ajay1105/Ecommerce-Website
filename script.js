console.log("welcome");
let products = [
    { img: "img/products/f1.jpg", brand: "ABC", price: "$12" },
    { img: "img/products/f2.jpg", brand: "ABC", price: "$11" },
    { img: "img/products/f3.jpg", brand: "ABC", price: "$13" },
    { img: "img/products/f4.jpg", brand: "ABC", price: "$15" },
    { img: "img/products/f5.jpg", brand: "ABC", price: "$14" },
    { img: "img/products/f6.jpg", brand: "ABC", price: "$20" },
    { img: "img/products/f7.jpg", brand: "ABC", price: "$10" },
    { img: "img/products/f8.jpg", brand: "ABC", price: "$16" },
]
let arrivals = [
    { img: "img/products/n1.jpg", brand: "ABC", price: "$12" },
    { img: "img/products/n2.jpg", brand: "ABC", price: "$11" },
    { img: "img/products/n3.jpg", brand: "ABC", price: "$13" },
    { img: "img/products/n4.jpg", brand: "ABC", price: "$15" },
    { img: "img/products/n5.jpg", brand: "ABC", price: "$14" },
    { img: "img/products/n6.jpg", brand: "ABC", price: "$20" },
    { img: "img/products/n7.jpg", brand: "ABC", price: "$10" },
    { img: "img/products/n8.jpg", brand: "ABC", price: "$16" },
]

Array.from(document.querySelectorAll(".pro")).forEach((element, i) => {
    element.querySelector("img").src = products[i].img;
    element.querySelector(".brand").innerHTML = products[i].brand;
    element.querySelector("#price").innerHTML = products[i].price;
})
Array.from(document.querySelectorAll(".arv")).forEach((element, i) => {
    element.querySelector("img").src = arrivals[i].img;
    element.querySelector(".brand").innerHTML = arrivals[i].brand;
    element.querySelector("#price").innerHTML = arrivals[i].price;
})
let bar = document.querySelector("#bar");
if(bar){
    bar.addEventListener('click',()=>{
        document.querySelector(".navContent").style.right='0px';
        document.querySelector("#close").addEventListener('click',()=>{
            document.querySelector(".navContent").style.right='-300px';
        })
    })
}


