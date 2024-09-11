<template>
  <div class="containers">
    <div class="banner"><img alt="" src="~/assets/img/index/banner1.png"></div>
    <div class="top-main w">
      <div>蚂蚁聚服</div>
      <div>
        蚂蚁聚服，是一家专业的新零售及产业互联网技术服务公司。蚂蚁聚服以“成为产业互联网领域最值得信赖的伙伴”为愿景，以“用互联网帮助注重提升商业效率的企业持续成功”为使命，坚持“产品+解决方案”的模式，服务了超千家中大型企业客户的电商及数字化转型。公司总部位于南京，并在北京、上海、广州、成都等地拥有本地化服务团队，覆盖全国市场。蚂蚁聚服共服务100+中大型企业。
        <br><br>
        蚂蚁聚服在消费品的分销、零售流通领域，沉淀了多种类型商业模式的解决方案，如B2C、BBC、O2O、新零售、社交电商、跨境电商、B2B、S2B、S2b2c等。蚂蚁聚服与国内主流云计算厂商建立了战略合作关系，结合大数据和人工智能技术，帮助企业在实现IT向DT转型的道路上，构建了全渠道交易及营销的IT闭环，从而实现精准营销，突破增长瓶颈，提升商业效率。
      </div>
    </div>
    <div class="progress">
      <div>
        <div class="title">发展历程</div>
        <div class="msg">我们正在书写更多精彩篇章....</div>
      </div>
      <div class="progress-main">
        <div class="main row">
          <div class="main-item">
            <div>2024</div>
            <div>蚂蚁聚服成立，服务于中大型企业，将丰富的市场 营销经验赋能于积分营销领域，深耕并致力于成 为中国最有价值的积分运营商
            </div>
          </div>
          <div class="line">
            <div class="line-item1"></div>
            <div class="line-item2"></div>
          </div>
        </div>
        <div class="main">
          <div class="main-item">
            <div>2023</div>
            <div>蚂蚁聚服成立，服务于中大型企业，将丰富的市场 营销经验赋能于积分营销领域，深耕并致力于成 为中国最有价值的积分运营商
            </div>
          </div>
          <div class="line">
            <div class="line-item1"></div>
            <div class="line-item2"></div>
          </div>
        </div>
        <div class="main row">
          <div class="main-item">
            <div>2022</div>
            <div>蚂蚁聚服成立，服务于中大型企业，将丰富的市场 营销经验赋能于积分营销领域，深耕并致力于成 为中国最有价值的积分运营商
            </div>
          </div>
          <div class="line">
            <div class="line-item1"></div>
            <div class="line-item2"></div>
          </div>
        </div>
        <div class="main">
          <div class="main-item">
            <div>2022</div>
            <div>蚂蚁聚服成立，服务于中大型企业，将丰富的市场 营销经验赋能于积分营销领域，深耕并致力于成 为中国最有价值的积分运营商
            </div>
          </div>
          <div class="line">
            <div class="line-item1"></div>
            <div class="line-item2"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script lang="ts" setup>
import {userStore} from '@/stores/user'

const store = userStore()
</script>

<style scoped>
.top-main {
  color: #333;
  margin: 0 auto;
  padding-bottom: 5.20833vw
}

.top-main > div:first-child {
  font-size: 36px;
  margin-bottom: 2.91667vw;
  margin-top: 5vw;
  text-align: center
}

.progress {
  background-color: #f8f8f8;
  padding: 5.20833vw 0
}

.progress .title {
  color: #333;
  font-size: 36px;
  margin-bottom: .20833vw;
  text-align: center
}

.progress .msg {
  color: #666;
  font-size: 16px;
  text-align: center
}

.progress .progress-main {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 3.125vw
}

.progress .progress-main .main {
  display: flex;
  width: 61.04167vw
}

.progress .progress-main .main.row {
  flex-direction: row-reverse
}

.progress .progress-main .main.row .main-item > div:first-child {
  text-align: left
}

.progress .progress-main .main .main-item {
  background-color: red;
  box-sizing: border-box;
  color: #fff;
  height: 8.75vw;
  padding-left: 4.47917vw;
  padding-right: 2.86458vw;
  width: 27.96875vw
}

.progress .progress-main .main .main-item > div:first-child {
  font-size: 30px;
  margin: .52083vw 0;
  text-align: right
}

.progress .progress-main .main .line {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 2.08333vw
}

.progress .progress-main .main .line .line-item1 {
  background-color: red;
  border-radius: 50%;
  height: .98958vw;
  width: .98958vw
}

.progress .progress-main .main .line .line-item2 {
  background-color: red;
  height: 10.41667vw;
  width: 1px
}
</style>