<template>
  <div class="test" @click="fn">
    5215545214544855145
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      num: 0
    };
  },
  methods: {
    fn() {
      this.$emit('name', this.num++);
    }
  }
};
</script>

<style scoped lang="scss"></style>
