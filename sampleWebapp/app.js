const hamburger=document.querySelector(".hamburgur");
const autoadd=document.querySelector('.autogenerate');
const autonum=autoadd.querySelector('input');
const genBtn=autoadd.querySelector('button');
const delallBtn=autoadd.querySelector('button:last-of-type');
const sidebar=document.querySelector(".sidebar");
const delBtn=document.querySelectorAll('.del');
delallBtn.addEventListener('click',()=>{
    listbox.innerHTML=''
})
genBtn.addEventListener('click',()=>{
    const num=autonum.value;
    for(let i=0;i<num;i++){
        addbutton.click();
    }
})
hamburger.parentElement.addEventListener('click',
()=>{
    
    sidebar.classList.toggle('go-back');
    hamburger.classList.toggle('onclick');
    autoadd.classList.toggle('hide');
})
const addbutton=document.querySelector('#add');
const listItem=document.querySelector('.list-item');
const listbox=document.querySelector('.listbox')
addbutton.addEventListener('click',()=>{
const newList=document.createElement('li');
newList.className='list-item';
newList.innerHTML=`
<input type="text" placeholder="course">
                    <input type="number" placeholder="credit-hours">
                    <button class="del">-</button>
`
listbox.append(newList);
})
listbox.addEventListener('click',(event)=>{
    if(event.target.className=='del'){
        event.target.closest('li').remove();
    }
    
})
