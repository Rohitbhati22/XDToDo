const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');
const task =  document.getElementById('task');
const push = document.getElementById('push');
const tasks_layout = document.getElementById('tasks_layout');
const dark = document.getElementById('dark');
const body = document.getElementById('body');
const nav = document.getElementById('nav');
const newtask = document.getElementById('newtask');
const container = document.getElementsByClassName('container');
const navlink = document.getElementsByClassName('nav-link');

if (localStorage.getItem('dark') == null){
localStorage.setItem('dark', false);
}
let isDark = (localStorage.getItem('dark') === 'true');
let taskNum = localStorage.getItem("task_num");

if (taskNum == null)
{
    localStorage.setItem("task_num", 0);
    taskNum = Number(localStorage.getItem("task_num"));
}
else {
    
    for (let i = 1; i <= taskNum; i++)
    {
        if (localStorage.getItem(i) != null)
        {
            let newChild = '<div id="'+i+'" class="container" draggable="true" ondragstart="drag(event)">  <span class="task_text">' + localStorage.getItem(i) +
            '</span>  </div>';
           tasks_layout.insertAdjacentHTML('beforeend', newChild);
        }
    }
}

menuBtn.addEventListener('click', ()=>
{
    if (menu.style.display == 'none')
    {
        menu.style.display = 'flex';
    }
    else
    {
        menu.style.display = 'none';
    }
});

push.addEventListener('click', ()=>{
    let text = task.value;
    if (text == "")
    {
        alert("Task Is Empty");
    }
    else 
    {
        taskNum = Number(taskNum);
        taskNum += 1;
        localStorage.setItem(taskNum, text)
        let newChild;
        if (isDark)
        {
            newChild = '<div id="'+taskNum+'" class="container container_dark" draggable="true" ondragstart="drag(event)"> <span class="task_text">' + localStorage.getItem(taskNum) + '</span></div>';
        }
        else {
            newChild = '<div id="'+taskNum+'" class="container" draggable="true" ondragstart="drag(event)"> <span class="task_text">' + localStorage.getItem(taskNum) + '</span></div>';
        }
        tasks_layout.insertAdjacentHTML('beforeend', newChild);
        localStorage.setItem("task_num", taskNum);
    }
});

task.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let text = task.value;
        if (text == "")
        {
            alert("Task Is Empty");
        }
        else 
        {
            taskNum = Number(taskNum);
            taskNum += 1;
            localStorage.setItem(taskNum, text);
            let newChild;
            if (isDark)
            {
                newChild = '<div id="'+taskNum+'" class="container container_dark" draggable="true" ondragstart="drag(event)"> <span class="task_text">' + localStorage.getItem(taskNum) + '</span></div>';
            }
            else {
                newChild = '<div id="'+taskNum+'" class="container" draggable="true" ondragstart="drag(event)"> <span class="task_text">' + localStorage.getItem(taskNum) + '</span></div>';
            }
            tasks_layout.insertAdjacentHTML('beforeend', newChild);
            localStorage.setItem("task_num", taskNum);
            task.value = "";
        }
    }
  });

  dark.addEventListener('click', ()=>{
      if (isDark)
      {
        nav.classList.remove("nav_dark");
        body.classList.remove("body_dark");
        newtask.classList.remove("newtask__dark");
        task.classList.remove('input_dark');
        for(var i = 0; i < container.length; i++)
        {
          container[i].classList.remove("container_dark");
          }
          for(var i = 0; i < navlink.length; i++)
          {
              navlink[i].classList.remove("nav-link_dark");
            }
      isDark = false;
      localStorage.setItem('dark', false)
      }
      else
      {
          nav.classList.add("nav_dark");
          body.classList.add("body_dark");
          newtask.classList.add("newtask__dark");
          task.classList.add('input_dark');
          for(var i = 0; i < container.length; i++)
          {
            container[i].classList.add("container_dark");
            }
            for(var i = 0; i < navlink.length; i++)
            {
                navlink[i].classList.add("nav-link_dark");
              }
        isDark = true;
        localStorage.setItem('dark', true)
      }
  });


  if(isDark)
  {
      nav.classList.add("nav_dark");
      body.classList.add("body_dark");
      newtask.classList.add("newtask__dark");
      task.classList.add('input_dark');
      for(var i = 0; i < container.length; i++)
      {
        container[i].classList.add("container_dark");
        }
        for(var i = 0; i < navlink.length; i++)
        {
            navlink[i].classList.add("nav-link_dark");
          }
  }
  
function allowDrop(ev)
{
ev.preventDefault();
}
function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
var el = document.getElementById(data);
localStorage.removeItem(data);
el.parentNode.removeChild(el);
}