export default {
    created(el, binding) {
        el.addEventListener("scroll", () => {
            if (el.clientHeight + el.scrollTop >= el.scrollHeight && typeof binding.value == "function") {
                binding.value()
            }
        })
    },
}