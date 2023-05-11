'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const subscription = document.querySelector('#pricing .subscription');
  const duration = document.querySelector('#pricing #change_duration');
  const monthly = ['$19.00', '$39.00', '$99.00',]
  const yearly = ['$190.00', '$390.00', '$990.00',]

  duration.addEventListener('click', () => {
    subscription.classList.toggle('subscription_yearly')
    document.querySelectorAll('.pricing').forEach((pricing, index) => {
      if (document.querySelector('#pricing #check_toggle:checked')) {
        pricing.innerHTML = `<span>${monthly[index]}</span><br>per month`;
      } else {
        pricing.innerHTML = `<span>${yearly[index]}</span><br>per year`;
      }
    });
  })

});