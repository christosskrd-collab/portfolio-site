const username = "christosskrd-collab";

var typed = new Typed("#typing", {
  strings: [
    "Junior Developer",
    "Python Automation",
    "Web Development",
    "Learning Every Day"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("projects-container");

    data.slice(0,6).forEach(repo => {

      const project = document.createElement("div");
      project.classList.add("project-card");

      project.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">View Project</a>
      `;

      container.appendChild(project);

    });

  });