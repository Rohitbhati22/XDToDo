const dark = document.getElementById('dark');
const body = document.getElementById('body');
const nav = document.getElementById('nav');
const navlink = document.getElementsByClassName('nav-link');

if (localStorage.getItem('dark') == null)
{
    localStorage.setItem('dark', false);
    }
let isDark = (localStorage.getItem('dark') === 'true');
  dark.addEventListener('click', ()=>{
    if (isDark)
    {
      nav.classList.remove("nav_dark");
      body.classList.remove("body_dark");
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
      for(var i = 0; i < navlink.length; i++)
      {
          navlink[i].classList.add("nav-link_dark");
        }
}