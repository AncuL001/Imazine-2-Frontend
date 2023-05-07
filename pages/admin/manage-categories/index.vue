<template>
    <div class="row align-items-start">
        <div class="category-card">
            <div class="content-container p-4">
                <div class="d-flex">
                    <h2 class="me-2">Kategori</h2>
                    <div class="dropend">
                        <span class="btn-icon bi-plus-lg" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="-16,6"></span>
                        <div class="dropdown-menu p-2" style="min-width: 300px;">
                            <div class="form-group d-flex gap-2">
                                <input type="text" class="form-control" id="newCategoryForm" placeholder="Kategori baru...">
                                <button type="button" class="bi-plus-lg btn btn-primary text-white p-2"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="category in categories" :id="category.id">
                    <NuxtLink @click="currentCategoryId.value = category.id" class="category-label d-flex gx-5">
                        <div class="me-1">{{ category.name }}</div>
                        <div class="dropend">
                            <span class="category-control bi-pencil-fill" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="-16,6"></span>
                            <div class="dropdown-menu p-2" style="min-width: 300px;">
                                <div class="form-group d-flex gap-2">
                                    <input type="text" class="form-control" id="dropdownFormNpm" placeholder="Nama baru..." :value="category.name">
                                    <button type="button" class="bi-pencil-fill btn btn-primary text-white p-2"></button>
                                </div>
                            </div>
                        </div>
                        <NuxtLink :to="`#${category.id}`" class="category-control bi-trash-fill">
                        </NuxtLink>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="content-container p-4 mb-4">
                <h2>
                    Tambahkan akses edit artikel pada kategori {{ currentCategory.name }}
                </h2>
                <div class="input-group py-3 px-2">
                    <span class="input-group-text">
                        <div class="bi-search"></div>
                    </span>
                    <input class="form-control" list="newUserOptions" placeholder="Cari user...">
                    <datalist id="newUserOptions">
                        <option value="140810200030">140810200030 Fauzan Azmi Dwicahyo</option>
                        <option value="140810200030">140810200030 Fauzan Azmi Dwicahyo</option>
                        <option value="140810200030">140810200030 Fauzan Azmi Dwicahyo</option>
                        <option value="140810200030">140810200030 Fauzan Azmi Dwicahyo</option>
                    </datalist>
                </div>
            </div>
            <div class="content-container p-4">
                <h2>
                    User dengan akses edit artikel pada kategori {{ currentCategory.name }}
                </h2>
                <div v-for="user in articleAccessUsers">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div class="row m-0">
                            <img class="circle my-auto" :src="user.profile_picture_link">
                            <div class="col lh-sm">
                                <div>{{ user.name }}</div>
                                <div class="fw-light">{{ user.npm }}</div>
                            </div>
                        </div>
                        <NuxtLink :to="`#${user.id}`" class="bi-x text-danger" style="font-size: 1.5em;"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const currentCategoryId = ref(1);

const categories  = [
    { id: 1, name: 'category1' },
    { id: 2, name: 'category2' },
    { id: 3, name: 'category3' },
    { id: 4, name: 'category4' },
]

const currentCategory = categories.find(category => category.id == currentCategoryId.value)

const articleAccessUsers = [
    { id: 1, name: 'Fauzan Azmi Dwicahyo', npm: '140810200030', profile_picture_link: 'https://a.ppy.sh/2449200?1624766977.jpeg' },
    { id: 2, name: 'Fauzan Azmi Dwicahyo', npm: '140810200031', profile_picture_link: 'https://a.ppy.sh/2449200?1624766977.jpeg' },
    { id: 3, name: 'Fauzan Azmi Dwicahyo', npm: '140810200032', profile_picture_link: 'https://a.ppy.sh/2449200?1624766977.jpeg' },
    { id: 4, name: 'Fauzan Azmi Dwicahyo', npm: '140810200033', profile_picture_link: 'https://a.ppy.sh/2449200?1624766977.jpeg' },
]
</script>

<style lang="scss" scoped>
.circle {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: object-fit;
    padding: 0;
}
.category-card {
  width: 300px;
}

.category-label { 
    .category-control {
        visibility: hidden;
    } 
    &:hover .category-control { 
        visibility: visible; 
    }
}

.btn-icon {
    &:hover {
        cursor: pointer;
    }
}
</style>