// sns현황 페이지 리스트 checked 
$(document).ready(function() {
  $("input:checkbox").on('click', function() {
        if ( $(this).prop('checked') ) {
          $(this).closest('tr').addClass("selected");
        } else {
          $(this).closest('tr').removeClass("selected");
        }
      });
  });
// sns현황 조회조건 sns 선택
  $('.select_sns li button').on('click',function(){
    $('.select_sns li button').removeClass('active')
    $(this).addClass('active')
  })
  // sns현황 조회조건 콘텐츠 선택
  $('.select_contents li button').on('click',function(){
    $('.select_contents li button').removeClass('active')
    $(this).addClass('active')
  })
  // 리스트 페이지네이션
  $('.pagination ul li a').on('click',function(){
    $('.pagination ul li a').removeClass('active')
    $(this).addClass('active')
  })

  
    $('.embassy_img').on('click',function(){
      $('.dim').css({'display' : 'block'})
    $('.img_modal').show()
    $('.img_modal').css({'top' : scrTop + 'px'})
     $('body').css({'overflow' : 'hidden'})
    })
  
    
  
  // 상단 클로즈 버튼
    $('.close').on('click',function(){
    $('.img_modal').hide()
    $('.dim').css({'display' : 'none'})
    $('body').css({'overflow' : 'auto'})
  
    })
  
   
  

