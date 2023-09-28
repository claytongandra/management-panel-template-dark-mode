  // check for saved 'darkMode' in localStorage
  let darkMode = localStorage.getItem('appColorScheme');
  ////let systemDarkMode = false;

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
