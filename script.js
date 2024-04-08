document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello!');
/*
  // check for saved 'darkMode' in localStorage
  let darkMode = localStorage.getItem('appColorScheme');
  let systemDarkMode = false;

  //console.log(`---- darkMode: ${darkMode}`);

  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function (e) {
      //console.log("-- prefers color - scheme dark --------------------------------------");
      //console.log("---- change");
      //console.log("-----------------------------------------------");

      if (darkMode == null) {
        const colorScheme = e.matches
          ? document.body.classList.add('darkmode')
          : document.body.classList.remove('darkmode');

        darkModeToggle.checked = e.matches;
      }
    });

  const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('appColorScheme', 'dark');
  };

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('appColorScheme', 'light');
  };

  if (darkMode === 'dark') {
    darkModeToggle.checked = true;
    enableDarkMode();
  }
  if (prefersDarkScheme.matches && darkMode == null) {
    document.body.classList.add("darkmode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('appColorScheme');
    if (darkModeToggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  /* Constants - Active Menu Sidepanel =============== */
  const sidePanelAppNavMain = document.getElementById('app-nav-main');
  /* ------------------------------------------------- */
  /* Constants - Responsive Sidepanel ================ */
  const sidePanelToggler = document.getElementById('sidepanel-toggler');
  const sidePanel = document.getElementById('app-sidepanel');
  const sidePanelDrop = document.getElementById('sidepanel-drop');
  const sidePanelClose = document.getElementById('sidepanel-close');
  /* ------------------------------------------------- */

  /* Active Menu Sidepanel ================================ */

  /* ------------------------------------------------- */

  /* Responsive Sidepanel ================================ */
  if (sidePanelToggler != null) {
    sidePanelToggler.addEventListener('click', () => {
      if (sidePanel.classList.contains('sidepanel-visible')) {
        /*console.log('visible');*/
        sidePanel.classList.remove('sidepanel-visible');
        sidePanel.classList.add('sidepanel-hidden');
      } else {
        /*console.log('hidden');*/
        sidePanel.classList.remove('sidepanel-hidden');
        sidePanel.classList.add('sidepanel-visible');
      }
    });

    sidePanelClose.addEventListener('click', (e) => {
      e.preventDefault();
      sidePanelToggler.click();
    });

    sidePanelDrop.addEventListener('click', (e) => {
      sidePanelToggler.click();
    });
  } //end if sidePanelToggler != null

  window.addEventListener('load', function () {
    responsiveSidePanel();
  });

  window.addEventListener('resize', function () {
    responsiveSidePanel();
  });

  function responsiveSidePanel() {
    let w = window.innerWidth;
    if (w >= 1200) {
      // if larger
      //console.log('larger');
      sidePanel.classList.remove('sidepanel-hidden');
      sidePanel.classList.add('sidepanel-visible');
    } else {
      // if smaller
      //console.log('smaller');
      sidePanel.classList.remove('sidepanel-visible');
      sidePanel.classList.add('sidepanel-hidden');
    }
  }

}); //end DOMContentLoaded

/************************************************ */
//Initialize all tooltips on a page would be to select them by their data-bs-toggle attribute.
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
});


/************************************************ */




