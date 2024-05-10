<template>
    <div class="containers">
        <div class="title">全货品源API接入</div>
        <div class="discript">官方一件代发，京东、星链同仓发货，无需自建仓储囤货</div>
        <div class="box space-x-[22px]">
            <div>
                <img src="~/assets/img/index/111.png" alt="">
                <span>私有化部署</span>
                <span>基于客户自身的服务器部署，数据无需上传至第三方服务器或云端，企业私密数据的安全性更有保障</span>
            </div>
            <div>
                <img src="~/assets/img/index/222.png" alt="">
                <span>标准产品</span>
                <span>经历多个行业上百个大客户验证系统，积累多顶成熟的电商功能模块，不仅满足行业多样需求同时提供极致性能和最佳体验</span>
            </div>
            <div>
                <img src="~/assets/img/index/333.png" alt="">
                <span>定制服务</span>
                <span>专业团队做专业的事：解决方案专家、产品经理、项目经理、实施团队、测试团队、运维团队、售后服务团队</span>
            </div>
            <div>
                <img src="~/assets/img/index/444.png" alt="">
                <span>运营方案</span>
                <span>根据业务定位，客群分析，产品优势及团队构建指定运营计划，确定运营目标，跟进执行和效果验证</span>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup></script>
<style lang='scss' scoped>
.containers {
    text-align: center;
    height: 679px;
    background: #F3F5F7;
    overflow: hidden;

    .title {
        font-size: 32px;
        color: #666;
        margin-top: 78px;
    }

    .discript {
        margin-top: 20px;
        margin-bottom: 50px;
        color: #666;
    }

    .box {
        display: flex;
        justify-content: center;
        margin-top: 90px;

        &>div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 344px;
            background-color: #FFF;
            border: 1px solid #DBDBDB;
            box-sizing: border-box;
            padding: 0 30px;
            padding-bottom: 60px;


            img {
                width: 162px;
                transform: translateY(-30%);
            }

            &>span:nth-of-type(1) {
                font-size: 24px;
                color: #333;
                // margin-top: 30px;
            }

            &>span:nth-of-type(2) {
                font-size: 16px;
                color: #666666;
                margin-top: 30px;
            }

        }
    }

}
</style>