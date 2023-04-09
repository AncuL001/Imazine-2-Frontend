<template>
    <div class="row align-items-start">
        <div class="category-card">
            <div class="content-container p-4">
                <div class="d-flex">
                    <h2 class="me-2">Kategori</h2>
                    <NuxtLink to="##" class="category-control bi-plus-lg">
                    </NuxtLink>
                </div>
                <div v-for="category in categories">
                    <NuxtLink :to="`#${category.id}`" class="category-label d-flex gx-5">
                        <div class="me-1">{{ category.name }}</div>
                        <NuxtLink :to="`#${category.id}`" class="category-control bi-pencil-fill">
                        </NuxtLink>
                        <NuxtLink :to="`#${category.id}`" class="category-control bi-trash-fill">
                        </NuxtLink>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="content-container p-4 mb-4">
                <h2>
                    Tambahkan akses edit artikel pada kategori Lorem Ipsum
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
                    User dengan akses edit artikel pada kategori Lorem Ipsum
                </h2>
                <div v-for="user in articleAccessUsers">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div class="row m-0">
                            <div class="circle my-auto"></div>
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
const categories  = [
    { id: 1, name: 'category1' },
    { id: 2, name: 'category2' },
    { id: 3, name: 'category3' },
    { id: 4, name: 'category4' },
]

const articleAccessUsers = [
    { id: 1, name: 'Fauzan Azmi Dwicahyo', npm: '140810200030' },
    { id: 2, name: 'Fauzan Azmi Dwicahyo', npm: '140810200031' },
    { id: 3, name: 'Fauzan Azmi Dwicahyo', npm: '140810200032' },
    { id: 4, name: 'Fauzan Azmi Dwicahyo', npm: '140810200033' },
]
</script>

<style lang="scss" scoped>
.circle {
    background-color: #D9D9D9;
    border-radius: 50%;
    width: 30px;
    height: 30px;
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
</style>