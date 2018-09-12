const $searchContainer =  $('.search-container');
$searchContainer.append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('form').append('<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');



// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data){
//         console.log(data.results);
//     }
// });