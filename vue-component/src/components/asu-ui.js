'use strict'
import Vue from 'vue'
Vue.component('base-input', {
  inheritAttrs: false,
  data(){
      return {
        
    }
  },
  props: ['label', 'value'],
  methods:{
    blur(event){
      var vm = this
      vm.$emit('blur')
  }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        @blur='blur'
      >
    </label>
  `
})
