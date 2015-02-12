var wordOrder = function(words) {
  var unsorted_array = [];
  var input = words.split(" ");
  var frequencies = [];
  var sorted_array = [];
  var sorted_frequencies = [];

  input.forEach(function(word) {
    if ((unsorted_array.indexOf(word) === -1) && (word.length > 0)) {
      unsorted_array.unshift(word);
    }
  });

  unsorted_array.forEach(function(outword) {
    var frequency = 0;
    input.forEach(function(inword) {
      if (outword === inword) {
        frequency++;
      }
    });
        frequencies.push(frequency);
  });

  for (var i = 0; i < frequencies.length; i++) {
    sorted_frequencies[i] = frequencies[i];
  };

  sorted_frequencies.sort();


  sorted_frequencies.forEach(function(number) {
    sorted_array.unshift(unsorted_array[frequencies.indexOf(number)]);
    delete unsorted_array[frequencies.indexOf(number)];
    delete frequencies[frequencies.indexOf(number)];
  });
  return sorted_array;
};

$(document).ready( function() {
  $("form#word_order").submit(function(event) {
    var words = $("input#words").val();
    var result = wordOrder(words);

    $("#list").text(result);

    $(".result").show();

    event.preventDefault();
  });
});

//   // loops through each word
//   for (var i = 0; i < input.length; i++) {
//
//     // checks each word for duplicates
//     if ((unsorted_array.indexOf(input[i]) === -1) && (input[i].length !== 0)){
//       unsorted_array.push(input[i]);
//     }
//   };
//   return unsorted_array;
// };
