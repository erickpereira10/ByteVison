const header=document.getElementById("header");
const progress=document.getElementById("progress");
const backTop=document.getElementById("backTop");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

function onScroll(){
  const y=window.scrollY;
  header.classList.toggle("scrolled",y>30);
  backTop.classList.toggle("show",y>500);
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max>0?(y/max)*100:0)+"%";
}
window.addEventListener("scroll",onScroll);
onScroll();

menuToggle.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("quoteForm");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const nome=data.get("nome");
  const whats=data.get("whatsapp");
  const projeto=data.get("projeto");
  const mensagem=data.get("mensagem");
  const destino="5519982228520"; // ALTERE AQUI para o WhatsApp da Byte Vision
  const text=`Olá, Byte Vision! Meu nome é ${nome}.%0A%0AWhatsApp: ${whats}%0AProjeto: ${projeto}%0A%0ADetalhes:%0A${mensagem}`;
  window.open(`https://wa.me/${destino}?text=${text}`,"_blank");
});

document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener("click",e=>e.preventDefault()));
