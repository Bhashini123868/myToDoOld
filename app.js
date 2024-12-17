
console.log(document.getElementById("uList"));


document.getElementById("btnAddTask").addEventListener("click", addTask);
let taskList=[];
let taskListText=[];

function addTask() {
    let txtTask = document.getElementById("txtTask").value;
    taskListText.push(txtTask);
    taskList.push(`<li class="list-group-item">
                       <input class="form-check-input me-1" type="checkbox" value="" id="${txtTask}">
                       <label class="form-check-label stretched-link" for="${txtTask}">${txtTask}</label>
                     </li>`);

    loadTasks();
    clearTxt();
    console.log(taskList);

    for(let i=0; i<taskListText.length; i++){
        console.log(document.getElementById(taskListText[i]).checked); 
        document.getElementById(taskListText[i]).addEventListener("change",function(){
            if(this.checked){
                console.log("Checked");
            }else{
                console.log("unChecked");
            }
        })
    }


}


function loadTasks(){
    let listBody="";
    
    taskList.forEach(task=>{
        listBody+=task;
    });
    document.getElementById("uList").innerHTML=listBody;
}

function clearTxt(){
    document.getElementById("txtTask").value = '';
}

document.getElementById("textField").value;







