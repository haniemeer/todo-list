alert("hello write your todays plan")
window.addEventListener('load',()=>{
    const form=document.querySelector("#new-task-form")
    const input=document.querySelector("#new-task-input")
    const list_el=document.querySelector(".tasks")
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
       
        if(!task){
            alert("Please fill out the input.");
            return;
        }
        const task_el=document.createElement("div")
        task_el.classList.add("task")
        const task_cont=document.createElement("div")
        task_cont.classList.add("content")
        task_el.appendChild("task_cont");
        
        const task_input_el=document.createElement("input")
        task_input_el.type="text";
        task_input_el.classList.add("text")
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly")
        task_cont.appendChild(task_input_el)
        const actions_el=document.createElement("div")
        actions_el.classList.add("actions");
        task_cont.appendChild(actions_el)
           task_cont.appendChild(task_input_el)
        const edit_el=document.createElement("button")
        edit_el.classList.add("edit");
        
        const delete_el=document.createElement("button")
        delete_el.classList.add("delete");
        actions_el.appendChild(edit_el);
        actions_el.appendChild(delete_el);

    edit_el.addEventListener("click",()=>{
   if(edit_el.innerText.toLowerCase()=="edit"){
    task_input_el.focus();
    task_input_el.removeAttribute("readonly")
    task_input_el.innerText="SAVE";
    
   }else{
    task_input_el.setAttribute("readonly","readonly")
    edit_el.innerText="edit"
   }

 })
 delete_el.addEventListener("click",()=>{
   list_el.replaceChild(task_el)
 })
 list_el.appendChild(task_el)
 task_el.appendChild(actions_el)
 input.value=""
    })
    
})