<i18n>
  基本布局一
</i18n>
<template>
  <Layout>
    <Header>header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</template>
<script lang="ts">
import Layout from '../lib/Layout.vue'
import Header from '../lib/Header.vue'
import Content from '../lib/Content.vue'
import Footer from '../lib/Footer.vue'
export default {
  components: { Layout, Header, Content, Footer }
}
</script>
