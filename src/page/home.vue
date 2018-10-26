<template>
    <div class="home">
        <div class="info">
            <div class="search">
                <input type="text" > <i><img src=""></i>
            </div>
            <div class="card">
                <div class="info_base">
                    <div class="headImg">
                         <img src="../../static/images/headImg.png">
                        <canvas width="100" height="100">
                           
                        </canvas>
                    </div>
                    <div class="partment">
                        <span>哈哈哈</span>
                        <span class="position">工程师--技术部</span>
                    </div>
                    <div class="set">
                        设置
                    </div>
                </div>
                <div class="vacation">
                    <div>
                        <h4>24 h</h4>
                        <span>剩余时间</span>
                    </div>
                    <div>
                        <h4>24 h</h4>
                        <span>剩余时间</span>
                    </div>
                    <div>
                        <h4>24 h</h4>
                        <span>剩余时间</span>
                    </div>
                </div>
            </div>
            <div class="general">
                <a href="">
                    <i class="general_img"><img src="../../static/images/meeting.png"></i>
                    <font>会议</font>
                </a>
                <a href="">
                    <i class="general_img"><img src="../../static/images/meeting.png"></i>
                    <font>签到</font>
                </a>
                <a href="">
                    <i class="general_img"><img src="../../static/images/meeting.png"></i>
                    <font>日程</font>
                </a>
                <a href="">
                    <i class="general_img"><img src="../../static/images/meeting.png"></i>
                    <font>广播</font>
                </a>
            </div>
        </div>

        <div class="commonly_used">
            <div class="commonly_title">
                <h5>常用功能</h5>
                <i>· · ·</i>
            </div>
            <div class="commonly_list">
                <a href="">
                    <i class="common_icon"><img src="../../static/images/office.png"></i>
                    <font>会议</font>
                </a>
                <a href="">
                    <i class="common_icon"><img src="../../static/images/office.png"></i>
                    <font>会议</font>
                </a>
                <a href="">
                    <i class="common_icon"><img src="../../static/images/office.png"></i>
                    <font>会议</font>
                </a>
                <a href="">
                    <i class="common_icon"><img src="../../static/images/office.png"></i>
                    <font>会议</font>
                </a>
                <a href="">
                    <i class="common_icon"><img src="../../static/images/office.png"></i>
                    <font>会议</font>
                </a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {

        }
    },

}
</script>

<style>
.home{
    padding-bottom: 3rem;
}
.info{
  background-color: #fff;
  padding: 0 1rem;
}
.search{
    height: 3rem;
    padding: 0.5rem 0;
}
.search input{
    width: 85%;
    height:3rem;
    padding: 0.3rem 1.4rem;
    border-radius:2rem;
    outline: none;
    border:1px solid #f1f1f1;
    font-size: 1.6rem;
    background-color: #f1f1f1;
}
.card{
    height:20rem;
    margin-top: 1rem;
    background-color: #a4a9ea;
    border-radius: 1rem;
    flex-direction:column;
}
.card,.info_base,.vacation{
    display: flex;
    display: -webkit-flex;
}
.info_base{
    height: 12rem;
}
.info_base .headImg{
    width:30%;
    text-align: center;
}
.info_base .headImg img{
    height: 8rem;
    width: 8rem;
     border-radius: 50%;
     margin-top: 1rem;
     border:1px solid red;
}
.info_base .partment{
    width:60%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding-top: 2rem;
}
.info_base .partment span{
    font-size: 2rem;
    height:3rem;
    line-height: 3rem;
    color: #fff;
}
.info_base .partment .position{
    font-size: 1.5rem;
}
.info_base .set{
    width: 10%;
}
.vacation{
    height:8rem;
    justify-content: space-around;
}
.vacation div{
    width: 33.333%;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
}
.vacation div h4{
    font-size: 2rem;
    height: 4rem;
    line-height: 4rem;
}
.vacation div span{
    font-size: 1.2rem;
    height: 2rem;
    line-height: 2rem;
}
.general{
    margin-top: 2rem;
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
.general_img{
    display: block;
    height:2.5rem;
}
.general_img img{
    width: 2.8rem;
    height:2.8rem;
}
.commonly_used{
    padding-top: 2rem;
    border: 1px solid #d8d8d8;
    border-radius: 2rem;
    margin: 2rem 0.5rem 0;
    background-color: #fff;
}
.commonly_title{
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    height:2rem;
}
.commonly_title h5{
    font-size: 2rem;
    font-weight: normal;
    width: 90%;
    padding-left: 2rem;
    line-height: 2rem;
    height: 2rem;
    color:#6b6b6b;
}
.commonly_title i{
    display: block;
    line-height: 2rem;
    height: 2rem;
    text-align: center;
    width: 10%;
}
.commonly_list{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
}
.commonly_list a{
    width: 25%;
    display: block;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
}
.commonly_list .common_icon{
    height:5rem;
    display: block;
    line-height: 5rem;
}
.commonly_list font{
    height: 3rem;
    display: block;
    line-height: 2rem;
    font-size: 1.5rem;
}
.commonly_list .common_icon img{
    width: 2.5rem;
    height: 3rem;
    padding-top: 2rem;
}
</style>

