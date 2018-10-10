<template>
    <div class="main">
       
       <!--
        <router-view></router-view>
        -->

        <transition :name="transitionName">
            <keep-alive><router-view /></keep-alive>
        </transition>

        <div class="footer">
            <div class="footer_list">
                <div><router-link to="message">消息</router-link></div>
                <div><router-link to="address">通讯录</router-link></div>
                <div><router-link to="home">工作台</router-link></div>
                <div><router-link to="mine">我的</router-link></div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:"webpack ++++ vue",
            transitionName:''
        }
    },
    watch:{
         $route(to, from) {
                //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if(to.meta.index > 0){
                    if( to.meta.index < from.meta.index){
                        this.transitionName = 'slide-right';
                    }else{
                        this.transitionName = 'slide-left';
                    }
                }else if(to.meta.index == 0 && from.meta.index > 0){
                    this.transitionName = 'slide-right';
                }

                //当然，如果你没有需要设置索引值为0的页面可以直接用着一段
                /*if( to.meta.index < from.meta.index){
                      this.transitionName = 'slide-right';
                }else{
                      this.transitionName = 'slide-left';
                }*/
            }
    }
}
</script>

<style scoped>

.slide-right-enter-active,.slide-right-leave-active,
.slide-left-enter-active,.slide-left-leave-active{
    will-change: transform;
    transition:all 0.3s;
    position: absolute;
    width: 100%;
    left: 0;
}

.slide-right-enter{
    transform: translateX(-100%);
}
.slide-right-leave-active {
    transform: translateX(100%);
}
.slide-left-enter {
    transform: translateX(100%);
}
.slide-left-leave-active {
    transform: translateX(-100%);
}

.footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
.footer_list{
    display: flex;
    display: -webkit-flex;
}
.footer_list div{
    width: 33.333%;
    text-align: center;
    background: #fff;
}
.footer_list div a{
    display: inline-block;
    width: 100%;
    height:5rem;
    line-height: 5rem;
    font-size: 1.5rem;
}
</style>


