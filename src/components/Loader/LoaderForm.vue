<template>
    <v-wait v-bind:for="wait">
        <template slot="waiting">
            <LoadingScreen></LoadingScreen>
        </template>
        <div>
            <slot name="form-content"></slot>
        </div>
    </v-wait>
</template>

<script lang="ts">
    import LoadingScreen from './LoadingScreen.vue'
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'

    @Component({
        components: { LoadingScreen }
    })
    export default class LoaderForm extends Vue {
        @Prop(String) readonly wait: string | undefined
    }
</script>