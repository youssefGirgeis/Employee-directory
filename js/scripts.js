const $searchContainer =  $('.search-container'); // selecting search container div
const $gallary = $('#gallery'); // selecting the gallary div using it's id

// appending a form to the search container then, added two childs elements the form.
$searchContainer.append('<form action="#" method="get"></form>');
$('form').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
$('form').append('<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');


$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=ca',
    dataType: 'json',
    success: function(data){
        //console.log(data.results);

        $.each(data.results, function(index, user){
            //console.log(user);
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

$gallary.on('click', function(event){
    $('body').append(`
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                    <h3 id="name" class="modal-name cap">name</h3>
                    <p class="modal-text"></p>
                    <p class="modal-text cap">city</p>
                    <hr>
                    <p class="modal-text">(555) 555-5555</p>
                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                    <p class="modal-text">Birthday: 10/21/2015</p>
            </div>
        </div>
    `);
});