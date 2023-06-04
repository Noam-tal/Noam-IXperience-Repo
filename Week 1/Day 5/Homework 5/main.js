class Task {
    constructor(taskName) {
      this.taskName=taskName
    }
  
    static fromJSON(json) {
      return new Task(json.taskName);
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.taskName = document.getElementById('taskname-input');

  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderTaskList();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (
        this.taskName.value == '' 
      ) {
        return;
      }
  
      const task = new Task(this.taskName.value);
  
      this.tasks.push(task);
  
      this.saveTasksToLocalStorage();
      this.renderTaskList();
  
      this.taskName.value = ''
    }
  
    renderTaskList() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskListRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTaskListRow(task) {
      const tr = document.createElement('tr');
  
      const tdTask = document.createElement('td');
   
      const tdDelete = document.createElement('td');

      const tdCompleted = document.createElement('td')
  
      tdTask.innerHTML = task.taskName;

      tdCompleted.appendChild(checkbox)

    
      const actionButtons = this.createActionButtons(task);
      tdDelete.appendChild(actionButtons[0]);

      
  
      tr.appendChild(tdTask);
  
      tr.appendChild(tdDelete);

      tr.appendChild(tdCompleted);
  
      const checkBox = this.createCheckBox();
      tdCompleted.appendChild(checkBox)
      return tr;
    }
  
    createCheckBox(){
        const checkElement = document.createElement('input')
        checkElement.type = 'checkbox';
        return [checkElement]
    }

    createActionButtons(task) {
      const deleteButton = document.createElement('button');

  
      deleteButton.setAttribute('img', 'src=3299937.png');
      deleteButton.style.cursor = 'pointer'
   
      deleteButton.addEventListener('click', () =>
        this.onRemoveTaskClicked(task)
      );
  
      return [deleteButton];
    }
  
    onRemoveTaskClicked(task) {
      this.tasks = this.tasks.filter((x) => {
        return task.taskName !== x.taskName;
      });
  
      this.saveTasksToLocalStorage();
      this.renderTaskList();
    }
  
    saveTasksToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }
  
    loadTasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map((x) => Task.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();
  