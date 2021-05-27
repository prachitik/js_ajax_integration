$('#search').keyup(function() {
    $.getJSON('data.json', function(data){
        var serachField = $('#search').val();
        var exp = new RegExp(serachField, 'i');
        var out = '<ul class="searchResults">';
        $.each(data, function(k, v){
            if (v.name .search(exp) != -1 || v.profession .search(exp) != -1){
                out +=  '<li>';
            out += '<h2>' + v.name + '</h2>' ;
            out += '<img src="images/' + v.image + '.jpeg" alt = "' + v.name + '"/>';
            out += '<p>' + v.profession + '</p>';
            out += '</li>';
            } 
        });
        out += '</ul>';
        $('#update').html(out);
    })
});
