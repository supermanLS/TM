window.onload=function(){
	var as=getClass('banbox')[0].getElementsByTagName('a');
	var btns=getClass('btn')[0].getElementsByTagName('li');
	var index=0;
	var t=setInterval(aa,2000);
	function aa(){
		index++;
		if(index>as.length-1){
		index=0
	   };
	   for (var i = 0; i < as.length; i++) {
	   	as[i].style.zIndex="0";
	   	btns[i].className='';
	   };
	   as[index].style.zIndex="99"
	   btns[index].className='btn1';
	}
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onclick=function(){
			for(var j=0;j<as.length;j++){
				as[j].style.zIndex='0';
				btns[j].className='';
				
			}
			as[this.index].style.zIndex="99";
			btns[this.index].className='btn1';
			

		}
	
	};
    var boxs=getClass('banbox')[0];
    boxs.onmouseover=function(){
         clearInterval(t);
    }
    boxs.onmouseout=function(){
    	t=setInterval(aa,2000);
    }
	
  //   var left=getClass('btnleft')[0];
  //   var right=getClass('btnright')[0];
  //   left.onclick=function(){
  //   	index--;
		// if(index==-1){
		// index=as.length-1;
	 //   };
	 //   for (var i = 0; i < as.length; i++) {
	 //   	as[i].style.zIndex="0";
	 //   	btns[i].style.background='';
	 //   };
	 //   as[index].style.zIndex="99"
	 //   btns[index].style.background='yellow';
  //   }
  //   right.onclick=function(){
  //   	aa()
  //   };

}