import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementTest from '@/components/ElementTest'

Vue.use(Router)
//hjkhkhjkjh
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ElementTest',
      component: ElementTest
    },
    {
      path:"/helloworld",
      component:HelloWorld
    }
  ]
})
