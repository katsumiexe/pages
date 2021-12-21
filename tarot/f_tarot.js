var Cd=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
var Rt=[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105];
var cd_cnt=[];
var Tmp_X=[];
var Tmp_Y=[];
var Sei	=[];
var N	=0;
var M	=0;

var Tarot_cd	=[];
var Tarot_rv	=[];

var Tmp=[0,0,0,0,0,0,0];
var CardCnt=10;
var S_G=['rotate(180deg)',''];

var N_R=['逆','正'];

var cd_x=[
["21%","22%","23%","24%","25%","26%","27%","28%","29%","30%","31%","32%","33%","34%","35%","36%","37%","38%","39%","40%","41%","42%","43%","44%","45%","46%","47%","48%","49%","50%","51%","52%","53%","54%","55%","56%","57%","58%","59%","60%","61%","62%","63%","64%","65%","66%","67%","68%","69%","70%","71%","72%","73%","74%","75%","76%","77%","78%","79%","80%","79%","78%","77%","76%","75%","74%","73%","72%","71%","70%","69%","68%","67%","66%","65%","64%","63%","62%","61%","60%","59%","58%","57%","56%","55%","54%","53%","52%","51%","50%","49%","48%","47%","46%","45%","44%","43%","42%","41%","40%","39%","38%","37%","36%","35%","34%","33%","32%","31%","30%","29%","28%","27%","26%","25%","24%","23%","22%","21%","20%"],
["30.8%","31.6%","32.4%","33.2%","34%","34.8%","35.6%","36.4%","37.2%","38%","38.8%","39.6%","40.4%","41.2%","42%","42.8%","43.6%","44.4%","45.2%","46%","46.8%","47.6%","48.4%","49.2%","50%","50.8%","51.6%","52.4%","53.2%","54%","54.8%","55.6%","56.4%","57.2%","58%","58.8%","59.6%","60.4%","61.2%","62%","62.8%","63.6%","64.4%","65.2%","66%","65.2%","64.4%","63.6%","62.8%","62%","61.2%","60.4%","59.6%","58.8%","58%","57.2%","56.4%","55.6%","54.8%","54%","53.2%","52.4%","51.6%","50.8%","50%","49.2%","48.4%","47.6%","46.8%","46%","45.2%","44.4%","43.6%","42.8%","42%","41.2%","40.4%","39.6%","38.8%","38%","37.2%","36.4%","35.6%","34.8%","34%","33.2%","32.4%","31.6%","30.8%","30%"],
["21.2%","22.4%","23.6%","24.8%","26%","27.2%","28.4%","29.6%","30.8%","32%","33.2%","34.4%","35.6%","36.8%","38%","39.2%","40.4%","41.6%","42.8%","44%","45.2%","46.4%","47.6%","48.8%","50%","51.2%","52.4%","53.6%","54.8%","56%","57.2%","58.4%","59.6%","60.8%","62%","63.2%","64.4%","65.6%","66.8%","68%","69.2%","70.4%","71.6%","72.8%","74%","75.2%","76.4%","77.6%","78.8%","80%","78.8%","77.6%","76.4%","75.2%","74%","72.8%","71.6%","70.4%","69.2%","68%","66.8%","65.6%","64.4%","63.2%","62%","60.8%","59.6%","58.4%","57.2%","56%","54.8%","53.6%","52.4%","51.2%","50%","48.8%","47.6%","46.4%","45.2%","44%","42.8%","41.6%","40.4%","39.2%","38%","36.8%","35.6%","34.4%","33.2%","32%","30.8%","29.6%","28.4%","27.2%","26%","24.8%","23.6%","22.4%","21.2%","20%"],
["37%","38%","39%","40%","41%","42%","43%","44%","45%","46%","47%","48%","49%","50%","51%","52%","53%","54%","55%","56%","57%","58%","59%","60%","61%","62%","63%","64%","65%","66%","65%","64%","63%","62%","61%","60%","59%","58%","57%","56%","55%","54%","53%","52%","51%","50%","49%","48%","47%","46%","45%","44%","43%","42%","41%","40%","39%","38%","37%","36%"],
["36.6%","37.2%","37.8%","38.4%","39%","39.6%","40.2%","40.8%","41.4%","42%","42.6%","43.2%","43.8%","44.4%","45%","45.6%","46.2%","46.8%","47.4%","48%","48.6%","49.2%","49.8%","50.4%","51%","51.6%","52.2%","52.8%","53.4%","54%","54.6%","55.2%","55.8%","56.4%","57%","57.6%","58.2%","58.8%","59.4%","60%","60.6%","61.2%","61.8%","62.4%","63%","63.6%","64.2%","64.8%","64.2%","63.6%","63%","62.4%","61.8%","61.2%","60.6%","60%","59.4%","58.8%","58.2%","57.6%","57%","56.4%","55.8%","55.2%","54.6%","54%","53.4%","52.8%","52.2%","51.6%","51%","50.4%","49.8%","49.2%","48.6%","48%","47.4%","46.8%","46.2%","45.6%","45%","44.4%","43.8%","43.2%","42.6%","42%","41.4%","40.8%","40.2%","39.6%","39%","38.4%","37.8%","37.2%","36.6%","36%"],
["21%","22%","23%","24%","25%","26%","27%","28%","29%","30%","31%","32%","33%","34%","35%","36%","37%","38%","39%","40%","41%","42%","43%","44%","45%","46%","47%","48%","49%","50%","51%","52%","53%","54%","55%","56%","57%","58%","59%","60%","61%","62%","63%","64%","65%","66%","67%","68%","69%","70%","71%","72%","73%","74%","75%","76%","75%","74%","73%","72%","71%","70%","69%","68%","67%","66%","65%","64%","63%","62%","61%","60%","59%","58%","57%","56%","55%","54%","53%","52%","51%","50%","49%","48%","47%","46%","45%","44%","43%","42%","41%","40%","39%","38%","37%","36%","35%","34%","33%","32%","31%","30%","29%","28%","27%","26%","25%","24%","23%","22%","21%","20%"],
["21.4%","22.8%","24.2%","25.6%","27%","28.4%","29.8%","31.2%","32.6%","34%","35.4%","36.8%","38.2%","39.6%","41%","42.4%","43.8%","45.2%","46.6%","48%","49.4%","50.8%","52.2%","53.6%","55%","56.4%","57.8%","59.2%","60.6%","62%","63.4%","64.8%","66.2%","67.6%","69%","70.4%","71.8%","73.2%","74.6%","76%","77.4%","78.8%","80.2%","81.6%","80.2%","78.8%","77.4%","76%","74.6%","73.2%","71.8%","70.4%","69%","67.6%","66.2%","64.8%","63.4%","62%","60.6%","59.2%","57.8%","56.4%","55%","53.6%","52.2%","50.8%","49.4%","48%","46.6%","45.2%","43.8%","42.4%","41%","39.6%","38.2%","36.8%","35.4%","34%","32.6%","31.2%","29.8%","28.4%","27%","25.6%","24.2%","22.8%","21.4%","20%"],
]

var cd_y=[
["41.75%","41%","40.25%","39.5%","38.75%","38%","37.25%","36.5%","35.75%","35%","34.25%","33.5%","32.75%","32%","31.25%","30.5%","29.75%","29%","28.25%","27.5%","26.75%","26%","25.25%","24.5%","23.75%","23%","22.25%","21.5%","20.75%","20%","20.75%","21.5%","22.25%","23%","23.75%","24.5%","25.25%","26%","26.75%","27.5%","28.25%","29%","29.75%","30.5%","31.25%","32%","32.75%","33.5%","34.25%","35%","35.75%","36.5%","37.25%","38%","38.75%","39.5%","40.25%","41%","41.75%","42.5%","43.25%","44%","44.75%","45.5%","46.25%","47%","47.75%","48.5%","49.25%","50%","50.75%","51.5%","52.25%","53%","53.75%","54.5%","55.25%","56%","56.75%","57.5%","58.25%","59%","59.75%","60.5%","61.25%","62%","62.75%","63.5%","64.25%","65%","64.25%","63.5%","62.75%","62%","61.25%","60.5%","59.75%","59%","58.25%","57.5%","56.75%","56%","55.25%","54.5%","53.75%","53%","52.25%","51.5%","50.75%","50%","49.25%","48.5%","47.75%","47%","46.25%","45.5%","44.75%","44%","43.25%","42.5%"],
["43%","42.25%","41.5%","40.75%","40%","39.25%","38.5%","37.75%","37%","36.25%","35.5%","34.75%","34%","33.25%","32.5%","31.75%","31%","30.25%","29.5%","28.75%","28%","27.25%","26.5%","27.25%","28%","28.75%","29.5%","30.25%","31%","31.75%","32.5%","33.25%","34%","34.75%","35.5%","36.25%","37%","37.75%","38.5%","39.25%","40%","40.75%","41.5%","42.25%","43%","43.75%","44.5%","45.25%","46%","46.75%","47.5%","48.25%","49%","49.75%","50.5%","51.25%","52%","52.75%","53.5%","54.25%","55%","55.75%","56.5%","57.25%","58%","58.75%","59.5%","60.25%","59.5%","58.75%","58%","57.25%","56.5%","55.75%","55%","54.25%","53.5%","52.75%","52%","51.25%","50.5%","49.75%","49%","48.25%","47.5%","46.75%","46%","45.25%","44.5%","43.75%"],
["41.5%","40.5%","39.5%","38.5%","37.5%","36.5%","35.5%","34.5%","33.5%","32.5%","31.5%","30.5%","29.5%","28.5%","27.5%","26.5%","25.5%","24.5%","23.5%","22.5%","21.5%","20.5%","19.5%","18.5%","17.5%","18.5%","19.5%","20.5%","21.5%","22.5%","23.5%","24.5%","25.5%","26.5%","27.5%","28.5%","29.5%","30.5%","31.5%","32.5%","33.5%","34.5%","35.5%","36.5%","37.5%","38.5%","39.5%","40.5%","41.5%","42.5%","43.5%","44.5%","45.5%","46.5%","47.5%","48.5%","49.5%","50.5%","51.5%","52.5%","53.5%","54.5%","55.5%","56.5%","57.5%","58.5%","59.5%","60.5%","61.5%","62.5%","63.5%","64.5%","65.5%","66.5%","67.5%","66.5%","65.5%","64.5%","63.5%","62.5%","61.5%","60.5%","59.5%","58.5%","57.5%","56.5%","55.5%","54.5%","53.5%","52.5%","51.5%","50.5%","49.5%","48.5%","47.5%","46.5%","45.5%","44.5%","43.5%","42.5%"],
["41.75%","41%","40.25%","39.5%","38.75%","38%","37.25%","36.5%","35.75%","35%","34.25%","33.5%","32.75%","32%","31.25%","32%","32.75%","33.5%","34.25%","35%","35.75%","36.5%","37.25%","38%","38.75%","39.5%","40.25%","41%","41.75%","42.5%","43.25%","44%","44.75%","45.5%","46.25%","47%","47.75%","48.5%","49.25%","50%","50.75%","51.5%","52.25%","53%","53.75%","53%","52.25%","51.5%","50.75%","50%","49.25%","48.5%","47.75%","47%","46.25%","45.5%","44.75%","44%","43.25%","42.5%"],
["42%","41.5%","41%","40.5%","40%","39.5%","39%","38.5%","38%","37.5%","37%","36.5%","36%","35.5%","35%","34.5%","34%","33.5%","33%","32.5%","32%","31.5%","31%","30.5%","31%","31.5%","32%","32.5%","33%","33.5%","34%","34.5%","35%","35.5%","36%","36.5%","37%","37.5%","38%","38.5%","39%","39.5%","40%","40.5%","41%","41.5%","42%","42.5%","43%","43.5%","44%","44.5%","45%","45.5%","46%","46.5%","47%","47.5%","48%","48.5%","49%","49.5%","50%","50.5%","51%","51.5%","52%","52.5%","53%","53.5%","54%","54.5%","54%","53.5%","53%","52.5%","52%","51.5%","51%","50.5%","50%","49.5%","49%","48.5%","48%","47.5%","47%","46.5%","46%","45.5%","45%","44.5%","44%","43.5%","43%","42.5%"],
["41.75%","41%","40.25%","39.5%","38.75%","38%","37.25%","36.5%","35.75%","35%","34.25%","33.5%","32.75%","32%","31.25%","30.5%","29.75%","29%","28.25%","27.5%","26.75%","26%","25.25%","24.5%","23.75%","23%","22.25%","21.5%","22.25%","23%","23.75%","24.5%","25.25%","26%","26.75%","27.5%","28.25%","29%","29.75%","30.5%","31.25%","32%","32.75%","33.5%","34.25%","35%","35.75%","36.5%","37.25%","38%","38.75%","39.5%","40.25%","41%","41.75%","42.5%","43.25%","44%","44.75%","45.5%","46.25%","47%","47.75%","48.5%","49.25%","50%","50.75%","51.5%","52.25%","53%","53.75%","54.5%","55.25%","56%","56.75%","57.5%","58.25%","59%","59.75%","60.5%","61.25%","62%","62.75%","63.5%","62.75%","62%","61.25%","60.5%","59.75%","59%","58.25%","57.5%","56.75%","56%","55.25%","54.5%","53.75%","53%","52.25%","51.5%","50.75%","50%","49.25%","48.5%","47.75%","47%","46.25%","45.5%","44.75%","44%","43.25%","42.5%"],
["41.25%","40%","38.75%","37.5%","36.25%","35%","33.75%","32.5%","31.25%","30%","28.75%","27.5%","26.25%","25%","23.75%","22.5%","21.25%","20%","18.75%","17.5%","16.25%","15%","16.25%","17.5%","18.75%","20%","21.25%","22.5%","23.75%","25%","26.25%","27.5%","28.75%","30%","31.25%","32.5%","33.75%","35%","36.25%","37.5%","38.75%","40%","41.25%","42.5%","43.75%","45%","46.25%","47.5%","48.75%","50%","51.25%","52.5%","53.75%","55%","56.25%","57.5%","58.75%","60%","61.25%","62.5%","63.75%","65%","66.25%","67.5%","68.75%","70%","68.75%","67.5%","66.25%","65%","63.75%","62.5%","61.25%","60%","58.75%","57.5%","56.25%","55%","53.75%","52.5%","51.25%","50%","48.75%","47.5%","46.25%","45%","43.75%","42.5%"],
]

function T_shuffle(n){
	var N2=n % 7;
	Tmp[n]+=n%2+1;
	if(Tmp[n]>cd_cnt[n2]){
		Tmp[n]=0;
	}	

	Shuffle_r-=n % 3+1;
	if(Shuffle_r<-359){
		Shuffle_r=0;
	}

	Shuffle_x=cd_x[N2][Tmp[n]];			
	Shuffle_y=cd_y[N2][Tmp[n]];			

	return(Shuffle_x,Shuffle_y,Shuffle_r);
}



