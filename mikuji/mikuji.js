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


	$('.main_mikuji').prepend(Tag);

	Base_W=$('.mikuji_box_0').width();
	Base_H=$('.mikuji_box_0').height();

console.log(Base_W);
console.log(Base_H);

	$('.hand').draggable({
 		containment: 'parent',
		drag: function(e, ui) {
			$(this).removeClass('hand_on');

			Box_a=	Math.floor(ui.position.top - Base_H / 2);
			Box_b=	Math.floor(ui.position.left - Base_W / 2);

			Tmp_deg += Tmp_deg_add;
			if(Tmp_deg > 5){
				Tmp_deg_add=Tmp_deg_add*(-1);	
			}

			if(Tmp_deg < -7){
				Tmp_deg_add=Tmp_deg_add*(-1);	
			}
			$('.mikuji_box_0').css({'transform':'rotate('+Tmp_deg+'deg)','left':Box_b,'top':Box_a});
		},

		stop: function( event, ui ) {
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
			$('#m' +Rnd).delay(800).animate({'bottom':'150px'},200);
		}
	});
});
