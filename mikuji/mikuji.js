$(function(){ 
	Tmp_deg=0
	Tmp_deg_add=1

	var Tag="";
	Tag +="<div class=\"mikuji_box_0\">";
	Tag +="<img src=\"https://katsumiexe.github.io/pages/mikuji/img/mikuji.png\" class=\"mikuji_img_0\">";
	Tag +="<img id=\"m0\" src=\"https://katsumiexe.github.io/pages/mikuji/img/mikuji_1.png\" class=\"mikuji_img_1\">";
	Tag +="<img id=\"m1\" src=\"https://katsumiexe.github.io/pages/mikuji/img/mikuji_2.png\" class=\"mikuji_img_1\">";
	Tag +="<img id=\"m2\" src=\"https://katsumiexe.github.io/pages/mikuji/img/mikuji_3.png\" class=\"mikuji_img_1\">";
	Tag +="<img id=\"m3\" src=\"https://katsumiexe.github.io/pages/mikuji/img/mikuji_4.png\" class=\"mikuji_img_1\">";
	Tag +="<img src=\"https://katsumiexe.github.io/pages/mikuji/img/mikuji_t.png\" class=\"mikuji_img_2\">";
	Tag +="</div>";
	Tag +="<div class=\"mikuji_box_cover\"></div>";
	$('.main_mikuji').append(Tag);

	if( 
		$('.main_mikuji').css("position") != "relative" && 
		$('.main_mikuji').css("position") != "absolute" && 
		$('.main_mikuji').css("position") != "fixed"){ 
		$('.main_mikuji').css("position","relative");
	}
console.log($('.main_mikuji').css("position"));

	$('.mikuji_box_0').draggable({
// 		containment: 'parent',
 		drag: function(e, ui) {
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
