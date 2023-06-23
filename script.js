const titles = document.querySelectorAll('.title');
const subtitles = document.querySelectorAll('.subtitle');
const searchBar = document.querySelector('input[type="text"]');

const filterOptions = (searchInput) => {
  titles.forEach((title) => {
    const option = title.closest('.option');
    const subtitles = option.querySelectorAll('.subtitle');
    let hasMatchingSubtitle = false;

    subtitles.forEach((subtitle) => {
      const subtitleText = subtitle.textContent.toLowerCase();
      if (subtitleText.includes(searchInput.toLowerCase())) {
        hasMatchingSubtitle = true;
      }
    });

    if (hasMatchingSubtitle) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
};

searchBar.addEventListener('input', () => {
  const searchInput = searchBar.value;
  filterOptions(searchInput);
});

titles.forEach((title) => {
  title.addEventListener('click', () => {
    title.classList.toggle('open');
    const subtitles = title.nextElementSibling;
    subtitles.classList.toggle('open');
  });
});

subtitles.forEach((subtitle) => {
  subtitle.addEventListener('click', () => {
    const description = subtitle.nextElementSibling;
    const showDetails = document.querySelector('.show-details');
    showDetails.innerHTML = `<h2>${subtitle.textContent}</h2><p>${description.textContent}</p>`;
  });
});
