(function(angular) {
  'use strict';

  angular.module('linagora.esn.upn-help')
         .directive('upnHelpApplicationMenu', applicationMenu);

  function applicationMenu(applicationMenuTemplateBuilder) {
    var directive = {
      retrict: 'E',
      replace: true,
      controller: 'upnHelpApplicationMenuController',
      controllerAs: '$ctrl',
      scope: true,
      template: applicationMenuTemplateBuilder(
        {url: '{{ $ctrl.url }}', target: '_blank', rel: 'noopener noreferrer'},
        { url: '/upn-help/images/upn.png' },
        'Aide',
        'core.modules.linagora.esn.upnhelp.enabled',
        true
      )
    };

    return directive;
  }
})(angular);
