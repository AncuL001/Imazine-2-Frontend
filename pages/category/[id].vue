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

const auth = useAuth()
const { user, apiKey } = storeToRefs(auth)

const {data: articles} = await useFetch('/articles?category=' + id, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey.value}`
  },
  baseURL: 'https://21337.live.reon.my.id/'
})

const {data: categories} = await useFetch('/categories', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey.value}`
  },
  baseURL: 'https://21337.live.reon.my.id/'
})

const currentCategory = categories.value.find(category => category.id == id)
</script>

<style lang="scss" scoped>
.category-card {
  width: 200px;
}
</style>