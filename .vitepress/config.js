import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '制度库',
  description: '中建市政工程有限公司制度宣贯平台',
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '财务资金制度', link: '/finance/' },
      { text: '商务物资制度', link: '/business/' },
      { text: '履约管理制度', link: '/project/' },
      { text: '审计相关资料', link: '/audit/' },
      { text: '独库公路图纸', link: '/独库公路图纸/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/finance/': [
        {
          text: '财务资金制度',
          collapsed: false,
          items: [
            { text: '催收防欠管理办法', link: '/finance/01-催收防欠管理办法' },
            { text: '生产资金收支管理', link: '/finance/02-生产资金收支管理' },
            { text: '费用管理办法', link: '/finance/03-费用管理办法' },
            { text: '抵债资产管理', link: '/finance/04-抵债资产管理' },
            { text: '财务管理分册', link: '/finance/05-财务管理分册' },
            { text: '资金管理分册', link: '/finance/06-资金管理分册' },
            { text: '固定资产无形资产', link: '/finance/07-固定资产无形资产' },
            { text: '境外财务资金管理', link: '/finance/08-境外财务资金管理' }
          ]
        }
      ],
      '/business/': [
        {
          text: '商务制度',
          collapsed: false,
          items: [
            { text: '分供方资源管理办法', link: '/business/1-分供方资源管理办法' },
            { text: '竣工考核管理办法', link: '/business/2-竣工考核管理办法' },
            { text: '亏损及未达预收益项目责任追究', link: '/business/3-亏损及未达预收益项目责任追究办法' },
            { text: '目标责任制管理办法', link: '/business/4-目标责任制管理办法' },
            { text: '商务管理规定', link: '/business/5-商务管理规定' },
            { text: '商务投标管理办法', link: '/business/6-商务投标管理办法' },
            { text: '工程承包合同管理办法', link: '/business/7-工程承包合同管理办法' },
            { text: '成本管理办法', link: '/business/8-成本管理办法' },
            { text: '商务风险监控管理办法', link: '/business/9-商务风险监控管理办法' },
            { text: '竣工结算管理办法', link: '/business/10-竣工结算管理办法' },
            { text: '目标责任考核兑现', link: '/business/目标责任考核兑现' },
            { text: '保证金预留管理', link: '/business/保证金预留管理' },
            { text: '采购业务组实施', link: '/business/采购业务组实施' },
            { text: '商务资料管理', link: '/business/商务资料管理' },
            { text: '算量中心实施', link: '/business/算量中心实施' }
          ]
        }
      ],
      '/project/': [
        {
          text: '项目管理部制度',
          collapsed: false,
          items: [
            { text: '项目实施管理办法', link: '/project/项目实施管理办法' },
            { text: '项目工期考核奖励办法', link: '/project/项目工期考核奖励办法' },
            { text: '劳务管理和分包资源管理办法', link: '/project/劳务管理和分包资源管理办法' },
            { text: '环境管理办法', link: '/project/环境管理办法' },
            { text: '项目履约品质综合评价', link: '/project/项目履约品质综合评价管理办法' },
            { text: '项目部年度考核管理办法', link: '/project/项目部年度考核管理办法' },
            { text: '施工现场机械设备管理办法', link: '/project/施工现场机械设备管理办法（试行）' },
            { text: '项目前期手续办理', link: '/project/项目前期手续办理' },
            { text: '项目前期手续办理细则', link: '/project/项目前期手续办理细则' },
            { text: '竣工工程维修保修', link: '/project/竣工工程维修保修' },
            { text: '竣工工程维修保修细则', link: '/project/竣工工程维修保修及保修金回收管理实施细则' },
            { text: '建造师资质管理', link: '/project/建造师资质管理' },
            { text: '建造师资质管理细则', link: '/project/建造师资质管理细则' },
            { text: '观摩考察样板工地', link: '/project/观摩考察样板工地' },
            { text: '观摩考察样板工地细则', link: '/project/观摩考察样板工地管理实施细则' },
            { text: '首次资源配置', link: '/project/首次资源配置' },
            { text: '首次资源配置细则', link: '/project/首次资源配置实施细则' },
            { text: '临时设施管理', link: '/project/临时设施管理实施细则' },
            { text: '精益建造管理', link: '/project/精益建造管理实施细则' },
            { text: '项目工期管理', link: '/project/项目工期管理实施细则' }
          ]
        }
      ],
      '/audit/': [
        {
          text: '审计相关资料',
          collapsed: false,
          items: [
            { text: '工作内容与附表对应映射表', link: '/audit/工作内容与附表对应映射表' }
          ]
        }
      ],
      '/独库公路图纸/': [
        {
          text: '独库公路图纸',
          collapsed: false,
          items: [
            { text: '独库隧道通用图结构手册', link: '/独库公路图纸/独库隧道通用图结构手册' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: '中建市政工程有限公司 商务专家',
      copyright: 'Copyright © 2024-2026'
    }
  }
})
