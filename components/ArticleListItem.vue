<template>
    <NuxtLink class="article-list-item p-4 m-0 row align-items-center gx-5" to="/articles/1">
            <div class="rectangle col-auto"></div>
            <div class="col pe-0">
                <div class="mb-1 d-flex">
                    <span class="category-label text-primary">Category</span>
                    <div class="vr mx-2"></div>
                    <span>3 hari yang lalu</span>
                </div>
                <h2 class="row-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
            </div>
    </NuxtLink>
</template>

<script>

</script>

<style lang="scss" scoped>
.article-list-item {
    border-radius: 24px;
    text-decoration: none;

    .rectangle{
        background-color: #D9D9D9;
        width: 212px;
        height: 142px;
        border-radius: 16px;
    }

    &:hover {
        background-color: #F5F5F5;
    }
}
</style>