!function(e,n,s){var l=[],f=[],o={_version:'3.5.0',_config:{classPrefix:'',enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){f.push({name:e,fn:n,options:s})},addAsyncTest:function(e){f.push({name:null,fn:e})}},r=function(){};r.prototype=o,r=new r;var a=n.documentElement,t='svg'===a.nodeName.toLowerCase();!function(){var e,n,s,o,a,t;for(var i in f)if(f.hasOwnProperty(i)){if(e=[],(n=f[i]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(o='function'==typeof n.fn?n.fn():n.fn,a=0;a<e.length;a++)1===(t=e[a].split('.')).length?r[t[0]]=o:(!r[t[0]]||r[t[0]]instanceof Boolean||(r[t[0]]=new Boolean(r[t[0]])),r[t[0]][t[1]]=o),l.push((o?'':'no-')+t.join('-'))}}(),function(e){var n=a.className,s=r._config.classPrefix||'';if(t&&(n=n.baseVal),r._config.enableJSClass){var o=new RegExp('(^|\\s)'+s+'no-js(\\s|$)');n=n.replace(o,'$1'+s+'js$2')}r._config.enableClasses&&(n+=' '+s+e.join(' '+s),t?a.className.baseVal=n:a.className=n)}(l),delete o.addTest,delete o.addAsyncTest;for(var i=0;i<r._q.length;i++)r._q[i]();e.ModernizrCustom=r}(window,document);
//# sourceMappingURL=maps/pvvs-modernizr.min.js.map