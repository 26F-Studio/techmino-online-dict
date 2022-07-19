<script lang="ts" setup>
import axios from "axios";
import {computed, ref} from "vue";
import {each, filter, map, remove, union} from "lodash-es";

type Dict = [title: string, keywords: string, type: string, content: string, url?: string]

const items = ref();
const search = ref();
const currentItem = ref<Dict>();

axios.get("/src/language/dict_zh.json")
    .then(response => {
      items.value = response.data;
    });

const trees = computed(() => {
  const result: Record<string, Dict[]> = {};

  const types = union(
      map(items.value, '2')
  );

  types.forEach(type => {
    result[type] = filter(items.value, item => type === item[2]);
  });

  if (search.value) {
    each(result, (items, type) => {
      remove(result[type], item => {
        return !item[0].match(search.value) && !item[1].match(search.value);
      });
    });
  }

  return result;
});
</script>

<template>
  <h1 class="title">Techmino 在线词典</h1>

  <div class="container">
    <input v-model="search" class="search-input" placeholder="搜点什么"/>

    <div class="dict">
      <div class="tree">
        <div v-for="(items, type) in trees" class="row">
          <span class="title">
            {{ type }}
          </span>

          <span v-for="item in items" class="item" @click="currentItem = item">
            {{ item[0] }}
          </span>
        </div>
      </div>

      <div v-if="currentItem" class="viewer">
        <span class="title">{{ currentItem[0] }}</span>
        <span class="content">{{ currentItem[3] }}</span>

        <div class="extra">
          <span v-if="currentItem[2]">
            分类: {{ currentItem[2] }}
          </span>

          <span v-if="currentItem[1]" class="keywords">
            关键词: <a v-for="keyword in currentItem[1].split(' ')" class="link" href="javascript:"
                    @click="search = keyword">{{ keyword }}</a>
          </span>

          <span v-if="currentItem[4]">
            神秘链接: <a :href="currentItem[4]" class="link">{{ currentItem[4] }}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #111;
}
</style>

<style scoped>
.title {
  text-align: center;
  margin-top: 50px;
  color: white
}

.container {
  width: 50%;
  margin: 50px auto;
  text-align: center
}

.container .search-input {
  width: 50%;
  padding: 10px 0;
  border-radius: 2px;
  opacity: 0.5;
  transition: opacity 0.5s;
  text-align: center;
  border: none;
  outline: none;
}

.container .search-input:hover {
  opacity: 0.8;
}

.container .dict {
  display: flex;
  color: white;
  margin: 20px;
}

.container .dict .tree {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.container .dict .title {
  display: inline-block;
  font-size: 1.2rem;
  color: #aaa;
  margin: 5px 0;
}

.container .dict .item {
  display: block;
  transition: all 0.5s;
}

.container .dict .item:hover {
  cursor: pointer;
  color: #ccc;
  margin-left: 5px;
}

.container .dict .viewer {
  text-align: left;
  width: 100%;
  padding: 25px;
}

.container .dict .viewer span {
  display: block;
}

.container .dict .viewer .title {
  text-align: left;
  color: white;
}

.container .dict .viewer .content {
  margin: 10px 0;
}

.container .dict .viewer .link {
  text-decoration: none;
  color: skyblue;
  transition: opacity 0.5s;
}

.container .dict .viewer .link:hover {
  opacity: 0.75;
}

.container .dict .viewer .extra .keywords .link {
  margin: 0 5px;
}
</style>
