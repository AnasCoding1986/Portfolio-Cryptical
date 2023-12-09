// ============Typing Animation============
var typed = new Typed('.typing',{
    strings:[' ', 'Investor', 'Freelancer', 'Financier'],
    typeSpeed:100,
    backSpeed:70,
    loop:true
})

const asideAn = document.querySelectorAll(".aside-a");

asideAn.forEach(asideA=>{
    asideA.addEventListener('click', function () {
        asideAn.forEach(asideA => asideA.classList.remove('active'));
        this.classList.add('active'); 
    });
});

// let buttons = document.querySelectorAll('.btn');
//   console.log(buttons);
//   buttons.forEach(button => {
//   button.addEventListener('click', function () {
//       buttons.forEach(btn => btn.classList.remove('active'));
//       this.classList.add('active');        
//   });
// });