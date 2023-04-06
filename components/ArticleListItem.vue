<template>
    <div class="px-4 py-0">
        <NuxtLink class="article-list-item p-4 row align-items-center gx-5" to="#">
                <div class="rectangle col-auto"></div>
                <div class="col">
                    <div class="row-auto">
                        <span class="category-label-list text-primary">Category</span>
                    </div>
                    <h2 class="row-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </h2>
                </div>
        </NuxtLink>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
* {
    background-color: transparent;
}

.article-list-item {
    border-radius: 24px;

    .rectangle{
        background-color: #D9D9D9;
        width: 212px;
        height: 142px;
        border-radius: 16px;
    }
    * {
        background-color: transparent;
    }

    col {
        text-decoration: none;

    }
    &:hover {
        background-color: #F5F5F5;
    }
}



</style>