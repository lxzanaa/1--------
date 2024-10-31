let hamburger = document.querySelector("#hamburger");
let responsive_nav_list = document.querySelector("#responsive_nav_list");

// SVG kodlari
const openIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8.5H21M3 15.5H21" stroke="#2C2B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

const closeIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7L7 17M7 7L17 17" stroke="#2C2B35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

hamburger.addEventListener("click", function() {
    // Nav menyu ochilishi yoki yopilishi uchun klasslarni almashtirish
    responsive_nav_list.classList.toggle("-top-[110%]");
    responsive_nav_list.classList.toggle("top-[72px]");
    document.body.classList.toggle("overflow-y-hidden")
    // `hamburger` elementidagi `true` klassni yoqish yoki o'chirish
    if (hamburger.classList.toggle("true")) {
        hamburger.innerHTML = closeIcon; // `true` bo'lganda yopiq ikonka
    } else {
        hamburger.innerHTML = openIcon; // `false` bo'lganda ochiq ikonka
    }
});

let dropdown = document.querySelectorAll(".dropdown")
let dropdownToggleBtn = document.querySelectorAll(".dropdownToggleBtn")


if (window.innerWidth > 768) {
    dropdownToggleBtn.forEach(function (item, index) {
        item.addEventListener("click", function () {
            const isOpen = dropdown[index].classList.contains("h-[220px]");
            
            // Hammasini yopish
            dropdown.forEach(function (dropdownItem, i) {
                dropdown[i].classList.remove("h-[220px]");
                dropdown[i].classList.add("md:h-20");
            });
            
            // Agar ochiq bo'lsa yopish, aks holda ochish
            if (!isOpen) {
                dropdown[index].classList.add("h-[220px]");
                dropdown[index].classList.remove("md:h-20");
            }
        });
    });
} else if(window.innerWidth > 375) {
    dropdownToggleBtn.forEach(function (item, index) {
        item.addEventListener("click", function () {
            const isOpen = dropdown[index].classList.contains("h-[300px]");
            
            // Hammasini yopish
            dropdown.forEach(function (dropdownItem, i) {
                dropdown[i].classList.remove("h-[300px]");
                dropdown[i].classList.add("h-[70px]");
            });
            
            // Agar ochiq bo'lsa yopish, aks holda ochish
            if (!isOpen) {
                dropdown[index].classList.add("h-[300px]");
                dropdown[index].classList.remove("h-[70px]");
            }
        });
    });
}
else{
    dropdownToggleBtn.forEach(function (item, index) {
        item.addEventListener("click", function () {
            const isOpen = dropdown[index].classList.contains("h-[300px]");
            
            // Hammasini yopish
            dropdown.forEach(function (dropdownItem, i) {
                dropdown[i].classList.remove("h-[300px]");
                dropdown[i].classList.add("h-[70px]");
            });
            
            // Agar ochiq bo'lsa yopish, aks holda ochish
            if (!isOpen) {
                dropdown[index].classList.add("h-[300px]");
                dropdown[index].classList.remove("h-[70px]");
            }
        });
    });
}

