<template>
    <div class="box">
        <div class="w" style="margin: 0 auto;">
            <div class="containers flex justify-between ">
                <div class="logo">
                    <img src="~/assets/img/logo.png" alt="">
                    <span>蚂蚁聚服</span>
                </div>
                <div class="center flex-1">
                    <div class="flex justify-evenly">
                        <div v-for="(item, index) in data" :key="index" class="item">
                            <div class="title mb-[37px] font-medium">{{ item.name }}</div>
                            <div class="child">
                                <div v-for="(child, index) in item.child" :key="index" class="child-item mb-[8px]"
                                    style="color: #666;">
                                    <a href="">
                                        {{ child.name }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ercode flex">
                    <div class="left flex flex-col items-center mr-[60px]">
                        <img class="w-[109px] h-[109px] mb-[20px]" src="~/assets/img/logo.png" alt="">
                        <span>官方微信公众号</span>
                        <span>微信扫码关注</span>
                    </div>
                    <div class="right flex flex-col items-center">
                        <img class="w-[109px] h-[109px] mb-[20px]" src="~/assets/img/logo.png" alt="">
                        <span>蚂蚁聚服官方APP</span>
                        <span>钉钉/淘宝/支付宝</span>
                        <span>扫码下载</span>
                    </div>
                </div>
            </div>
            <hr class="my-[33px]">
            <div class="bottom">
                <div>
                    <a class="px-[10px]" v-for="item in data1" href="">{{ item.name }}</a>
                </div>
                <div>
                    <a class="px-[10px]" v-for="item in data2" href="">{{ item.name }}</a>
                </div>
                <div class="banquan">
                    ©Copyright 2016-2022 江苏乐益购电子商务有限公司 版权所有 | 苏ICP备16060232号-3
                </div>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
const data = ref([
    {
        name: "营销产品", child: [
            { name: "万相台", link: "" },
            { name: "淘宝联盟", link: "" },
            { name: "直通车", link: "" },
            { name: "引力魔方", link: "" },
            { name: "Uni Desk", link: "" },
            { name: "品牌专区", link: "" },
            { name: "超级万动城", link: "" },
        ]
    },
    {
        name: '营销工具', child: [
            { name: '万相实验室', link: '' },
            { name: '达摩盘', link: '' },
            { name: '创意中心', link: '' },
            { name: '客户工作台', link: '' },

        ]
    },
    {
        name: "营销训练营", child: [
            { name: '万堂书院', link: '' },
            { name: '淘宝联盟课堂', link: '' },
        ]
    },
    {
        name: "营销服务", child: [
            { name: '营销拍档', link: '' },
            { name: '规则中心', link: '' },
            { name: '客服中心', link: '' },
            { name: '品牌形象站', link: '' }

        ]
    }
])


const data1 = ref([{
    name: '阿里巴巴集团', link: '',

}, {
    name: '淘宝网', link: '',

}, {
    name: '天猫', link: '',

}, {
    name: '聚划算', link: '',

}, {
    name: '全球速卖通', link: '',

}, {
    name: '阿里巴巴国际交易市场', link: '',

}, {
    name: '1688', link: '',

}, {
    name: '飞猪', link: '',

}, {
    name: '阿里云计算', link: '',

}, {
    name: 'AliOS', link: '',

}, {
    name: '阿里通信', link: '',

}, {
    name: '一淘', link: '',

}, {
    name: '万网', link: '',

}])
const data2 = ref([
    {
        name: '高德', link: '',

    },
    {
        name: 'UC', link: '',

    },
    {
        name: '友盟', link: '',

    },
    {
        name: '虾米', link: '',

    },
    {
        name: '大麦', link: '',

    },
    {
        name: '钉钉', link: '',

    },
    {
        name: '支付宝', link: '',

    },
    {
        name: '优酷', link: '',

    },
    {
        name: '土豆', link: '',

    },
    {
        name: '阿里安全', link: '',

    },
    {
        name: '阿里影业', link: '',

    },
    {
        name: '阿里体育', link: '',

    },
    {
        name: '网上银行', link: '',

    }
])


</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: 568px;
    box-sizing: border-box;
    background: linear-gradient(0deg, #FFFFFF 0%, #F3F5F7 100%);
    padding-top: 72px;

    .containers {
        margin: 0 auto;
        display: flex;

        .logo {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 109px;
                height: 109px;
            }

            span {
                font-size: 20px;

            }
        }

        .ercode {
            color: #666;
        }


    }

    .bottom {
        color: #666;
        display: flex;
        flex-direction: column;
        align-items: center;

        &>div {
            margin-bottom: 20px;
        }

        &>div a {
            border-right: 1px solid #ececec;
            height: 10px;
        }

        &>div a:last-child {
            border-right: none;
        }
    }
}
</style>