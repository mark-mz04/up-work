/*
 Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){function e(b,a){CKEDITOR.tools.array.forEach(a,function(a){b.on(a,f,null,{editor:b})})}function f(b){var a=b.listenerData.editor;b=a.focusManager.hasFocus;var g=a.editable(),e=a.config.editorplaceholder,d=/<body.*?>((?:.|[\n\r])*?)<\/body>/i,f=a.config.fullPage,a=a.getData();f&&(d=a.match(d))&&1<d.length&&(a=d[1]);if(0!==a.length||b)return g.removeAttribute(c);g.setAttribute(c,e)}CKEDITOR.plugins.add("editorplaceholder",{isSupportedEnvironment:function(){return!CKEDITOR.env.ie||9<=CKEDITOR.env.version},
onLoad:function(){CKEDITOR.addCss(CKEDITOR.plugins.editorplaceholder.styles)},init:function(b){this.isSupportedEnvironment()&&b.config.editorplaceholder&&e(b,["contentDom","focus","blur","change"])}});var c="data-cke-editorplaceholder";CKEDITOR.plugins.editorplaceholder={styles:"["+c+"]::before {position: absolute;opacity: .8;color: #aaa;content: attr( "+c+" );}.cke_wysiwyg_div["+c+"]::before {margin-top: 1em;}"};CKEDITOR.config.editorplaceholder=""})();
