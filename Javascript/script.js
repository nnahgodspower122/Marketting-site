
//Help Center
document.addEventListener("DOMContentLoaded",  () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const submenuItems = document.querySelectorAll(".submenu-item");

    const defaultContentId = "getting-started"; 
    showContent(defaultContentId);

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const submenu = item.querySelector(".submenu");
            const arrowDown = item.querySelector(".arrow-down");
            const arrowUp = item.querySelector(".arrow-up");
            const isOpen = submenu && submenu.classList.contains("open");

            document.querySelectorAll(".submenu").forEach(sub => sub.classList.remove("open"));
            document.querySelectorAll(".arrow-down").forEach(icon => icon.classList.remove("rotate"));
            document.querySelectorAll(".arrow-up").forEach(icon => icon.classList.remove("rotate"));

            if (submenu) {
                submenu.classList.toggle("open", !isOpen); 
                arrowDown.classList.toggle("rotate", !isOpen); 
                arrowUp.classList.toggle("rotate", isOpen);
            }

            if (!submenu) {
                const contentId = item.getAttribute("data-content");
                showContent(contentId);
                updateActiveState(item, false); 
            } else {
                updateActiveState(item, true); 
            }
        });
    });

    submenuItems.forEach(subItem => {
        subItem.addEventListener("click", function (e) {
            e.stopPropagation();  
            const contentId = subItem.getAttribute("data-content");
            showContent(contentId);
            updateActiveState(subItem, false); 
        });
    });

    function showContent(contentId) {
        const activeContent = document.querySelector(".content-section.active");
        if (activeContent) {
            activeContent.classList.remove("active");
        }

        const contentSection = document.getElementById(contentId);
        if (contentSection) {
            contentSection.classList.add("active");
        }
    }

    const updateActiveState = (activeItem, isSubmenuParent) => {
        document.querySelectorAll(".menu-item, .submenu-item").forEach(item => item.classList.remove("active"));
        if (!isSubmenuParent) {
            activeItem.classList.add("active");
        }
    }
});

let acc = document.getElementsByClassName("faqs");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faq-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

