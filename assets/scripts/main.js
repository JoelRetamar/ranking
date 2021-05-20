let close = document.querySelectorAll(".close")

close.forEach(function (close) {
  close.addEventListener("click", function (ev) {
    ev.preventDefault()
    
    let content = document.querySelector(".content")  
    content.classList.remove("animate__animated")  
    content.classList.remove("animate__fadeInDown")  

    content.classList.add("animate__animated")
    content.classList.add("animate__fadeOutUp")

    setTimeout(()=>  {
      location.href = '/'
    }, 600);

    
  })
})

  