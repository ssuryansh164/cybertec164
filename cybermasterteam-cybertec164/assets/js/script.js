function login() {
  $(".coupled.modal").modal({
    allowMultiple: false,
  });
  // attach events to buttons
  $(".second.modal").modal("attach events", ".first.modal .register");
  // show first now
  $(".first.modal").modal("show");
}

function register() {
  $(".second.modal").modal("show");
}

$(document).ready(function () {
  // create sidebar and attach to menu open
  $(".ui.sidebar").sidebar("attach events", ".toc.item");
});

$(".ui.accordion").accordion();

$(".special.cards .image").dimmer({
  on: "hover",
}); 


//chapter js
const chapter = document.querySelectorAll('.chapter');

function accordion(e){
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else{
        for(i=0; i < chapter.length; i++){
          chapter[i].classList.remove('active');
        }
            this.classList.add('active');
        }
}
for(i = 0; i < chapter.length; i++ ){
    chapter[i].addEventListener('click', accordion);
}
