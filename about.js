window.onload = function() { // после загрузки страницы

	var scrollUp1 = document.getElementById('to_up'); // найти элемент
    var scrollUp2 = document.getElementById('panel_to_up');
    //var hideScroll = document.getElementById('hide_up');
    //var toggleIcon = document.getElementById('toggle_icon');
    //var toggleNav = document.getElementById('toggleNav');

	scrollUp1.onmouseover = function() { // добавить прозрачность
		scrollUp1.style.opacity=0.3;
		scrollUp1.style.filter  = 'alpha(opacity=30)';
        scrollUp2.style.opacity=0.3;
		scrollUp2.style.filter  = 'alpha(opacity=30)';
	};
    /*toggleIcon.onmouseover = function(){
        if($("#toggle_icon").hasClass('glyphicon-menu-hamburger')){
            
            $("#toggle_icon").addClass('glyphicon-chevron-down');
            $("#toggle_icon").removeClass('glyphicon-menu-hamburger'); 
        }
        else{
            alert('aaaa');
        }
    };
    toggleIcon.onmouseout = function(){
        if($("#toggle_icon").hasClass('glyphicon-chevron-up')){
            $("#toggle_icon").removeClass('glyphicon-chevron-down');
            $("#toggle_icon").addClass('glyphicon-menu-hamburger');
        }
    };
    */
	scrollUp1.onmouseout = function() { //убрать прозрачность
		scrollUp1.style.opacity = 0.5;
		scrollUp1.style.filter  = 'alpha(opacity=50)';
        scrollUp2.style.opacity = 0.5;
		scrollUp2.style.filter  = 'alpha(opacity=50)';
	};
    
    scrollUp2.onmouseover = function() { // добавить прозрачность
		scrollUp1.style.opacity=0.3;
		scrollUp1.style.filter  = 'alpha(opacity=30)';
        scrollUp2.style.opacity=0.3;
		scrollUp2.style.filter  = 'alpha(opacity=30)';
	};

	scrollUp2.onmouseout = function() { //убрать прозрачность
		scrollUp1.style.opacity = 0.5;
		scrollUp1.style.filter  = 'alpha(opacity=50)';
        scrollUp2.style.opacity = 0.5;
		scrollUp2.style.filter  = 'alpha(opacity=50)';
	};

	scrollUp1.onclick = function() { //обработка клика
		window.scrollTo(0,0);
	};
    scrollUp2.onclick = function() { //обработка клика
		window.scrollTo(0,0);
	};
    
    /*toggleNav.onclick = function(){
        if($("#toggle_icon").hasClass('glyphicon-chevron-down')){
            $("#toggle_icon").removeClass('glyphicon-chevron-down');
            $("#toggle_icon").addClass('glyphicon-chevron-up');
        }
        else if($("#toggle_icon").hasClass('glyphicon-chevron-up')){
            $("#toggle_icon").removeClass('glyphicon-chevron-up');
            $("#toggle_icon").addClass('glyphicon-chevron-down');
        }
    };*/
    /*
    toggleIcon.onclick = function(){
        if($("#toggle_icon").hasClass('glyphicon-chevron-down')){
            $("#toggle_icon").removeClass('glyphicon-chevron-down');
            $("#toggle_icon").addClass('glyphicon-chevron-up');
        }
        else if($("#toggle_icon").hasClass('glyphicon-chevron-up')){
            $("#toggle_icon").removeClass('glyphicon-chevron-up');
            $("#toggle_icon").addClass('glyphicon-menu-hamburger');
        }
    };
    */
    
    
    
    
    //приховати полоску щоб вернутися наверх
    /*hideScroll.onclick = function() { //обработка клика
        if(scrollUp1.style.display != 'none'){
            scrollUp1.style.display = 'none';
            scrollUp2.style.display = 'none';
            //$("#eye").removeClass("glyphicon-eye-close");
            //$("#eye").addClass("glyphicon-eye-open");
        }
        else if(window.pageYOffset > 0){
            scrollUp1.style.display = 'block';
            scrollUp2.style.display = 'block';
            //$("#eye").addClass("glyphicon-eye-close");
            //$("#eye").removeClass("glyphicon-eye-open");
        }
		
	};*/

// show button

	window.onscroll = function () { // при скролле показывать и прятать блок
		if ( window.pageYOffset > 0 ) {
			scrollUp1.style.display = 'block';
            scrollUp2.style.display = 'block';
            /*hideScroll.style.display = 'block';
            $("#eye").removeClass("glyphicon-eye-open");
            $("#eye").addClass("glyphicon-eye-close");*/
		} else {
			scrollUp1.style.display = 'none';
            scrollUp2.style.display = 'none';
            /*hideScroll.style.display = 'none';
            $("#eye").addClass("glyphicon-eye-open");
            $("#eye").removeClass("glyphicon-eye-close");*/
		}
	};
    
    
};
