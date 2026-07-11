const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const projectRail = document.getElementById("projectRail");
const projects = Array.from(document.querySelectorAll("[data-project]"));
const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");
const projectButtons = Array.from(document.querySelectorAll(".project-btn"));
const resumeLinks = Array.from(document.querySelectorAll(".resume-link"));

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const scrollToProject = (index) => {
  const target = projects[index];
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
};

let activeIndex = 0;

const updateActiveProject = (direction) => {
  activeIndex = (activeIndex + direction + projects.length) % projects.length;
  scrollToProject(activeIndex);
};

prevProject?.addEventListener("click", () => updateActiveProject(-1));
nextProject?.addEventListener("click", () => updateActiveProject(1));

projectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    activeIndex = index;
    scrollToProject(index);
  });
});

if (projectRail) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeIndex = projects.indexOf(entry.target);
        }
      });
    },
    { root: projectRail, threshold: 0.7 }
  );

  projects.forEach((project) => observer.observe(project));
}

resumeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const resumeUrl = link.href;
    window.open(resumeUrl, "_blank", "noopener");

    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "Swagata-Pal-Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  });
});
