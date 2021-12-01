var textDiv = document.body.querySelector(".text1")
document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;
    var passValue = document.body.querySelector(".inputPass").value;
    if (textValue === "cool" && passValue === "password"){
        navMenu();
        createWrapper();
        navigate("Grade View");
        document.getElementById("inputboxes").style.display = "none";
    } else if(textValue !== "cool" && passValue !== "password") {
        textDiv.innerHTML = "Wrong Username and Password";
    } else if(textValue !== "cool"){
        textDiv.innerHTML = "Wrong Username";
    } else if(passValue !== "password"){
        textDiv.innerHTML = "Wrong Password";
    }
})

var pages = ["Grade View", "Add Grade"]

var list=[{Name: "", Grade: ""}]
var grades = document.createElement("h4")

function renderList(){
    grades.innerHTML = "";
    for (var i=0; i<list.length; i++){
        var ele = document.createElement("div");
        ele.innerHTML = list[i].Name + " " + list[i].Grade;
        grades.appendChild(ele);
    }
}

function navMenu(){

    var nav = document.createElement("nav")
    nav.style.textAlign = "center"
    nav.style.backgroundColor = "red"
    nav.style.padding = "20px"
    nav.style.border = "8px dashed black"
    createButton(pages[0]);
    createButton(pages[1]);

    document.body.appendChild(nav);

    function createButton(pg){
        var button = document.createElement("button")
        button.innerHTML = pg
        button.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper(){
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg === "Grade View"){
        GradeViewPage()
    } else if(pg === "Add Grade"){
        AddGrade()
    }
}

function GradeViewPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.style.color = "White"
    header.style.backgroundColor = "Black"
    header.innerHTML = "Grades";
    wrapper.appendChild(header);
    wrapper.appendChild(grades)
    renderList()
}


function AddGrade(){
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.style.color = "White"
    header.style.backgroundColor = "Black"
    header.innerHTML = "Add Grades";
    wrapper.appendChild(header);
    var response = document.createElement("h3");
    wrapper.appendChild(response)

    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Name");

    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "Grade");

    wrapper.appendChild(input1)
    wrapper.appendChild(input2)



    var button = document.createElement("button")
    button.innerHTML = "Submit"
    button.addEventListener("click", function () {
        if ((/^[A-Za-z]+$/.test(input1.value)) === true) {
            if (isNaN(Number(input2.value)) === false && input2.value >= 0 && input2.value <= 100) {
                list.push({Name: "Student Name: " + input1.value, Grade: "|| Grade: " + input2.value})
                renderList()
                navigate("Grade View")
            } else if (isNaN(Number(input2.value)) === true) {
                response.innerHTML = "Please type a number in the second input box."
            } else if (input2.value < 0 || input2.value > 100) {
                response.innerHTML = "Number must be between 0 and 100 inclusive."
            }
        } else {
                response.innerHTML = "Please type ONLY letters in the name box"
        }
    })
    wrapper.appendChild(button)
}