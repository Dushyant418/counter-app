const countbtn = document.querySelector(".countbtn");
const addbtn = document.querySelector(".addbtn");
const savebtn = document.querySelector(".savebtn");
const countstore = document.querySelector(".countstore");
const resetbtn = document.querySelector(".resetbtn")

addbtn.addEventListener("click", function () {
    countbtn.innerHTML = +countbtn.innerHTML + 1
    savebtn.classList.remove("btnDisable")
})

savebtn.addEventListener("click", function ()  {
    if (countbtn.innerHTML == 0) {
        savebtn.classList.add("btnDisable");
    }
    else {
        if (countstore.innerHTML == 0) {
            countstore.innerHTML = countbtn.innerHTML
        }
        else {
            countstore.innerHTML = countstore.innerHTML + "," + countbtn.innerHTML

        }
        countbtn.innerHTML = 0;
    }

})

resetbtn.addEventListener("click", function () {
    countbtn.innerHTML = 0
    countstore.innerHTML = 0
})








































