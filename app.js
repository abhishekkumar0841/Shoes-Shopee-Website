const sliderWrapper = document.querySelector('.sliderWrapper');
const menuItem = document.querySelectorAll('.menuItem');


const products = [


    {
        id: 1,
        title: "Air Force",
        price: 9999,
        colors: [
            {
                code: "#a0522d ",
                img: "images/sliderItem1.png",
            },
            {
                code: "grey",
                img: "images/sliderItem11.png",
            },
        ],
    },

    {
        id: 1,
        title: "JORDAN",
        price: 6999,
        colors: [
            {
                code: "#ff355e",
                img: "images/sliderItem2.png",
            },
            {
                code: "red",
                img: "images/sliderItem22.png",
            },
        ],
    },

    {
        id: 1,
        title: "BLZER",
        price: 5444,
        colors: [
            {
                code: "blue",
                img: "images/sliderItem3.png",
            },
            {
                code: "#674846",
                img: "images/sliderItem33.png",
            },
        ],
    },

    {
        id: 1,
        title: "CRATER",
        price: 8221,
        colors: [
            {
                code: "#483d8b",
                img: "images/sliderItem4.png",
            },
            {
                code: "black",
                img: "images/sliderItem44.png",
            },
        ],
    },

    {
        id: 1,
        title: "HIPPIE",
        price: 7777,
        colors: [
            {
                code: "#800000",
                img: "images/sliderItem5.png",
            },
            {
                code: "navy",
                img: "images/sliderItem55.png",
            },
        ],
    },

];


let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');


menuItem.forEach(function(item, index){
    item.addEventListener('click', () => {
        //change the current slide
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chossen product
        choosenProduct = products[index];

        //changing texts of current products
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "Rs. " + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assinging colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    })
});

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
});


currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
    payment.style.display = "flex";
});

close.addEventListener('click', () => {
    payment.style.display = "none";
});



