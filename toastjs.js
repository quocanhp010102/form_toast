
function sussess(title,icon,msg,dur){
    var main=document.querySelector("#toast__msg")
     var toast= document.createElement("div")
    toast.classList.add("toast")
    toast.classList.add(title)
    toast.innerHTML=
    `<div class="toast__icon">
       <i class="${icon}"></i>
      </div>
    <div class="toast__content">
      <h3 class="toast__title">${msg}</h3>
      <p class="toast__msg">quay lai day nao</p>
    </div>
    <div class="toast__close"><i class="bi bi-x-lg"></i></div>`
  main.appendChild(toast)

  setTimeout(function(){
     main.removeChild(toast)
  },3000)
}
var tb=document.querySelectorAll(".form-message")
function action(){
    var dem=0;
    var tb=document.querySelectorAll("input")
    for(let i=0;i<tb.length;i++){
        if(tb[i].value=="")
          {
            dem=0;
            break;
          }else{
            dem=1;
          }
    }
    console.log(dem)
    if(dem==1)
    sussess("toast__susses","bi bi-check-circle-fill","dang ki thanh cong",2000)
    else
    sussess("toast__error","bi bi-exclamation-circle-fill","dang ki that bai",2000)
}
//bi bi-check-circle-fill