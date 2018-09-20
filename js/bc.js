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

  $(window).on("load", function() {
    loginEvt();
    walletEvt();
    signupEvt();
    settingEvt();
  });
});

// $(document)
//   .on("click", "ul span", function() {
//     $(this).toggleClass("off on");
//   })
//   .on("swipeleft", "ul li", function(e) {
//     // $(this).off("click");
//     $(this)
//       .css({
//         transform: "translateX(-40px)"
//       })
//       .one(
//         "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
//         function() {
//           console.log("~~~~");
//           $(this).one("click", function() {
//             $(this).css({
//               transform: "translateX(0)"
//             });
//             $(this).addClass("테스트");
//           });
//         }
//       );
//   });

$(function() {
  // $("li").on("swiperight", function() {
  //   console.log("li swiped to right");

  //   $(this)
  //     .addClass("swiped")
  //     .on(
  //       "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
  //       function() {
  //         $(this).addClass("트랜지션 끝났넹");
  //       }
  //     );
  // });

  $(document).on("click", "#details-list-item a", function(e) {
    e.stopPropagation();
    alert("click lnik~!!!");
  });

  $(document).on("click", ".button-style-drawer", function(e) {
    e.stopPropagation();
    alert("click drawer!");
  });

  $(document).on("swipeleft", "#details-list-item", function() {
    $(this)
      .addClass("swiped")
      .one(
        "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
        function() {
          $(this).one("click swiperight", function() {
            $(this).removeClass("swiped");
          });
        }
      );
  });
});

// $(function() {
//   function swipedetect(el, callback) {
//     var touchsurface = el,
//       swipedir,
//       startX,
//       startY,
//       distX,
//       distY,
//       threshold = 150, //required min distance traveled to be considered swipe
//       restraint = 100, // maximum distance allowed at the same time in perpendicular direction
//       allowedTime = 300, // maximum time allowed to travel that distance
//       elapsedTime,
//       startTime,
//       handleswipe = callback || function(swipedir) {};

//     touchsurface.addEventListener(
//       "touchstart",
//       function(e) {
//         var touchobj = e.changedTouches[0];
//         swipedir = "none";
//         dist = 0;
//         startX = touchobj.pageX;
//         startY = touchobj.pageY;
//         startTime = new Date().getTime(); // record time when finger first makes contact with surface
//         e.preventDefault();
//       },
//       false
//     );

//     touchsurface.addEventListener(
//       "touchmove",
//       function(e) {
//         e.preventDefault(); // prevent scrolling when inside DIV
//       },
//       false
//     );

//     touchsurface.addEventListener(
//       "touchend",
//       function(e) {
//         var touchobj = e.changedTouches[0];
//         distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
//         distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
//         elapsedTime = new Date().getTime() - startTime; // get time elapsed
//         if (elapsedTime <= allowedTime) {
//           // first condition for awipe met
//           if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
//             // 2nd condition for horizontal swipe met
//             swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
//           } else if (
//             Math.abs(distY) >= threshold &&
//             Math.abs(distX) <= restraint
//           ) {
//             // 2nd condition for vertical swipe met
//             swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
//           }
//         }
//         handleswipe(swipedir);
//         e.preventDefault();
//       },
//       false
//     );
//   }

//   var el = document.getElementById("details-list-item");

//   swipedetect(el, function(swipedir) {
//     // swipedir contains either "none", "left", "right", "top", or "down"
//     console.log('Swiped <span style="color:yellow">' + swipedir + "</span>");
//   });
// });
