module.exports=function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}({0:function(t,n,e){t.exports=e(7)},7:function(t,n,e){var o=e(8);t.exports={template:o,data:{title:"",backButton:"",route:""},methods:{goBack:function(){this.backButton&&quasar.navigate.to.route(this.backButton)}}}},8:function(t,n){t.exports='<screen>\n\n  <div slot="header" class="row items-center">\n    <button\n      v-show="backButton"\n      @click="goBack()"\n    >\n      <i style="font-size: 2.5rem;">keyboard_arrow_left</i>\n    </button>\n    <p :style="{\'text-align\': backButton ? \'left\' : \'center\'}">\n      {{title}}\n    </p>\n  </div>\n\n  <div slot="footer" class="row items-center">\n    <p>{{route}}</p>\n  </div>\n\n  <page class="smart-container"></page>\n\n</screen>\n'}});