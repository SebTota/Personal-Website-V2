$(function() {
    $('.terminal').on('click', function(){
        $('#input').focus();
    });

    $('#input').on('keydown',function search(e) {
        if(e.keyCode == 13) {
            let input = $(this).val();
            // append your output to the history,
            // here I just append the input
            let event = document.createElement("p");
            event.textContent = ">>>  " + input;
            document.getElementById('history').appendChild(event);

            if (input === 'clr' || input === 'clear') {
                document.getElementById('history').innerHTML = "";
            }


            // you can change the path if you want
            // crappy implementation here, but you get the idea
            if($(this).val().substring(0, 3) === 'cd '){
                $('#path').html($(this).val().substring(3)+'&nbsp;>&nbsp;');
            }

            // clear the input
            $('#input').val('');

            var objDiv = document.getElementsByClassName("terminal")[0];
            objDiv.scrollTop = objDiv.scrollHeight;

        }
    });
});

/*
<div style="height: 100vh;">
    <div id="intro-container" class="container">
        <p class="intro-name">Sebastian Tota</p>


        <div class="row mt-3 mb-3" style="height: 100%">
            <div style="height: 95%; width: 100%;">
                <div style="height: 600px;">
                    <div class="terminal">
                        <div id="history">
                        </div>
                        <div class="line">
                            <span id="path">c:/&nbsp;>&nbsp;</span>
                            <input type="text" id="input">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

 */