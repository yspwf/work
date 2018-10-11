<template>
    <div class="detail">
       
       <div class="say">
            <div class="person">
               <img src="../../static/images/head.png">
            </div>
            <div class="content">
               <span class="name">哈哈哈</span>
               <div class="contents">对方公司大股东十多个  http://www.baidu.com  对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
            </div>
       </div>

       <div class="say">
            <div class="person">
               <img src="../../static/images/head.png">
            </div>
            <div class="content">
               <span class="name">哈哈哈</span>
               <div class="contents">对方公司大股东十多个  http://www.baidu.com  对方aidu.com对方公司大股东个  http://www.baidu.com</div>
            </div>
       </div>

       <div class="say">
            <div class="person">
               <img src="../../static/images/head.png">
            </div>
            <div class="content">
               <span class="name">哈哈哈</span>
               <div class="contents">对方公司大股东十多个  http://www.baidu.com  对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
            </div>
       </div>


       <div class="say self">
            <div class="content">
               <span class="name selfname">哈哈哈</span>
               <div class="contents">对方公司大股东十多个  http://www.baidu.com  十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
            </div>
            <div class="person selfperson">
               <img src="../../static/images/head.png">
            </div>
       </div>

       <div class="say self">
            <div class="content">
               <span class="name selfname">哈哈哈</span>
               <div class="contents">对方公司大股东十多个  http://www.baidu.com  十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
            </div>
            <div class="person selfperson">
               <img src="../../static/images/head.png">
            </div>
       </div>

       <div class="say self">
            <div class="content">
               <span class="name selfname">哈哈哈</span>
               <div class="contents">对方公司大股东十多个  http://www.baidu.com  十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com对方公司大股东十多个  http://www.baidu.com</div>
            </div>
            <div class="person selfperson">
               <img src="../../static/images/head.png">
            </div>
       </div>

       <div class="say self">
            <div class="content">
               <span class="name selfname">哈哈哈</span>
               <div class="contents">对方公司大股东十多个   http://www.baidu.com</div>
            </div>
            <div class="person selfperson">
               <img src="../../static/images/head.png">
            </div>
       </div>
        
    </div>
</template>


<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style>
.detail{
    width: 100%;
    background-color: #fff;
    padding-bottom: 10rem;
}
.say{
    display: flex;
    display: -webkit-flex;
    padding: 1rem;
}
.say .person{
    width: 10%;
    height:3rem;
   
}

.say .person img{
    width: 3rem;
    height: 3rem;
}
.say .content{
    width: 78%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    padding: 0 0.5rem;
}
.say .content .name{
    font-size: 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
}
.say .content .contents{
    margin-top:0.5rem;
    padding: 0.5rem 0.8rem;
    border:1px solid #dadada;
    border-radius: 0.8rem;
    line-height: 1.5rem;
    font-size: 1rem;
    width: 93%;
}

.self{
    justify-content: flex-end;
}

.self .selfname{
    padding: 0 0.5rem;
    text-align: right;
}
.self .selfperson{
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    width: 9%;
}

</style>
