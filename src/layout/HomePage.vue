<template>
    <div class="home-page">
        home paged

    </div>
    <div class="container-infinite" v-infinitesScroll="eventInfiniteScroll">
        <div class="item" v-for="item in menu" :key="item"> {{ item }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: [],
            idx: 0
        }
    },
    created() {
        for (let index = 0; index < 10; index++) {
            this.menu.push(`item ${index}`)
            this.idx++;
        }
    },
    methods: {
        eventInfiniteScroll() {
            for (let index = 0; index < 10; index++) {
                this.menu.push(`${this.idx++} item `)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.container-infinite {
    align-items: center;
    width: 200px;
    height: 300px;
    margin-top: 50px;
    background: white;
    border: 1px solid rgb(24, 23, 23);
    border-radius: 8px;
    box-shadow: 10px 10px 18px rgb(87, 86, 86);
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: auto;

    .item {
        width: 90%;
        height: 35px;
        border: 1px solid rgb(85, 78, 78);
        border-radius: 18px;
        margin: 5px;
        background: rgb(143, 101, 101);
        line-height: 35px;

        &:hover {
            cursor: pointer;
            border: unset;
            background: rgb(167, 184, 107);
            box-shadow: 10px 10px 18px rgb(87, 86, 86);
            ;
            color: red;
        }

    }
}</style>