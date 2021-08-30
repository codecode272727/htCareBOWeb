<template>
    <div class="text-center d-flex justify-content-center align-items-center align-content-center">
        <half-circle-spinner :animation-duration="1500"
                             :size="60"
                             color="#808080" />
    </div>
</template>
<script lang="ts">
    import { HalfCircleSpinner } from 'epic-spinners'
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        components: { HalfCircleSpinner   }
    })
    export default class LoadingScreen extends Vue {

    }
</script>