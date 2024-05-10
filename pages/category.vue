<template>
    <div class="content-boxs">
        <div class="banner">
            <img src="~/assets/img/category/banner.png" alt="">
        </div>
        <h1>
            连接 <span>1000+</span> 家品牌供应商，一次接入海量兑换商品
        </h1>
        <div class="box1 ">
            <div class="w">
                <div>
                    <img src="`~/assets/img/category/1.png`" alt="">
                    <span>数码家电</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/2.png`" alt="">
                    <span>电脑办公</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/3.png`" alt="">
                    <span>服饰内衣</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/4.png`" alt="">
                    <span>家居日用</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/5.png`" alt="">
                    <span>美妆护肤</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/6.png`" alt="">
                    <span>户外运动</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/7.png`" alt="">
                    <span>母婴用品</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/8.png`" alt="">
                    <span>食品饮料</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/9.png`" alt="">
                    <span>汽车用品</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/10.png`" alt="">
                    <span>珠宝首饰</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/11.png`" alt="">
                    <span>玩具乐器</span>
                </div>
                <div>
                    <img src="`~/assets/img/category/12.png`" alt="">
                    <span>个人护理</span>
                </div>
            </div>
        </div>
        <div class="box2">
            <div class="title">接入供应流程</div>
            <div class="msg">一键接入 简单快捷</div>
            <div class="main space-x-[30px]">
                <div>
                    <img src="~/assets/img/category/b1.png" alt="">
                    <span>供应链中台系统</span>
                </div>
                <div>
                    <img src="~/assets/img/category/b2.png" alt="">
                    <span>API对接 一键接入</span>
                </div>
                <div>
                    <img src="~/assets/img/category/b3.png" alt="">
                    <span>客户商城</span>
                </div>
                <div>
                    <img src="~/assets/img/category/b2.png" alt="">
                    <span>自由加价 一键代发</span>

                </div>
                <div>
                    <img src="~/assets/img/category/b4.png" alt="">
                    <span>消费者</span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script lang='ts' setup>
const data = ref(['数码家电', '电脑办公', '服饰内衣', '家居日用', '美妆护肤', '户外运动', '母婴用品', '食品饮料', '汽车用品', '珠宝首饰', '玩具乐器', '个人护理'])
</script>
<style lang='scss' scoped>
.content-boxs {
    width: 100%;
    height: 100%;

    .banner {
        width: 100%;
        overflow: hidden;
    }

    h1 {
        text-align: center;
        margin-top: 77px;
        margin-bottom: 114px;
        font-size: 30px;
        color: #333333;

        span {
            color: #FF1616;
        }
    }

    .box1 {
        display: flex;
        align-items: center;
        height: 1156px;
        background: #F3F5F7;

        .w {
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 49px;

            &>div {


                display: flex;
                flex-direction: column;
                align-items: center;
                width: 322px;
                height: 289px;
                background-color: #fff;
                box-sizing: border-box;
                padding-top: 43px;

                span {
                    margin-top: 45px;
                }

                img {
                    width: 144px;
                    height: 135px;
                }
            }
        }

    }

    .box2 {
        text-align: center;
        padding-bottom: 100px;

        .title {
            font-size: 32px;
            color: #666;
            margin-top: 50px;
        }

        .msg {
            margin-top: 20px;
            margin-bottom: 50px;
            color: #666;
        }

        .main {
            display: flex;
            justify-content: center;
            // align-items: center;

            &>div:nth-child(odd) {
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    width: 214px;
                    height: 214px;
                }

                span {
                    font-size: 30px;
                    color: #666666;
                    margin-top: 20px;
                }
            }

            &>div:nth-child(even) {
                position: relative;
                width: 266px;
                height: 151px;
                margin-top: 40px;

                img {
                    width: 266px;
                    height: 151px;

                }

                span {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    left: -20px;
                    font-size: 16px;
                    color: #F13417;
                }
            }
        }
    }
}
</style>