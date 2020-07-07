(function(angular) {
  'use strict';

  var MODULE_NAME = 'linagora.esn.upn-help';

  angular.module(MODULE_NAME, [
    'esn.core',
    'op.dynamicDirective',
    'esn.module-registry'
  ])
  .constant('UPN_MODULE_METADATA', {
      id: 'linagora.esn.upn-help',
      title: 'UPN Home',
      homePage: 'UPN',
      icon: '/images/application.png',
      disableable: false,
      isDisplayedByDefault: false
    })
    .run(function(esnModuleRegistry, UPN_MODULE_METADATA) {
      esnModuleRegistry.add(UPN_MODULE_METADATA);
    })
    .config(function($stateProvider) {
      $stateProvider.state({
        name: 'UPN',
        url: '/home',
        template: '<p>&nbsp;<br />&nbsp;</p><p>Nous vous prions de nous excuser pour la gêne occasionnée.<br />' +
                  'Vous êtes invités à utiliser la messagerie en ligne sur <a href="https://webmail.parisnanterre.fr">https://webmail.parisnanterre.fr</a>.</p>'
      });
    });

})(angular);
