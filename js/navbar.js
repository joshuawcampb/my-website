const navbar = `
<nav>
    <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="about.html">ABOUT</a></li>
        <li><a href="projects.html">PROJECTS</a></li>
        <li><a href="resume.html">RESUME</a></li>
        <li><a href="contact.html">CONTACT</a></li>
    </ul>
</nav>
`;

document.getElementById("navbar").innerHTML = navbar;

const page = location.pathname.split("/").pop();

for (const link of document.querySelectorAll("#navbar a")) {
    if (link.getAttribute("href") === page) {
        link.classList.add("active");
    }
}
