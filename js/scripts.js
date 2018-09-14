const $searchContainer =  $('.search-container'); // selecting search container div
const $gallary = $('#gallery'); // selecting the gallary div using it's id

// appending a form to the search container then, added two childs elements the form.
$searchContainer.append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('form').append('<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');


$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data){
        //console.log(data.results);

        $.each(data.results, function(index, user){
            console.log(user);
            $gallary.append(`
                <div class="card">
                        <div class="card-img-container">
                        <img class="card-img" src="${user.picture.thumbnail}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
                        <p class="card-text">${user.email}</p>
                        <p class="card-text cap">${user.location.city}</p>
                    </div>
                </div>
            `);
        });        
    }
});