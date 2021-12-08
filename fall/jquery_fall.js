$(function(){ 
	var S=0;
	var Tag="";
	for(var T1=0; T1<30;T1++){
		var T2=T1 % 4;
		Tag += 
		'<img id=\"f'+
		T1+
		'\" src=\"https://katsumiexe.github.io/pages/fall/img/b'+
		T2+
		'.png\" style=\"position:absolute;top:-20px;\'>';
	}

	if( 
		$('.main_fall').css("positon") != "relative" && 
		$('.main_fall').css("positon") != "absolute" && 
		$('.main_fall').css("positon") != "fixed"){ 
		$('.main_fall').css("positon","relative");
	}
	
	$('.main_fall').append(Tag);
	timerId = setInterval(Fall,400);
	function Fall(){
		S +=1;
		var N=S % 30;
		var Rnd_st=Math.floor(Math.random() * 600);
		var Rnd_ed=Math.floor(Math.random() * 600);
		var Rnd_sp=Math.floor(Math.random() * 6000)+5999;
		var Rnd_ro=Math.floor(Math.random() * 600)+400;
		$('#f'+N).css({'top':'-30px','left':Rnd_st+'px'});
		$('#f'+N).animate({'top':'110vh','left':Rnd_ed+'px'},Rnd_sp);
		$({deg:0}).animate({deg:Rnd_ro}, {
			duration:Rnd_sp,
			progress:function() {
				$('#f'+N).css({
					'transform':'rotate(' + this.deg + 'deg)',
				});
			},
		});
	}
});

