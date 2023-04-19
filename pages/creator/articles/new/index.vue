<template>
        <div class="content-container p-4">
            <h2 class="mb-3">Artikel Baru</h2>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control">
                </div>
                <div class="col-auto">
                    <select class="form-select" aria-label="Default select example">
                        <option v-for="category in categories" :value="`${category.id}`" :selected="category.id == currentCategoryId">{{ category.name }}</option>
                    </select>
                </div>
            </div>
        </div>
</template>

<script setup>

const categories = [
    { id: 1, name: 'category1' },
    { id: 2, name: 'category2' },
]

const route = useRoute()
const currentCategoryId = route.query['category-id']
</script>

<style lang="scss" scoped>

</style>