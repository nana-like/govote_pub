$(function() {
  ///////////////////
  var commonEvt = function() {
    /* Disable scroll */

    // $("#wrapper").on("scroll touchmove mousewheel", function(e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return false;
    // });

    //셀렉트 아이템에 대한 active 클래스 추가
    $(".select-item").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
    //인풋 입력 시 삭제 버튼에 active 클래스 추가
    $(".able-delete").each(function() {
      if ($(this).val().length > 0) {
        $(this)
          .next(".button-search-delete")
          .addClass("active");
      } else {
        $(this)
          .next(".button-search-delete")
          .removeClass("active");
      }
    });
    $(".able-delete").on("change keyup", function() {
      if ($(this).val().length > 0) {
        $(this)
          .next(".button-search-delete")
          .addClass("active");
      } else {
        $(this)
          .next(".button-search-delete")
          .removeClass("active");
      }
    });
    //인풋 삭제 버튼에 대한 처리
    $(".button-search-delete").on("click", function() {
      $(this)
        .removeClass("active")
        .prev(".able-delete")
        .val("")
        .focus();
    });
  };

  ///////////////////
  var loginEvt = function() {
    //이메일에 active 클래스 추가
    $(".selectbox-item button").on("click", function(e) {
      e.preventDefault();
      var val = $(this).text();
      $(this)
        .parents(".select-item")
        .find("input")
        .val(val);
      $("[class$='email-info']").addClass("active");
    });

    //버튼 disabled 해제
    $("#input-login-email").on("keyup", function() {
      var val = $(this).val();
      if (val.length > 0) {
        $(".login-body .button-wrap .button-style01").removeAttr("disabled");
      } else {
        $(".login-body .button-wrap .button-style01").prop("disabled", true);
      }
    });

    //error 영역에 미시지 추가
    $("#input-login-password").on("keyup", function() {
      var val = $(this).val();
      if (val.length > 0) {
        $(this)
          .next(".login-area-error")
          .text("영문, 숫자, 특수문자 포함 6~15자로 입력해주세요.");
      } else {
        $(this)
          .next(".login-area-error")
          .text("");
      }
    });
  };

  ///////////////////
  var signupEvt = function() {
    //에러 영역에 미시지 추가
    $("#input-signup-email").on("keyup", function() {
      if ($(this).val().length > 0) {
        $(this)
          .next()
          .next(".signup-area-error")
          .text("이미 가입된 메일 주소입니다.");
      } else {
        $(this)
          .next()
          .next(".signup-area-error")
          .text("");
      }
    });
    //에러 영역에 미시지 추가
    $("#input-signup-password").on("keyup", function() {
      if ($(this).val().length > 0) {
        $(this)
          .next(".signup-area-error")
          .text("영문, 숫자, 특수문자 포함 6~15자로 입력해주세요.");
      } else {
        $(this)
          .next(".signup-area-error")
          .text("");
      }
    });
    //에러 영역에 미시지 추가
    $("#input-signup-passwordCheck").on("keyup", function() {
      if ($(this).val().length > 0) {
        $(this)
          .next(".signup-area-error")
          .text("비밀번호가 일치하지 않습니다.");
      } else {
        $(this)
          .next(".signup-area-error")
          .text("");
      }
    });
  };

  ///////////////////
  var settingEvt = function() {
    //사용자 정보 수정 시 disable 클래스 및 readonly 토글
    $("#button-setting-userinfo").on("click", function() {
      if ($(".user-information-setting").hasClass("disable")) {
        $(".user-information-setting").removeClass("disable");
        $(".user-information-setting input").each(function() {
          $(this).removeAttr("readonly");
        });
        $(this).text("수정완료");
      } else {
        $(".user-information-setting").addClass("disable");
        $(".user-information-setting input").each(function() {
          $(this).prop("readonly", true);
        });
        $(this).text("정보 수정하기");
      }
    });
  };

  ///////////////////
  var walletEvt = function() {
    //왼쪽 슬라이드로 삭제 버튼 노출
    $(".details-list").on("swipeleft", "#details-list-item", function() {
      $(this)
        .addClass("swiped")
        .one(
          "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
          function() {
            $(this).one("swiperight", function() {
              $(this).removeClass("swiped");
            });
          }
        );
    });

    //링크 클릭에 대한 알림
    $(".details-list").on("click", ".link", function(e) {
      e.stopPropagation();
      alert("링크 이동");
    });

    //거래내역 삭제
    $(".details-list").on("click", ".button-delete-details", function() {
      var itemLength = $(".details-list").children().length;
      if (itemLength < 2) {
        $(".wallet-main").addClass("init");
      }
      $(this)
        .parent()
        .remove();
    });
  };

  ///////////////////
  var dappEvt = function() {
    //스타 버튼 토글
    $(".body-dappDetails").on("click", ".button-toggle-star", function() {
      $(this).toggleClass("on");
    });

    //마이 디앱 삭제
    $(".body-myDApp").on("click", ".button-toggle-star", function() {
      var itemLength = $(".app-list-item").length;
      console.log(itemLength);
      if (itemLength < 2) {
        $(".myDApp-main").addClass("init");
      }
      $(this)
        .parent(".app-list-item")
        .remove();
    });
  };

  $(window).on("load", function() {
    commonEvt();
    loginEvt();
    walletEvt();
    signupEvt();
    settingEvt();
    dappEvt();
  });
});
