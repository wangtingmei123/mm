(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-sousuo" viewBox="0 0 1000 1000">'+""+'<path d="M940.0211 854.8334l-192.2277-192.2197c52.7794-64.934 84.4193-147.7418 84.4193-237.9407 0-208.4996-169.0295-377.522-377.5379-377.522S77.1349 216.1734 77.1349 424.6731s169.0295 377.522 377.5379 377.522c90.2036 0 173.015-31.6385 237.9517-84.4168l192.2267 192.2207c15.2343 15.2337 39.9336 15.2337 55.1679 0C955.2555 894.7653 955.2555 870.0681 940.0211 854.8334zM156.6164 424.6731c0-164.6054 133.4461-298.0439 298.0564-298.0439 164.6123 0 298.0564 133.4385 298.0564 298.0439 0 78.3909-30.2797 149.6975-79.7623 202.9044-3.149 1.7338-6.1141 3.9253-8.7834 6.5945-2.6703 2.6702-4.8619 5.6352-6.5958 8.785-53.2092 49.4815-124.5198 79.7599-202.9139 79.7599C290.0625 722.717 156.6164 589.2785 156.6164 424.6731z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-ios" viewBox="0 0 1024 1024">'+""+'<path d="M836.608 675.84q41.984 59.392 96.256 76.8-23.552 72.704-74.752 151.552-78.848 118.784-155.648 118.784-28.672 0-84.992-19.456-52.224-19.456-91.136-19.456t-86.016 20.48q-49.152 19.456-80.896 19.456-92.16 0-181.248-156.672-89.088-154.624-89.088-304.128 0-138.24 67.584-226.304 69.632-88.064 172.032-88.064 22.528 0 50.176 5.632t57.344 20.992q31.744 17.408 52.224 24.064t31.744 6.656q13.312 0 40.96-6.144t55.296-22.528q29.696-16.384 51.2-24.576t44.032-8.192q71.68 0 129.024 38.912 30.72 20.48 62.464 60.416-47.104 40.96-68.608 71.68-39.936 57.344-39.936 124.928 0 74.752 41.984 135.168zM630.784 197.632q-35.84 33.792-65.536 44.032-10.24 3.072-26.112 5.632t-36.352 4.608q1.024-90.112 47.104-155.648t151.552-90.112q2.048 10.24 3.072 14.336l0 11.264q0 36.864-17.408 82.944-18.432 45.056-56.32 82.944z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-bao" viewBox="0 0 1024 1024">'+""+'<path d="M242.246564 897.227562l564.25515 0-51.299129-564.253933L267.893696 332.973628 216.599432 897.227562 242.246564 897.227562 242.246564 897.227562zM834.338206 948.521826 188.876057 948.521826c-6.465909 0-12.632605-2.646693-17.013757-7.325841-4.371421-4.657255-6.560781-10.890848-5.981817-17.219314l50.718949-616.650175c1.011971-11.692397 4.580627-25.647132 25.647132-25.647132l538.608018 0c12.115673 0 24.815175 13.807562 25.647132 25.647132l51.294264 615.548198c0.464631 6.233593-2.219767 13.873242-6.599703 18.4636C846.805393 945.922569 840.733569 948.521826 834.338206 948.521826L834.338206 948.521826 834.338206 948.521826zM703.908321 256.032232l-51.294264 0c0-106.703308-88.766371-128.244174-128.240525-128.244174-39.477804 0-153.886441 21.540866-153.886441 128.244174l-51.299129 0c0-128.600554 120.467082-179.538439 196.077834-179.538439S703.908321 127.431679 703.908321 256.032232L703.908321 256.032232 703.908321 256.032232z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)