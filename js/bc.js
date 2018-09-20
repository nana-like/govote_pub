$(function() {
  var loginEvt = function() {
    $(".select-item").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });

    $(".selectbox-item button").on("click", function(e) {
      e.preventDefault();
      var val = $(this).text();
      $(this)
        .parents(".select-item")
        .find("input")
        .val(val);
      $("[class$='email-info']").addClass("active");
    });

    $("#input-login-email").on("keyup", function() {
      var val = $(this).val();
      if (val.length > 0) {
        $(".login-body .button-wrap .button-style01").removeAttr("disabled");
      } else {
        $(".login-body .button-wrap .button-style01").prop("disabled", true);
      }
    });

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

  var signupEvt = function() {
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

  var settingEvt = function() {
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

  var walletEvt = function() {
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

    $(".details-list").on("click", ".link", function(e) {
      e.stopPropagation();
      alert("링크 이동");
    });

    $(".details-list").on("click", ".button-delete-details", function() {
      // alert("내역 삭제");
      $(this)
        .parent()
        .remove();
    });
  };

  $(window).on("load", function() {
    loginEvt();
    walletEvt();
    signupEvt();
    settingEvt();
  });
});
