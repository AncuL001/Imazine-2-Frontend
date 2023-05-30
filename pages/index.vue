<template>
  <div v-if="isLoggedIn" class="row align-items-start gx-4">
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
  <div v-if="!isLoggedIn">
    <div class="content-container p-5">
      <h1 style="text-align: center;">
          Silakan masuk untuk melihat konten
      </h1>
    </div>
  </div>
</template>

<script setup>
const auth = useAuth()
const { isLoggedIn, apiKey } = storeToRefs(auth)

const { data: articles } = await useAsyncData(
  'articles',
  () => $fetch('/articles', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey.value}`
      },
      baseURL: 'https://21337.live.reon.my.id/'
    }),
    {
      watch: apiKey
    }
)

const { data: categories } = await useAsyncData(
  'categories',
  () => $fetch('/categories', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey.value}`
      },
      baseURL: 'https://21337.live.reon.my.id/'
    }),
    {
      watch: apiKey
    }
)

</script>

<style lang="scss" scoped>
.category-card {
  width: 200px;
}
</style>