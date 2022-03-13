<template>
    <div class="selling-logs shadow">
        <p
            v-for="(log, key) in logInfo"
            :key="key"
        >
            {{log}}
        </p>
    </div>
</template>

<script>
export default {
    props: ['logInfo'],
    setup() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.selling-logs {
    border-radius: 15px;
    background-color: lighten(#67c6f2, 25%);
    width: 76vw;
    height: 80vh;

    position: absolute;
    left: 370px;
    top: 100px;

    padding: 50px;
    color: #005baa;
    font-size: 1.25em;
}
</style>