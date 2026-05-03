// -------------------- APPLY SAVED THEME FIRST --------------------
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

// -------------------- BUTTON --------------------
const btn = document.createElement("button");
btn.className = "theme-toggle";

btn.innerHTML = `
<svg id="theme-icon" viewBox="0 0 24 24" width="22" height="22">
<g stroke="currentColor" stroke-width="2" fill="none">
<circle cx="12" cy="12" r="5"/>
<line x1="12" y1="1" x2="12" y2="4"/>
<line x1="12" y1="20" x2="12" y2="23"/>
<line x1="4.2" y1="4.2" x2="6.2" y2="6.2"/>
<line x1="17.8" y1="17.8" x2="19.8" y2="19.8"/>
<line x1="1" y1="12" x2="4" y2="12"/>
<line x1="20" y1="12" x2="23" y2="12"/>
<line x1="4.2" y1="19.8" x2="6.2" y2="17.8"/>
<line x1="17.8" y1="6.2" x2="19.8" y2="4.2"/>
</g>
</svg>
`;

document.body.appendChild(btn);

// -------------------- TOGGLE --------------------
btn.onclick = () => {
    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};
