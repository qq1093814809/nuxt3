<template>
    <div class="containers w mx-auto">
        <div class="title">四大核心优势</div>
        <div class="discript">全方位助力生意增长、科学经营、快人一步</div>
        <div class="img-box">
            <img src="~/assets/img/index/fourbig.png" alt="">
            <div>
                <span>真是庞大的数智消费资产</span><span>海量数智资产能洞察、助力数智资产经 营沉淀评估</span>
            </div>
            <div><span>前言先进的经营方法论</span><span>持续优化深耕方法论，助力科学决策高效经营</span></div>
            <div><span>科学领先的智能技术</span><span>科学领先的智能技术保障商家加速驶入“全域经营 智能提效”的快车道</span></div>
            <div><span>智能高效的全域经营解决方案</span><span>全域营销产品体系，提供一站式经营解决方案</span></div>
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

    .img-box {
        position: relative;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        margin-top: 166px;
        margin-bottom: 200px;
        width: 823px;
        height: 580px;
        box-sizing: border-box;

        img {
            width: 823px;
            height: 580px;
        }

        div {
            position: absolute;
            width: 300px;
            display: flex;
            flex-direction: column;

            &>span:nth-child(1) {
                font-size: 22px;
                color: #FF1616;
            }

            &>span:nth-child(2) {
                color: #666666;
            }
        }

        &>div:nth-of-type(1) {
            top: 70px;
            left: -130px;
        }

        &>div:nth-of-type(2) {
            top: 70px;
            right: -200px;
        }

        &>div:nth-of-type(3) {
            bottom: -90px;
            left: -130px;
        }

        &>div:nth-of-type(4) {
            bottom: -90px;
            right: -200px;
        }


    }
}
</style>