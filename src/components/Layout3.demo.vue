<i18n>
  基本布局三
</i18n>
<template>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Content>Content</Content>
      <Sider>Sider</Sider>
    </Layout>
    <Footer>Footer</Footer>
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

