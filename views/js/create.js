$('#create-question-form').submit(async function (event) {
  event.preventDefault();

  const title = $('#question-title').val();
  const left_choice = $('#left-choice').val();
  const right_choice = $('#right-choice').val();

  if (left_choice && right_choice) {
    await $.ajax('/api/questions', {
      type: 'POST',
      data: {title, left_choice, right_choice}
    });

    window.location.replace('/game.html');
  } else {
    console.error({ message: 'Missing input' })
  }
});