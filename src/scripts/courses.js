// Featured courses: the data lives in one place,
// and one function turns each course into a card.
import webDevelopmentImage from "../../assets/images/web-development.svg";
import pythonImage from "../../assets/images/python-programming.svg";
import uiUxImage from "../../assets/images/ui-ux-design.svg";

const courses = [
    {
        title: "Full Stack Web Development",
        level: "Beginner",
        description: "Learn frontend and backend development.",
        duration: "12 Weeks",
        image: webDevelopmentImage
    },
    {
        title: "Python Programming",
        level: "Beginner",
        description: "Build strong programming fundamentals with hands-on exercises and mini projects.",
        duration: "8 Weeks",
        image: pythonImage
    },
    {
        title: "UI/UX Design",
        level: "Intermediate",
        description: "Design user-friendly interfaces.",
        duration: "10 Weeks",
        image: uiUxImage
    }
];

const courseList = document.getElementById("courseList");
const noResults = document.getElementById("noResults");

// Small helper: create an element with classes and safe text
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    if (text) element.textContent = text;
    return element;
}

// One reusable function for every course card
function createCourseCard(course) {
    const card = createElement("article",
        "course-card tw:overflow-hidden tw:rounded-xl tw:bg-white tw:shadow-sm tw:flex tw:flex-col");

    const image = createElement("img", "tw:h-48 tw:w-full tw:object-cover");
    image.src = course.image;
    image.alt = `${course.title} course`;
    image.width = 640;
    image.height = 360;
    image.loading = "lazy";

    const body = createElement("div", "tw:p-6 tw:flex tw:flex-1 tw:flex-col");
    const link = createElement("a",
        "view-course tw:mt-auto tw:self-start tw:rounded-lg tw:bg-brand tw:px-5 tw:py-2 " +
        "tw:text-white tw:no-underline tw:focus-visible:outline-2 " +
        "tw:focus-visible:outline-offset-2 tw:focus-visible:outline-brand",
        "View Course");
    link.href = "#enrol";
    link.dataset.course = course.title;

    body.append(
        createElement("span", "tw:text-sm tw:font-semibold tw:text-brand", course.level),
        createElement("h3", "tw:mt-3 tw:text-xl tw:font-bold", course.title),
        createElement("p", "tw:mt-2 tw:text-slate-600", course.description),
        createElement("p", "tw:mt-4 tw:text-sm tw:text-slate-500", `Duration: ${course.duration}`),
        link
    );
    card.append(image, body);
    return card;
}

// Show a list of courses (all of them, or only the search results)
function renderCourses(list) {
    courseList.replaceChildren(...list.map(createCourseCard));
    noResults.hidden = list.length > 0;
}

renderCourses(courses);

// Course search: filter the same data and reuse the same function
const searchForm = document.getElementById("courseSearchForm");
const searchInput = document.getElementById("courseSearch");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    const matches = courses.filter(course => course.title.toLowerCase().includes(query));
    renderCourses(matches);
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
});
