var _a;
var showInput = false;
var handleClickEvent = function () {
    var inputDisplay = document.querySelectorAll(".input-section");
    showInput = !showInput;
    inputDisplay.forEach(function (visible) { return (visible.style.display = showInput ? "flex" : "none"); });
    var toogle = document.querySelector('#button');
    toogle.innerText = showInput ? "Hide all sections" : "Show All Sections";
};
var form = (_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var exp = document.getElementById('exp').value;
    var output = document.getElementById('resumeOutput');
    var resume = "\n    <div class='resume-container'>\n    <h2>Resume</h2>\n    <p >Name:".concat(name, " </p>\n    <p>Email:").concat(email, " </p>\n    <p>Phone:").concat(number, " </p>\n    <h3>Education</h3>\n    ").concat(education, "\n    <h3>Skills</h3>\n    ").concat(skills, "\n    <h3>Work Experience</h3>\n    ").concat(exp, "\n    </div>");
    var resumeOutputElement = document.getElementById('resume');
    if (resume) {
        resumeOutputElement.innerHTML = resume;
    }
});
