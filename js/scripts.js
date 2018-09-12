const $searchContainer =  $('.search-container'); // selecting search container div
const $gallary = $('#gallery'); // selecting the gallary div using it's id

// appending a form to the search container then, added two childs elements the form.
$searchContainer.append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('form').append('<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');

$gallary.append('<div class="card"></div>');
$('.card').append('<div class="card-img-container"></div>');
$('.card-img-container').append('<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">');

$gallary.append('<div class="card-info-container"></div>');
$('.card-info-container').append('<h3 id="name" class="card-name cap">first last</h3>');
$('.card-info-container').append('<p class="card-text">email</p>');
$('.card-info-container').append('<p class="card-text cap">city, state</p>');


// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data){
//         console.log(data.results);
//     }
// });