// // 禁止右键
// document.oncontextmenu = function () {
//   return false;
// }
// // 禁止f12
// document.onkeydown = function () {
//   if (window.event && window.event.keyCode == 123) {
//     window.event.returnValue = false;
//   }
// }
// // 禁止复制
// document.oncopy = function (event) {
//   console.log("ctrl + c");
//   return false;
// }

  var notyf =null
  notyf = new Notyf({
    duration: 1000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'success',
        background: '#006CFF',
        duration: 2000,
      },
      {
        type: 'kkk',
        background: '#006CFF',
        duration: 7000,
        dismissible: true,
      },
      {
        type: 'error',
        background: 'indianred',
        duration: 3000,
        dismissible: true,
      },
    ],
  })
/**
 * 点击打开新页面跳转链接
 * @param {string} url
 */
function router(url) {
  const strUrl = url
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style = 'display: none'
  a.target = '_blank'
  a.href = strUrl
  a.click()
  document.body.removeChild(a)
}

var wow =null
 wow = new WOW(
    {
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    },
  )
  wow?.init()

  var  mySwiper = null
  mySwiper = new Swiper('.header-swiper', {
  autoplay: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop: true,
  noSwiping: true,
})
function SetSwiperIndex(index) {
  $('.inactive').each(function () {
    if ($(this)[0] === $('.inactive')[index])
      $(this).addClass('active')

    else
      $(this).removeClass('active')
  })
}
SetSwiperIndex(mySwiper.realIndex)
mySwiper.on('slideChange', () => {
  SetSwiperIndex(mySwiper.realIndex)
})
window.addEventListener('scroll', () => {
  const el = document.querySelector('.header')
  if ((document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset) > 100)
    el.classList.add('untransparent')

  else
    el.classList.remove('untransparent')
})

$('.right-flow-4').click(() => {
  $('html,body').animate({ scrollTop: 0 }, 500)
})

$('.expand').click(() => {
  $('.m').hasClass('m-all') ? $('.m').removeClass('m-all') : $('.m').addClass('m-all')
})

$('.solve-item').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
  $($('.r')[$(this).attr('data-index')]).addClass('flex-show').siblings().removeClass('flex-show')
})
$('.h-new-left-2').click(function () {
  $(this).addClass('h-new-left-active').siblings().removeClass('h-new-left-active')
  $($('.h-new-z')[$(this).attr('data-index')]).addClass('block-show').siblings().removeClass('block-show')
})
var cuSwiper =null
cuSwiper = new Swiper('.cu-swiper', {
  autoplay: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop: true,
})

function SetSwiperIndexCu(index) {
  $('.cu-inactive').each(function () {
    if ($(this)[0] === $('.cu-inactive')[index])
      $(this).addClass('cu-active')

    else
      $(this).removeClass('cu-active')
  })
}
SetSwiperIndexCu(cuSwiper.realIndex)
cuSwiper.on('slideChange', () => {
  console.log()
  SetSwiperIndexCu(cuSwiper.realIndex)
})

var reg_tel = ''
reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
$('.submit-btn').click(() => {
  if (!$('#nameee').val())
    notyf.error('姓名为空!')

  else if (!reg_tel.test($('#coneee').val()))
    notyf.error('手机号格式错误!')

  else
    submitForm({ name: $('#nameee').val(), connect: $('#coneee').val() })
})

function submitForm(data) {
  $.ajax({
    url: 'https://formspree.io/f/xnqybpbb',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data,
    crossDomain: true,
  }).always(() => {
    notyf.success('提交成功')
    $('#coneee').val('')
    $('#nameee').val('')
  })
}

var clipboard = null
clipboard = new ClipboardJS('.copyphone')
clipboard.on('success', (e) => {
  notyf.open(
    {
      type: 'kkk',
      message: '已成功复制联系电话:4006088330',
    },
  )
})

$('.h-new-imgg').click(() => {
  router('./doc/detail.html')
})
$('.right-flow-2').click(() => {
  router('https://work.weixin.qq.com/kfid/kfcdb13b7bf17761072')
})
$('.m-btn1').click(function () {
  if ($(this).hasClass('disablee')) {

  }
  else {
    router('https://standard.xwork.cn/login')
  }
})
