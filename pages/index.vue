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
const categories = [
  { id: 1, name: 'category1' },
  { id: 2, name: 'category2' },
]

const { data } = await useFetch('/api/session')

const articles = [
  {
    id: 1,
    category: { id: 1, name: 'category1' },
    coverUrl: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg',
    title: 'uwu uwu uwu',
    created_at: '2023-05-06T00:35:45.238Z'
  },
  {
    id: 1,
    category: { id: 1, name: 'category2' },
    coverUrl: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg',
    title: 'uwu uwu uwu',
    created_at: '2023-05-06T00:35:45.238Z' 
  }
]
</script>

<style lang="scss" scoped>
.category-card {
  width: 200px;
}
</style>