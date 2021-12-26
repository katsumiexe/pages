$(function(){ 
$('.main_fall').css({'width':'100vw','min-height':'90vh','overflow':'hidden'});
	var S=0;
	var Tag="";
	var Ht=$('.main_fall').height()+50;
	for(var T1=0; T1<50;T1++){
		var T2=T1 % 4;
		Tag += '<img id=\"f'+T1+'\" src=\"https://katsumiexe.github.io/pages/fall/img/b'+T2+'.png\" class=\"fall\" style=\"position:absolute;top:-5vh;left:'+Math.floor(Math.random() * 60)+20+'vw;\">';
	}
	if( 
		$('.main_fall').css("positon") != "relative" && 
		$('.main_fall').css("positon") != "absolute" && 
		$('.main_fall').css("positon") != "fixed"){ 
		$('.main_fall').css("positon","relative");
	}
	$('.main_fall').append(Tag);
	timerId = setInterval(Fall,200);

	function Fall(){
		S +=1;
		var N=S % 50;
		var Rnd_st=Math.floor(Math.random() * 140)-30;
		var Rnd_ed=Math.floor(Math.random() * 140)-10;
		var Rnd_sp=Math.floor(Math.random() * 16000)+10000;
		var Rnd_ro=Math.floor(Math.random() * 600)+400;

		$('#f'+N).animate({'top':'-2vh','left':Rnd_st+'vw'},0).animate({'top':Ht,'left':Rnd_ed+'vw'},Rnd_sp).animate({'top':'-2vh','left':Rnd_st+'vw'},0);

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


