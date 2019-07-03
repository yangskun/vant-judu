<template>
  <div class="discover">
    <van-row>
      <van-col span="24">
        <div class="nav-bar van-hairline--bottom">
          <span class="nav-bar-text">句读</span>
          <van-icon size="1.3em" name="chat-o" info="9" @click="comment" />
          <van-icon
            size="1.3em"
            name="like-o"
            :info="info"
            @click="handleInfo"
          />
          <van-icon size="1.3em" name="upgrade" @click="share" />
        </div>
      </van-col>
    </van-row>
    <van-pull-refresh
      class="home"
      success-text="加载成功"
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <van-row>
        <van-col span="24" class="hitokotoImage">
          <van-image
            width="100%"
            fit="contain"
            lazy-load
            src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture"
          >
            <template v-slot:loading>
              <van-loading type="spinner" vertical size="20" />
            </template>
          </van-image>
        </van-col>
        <van-col span="24" class="sentence van-hairline--surround">
          <span class="hitokoto-text" v-model="hitokotoO.sentonce">{{
            hitokotoO.sentonce
          }}</span>
          <span class="hitokoto-from" v-model="hitokotoO.author">{{
            hitokotoO.author
          }}</span>
        </van-col>
      </van-row>
    </van-pull-refresh>
    <van-popup class="popup" position="bottom" v-model="showShare">
      <van-image
        width="50"
        fit="contain"
        lazy-load
        src="https://b-ssl.duitang.com/uploads/item/201608/21/20160821230024_MyCYK.thumb.700_0.jpeg"
      >
        <van-loading type="spinner" size="20" />
      </van-image>
    </van-popup>
    <!-- 弹出popup -->
    <van-popup
      class="comment"
      v-model="commentshow"
      overlay
      position="right"
      :overlay="true"
    >
      <van-button plain type="primary" size="small" @click="comment"
        >关闭</van-button
      >
      <van-row class="titlePopup">
        <van-col span="24">
          <van-nav-bar title="频道定制"></van-nav-bar>
        </van-col>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
import { Hitokoto, randomImage } from '../../api/api'
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      info: 9,
      hitikotoLoading: false,
      commentshow: false,
      showShare: false,
      sentonceType: '',
      isLoading: false,
      hitokotoO: {
        sentonce: '',
        author: ''
      }
    }
  },
  computed: {
    hitokoto() {
      let hito = this.$store.state.hitokoto
      return hito[hito.length - 1]
    }
  },
  mounted() {
    this.getSentonce()
  },
  methods: {
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.getSentonce()
        this.isLoading = false
      }, 1000)
    },
    getSentonce() {
      this.hitokotoO = {}
      let param = {
        type: this.sentonceType
      }
      this.$store.dispatch('getSentonce', param)

      this.hitokotoO.sentonce = this.hitokoto.hitokoto
      this.hitokotoO.author = this.hitokoto.from
    },
    getImage() {
      randomImage().then(data => {
        console.log(data)
      })
    },
    share() {
      this.showShare = true
    },
    comment() {
      this.commentshow = !this.commentshow
    },
    handleInfo() {
      this.info++
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  height: 10vh;
}
.comment {
  width: 100vw;
  height: 100vh;
}
.discover {
  font-size: 14px;
  .home {
    width: 100%;
    .sentence {
      width: 100%;
      margin: 75px auto;
      // background-color: rgb(233, 233, 241);
      border-radius: 50px;
      display: inline-block;
      .hitokotoImage {
        max-height: 40%;
      }
      .hitokoto-text {
        width: 80%;
        display: block;
        margin: 30px auto;
      }
      .hitokoto-from {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: right;
        justify-content: right;
        margin: 20px 30px;
      }
    }
  }
}
</style>
