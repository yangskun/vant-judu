<template>
  <van-skeleton animate avatar-size="80px" title avatar :row="3" :loading="loading">
    <van-row class="user">
      <van-col span="24" class="user-my">
        <van-col span="8" class="user-my-headimg">
          <van-image
            width="50"
            fit="contain"
            lazy-load
            src="https://b-ssl.duitang.com/uploads/item/201608/21/20160821230024_MyCYK.thumb.700_0.jpeg"
          >
            <van-loading type="spinner" size="20"/>
          </van-image>
        </van-col>
        <van-col span="16" class="user-my-description">
          <span>梦舞@飞扬</span>
          <p style>点击查看个人主页</p>
        </van-col>
      </van-col>
      <van-col span="24" class="user-creation">
        <van-col span="8" class="user-creation-bottom">
          <span>0</span>
          <p>订阅</p>
        </van-col>
        <van-col span="8" class="user-creation-bottom">
          <span>0</span>
          <p>创作</p>
        </van-col>
        <van-col span="8" class="user-creation-bottom">
          <span>3</span>
          <p>喜欢</p>
        </van-col>
      </van-col>
      <van-col span="24" class="adminList list">
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="bell" size="18"/>
          <div class="van-cell__title">
            <span>我的消息</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="bookmark" size="18"/>
          <div class="van-cell__title">
            <span>我的收藏夹</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="comment" size="18"/>
          <div class="van-cell__title">
            <span>我的评论</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="clock" size="18"/>
          <div class="van-cell__title">
            <span>历史浏览</span>
          </div>
          <div class="van-cell__value">
            <span>会员专享</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
      </van-col>
      <van-col span="24" class="adminList2 list">
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="medel" size="18"/>
          <div class="van-cell__title">
            <span>任务中心</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="info" size="18"/>
          <div class="van-cell__title">
            <span>帮助反馈</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="eye" size="18"/>
          <div class="van-cell__title">
            <span>看个广告</span>
          </div>
          <div class="van-cell__value">
            <span>获取积分</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <van-icon name="volume" size="18"/>
          <div class="van-cell__title">
            <span>推荐句读</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
      </van-col>
      <van-col span="24" class="adminList3 list">
        <div class="van-cell van-cell--clickable van-coupon-cell">
          <i class="fa fa-gear fa-lg" style="line-height:1.2em"></i>
          <!-- <van-icon name="bell" size="18"/> -->
          <div class="van-cell__title">
            <span>我的消息</span>
          </div>
          <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
        </div>
      </van-col>
    </van-row>
  </van-skeleton>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {}
};
</script>

<style lang="scss">
.user {
  height: 100%;
  font-size: 14px;
  .user-my {
    margin-top: 30px;
    .user-my-headimg {
      .van-image img {
        border-radius: 25px;
      }
    }
    .user-my-description {
      text-align: left;
      p {
        color: rgba(185, 183, 183, 0.692);
        font-size: 13px;
      }
    }
  }
  .user-creation {
    .user-creation-bottom {
      border-right: 1px solid rgb(219, 219, 219);
      p {
        color: rgba(185, 183, 183, 0.527);
        margin: 6px 0px;
      }
    }
  }
  // .adminList {
  // }
  .list {
    margin-bottom: 20px;
    .van-cell {
      cursor: pointer;
    }
    .van-cell__title {
      text-align: left;
      padding-left: 15px;
    }
  }
}
</style>
