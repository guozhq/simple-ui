<i18n>
  基本布局五
</i18n>
<template>
  <Layout>
    <Header>header</Header>
    <Sider>Sider</Sider>
    <Layout>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</template>
<script lang="ts">
import Layout from '../lib/Layout.vue'
import Header from '../lib/Header.vue'
import Content from '../lib/Content.vue'
import Sider from '../lib/Sider.vue'
import Footer from '../lib/Footer.vue'
export default {
  components: { Layout, Header, Content, Sider, Footer }
}
</script>

