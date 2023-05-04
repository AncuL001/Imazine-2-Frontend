<template>
    <div class="category-card">
        <div class="content-container p-4">
            <h2>Kategori</h2>
            <div v-for="category in categories" :key="category.id">
                <NuxtLink :to="`/category/${category.id}`" class="category-label d-block">{{ category.name }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { categories } = defineProps(['categories'])
</script>