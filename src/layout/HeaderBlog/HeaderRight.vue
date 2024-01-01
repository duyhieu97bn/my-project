<template>
    <div class="header-right-blog">
        <div class="header-top-right">
            <my-icon class="hover-item" name="search" size="medium"></my-icon>
            <my-icon class="hover-item" name="moon" size="medium"></my-icon>
            <button class="hover-item btn btn-follow">+ Follow</button>
            <my-icon class="hover-item" name="profile" size="medium"></my-icon>
        </div>
        <div class="social-network-list">
            <my-icon class="hover-item" name="github" size="small"></my-icon>
            <my-icon class="hover-item" name="instagram" size="small"></my-icon>
            <my-icon class="hover-item" name="linkedin" size="small"></my-icon>
            <my-icon class="hover-item" name="earth" size="small"></my-icon>
            <my-icon class="hover-item" name="rss" size="small"></my-icon>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.header-right-blog {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;



    .header-top-right {
        display: flex;
    }

    .social-network-list {
        display: flex;
    }
}
</style>