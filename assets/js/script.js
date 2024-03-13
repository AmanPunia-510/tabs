let tab_1 = document.querySelector(".tab-1");
let tab_2 = document.querySelector(".tab-2");
let tab_3 = document.querySelector(".tab-3");

txt_1 = document.querySelector(".first");
txt_2 = document.querySelector(".sec");
txt_3 = document.querySelector(".thr");

let t1 = window.getComputedStyle(txt_1).display;
let t2 = window.getComputedStyle(txt_2).display;
let t3 = window.getComputedStyle(txt_3).display;

tab_2.addEventListener("click", () => {
    if (t2 === "none") {
        txt_2.style.display = "block";
        txt_1.style.display = "none";
        txt_3.style.display = "none";
    } else {
        txt_2.style.display = "none";
    }
});

tab_3.addEventListener("click", () => {
    if (t3 === "none") {
        txt_3.style.display = "block";
        txt_2.style.display = "none";
        txt_1.style.display = "none";
    } else {
        txt_3.style.display = "none";
    }
});

const textItems = document.querySelectorAll(".text");

textItems.forEach(function (item) {
    item.addEventListener("click", function () {
        textItems.forEach(function (element) {
            element.classList.remove("border1");
            element.classList.remove("black");
        });

        item.classList.add("border1");
        item.classList.add("black");
    });
});
