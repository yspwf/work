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
        		<router-link to="/">
					<div class="history_img">
						<img src="../../static/images/history.png">
					</div>
					<div class="history_title">
						积分详情
					</div>
				</router-link>
        	</div>
        </div>
        <div class="integral_days">
        	<div class="countdown">再签到<span class="day">5</span>天可获得神秘奖品</div>
        	<div class="date">
				<a href="javascript:void(0);">
					<div class="">
						<img src="../../static/images/over.png">
					</div>
					<span>9.15</span>
				</a>
				<a href="javascript:void(0);">
					<div class="">
						<img src="../../static/images/over.png">
					</div>
					<span>9.16</span>
				</a>
				<a href="javascript:void(0);">
					<div class="">
						<img src="../../static/images/noover.png">
					</div>
					<span>9.17</span>
				</a>
				<a href="javascript:void(0);">
					<div class="">
						<img src="../../static/images/over.png">
					</div>
					<span>9.15</span>
				</a>
				<a href="javascript:void(0);">
					<div class="">
						<img src="../../static/images/over.png">
					</div>
					<span>9.16</span>
				</a>
				<a href="javascript:void(0);">
					<div class="">
						<img src="../../static/images/over.png">
					</div>
					<span>9.15</span>
				</a>
				<a href="javascript:void(0);">
					<div class="">
						<img src="../../static/images/over.png">
					</div>
					<span>9.16</span>
				</a>
        	</div>
        </div>

        <div class="get_integral">
        	<div class="get_title">赚取积分</div>
        	<div class="task_list">
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/real-name.png"></div>
        			<div class="task_name">
        				<span class="task_title">实名认证赢积分</span>
        				<span>完成实名认证，可获得200积分</span>
        			</div>
        			<div class="get_num">
        				<div class="nums">+200</div>
        			</div>
        		</div>
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/real-name.png"></div>
        			<div class="task_name">
        				<span class="task_title">实名认证赢积分</span>
        				<span>完成实名认证，可获得200积分</span>
        			</div>
        			<div class="get_num">
        				<div class="nums">+200</div>
        			</div>
        		</div>
        		<div class="task">
        			<div class="task_img"><img src="../../static/images/real-name.png"></div>
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
        		<div class="goods">
					<div class="show_img">
						<img src="../../static/images/goods.png">
					</div>
					<div class="goods_info">
						<div class="title">
							<h4>后视镜进口光学防雨膜</h4>
							<span>通用型直径10.5CM</span>
						</div>
						<div class="price">
							<span class="real_price">￥29 + 300积分</span>
							<span>￥39</span>
						</div>
						<div class="buy">
							<router-link to="/exchange">兑换</router-link>
						</div>
					</div>
        		</div>

				<div class="goods">
					<div class="show_img">
						<img src="../../static/images/goods.png">
					</div>
					<div class="goods_info">
						<div class="title">
							<h4>后视镜进口光学防雨膜</h4>
							<span>通用型直径10.5CM</span>
						</div>
						<div class="price">
							<span class="real_price">￥29 + 300积分</span>
							<span>￥39</span>
						</div>
						<div class="buy">
							<router-link to="/exchange">兑换</router-link>
						</div>
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
    padding: 1rem 1rem 5rem;
	background:#fdebcb url('../../static/images/integralbg.png') top center no-repeat;
	background-size:100% auto;
	-moz-background-size:100% auto;
}
.integral_info{
	display:flex;
	display:-webkit-flex;
	justify-content:space-around;
	
}
.integral_num,.integral_action,.integral_history{
	height:12rem;
	width:33.33%;
	color:#fff;
	text-align:center;
}
.integral_history a{
	color:#fff;
	text-align:center;
}
.integral_history .history_img{
    height: 7rem;
}
.integral_history .history_img img{
	padding-top: 4rem;
}
.integral_history .history_title{
	height: 3rem;
    font-size: 1.3rem;
    line-height: 3rem;
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
.integral_days .countdown .day{
	color:#fd5723;
}
.integral_days .date{
	height:8rem;
	display:flex;
	display:-webkit-flex;
}
.integral_days .date a{
	width: 14.285%;
	text-align: center;
}
.integral_days .date div{
	height:4.5rem;
}
.integral_days .date div img{
	padding-top: 0.5rem;
}
.integral_days .date span{
	font-size: 1.3rem;
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
	padding: 1.3rem 0;
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

.get_integral .task_list .goods{
	display: flex;
	display: -webkit-flex;
	padding: 2.5rem 0;
	margin: 0 1rem;
    border-bottom: 1px solid #c5c5c5;
}

.get_integral .task_list .goods .show_img{
	width:30%;
	text-align: center;
}
.get_integral .task_list .goods .show_img img{
	height: 7rem;
	width: 10rem;
}
.get_integral .task_list .goods .goods_info{
	width:70%;
	padding-left: 2rem;
	display: flex;
	display: -webkit-flex;
	flex-direction:column;
}
.get_integral .task_list .goods .goods_info div{
	padding:0.3rem 0;
}
.get_integral .task_list .goods .goods_info .title{
	display: flex;
	display: -webkit-flex;
	flex-direction:column;
}
.get_integral .task_list .goods .goods_info .title h4{
	height: 2.5rem;
    font-size: 1.8rem;
	color:#666;
}
.get_integral .task_list .goods .goods_info .title span{
	height: 1.5rem;
    font-size: 1rem;
}
.get_integral .task_list .goods .goods_info .price{
	height: 2rem;
	font-size: 1.5rem;
}
.get_integral .task_list .goods .goods_info .price span{
	font-size: 1rem;
	color:#b3b3b3;
	text-decoration:line-through;
}
.get_integral .task_list .goods .goods_info .price .real_price{
	font-size: 1.5rem;
	color: #f95935;
	text-decoration:none;
}
.get_integral .task_list .goods .goods_info .buy a{
	display: inline-block;
	height: 3rem;
	width: 30%;
	background: #f95935;
	border-radius: 3rem;
	text-align: center;
	line-height: 3rem;
	color:#fff;
	font-size: 2rem;
	font-size: 1.3rem;
}
</style>
