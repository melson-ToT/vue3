import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    redirect:"/home",
  },
  {
    path:"/home",
    component: () => import("../views/home/HomeViews.vue"),
    children:[
      {
        path:"/home",
        redirect:"/home/page",
      },
      {
        path:"/home/page",
        component:() => import("../views/home/HomeChild/HomeHead/HomeHead.vue")
      },
      {
        path:"/home/ification",
        component:() => import("../views/home/HomeChild/HomeHead/HomeIfication.vue")
      },
      {
        path:"/home/Shopping",
        component:() => import("../views/home/HomeChild/HomeHead/HomeShopping.vue")
      },
      {
        path:"/home/my",
        component:() => import("../views/home/HomeChild/HomeHead/HomeMy.vue"),
        
      },
    ]
  },
  {
    path:"/detail",
    component: () => import("../views/detail/DetailViews.vue")
  },
  {
    path:"/login",
    component: () => import("../views/login/LoginViewa.vue")
  },
  {
    path:"/:catchAll(.*)",
    component: () => import("../views/defined/Def-404.vue")
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to,from,next)=>{
  //console.log(to);
  //console.log(from);
  if(to.path === "/home/my"){//判断（去到的哈希值，如果等于 对应的哈希值页面）
      if(localStorage.getItem("token")){ //判断（如果有("token"）
          next()//守卫放行
      }else{
          next("/login")//否则去登录页
      }
  }else{//其他的放行
      next()//守卫放行
  }
})

export default router

