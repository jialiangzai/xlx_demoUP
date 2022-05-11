import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Course from '@/pages/course/Course.vue';
import CourseSearch from '@/pages/course/CourseSearch'
import CourseInfo from '@/pages/course/CourseInfo.vue'
import CoursePlay from '@/pages/course/CoursePlay.vue'
// import Member from '@/pages/Member.vue';
// import About from '@/pages/about/About.vue';
// import MyCourse from '@/pages/about/components/MyCourse.vue';
// import Collean from '@/pages/about/components/Collean.vue';
// import Order from '@/pages/about/components/Order.vue';
// import Message from '@/pages/about/components/Message.vue';
// import User from '@/pages/user/User.vue';
// import Setbindsns from '@/pages/user/components/Setbindsns.vue';
// import Setprofile from '@/pages/user/components/Setprofile.vue';
// import Setavator from '@/pages/user/components/Setavator.vue';
import Cart from '@/pages/cart/Cart.vue';
import ConfirmOrder from '@/pages/cart/ConfirmOrder.vue';
// import  Loading from '@/pages/loading/index.vue'
// import PaySuccess from '@/pages/paySuccess/index.vue'
// import PayFail from '@/pages/payFail/index.vue'
// import VipSuccess from '@/pages/vipSuccess/index.vue'
// import Agreement from '@/pages/agreement/index.vue'

Vue.use(Router);

const routes = [
  { path: '/',component: Home},
  { path: '/home', component: Home ,name:'home'},
  { path: '/course', component: Course ,name:'course'},
  { path: '/course-search/:id', component: CourseSearch ,name:'CourseSearch'},
  { path:'/course-info/:courseId',component:CourseInfo,name:'course-info'},
  // {path: '/loading',component: Loading,name: 'loading'},
  { path:'/course-play/:courseId/:chapterId',component:CoursePlay,name:'course-play',meta:{ requiresAuth : false }},
  // { path: '/member', component: Member ,name:'member'},
  // { path:'*',component:Home},
  // { path: '/agreement', component: Agreement ,name:'agreement'},
  // {
  //   path: '/about', component: About, name: 'about',
  //   redirect: '/about/my-course',
  //   meta:{ requiresAuth : true },
  //   children: [
  //     {
  //       path: 'my-course',
  //       name: 'my-course',
  //       meta:{ requiresAuth : true },
  //       component: MyCourse,
  //     },
  //     {
  //       path: 'collean',
  //       name: 'collean',
  //       meta:{ requiresAuth : true },
  //       component: Collean,
  //     },
  //     {
  //       path: 'order',
  //       name: 'order',
  //       meta:{ requiresAuth : true },
  //       component: Order,
  //     },
  //     {
  //       path: 'message',
  //       name: 'message',
  //       meta:{ requiresAuth : true },
  //       component: Message,
  //     },
  //   ]
  // },
  // {
  //   path: '/user', component: User,
  //   redirect: '/user/setbindsns',
  //   meta:{ requiresAuth : true },
  //   name:'user',
  //   children: [
  //     {
  //       path: 'setbindsns',
  //       name:'setbindsns',
  //       meta:{ requiresAuth : true },
  //       component: Setbindsns,
  //     },
  //     {
  //       path: 'setprofile',
  //       name:'setprofile',
  //       meta:{ requiresAuth : true },
  //       component: Setprofile,
  //     },
  //     {
  //       path: 'setavator',
  //       name:'setavator',
  //       meta:{ requiresAuth : true },
  //       component: Setavator,
  //     }
  //   ]

  // },
  {path: '/cart', component: Cart,name:'cart',meta:{ requiresAuth : true }},
  {path: '/confirmOrder', component: ConfirmOrder,name:'confirmOrder',meta:{ requiresAuth : true }},
  // {path:'/paySuccess',component: PaySuccess,name:'paySuccess'},
  // {path:'/payFail',component: PayFail,name:'payFail'},
  // {path:'/vipSuccess',component: VipSuccess,name:'vipSuccess'},

];


// const router = new Router({
//   mode: "history",
//   routes,
// });



// export default router;

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  })
}
