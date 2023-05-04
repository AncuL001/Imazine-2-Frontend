<template>
        <li class="nav-item">
            <span @click="login" class="nav-link" role="button" aria-expanded="false">
                Login
            </span>
        </li>
</template>

<script setup>
async function login(event) {
    const res = await $fetch('/api/login', { method: 'POST'});
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