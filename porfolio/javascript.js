console.log("Script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hambrg').addEventListener("click",()=>{
    document.querySelector('.leftbar').classList.toggle('leftbargo');
    if(document.querySelector('.leftbar').classList.contains('leftbargo')){
        document.querySelector('.ham').style.display="inline"
        document.querySelector('.cross').style.display="none"
    }
    else{
        document.querySelector('.ham').style.display="none"
        setTimeout(() => {
            document.querySelector('.cross').style.display="inline"
        }, 300);
        
    }
})
