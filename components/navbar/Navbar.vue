<template>
    <nav class="navbar navbar-expand sticky-top bg-opacity-50 py-0">
        <div class="container-lg">
            <NavbarImazineTitle />
            <span v-if="auth.isLoggedIn">
                <NavbarUserNavs />
            </span>
            <span v-else>
                <NavbarGuestNavs />
            </span>
        </div>
    </nav>
</template>

<script setup>
const auth = useAuth()
</script>

<style lang="scss" scoped>
nav {
    background-color: #FFFFFF;
}
</style>