function factorialResult (factorialValue) {
  let answer = 1;
  for (index = factorialValue; index > 0; index--) {
    answer = answer * index;
  }
  return answer
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const factorialValue = parseInt($("#factorialInput").val());
    $("#results").text(factorialResult(factorialValue));
  });
});