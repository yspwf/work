<template>
    <div class="mine">
        <div class="headImg">
            <div class="partment">
                <span>哈哈哈</span>
                <span class="position">工程师--技术部</span>
            </div>
            <div class="img">
                <img src="../../static/images/headImg.png">
                <canvas width="100" height="100"></canvas>
            </div>
        </div>
        <div class="life">
            <a href="">
                <i class="life_icon"><img src="../../static/images/office.png"></i>
                <font>会议</font>
            </a>
            <a href="">
                <i class="life_icon"><img src="../../static/images/office.png"></i>
                <font>会议</font>
            </a>
            <a href="">
                <i class="life_icon"><img src="../../static/images/office.png"></i>
                <font>会议</font>
            </a>
        </div>
        <div class="operation_list collection">
            <a href=""><i><img src="../../static/images/set.png"></i>我的收藏</a>
            <router-link to="/coupons"><i><img src="../../static/images/set.png"></i>优惠券</router-link>
            <router-link to="/integral"><i><img src="../../static/images/set.png"></i>我的积分</router-link>
        </div>

        <div class="operation_list help">
            <a href=""><i><img src="../../static/images/set.png"></i>帮助中心</a>
            <a href=""><i><img src="../../static/images/set.png"></i>建议与反馈</a>
            <a href=""><i><img src="../../static/images/set.png"></i>设置</a>
            <!--
            <a v-bind:href="/integral"><i><img src="../../static/images/set.png"></i>设置</a>
            -->
        </div>



        <div class="general">
                <a href="">
                    <i class="general_icon"><img src="../../static/images/meeting.png"></i>
                    <font>会议</font>
                </a>
                <a href="">
                    <i class="general_icon"><img src="../../static/images/meeting.png"></i>
                    <font>签到</font>
                </a>
                <a href="">
                    <i class="general_icon"><img src="../../static/images/meeting.png"></i>
                    <font>日程</font>
                </a>
                <a href="">
                    <i class="general_icon"><img src="../../static/images/meeting.png"></i>
                    <font>广播</font>
                </a>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.mine{
    background: #fff;
    width: 100%;
    margin-bottom: 8rem;
}
.headImg{
    display: flex;
    display: -webkit-flex;
    height:7rem;
    padding: 2rem 1rem;
}
.headImg .partment{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 60%;
    text-indent: 3rem;
}
.headImg .partment span{
    font-size: 3rem;
    height:4rem;
    line-height: 4rem;
}
.headImg .partment .position{
    font-size: 1.5rem;
}
.headImg .img{
    width: 40%;
    text-align: center;
    padding-left: 4rem;
}
.headImg .img img{
    height: 7rem;
    width: 7rem;
     border-radius: 50%;
    border:1px solid red;
}
.life{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    padding: 0rem 2rem;
    height:10rem;
    position: relative;
}
.life:after{
    content: "";
    border:1px solid #dadada;
    height:0;
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
}

.life a{
    display: inline-block;
    width: 100%;
    height:10rem;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}
.life font{
    display: block;
    height:4rem;
    line-height:2.5rem;
    font-size: 1.5rem;
}
.life_icon{
    display: block;
    height:6rem;
}
.life_icon img{
    width: 3.8rem;
    height:3.8rem;
    margin-top: 2rem;
}
.operation_list{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}
.operation_list a{
    height: 4.5rem;
    line-height: 5rem;
    font-size: 1.4rem;
    border-bottom:1px solid #eaeaea;
}
.operation_list i{
    display: inline-block;
    width: 15%;
    height: 3.5rem;
    text-align: center;
    padding-top: 1rem;
    float: left;
}
.operation_list img{
    width: 3rem;
    height: 3rem;
}
.collection,.help{
    margin-top: 2.5rem;
}


.general{
    margin-top: 6rem;
    height:7rem;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
}
.general a{
    display: inline-block;
    width: 100%;
    height:7rem;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}
.general font{
    display: block;
    height:4rem;
    line-height:2.5rem;
    font-size: 1.5rem;
}
.general_icon{
    display: block;
    height:4rem;
}
.general_icon img{
    width: 3.8rem;
    height:3.8rem;
}

</style>

