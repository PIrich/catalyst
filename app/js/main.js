let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
        clearInterval(stateCheck);

        var search_buttons = document.getElementsByClassName('search__button');
        var search_inputs = document.getElementsByClassName('search__input');
        var headers = document.getElementsByTagName('header');
        var header_icon = document.getElementById('header__icon');
        var cache = document.getElementById('site-cache');
        var i = 0;

        function search(e) {
            var input = e.value;
            console.log(input);
            window.location.href = ('https://predictiveindex.force.com/knowledgebase/s/search/All/Home/' + input);
        }

        let iconCheck = setInterval(() => {
            if(header_icon) {
                clearInterval(iconCheck); 
                header_icon.addEventListener('click', function(e){
                    e.preventDefault();
                    document.body.classList.toggle('with--sidebar');
                    document.getElementById('nav-icon1').classList.toggle('open');
                });
            }
        }, 100);


        
        if(cache) {
            cache.addEventListener('click', function(e){
                document.body.classList.remove('with--sidebar');
                document.getElementById('nav-icon1').classList.remove('open');
            });
        }

        for (i = 0; i < search_buttons.length; i++) {
            search_buttons[i].addEventListener("click", function(e) {
                search(this.previousSibling);
            });
        }


        for (i = 0; i < search_inputs.length; i++) {
            search_inputs[i].addEventListener("keydown", function(e) {
                if (e.keyCode === 13) {
                    search(this);
                }
            });
        }

        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 1
            if (distanceY > shrinkOn) {
                for (i = 0; i < headers.length; i++) {
                    headers[i].classList.add('smaller');
                    document.body.classList.add('header--smaller');
                }
            } else {
                for (i = 0; i < headers.length; i++) {
                    if (headers[i].classList.contains('smaller')) {
                        headers[i].classList.remove('smaller');
                        document.body.classList.remove('header--smaller');
                    }
                }
            }
        });
    }
}, 100);