<template>
    <div class="header-left-blog">
        <div class="title-blog">Blog của Hiếu</div>
        <div class="menu">
            <div class="menu-item" v-for="item in menu" :key="item" @click="selectMenu(item)"> {{ item }}</div>
        </div>
    </div>
</template>
<script>
import mixinHeaderLeft from './mixinHeaderLeft';
import './styleHeaderLeft.scss'
export default {
    mixins:[mixinHeaderLeft],
}
</script>
<style lang="scss" scoped>
.header-left-blog {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    .title-blog {
        font-size: 35px;
        font-weight: bold;
    }

    .menu {
        display: flex;

        .menu-item {
            text-decoration-line: underline;
            font-weight: bold;
            &:hover {
                text-shadow: 0 2px aqua;
                cursor: pointer;
            }
        }
        .menu-item+.menu-item {
            margin-left: 16px;
        }
    }
}
</style>