const form = document.getElementById('loadstring') 

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

 const loadstring = () => {
    document.getElementById("output").value = `loadstring(game:HttpGet("${input_link.value}",true))()`
    splitbee.track("Loadstring Generated")
    copy()
    }

 function copy() {
     var copyText = document.getElementById("output");
     copyText.select();
     document.execCommand("copy");
     Swal.fire({
         title: 'Copied!',
         text: 'The output has been copied to your clipboard.',
         icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            toast: true,  
            footer: 'Thank you for using this tool!',
            onBeforeOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
                }, 100)
            },
        })
 }

 function changelog() {
    Swal.fire({
           title: 'Changelog',
           text: '4-1-2022: Published v2 Stable Build, v1 is now depreciated and will not be receiving any more fixes or updates.',
           icon: 'info',
           showConfirmButton: false,
           toast: true,
           allowEscapeKey: false,
           footer: '<a href="https://github.com/MattLawz/loadstringer/wiki#the-offical-changelog" target="_blank">View Past Changelogs</a>',
           showCloseButton: true,
           position: 'bottom-start',
    })
}

