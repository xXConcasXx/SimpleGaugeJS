document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('#data-table tbody tr');

  rows.forEach(row => {
    // HTML elements init
    const col1 = parseFloat(row.cells[0].innerText);
    const col2 = parseFloat(row.cells[1].innerText);

    const indicatorCell = row.querySelector('.indicator-cell');

    const indicatorContainer = document.createElement('div');
    indicatorContainer.classList.add('indicator-container');

    const indicator = document.createElement('div');
    indicator.classList.add('indicator');

    const arrow = document.createElement('div');
    arrow.classList.add('arrow');

    const indicatorCut = document.createElement('div');
    indicatorCut.classList.add('indicator-cut');

    indicatorContainer.appendChild(indicator);
    indicatorContainer.appendChild(arrow);
    indicatorContainer.appendChild(indicatorCut);

    indicatorCell.appendChild(indicatorContainer);

    // Calculate angles
    const angle = Math.max(-87, Math.min((col2 / col1 - 0.5) * 180, 87));

    // Apply animations
    arrow.style.transform = 'translateX(-50%) rotate(-90deg)';

    requestAnimationFrame(() => {
      arrow.classList.add('animate');
      arrow.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    });
  });
});
