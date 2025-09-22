const btn = document.getElementById('themeBtn');

btn.addEventListener('click', () => {

  document.body.classList.toggle('dark');

});

if (!document.body.classList.contains('dark')) {

  const style = document.createElement('style');

  style.innerHTML = `

    .dark {

      background: #333;

      color: white;

    }

    .dark header,

    .dark footer {

      background: #555;

    }

    .dark .project-card {

      background: #444;

      border-color: #87CEEB;

    }

  `;

  document.head.appendChild(style);

}