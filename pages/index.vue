<template>
    <div v-designer.true>
        <p>
            INDEX
        </p>
        <p>
            $route.params.group :
            {{ $route.params.group }}
        </p>
        <p>
            $route.params.id :
            {{ $route.params.id }}
        </p>
        <NuxtTextButton>
            <p>
                NuxtTextButton
            </p>
        </NuxtTextButton>
    </div>
</template>
<script>
/* eslint-disable */
import NuxtTextButton from '../components/NuxtTextButton.vue';
export default {
    components: {
        NuxtTextButton
    }
};
</script>
