<template>
    <button v-designer.true type="button" class="NuxtTextButton">
        <p> booleanDefaultTrue : {{booleanDefaultTrue}} </p>
        <p> booleanDefaultFalse : {{booleanDefaultFalse}} </p>
        <slot />
    </button>
</template>

<script>
/* eslint-disable */
export default {
    name: 'NuxtTextButton',
    components: {},
    props: {
        // Simple props
        booleanDefaultTrue: {
            type: Boolean,
            default: true,
        },
        booleanDefaultFalse: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style scoped lang="scss">
.NuxtTextButton {
    border: solid gray 2px;
    border-radius: 5px;
    background-color: rgb(105, 221, 153);
    padding: 3px;
    margin: 3px;
    min-width: 50px;
    &:hover {
        border-color:lightseagreen;
    }
    h1, h2, h3, h4, h5 {
        border: solid gray;
        font-size: small;
        padding: 1px;
        margin: 1px;
    }
    h1 {
        border: solid rgb(152, 22, 204) 2px;
    }
    h2 {
        border: solid rgb(63, 165, 85) 2px;
    }
}
</style>