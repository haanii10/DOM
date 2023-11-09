const links = [
    { url: "#home", title: "Home", id: "home"},
    { url: "#project", title: "Projects", id: "project"},
    { url: "#login", title: "Login", id: "login"},
];

const app = document.getElementById("app");

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

const homePage = document.createElement("section");
const projectPage = document.createElement("section");
const loginPage = document.createElement("section");

homePage.innerHTML = "<h1>Home Page</h1>";
projectPage.innerHTML = "<h1>Project Page</h1>";
loginPage.innerHTML = "<h1>Sign In</h1>";

homePage.setAttribute("id", "home");
projectPage.setAttribute("id", "project");
loginPage.setAttribute("id", "login");

links.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}">${link.title}</a>`;
    li.addEventListener("click", () => {

        const content = document.getElementById(link.id);
        content.style.display = "block";
        links.forEach((li) => {
            if (li.id !== link.id) {
                const content = document.getElementById(li.id);
                content.style.display = "none";
            }
        });
    });
    ul.appendChild(li);
});

const user = { email: "dummy@email.com", password: "password" };
const form = document.createElement("form");
const email = document.createElement("input");
const password = document.createElement("input");
const submitButton = document.createElement("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //Validate user inputs if the user's email and password matches
    //to dummy user's email and password.
    //Prompt the user using alert ("Login successful") for the correct credentials
    //otherwise, prompt using alert ("Incorrect email or password")
    //alert("yaga naaaaa");
    const enteredEmail = email.value;
    const enteredPassword = password.value;

if (enteredEmail == user.email && enteredPassword == user.password){
    alert("Login successful");
}
else{
    alert("Incorrect email or password");
}
    
});

submitButton.type = "submit";
email.type = "email";
password.type = "password";
form.appendChild(email);
form.appendChild(password);
form.appendChild(submitButton);
loginPage.appendChild(form);


app.appendChild(nav);
nav.appendChild(ul);
app.appendChild(homePage);
app.appendChild(projectPage);
app.appendChild(loginPage);