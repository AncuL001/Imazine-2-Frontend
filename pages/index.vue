<template>
<div class="container py-4">
  <div class="row align-items-start gx-4">
    <div class="col">
      <div class="content-container p-5">
        <h1 class="pb-4">
            Berita Terbaru
        </h1>
        <ArticleListItem />
        <ArticleListItem />
        <ArticleListItem />
        <ArticleListItem />
    </div>
    </div>
    <div class="col-2">
      <div class="content-container p-4">
        <h2>Kategori</h2>
        <NuxtLink to="#" class="category-label-list">Category</NuxtLink>
        <NuxtLink to="#" class="category-label-list">Category</NuxtLink>
        <NuxtLink to="#" class="category-label-list">Category</NuxtLink>
        <NuxtLink to="#" class="category-label-list">Category</NuxtLink>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content-container {
    border-radius: 24px;
    background-color: white;
    * {
        background-color: transparent;
    }
}
</style>