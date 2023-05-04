<template>
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><NuxtLink class="dropdown-item" to="/admin/manage-users">Manage Users</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/admin/manage-categories">Manage Categories</NuxtLink></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Creator
            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><NuxtLink class="dropdown-item" to="/creator/manage-articles">Manage Articles</NuxtLink></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="profile-picture" src="~/assets/placeholder_profile_pic.jpg" />

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
</script>

<style lang="scss" scoped>
.navbar-nav {
    align-items: center;
  justify-content: center;
}
img {
    border-radius: 50%;
    width: 30px;
}
</style>