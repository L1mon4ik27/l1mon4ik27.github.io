const htmlElement = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const logo = document.getElementById("logo"); 

if(localStorage.getItem("theme")!==null){
    htmlElement.setAttribute("data-theme",localStorage.getItem("theme"));
}
else{
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const systemTheme = isSystemDark ? "dark" : "light";
    htmlElement.setAttribute("data-theme", systemTheme);
    localStorage.setItem("theme",systemTheme);
}


themeToggle.addEventListener("click",changeTheme);

function changeTheme(){
    let currentTheme = htmlElement.getAttribute("data-theme");
    
    if(currentTheme == "dark"){
        htmlElement.setAttribute("data-theme","light");
        logo.setAttribute("src","assets/logo-light.png");
        themeToggle.innerHTML = "⏾";
    }
    else if (currentTheme == "light"){
        htmlElement.setAttribute("data-theme","dark");
        logo.setAttribute("src","assets/logo-dark.png");
        themeToggle.innerHTML = "☀";
    }
    localStorage.setItem("theme",htmlElement.getAttribute("data-theme"));
}