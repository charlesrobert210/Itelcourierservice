
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.getElementById('trackForm').addEventListener('submit',e=>{
  e.preventDefault();
  const n=document.getElementById('trackingNumber').value.trim();
  document.getElementById('trackMessage').textContent=n?`Tracking number ${n} received. Live tracking will be connected to the shipment system.`:'Please enter a tracking number.';
});

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('contactMessage').textContent='Thank you. Your request has been received. We will contact you soon.';
  e.target.reset();
});
document.getElementById('year').textContent=new Date().getFullYear();
