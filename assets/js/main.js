jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
    $(this).children('.carousel-background').remove();
  });

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });

  // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

});



var local = {

    'btnLocalEng':{
        "btnLocal": "AR",
        "btnHome": "Home",
		"btnAbout":"About Us",
		"btnServices":"Services",
		"btnPortfolio":"Portfolio",
		"btnContact":"Contact",
		"btnProducts":"Products",
		"FirstSlide":"We are professional",
		"FirstSlide2":"Welcome To Our Comapny",
		"FirstSlide3":"Get Started",
		"SecondSlide":"Creative Agency for ambatious projects",
		"ThirdSlide":"Services between your hand",
		"ThirdSlide2":"We offer a lot of services that match you .. Just contact us",
		"ThirdSlide3":"Contact Us",
		"FourthSlide":"Saudi-Egyption Comapny",
		"FourthSlide2":"Watch our story",
		
		//second section localization
		
	    "AboutUsHeader":"About Us",
		"AboutUsFirstParagraph":"We believe that we can change culture and make the world a better place. The objective is to attained by producing quality products through which values are conveyed and influencing the society",
		"AboutUsSecondParagraph":"Saudi -Egyption Cpmpany providing profeesiona IT services. Our main branch in KSA -Jeddah and our developement house in Egyptian ,Cario Nozha.",
		"AboutUsThirdParagraph":"We have many partnerships with many companies and organization outside KSA and Egypt",
		"SolTime":"Solutions & Time",
		"SolTim":"Providing unique solutions that mak it easy to deliver your project idea to the user while maintaining the speed of execution and maintaining time.",
		"protpri":"Protection and Privacy",
		"protpribody":"Protecting all of your customer projects without compromising any of them can say that protecting and maintaining the privacy of our customers is our primary concern.",
		"comproj":"Checking completed projects",
		"projcombody":"Check the completed projects and follow up the clients' work always to ensure that they worked well without any problems and provide tips via email or delivery of reports",
		"ServiceSection":"Services",
		"ServiceHeaderr":"Our company provides many services to you. ",
		"Soft":"Software developement",
		"webdes":"Web design and development",
		"mobappdev":"Mobile apps develelopment",
		"DigitalMarketing":"Digital Marketing",
		"const":"Consultation",
		"mangaut":"Management and automation system",
		
		
		
		//Portfolio Section
		"Portfolio":"Our Portfolio",
		"AllPortfolio":"All",
		"WebDesignPortfolio":"Web Design",
		"MobAppPortfolio":"Mobile Application",
		"BusIdentPort":"Business Identities",
		"SocialMediPort":"Social Media",
		
        //products section
		"product":"Products",
		"productbody":"We believe that good quality is not achieved through random but through consistent and dedicated work. Best applications,services,...etc through the highest quality is the benchmark we set for all our products.",
		//Contact Us Section
		"Contact":"Contact Us",
		"KeepInTouch":" Keep In Touch",
		"namemsg":"Name",
		"emailmsg":"Email",
		"msg":"Message",
		"sndBtn":"Send",
		"InfoHeader":"Our Information To Contact Us :",
		"telephonenum":"002 - 002 - 417 - 8434",
		"subscripe":"Subscripe",
		"sd":"we create digital solutions for international corporations, small businesses and other organisations with an aim to open up new possibilities for expansion, process automatisation, and continuous improvement. We are a team of experienced developers, creators, designers and project managers you can rely on.",
		"webdesign":"We provide expert web application development and web design services to our clients.Our experts are trained, certified and experienced across a variety of website platforms.",
		"Mobile":"design and develop advanced, feature rich mobile and web applications to meet your company’s unique and complex business requirements. We work across the applicationlifecycle utilising agile development processes to ensure customers get intuitive, robust applications delivered to agreed timescales.",
		"webdesanddev":"Web design and development",
		"mobappdev":"Mobile apps Developement",
		"Digital":"We use various online platforms (Facebook, Instagram, Twitter, LinkedIn, Google Adwords & etc)to market and raise awareness for your project Put simply, we make sure you are in the right place at the right time.",
		"Consultation":"We provide strategic consulting for decision support, organisational improvement and operative execution. We advise top management in areas of project management and procurement.Effective development and execution of large and complex capital investments requires a broad understanding of the political, technical, ...",
		"Management":"With our extensive experience providing home automation systems, we are able to provide thoughtful discussion and valuable insight about what products and solutions work best to achieve a desired result for you.",
		"telnum":"002 - 002 - 417 - 8434",
		"branch":"Main Branch :",
		"jeddah":"Jeddah ,KSA",
		"branch2":"Developement House",
		"cairo":"9,Elnozha st, Cairo",
		"phonenumber":"Phone Number",
		"phonenum":"002 - 002 - 417 - 8434",
		"emailfooter":"Email",
		"Addreess":"Address"
		
		
		
		
		
			
			
			
        		
			
			
			
		
		
		
		
		
			
             
		
		
		
                
		
		

		
		
			 
		
		     
		
                
		
       
    },
    'btnLocalArb':{
        "btnLocal": "EN",
        "btnHome": "الرئيسيه",
		"btnAbout":"عن الشركه",
		"btnServices":"خداماتنا",
        "btnPortfolio":"اعمالنا السابقه",
		"btnContact":"اتصل بنا",
		"btnProducts":"منتجاتنا",
		"FirstSlide":"نحن نجيد الاحتراف ",
		"FirstSlide2":"مرحبا بك فى شركتنا",
		"FirstSlide3":"لنبدأ",
		"SecondSlide":"وكالة إبداعية للمشاريع الطموحة",
		"ThirdSlide":"الخدمات بين يديك",
		"ThirdSlide2":"نحن نقدم لك العديد من الخدمات التى تناسبك .. فقط تواصل معنا",
		"ThirdSlide3":"تواصل معنا",
		"FourthSlide":"الشركه السعوديه المصريه",
		"FourthSlide2":"شاهد قصتنا",

		
		
		
		
		
		
		//second section localization
		
		"AboutUsHeader":"معلومات عنا",
		"AboutUsFirstParagraph":"نعتقد أنه يمكننا تغيير الثقافة وجعل العالم مكانًا أفضل. الهدف هو تحقيقها عن طريق إنتاج منتجات ذات جودة يتم من خلالها نقل القيم والتأثير على المجتمع",
		"AboutUsSecondParagraph":"تقدم الشركه السعوديه المصريه خدمات متميزه فى مجال تكنولوجيا المعلومات ..فرعنا الرئيسى يوجد فى السعوديه - جده ودار التطوير يوجد فى القاهره النزهه",
		"AboutUsThirdParagraph":"لدينا العديد من الشراكات مع العديد من الشركات والمؤسسات خارج المملكة العربية السعودية ومصر",
		"SolTime":" الحلول & الوقت",
		"SolTim":"توفير حلول فريدة تجعل من السهل تسليم فكرة مشروعك للمستخدم مع الحفاظ على سرعة التنفيذ والحفاظ على الوقت.",
		"protpri":"الحمايه والخصوصيه",
		"protpribody":"إن حماية جميع مشاريع العملاء دون المساس بأي منها يمكن أن نقول إن حماية والحفاظ على خصوصية عملائنا هو مصدر قلقنا الرئيسي.",
		"comproj":"التحقق من المشاريع المنجزه",
		"projcombody":"التحقق من المشاريع المنجزة ومتابعة عمل العملاء دائمًا للتأكد من أنها تعمل بشكل جيد دون أي مشاكل وتقديم نصائح عبر البريد الإلكتروني أو تسليم التقارير",
		"ServiceSection":"خدمات",
		"ServiceHeaderr":"تقدم شركتنا العديد من الخدمات لك ",
		"Soft":"تطوير البرمجيات",
		"webdes":"تصميم وتطوير مواقع الويب",
		"mobappdev":"تطوير تطبيقات الموبايل",
		"DigitalMarketing":"التسويق الرقمى",
		"const":"استشارات",
		"mangaut":"نظام الاداره والتشغيل الالى",
		
		
		//Portfolio Section
		"Portfolio":"الاعمال السابقه",
		"AllPortfolio":"الكل",
		"WebDesignPortfolio":"تصميم المواقع",
		"MobAppPortfolio":"تطبيقات الموبايل",
		"BusIdentPort":"تعريفات العمل",
		"SocialMediPort":"وسائل الاعلام",
		
		//products section
		"product":"منتجاتنا",
		"productbody":"نحن نؤمن بأن الجودة الجيدة لا تتحقق من خلال العشوائية ولكن من خلال العمل المتسق والمتفاني. أفضل التطبيقات ، الخدمات ، ... الخ من خلال أعلى مستويات الجودة هو المعيار الذي وضعناه لجميع منتجاتنا.",
		
		//ContactUs Section
		"Contact":"تواصل معنا",
		"KeepInTouch":"أبق على اتصال",
		"namemsg":"الاسم",
		"emailmsg":"البريد الإلكتروني",
		"msg":"محتوى الرساله",
		"sndBtn":"أرسال",
		"InfoHeader":": معلومات التواصل معنا",
		"subscripe":"إشترك الآن",
		"sd":"نحن نخلق حلول رقمية للشركات الدولية والشركات الصغيرة وغيرها من المنظمات بهدف فتح إمكانات جديدة للتوسع وعملية التلقائية والتحسين المستمر. نحن فريق من المطورين والمبدعين والمصممين ومديري المشاريع المتمرسين الذين يمكنك الاعتماد عليهم.",
        "webdesign":"نحن نقدم خدمات تطوير تطبيقات الويب الخبيرة وتصميم الويب لعملائنا. يتم تدريب خبرائنا ، واعتمادهم وتجربتهم عبر مجموعة متنوعة من منصات الويب.",
		"Mobile":"تصميم وتطوير تطبيقات متقدمة ومتنقلة ورائعة للجوّال لتلبية متطلبات أعمال الشركة المتميزة والفريدة من نوعها. إننا نعمل عبر دورة التطبيقات باستخدام عمليات التطوير السريع لضمان حصول العملاء على تطبيقات بديهية وقوية يتم تسليمها إلى نطاقات زمنية متفق عليها.",
		"webdesanddev":"تصميم وتطوير المواقع",
		"mobappdev":"تطوير تطبيقات الموبايل",
		"Digital":"نحن نستخدم العديد من المنصات عبر الانتر نت كفيسبوك وانستجرام وتويتر ولينكدان وغيرها لتسويق وزياده الوعى لمشروعكك ببساطه نحن نتاكد من انك فى المكان المناسب فى الوقت المناسب",
		"Consultation":"نحن نقدم الاستشارات الاستراتيجية لدعم اتخاذ القرار ، التحسين التنظيمي والتنفيذ العملي. نحن ننصح الإدارة العليا في مجالات إدارة المشاريع والمشتريات. يتطلب التطوير الفعال وتنفيذ الاستثمارات الرأسمالية الكبيرة والمعقدة فهماً واسعاً للعمليات السياسية والتقنية ، ...",
        "Management":"من خلال خبرتنا الواسعة في توفير أنظمة التشغيل الآلي للمنزل ، فنحن قادرون على توفير مناقشة عميقة ورؤية قيّمة حول المنتجات والحلول التي تحقق أفضل نتيجة لتحقيق النتيجة المرجوة لك.",
		"telnum":"8434-417-002-002 ",
		"branch":"الفرع الرئيسى :",
		"jeddah":"جده ,السعودية",
		"branch2":"بيت التنميه:",
		"cairo":"9 شارع النزهه القاهره",
		"phonenumber":"رقم التليفون",
		"phonenum":"8434 - 417 - 002 - 002",
		"emailfooter":"البريد الالكترنى",
		"Addreess":"العنوان"
		
		
		
		
		
		
		
    }
};

//Localization convert
$(function(){
    $(".translate").click(function(){
	
        var language = $(this).attr("id"); //(-- id --) of button that have the same name of function that translate
        $(".lang").each(function(){
            $(this).text(local[language][$(this).attr("key")]); //(-- key --) the attribute that you want to chane language
        });
		
		  	
    });
});



function changeID(x)
{
    if(x=="btnLocalEng")
    {
        $("#btnLocalEng").attr("id","btnLocalArb");
		
      $(document).ready(function(){
          

            $(".sdwriting").css("textAlign","right");
			
			
			
			
		
    $('#list').find('li:eq(5)').insertBefore('li:eq(0)');
    $('#list').find('li:eq(5)').insertBefore('li:eq(1)');
    $('#list').find('li:eq(5)').insertBefore('li:eq(2)');
    $('#list').find('li:eq(5)').insertBefore('li:eq(3)');
	  $('#list').find('li:eq(5)').insertBefore('li:eq(4)');
	
		$('#list li a').css("fontSize","20px");
	//$('#list li a').css("fontFamily","'Droid Arabic Naskh', serif");
         $('#start').css("fontSize","20px");
		   $('.start').css("fontWeight","bold");
		   
		   //second section localization
		   $("#protpribody").css("textAlign","right");
		   $("#SolTimBody").css("textAlign","right");
		   $("#projcombody").css("textAlign","right");
		   
		   // Third section localization
		    $("#firstdev").css("float","right");
			$(".ServiceHeader").css("textAlign","right");
			$(".ServiceHeader").css("margins","5px");
		   
		   //portfolio section
		   /* $('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(0)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(1)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(2)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(3)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(4)');*/
			
			
			//Contact US Section
			 $("#namemsg").css("float","right");
			 $("#emailmsg").css("float","right");
			  $("#msg").css("float","right");
			   $("#sndBtn").val("أرسال");
			    $("#InfoHeader").css("textAlign","right");
				$("#Contact").css("textAlign","right");
				 $("#subscripe").css("textAlign","right");
				 $("#subscripeBtn").val("اشترك");
				 $("#social").css("float","right");
				  $("#firstdev").css("margin-right","5px");
				  
				   $(".title").css("marginRight","60px");
				   $(".title").css("fontWeight","70px");
				   $(".title").css("marginBottom","20px");
				   $(".title").css("fontSize","18px");
				   
				   
				   $(".icon").css("float","right");
				   
				   $(".description").css("fontSize","14px");
				   $(".description").css("marginRight","60px");
				   $(".description").css("lineHeight","24px");
				   $(".description").css("marginBottom","0");
				   
				   
				   $("#Soft").css("textAlign","right");
				   $("#webdes").css("textAlign","right");
				    $("#mobappdev").css("textAlign","right");
					 $("#DigitalMarketing").css("textAlign","right");
					  $("#const").css("textAlign","right");
					  $("#mangaut").css("textAlign","right");
					  $("#Address").css("direction","rtl");
					   $("#Address").css("textAlign","right");
					   $("#phoneee").css("float","right");

					   
					   
					  
					 
				   
				  
				  
				
				 
				 
				 
			
		   
        });
		
    }
	 
    
	
	
    else 
    {
	
        $("#btnLocalArb").attr("id","btnLocalEng");
        $(document).ready(function(){
        

            $(".sdwriting").css("textAlign","left");
		    $("#SolTimBody").css("textAlign","left");
		
			
			
			    $('#list').find('li:eq(5)').insertBefore('li:eq(0)');
				$('#list').find('li:eq(5)').insertBefore('li:eq(1)');
				$('#list').find('li:eq(5)').insertBefore('li:eq(2)');
				$('#list').find('li:eq(5)').insertBefore('li:eq(3)');
				$('#list').find('li:eq(5)').insertBefore('li:eq(4)');
	$('#list li a').css("fontSize","15px");
	
	      $('#start').css("fontSize","15px");
		  
		  
		  //second section localization
		  
		  $("#protpribody").css("textAlign","left");
		  $("#SolTimBody").css("textAlign","left");
	      $("#projcombody").css("textAlign","left");
		 
		  
		  // Third section localization
		   $("#firstdev").css("float","left");
		  $(".ServiceHeader").css("textAlign","left");
		  
		    //portfolio section
		  /* $('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(0)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(1)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(2)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(3)');
			$('#portfolio-flters').find('li:eq(4)').insertBefore('li:eq(4)');*/
			
			//Contact US Section
			 $("#namemsg").css("float","left");
			 $("#emailmsg").css("float","left");
			 $("#msg").css("float","left");
			 $("#sndBtn").val("Send");
			 $("#InfoHeader").css("textAlign","left");
			 $("#Contact").css("textAlign","left");
			 $("#subscripe").css("textAlign","left");
			 $("#subscripeBtn").val("Subscripe");
			 $("#social").css("float","left");
			 $("#firstdev").css("margin-right","5px");
			 
			       $(".title").css("marginLeft","60px");
				   $(".title").css("fontWeight","70px");
				   $(".title").css("marginBottom","20px");
				   $(".title").css("fontSize","18px");
				   
				   
				   $(".icon").css("float","left");
				   
				   $(".description").css("fontSize","14px");
				   $(".description").css("marginLeft","60px");
				   $(".description").css("lineHeight","24px");
				   $(".description").css("marginBottom","0");
				   $("#Soft").css("textAlign","left");
				   $("#webdes").css("textAlign","left");
				   $("#mobappdev").css("textAlign","left");
				    $("#DigitalMarketing").css("textAlign","left");
					 $("#const").css("textAlign","left");
					 $("#mangaut").css("textAlign","left");
					 
					  $("#Address").css("direction","ltr");
					  
					   ;
					   $("#Address").css("textAlign","left");
					  
					 
					 
				   
				   
				   
			 
			 
			  
			  
			   
			 
          
        });
    } 
}
