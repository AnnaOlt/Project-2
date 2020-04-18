$(document).ready(function() {
  $.ajax("api/questions/random", {
    type: "GET",
  }).then(function(question) {
    $("#left-choice").text(question.left_choice);
    $("#right-choice").text(question.right_choice);

    $("#left-choice").click(async function() {
      await answerQuestion(question.id, "left");
      renderResults(question, "left");
    });

    $("#right-choice").click(async function() {
      await answerQuestion(question.id, "right");
      renderResults(question, "right");
    });
  });

  $("#nextBtn").hide("#nextBtn");
  $(".options").click(function() {
    $("#nextBtn").show("#nextBtn");
  });
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
  // $("#game-container").append(chart);
}
