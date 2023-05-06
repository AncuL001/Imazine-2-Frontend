<template>
  <div class="row align-items-start gx-4">
    <div class="col">
      <div class="content-container p-5">
        <h1 class="pb-4">
            {{ currentCategory.name }}
        </h1>
        <ArticleListCard :article-item="article" v-for="article in articles" :key="article.id" />
      </div>
    </div>
    <HomePageCategorySidebar :categories="categories"/>
  </div>
</template>

<script setup>
const { id } = useRoute().params

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
    category: { id: 2, name: 'category2' },
    coverUrl: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_960_720.jpg',
    title: 'uwu uwu uwu',
    created_at: '2023-05-06T00:35:45.238Z' 
  }
]

const categories = [
  { id: 1, name: 'category1' },
  { id: 2, name: 'category2' },
]

const currentCategory = categories.find(category => category.id == id)

</script>

<style lang="scss" scoped>
.category-card {
  width: 200px;
}
</style>