<template>
  <div class="discover">
    <van-row>
      <van-col span="22">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          shape="round"
          @search="onSearch"
          style="padding:10px 2px;"
        ></van-search>
      </van-col>
      <van-col class="iconAll" span="2">
        <van-icon name="plus"/>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24" class="discoverType">
        <van-col span="22">
          <van-tabs v-model="active" swipeable @click="getHitokotoType">
            <van-tab
              class="userDescript"
              v-for="(value, index) in selectedChannel"
              :key="index"
              :title="value"
              lazy-render
            >
              <van-row v-for="(hito, index) in hitokoto" :key="index">
                <van-col class="userTitle" span="24">
                  <van-image
                    fit="contain"
                    lazy-load
                    src="https://www.easyicon.net/api/resizeApi.php?id=5119&size=32"
                  />
                  <span>{{ hito.creator }}</span>
                  <van-icon name="arrow-down" @click="sex"/>
                </van-col>
                <van-col class="userSentence" span="24">
                  <span class="hitokoto-text">{{ hito.hitokoto }}</span>
                  <span class="hitokoto-from">{{ hito.from }}</span>
                </van-col>
                <van-col class="userOperation" span="24"></van-col>
              </van-row>
            </van-tab>
          </van-tabs>
        </van-col>
        <van-col span="2">
          <van-icon class="fa fa-bars" @click="popupShow"/>
        </van-col>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24"></van-col>
    </van-row>

    <!-- 弹出popup -->
    <van-popup class="popup" v-model="popupshow" overlay position="top" :overlay="true">
      <van-row class="titlePopup">
        <van-col span="24">
          <van-nav-bar title="频道定制">
            <van-icon name="cross" slot="right" @click="closePopup"/>
          </van-nav-bar>
        </van-col>
      </van-row>
      <van-row class="customizationChannel">
        <van-col span="24" class="selected-channel">
          <van-col span="16">已选频道</van-col>
          <van-col span="8">长按拖动调整排序</van-col>
          <van-col span="24">
            <el-tag
              effect="plain"
              size="medium"
              :disable-transitions="false"
              @close="selectedChannelClose(value)"
              v-for="(value, index) in selectedChannel"
              closable
              :key="index"
            >{{ value }}</el-tag>
          </van-col>
        </van-col>
        <van-col span="24" class="recommend-channel">
          <van-col span="16">推荐频道</van-col>
          <van-col span="24">
            <el-tag
              effect="plain"
              size="medium"
              v-for="(value, index) in recommendChannel"
              @click="recommendChannelClose(value)"
              :key="index"
            >{{ value }}</el-tag>
          </van-col>
        </van-col>
      </van-row>
    </van-popup>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      popupshow: false,
      show: false,
      actions: [{ name: "复制" }, { name: "举报" }, { name: "取消" }],
      value: "",
      onSearch: true,
      selectedType: {
        a: "动画",
        b: "漫画",
        c: "游戏",
        d: "小说",
        e: "原创",
        f: "来自网络",
        g: "其他"
      },
      selectedChannel: [
        "动画",
        "漫画",
        "游戏",
        "小说",
        "原创",
        "来自网络",
        "其他"
      ],
      recommendChannel: []
    };
  },
  computed: {
    hitokoto() {
      return this.$store.state.hitokotoType;
    }
  },
  methods: {
    onSelect(item) {
      this.show = false;
      this.$toast(item.name);
    },
    sex() {
      this.show = true;
    },
    popupShow() {
      this.popupshow = true;
    },
    closePopup() {
      this.popupshow = false;
    },
    selectedChannelClose(tag) {
      this.selectedChannel.splice(this.selectedChannel.indexOf(tag), 1);
      this.recommendChannel.push(tag);
    },
    recommendChannelClose(tag) {
      this.recommendChannel.splice(this.recommendChannel.indexOf(tag), 1);
      this.selectedChannel.push(tag);
    },
    // 根据Object的value获取key值
    findKey(obj, value, compare = (a, b) => a === b) {
      return Object.keys(obj).find(k => compare(obj[k], value));
    },
    getHitokotoType(index, title) {
      let type = this.findKey(this.selectedType, title);
      this.$store.commit("getHitokotoType", type);
    }
  }
};
</script>

<style lang="scss" scoped>
.discover {
  .popup {
    height: 100vh;
    .titlePopup {
      background-color: white;
    }
    .customizationChannel {
      height: 90%;
      background-color: rgb(243, 243, 245);
      .van-col--16 {
        text-align: left;
      }
      .van-col--8 {
        color: rgba(185, 183, 183, 0.527);
        text-align: right;
      }
      .van-col--24 {
        margin-top: 10px;
        .el-tag--medium {
          margin: 0px 0px 5px 10px;
        }
      }
    }
    .selected-channel {
      font-size: 12px;
      padding: 0px 12px 15px;
      border-bottom: 1px solid rgb(248, 216, 246);
    }
    .recommend-channel {
      padding: 0px 12px 15px;
      font-size: 12px;
      span {
        cursor: pointer;
      }
    }
  }
  .iconAll {
    padding-top: 18px;
    background-color: white;
  }
  .fa-bars {
    padding-top: 12px;
  }
  .discoverType {
    font-size: 13px;
    .userDescript {
      border-top: 1px solid rgb(235, 237, 240);
      border-bottom: 1px solid rgb(235, 237, 240);
      margin-top: 20px;
    }
    .userTitle {
      text-align: left;
      padding-left: 10px;
      .van-image {
        border: 1px solid;
      }
      span {
        position: relative;
        bottom: 10px;
        left: 6px;
      }
      .van-icon {
        float: right;
        position: relative;
        top: 10px;
      }
    }
    .userSentence {
      padding-bottom: 10px;
      .hitokoto-text {
        width: 90%;
        display: block;
        margin: 10px auto;
      }
      .hitokoto-from {
        // display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: right;
        justify-content: right;
        margin: 10px 10px;
      }
    }
  }
}
</style>
