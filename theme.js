const style = document.createElement("style");
style.textContent = `
:root {
    --bg: #ffffff;
    --text: #000000;
    --form-bg: #ffffff;
    --border: #dcdcdc;
    --shadow: rgba(32,33,36,.28);
    --muted: #888;
    --link: #000;
    --icon: #b1b1cb;
}
body.dark {
    --bg: #121212;
    --text: #ffffff;
    --form-bg: #1e1e1e;
    --border: #333;
    --shadow: rgba(0,0,0,.6);
    --muted: #aaa;
    --link: #fff;
    --icon: #888;
}

.theme-toggle {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 37px;
    height: 37px;
    border: none;
    background: none;
    color: var(--icon);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

#theme-icon {
    transition: transform 0.5s ease;
}

#rays {
    transition: opacity 0.3s ease, transform 0.5s ease;
    transform-origin: center;
}

#mask-circle {
    transition: transform 0.5s ease;
    transform-origin: center;
}

body.dark #rays {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
}

body.dark #mask-circle {
    transform: translate(-4px, 2px);
}

body.dark #theme-icon {
    transform: rotate(180deg);
}
`;
document.head.appendChild(style);

// Inject button
const btn = document.createElement("button");
btn.className = "theme-toggle";
btn.innerHTML = `
<svg id="theme-icon" viewBox="0 0 24 24" width="22" height="22">
    <defs>
        <mask id="moon-mask">
            <rect width="100%" height="100%" fill="white"/>
            <circle id="mask-circle" cx="16" cy="8" r="5" fill="black"/>
        </mask>
    </defs>

    <g id="rays" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="1" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="23"/>
        <line x1="4.2" y1="4.2" x2="6.2" y2="6.2"/>
        <line x1="17.8" y1="17.8" x2="19.8" y2="19.8"/>
        <line x1="1" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="23" y2="12"/>
        <line x1="4.2" y1="19.8" x2="6.2" y2="17.8"/>
        <line x1="17.8" y1="6.2" x2="19.8" y2="4.2"/>
    </g>

    <circle cx="12" cy="12" r="5" fill="currentColor" mask="url(#moon-mask)"/>
</svg>
`;
document.body.appendChild(btn);

// Toggle logic
btn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
};

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
