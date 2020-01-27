$(function () {
    $("p").text("It's ready bruv");


    $('<div id = "submitItems" ></div>').appendTo('body');

    $('#btnSubmit').click(function (e) {
        e.preventDefault();
        var submitValue = $('#textInput').val();
        // alert(submitValue);
        let item = $('<ul>' + '* ' + submitValue + '</ul>');
        item.mouseover(function(){
            $(item).css('background-color', 'black');
            $(item).css('border-radius', '20px');
        });

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }

        item.click(function(){
            $(item).css('color', getRandomColor());
        });

        item.dblclick(function() {
            item.remove();
        })


        
        $('#submitItems').append(item);
       
    });

  
    
});



function manage(txt) {
    var btn = document.getElementById('btnSubmit');
    if (textInput.value != '') {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
};
