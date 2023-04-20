<template>
    <div class="content-container p-5">
        <div class="mx-auto mb-4 rectangle-wrapper">
            <div class="rectangle"></div>
        </div>
        <h1 class="text-center mb-3">
            {{ article.title }}
        </h1>
        <div class="mb-5 text-center">
            <div class="d-inline-flex">
                <NuxtLink to="/" class="category-label text-primary">
                    {{ article.category.name }}
                </NuxtLink>
                <div class="vr mx-2"></div>
                <span class="text-start">
                    3 hari yang lalu oleh 
                    <span class="fw-bold">{{ article.author.name }}</span>
                </span>
            </div>
        </div>
        <article v-html="convertedContent">
        </article>
    </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it';

const article = {
    coverUrl: '',
    title: 'Lorem ipsum dolor sit amet',
    category: {
        id: 1,
        name: 'category'
    },
    author: {
        id: 1,
        name: 'Author Author Author',
        npm: '140810200030'
    },
    createdAt: '',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Iaculis at erat pellentesque adipiscing commodo elit at. Turpis massa tincidunt dui ut. Sed arcu non odio euismod lacinia at. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. A scelerisque purus semper eget. Risus pretium quam vulputate dignissim suspendisse in est.\n\n## Lorem Ipsum\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Iaculis at erat pellentesque adipiscing commodo elit at. Turpis massa tincidunt dui ut. Sed arcu non odio euismod lacinia at. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. A scelerisque purus semper eget. Risus pretium quam vulputate dignissim suspendisse in est.\n\nCommodo nulla facilisi nullam vehicula ipsum a arcu. Tellus id interdum velit laoreet id. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Eget dolor morbi non arcu risus quis varius quam. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Vestibulum sed arcu non odio. Vitae sapien pellentesque habitant morbi. Cursus vitae congue mauris rhoncus aenean vel. Sit amet risus nullam eget felis eget. Libero volutpat sed cras ornare arcu dui vivamus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc."
}

const md = new MarkdownIt;
const convertedContent = md.render(article.content)
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
</style>