$(document).ready(function() {
// se crea una variable que almacena keys y names para recorrer la data :
  var districts = [
    {name: 'Miraflores',
	  	key: 'MIRAFLORES'},
	  {name: 'Santiago de Surco',
	  key: 'SURCO'},
  ];
  // funcion que agrega la longitud del array que contiene los restaurantes a districts
  $.each(districts, function getRestaurants(i) {
	 var keys = Object.keys(data[districts[i].key]);
	 districts[i].number = keys.length;
  });

  // funcion que devuelve el nombre de los distritos en un array:
  function arrayOfKeys() {
	  var arr = [];
    $.each(districts, function getKeys(i) {
		  arr.push(districts[i].key);
    });
    return arr;
  };

  // encerarndo la funcion en una variable :
  var keys = arrayOfKeys();

  // funcion que obtiene los nombres de los restaurantes:
  function getRestaurants() {
    var restaurants = [];
    $.each(keys, function getNames(i) {
		  var temp = data[keys[i]];
	  $.each(temp, function prueba(j) {
		   restaurants.push(temp[j].name);
		 });
	  });
	  return restaurants;
  }

  // funcion que obtiene las imagenes de los restaurantes
  $.each(keys, function getNames(i) {
	  var temp = data[keys[i]];
    $.each(temp, function getImages(j) {
      var tags = '<div class = "bg-prueba item-js  imagenes-js padding-10 col-xs-6 col-sm-4" data-hour="' + temp[j].openingHours + '" data-average="' + temp[j].averageCost + '"data-rating="' + temp[j].rating + '"data-delivery="' + temp[j].delivery + '"' + ' id="' + temp[j].name + '">' +
'<div class="  flex-js" data-toggle="modal" data-target="#modal"><img class="image-food-size prueba-busqueda-js mouse-over-js " src=" ' + temp[j].image + '"' + 'id="' + temp[j].name + '"' + '">'
	 + ' <div class="envelope-img hover-js visibility-hidden"><i class="fa fa-cutlery icon-food"></i><p class="text-center text-size" > ' + temp[j].name + '</p> </div></div></div>';
		  $('.container-image-js').append(tags);
	  });
  });

  // obteniendo input :
  var $searchInput = $('.input-js');
  // asociamos el evento keyUp :
  $($searchInput).on('keyup', function() {
    var name = $(this).val().toLowerCase();
    $('.imagenes-js').hide();
    $('.imagenes-js').each(function() {
	  if ($(this).attr('id').toLowerCase().indexOf(name) !== -1) {
		    $(this).show();
	  }
	  });
  });
  // mouse over
  $('.flex-js').on('mouseover', function() {
    $(this).children().last().removeClass('visibility-hidden ');
  });
  $('.flex-js').on('mouseout', function() {
    $(this).children().last().addClass('visibility-hidden ');
  });
  // modal
  $('.flex-js').on('click', function() {
    var title = $('.title-modal-js');
	  var openingHour = $('.opening-hours-js');
	  var average = $('.average-cost-js');
  	var deliveryService = $('.icon-js');
  	var rating = $('.rating-js');
  	var keys = arrayOfKeys();

    $(title).text($(this).children().first().attr('id'));
    $(openingHour).text($(this).parent().data('hour'));
    $(average).text($(this).parent().data('average'));
    $(rating).text($(this).parent().data('rating'));
    if (event) {
	  if ($(this).parent().data('delivery') === true) {
		  deliveryService.css('color', 'green');
	   } else if ($(this).parent().data('delivery') === false) {
		    deliveryService.css('color', 'gray');
	    }
    }
  });
  
  $('.styles-exit').on('click', () => {
    window.location.href = '../index.html';
  });
});
