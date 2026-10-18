const htmlElement = document.documentElement;

if(localStorage.getItem("theme")!==null){
    htmlElement.setAttribute("data-theme",localStorage.getItem("theme"));
}
else{
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const systemTheme = isSystemDark ? "dark" : "light";
    htmlElement.setAttribute("data-theme", systemTheme);
    localStorage.setItem("theme",systemTheme);
}

function changeTheme(){
    let currentTheme = htmlElement.getAttribute("data-theme");
    
    if(currentTheme == "dark"){
        htmlElement.setAttribute("data-theme","light");
    }
    else if (currentTheme == "light"){
        htmlElement.setAttribute("data-theme","dark");
    }
    localStorage.setItem("theme",htmlElement.getAttribute("data-theme"));
}