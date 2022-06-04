const form = document.querySelector('form')
const btn1 = document.querySelector('#number1');
const btn2 = document.querySelector('#number2');
const btn3 = document.querySelector('#number3');
const btn4 = document.querySelector('#number4');
const btn5 = document.querySelector('#number5');


    btn1.addEventListener('click',() => {
      form.addEventListener('submit',(e) => {
          e.preventDefault();
          window.location.href=`thanks.html?ratingSelected=${btn1.value}`
      })
    })

    btn2.addEventListener('click',() => {
        form.addEventListener('submit',(e) => {
            e.preventDefault();
            window.location.href=`thanks.html?ratingSelected=${btn2.value}`
        })
      })

      
      btn3.addEventListener('click',() => {
        form.addEventListener('submit',(e) => {
            e.preventDefault();
            window.location.href=`thanks.html?ratingSelected=${btn3.value}`
        })
      })

      
      btn4.addEventListener('click',() => {
        form.addEventListener('submit',(e) => {
            e.preventDefault();
            window.location.href=`thanks.html?ratingSelected=${btn4.value}`
        })
      })

      
      btn5.addEventListener('click',() => {
        form.addEventListener('submit',(e) => {
            e.preventDefault();
            window.location.href=`thanks.html?ratingSelected=${btn5.value}`
        })
      })
  