var app = {};

document.addEventListener('DOMContentLoaded', function () {
  console.log('-- START View alerts-inline.html DOMContentLoaded');

  app.initializer();

  console.log('-- END View alerts-inline.html DOMContentLoaded---');
}); //end DOMContentLoaded

app.initializer = function () {
  console.log('-- app initialize');
  app.fnJsInitializeEditAlertMessage();
};

app.fnJsInitializeEditAlertMessage = function () {
  document.querySelectorAll('.btn_edit_alert').forEach(function (element) {
    element.addEventListener('click', (element) => {
      element.preventDefault();
      console.log(
        '-- click btn EditAlertMessage --------------------------------------'
      );

      console.log(element.target);

      let vjsGlobalId = element.target.dataset.globalid;

      console.log(vjsGlobalId);

      app.fnjsEditAlertMessage(vjsGlobalId);
    });
  });

  app.fnjsEditAlertMessage = function (prmGlobalId) {
    console.log(prmGlobalId);

    let vjsAlertMessage = document
      .getElementById('alert_' + prmGlobalId)
      .querySelector('.alert-message');
    let vjsTextArea = document.getElementById('textarea_' + prmGlobalId);

    console.log(vjsAlertMessage.innerHTML);

    if (vjsAlertMessage.length) {
      vjsAlertMsgText = vjsAlerta.text().trim();

      console.log(vjsAlertMsgText);
    }

    if (vjsTextArea.length) {
    } else {
    }
  };
};
