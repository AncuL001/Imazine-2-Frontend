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
                    <NuxtLink class="btn btn-primary btn-sm text-white">
                        <span class="bi-plus-lg me-1"></span> Artikel</NuxtLink>
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
]

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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
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
        createdAt: '12 April 2023',
    },
]
</script>

<style lang="scss" scoped>
.category-card {
  width: 300px;
}
</style>