<template>
    <div class="content-container p-5">
        <div class="mx-auto mb-4 rectangle-wrapper">
            <div class="rectangle"></div>
        </div>
        <h1 class="text-center mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <div class="mb-5 text-center">
            <div class="d-inline-flex">
                <NuxtLink to="/" class="category-label text-primary">
                    Category
                </NuxtLink>
                <div class="vr mx-2"></div>
                <span class="text-start">
                    3 hari yang lalu oleh 
                    <span class="fw-bold">Fauzan Azmi Dwicahyo</span>
                </span>
            </div>
        </div>
        <article>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Iaculis at erat pellentesque adipiscing commodo elit at. Turpis massa tincidunt dui ut. Sed arcu non odio euismod lacinia at. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. A scelerisque purus semper eget. Risus pretium quam vulputate dignissim suspendisse in est.
            </p>
            <h2>
                Lorem Ipsum
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Iaculis at erat pellentesque adipiscing commodo elit at. Turpis massa tincidunt dui ut. Sed arcu non odio euismod lacinia at. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. A scelerisque purus semper eget. Risus pretium quam vulputate dignissim suspendisse in est.
            </p>
            <p>
                Commodo nulla facilisi nullam vehicula ipsum a arcu. Tellus id interdum velit laoreet id. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Eget dolor morbi non arcu risus quis varius quam. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Vestibulum sed arcu non odio. Vitae sapien pellentesque habitant morbi. Cursus vitae congue mauris rhoncus aenean vel. Sit amet risus nullam eget felis eget. Libero volutpat sed cras ornare arcu dui vivamus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc.
            </p>
        </article>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.rectangle-wrapper {
    box-sizing: border-box;
    max-width: 85%;
    .rectangle{
        background-color: #D9D9D9;
        width: 100%;
        padding-bottom: 56.25%;
        border-radius: 16px;
    }
}
article {
    line-height: 1.75em;

    h1, h2, h3, h4, h5, h6 {
        margin-top: 1.5em;
        margin-bottom: 0.75em;
    }
}
</style>