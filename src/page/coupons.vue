<template>
    <div class="coupons">
        <router-link to="/exchange" class="coupons_list">
            <div class="coupons_info">
                <div class="coupons_type">
                    <h4>通用红包</h4>
                    <span>有效期至2018.11.11</span>
                </div>
                <div class="coupons_price">
                    <div class="value"><span>￥</span>5</div>
                    <span>满30元可用</span>
                </div>
            </div>
            <div class="coupons_notice">限非到店自取订单使用。限登录和收餐账号为177********使用</div>
        </router-link>
        

         <router-link to="/exchange" class="coupons_list">
            <div class="coupons_info">
                <div class="coupons_type">
                    <h4>通用红包</h4>
                    <span>有效期至2018.11.11</span>
                </div>
                <div class="coupons_price">
                    <div class="value"><span>￥</span>5</div>
                    <span>满30元可用</span>
                </div>
            </div>
            <div class="coupons_notice">限非到店自取订单使用。限登录和收餐账号为177********使用</div>
        </router-link>

        <div class="other"> <a href="javascript:void(0);">没有更多红包了</a>| <router-link to="/">查看无效卷>></router-link> </div>
    </div>
</template>

<style>
.coupons{
    padding:1rem;
}
.coupons_list{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 1.5rem;
    box-shadow: 0.5rem 0.5rem 2rem #cecece;
}
.coupons_list:before{
    content: '';

}
.coupons_list .coupons_info,.coupons_list .coupons_info .coupons_type,.coupons_list .coupons_info .coupons_price{
    display: flex;
    display: -webkit-flex;
}
.coupons_list .coupons_info .coupons_type,.coupons_list .coupons_info .coupons_price{
    width: 50%;
    flex-direction: column;
    padding:1rem 1.5rem;
}
.coupons_list .coupons_info .coupons_price{
    text-align: right;
}
.coupons_list .coupons_info .coupons_type h4{
    font-size:2rem;
    font-weight: normal;
    height: 4rem;
    line-height: 4rem;
}
.coupons_list .coupons_info .coupons_price .value{
    font-size:3rem;
    font-weight: normal;
    height: 4rem;
    line-height: 4rem;
    color:#f00;
}
.coupons_list .coupons_info .coupons_price .value span{
     color:#f00;
    font-size: 1.6rem;
}
.coupons_list .coupons_info .coupons_type span,.coupons_list .coupons_info .coupons_price span{
    font-size: 1.2rem;
    color:#969696;
}
.coupons_list .coupons_notice{
    padding: 0.5rem 1.5rem 1rem;
    color:#dadada;
}
.other{
    text-align: center;
    color:#666;
}
</style>

