$(document).ready(function () {
    var pathName = window.location.href;
	
	
	
    if (pathName.match('/ProductDetails.asp') || pathName.match('-p/')) { 

        $('#content_area').addClass('productPageContentArea');
        $('td.vCSS_breadcrumb_td').addClass('breadCrumbTD');
        $('#leftnav').hide();
        $('.breadCrumbTD').parent().addClass('breadCrumbTR');
        $('.breadCrumbTR + tr').addClass('prodDetailsTR');
        $('.prodDetailsTR > td:first').addClass('leftSectionTD');
        $('.prodDetailsTR > td:last').addClass('RightSectionTD');
        var prodNameLarge = $('.breadCrumbTD font.productnamecolorLARGE').html();
        $('.breadCrumbTD font.productnamecolorLARGE').hide();
        $('.RightSectionTD > .colors_pricebox:eq(0)').before('<div class="productName">' + prodNameLarge + '</div>');
        $('.RightSectionTD table.colors_pricebox table:eq(0)').addClass('prodDataTable');
        $('.prodDataTable tr:eq(0), .prodDataTable tr:last').remove();
        $('.prodDataTable tr:eq(0)').addClass('prodDataTR');
        $('.RightSectionTD table.colors_pricebox td[background^="/v/vspfiles/templates/LogiixBackup/images/PBox_Border_Left.gif"]').remove();
        $('.RightSectionTD > table.colors_pricebox').removeClass('colors_pricebox');
        $('#v65-productdetail-action-wrapper').prev('td:eq(0)').addClass('ProdDesPriceTd');
        $('.ProdDesPriceTd > div').addClass('priceSection');
        var priceSection = $('.priceSection').html();
        $('.priceSection').hide();
        $('.productName').after('<div class="priceSection">' + priceSection + '</div>');
        $('.priceSection font:eq(0)').addClass('ListPrice');
        $('.ListPrice').next().next().addClass('OurPrice');
        var prodDis = $('.ProdDesPriceTd').html();
        $('.ProdDesPriceTd').hide();
        $('.priceSection').after('<div class="prodDis">' + prodDis + '</div>');
        $('#v65-productdetail-action-wrapper').attr('align', 'left');
        /*	$('.vCSS_input_addtocart').parent().addClass('AddToCartTD');*/
        $('.AddToCartTD').prev().addClass('qtyTD');
        var qtyTD = $('.qtyTD').html();
        /*	$('.qtyTD').hide();*/
        $('.AddToCartTD').parents('tr:eq(0)').before('<tr class="qtyTR"><td class="qtyTD"><div class="qtyBox">' + qtyTD + '</div></td></tr>');
        $('.qtyTR').next().addClass('AddToCartTR');
        var facilityBox = $('.facilityBox').html();
        /*	$('.facilityBox').hide();*/
        if (facilityBox != null) {
            $('.AddToCartTR').after('<tr><td><div class="facilityBox">' + facilityBox + '</div></td></tr>');
        }
        $('#options_table').parents('table:eq(0)').addClass('SelectColorTable');
        $('.SelectColorTable').parents('tr:eq(0)').addClass('SelectColorTableMainTR');
        $('.SelectColorTableMainTR td[background^="/v/vspfiles/templates/LogiixBackup/images/PBox_Border_Right.gif"]').remove();
        $('.SelectColorTableMainTR + tr').remove();
        $('.SelectColorTableMainTR').prev('tr').remove();
        $('.SelectColorTableMainTR').prev('tr').remove();
		
        var selectColor = $('#options_table').html();
        /*$('#options_table').hide();*/
        if (selectColor != null) {
            $('.qtyTD').append('<table id="options_table">' + selectColor + '</table>');
            $('.qtyTD #options_table').wrap('<div></div>');
            $('.qtyTD #options_table').parent().addClass('chooseColorMain');
            $('.chooseColorMain #options_table tr:eq(0)').remove();
			$('#options_table').find('tr').eq(0).remove();
			var i = 0 ;
        	$('#options_table').find('tr').each(function(k){ 
             		
			 if($(this).find('td').eq(0).html() == "")
			 {
			   $(this).find('td').eq(0).append($(this).find('td').eq(1).html());
			   $(this).find('td').eq(1).html('');
			   $(this).find('td').eq(2).remove();
			   $(this).find('td').eq(0).attr('colspan','3');
			 }
			 else
			 {
				var pt = $(this).find('td').eq(0).html();
				$(this).find('td').eq(0).html('<div style="float:none">'+pt+'</div>');
			    $(this).find('td').eq(0).append('<div style="float:left">'+$(this).find('td').eq(2).html()+'</div>');
				$(this).find('td').eq(2).html('');
				if(i == 0)
				{
				    $(this).find('td').eq(2).attr('valign','top');
					$(this).find('td').eq(2).html(($('.v65-productdetail-cartqty').parent()));
					i++;
				}
			 }
			 $(this).find('td').attr('valign','top');
			 
			});
			$('.SelectColorTable').append('<tr><td>'+$('#ProductDetail_TechSpecs_div').html()+'</div></td></tr>');
			
			//$('#v65-productdetail-action-wrapper').next().next('table').html('<tr><td>rdffdghdfh</td></tr>');
			//alert($('#options_table').next().next('table').html());
			//$('#options_table').next().next('table').find('td:last').append($('#ProductDetail_TechSpecs_div'))
        } else {
            $('.qtyBox').css('width', '100%');
            $('.vCSS_input_addtocart').css('top','21px');
			$('#v65-productdetail-action-wrapper').find('table').eq(0).css({'padding-bottom': '13px', 'border-bottom': '1px solid #F7C78F'});
			$('#v65-productdetail-action-wrapper').find('table').eq(0).next().next('table').append('<tr><td>'+$('#ProductDetail_TechSpecs_div').html()+'</td></tr>');
        }
        $('#v65-product-parent + table').addClass('BottomSectionTable');
        $('.BottomSectionTable td:eq(0) > table:eq(0), .BottomSectionTable td:eq(0) > table:eq(1), .BottomSectionTable td:eq(0) > div').addClass('prodBottomDisTables');


        $('.BottomSectionTable').find('tr').eq(0).find('td').eq(0).find('table[class="prodBottomDisTables"]').css({
            'display': 'none'
        });
        $('.BottomSectionTable').find('tr').eq(0).find('td').eq(0).find('table[class="prodBottomDisTables"]').next('table').css({
            'display': 'none'
        });
        $('#ProductDetail_ProductDetails_div2').find('table').eq(0).attr('width', '48%');
        

        $('.prodDis').css({
            'display': 'none'
        });
        $('#options_table').parent().css({
            'border-bottom': '1px solid #F7C78F',
            'padding-bottom': '13px',
            'margin-top': '-43px'
        });
        $('#ProductDetail_ProductDetails_div2').find('table').eq(0).find('tr').eq(0).remove();
        $('#ProductDetail_ProductDetails_div2').find('table').eq(0).find('tr').eq(0).remove();
        $('.RightSectionTD').append('<table><tr>' + $('.v65-product-related-header-row').html() + '</tr></table>');
        $('.v65-product-related-header-row').remove();
       
       // $('.featurediv').prepend('<h2 class="featuretitle">Features</h2>');



        $('.RelatedProductImageNewest').each(function (index) {

            $(this).find('td:last').css('display', 'none');
            $(this).find('td:nth-child(3)').css('display', 'none');
            $(this).find('td').attr('width', '50%');

        });

        $('.RelatedProductNameNew').each(function (index) {

            $(this).find('td:last').css('display', 'none');
            $(this).find('td:nth-child(3)').css('display', 'none');
            $(this).find('td').attr('width', '50%');



        });

        $('.v65-productDisplay-row').each(function (index) {

            $(this).find('td:last').css('display', 'none');
            $(this).find('td:nth-child(3)').css('display', 'none');
            $(this).find('td').attr('width', '50%');


        });



        var ii = $('.vCSS_img_icon_free_shipping').parent().parent().html().split('<br>');
        $('#options_table').append('<tr><td colspan="2">' + ii[1] + '</td></tr>');
		$('#options_table').find('.vCSS_img_icon_free_shipping').parent().parent().parent().before($('.vCSS_input_addtocart').parent().parent());
		$('.leftSectionTD').append('<div class="featurediv"><p>' + $('.prodDis').find('span[itemprop="description"]').html() + '</p></div>');
        
        $('.featurediv').find('table').eq(0).attr('width', '100%');
        $('.featurediv').find('table').eq(0).find('tr:last').remove();
         var feature = $('.featurediv').find('table').eq(0).find('tr:nth-child(1)').find('td:nth-child(2)').html();
        $('.featurediv').find('table').eq(0).remove();
        $('.featurediv').append(feature);
		 $('.featurediv').prepend('<h2 class="featuretitle">Features</h2>');
			 

    

		
		
        $('.leftSectionTD').append('<div class="review"></div>');

        $('.review').prepend('<h2 class="reviewtitle">Review</h2>');
        $('.productName').next('div').find('a').remove();
        //$('.SelectColorTable').append('<img src="/v/vspfiles/templates/LogiixBackup/images/featureimages.png" alt="features" style="padding-bottom: 64px;">');
		
		
		if ($('#vCSS_mainform').parent().html().indexOf('Be the first to write a review') > 0 )
		{
			var str = $('#vCSS_mainform').parent().html();
			sr = str.replace('Share your knowledge of this product.','');
			$('#vCSS_mainform').parent().html(sr);
			$('.review').append('Share your knowledge of this product.');
			$('.review').append($('#vCSS_mainform').parent().find('a:last'));
		}
		
        $('.review').prepend($('.v65-product-reviews-cell').find('nobr'));
        $('.review').find('nobr').find('a').css({
            'font-size': '10pt',
            'font-weight': 'bold',
            'position': 'absolute',
            'right': '0',
            'text-transform': 'uppercase',
            'top': '16px'
        });
        $('#v65-product-reviews').css('display','none');


        $('.colors_descriptionbox').each(function (index) {
            if (index > 0) {
                $(this).parent().parent().parent().parent().prev('table').css('display', 'none');
                $(this).find('tr').eq(1).find('td').eq(1)
                var review = $(this).find('tr').eq(1).find('td').eq(1).html();
               // review = review.replace(' Was this review helpful to you? ', '');
                $('.review').append(review);
                $(this).parent().parent().parent().parent().css('display', 'none');

            }


        });
        $('.review').find('img').parent('a').css('display', 'none');
		
		
        //$('.prodBottomDisTables').hide();

        $('.v65-product-related-header-cell .colors_backgroundlight').css('background', '#fff');
        $('.v65-product-related-header-cell .colors_backgroundlight').parents('table:eq(0)').css('background', '#fff');
        $('.v65-product-related-header-cell .colors_backgroundlight').addClass('relatedHeading');
        $('.v65-productPhoto').parent().addClass('RelatedProductImage');
        $('.RelatedProductImage').prev().prev().addClass('RelatedProductName');
        $('.RelatedProductName td[background^="/v/vspfiles/templates/LogiixBackup/images/Grid_Divider_Vertical.gif"]').remove();
        var RelatedProductNameLength = $('.RelatedProductName').length;
        for (k = 0; k < RelatedProductNameLength; k++) {
            var RelatedProductImage = $('.RelatedProductImage:eq(0)').html();
            $('.RelatedProductImage:eq(0)').hide();
            $('.RelatedProductName:eq(0)').before('<tr class="RelatedProductImageNewest">' + RelatedProductImage + '</tr>');

            $('.RelatedProductImage:eq(0)').attr('class', 'RelatedProductImageNew');
            $('.RelatedProductName:eq(0)').attr('class', 'RelatedProductNameNew');
        }
        $('.v65-product-related-details-row tr td[background^="/v/vspfiles/templates/LogiixBackup/images/Grid_Divider_Horizontal.gif"] img').attr('height', '35');
        $('.v65-product-related-details-cell .v65-productPhoto img').addClass('relatedImg');
        var RelatedimgWidthlength = $('.relatedImg').length;
        for (b = 0; b < RelatedimgWidthlength; b++) {
            var RelatedimgWidth = $('.relatedImg:eq(0)').attr('width');
            if (RelatedimgWidth < 267) {
                $('.relatedImg:eq(0)').addClass('smallRealtedProdImg');
                $('.smallRealtedProdImg').css('width', 'auto');
            }
            $('.relatedImg:eq(0)').attr('class', 'relatedImgNew');
        }


        $('.productPageContentArea').css('display', 'block');
        $('#content_area').css('display', 'block');
		if (selectColor != null) {
		if($('.priceSection').html().indexOf('Stock Status:In Stock') > 0 || $('.priceSection').html().indexOf('itemprop="availability"') > 0 )
		{
			$('.productName').after('<div style="float:left; margin: 10px 0px;"><span><img src="/v/vspfiles/templates/LogiixBackup/images/instock.png" style="line-height: 20px; margin-bottom: -3px;" ></span>&nbsp;&nbsp;<span style="font-size: 12pt;">IN STOCK</span>&nbsp;&nbsp;<span><img src="/v/vspfiles/templates/LogiixBackup/images/star5.gif"></span><span>&nbsp;&nbsp;<a id="linktrt" href="#" style="color:#000;font-size: 10pt;">Write a Review</a></span></div>');
			var kt = $('.priceSection').html().replace('Stock Status:In Stock','');
			$('.priceSection').html(kt);
			
		}
		else
		{
			$('.productName').after('<div style="float:left; margin: 10px 0px;"><span><img src="/v/vspfiles/templates/LogiixBackup/images/instock.png" style="line-height: 20px; margin-bottom: -3px;" ></span>&nbsp;&nbsp;<span style="font-size: 12pt;">OUT OF STOCK</span>&nbsp;&nbsp;<span><img src="/v/vspfiles/templates/LogiixBackup/images/star5.gif"></span><span>&nbsp;&nbsp;<a  id="linktrt" href="#" style="color:#000;font-size: 10pt;">Write a Review</a></span></div>');
			var kt = $('.priceSection').html().replace('Stock Status:(Out of Stock)','');
			$('.priceSection').html(kt);
		}
		if($('#options_table').html().indexOf('Stock Status:In Stock') > 0 || $('#options_table').html().indexOf('Stock Status:(Out of Stock)') > 0 )
				{
				
				if($('#options_table').html().indexOf('Stock Status:(Out of Stock)') > 0)
					{
						var ktp = $('#options_table').html().replace('Stock Status:(Out of Stock)','');
						$('#options_table').html(ktp);
					}
				if($('#options_table').html().indexOf('Stock Status:In Stock') > 0)
					{
					
						var ktpt = $('#options_table').html().replace('Stock Status:In Stock','');
						$('#options_table').html(ktpt);
					}
				}
				}
		else{
		if($('.priceSection').html().indexOf('Stock Status:In Stock') > 0 || $('.priceSection').html().indexOf('itemprop="availability"') > 0 )
		{
			$('.productName').after('<div style="float:left; margin: 10px 0px;"><span><img src="/v/vspfiles/templates/LogiixBackup/images/instock.png" style="line-height: 20px; margin-bottom: -3px;" ></span>&nbsp;&nbsp;<span style="font-size: 12pt;">IN STOCK</span>&nbsp;&nbsp;<span><img src="/v/vspfiles/templates/LogiixBackup/images/star5.gif"></span><span>&nbsp;&nbsp;<a id="linktrt" href="#" style="color:#000;font-size: 10pt;">Write a Review</a></span></div>');
			var kt = $('.priceSection').html().replace('Stock Status:In Stock','');
			$('.priceSection').html(kt);
			
		}
		else
		{
			$('.productName').after('<div style="float:left; margin: 10px 0px;"><span><img src="/v/vspfiles/templates/LogiixBackup/images/instock.png" style="line-height: 20px; margin-bottom: -3px;" ></span>&nbsp;&nbsp;<span style="font-size: 12pt;">OUT OF STOCK</span>&nbsp;&nbsp;<span><img src="/v/vspfiles/templates/LogiixBackup/images/star5.gif"></span><span>&nbsp;&nbsp;<a id="linktrt" href="#" style="color:#000;font-size: 10pt;">Write a Review</a></span></div>');
			var kt = $('.priceSection').html().replace('Stock Status:(Out of Stock)','');
			$('.priceSection').html(kt);
		}
		}
		if ($('.review').html().indexOf('Be the first to write a review') > 0 )
		{
		
			var ytu = $('.review').find('a').attr('href');
			$('#linktrt').attr('href',ytu);
		}
		else
		{
		
			var ytut = $('.review').find('nobr').find('a').attr('href');
			$('#linktrt').attr('href',ytut);
		}
    }


    $('img.catProdImg').load(function () {
        var proAlengthTwo = $('img.catProdImg').length;
        for (p = 0; p < proAlengthTwo; p++) {
            var imgthWidth = $('img.catProdImg:eq(' + p + ')').attr('width');
            var imgthheight = $('img.catProdImg:eq(' + p + ')').attr('height');
            if (imgthWidth > '200') {
                $('img.catProdImg:eq(' + p + ')').attr('width', '200');
            } else if (imgthheight > '300') {
                $('img.catProdImg:eq(' + p + ')').attr('height', '300');
            }
        }

    });

    $('#content_area').css('display', 'block');
		



});