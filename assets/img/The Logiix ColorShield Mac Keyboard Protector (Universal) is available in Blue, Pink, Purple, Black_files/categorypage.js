$(document).ready(function () {
 var pathName = window.location.href;
if (pathName.match('/SearchResults.asp') || pathName.match('-s/')) {       
 /* New Js Start Here */
        $('#divWaitModal').next('table:eq(0)').addClass('breadCrumbTable');

        $('.breadCrumbTable + table').addClass('prodMainTable');
        $('#content_area').addClass('SearchResultPage');
        $('#MainForm table:eq(0)').addClass('sortTable');
        $('.sortTable + table').addClass('prodTable');
        $('.prodTable + table').addClass('BotNxtTable');
        $('.sortTable, .prodTable, .BotNxtTable, .prodTable .v65-productDisplay:eq(0)').attr({
            cellspacing: '5',
            cellpadding: '5'
        });
        $('.prodTable .v65-productDisplay:eq(1)').addClass('proTAbleCatWrap');

        var prodMain = $('.prodTable').html();
        var leftMenu = $('#leftnav').html();
        $('#leftnav').hide();
        $('#MainForm').before('<div id="leftnav" class="newLeftMenu">' + leftMenu + '</div>')

        if (pathName.match('Ipad-s/1966.htm')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_8').css('display', 'block');
            $('.newLeftMenu #display_menu_3, .newLeftMenu #display_menu_5, .newLeftMenu #display_menu_6').css('display', 'none');
            $('td').click(function () {
                /*     var link_class = $('.leftnav .menu td.subnav').find('a').text(); // find this class name
    $(this).hide();
 alert("link class name  = "+ link_class);*/
            });
        }


        if (pathName.match('Cat=1817') || pathName.match('Ipad-s/') || pathName.match('cat=1817')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_8').css('display', 'block');
            $('.newLeftMenu #display_menu_3, .newLeftMenu #display_menu_5, .newLeftMenu #display_menu_6').css('display', 'none');


            if (pathName.match('Ipad-s/') && prodMain === null) {
                $('#leftnav').css('display', 'block');
                $('#leftnav #display_menu_8').css('display', 'block');
                $('#leftnav #display_menu_3, #leftnav #display_menu_5, #leftnav #display_menu_6').css('display', 'none');
                $('#content_area').addClass('BlankContentArea');
            }
        } else if (pathName.match('Cat=1850') || pathName.match('Iphone-s/') || pathName.match('cat=1850')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_3').css('display', 'block');
            $('.newLeftMenu #display_menu_7, .newLeftMenu #display_menu_5, .newLeftMenu #display_menu_6, .newLeftMenu #display_menu_7').css('display', 'none');
            if (pathName.match('Iphone-s/') && prodMain === null) {
                $('#leftnav').css('display', 'block');
                $('#leftnav #display_menu_3').css('display', 'block');
                $('#leftnav #display_menu_7, #leftnav #display_menu_5, #leftnav #display_menu_6, .newLeftMenu #display_menu_8').css('display', 'none');
                $('#content_area').addClass('BlankContentArea');
            }
        }
		else if (pathName.match('Cat=2044') || pathName.match('Android-Smartphone-s/') || pathName.match('cat=2044')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_4').css('display', 'block');
            $('.newLeftMenu #display_menu_7, .newLeftMenu #display_menu_5, .newLeftMenu #display_menu_6, .newLeftMenu #display_menu_7, .newLeftMenu #display_menu_2').css('display', 'none');
            if (pathName.match('Android-Smartphone-s/') && prodMain === null) {
                $('#leftnav').css('display', 'block');
                $('#leftnav #display_menu_4').css('display', 'block');
                $('#leftnav #display_menu_7, #leftnav #display_menu_5, #leftnav #display_menu_6, .newLeftMenu #display_menu_8,.newLeftMenu #display_menu_2').css('display', 'none');
                $('#content_area').addClass('BlankContentArea');
            }
        }
		
		else if (pathName.match('Cat=2031') || pathName.match('Tablet-s/') || pathName.match('cat=2031')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_2').css('display', 'block');
          //  $('.newLeftMenu #display_menu_7, .newLeftMenu #display_menu_5, .newLeftMenu #display_menu_6, .newLeftMenu #display_menu_7').css('display', 'none');
            if (pathName.match('Tablet-s/') && prodMain === null) {
                $('#leftnav').css('display', 'block');
                $('#leftnav #display_menu_2').css('display', 'block');
               $('#leftnav #display_menu_7, #leftnav #display_menu_5, #leftnav #display_menu_6, .newLeftMenu #display_menu_8').css('display', 'none');
                $('#content_area').addClass('BlankContentArea');
            }
        }
		
		
		
		
		 else if (pathName.match('Cat=1858') || pathName.match('Ipod-s/') || pathName.match('cat=1858')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_5').css('display', 'block');
            $('.newLeftMenu #display_menu_3, .newLeftMenu #display_menu_7, .newLeftMenu #display_menu_6, .newLeftMenu #display_menu_8').css('display', 'none');
            if (pathName.match('Ipod-s/') && prodMain === null) {
                $('#leftnav').css('display', 'block');
                $('#leftnav #display_menu_5').css('display', 'block');
                $('#leftnav #display_menu_3, #leftnav #display_menu_7, #leftnav #display_menu_6, .newLeftMenu #display_menu_8').css('display', 'none');
                $('#content_area').addClass('BlankContentArea');
            }
        } else if (pathName.match('Cat=1998') || pathName.match('Stylus-s/') || pathName.match('cat=1998')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_6').css('display', 'block');
            $('.newLeftMenu #display_menu_5, .newLeftMenu #display_menu_3, .newLeftMenu #display_menu_7, .newLeftMenu #display_menu_8').css('display', 'none');
            if (prodMain === null) {
                $('#leftnav').css('display', 'block');
                $('#leftnav #display_menu_6').css('display', 'block');
                $('#leftnav #display_menu_3, #leftnav #display_menu_5, #leftnav #display_menu_7, #leftnav #display_menu_8').css('display', 'none');
                $('#content_area').addClass('BlankContentArea');
            }
        } else if (pathName.match('Cat=1868') || pathName.match('Mac-pc-s/') || pathName.match('cat=1868')) {
            $('.newLeftMenu').css('display', 'block');
            $('.newLeftMenu #display_menu_7').css('display', 'block');
            $('.newLeftMenu #display_menu_5, .newLeftMenu #display_menu_3, .newLeftMenu #display_menu_8, .newLeftMenu #display_menu_6').css('display', 'none');
            if (pathName.match('Mac-pc-s/') && prodMain === null) {
                $('#leftnav').css('display', 'block');
                $('#leftnav #display_menu_7').css('display', 'block');
                $('#leftnav #display_menu_3, #leftnav #display_menu_5, #leftnav #display_menu_8, #leftnav #display_menu_6').css('display', 'none');
                $('#content_area').addClass('BlankContentArea');
            }
        }
		
		
		
		 else {
            $('#leftnav').hide();
            $('#MainForm').css('width', '100%');
        }
        $('#content_middle > table:eq(0)').addClass('medailWrap');

        $('.proTAbleCatWrap').addClass('proTAbleCat');
        $('.proTAbleCat tr:nth-child(4n)').addClass('spacerCat');
        $('.proTAbleCat tr:eq(0)').addClass('proImgCat');
        $('.spacerCat + tr').addClass('proImgCat');
        $('.proImgCat + tr').addClass('proDetailCat');

        $('.proImgCat td').addClass('proTopImgCat');
        $('.proDetailCat td').addClass('proBotImgCat');
        $('.proBotImgCat > div > div').addClass('priceDiv');
        $('.priceDiv > div > font').addClass('ListPrice');
        $('.priceDiv > div > b').addClass('OurPrice');

        $('.priceDiv').after('<a class="ProductDetailsTxtAnchor" href="">Product Details &raquo;</a>');
        $('.ProductDetailsTxtAnchor').wrap('<div></div>');

        $('.proTopImgCat a').addClass('proBotImgCatAnchor');
        $('.proBotImgCatAnchor img').addClass('prodBotprodImg');
        $('.prodBotprodImg').parent().addClass('prodAnchors');

        var imgWidthlength = $('.prodBotprodImg').length;
        for (v = 0; v < imgWidthlength; v++) {
            var imgWidth = $('.prodBotprodImg:eq(0)').attr('width');
            if (imgWidth <= 500) {
                $('.prodBotprodImg:eq(0)').addClass('smallProdImg');
                $('.smallProdImg').css('width', 'auto');
            }
            $('.prodBotprodImg:eq(0)').attr('class', 'prodBotprodImgNew');

            var prodAnchors = $('.prodAnchors:eq(0)').attr('href');
            $('.ProductDetailsTxtAnchor:eq(0)').attr('href', prodAnchors);

            $('.ProductDetailsTxtAnchor:eq(0)').attr('class', 'ProductDetailsTxtAnchorNew');
            $('.prodAnchors:eq(0)').removeClass('prodAnchors');
        }
        $('.spacerCat td[background^="/v/vspfiles/templates/LogiixBackup/images/Grid_Divider_Horizontal.gif"] img').attr({
            height: '25'
        });

        $('.prodTable').before('<div><h3 class="leftNavHeading">Products</h3></div>');
        $('#MainForm .leftNavHeading').parents('div:eq(0)').addClass('prodHeadings');
        $('.sortTable table:eq(0) td:eq(0)').addClass('sortTD');
        $('.sortTD + td').addClass('pagination');
        $('.pagination').parent().addClass('sortTR');
        $('.sortTR + tr').addClass('nextBtnTR');
        $('.pagination').hide();
        $('.nextBtnTR > td').addClass('nextBtnTd');
        var nextBtnTR = $('.nextBtnTR').html();
        var sortTR = $('.sortTR').html();
        $('.sortTR, .nextBtnTR').hide();
        if (sortTR != null && nextBtnTR != null) {
            $('.breadCrumbTable table:eq(0) td:eq(0)').after(sortTR + nextBtnTR);
            $('.sortTD').attr({
                align: 'right',
                valign: ''
            });
            var prevBtn = $('.nextBtnTd:eq(0) input').length;
            if (prevBtn == 2) {
                $('.nextBtnTd:eq(0)').addClass('topControlBtns');
            }
        }
        $('.prodMainTable table:eq(0)').addClass('categoryDescriptionTable');

        $('.SearchResultPage').css('display', 'block');

        // ####################### Zoom product Image jquery Start Here #######################
        /*New Stuff
  $("td").hover(
    function () {
      $(this).append($("<b> ***</span>"));
    },
    function () {
      $(this).find("span:last").remove();
    }
);
*/
        $.each($('td'), function () {
            $(this).removeAttr('onmouseover');
            $(this).removeAttr('onmouseout');
        });


        /*	$('img').each(function(){
		          if( $(this).attr('src').match(/\.(jpg)/) ) {
		             $(this).addClass('effectzoom');
		              $(this).addClass('prodBotprodImgNew');
		          }
    });*/

        var proAlength = $('.proBotImgCatAnchor').length;
        for (i = 0; i < proAlength; i++) {


            /*	$('.proBotImgCatAnchor:eq('+ i +') img').wrap('<div class="effectzoom" /></div>');

			var newImgSrc = $('.proBotImgCatAnchor:eq('+ i +') img').attr('src').replace('-1.jpg','-2.jpg');
			$('.proBotImgCatAnchor:eq('+ i +') img').attr('src',newImgSrc); */

            var imgthWidth = $('.proBotImgCatAnchor:eq(' + i + ') img').attr('width');
            var imgthheight = $('.proBotImgCatAnchor:eq(' + i + ') img').attr('height');

            /*	$('.effectzoom').addClass('catProdImg');
				$('.effectzoom').addClass('v65-productDisplay-cell');*/

        }
        /*	 $(".effectzoom img").hover(
			function () {
				var imgsrcOld =  $(this).attr('src');
				var imgsrcOldsrc = imgsrcOld.replace('-1.jpg','-2.jpg')
				$(this).attr('src',imgsrcOldsrc);
						},
			function () {
				var imgsrcOld =  $(this).attr('src');
				var imgsrcOldsrc = imgsrcOld.replace('-2.jpg','-1.jpg')
				$(this).attr('src',imgsrcOldsrc);
						});*/

        // ####################### Zoom product Image jquery End Here #######################
		//http://www.logiix.net/Blue-Piston-Wireless-Rechargeable-Speaker-p/blue-piston-bluetooth-speaker.htm
		//http://www.logiix.net/USB-3-0-Slim-SD-Reader-p/usb-3-0-slim-sd-reader.htm
		//http://www.logiix.net/Platinum-Book-Mini-for-iPad-mini-p/platinum-book-ipad-mini-case.htm
        $('#content_area').css('display', 'block');
    }































});