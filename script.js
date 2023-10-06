const dropdown = document.querySelector(".dropdown");

const submit = document.querySelector(".submit");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");

const thanks = document.querySelector(".popup");

function switch1()
{
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
}

select.addEventListener("click", switch1);

options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(option => {
            option.classList.remove("active");
        })
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        option.classList.add("active");
    })
});

document.onclick = function(e)
{
    if(e.target != select && e.target != selected && e.target != caret)
    {
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
    }
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let b = false;
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.style.border = "";
    })
    if (selected.innerText == "Company")
    {
        if (inputs[0].value != "" && inputs[1].value != "")
        {
            inputs[0].style.border = "solid red";
            inputs[1].style.border = "solid red";
            alert("Name and Surname Fields must be empty for a company!");
        }
        else if (inputs[0].value != "")
        {
            b = true;
            inputs[0].style.border = "solid red";
            alert("Name field must be empty for a company!");
        }
        else if (inputs[1].value != "")
        {
            b = true;
            inputs[1].style.border = "solid red";
            alert("Surname field must be empty for a company!");
        }
    }
    if (inputs[0].value == "" && inputs[1].value == "" && inputs[2].value == "" && inputs[3].value == "")
    {
        inputs.forEach((input) => {
            input.style.border = "solid red";
        })
        b = true;
        alert("Fill out the input field to submit the form!");
    }
    if (selected.innerHTML == "Select role...")
    {
        b = true;
        alert("You must select role before submitting the form.");
        select.style.border = "solid red";
    }
    
    let str = inputs[3].value;
    for(let i = 0; i < str.length; i++)
    {
        if (str[i] < '0' || str[i] > '9')
        {
            if (str[i] != ' ' && str[i] != '+')
            {
                b = true;
                alert("Cell Phone number field should only contain digits with spaces!");
                inputs[3].style.border = "solid red";
                break;
            }
        }
    }
    if (b == false)
    {
        thanks.classList.remove('hide');
        document.querySelector(".registrate").classList.add("hide");
        setTimeout(() => {document.querySelector(".registrate").submit()}, 2000)
    }
});
