<template>
    <div class="row align-items-start">
        <div class="col content-container px-0 py-4 me-4">
            <div class="d-flex justify-content-between mb-3 ps-4">
                <h2 class="my-auto">
                    Artikel Baru
                </h2>
                <button class="btn btn-primary btn-sm text-white" @click="hiddenPreview = !hiddenPreview" style="border-radius: 150px 0 0 150px;">
                    Preview
                    <span v-if="hiddenPreview" class="ms-1 bi-chevron-left"></span>
                    <span v-else class="ms-1 bi-chevron-right"></span>
                </button>
            </div>
            <div class="px-4">
                <form action="">
                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Judul artikel..." v-model="title">
                        </div>
                        <div class="col-auto">
                            <select class="form-select" aria-label="Default select example">
                                <option v-for="category in categories" :value="`${category.id}`" :selected="category.id == currentCategoryId">{{ category.name }}</option>
                            </select>
                        </div>
                    </div>
                    <textarea class="form-control mb-1" rows="10" placeholder="Konten artikel.." v-model="content"></textarea>
                    <div class="fs-6 fw-light">
                        Note: konten di-format menggunakan <a class="link-primary" href="https://learnxinyminutes.com/docs/markdown/">Markdown</a>
                    </div>
                    <div class="d-flex justify-content-end">
                        <input type="submit" value="Post" class="btn btn-primary text-white">
                    </div>
                </form>
            </div>
        </div>

        <div class="col content-container p-4" :hidden="hiddenPreview">
            <h2 class="mb-4">
                Preview
            </h2>
            <article v-html="convertedContentToMarkdown"></article>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      hiddenPreview: false
    }
  },
  computed: {
    convertedContentToMarkdown() {
        const md = new MarkdownIt;
        return md.render(this.content)
    }
  }
}
</script>

<script setup>
import MarkdownIt from 'markdown-it';

const categories = [
    { id: 1, name: 'category1' },
    { id: 2, name: 'category2' },
]

const route = useRoute()
const currentCategoryId = route.query['category-id']
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