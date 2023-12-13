let cartIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');
let catalogue = document.getElementById('catalogue');
let closeCart = document.querySelector('#close-menu');

let proNas = document.querySelector('#pro-nas');
let informSites = document.querySelector('#inform-sites');
let exitPageInform = document.querySelector('#exitPageInform');


let proNas2 = document.querySelector('#pro-nas2');
let informSites2 = document.querySelector('#inform-sites2');
let exitPageInform2 = document.querySelector('#exitPageInform2');

let proNas3 = document.querySelector('#pro-nas3');
let informSites3 = document.querySelector('#inform-sites3');
let exitPageInform3 = document.querySelector('#exitPageInform3');


let proNas4 = document.querySelector('#pro-nas4');
let informSites4 = document.querySelector('#inform-sites4');
let exitPageInform4 = document.querySelector('#exitPageInform4');


let proNas5 = document.querySelector('#pro-nas5');
let informSites5 = document.querySelector('#inform-sites5');
let exitPageInform5 = document.querySelector('#exitPageInform5');


let proNas6 = document.querySelector('#pro-nas6');
let informSites6 = document.querySelector('#inform-sites6');
let exitPageInform6 = document.querySelector('#exitPageInform6');


const header = document.querySelector('header');

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);
});

 
// menu
cartIcon.onclick = () =>{
    menu.classList.add("active");
};
catalogue.onclick = () =>{
	menu.classList.add('active');
};
closeCart.onclick = () =>{
	menu.classList.remove("active");
};


proNas.onclick = () =>{
    informSites.classList.add("active");
};
exitPageInform.onclick = () =>{
    informSites.classList.remove("active");
};


proNas2.onclick = () =>{
    informSites2.classList.add("active");
};
exitPageInform2.onclick = () =>{
    informSites2.classList.remove("active");
};


proNas3.onclick = () =>{
    informSites3.classList.add("active");
};
exitPageInform3.onclick = () =>{
    informSites3.classList.remove("active");
};

proNas4.onclick = () =>{
    informSites4.classList.add("active");
};
exitPageInform4.onclick = () =>{
    informSites4.classList.remove("active");
};


proNas5.onclick = () =>{
    informSites5.classList.add("active");
};
exitPageInform5.onclick = () =>{
    informSites5.classList.remove("active");
};


proNas6.onclick = () =>{
    informSites6.classList.add("active");
};
exitPageInform6.onclick = () =>{
    informSites6.classList.remove("active");
};




function openGoodPod1()
{
	var goodsZam = document.getElementById("goodsZam1");
	goodsZam.classList.add('active');
};
function exit()
{
	var goodsZam = document.getElementById("goodsZam1");
	goodsZam.classList.remove('active');
}


function openGoodPod2()
{
  var goodsZam = document.getElementById("goodsZam2");
  goodsZam.classList.add('active');
}
function exit1()
{
	var goodsZam = document.getElementById("goodsZam2");
	goodsZam.classList.remove('active');
}

function openGoodPod3()
{
  var goodsZam = document.getElementById("goodsZam3");
  goodsZam.classList.add('active');
}
function exit2()
{
	var goodsZam = document.getElementById("goodsZam3");
	goodsZam.classList.remove('active');
}

function openGoodPod4()
{
  var goodsZam = document.getElementById("goodsZam4");
  goodsZam.classList.add('active');
}
function exit3()
{
	var goodsZam = document.getElementById("goodsZam4");
	goodsZam.classList.remove('active');
}













$(window).on('load', function() {
	$('#status').fadeOut();
	$('#preloader').delay(450).fadeOut('slow');
	$('body').delay(450).css({'overflow':'visible'});
});







$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});





































document.getElementById("feedback").addEventListener("click", function() {
      document.getElementById("otp-form_number").classList.toggle("open");
    });

    document.querySelector(".closeBtnOtp").addEventListener("click", function() {
      document.getElementById("otp-form_number").classList.remove("open");
    });
    
    







// Проверяем поддерживается ли функция history.pushState
if (typeof history.pushState === "function") {
  // Получаем базовый URL без имени файла и расширения
  var baseUrl = window.location.protocol + "//" + window.location.host;
  var pathUrl = window.location.pathname.split("/");
  pathUrl.pop(); // удаляем последний элемент, который является именем файла
  var newUrl = baseUrl + pathUrl.join("/") + "/";
  // Заменяем текущий URL без имени файла и расширения
  history.pushState(null, null, newUrl);
}