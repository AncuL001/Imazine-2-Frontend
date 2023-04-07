<template>
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><NuxtLink class="dropdown-item" to="#">Manage Users</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="#">Manage Categories</NuxtLink></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Creator
            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><NuxtLink class="dropdown-item" to="#">Manage Articles</NuxtLink></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="profile-picture" src="~/assets/placeholder_profile_pic.jpg" />

            </span>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><NuxtLink class="dropdown-item" to="#">Logout</NuxtLink></li>
            </ul>
        </li>
    </ul>
</template>

<script setup>

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