/* http://www.menucool.com */


#sliderFrame {positionrelative;width940px;margin 3 auto;} remove the margin0 auto; if you want to align the whole slider to the left side

#ribbon {width111px;height111px;positionabsolute;top-4px;left-4px;backgroundurl(ribbon.png) no-repeat;z-index7;}
        
#slider {
    width940px;height306px; Make it the same size as your images 
	background#fff url(loading.gif) no-repeat 50% 50%;
	positionrelative;
	margin0 auto;make the image slider center-aligned 
    box-shadow 0px 1px 5px #999999;
}
#slider img {
	positionabsolute;
	bordernone;
	displaynone;
}

 the link style (if an image is wrapped in a link) 
#slider a.imgLink {
	z-index2;
	displaynone;positionabsolute;
	top0px;left0px;border0;padding0;margin0;
	width100%;height100%;
}

 Caption styles 
div.mc-caption-bg, div.mc-caption-bg2 {
	positionabsolute;
	width100%;
	heightauto;
	padding0;
	left0px; if the caption needs to be aligned from right, specify by right instead of left. i.e. right20px;
	bottom10px;if the caption needs to be aligned from top, specify by top instead of bottom. i.e. top150px;
	z-index3;
	overflowhidden;
	font-size 0;
}
div.mc-caption-bg {
	background-colorblack;
}
div.mc-caption {
	font bold 14px20px Arial;
	color#eee;
	z-index4;
	padding10px 0;Adding a padding-left or padding-right here will make the caption area wider than its background. Sometimes you may need to define its width again here to keep it the same width as its background area (div.mc-caption-bg).
	text-aligncenter;
}
div.mc-caption a {
	color#FB0;
}
div.mc-caption ahover {
	color#DA0;
}


 ------ built-in navigation bullets wrapper ------
div.navBulletsWrapper  {
	top320px; left280px;  Its position is relative to the #slider 
	width150px;
	backgroundnone;
	padding-left20px;
	positionrelative;
	z-index5;
	cursorpointer;
}

 each bullet 
div.navBulletsWrapper div 
{
    width11px; height11px;
    backgroundtransparent url(bullet.png) no-repeat 0 0;
    floatleft;overflowhidden;vertical-alignmiddle;cursorpointer;
    margin-right11px; distance between each bullet
    _positionrelative;IE6 hack
}

div.navBulletsWrapper div.active {background-position0 -11px;}


 --------- Others ------- 
#slider 
{
	transform translate3d(0,0,0);
    -ms-transformtranslate3d(0,0,0);
    -moz-transformtranslate3d(0,0,0);
    -o-transformtranslate3d(0,0,0);
}