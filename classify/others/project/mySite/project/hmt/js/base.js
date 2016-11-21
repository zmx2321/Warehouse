/* public s */
//导航栏下拉 s
$(function(){
	$("#nav li").hover(
		function(){
			$(this).find('dl').slideDown();
		},
		function(){
			$(this).find('dl').slideUp();
		}
	);
});
//导航栏下拉 e
/* public e */

/* login.html s */
//企业和个人登录切换 s
$(function(){
	$('.personal').click(function(){
		$(this).addClass("login_top_on");
		$(".business").removeClass("login_top_on");
		$(".login_cont_per").show();
		$(".login_cont_bus").hide();
	});
	$('.business').click(function(){
		$(this).addClass("login_top_on");
		$(".personal").removeClass("login_top_on");
		$(".login_cont_per").hide();
		$(".login_cont_bus").show();
	});
});
//企业和个人登录切换 e
/* login.html e */

/* index.html s */
//首页图片轮播 s
var in_t = in_n = 0 , count;
$(function(){
	count = $("#banner_list a").length;
	$("#banner_list a:not(:first-child)").hide();

	$("#banner_num li").click(function(){
		var i = $(this).text() - 1;
		in_n = i;
		if( i >= count ) return;
		$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		$(this).addClass("bann_but_on").siblings().removeClass("bann_but_on");
	});

	in_t = setInterval("showAuto()", 4000); 
	$("#banner").hover(
		function(){
			clearInterval(in_t)
		}, 
		function(){
			in_t = setInterval("showAuto()", 4000);
		}
	);
});

function showAuto(){
	in_n = in_n >=(count - 1) ? 0 : ++in_n;
	$("#banner_num li").eq(in_n).trigger('click'); 
}
//首页图片轮播 e

//我的供货商和我的服务商切换 s
$(function(){
	$(function(){
		$('.in_brotm_list0').click(function(){
			$(this).addClass("in_brotm_list_on");
			$(".in_brotm_list1").removeClass("in_brotm_list_on");
			$(".in_brotm_detail0").show();
			$(".in_brotm_detail1").hide();
		});
		$('.in_brotm_list1').click(function(){
			$(this).addClass("in_brotm_list_on");
			$(".in_brotm_list0").removeClass("in_brotm_list_on");
			$(".in_brotm_detail0").hide();
			$(".in_brotm_detail1").show();
		});
	})
});
//我的供货商和我的服务商切换 e
/* index.html e */

/* cutom_clearance.html s */
//个人进境快件、跨境直邮、保税区备货切换
$(function(){
	$("#indu_exenty_btn").click(function(){
		$(this).addClass("ser_clce_on").siblings().removeClass("ser_clce_on");
		$(".indu_exenty").show();
		$(".crobrdct_mail").hide();
		$(".fretad_zone").hide();
	});

	$("#crobrdct_mail_btn").click(function(){
		$(this).addClass("ser_clce_on").siblings().removeClass("ser_clce_on");
		$(".indu_exenty").hide();
		$(".crobrdct_mail").show();
		$(".fretad_zone").hide();
	});

	$("#fretad_zone_btn").click(function(){
		$(this).addClass("ser_clce_on").siblings().removeClass("ser_clce_on");
		$(".indu_exenty").hide();
		$(".crobrdct_mail").hide();
		$(".fretad_zone").show();
	});
});
/* cutom_clearance.html e */

/* stoge_service.html s */
//个人进境快件、跨境直邮、保税区备货切换
$(function(){
	$("#hur_inty_btn").click(function(){
		$(this).addClass("ser_hourbdy_on").siblings().removeClass("ser_hourbdy_on");
		$(".hur_inty").show();
		$(".hur_cmail").hide();
		$(".hur_fone").hide();
	});

	$("#hur_cmail_btn").click(function(){
		$(this).addClass("ser_hourbdy_on").siblings().removeClass("ser_hourbdy_on");
		$(".hur_inty").hide();
		$(".hur_cmail").show();
		$(".hur_fone").hide();
	});

	$("#hur_fone_btn").click(function(){
		$(this).addClass("ser_hourbdy_on").siblings().removeClass("ser_hourbdy_on");
		$(".hur_inty").hide();
		$(".hur_cmail").hide();
		$(".hur_fone").show();
	});
});
/* stoge_service.html e */

/* personal_center.html s */
//功能列表切换 s
;(function( $ ){    
    $.fn.percen_tab = function(options){ 
        var defaults = {    
        	currentClass:'penman_list_on',
            eventType:'click',
        }

        var options = $.extend(defaults,options);
        
        this.each(function(){
        	$(this).click(options.eventType,function(){
        		$(this).find("a").addClass(options.currentClass);
        		$(this).siblings().find("a").removeClass(options.currentClass);
        		$('.penman_detail_box').hide();
        		id=$(this).attr('id');
        		$("."+id+"_box").show();
        	});
        });
    }
})(jQuery);

$(function(){
    $('#salodiq').percen_tab();	//销售订单查询
    $('#purodiq').percen_tab();	//采购订单查询
    $('#lgtcpnt').percen_tab();	//物流面单打印
    $('#mceotev').percen_tab();	//商品管理
    $('#ctdcliq').percen_tab();	//报关、通关查询
    /*$('#fiacgiq').percen_tab();*/	//融资查询
    $('#stosrce').percen_tab();	//仓储服务查询
    $('#tratobl').percen_tab();	//交易账单
    $('#ponlmat').percen_tab();	//个人信息
    /*$('#enqaupd').percen_tab();*/	//企业资质上传
});
//功能列表切换 e

//个人信息地址管理 s
$(function(){
	$(".ponlmat_box .pomtadd_btn").click(function(){
		if($(this).is('.pomad_active')){
			$(this).removeClass('pomad_active');
			$(this).text("设为默认地址");
		}else{
			$(this).addClass('pomad_active');
			$(this).text("默认地址");
		}
	});
});
//个人信息地址管理 e

//采购订单查询交易操作 s
$(function(){
	$(".purodiq_form .puodqfm_buton").click(function(){
		if($(this).is('.puodqfm_active')){
			$(this).removeClass('puodqfm_active');
			$(this).text("确认收货");
		}else{
			$(this).addClass('puodqfm_active');
			$(this).text("再次购买");
		}
	});
});
//采购订单查询交易操作 e

//交易账单切换 s
$(function(){
	$("#tratop_btn_tab li").click(function(){
		$(this).find("button").addClass("tratop_on");
		$(this).siblings().find("button").removeClass("tratop_on");
	});
});
//交易账单切换 e

//报关、清关查询选项卡 s
$(function(){
	$("#ctdcliq_tab .ctdcliq_tabul_cont li").click(function(){
		$(this).addClass("ctdcliq_tab_on").siblings().removeClass("ctdcliq_tab_on");
		$('.ctdcliq_tab_cont_wrap .ctdcliq_tab_cont').eq($(this).index()).show().siblings().hide();
	});
});
//报关、清关查询选项卡 e

//模拟select s
//商品分类
$(function(){
	$("#mceoselt_comyclfin").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#mceoselt_comyclfin .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#mceoselt_comyclfin .mceotev_select_list").slideUp();
		}
	);
});

//商品品牌
$(function(){
	$("#mceoselt_comybnd").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#mceoselt_comybnd .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#mceoselt_comybnd .mceotev_select_list").slideUp();
		}
	);
});

//供货商
$(function(){
	$("#mceoselt_suppr").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#mceoselt_suppr .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#mceoselt_suppr .mceotev_select_list").slideUp();
		}
	);
});

//产地
$(function(){
	$("#mceoselt_Porgn").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#mceoselt_Porgn .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#mceoselt_Porgn .mceotev_select_list").slideUp();
		}
	);
});

//上传商品图片
$(function(){
	$("#mceoselt_upload").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#mceoselt_upload .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#mceoselt_upload .mceotev_select_list").slideUp();
		}
	);
});

//上传商品缩略图
$(function(){
	$("#mceoselt_upload0").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#mceoselt_upload0 .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#mceoselt_upload0 .mceotev_select_list").slideUp();
		}
	);
});

//上传商品缩略图
$(function(){
	$("#mceoselt_addcaor").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#mceoselt_addcaor .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#mceoselt_addcaor .mceotev_select_list").slideUp();
		}
	);
});

//所有分类
$(function(){
	$("#lstfgod_allcasi").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#lstfgod_allcasi .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#lstfgod_allcasi .mceotev_select_list").slideUp();
		}
	);
});

//所有品牌
$(function(){
	$("#lstfgod_allbrand").hover(
		function(){
			$(this).find("b").addClass("mceotev_select_down").removeClass("mceotev_select_up");
			$("#lstfgod_allbrand .mceotev_select_list").slideDown();
		},
		function(){
			$(this).find("b").addClass("mceotev_select_up").removeClass("mceotev_select_down");
			$("#lstfgod_allbrand .mceotev_select_list").slideUp();
		}
	);
});
//模拟select e

// 个人中心-商品管理-添加分类 s
$(function(){
	$("#add_category").click(function(){
		$(".add_category_bg").fadeIn();
		$(".add_category").show();
		$("body").css("overflow","hidden");
	});
	$(".add_category_bg").click(function(){
		$(this).fadeOut();
		$(".add_category").hide();
		$("body").css("overflow","initial");
	});
});
// 个人中心-商品管理-添加分类 s

//商品分类产品分类展开 s
$(function(){
	$(".clsifon_cay").find("dt ol li:first-child").click(function(){
		$(this).parent().parent().parent().find("dd").slideToggle();
	});
	$(".clsifon_cay").find("dt ol li:first-child").toggle(
	    function(){
	      $(this).find(".clsifon_ud").text("-");
	    },
	    function(){
	      $(this).find(".clsifon_ud").text("+");
	    }
	);
});
//商品分类产品分类展开 s

//商品管理选项卡 s
$(function(){
	$("#mceotev_tab .mceotev_tabul_cont li").click(function(){
		$(this).addClass("mceotev_tab_on").siblings().removeClass("mceotev_tab_on");
		$('.mceotev_tab_cont_wrap .mceotev_tab_cont').eq($(this).index()).show().siblings().hide();
	});
});
//商品管理选项卡 e
/* personal_center.html e */

/* overseas_purchase.html s */
/* 猜你喜欢 s */
$(function(){
    var page = 1;
    var i = 4; //每版放4个图片
	var len = $("ul.slide_ul li").length;
	var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
	var none_unit_width = $(".ospa_shcrtom_slide").width(); //获取框架内容的宽度,不带单位
	var $parent = $(".slide_ul"); 
    //向右 按钮
    $(".goRight").click(function(){ 
		if( !$parent.is(":animated") ){
			if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$parent.animate({ left : 0}, 800); //通过改变left值，跳转到第一个版面
				page = 1;
			}else{
				$parent.animate({ left : '-='+none_unit_width}, 800);  //通过改变left值，达到每次换一个版面
				page++;
			}
		}
   });
    //往左 按钮
    $(".goLeft").click(function(){
	    if( !$parent.is(":animated") ){
			if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$parent.animate({ left : '-='+none_unit_width*(page_count-1)}, 800); //通过改变left值，跳转到最后一个版面
				page = page_count;
			}else{
				$parent.animate({ left : '+='+none_unit_width }, 800);  //通过改变left值，达到每次换一个版面
				page--;
			}
		}
    });
});
/* 猜你喜欢 e */

/* 选择地址 s */
$(function(){
	$(".ovpue_smtrde_bot ul > li").click(function(){
		$(this).addClass("ovpmtd_on").siblings().removeClass("ovpmtd_on");
	});
});
/* 选择地址 e */

/* 支付选择 s */
$(function(){
	$(".ovpue_pay_botway dd label").click(function(){
		$(this).addClass("ovpue_paw_on").parent().siblings().find("label").removeClass("ovpue_paw_on");
	});
});
/* 支付选择 e */
/* overseas_purchase.html e */