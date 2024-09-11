<template>
    <div class="containers w mx-auto">
        <div class="title">全货品源API接入</div>
        <div class="discript">官方一件代发，京东、星链同仓发货，无需自建仓储囤货</div>
        <div class="box">
            <div>
                <img src="~/assets/img/index/11.png" alt="">
                <span class="title">物流全包</span>
                <span class="msg">只需提供详细货物信息以及收货信息 门到门费用核算清清楚楚</span>
            </div>
            <div>
                <img src="~/assets/img/index/22.png" alt="">
                <span class="title">品牌特供</span>
                <span class="msg">品牌方合作的特定供应商生产和供应 严格监控和控制商品治疗</span>
            </div>
            <div><img src="~/assets/img/index/33.png" alt="">
                <span class="title">定制商城</span>
                <span class="msg">品牌方合作的特定供应商生产和供应 严格监控和控制商品治疗</span>
            </div>
            <div><img src="~/assets/img/index/44.png" alt="">
                <span class="title">优选板块</span>
                <span class="msg">只需提供详细货物信息以及收货信息 门到门费用核算清清楚楚</span>
            </div>
            <div><img src="~/assets/img/index/55.png" alt="">
                <span class="title">一件代发</span>
                <span class="msg">只需提供详细货物信息以及收货信息 门到门费用核算清清楚楚</span>
            </div>
            <div><img src="~/assets/img/index/66.png" alt="">
                <span class="title">售后服务</span>
                <span class="msg">只需提供详细货物信息以及收货信息 门到门费用核算清清楚楚</span>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
.containers {
    text-align: center;

    .title {
        font-size: 32px;
        color: #666;
        margin-top: 50px;
    }

    .discript {
        margin-top: 20px;
        margin-bottom: 50px;
        color: #666;
    }

    .box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        &>div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 445px;
            height: 391px;
            box-sizing: border-box;
            padding-top: 36px;
            margin-bottom: 65px;

            .title {
                font-weight: 400;
                font-size: 30px;
                color: #0C1026;
                margin-top: 20px;
                // line-height: 48px;
            }

            .msg {
                width: 302px;
                margin-top: 32px;
                font-size: 18px;
                color: #0C1026;

            }

            img {
                width: 150px;
                height: 150px;
            }
        }

        @for $i from 1 through 6 {
            &>div:nth-child(#{$i}) {
                background-image: url('~/assets/img/index/#{$i}.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
        }
    }
}
</style>