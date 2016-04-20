if (!Meteor.settings.public.hotjar) {
  console.warn('Missing hotjar settings. Required: Meteor.settings.public.hotjar.hjid and ' +
                'Meteor.settings.public.hotjar.hjsv. Or, you may disable hotjar on this environment ' +
                'with Meteor.settings.public.hotjar.disable: truthy');
}
else if (!Meteor.settings.public.hotjar.disable) {

  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:Meteor.settings.public.hotjar.hjid,hjsv:Meteor.settings.public.hotjar.hjsv};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
}