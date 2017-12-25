##仿饿了么项目


###准备
    >vue-cli 脚手架 搭建基本代码框架
    >vue-router 官方插件管理路由
    >vue-resource  与后端通信 ajax
    >webpack    现在非常流行的构建工具 （把我们的源码编译生成浏览器可以识别的代码）
    >es6+selint  

        1. es6 提供了很多简洁，好用的语法糖
        2. vue.js 源码 ，以及它的社区所提供的第三方插件都是基于es6
     * eslint:es6代码风格检查工具
     * [eslint 入门使用](https://csspod.com/getting-started-with-eslint/)

    >移动端常用的开发技巧
        1. flex弹性布局
        2. css sticky footer
        3. 炫酷的交互设计

    >mv*
        * mvc
        * mvp
        * mvvm  vue.js

    >mvvm框架的使用场景
        * 针对具有复杂交互逻辑的前端应用
        * 提供基础的架构抽象
        * 通过ajax 数据


###vuejs简介
    >vue.js 更轻量，gzip后大小只有20k
    >vue.js 更易上手，学习曲线平稳
    >吸取两家之长，借鉴了angular的指令和react的组件化


###vue.js核心思想
    >数据驱动
        * dom是数据的一种自然映射

    >组件化
        * 扩展html元素，封装可重用的代码
        * 组件设计原则
            1. 页面上的每个独立的可视/可交互区域视为一个组件
            2. 每个组件对应一个工程目录，组件所需要的各种资源在这个目录下就近维护
            3. 页面不过是组件的容器，组件可以嵌套自由组合形成完整的页面


###vue-cli
    >vue-cli是vue的脚手架工具（就是帮助我们写好基础代码）
    [github官方网站](https://github.com/vuejs/vue-cli)


##搭建环境
    1. 安装vue-cli
        * project name sell     项目名称sell
        * Project description(a vue.js project) sell app  项目描述sell app
        * author 作者
        * Use ESLint to lint you code(y/n) y    需要es6的代码风格检查器
        * pick an ESLint preset (use arrow keys) Standard  选择Standard
        * setup unit tests with karma + mocha(y?n) n    前端单元测试的一个库 不需要
        * set e2e tests with Nightwatch (y/n)n
    2. 安装依赖
        >在命令行输入

        ```
        cd sell
        npm install
        ```
    3. 测试
        >在命令行输入

        ```
        npm run dev
        ```
        >打开浏览器


##基础目录介绍
    * build,config :webpack相关
    * src:存放项目源码
    * static:存放静态资源


    * eslintignore:忽略语法检查的目录文件
    * eslintrc.js:ESLint的配置文件
        1. extends  继承Standard规则
        2. rules    对具体的规则作修改
    * gitigonre:忽略掉这些文件或者目录
    * index.html: 入口html文件
    * package.json:项目配置文件
        1. scripts 配置脚本


###需求分析


[像素和DPR](http://www.cnblogs.com/xiaohuochai/p/5494624.html)
    >dpr   设备像素比（devicePixelRatio）是默认缩放为100%的情况下，设备像素和css像素的比值

    ```
    DPR=设备像素/css像素（某一方向上的）

    ```
    ------------------------
    >制作图标字体

[在线制作图标字体](https://icomoon.io/)
    1. 点击icoMoon app
    2. 点击import icons 上传svg
    3. 选中untitled set 下的图标字体后 点击cenerate font
    4. 点击download

    --------------
    >vue 模板

    ```
    <template>
    </template>
    <script type="text/ecmascript-6">
    </script>
    <style lang="stylus" rel="stylesheet/stylus">
    </style>

    ```

    >项目目录
        * 所有的代码都放在src目录下
        * 组件都在components目录下  组件的设计原则--就近原则
        * 公共的模块和资源在common目录下
        * common目录下有 fonts,js,stylus目录


        [stylus 详解](http://www.zhangxinxu.com/jq/stylus/)
    --------

    >模拟数据   (mock数据)
        * 在build/dev-server.js中输入下面代码

            ```

            //从data.json 中读取数据
             var appData=require('../data.json');
             var seller=appData.seller;
             var goods=appData.goods;
             var ratings=appData.ratings;

             //定义路由
             var apiRoutes=express.Router();
             apiRoutes.get('/seller',function(req,res){
                 res.json({
                     //errno 开发规范 表示请求数据是正常的s
                     errno:0,
                     data:seller
                     });
                 });
            apiRoutes.get('/goods',function(req,res){
                res.json({
                    errno:0,
                    data:goods
                    });
                });

            apiRoutes.get('/ratings',function(req,res){
                res.json({
                    erron:0,
                    data:retings
                    });
                });

            //使用路由
            app.use('/api',apiRoutes);


            ```





###组件拆分

    >static/css/下的reset.css是把标签的样式重置 --在index.html中引入

        ```
        <link rel="stylesheet" type="text/css" href="static/css/reset.css"></link>
        ```
    >在index.html中设置适口

    ```
    <!--宽度等于设备宽度，默认缩放1.0，最大缩放1.0，最小缩放1.0，禁止用户缩放-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
    maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" >
    ```

    >eslint 没有分号（main.js）
        * 强制有分号的解决办法--.eslintrc.js的'rules'下加入

            ```

            'semi':['error','always']
            ```
    >eslin 缩进
        * 忽略缩进 使用webstrom默认的缩进配置

            ```
            'indent':0
            ```

    >main.js 中的eslint-disable no-new
        * new 在js中必须要赋值给一个对象 而在vue中 不需要

            ```
            /* eslint-disable no-new  */
            ```



    >header 抽成组件

        1. components/header/header.vue 写入模板

            ```
            <template>
                <div class="header">
                    i am header
                </div>
            </template>
            <script type="text/ecmascript-6">

            </script>
            <style lang="stylus" rel="stylesheet/stylus">

            </style>

            ```

        2. 在app.vue中引用

            ```
            import header from './components/header/header.vue'


            ```

        3. 在header.vue 的script中

            ```
            export default {}
            ```

        4. 在app.vue中注册 header

            ```
                export default{
                    components: {
                        'v-header': header
                    }
                }
            ```

        5. 在app.vue 使用header 自定义标签

            ```
            <header></header>
            ```

        6. 在package.json的"devDependencies" 添加 stylus-loader 模块

            ```
            "stylus-loader":"^2.1.1"
            ```

            ```
            npm install
            ```
        7. 打开webstrom的 settings >languages&frameworks >node.js and npm
            * 点击'+'
            * 输入 stylus
            * 点击 install package
            * 重启 webstrom



###vue-router
    >vue-router

        [vue-router 中文教程](http://router.vuejs.org/zh-cn/)

        1. 在main.js 引入vue-router

            ```
            import vue-router from './router'
            ```

        2. 在app.vue 添加 导航

            ```
            <div class="tab">
                <!-- 使用 router-link 组件来导航. -->
                <!-- 通过传入 `to` 属性指定链接. -->
                <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
              <router-link class="tab-item" to="/goods">商品</router-link>
              <router-link class="tab-item" to="/ratings">评价</router-link>
              <router-link class="tab-item" to="/seller">商家</router-link>
            </div>
            <div class="content">
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
              <router-view></router-view>
            </div>
            ```

        3. 在route/index.js

            ```
                import Vue from 'vue'
                import Router from 'vue-router'

                // 1. 定义（路由）组件。
                // 可以从其他文件 import 进来
                import goods from '.././components/goods/goods'
                import ratings from '.././components/ratings/ratings'
                import seller from '.././components/seller/seller'

                // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
                Vue.use(Router)

                // 3. 创建 router 实例，然后传 `routes` 配置
                export default new Router({
                routes: [
                {
                  path: '/goods',
                  name: 'goods',
                  component: goods
                },
                {
                  path: '/seller',
                  name: 'seller',
                  component: seller
                },
                {
                  path: '/ratings',
                  name: 'ratings',
                  component: ratings
                }
                ]
                })

            ```

        >路径快捷方式
            * 在build/webpack.base.conf.js下 resolve

        >重定向
            * routes/index.js  "router" 添加

                ```
                //默认显示goods
                {
                  path: '/',
                  redirect: '/goods'
                }
                ```

        >点击样式设定 /更改

            1. 在app.vue 写点击

                ```
                .tab-item:active{
                   color:rgb(240,20,20);
                 }
                ```

            2. 在router/index.js 的new Router
                [linkActiveClass 的详情](http://router.vuejs.org/zh-cn/api/options.html)

                ```
                linkActiveClass: 'active'
                ```


        >一像素边框
            1. 在common/stylus/ 创建 mixin.styl

                ```
                border-1px($color)
                  position: relative
                  &:after
                    display :block
                    position: absolute
                    left: 0
                    bottom: 0
                    width: 100%
                    border-top: 1px solid $color
                    content:' '

                ```
            2. 引入mixin.styl

                ```
                @import "./common/stylus/mixin.styl"
                ```

            3. 使用

                ```
                border-1px(rgba(7,17,27,0.1))
                ```


            4. 定义全局的class
                * 在 common/stylus/ 创建base.styl

                    ```
                    @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-aspect-ratio: 1.5)
                      .border-1px
                        &::after
                          -webkit-transform: scaleY(0.7)
                          transition: scaleY(0.7)
                    @media (-webkit-min-device-pixel-ratio: 2),(min-device-aspect-ratio: 2)
                      .border-1px
                        &::after
                          -webkit-transform: scaleY(0.5)
                          transition: scaleY(0.5)

                    ```

                * 在 common/stylus/ 创建index.styl
                    >注意icon.styl的url

                    ```
                    @import "./mixin.styl"
                    @import "./icon.styl"
                    @import "./base.styl"
                    ```

                * 在 main.js 引入

                    ```
                    import './common/stylus/index.styl'
                    ```

                * 使用 在app.vue
                    >old

                    ```
                    <div class="tab">
                    ```
                    >new

                    ```
                    <div class="tab border-1px">
                    ```


###vue-resource
    >用于前后段请求
    [vue-resource 官网](https://github.com/pagekit/vue-resource)

    >安装vue-resource

        1. package.json  dependencies 添加

            ```
            "vue-resource": "^1.2.1"
            ```
        2. npm install

    >在app.vue export default 添加

        ```
        data () {
          return {
            seller: {}
          }
        }
        ```
        * 注意空格
        * 如果你不想空格
            * eslintrc.js rules
                ```
                "space-before-function-paren":0
                ```

    >引用vue-resource第三方组件

        1. 在main.js 注册
            ```
            import vueResouce from 'vue-resource'
            Vue.use(vueResouce)
            ```

        2. 使用 app.vue export default
            ```
            created () {
              this.$http.get('/api/seller').then((response) => {
                response = response.body
                if (response.errno === ERR_OK) {
                  this.seller = response.data
                  console.log(this.seller)
                }
              })
            }
            ```

    >将seller 对象 传给 v-header组件

        1. app.vue 通过v-bind
            ```
            <v-header :seller="seller"></v-header>
            ```

        2. 在header.vue  通过props 传递数据

            ```
            props: {
              seller: {
                type: Object
              }
            }
            ```


        3. 写dom结构 和 css样式
            * 设置公共样式 在common/stylus/mixin.styl
                ```
                bg-image($url)
                  background-image: url($url + "@2x.png")
                  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
                    background-image: url($url + "@3x.png")
                ```

            * 使用 在app.vue 引用

                ```
                @import "../../common/stylus/mixin"
                bg-image('./img/brand')
                ```

            * 关于样式
                >filter:blur(10px)

###sticky footers 布局
    >如果页面内容不够长的时候，页脚块粘贴在视窗底部；如果内容足够长时，页脚块会被内容向下推送

    [介绍](https://www.w3cplus.com/css3/css-secrets/sticky-footers.html)


    >实现

        1. html 在 detail-main 写内容

            ```
             <div class="detail" transition="fade">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main"><div>
                <div>
                <div class="detail-close">
                    <i class="icon-close"></i>
                </div>
            <div>

            ```

        2. stylus

            ```
            .detail
              position: fixed
              z-index: 100
              top: 0
              left: 0
              width: 100%
              height: 100%
              overflow: auto
              transition: all 0.5s
              backdrop-filter: blur(10px)
              .detail-wrapper
                width: 100%
                min-height: 100%
                background: rgba(7, 17, 27, 0.8)
                .detail-main
                  margin-top: 64px
                  padding-bottom: 64px
            .detail-close
              position: relative
              width: 32px
              height: 32px
              margin: -64px auto 0 auto
              clear: both
              font-size: 32px

            ```

            ```
            .clearfix
              display: inline-block
              &:after
                display: block
                content: '.'
                width: 0
                height: 0
                line-height: 0
                clear: both
                visibility: hidden
            ```

##商品详情

    >基本布局 goods.vue

        * html
            ```
            <div class="goods">
              <div class="menu-wrapper"></div>
              <div class="foods-wrapper"></div>
            </div>
            ```
        * css

            ```
            .goods
              display: flex
              position: absolute
              top: 174px
              bottom: 46px
              width: 100%
              overflow: hidden
              .menu-wrapper
                flex: 0 0 80px
                width: 80px
                background: #f3f5f7
              .foods-wrapper
                flex: 1
            ```

----------
    >实现列表和商品详情联动   better-scroll 第三方

        [github 地址](https://github.com/ustbhuangyi/better-scroll)

        1. 安装 在package.json dependencies

            ```
                "better-scroll": "^0.1.14"
            ```

            ```
            npm install
            ```

        2. 使用
            *  引入 在goods.vue
                ```
                  import BScroll from 'better-scroll'
                ```

            * 实现滑动
                ```
                <div class="menu-wrapper" ref="menuWrapper">
                <div class="foods-wrapper" ref="foodsWrapper">
                ```

                ```
                this.$nextTick(() => {
                 this._initScroll()
               })

                methods: {
                  _initScroll () {
                    this.meunScroll = new BScroll(this.$refs.menuWrapper, {

                    })
                    this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {

                    })
                  }
                }
                ```


            * 实现联动  
                >思路  监听右侧Y轴的变化 通过对应的区间 向左侧添加样式

                ```
                <template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current': currentIndex === index}" @click="selectMenu(index, $event)">
          <span class="text border-1px" >
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title" >{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px">
              <div class="icon" >
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥food.oldPrice</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
   import BScroll from 'better-scroll'

   const ERR_OK = 0

   export default {
     props: {
       seller: {
         type: Object
       }
     },
     data () {
       return {
         goods: [],
         listHeight: [],
         scrollY: 0
       }
     },
     computed: {
       currentIndex () {
         for (let i = 0; i < this.listHeight.length; i++) {
           let height1 = this.listHeight[i]
           let height2 = this.listHeight[i + 1]
           if (!height2 || (this.scrollY >= height1 && this.scrollY <= height2)) {
             return i
           }
         }
         return 0
       }
     },
     created () {
       this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
       this.$http.get('./api/goods').then((response) => {
         response = response.body
         if (response.errno === ERR_OK) {
           this.goods = response.data
           this.$nextTick(() => {
             this._initScroll()
             this._calculateHeight()
           })
         }
       })
     },
     methods: {
       selectMenu (index, event) {
         if (!event._constructed) {
           return
         }
         console.log(index)
         let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
         let el = foodList[index]
         this.foodsScroll.scrollToElement(el, 300)
       },
       _initScroll () {
         this.meunScroll = new BScroll(this.$refs.menuWrapper, {
           click: true
         })
         this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
           click: true,
           probeType: 3
         })
         this.foodsScroll.on('scroll', (pos) => {
           this.scrollY = Math.abs(Math.round(pos.y))
           // console.log(this.scrollY)
         })
       },
       _calculateHeight () {
         let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
         let height = 0
         this.listHeight.push(height)
         for (let i = 0; i < foodList.length; i++) {
           let item = foodList[i]
           height += item.clientHeight
           this.listHeight.push(height)
           // console.log(this.listHeight)
         }
       }
     }

   }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('./img/decrease_3')
          &.discount
            bg-image('./img/discount_3')
          &.guarantee
            bg-image('./img/guarantee_3')
          &.invoice
            bg-image('./img/invoice_3')
          &.special
            bg-image('./img/special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7,17,27,0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
</style>

                ```

###购物车

        >app.vue 传入数据

        ```
        <router-view :seller="seller"></router-view>
        ```

        >goods.vue

        ```
        import shopcart from '../../components/shopcart/shopcart'

        components: {
           shopcart
         }
        ```

        >shopcart.vue

###购物 添加和减少按钮 cartcontrol.vue

###shopcart 和 cartcontrol 联动
        >goods.vue 添加

        ```
        <shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice"
              :min-price="seller.minPrice"></shopcart>
        ```

        ```
        selectFoods () {
         let foods = []
         this.goods.forEach((good) => {
           good.foods.forEach((food) => {
             if (food.count) {
               foods.push(food)
             }
           })
         })
         return foods
       }
        ```

###购物列表

    ```
    <div class="shopcart-list" v-show="listShow" transition="fold">
      <div class="list-header">
        <h1 class="title">购物车</h1>
        <span class="empty" @click="empty">清空</span>
      </div>
      <div class="list-content" v-el:list-content>
        <ul>
          <li class="food" v-for="food in selectFoods">
            <span class="name">{{food.name}}</span>
            <div class="price">
              <span>￥{{food.price*food.count}}</span>
            </div>
            <div class="cartcontrol-wrapper">
              <cartcontrol :food="food"></cartcontrol>
            </div>
          </li>
        </ul>
      </div>
    </div>
    ```

    ```
    import cartcontrol from 'components/cartcontrol/cartcontrol'

    ```



###商品详情页  food.vue

1. 在goods.vue 注册food 组件

```
 <li @click="selectFood(food)" v-for="food in item.foods" class="food-item border-1px">

 <div class="goods">
    <food :food="selectedFood"></food>
 </div>
```

```
 import food from '../../components/food/food'
 components: {
     food
 }
 data () {
     selectedFood: {}
 }

 methods: {
     selectFood (food) {
         this.selectedFood = food
    }
 }
 components: {
     food
 }
```

* 父组件可以调用子组件的方法


* import BScroll from 'better-scroll'       不出现滚动条  上下滑动

* box-sizing: border-box


2.  给cartcontrol.vue 添加

```
@click.stop.prevent
```

阻止冒泡

3. split.vue  组件  就是一个简单的样式组件

4. ratingselect.vue 组件 显示评价的

```
<script type="text/ecmascript-6">
  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2

  export default {
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    }
  }
</script>
```


5. formatDate 将时间戳转换成日期格式



###评价页

1. 适配iphone 5

```
@media only screen and (max-width: 320px)
```



###商家页


###打包 vue-cli

```
npm run build

```

>build/build.js
1. shelljs/global 提供了一些常用的命令
2. ora  是长时间异步任务的一些提示

>build/webpack.prod.conf.js
1. ExtractTextPlugin 将css单独提出来

2. plugins 压缩代码用的

3. plugins > minify 压缩html代码

4. plugins > CommonsChunkPlugin  压缩第三方库


>config/index.js

```
node prod.server.js
```
1. productionSourceMap 是否在浏览器中修改





##临时
1. food.vue 的加入够购物车点击无反应
2. ratingselect.vue 的商品评价点击无反应
3. ratings.vue  的评价数据没请求到












##其它
[关于vue](https://segmentfault.com/a/1190000003968020)


---
  >ctrl+alt+l webstrom自动格式化代码

  >Mac端WebStorm用户。
    command + , 打开偏好设置，选择plugins,，点击下方的browse repositories...
    在打开窗口的搜索栏里打"vue"。

  >如果想要高亮显示*.vue文件，可以在File Types 选项里找到HTML，然后在下方手动添加*.vue，这样就有高亮啦

  >vue-loader 依赖于npm_modules下的postcss 插件  自动帮我们搞定css兼容的问题

  >window 10 好用的快捷键
  1. win + ctrl + d   创建虚拟桌面
  2. win + ctrl + 左右方向键   切换虚拟桌面
  3. win + ctrl + f4  关闭虚拟桌面

  >宽度和高度一样 但宽度未知
  1. width:100%;padding-top:100%
  2. width:100%;padding-bottom:100%


   >方法命名规范
   1. 内部内部调用的方法 命名 用 '_ '
   2. 外部调用的直接写
