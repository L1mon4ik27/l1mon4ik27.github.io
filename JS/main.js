const htmlElement = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const logo = document.getElementById("logo");

function applyTheme(theme) {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
        logo.setAttribute("src", "assets/logo-dark.png");
        themeToggle.innerHTML = "☀"; 
    } else {
        logo.setAttribute("src", "assets/logo-light.png");
        themeToggle.innerHTML = "⏾";
    }
}

function changeTheme() {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    applyTheme(newTheme);
}

function initTheme() {
    let theme = localStorage.getItem("theme");
    
    if (!theme) {
        const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        theme = isSystemDark ? "dark" : "light";
    }
    
    applyTheme(theme);
}

initTheme();
themeToggle.addEventListener("click", changeTheme);