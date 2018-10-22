<template>
    <div div="exchange">
        <div class="goods_name">
            <div class="layout">
               恭喜你获得我们的奖品，请填写你真时的收货信息，我们将在7个工作日内寄出你的奖品。
            </div>
        </div>

        <div class="address">
            <ul class="layout">
                 <li>
                    <span>订单号</span>
                    <span class="payinfo">45645656782327568468</span>
                </li>
                <li>
                    <span>商品合计</span>
                    <span class="payinfo">￥59</span>
                </li>
            </ul>
        </div>

        <div class="address">
            <ul class="layout">
                 <li>
                    <span>优惠券</span>
                    <router-link to="/" class="preferential">满40减10</router-link>
                </li>
                
            </ul>
        </div>

        <div class="address">
            <ul class="layout">
                
                <li>
                    <span>收货人</span>
                    <input type="text" name="username" placeholder="请填写收货人姓名"/>
                </li>
                <li>
                    <span>手机号码</span>
                    <input type="text" name="username" placeholder="请填写收货人手机号码"/>
                </li>
                <li>
                    <span>所在地区</span>
                    <input type="text" name="username" placeholder="请选择"/>
                </li>
                <li>
                    <span>详细地址</span>
                    <input type="text" name="username"  placeholder="详细地址"/>
                </li>
            </ul>
        </div>

        <div class="btn">
            <button>支 付</button>
        </div>

    </div>
</template>

<style>
.goods_name{
    height: 5rem;
    background:none;
}
.goods_name .layout,.address .layout{
    display: flex;
    display: -webkit-flex;
    padding: 0 1.5rem;
    justify-content: space-around;
}
.goods_name .layout{
    padding:0.5rem 1.5rem;
    font-size: 1.2rem;
    line-height: 2rem;
}
.goods_name .layout span{
    width: 50%;
    display: block;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.5rem;
    padding: 0 1rem;
}
.goods_name .layout .price{
    color: #fba230;
    text-align: right;
}
.address{
    margin-top: 1rem;
    background: #fff;
}
.address .layout{
    flex-direction: column;
}
.address .layout li{
    height: 5.2rem;
    border-bottom: 1px solid #efefef;
    display: flex;
    display: -webkit-flex;
}
.address .layout li span,.address .layout li input{
    line-height: 5rem;
    font-size: 1.4rem;
}
.address .layout li span{
    padding:0 1rem;
    width:20%;
}
.address .layout li input{
    width: 75%;
    border:none;
    outline: none;
    height: 5.1rem;
    padding: 0.2rem 1rem;
}
.address .layout .payinfo{
    width: 80%;
    text-align: right;
    color: #9a9a9a;
}
.address .layout .preferential{
    display: block;
    width: 80%;
    line-height: 5rem;
    font-size: 1.2rem;
    text-align: right;
}
.address .layout li input::-webkit-input-placeholder{
            color:#dadada;
        }
.address .layout li input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#dadada;
        }
.address .layout li input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#dadada;
        }
.address .layout li input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#dadada;
        }

.btn{
    height: 5rem;
    margin-top: 3rem;
    text-align: center;
}
.btn button{
    width: 80%;
    height:4rem;
    background: #fba230;
    border:none;
    border-radius: 3rem;
    color: #fff;
    font-size: 1.8rem;
    outline: none;
}
</style>

