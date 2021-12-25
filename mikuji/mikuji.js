$(function(){ 
	Tmp_deg=0
	Tmp_deg_add=1
	var Tag="";

/*
	if( 
		$('.main_mikuji').css("position") != "relative" && 
		$('.main_mikuji').css("position") != "absolute" && 
		$('.main_mikuji').css("position") != "fixed"){ 
		$('.main_mikuji').css("position","relative");
	}
*/


	$('.mikuji_box_0').draggable({
 		containment: '.main_mikuji',
		drag: function(e, ui) {
			$('.hand').css('opacity','0.6');

			Tmp_deg += Tmp_deg_add;
			if(Tmp_deg > 5){
				Tmp_deg_add=Tmp_deg_add*(-1);	
			}

			if(Tmp_deg < -7){
				Tmp_deg_add=Tmp_deg_add*(-1);	
			}
			$('.mikuji_box_0').css({'transform':'rotate('+Tmp_deg+'deg)'});
		},

		stop: function( event, ui ) {
			$('.hand').fadeOut(350);

			Tmp=$('.mikuji_img_1').height()*1.5;

			Rnd=Math.floor(Math.random() * 4);
			$('.mikuji_box_cover').show();
			$({deg:Tmp_deg}).delay(200).animate({deg:-150}, {
				duration:500,
				progress:function() {
					$('.mikuji_box_0').css({
						'transform':'rotate(' + this.deg + 'deg)',
					});
				},
			});
			$('#m' +Rnd).delay(800).animate({'bottom':Tmp},400);
			$('.box_0').delay(2000).slideDown(1000);
		}
	});
});




