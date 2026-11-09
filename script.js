const btn=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
if(btn&&nav){
  const set=o=>{nav.classList.toggle("is-open",o);btn.setAttribute("aria-expanded",String(o));btn.textContent=o?"×":"☰";btn.setAttribute("aria-label",o?"Zamknij menu":"Otwórz menu")};
  btn.addEventListener("click",()=>set(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>set(false)));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
}
const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();

document.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>document.getElementById(b.dataset.open).showModal()));
document.querySelectorAll(".obit-dialog").forEach(d=>{d.addEventListener("click",e=>{if(e.target===d||e.target.hasAttribute("data-close"))d.close()})});
