<template>
  <h1> 示例1 </h1>
  <Layout>
    <Header>header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
  <h1> 示例2 </h1>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
  <h1> 示例3 </h1>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Content>Content</Content>
      <Sider>Sider</Sider>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
  <h1> 示例4 </h1>
  <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>header</Header>
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