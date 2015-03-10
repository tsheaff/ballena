(function(h,a){var f=h.amplitude||{};var b=a.createElement("script");b.type="text/javascript";
b.async=true;b.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-2.0.4-min.js";
var g=a.getElementsByTagName("script")[0];g.parentNode.insertBefore(b,g);
f._q=[];function e(i){f[i]=function(){f._q.push([i].concat(Array.prototype.slice.call(arguments,0)))}}
var c=["init","logEvent","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId",
"setGlobalUserProperties"];
for(var d=0;d<c.length;d++){e(c[d])}h.amplitude=f})(window,document);

amplitude.init("fe9a75a27bdf4451acdad16d039aeea0");
