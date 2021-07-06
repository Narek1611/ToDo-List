const addBtn = document.querySelector(".addBtn");
const input = document.querySelector(".textInput");
const notCompleted = document.querySelector(".events");
const Completed = document.querySelector(".done");

addBtn.addEventListener("click", function () {
  if (input.value !== "") {
    const inputValue = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const btnDlt = document.createElement("button");
    const btnDone = document.createElement("button");

    listItem.appendChild(listText);
    listItem.appendChild(btnDlt);
    listItem.appendChild(btnDone);

    listText.textContent = inputValue;
    btnDlt.textContent = "DELETE";
    btnDone.textContent = "COMPLETE";

    notCompleted.appendChild(listItem);

    btnDlt.addEventListener("click", function () {
      const parent = this.parentNode;
      parent.remove();
    });

    btnDone.addEventListener("click", function () {
      const parent = this.parentNode;
      parent.remove();
      Completed.appendChild(parent);
    });
  }
});

const clearBtn1 = document.querySelector(".clearBtn1");
clearBtn1.addEventListener("click", function () {
  notCompleted.innerHTML = "";
});

const clearBtn2 = document.querySelector(".clearBtn2");
clearBtn2.addEventListener("click", function () {
  Completed.innerHTML = "";
});
