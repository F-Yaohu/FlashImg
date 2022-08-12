<template>
  <el-row :gutter="10" v-infinite-scroll="load"  style="overflow: auto">
    <el-col v-for="arr in imgArr" :key="arr"
            :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <el-image v-for="(i,index) in arr" :key="i" class="grid-content ep-bg-purple"
                :src="i"
                :preview-src-list="arr"
                :initial-index="index"
                fit="cover" lazy />
    </el-col>
  </el-row>
</template>

<script>

import axios from "axios";
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
      /* eslint-disable */
      const imgArr = ref([]);

      return {imgArr};
  },
  methods:{
    load(){
        axios.get("/api/setu/4").then((res)=>{
          res.data.forEach((value,index,arr)=>{
              arr[index]="https://pic.wswmbot.tk"+value.cover;
          })
          // this.imgArr = this.imgArr.concat(res.data);
          this.imgArr.push(res.data);
        })
    }
  },
  created() {
    this.load();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.infinite-list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
