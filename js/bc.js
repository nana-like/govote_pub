// $(function() {
//   // var $maskedInput = $(".input-masking");
//   // $maskedInput.mobilePassword({
//   //   checkInterval: 100, //set timeout to check whether all the characters are the same
//   //   transDelay: 100, //delay to transform last letter
//   //   character: "%u2217" //instead of the character
//   // });

//   ////

//   var selectboxEvent = function() {
//     var $selectBox = $(".selectbox");

//     $selectBox.on("mousedown", function(event) {
//       var selectData = $(this).data("ui-id");
//       var selectId = selectData
//         .split("-")
//         .slice(1)
//         .join("-")
//         .toString();
//       var input = $("input").data("ui-id");
//       $("input[data-ui-id='input-" + selectId + "']").focus();

//       if (event.target.nodeName == "button") {
//         var selectContent = event.target.dataset.uiContent;
//         $("input[data-ui-id='input-" + selectId + "']").attr(
//           "value",
//           selectContent
//         );
//         $(".login-area-email-info").addClass("active");
//       }
//     });

//     $(".select-item").on("click", function(evt) {
//       evt.stopPropagation();
//     });

//     $("body").on("click", function() {
//       var $selectItem = $(".select-item");
//       if ($selectItem.hasClass("active")) {
//         $selectItem.removeClass("active");
//         $selectItem.find(".selectbox").removeClass("active");
//       }
//     });
//   };

//   var selectItemClickEvent = function() {
//     var $selectItem = $(".select-item");

//     $selectItem.on("click", function() {
//       if ($(this).hasClass("active")) {
//         $(this).removeClass("active");
//       } else {
//         $selectItem.removeClass("active");
//         $(this).addClass("active");
//       }
//     });
//   };

//   $(window).on("load", function() {
//     selectboxEvent();
//     selectItemClickEvent();
//   });
// });

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
      $(".login-area-email-info").addClass("active");
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

  $(window).on("load", function() {
    loginEvt();
    walletEvt();
  });
});
