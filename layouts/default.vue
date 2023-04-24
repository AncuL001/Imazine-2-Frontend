<template>
    <Navbar/>
    <div class="container-lg py-4">
        <slot/>
    </div>
</template>

<script setup>
const n = await $fetch('/api/login', { method: 'post', body: { test: 123 } })
console.log(n)
</script>

<style scoped>
.body {
    background-color: #F2F2F2;
}
</style>