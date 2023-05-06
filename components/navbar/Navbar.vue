<template>
    <nav class="navbar navbar-expand sticky-top bg-opacity-50 py-0">
        <div class="container-lg">
            <NavbarImazineTitle />
            <ul class="navbar-nav" v-if="data.isLoggedIn">
                <NavbarUserNavs />
            </ul>
            <ul class="navbar-nav" v-else>
                <NavbarGuestNavs />
            </ul>
        </div>
    </nav>
</template>

<script setup>
const { data } = await useFetch('/api/session')
</script>

<style lang="scss" scoped>
nav {
    background-color: #FFFFFF;
}
</style>