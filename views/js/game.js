$(document).ready(function() {
  $("#nextBtn").hide();
  $.ajax("api/questions/random", {
    type: "GET",
  }).then(function(question) {
    $("#left-choice").text(question.left_choice);
    $("#right-choice").text(question.right_choice);

    $("#left-choice").click(async function() {
      $('#gif-container').empty();
      await answerQuestion(question.id, "left");
      renderResults(question, "left");
    });

    $("#right-choice").click(async function() {
      $('#gif-container').empty();
      await answerQuestion(question.id, "right");
      renderResults(question, "right");
    });
    renderGif(question.title);
  });

  $(".options").click(function() {
    $("#nextBtn").show();
  });

  $("#nextBtn").click(function () {
    $("#nextBtn").hide();
    window.location.replace('/game.html');
  })
});

function answerQuestion(id, answer) {
  return $.ajax("api/answers", {
    type: "POST",
    data: {
      questionId: id,
      choice: answer,
    },
  });
}

async function renderGif(query) {
  $('#gif-container').empty();
  const { data } = await $.ajax('https://api.giphy.com/v1/gifs/search', {
    type: 'GET',
    data: {
      api_key: '1N9Tv8EfRQ7JPhL1dRmipLh1fipUjo0a',
      q: query,
      limit: 1, 
      rating: 'G',
      lang: 'en'
    },
  });
  const image = $('<img>');
  image.attr('src', data[0].images.original.url);
  $('#gif-container').append(image);

}

function renderResults(question, answer) {
  $("#game-container").empty();

  const left_total =
    answer === "left"
      ? question.left_answer_count + 1
      : question.left_answer_count;
  const right_total =
    answer === "right"
      ? question.right_answer_count + 1
      : question.right_answer_count;

  $("#game-container").CanvasJSChart({
    data: [
      {
        type: "pie",
        dataPoints: [
          { y: left_total || 0, indexLabel: question.left_choice },
          { y: right_total || 0, indexLabel: question.right_choice },
        ],
      },
    ],
  });
  $(".canvasjs-chart-container").css({
    top: '4em'
  })
  // $("#game-container").append(chart);
}
