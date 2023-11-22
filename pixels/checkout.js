import { Handlers } from "./src/core/models/handlers/handlers"
   const handlers  = new handlers();
  
  const goToMercadoPago = ()=>{
    window.location.replace("https://www.mercadopago.com/mla/checkout/start?pref_id=389")
    };

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
