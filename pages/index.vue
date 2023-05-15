<template>
  <div v-if="data.isLoggedIn" class="row align-items-start gx-4">
    <div class="col">
      <div class="content-container p-5">
        <h1 class="pb-4">
            Berita Terbaru
        </h1>
        <ArticleListCard :article-item="article" v-for="article in articles" :key="article.id" />
      </div>
    </div>
    <HomePageCategorySidebar :categories="categories"/>
  </div>
  <!-- using v-else will cause the category sidebar above to disappear (somehow) -->
  <div v-if="!data.isLoggedIn">
    <div class="content-container p-5">
      <h1 style="text-align: center;">
          Silakan masuk untuk melihat konten
      </h1>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/session')
const apiKey = data.value.apiKey
var articles;
var categories;

if (data.value.isLoggedIn){
  const {data: articlesData} = await useFetch('/articles', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      baseURL: 'http://127.0.0.1:8080'
    })

    articles = articlesData

    const {data: categoriesData} = await useFetch('/categories', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      baseURL: 'http://127.0.0.1:8080'
    })

    categories = categoriesData
}
</script>

<style lang="scss" scoped>
.category-card {
  width: 200px;
}
</style>