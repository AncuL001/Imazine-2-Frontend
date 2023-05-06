<template>
        <li class="nav-item dropdown my-auto" v-if="data.user.is_admin || false">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><NuxtLink class="dropdown-item" to="/admin/manage-users">Manage Users</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/admin/manage-categories">Manage Categories</NuxtLink></li>
            </ul>
        </li>
        <li class="nav-item dropdown  my-auto" v-if="data.user.has_article_edit_access.length > 0 || false">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Creator
            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><NuxtLink class="dropdown-item" to="/creator/articles">Manage Articles</NuxtLink></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="profile-picture" :src="`${data.user.profile_picture_link}`" />

            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><span @click="logout" class="dropdown-item">Logout</span></li>
            </ul>
        </li>
</template>

<script setup>
async function logout(event) {
    const res = await $fetch('/api/logout', { method: 'POST'});
    window.location.reload()
}
const { data } = await useFetch('/api/session')
</script>

<style lang="scss" scoped>
.navbar-nav {
    align-items: center;
  justify-content: center;
}
img {
    border-radius: 50%;
    width: 25px;
}
</style>