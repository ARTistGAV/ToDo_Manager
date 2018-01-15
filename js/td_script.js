/* var td_newTask;
var Andrew = { 
    td_name = 7; 
} */
var td_User = { 
    name:"Андрей",
    age:28,
    td_tasks:[1,24,65]
 };
var nameAndrew = "Андрей";
function td_createTask() {
    td_newTask = prompt('Введите название задачи:', " ");
    td_User.td_tasks.push(td_newTask);
    alert("Задача добавлена!");
    alert(td_User.td_tasks);
}


function td_Hello() {
    alert("Здравствуйте, " + td_User.name + "!");
}