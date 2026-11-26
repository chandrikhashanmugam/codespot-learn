// Registration form: validation and a confirmation message.
// Front-end only: nothing is sent to a server.
const form = document.getElementById("registerForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        message.classList.add("d-none");
        return;
    }

    const name = document.getElementById("studentName").value.trim();
    const course = document.getElementById("courseSelect").value;

    message.textContent = `Thank you, ${name}! Your request for ${course} is ready. ` +
        "(Front-end demo: nothing was sent or saved.)";
    message.classList.remove("d-none");
    form.classList.remove("was-validated");
    form.reset();
});

// "View Course" buttons: choose that course in the form
document.querySelectorAll(".view-course").forEach(function (link) {
    link.addEventListener("click", function () {
        document.getElementById("courseSelect").value = link.dataset.course;
    });
});
