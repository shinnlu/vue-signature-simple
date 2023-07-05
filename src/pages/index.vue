<template>
  <div class="home">
    <div class="container">
      <div class="section-1">
        <h2 class="title">Vue-Signature-Simple</h2>
        <p class="sub-title">A electronic signature component by Vue.js</p>
        <div class="row">
          <div class="col">
            <vue-signature
              ref="s1"
              :width="width"
              :height="height"
              :stroke-size="strokeSize"
              :stroke-color="strokeColor" />
            <ul class="colors">
              <li
                class="color"
                :style="{ background: item }"
                @click="changeColor(item)"
                v-for="item in colors"
                :key="item"
                :class="{ active: strokeColor === item }"></li>
            </ul>
            <input type="text" v-model="strokeColor" class="input">
          </div>
          <div class="col">
            <img :src="signature" alt="signature" v-if="signature" class="signature">
            <div class="signature" :style="{ width: (parseInt(width) + 2) + 'px', height: (parseInt(height) + 2) + 'px' }" v-else></div>
            <p style="margin-top: 5px;">Signature Image (base64)</p>
          </div>
        </div>
        <div class="btn">
          <button @click="deleteImg">Clear</button>
          <button @click="isEmpty">Pad is empty?</button>
          <button @click="getSignature">Get signature</button>
          <button @click="getID">Get ID</button>
          <button @click="chooseFile">Upload Picture</button>
          <button @click="lockPad(true)" v-if="!LockSignature1">Lock Pad</button>
          <button @click="lockPad(false)" v-else>UnLock Pad</button>
          <input id="imageUploader1" type="file" style="visibility:hidden;" @change="onFileChange" accept="image/jpeg,image/png" />
        </div>
        <div class="row">
          <div class="col">
            <vue-signature
              ref="s2"
              :width="width"
              :height="height"
              :stroke-size="strokeSize"
              :stroke-color="strokeColor" />
            <ul class="colors">
              <li
                class="color"
                :style="{ background: item }"
                @click="changeColor(item)"
                v-for="item in colors"
                :key="item"
                :class="{ active: strokeColor === item }"></li>
            </ul>
            <input type="text" v-model="strokeColor" class="input">
          </div>
          <div class="col">
            <img :src="signature2" alt="signature" v-if="signature2" class="signature">
            <div class="signature" :style="{ width: (parseInt(width) + 2) + 'px', height: (parseInt(height) + 2) + 'px' }" v-else></div>
            <p style="margin-top: 5px;">Signature Image (base64)</p>
          </div>
        </div>
        <div class="btn">
          <button @click="deleteImg2">Clear</button>
          <button @click="isEmpty2">Pad is empty?</button>
          <button @click="getSignature2">Get signature</button>
          <button @click="getID2">Get ID</button>
        </div>
      </div>

      <div class="section-2">
        <h3>Install</h3>
        <div class="content">
          <pre class="code">npm install vue-signature-simple</pre>
        </div>
        <h3>Usage</h3>
        <div class="content">
          <h4>main.js</h4>
          <pre class="code">
<span class="keyword">import</span> VueSignature <span class="keyword">from</span> <span class="string">'vue-signature-simple'</span>;
Vue.use(VueSignature);
</pre>
<h4 style="margin-top: 1em;">Attributes example</h4>
<pre>
<span class="tag">&lt;vue-signature ref=</span><span class="string">"s1"</span><span class="tag"> width=</span><span class="string">"400"</span><span class="tag"> /&gt;</span>
<span class="tag">&lt;vue-signature ref=</span><span class="string">"s2"</span><span class="tag"> /&gt;</span>
</pre>
<p class="help">The ref attribute can distinguish multiple signature components</p>
          <h4 style="margin-top: 1em;">Methods example</h4>
<pre><span class="keyword">this</span>.$refs.s1.clear()</pre>
        </div>

        <h3>Demo</h3>
        <div class="content">
          <a href="https://draw.zhangziheng.com" target="_blank">随手画</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  .row {
    display: flex;
    overflow: hidden;
    padding: 30px;
  }
  .col {
    flex: 1;
  }
  .input {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 5px;
  }
}
</style>
<script>
import VueSignature from '../../index'
export default {
  name: 'App',
  components: {
    VueSignature
  },
  data () {
    return {
      signature: '',
      LockSignature1: false,
      signature2: '',
      strokeColor: '#4b5cc4',
      strokeSize: 2,
      width: 400,
      height: 150,
      colors: ['#161823', '#3b2e7e', '#4b5cc4', '#4c8dae', '#c3272b', '#FF7F00', '#eacd76', '#40de5a', '#fafafa']
    }
  },
  methods: {
    getSignature () {
      this.signature = this.$refs.s1.getSignature()
    },
    deleteImg () {
      this.$refs.s1.clear()
      this.signature = ''
    },
    isEmpty () {
      if (this.$refs.s1.isEmpty()) {
        alert('内容为空')
      } else {
        alert('已有签名内容')
      }
    },
    changeColor (color) {
      this.strokeColor = color
    },
    getID () {
      alert(this.$refs.s1.getID())
    },
    chooseFile () {
      const fileInputElement = document.getElementById('imageUploader1')
      fileInputElement.click()
    },
    onFileChange (e) {
      if (e.target.files.length === 0) return false
      this.$refs.s1.loadFromPicture(e.target.files[0])
    },
    lockPad (value) {
      this.LockSignature1 = value
      this.$refs.s1.lockPad(value)
    },
    getSignature2 () {
      this.signature2 = this.$refs.s2.getSignature()
    },
    deleteImg2 () {
      this.$refs.s2.clear()
      this.signature2 = ''
    },
    isEmpty2 () {
      if (this.$refs.s2.isEmpty()) {
        alert('内容为空')
      } else {
        alert('已有签名内容')
      }
    },
    changeColor2 (color) {
      this.strokeColor = color
    },
    getID2 () {
      alert(this.$refs.s2.getID())
    }
  }
}
</script>
