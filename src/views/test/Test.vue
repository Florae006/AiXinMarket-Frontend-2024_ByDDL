<script lang="ts">
export default {
  name: 'Test',
}
</script>


<template>
  <div>
    <h1>这是一个测试功能的页面</h1>
    <p>这个页面用来检测是否各个组件库是否正常</p>
  </div>

  <h1>ElementPlus</h1>
  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="warning" title="Warning Tip" sub-title="Please follow the instructions">
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="error" title="Error Tip" sub-title="Please follow the instructions">
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>Using slot as subtitle</p>
        </template>
        <template #extra>
          <el-button type="primary">Back</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
<br/>
  <h1>ArcoVue</h1>
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <a-page-header :style="{ background: 'var(--color-bg-9)' }" title="ArcoDesign">
      <template #breadcrumb>
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>Channel</a-breadcrumb-item>
          <a-breadcrumb-item>News</a-breadcrumb-item>
        </a-breadcrumb>
      </template>
      <template #subtitle>
        <a-space>
          <span>ArcoDesign Vue 2.0</span>
          <a-tag color="red" size="small">Default</a-tag>
        </a-space>
      </template>
      <template #extra>
        <a-space>
          <a-button>Cancel</a-button>
          <a-button type="primary">Save</a-button>
        </a-space>
      </template>
      <p>
        For other uses, see Design
      </p>
      <p>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design. In some cases, the direct construction of an object without an explicit
        prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
        considered to be a design activity. The design usually has to satisfy certain goals and
        constraints, may take into account aesthetic, functional, economic, or socio-political
        considerations, and is expected to interact with a certain environment. Major examples of
        designs include architectural blueprints,engineering drawings, business processes, circuit
        diagrams, and sewing patterns.Major examples of designs include architectural
        blueprints,engineering drawings, business processes, circuit diagrams, and sewing patterns.
      </p>
    </a-page-header>
  </div>

<br/>

  <h1>NaiveUI</h1>
  <n-page-header subtitle="让你的听觉更懂视觉" @back="handleBack">
    <n-grid :cols="5">
      <n-gi>
        <n-statistic label="正片" value="125 集" />
      </n-gi>
      <n-gi>
        <n-statistic label="嘉宾" value="22 位" />
      </n-gi>
      <n-gi>
        <n-statistic label="道歉" value="36 次" />
      </n-gi>
      <n-gi>
        <n-statistic label="话题" value="83 个" />
      </n-gi>
      <n-gi>
        <n-statistic label="参考链接" value="2,346 个" />
      </n-gi>
    </n-grid>
    <template #title>
      <a
        href="https://anyway.fm/"
        style="text-decoration: none; color: inherit"
      >Anyway.FM</a>
    </template>
    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>播客</n-breadcrumb-item>
        <n-breadcrumb-item>精选</n-breadcrumb-item>
        <n-breadcrumb-item>超级精选</n-breadcrumb-item>
        <n-breadcrumb-item>Anyway.FM</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
    <template #avatar>
      <n-avatar
        src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
      />
    </template>
    <template #extra>
      <n-space>
        <n-button>催更</n-button>
        <n-dropdown :options="options" placement="bottom-start">
          <n-button :bordered="false" style="padding: 0 4px">
            ···
          </n-button>
        </n-dropdown>
      </n-space>
    </template>
    <template #footer>
      截止到 2021 年 4 月 3 日
    </template>
  </n-page-header>

</template>


<style less scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  line-height: 2;
}
</style>