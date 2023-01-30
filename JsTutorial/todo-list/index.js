var quadro = document.getElementById("quadroTarefas");
let input = document.querySelector(".inputContainer input");
let getValue = document.getElementById("inputID");

function removeCheckedTasks() {
    var taskContainers = quadro.getElementsByClassName("task-container");
    for (var i = taskContainers.length - 1; i >= 0; i--) {
      var taskContainer = taskContainers[i];
      var taskCheckbox = taskContainer.getElementsByClassName("task-checkbox")[0];
      if (taskCheckbox.checked) {
        quadro.removeChild(taskContainer);
      }
    }
  }
  

function submit() {
  if (getValue.value != "") {
    //Criar os elementos (um input e uma label)
    let taskCheckbox = document.createElement("input");
    let taskLabel = document.createElement("label");

    taskCheckbox.classList.add("task-checkbox"); //Adicionar na calsslist devida
    taskLabel.classList.add("task-label");

    //definir o tipo de input e o texto
    taskCheckbox.type = "checkbox";
    taskLabel.innerHTML = input.value;

    //novo container para adicionar os outros 2
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    //dar append para o task container 
    taskContainer.appendChild(taskCheckbox);
    taskContainer.appendChild(taskLabel);

    //dar append to task container para o quadro de tarefas 
    quadro.appendChild(taskContainer);

    document.getElementById("inputID").value = "";
  } else {
    console.log("Nenhuma tarefa introduzida...");
  }
}
