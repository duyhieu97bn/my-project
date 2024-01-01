<template>
    <div class="container-icon">
        <img :src="nameIcon" alt="" :class="sizeIcon">
    </div>
</template>
<script>
import search from "@/assets/icon/search-svgrepo-com.svg"
import moon from "@/assets/icon/moon-svgrepo-com.svg"
import profile from "@/assets/icon/user-person-profile-block-account-circle-svgrepo-com.svg"
import github from "@/assets/icon/github-142-svgrepo-com.svg"
import linkedin from "@/assets/icon/linkedin-svgrepo-com.svg"
import earth from "@/assets/icon/earth-10-svgrepo-com.svg"
import rss from "@/assets/icon/rss-feed-svgrepo-com.svg"
import closeSquare from "@/assets/icon/close-square-svgrepo-com.svg"
import instagram from "@/assets/icon/instagram-svgrepo-com.svg"
export default {
    props: {
        name: {
            type: String,
            default: "search",
        },
        size: {
            type: String,
            default: "small"
        }
    },
    computed: {
        nameIcon() {
            switch (this.name) {
                case "search":
                    return search
                case "moon":
                    return moon
                case "profile":
                    return profile
                case "github":
                    return github
                case "linkedin":
                    return linkedin
                case "earth":
                    return earth
                case "rss":
                    return rss
                case "instagram":
                    return instagram
                default:
                    return closeSquare
            }
        },
        sizeIcon() {
            switch (this.size) {
                case "small":
                    return "small-icon"
                case "medium":
                    return "medium-icon"
                case "large":
                    return "large-icon"
                default:
                    return "small-icon"
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.container-icon {
    margin: 0 4px;

    .small-icon {
        width: 20px;
        height: 20px;
    }

    .medium-icon {
        width: 30px;
        height: 30px;
        margin: 0 6px;
    }

    .large-icon {
        width: 50px;
        height: 50px;
        margin: 0 8px;
    }
}
</style>