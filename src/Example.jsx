const inputbox = document.getElementById("input-box"); // defining the html of input box aas input box to easen the naming
const listContainer = document.getElementById("list-container"); //dwefined the listcontainer for naming purposes

// defining the function on that is on the onclick of the button

function addTask() {
  if (inputbox.value === "") {
    alert("write something you guy");
  } else {
    let li = document.createElement("li"); // created an element called list to allign the tasks in list
    li.innerHTML = inputbox.value; // whatever that will come to the list will equal what is in the inputvalue
    listContainer.appendChild(li);

    //as well ad need to add image (close img) to close task
    let img = document.createElement("img");
    img.src = "img/notcheck.png";
    img.classList.add("close"); //some css style add using class
    li.appendChild(img);
  }
  inputbox.value = "";
  saveData();
}
listContainer.addEventListener("click", (v) => {
  // adding an event listener to the list container
  if (v.target.tagname === "li") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (v.target.tagName === "IMG") {
    v.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// helps get data from the localstorage
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();
 export default Example