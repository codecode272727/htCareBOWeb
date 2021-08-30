<template>
  <div>
      <label>User:</label>
      <input type="text" name="name" v-model="name" />
      <span>--{{name}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
   
  },
})
export default class Home extends Vue {
    name: string = ''
}
</script>
