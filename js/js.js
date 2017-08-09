$(function(){
	
	var num =0;
//	设置定时器
	var timer = setInterval(run,1500);
	
	function run(){
		num++;
		
		if(num==4){
			num=0;
		}
		
		$('.Bnner_RIght img').eq(num).fadeIn(800).siblings('img').fadeOut(800);
			
			
		$('.lis ul li').eq(num).css({
			'background':'#ccc',
			}).siblings().css({
				'background':'black',
			})
	}
	
	
	$('.Bnner_RIght').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(run,1500);
	})
	
	
	$('.right').click(function(){
		num--;
		if(num==-1){
			num=4;
		}
		$('.Bnner_RIght img').eq(num).fadeIn(800).siblings('img').fadeOut(800);
		
		$('.lis ul li').eq(num).css({
			'background':'#ccc',
			}).siblings().css({
				'background':'black',
			})
	})
	
	
	$('.left').click(function(){
		num++;
		if(num==4){
			num=0;
		}
		$('.Bnner_RIght img').eq(num).fadeIn(800).siblings('img').fadeOut(800);
		
				$('.lis ul li').eq(num).css({
					'background':'#ccc',
				}).siblings().css({
					'background':'black',
				})
	})
	
		$('.lis ul li').click(function(){
			num=$(this).index();
			
			$('.Bnner_RIght img').eq(num).fadeIn(800).siblings('img').fadeOut(800);
		
				$('.lis ul li').eq(num).css({
					'background':'#ccc',
					}).siblings().css({
						'background':'black',
					})
		})
	//导航下来效果	
	var seeW = $('body').width();
		$('.erji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
		
		$(window).resize(function(){
			var seeW = $('body').width();
			$('.erji').css({'width':seeW+'px','margin-left':-seeW/2+'px'})
		})
	
	$('.xila').mouseenter(function(){
		$(this).find('.erji').show().stop().animate({
			'height':'210px'
		},200)
		$(this).siblings('.xila').find('.erji').stop().animate({
			'height':'210px'
		}).hide()
	})
	$('.Hide').mouseleave(function(){
		
		$(this).find('.erji').stop().animate({
			'height':'0px'
		},200)
	})
		

	//滚动
	//大总管变量
	var lun=0;
	//加定时器
	var tim = setInterval(add,3500)
	//封装定时器函数
	function add(){
		lun++;
		if(lun==2){
			lun=0;
		}
		//判断当大总管变量等于0的时候
		if(add==0){
			
			$('.zuo').eq(lun).addClass('active').siblings().removeClass('active')
		}else if(add==1){
			$('.zuo').eq(lun).addClass('active').siblings().removeClass('active')
		}
		//
		$('#sdy').stop().animate({
			'left':-1226*lun+'px'
		})
	}
	//鼠标滑过的时候清除定时器
	$('#Star').hover(function(){
		
		clearInterval(tim)
		
	},function(){
		
		tim = setInterval(add,3500)
	})
	//点击左边
	$('.zuo').click(function(){
		lun--;
		if(lun<=0){
			lun=0;
		}
		$('#sdy').stop().animate({
			'left':-1226*lun+'px'
		})
		//当前的属性条件active其他兄弟隐藏
		$(this).addClass('active').siblings().removeClass('active')
	})
	//点击右边
	$('.you').click(function(){
		lun++;
		if(lun>=1){
			lun=1;
		}
		$('#sdy').stop().animate({
			'left':-1226*lun+'px'
		})
		//当前的属性条件active其他兄弟隐藏
		$(this).addClass('active').siblings().removeClass('active')
	})
	//家电tab切换
	
	$('.Products_Rigt .lie').hover(function(){
		var bbb = $(this).index();
		$('.News_you').eq(bbb).show().siblings('.News_you').hide();
		
		$('.Products_Rigt .lie').eq(bbb).addClass('xia').siblings().removeClass('xia')
		
	})

	//智能tab切换
		$('.Gence_Ri .biao').hover(function(){
			
			var ccc = $(this).index();
			
			$('.Gence_Cen').eq(ccc).show().siblings('.Gence_Cen').hide();
			
			$('.Gence_Ri .biao').eq(ccc).addClass('min').siblings().removeClass('min')
			
		})
	//搭配
	$('.Gence_hot .rder').hover(function(){
			
			var smd = $(this).index();
			
			$('.Gence_sbm').eq(smd).show().siblings('.Gence_sbm').hide();
			
			$('.Gence_hot .rder').eq(smd).addClass('zui').siblings().removeClass('zui')
			
		})
	//配件
		$('.Gence_parts .fot').hover(function(){
			
			var thi = $(this).index();
			
			$('.Gence_sam').eq(thi).show().siblings('.Gence_sam').hide();
			
			$('.Gence_parts .fot').eq(thi).addClass('nb').siblings().removeClass('nb')
			
		})
	//周边
		$('.Gence_periphery .rmb').hover(function(){
			
			var men = $(this).index();
			
			$('.Gence_tent').eq(men).show().siblings('.Gence_tent').hide();
			
			$('.Gence_periphery .rmb').eq(men).addClass('can').siblings().removeClass('can')
			
		})
	//为你推荐v 
	var mi=0;

	$('.btn').click(function(){
		mi--;
		
		if(mi==-1){
			mi=0;
		}
		
		$('.wurj').stop().animate({'left':-1229*mi+'px'});
		$(this).addClass('act').siblings().removeClass('act')
		
	})
	
	$('.btm').click(function(){
		mi++;
		
		if(mi>=4){
			mi=3;
		}
		
		$('.wurj').stop().animate({'left':-1229*mi+'px'});
		$(this).addClass('act').siblings().removeClass('act')
		
	})
	
	//内容
	$('.Gen_tag').each(function(){
	//获得js原生对象
		   var jsths = $(this)[0];
		   
//给gen_tag添加一个属性bom
		   jsths.bom = 0;
	   
	   
	   $('.Gen_tag').hover(function(){
	   	 //获得js原生对象
		 var jsths =$(this)[0];
		 //清除点击事件
		 $(this).find('.mars').off('click')
		 
		//当我点击左边按钮的时$(this)事件指向$('.mars')
		$(this).find('.mars').click(function(){
		//获取li的长度
		 var len = $(this).siblings('.Bt_Ul').find('li').length;
			//添加的属性加加
			jsths.bom++;
			
			if(jsths.bom==len){
				jsths.bom=len-1;			
			}

			//$this指向.mars他的兄弟元素.Bt_Ul执行动画
			$(this).siblings('.Bt_Ul').stop().animate({
				
				 'left':-296*jsths.bom+'px'
				
			},200)
			//小点跟随
			$(this).siblings('.dian').find('span').eq(jsths.bom).addClass('tia').siblings('span').removeClass('tia')
			
			
		})
	
 		//清除点击事件
		 $(this).find('.marg').off('click')
		 
		//当我点击右边按钮的时$(this)事件指向$('.Gen_tag')
		$(this).find('.marg').click(function(){
		//获取li的长度
		 var len = $(this).siblings('.Bt_Ul').find('li').length;
			//添加的属性加加
			jsths.bom--;
			
			if(jsths.bom==-1){
				jsths.bom=0;			
			}

			//$this指向.mars他的兄弟元素.Bt_Ul执行动画
			$(this).siblings('.Bt_Ul').stop().animate({
				
				 'left':-296*jsths.bom+'px'
				
			},200)
			//小点跟随
			$(this).siblings('.dian').find('span').eq(jsths.bom).addClass('tia').siblings('span').removeClass('tia')
			
			
		})

	   })
	   
	})

	
})
