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

  var walletEvt = function() {
    $("#testButton_delete_me").on("click", function() {
      var random = Math.floor(Math.random() * 100);
      if (random <= 50) {
        var type = "in";
      } else {
        var type = "out";
      }
      var elem = `
      <li class="type-${type}">
        <div class="details-block">
          <div class="value">${random}</div>
          <div class="label">BCX</div>
        </div>
        <div class="details-block">
          <div class="date">2018년 10월 31일 오후 5시 30분</div>
          <div class="hash">0x2620032cc92a7e25b43f9b94676905edf5339597</div>
        </div>
        <button class="button-style-drawer"></button>
      </li>`;
      $(".wallet-main").removeClass("init");
      $(".wallet-main .details-list").append(elem);
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
  };
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

  $(window).on("load", function() {
    loginEvt();
    walletEvt();
    signupEvt();
  });
});
