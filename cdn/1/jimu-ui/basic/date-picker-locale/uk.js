System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e){if(void 0!==t.one&&1===e)return t.one;var n=e%10,i=e%100;return 1===n&&11!==i?t.singularNominative.replace("{{count}}",String(e)):n>=2&&n<=4&&(i<10||i>20)?t.singularGenitive.replace("{{count}}",String(e)):t.pluralGenitive.replace("{{count}}",String(e))}function i(t){return function(e,i){return i&&i.addSuffix?i.comparison&&i.comparison>0?t.future?n(t.future,e):"за "+n(t.regular,e):t.past?n(t.past,e):n(t.regular,e)+" тому":n(t.regular,e)}}t.r(e),t.d(e,{default:()=>P});var a={lessThanXSeconds:i({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:i({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:function(t,e){return e&&e.addSuffix?e.comparison&&e.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},lessThanXMinutes:i({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:i({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:i({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:i({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:i({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:i({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:i({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:i({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:i({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:i({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:i({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:i({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:i({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})};function r(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,i=t.formats[n]||t.formats[t.defaultWidth];return i}}const u={date:r({formats:{full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},defaultWidth:"full"}),time:r({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};function o(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t){o(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===l(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var d={};function v(){return d}function g(t,e){var n,i,a,r,u,l,d,g;o(1,arguments);var f=v(),m=c(null!==(n=null!==(i=null!==(a=null!==(r=null==e?void 0:e.weekStartsOn)&&void 0!==r?r:null==e||null===(u=e.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==a?a:f.weekStartsOn)&&void 0!==i?i:null===(d=f.locale)||void 0===d||null===(g=d.options)||void 0===g?void 0:g.weekStartsOn)&&void 0!==n?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=s(t),p=h.getUTCDay(),b=(p<m?7:0)+p-m;return h.setUTCDate(h.getUTCDate()-b),h.setUTCHours(0,0,0,0),h}function f(t,e,n){o(2,arguments);var i=g(t,n),a=g(e,n);return i.getTime()===a.getTime()}var m=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function h(t){return"'у "+m[t]+" о' p"}var p={lastWeek:function(t,e,n){var i=s(t),a=i.getUTCDay();return f(i,e,n)?h(a):function(t){var e=m[t];switch(t){case 0:case 3:case 5:case 6:return"'у минулу "+e+" о' p";case 1:case 2:case 4:return"'у минулий "+e+" о' p"}}(a)},yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:function(t,e,n){var i=s(t),a=i.getUTCDay();return f(i,e,n)?h(a):function(t){var e=m[t];switch(t){case 0:case 3:case 5:case 6:return"'у наступну "+e+" о' p";case 1:case 2:case 4:return"'у наступний "+e+" о' p"}}(a)},other:"P"};function b(t){return function(e,n){var i;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,r=null!=n&&n.width?String(n.width):a;i=t.formattingValues[r]||t.formattingValues[a]}else{var u=t.defaultWidth,o=null!=n&&n.width?String(n.width):t.defaultWidth;i=t.values[o]||t.values[u]}return i[t.argumentCallback?t.argumentCallback(e):e]}}const w={ordinalNumber:function(t,e){var n=String(null==e?void 0:e.unit),i=Number(t);return i+("date"===n?3===i||23===i?"-є":"-е":"minute"===n||"second"===n||"hour"===n?"-а":"-й")},era:b({values:{narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},defaultWidth:"wide"}),quarter:b({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:b({values:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},defaultWidth:"wide",formattingValues:{narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},defaultFormattingWidth:"wide"}),day:b({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},defaultWidth:"wide"}),dayPeriod:b({values:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},defaultFormattingWidth:"wide"})};function y(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],r=e.match(a);if(!r)return null;var u,o=r[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(l)?N(l,(function(t){return t.test(o)})):G(l,(function(t){return t.test(o)}));u=t.valueCallback?t.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u;var c=e.slice(o.length);return{value:u,rest:c}}}function G(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function N(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var W,S={ordinalNumber:(W={matchPattern:/^(\d+)(-?(е|й|є|а|я))?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(W.matchPattern);if(!n)return null;var i=n[0],a=t.match(W.parsePattern);if(!a)return null;var r=W.valueCallback?W.valueCallback(a[0]):a[0];r=e.valueCallback?e.valueCallback(r):r;var u=t.slice(i.length);return{value:r,rest:u}}),era:y({matchPatterns:{narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:y({matchPatterns:{narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})};const P={code:"uk",formatDistance:function(t,e,n){return n=n||{},a[t](e,n)},formatLong:u,formatRelative:function(t,e,n,i){var a=p[t];return"function"==typeof a?a(e,n,i):a},localize:w,match:S,options:{weekStartsOn:1,firstWeekContainsDate:1}};return e})())}}}));