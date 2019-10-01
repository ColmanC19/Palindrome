// business logic
var wordReverse = function reverseString(word) {
  return word.split("").reverse().join("");
};

// user interface logic
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();

    var result = (word === wordReverse(word));

    $(".word").text(word);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
