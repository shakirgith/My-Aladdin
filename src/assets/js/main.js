// (function() {
//   "use strict";

//     // Preloader
//     $(window).on('load', function() {
//       if ($('#preloader').length) {
//         $('#preloader').delay(100).fadeOut('slow', function() {
//           $(this).remove();
//         });
//       }
//     });
  



// start resend code timer JSS
// var timeLeft = 30;
// var elem = document.getElementById('timer');
// var timerId = setInterval(countdown, 1000);

// function countdown() {
//     if (timeLeft == -1) {
//         clearTimeout(timerId);
//         doSomething();
//     } else {
//         elem.innerHTML = timeLeft + '';
//         timeLeft--;
//     }
// }

window.isMbscDemo = true;

mobiscroll.setOptions({
    locale: mobiscroll.localeEn,  // Specify language like: locale: mobiscroll.localePl or omit setting to use default
    theme: 'ios',                 // Specify theme like: theme: 'ios' or omit setting to use default
    themeVariant: 'light'         // More info about themeVariant: https://docs.mobiscroll.com/5-10-1/javascript/range#opt-themeVariant
});

mobiscroll.datepicker('#demo-one-input', {
    controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-10-1/javascript/range#opt-controls
    select: 'range'               // More info about select: https://docs.mobiscroll.com/5-10-1/javascript/range#methods-select
}); 

mobiscroll.datepicker('#demo-start-end', {
    controls: ['calendar'],       // More info about controls: https://docs.mobiscroll.com/5-10-1/javascript/range#opt-controls
    select: 'range',              // More info about select: https://docs.mobiscroll.com/5-10-1/javascript/range#methods-select
    startInput: '#demo-start',    // More info about startInput: https://docs.mobiscroll.com/5-10-1/javascript/range#opt-startInput
    endInput: '#demo-end'         // More info about endInput: https://docs.mobiscroll.com/5-10-1/javascript/range#opt-endInput
});


  