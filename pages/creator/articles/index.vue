<template>
    <div class="row align-items-start" style="height: 90vh;">
        <div class="category-card">
            <div class="content-container p-4">
                <h2 class="me-2">Kategori</h2>
                <div v-for="category in categories">
                    <NuxtLink :to="`#${category.id}`" class="category-label d-flex gx-5">
                        <div class="me-1">{{ category.name }}</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="col" style="height: 100%">
            <div class="content-container p-4 overflow-y-hidden" style="height: 100%">
                <div class="d-flex justify-content-between mb-3">
                    <h2 class="my-auto">
                        Daftar Artikel
                    </h2>
                    <NuxtLink :to="`/creator/articles/new?category-id=${currentCategory.id}`" class="btn btn-primary btn-sm text-white">
                        <span class="bi-plus-lg me-1"></span>Artikel</NuxtLink>
                </div>
                <input class="form-control mb-3" list="newUserOptions" placeholder="Cari artikel...">

                <div class="overflow-y-auto" style="height: 87%">
                    <div v-for="article in articles">
                        <ArticleListItem :article="article"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const categories  = [
    { id: 1, name: 'category1' },
    { id: 2, name: 'category2' },
    { id: 3, name: 'category3' },
    { id: 4, name: 'category4' },
]

const currentCategory =
    { id: 1, name: 'category1' }

const articles = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },    {
        id: 1,
        title: 'End',
        category: {
            id: 1,
            name: 'category'
        },
        author: {
            id: 1,
            name: 'Author Author Author',
            npm: '140810200030'
        },
        created_at: '2023-05-06T00:35:45.238Z',
    },
]
</script>

<style lang="scss" scoped>
.category-card {
  width: 300px;
}
</style>