const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");
function addChore()
{
    if(inputBox.value === '')
    { 
    alert("You must write something!");
    }
    else
    {
    li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; 
    li.appendChild(span);
    }
    inputBox.value = ""; 
    saveData();
}
listContainer. addEventListener("click", function(e)
{ 
    if(e.target.tagName === "LI")
    {
    e.target.classList.toggle("checked");
    saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
     
        e.target.parentElement.remove(); 
        SaveData();
    }
    }, false);
    function saveData()
    {
    localstorage.setItem("data", listcontainer.innerHTML);
    }
    function showTask()
    {
    listContainer.innerHTML = localstorage.getItem("data");
    }
    showTask();
