const nextButton=document.querySelector('.btn-next');
const prevButton=document.querySelector('.btn-prev');
const steps=document.querySelectorAll('.step');
const forms_steps=document.querySelectorAll('.form-step');
let active=1;
nextButton.addEventListener('click',()=>{
    active++
if(active>steps.length){
active=steps.length;
}updateProgress()
}
)
prevButton.addEventListener('click',()=>{
    active--;
if(active<1){
active=1;
}updateProgress()
}
)
const updateProgress=()=>{
    steps.forEach((step,i)=>{
        step.classList.add('active')
        if(i ===(active-1)){
            forms_steps[i].classList.add('active')
        }else{
            step.classList.remove('active');
            forms_steps[i].classList.remove('active')
        }
    })
    //Enable or disable previous value
    if(active===1){
        prevButton.disabled=true;
    }else if(active==steps.length){
        nextButton.disabled=false;
    }else{
        prevButton.disabled=false;
        nextButton.disabled=false;
    }
}