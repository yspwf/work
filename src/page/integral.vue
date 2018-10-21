<template>
    <div class="integral">
        <div class="integral_info">
        	<div class="integral_num"> 
        		<span class="num">579</span>
        		<span class="num_notice">已连续签到2天</span>
        	</div>
        	<div class="integral_action">
        		积分签到
        	</div>
        	<div class="integral_history">
        		积分历史
        	</div>
        </div>
        <div class="integral_days">
        	<div class="countdown">再签到5天可获得神秘奖品</div>
        	<div class="date">

        	</div>
        </div>

        <div class="get_integral">
        	<div class="get_title">赚取积分</div>
        	<div class="task_list">
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/meeting.png"></div>
        			<div class="task_name">
        				<span class="task_title">实名认证赢积分</span>
        				<span>完成实名认证，可获得200积分</span>
        			</div>
        			<div class="get_num">
        				<div class="nums">+200</div>
        			</div>
        		</div>
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/meeting.png"></div>
        			<div class="task_name">
        				<span class="task_title">实名认证赢积分</span>
        				<span>完成实名认证，可获得200积分</span>
        			</div>
        			<div class="get_num">
        				<div class="nums">+200</div>
        			</div>
        		</div>
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/meeting.png"></div>
        			<div class="task_name">
        				<span class="task_title">实名认证赢积分</span>
        				<span>完成实名认证，可获得200积分</span>
        			</div>
        			<div class="get_num">
        				<div class="nums">+200</div>
        			</div>
        		</div>
        	</div>
        </div>

         <div class="get_integral">
        	<div class="get_title">本月积分特惠商品</div>
        	<div class="task_list">
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/meeting.png"></div>
        			<div class="task_name">实名认证赢积分</div>
        			<div class="get_num">
        				<div class="nums">+200</div>
        			</div>
        		</div>
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/meeting.png"></div>
        			<div class="task_name">实名认证赢积分</div>
        			<div class="get_num">
        				<div class="nums">+200</div>
        			</div>
        		</div>
        	</div>
        </div>
    </div>
</template>

<script>
export default{
	data(){
		return {

		}
	}
}
</script>

<style>
.integral{
	background-color:#fdc35a;
    padding: 1rem 1rem 5rem;
}
.integral_info{
	display:flex;
	display:-webkit-flex;
	justify-content:space-around;
}
.integral_num,.integral_action,.integral_history{
	height:12rem;
	width:33.33%;
	text-align:center;
	color:#fff;
}
.integral_info .integral_num{
	display:flex;
	display:-webkit-flex;
	flex-direction:column;
	color:#fff;
}
.integral_info .integral_num span{
	text-align:center;
	font-size:1.3rem;
}
.integral_info .integral_num .num{
	font-size:5rem;
	height:8rem;
	line-height: 11rem;
}
.integral_info .integral_action{
	
}
.integral_days{
	background-color:#fff;
	border-radius:1rem;
}
.integral_days .countdown{
	padding:1rem 2rem;
	color:#666;
	font-size: 1.3rem;
}
.integral_days .date{
	height:8rem;
}

.get_integral{
	padding: 2rem 0;
}
.get_integral .get_title{
	height: 4rem;
    text-align: center;
    font-size: 2rem;
    line-height:4rem;
    color: #fd5723;
}

.get_integral .task_list{
	background-color:#fff;
	border-radius:1rem;
}
.get_integral .task_list .task{
	display:flex;
	display:-webkit-flex;
	justify-content: space-around;
	padding: 1rem 0;
    border-bottom: 1px solid #999;
    margin: 0 1rem;
}
.get_integral .task_list .task .task_img{
	width:20%;
}
.get_integral .task_list .task .task_img img{
	height:5rem;
	width:5rem;
	border-radius: 5rem;
    border: 1px solid red;
}
.get_integral .task_list .task .task_name{
	width:60%;
	display:flex;
	display:-webkit-flex;
	flex-direction:column;
}
.get_integral .task_list .task .task_name span{
	height: 2rem;
    line-height: 2rem;
    color:#b3b3b3;
}
.get_integral .task_list .task .task_name .task_title{
	height:3rem;
	line-height:3rem;
	font-size:2rem;
	color:#666;
}
.get_integral .task_list .task .get_num{
	width:20%;
}
.get_integral .task_list .task .get_num .nums{
	height:3rem;
	width:96%;
	background:#f95935;
	margin: 1rem 2%;
	text-align:center;
	line-height:3rem;
	font-size:1.5rem;
	color:#fff;
	border-radius:1.5rem;
}
</style>
