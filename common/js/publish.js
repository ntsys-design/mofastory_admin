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

  // sns현황 상세페이지 이미지 모달 팝업
  $(window).scroll(function () {
    let scrTop = $(this).scrollTop()
    $('.embassy_img').on('click',function(){
    $('.img_modal').show()
    $('.img_modal').css({'top' : scrTop + 'px'})
    $('body').css({'overflow' : 'hidden'})
    }) 
  
    // 클로즈 버튼
    $('.close').on('click',function(){
    $('.img_modal').hide()
    $('body').css({'overflow' : 'auto'})
  
    })
  
  })
  
// 0403  통계관리 페이지 
// 조건 선택
$('.select_m li button').on('click',function(){
  $('.select_m li button').removeClass('active')
  $(this).addClass('active')
})