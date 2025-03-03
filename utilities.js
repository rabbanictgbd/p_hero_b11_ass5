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
});

document.getElementById("discover").addEventListener("click", function(){
    window.location.href="blog.html";
});
document.getElementById("btn-back").addEventListener("click", function(){
    window.location.href="index.html";
});
