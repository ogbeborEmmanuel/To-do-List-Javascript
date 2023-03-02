const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("text").value;
  const value = document.getElementById("new");

  if (text === "") {
    const message = " fill in your name";
    value.textContent = message;
  } else if (text.length <= 9) {
    value.textContent = "length must be more than 9 charaters";
  } else {
    value.textContent = "name added successfully";
    setTimeout(() => {
      value.textContent = "";
    }, 1000);

    const ul = document.getElementById("items");
    const li = document.createElement("li");
    li.className = "list";
    const TextNode = document.createTextNode(text);
    ul.appendChild(li);
    li.appendChild(TextNode);

    const button = document.createElement("button");
    button.className = "delBtn";
    li.appendChild(button);
    button.appendChild(document.createTextNode("X"));
  }
  form.reset();
});

const ul = document.getElementById("items");
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    const li = e.target.parentElement;
    ul.removeChild(li);
  }
});

//  filter

const filter = document.getElementById("filter");

filter.addEventListener("keyup", (e) => {
  var text = e.target.value.toLowerCase();
  var items = ul.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
