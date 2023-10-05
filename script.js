const dropdown = document.querySelector(".dropdown");

const submit = document.querySelector(".submit");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");

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
            inputs[0].style.border = "solid red";
            alert("Name field must be empty for a company!");
        }
        else if (inputs[1].value != "")
        {
            inputs[1].style.border = "solid red";
            alert("Surname field must be empty for a company!");
        }
    }
    else
    {
        if (inputs[2].value != "")
        {
            inputs[2].style.border = "solid red";
            alert("Company name field must be empty!");
        }
    }
    
    let str = inputs[3].value;
    for(let i = 0; i < str.length; i++)
    {
        if (str[i] < '0' || str[i] > '9')
        {
            if (str[i] != ' ')
            {
                alert("Cell Phone number field should only contain digits with spaces!");
                inputs[3].style.border = "solid red";
                break;
            }
        }
    }
});