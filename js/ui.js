$(function() {
  // var $maskedInput = $(".input-masking");
  // $maskedInput.mobilePassword({
  //   checkInterval: 100, //set timeout to check whether all the characters are the same
  //   transDelay: 100, //delay to transform last letter
  //   character: "%u2217" //instead of the character
  // });

  ////

  var selectboxEvent = function() {
    var $selectBox = $(".selectbox");

    $selectBox.on("mousedown", function(event) {
      var selectData = $(this).data("ui-id");
      var selectId = selectData.split("-").slice(1).join("-").toString();
      var input = $("input").data("ui-id");
      $("input[data-ui-id='input-" + selectId + "']").focus();

      if (event.target.nodeName == "LI") {
        var selectContent = event.target.dataset.uiContent;
        $("input[data-ui-id='input-" + selectId + "']").attr(
          "value",
          selectContent
        );
        $(".login-area-email-info").addClass("active");
      }
    });

    // $(".input-select-ui").on("blur focusout", function(event){
    //   $(this).parent().removeClass("active");
    //   $(this)
    //     .next().next(".selectbox")
    //     .removeClass("active");
    // });
    $(".select-item").on("click", function(evt) {
      evt.stopPropagation();
    });

    $("body").on("click", function() {
      var $selectItem = $(".select-item");
      if ($selectItem.hasClass("active")) {
        $selectItem.removeClass("active");
        $selectItem.find(".selectbox").removeClass("active");
      }
    });
  };

  var selectItemClickEvent = function() {
    var $selectItem = $(".select-item");

    $selectItem.on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .find(".selectbox")
          .removeClass("active");
      } else {
        $selectItem.removeClass("active");
        $selectItem.find(".selectbox").removeClass("active");
        $(this).addClass("active");
        $(this)
          .find(".selectbox")
          .addClass("active");
      }
    });
  };

  $(window).on("load", function() {
    selectboxEvent();
    selectItemClickEvent();
  });
});
