(function() {
  'use strict';

  angular.module('linagora.esn.upn-help')
    .config(injectApplicationMenu);

    function injectApplicationMenu(dynamicDirectiveServiceProvider) {
      var appMenu = new dynamicDirectiveServiceProvider.DynamicDirective(true, 'upn-help-application-menu', { priority: 30 });

      dynamicDirectiveServiceProvider.addInjection('esn-application-menu', appMenu);
    }
})();
