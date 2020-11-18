const navToggle = document.querySelector('.nav-toggle');
const sideBar = document.querySelector('.side-nav');
const closeNav = document.querySelector('.close-nav');

//tabs
const tabNavs = document.querySelector('.tab-navs');
const content = document.querySelectorAll('.content');
const tabBtn = document.querySelectorAll('.item');

//faq
const questions = document.querySelectorAll('.question');

//form validation
const contact = document.querySelector('.contact-us');
const email = document.getElementById('.email');
const err = document.querySelector('.error')


navToggle.addEventListener('click',()=>{
 sideBar.classList.toggle('side-toggle');
   navToggle.classList.add('remove');
});
closeNav.addEventListener('click',()=>{
  if(sideBar.classList.contains('side-toggle')){
    sideBar.classList.remove('side-toggle')
  }
  if(navToggle.classList.contains('remove')){
    navToggle.classList.remove('remove');
  }
})

//tabs
tabNavs.addEventListener('click',(e)=>{
  const id = e.target.dataset.id;
  if(id){
    tabBtn.forEach((btn)=>{
      btn.classList.remove('active');
      e.target.classList.add('active')
    })
    content.forEach((article)=>{
      article.classList.remove('active');
    })
    const article = document.getElementById(id);
    article.classList.add('active');
  }
})

//faq
questions.forEach((question)=>{
  const que = question.querySelector('.question-title');
  que.addEventListener('click',()=>{
    questions.forEach((item)=>{
      if(item !== question){
        item.classList.remove(('show'))
      }
    })
  question.classList.toggle('show');
  })
})

//form
contact.addEventListener('click',(e)=>{
  const email = document.getElementById('email');
  const res=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z0-9]{2,5})$/;
  if(!res.test(email.value)){
    email.classList.add('err-msg');
    email.style.border = '1px solid hsl(0, 94%, 66%)';
    err.classList.add('err');
    
  }else{
    email.classList.remove('err-msg');
    email.classList.add('err-msg');
    err.classList.remove('err');
    email.style.border = 'none';
    
  }
  e.preventDefault();
  console.log(email.value)
})