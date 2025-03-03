// functions.......................
// function getById (id){
//     document.getElementById(id)
// }

// implement..........................
document.getElementById("btn-1").addEventListener("click", function(event){
    
    alert("Board updated successfully")
   let taskValue= document.getElementById("task-value")   
    const taskValueUpdate= parseInt(taskValue.innerText)-1 
    taskValue.innerText= taskValueUpdate
   let noticeValue= document.getElementById("notice-value")   
    const noticeValueUpdate= parseInt(noticeValue.innerText)+1 
    noticeValue.innerText= noticeValueUpdate
    event.target.disabled = true 
    event.target.style.backgroundColor= "gray" 
     const history= document.getElementById("history")
     const p= document.createElement("p")
     const historyText= "you completed one task"
     p.innerText= historyText
     history.appendChild(p)
})
document.getElementById("btn-2").addEventListener("click", function(event){
    
    alert("Board updated successfully")
   let taskValue= document.getElementById("task-value")   
    const taskValueUpdate= parseInt(taskValue.innerText)-1 
    taskValue.innerText= taskValueUpdate
   let noticeValue= document.getElementById("notice-value")   
    const noticeValueUpdate= parseInt(noticeValue.innerText)+1 
    noticeValue.innerText= noticeValueUpdate
    event.target.disabled = true  
    event.target.style.backgroundColor= "gray" 
     const history= document.getElementById("history")
     const p= document.createElement("p")
     const historyText= "you completed one task"
     p.innerText= historyText
     history.appendChild(p)
})
document.getElementById("btn-3").addEventListener("click", function(event){
    
    alert("Board updated successfully")
   let taskValue= document.getElementById("task-value")   
    const taskValueUpdate= parseInt(taskValue.innerText)-1 
    taskValue.innerText= taskValueUpdate
   let noticeValue= document.getElementById("notice-value")   
    const noticeValueUpdate= parseInt(noticeValue.innerText)+1 
    noticeValue.innerText= noticeValueUpdate
    event.target.disabled = true
    event.target.style.backgroundColor= "gray" 
     const history= document.getElementById("history")
     const p= document.createElement("p")
     const historyText= "you completed one task"
     p.innerText= historyText
     history.appendChild(p)  
})
document.getElementById("btn-4").addEventListener("click", function(event){
    
    alert("Board updated successfully")
   let taskValue= document.getElementById("task-value")   
    const taskValueUpdate= parseInt(taskValue.innerText)-1 
    taskValue.innerText= taskValueUpdate
   let noticeValue= document.getElementById("notice-value")   
    const noticeValueUpdate= parseInt(noticeValue.innerText)+1 
    noticeValue.innerText= noticeValueUpdate
    event.target.disabled = true  
    event.target.style.backgroundColor= "gray" 
     const history= document.getElementById("history")
     const p= document.createElement("p")
     const historyText= "you completed one task"
     p.innerText= historyText
     history.appendChild(p)
})
document.getElementById("btn-5").addEventListener("click", function(event){
    
    alert("Board updated successfully")
   let taskValue= document.getElementById("task-value")   
    const taskValueUpdate= parseInt(taskValue.innerText)-1 
    taskValue.innerText= taskValueUpdate
   let noticeValue= document.getElementById("notice-value")   
    const noticeValueUpdate= parseInt(noticeValue.innerText)+1 
    noticeValue.innerText= noticeValueUpdate
    event.target.disabled = true 
    event.target.style.backgroundColor= "gray" 
     const history= document.getElementById("history")
     const p= document.createElement("p")
     const historyText= "you completed one task"
     p.innerText= historyText
     history.appendChild(p) 
})
document.getElementById("btn-6").addEventListener("click", function(event){
    
    alert("Board updated successfully")
   let taskValue= document.getElementById("task-value")   
    const taskValueUpdate= parseInt(taskValue.innerText)-1 
    taskValue.innerText= taskValueUpdate
   let noticeValue= document.getElementById("notice-value")   
    const noticeValueUpdate= parseInt(noticeValue.innerText)+1 
    noticeValue.innerText= noticeValueUpdate
    event.target.disabled = true  
    event.target.style.backgroundColor= "gray" 
     const history= document.getElementById("history")
     const p= document.createElement("p")
     const historyText= "you completed one task", date();
     p.innerText= historyText
     history.appendChild(p)
});

document.getElementById("discover").addEventListener("click", function(){
    window.location.href="blog.html";
});

document.getElementById("btn-clean").addEventListener("click", function(){
    const history= document.getElementById("history")
    history.innerHTML= " "
    history.innerText= " "
    
})
let taskValue= document.getElementById("task-value")
if(taskValue.innerText==0){
    alert("you have completed all the tasks!!")
} alert("not com")

console.log(taskValue.innerText)