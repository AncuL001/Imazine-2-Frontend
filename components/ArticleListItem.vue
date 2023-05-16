<template>
    <div class="row mx-0 article-list-item overflow-hidden mb-2">
        <NuxtLink :to="`/articles/${article.id}`" class="d-flex col justify-content-between py-1">
            <div>
                <div class="fw-bold">
                    {{ article.title }}
                </div>
                <div>
                    {{ article.creator.name }}
                </div>
            </div>
            <div class="my-auto">
                {{ createdAt }}
            </div>
        </NuxtLink>
        <div class="action-bar col-auto px-2">
            <NuxtLink :to="`#`" class="bi-pencil-fill text-white"></NuxtLink>
            <NuxtLink :to="`#`" class="bi-trash-fill text-white"></NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const { article } = defineProps(['article'])
    const createdAt = new Date(article.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<style lang="scss" scoped>
.article-list-item {
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;

    .action-bar {
        background-color: #FED555;
        display: flex;
        flex-flow: column wrap; 
        justify-content: center;
    }
}
</style>