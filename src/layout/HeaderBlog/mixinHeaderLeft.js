export default {
    data() {
        return {
            menu: ["HOME", "BUY ME A COFFEE", "BADGES"],
            menuSelect: ""
        }
    },
    methods: {
        selectMenu(data) {
            this.menuSelect = data ?? ""
            console.log(this.menuSelect);
        }
    }
}