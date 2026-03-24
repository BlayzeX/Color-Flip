const buttons = document.querySelectorAll('.color-btn');

buttons.forEach(btn =>{
    btn.addEventListener('click', function(){
        buttons.forEach(b => b.classList.remove('active'));
        this.classList.toggle('active');
    });
});
document.getElementById('flipButton').addEventListener('click', function(){
    const activeBtn = document.querySelector('.color-btn.active');
    if(activeBtn){
        document.body.style.backgroundColor = activeBtn.id;
    }
});
