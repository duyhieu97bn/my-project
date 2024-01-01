<template>
    <div class="header">
        <header-left></header-left>
        <header-right></header-right>
    </div>
</template>
<script>
import HeaderRight from '@/layout/HeaderBlog/HeaderRight.vue'
import HeaderLeft from '@/layout/HeaderBlog/HeaderLeft.vue'

export default {
    components: {
        HeaderLeft: HeaderLeft,
        HeaderRight: HeaderRight,
    }
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin: 0 120px;
    // background-color: red;
    border: 1px solid silver;
    border-radius: 10px;
    height: 120px;
}
</style>