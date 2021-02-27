<script>
export default {
  name: 'redirect',
  beforeCreate() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({
      path: '/' + path,
      query
    });
    return false;
  },
  render(h) {
    return h();
  }
};
</script>
