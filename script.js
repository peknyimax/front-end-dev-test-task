const progressSteps = [...document.querySelectorAll('.progress__btn')];

// const progressSteps = document.querySelectorAll('.progress__btn');
console.log(progressSteps);

progressSteps.forEach((step) =>
  step.addEventListener('click', (e) => {
    e.preventDefault();
    const stepClicked = step.id.split('-').pop();
    const formBoxActive = document.querySelector('.form-box.-active');
    const formBoxChosen = document.querySelector(`.form-box--${stepClicked}`);

    formBoxActive.classList.toggle('-active');
    formBoxChosen.classList.toggle('-active');

    step.classList.toggle('progress__btn--active');

    // progressSteps.
  })
);
