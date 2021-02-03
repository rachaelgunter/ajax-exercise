"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', (res) => {
      $('#fortune-text').text(res);
    } );

}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
      console.log(res)
      $('#weather-info').text(res.forecast);
      console.log(res.forecast);
    } );
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

let formInputs = {
    'melon-type' : $('#melon-type-field').val(),
    'qty' : $('#qty-field').val()
};

  $.post('/order-melons.json', formInputs, (res) => { 
    $('#order-form').html(res.msg);
    if ('code' === 'ERROR'){
      $('#order-status').addClass("order-error");
    }
  });

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


