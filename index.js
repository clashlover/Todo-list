// adding button functinality
document.querySelector("#add").addEventListener("click", function () {
  var myPlan = document.querySelector("input").value;
  if (myPlan === "") {
    alert("Please enter Your Plan");
  } else {
    // Creating div to enter the li and buttons
    var node = document.createElement("div");
    node.className = "plan-container";

    // Creating li to store plans
    var planList = document.createElement("li");
    planList.innerText = myPlan;
    planList.classList.add("plan");
    node.appendChild(planList);

    // adding tick button to every li
    var tickButton = document.createElement("button");
    tickButton.innerHTML = '<i class="fas fa-check"></i>';
    tickButton.className = "tick-button";
    node.appendChild(tickButton);

    // adding delete button to every li
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.className = "delete-button";
    node.appendChild(deleteButton);

    // printing li with all buttons n required div
    document.querySelector("#incomplete-task").appendChild(node);
    document.querySelector("input").value = "";

    // adding functionality to buttons
    tickButton.addEventListener("click", function () {
      node.style.textDecoration = "line-through";
      tickButton.disabled = true;
      tickButton.style.display = "none";
    });

    deleteButton.addEventListener("click", function () {
      node.style.display = "none";
    });
  }
});
