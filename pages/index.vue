<template>
  <div v-if="isLoggedIn" class="row align-items-start gx-4">
    <div class="col">
      <div class="content-container p-5">
        <h1 class="pb-4">
            Berita Terbaru
        </h1>
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
      </div>
    </div>
    <div class="category-card">
      <div class="content-container p-4">
        <h2>Kategori</h2>
        <NuxtLink to="#" class="category-label d-block">Category</NuxtLink>
        <NuxtLink to="#" class="category-label d-block">Category</NuxtLink>
        <NuxtLink to="#" class="category-label d-block">Category</NuxtLink>
        <NuxtLink to="#" class="category-label d-block">Category</NuxtLink>
      </div>
    </div>
  </div>
  <!-- using else will cause the category sidebar above to disappear (somehow) -->
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
const isLoggedIn = auth.isLoggedIn
</script>

<style lang="scss" scoped>
.category-card {
  width: 200px;
}
</style>