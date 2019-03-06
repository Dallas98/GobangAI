<template>
  <div class="hello">
    <h1>{{$t('settings')}}</h1>

    <div class="weui-cells__title">{{$t('settings')}}</div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('search deep')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="deep" :value="deep" @change="setDeep">
            <option v-for="d in deepList" :key="d.value" :value="d.value">{{$t(d.title)}} ({{d.value}}~{{d.value+2}})</option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('step spread')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-switch" type="checkbox" style="float:right" :checked="spread" @input="setSpread">
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('lang')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="lang" :value="lang" @change="setLang">
            <option value="en">简体中文</option>
            <option value="zh">English</option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('show steps')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-switch" type="checkbox" style="float:right" :checked="showSteps" @input="setShowSteps">
        </div>
      </div>
    </div>
    <div class="weui-footer">
      <p class="weui-footer__links">
        <a href="" target="_blank" class="weui-footer__link">终极五子棋</a>
        <a href="javascript:void(0);" class="weui-footer__link">@第二小组</a>
      </p>
      <p class="weui-footer__text">Copyright © 阳鹏 闵瑞 柳静楠 </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { SET_DEEP, SET_LANG, SET_SHOW_STEPS, SET_SPREAD } from '@/store/mutations.js'
import i18n from '../i18n/index.js'

export default {
  name: 'Settings',
  components: {
  },
  computed: {
    ...mapState({
      version: 'version',
      lang: state => state.home.lang,
      deep: state => state.home.deep,
      deepList: state => state.home.deepList,
      showSteps: state => state.home.showSteps,
      spread: state => state.home.spread
    })
  },
  methods: {
    setDeep (e) {
      let value = e.target.value
      this.$store.dispatch(SET_DEEP, parseInt(value))
    },
    setLang (e) {
      let value = e.target.value
      this.$store.dispatch(SET_LANG, value)
      i18n.locale = value
    },
    setShowSteps (e) {
      let value = e.target.checked
      this.$store.dispatch(SET_SHOW_STEPS, value)
    },
    setSpread (e) {
      let value = e.target.checked
      this.$store.dispatch(SET_SPREAD, value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../variables';
h1 {
  font-size: 28px;
  color: $primary-color;
  text-align: center;
}

.operations {
  .weui-btn {
    margin: 5px;
    height: 46px;
  }
}

.weui-footer {
  margin-top: 32px;
}
</style>
