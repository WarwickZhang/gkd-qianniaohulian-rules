import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dayunlinks.cloudbirds',
  name: '千鸟物联',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          activityIds: 'com.qianniao.splash.SplashActivity',
          matches:
            '[text*="跳过"][text.length<10][clickable=true][visibleToUser=true]',
        },
        {
          key: 1,
          matches:
            '[text*="跳过" || text^="Skip"][text.length<10][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击弹窗内明确的关闭按钮',
      fastQuery: true,
      actionMaximum: 10,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '云存储优惠弹窗',
          activityIds: 'com.qianniao.main.TabActivity',
          matches: '[vid="iv_close"][visibleToUser=true]',
        },
        {
          key: 1,
          name: '广告弹窗-右上角关闭',
          activityIds: 'com.qianniao.main.TabActivity',
          matches: [
            '[text*="广告"][visibleToUser=true]',
            '[text="关闭"][clickable=true][visibleToUser=true]',
          ],
        },
        {
          key: 2,
          name: '关闭按钮',
          activityIds: 'com.qianniao.main.TabActivity',
          matches: '[text="关闭"][clickable=true][visibleToUser=true]',
        },
        {
          key: 3,
          activityIds: 'com.qianniao.main.TabActivity',
          matches:
            '[text="关闭" || text="×" || text="x" || text="X" || text="取消"][clickable=true][visibleToUser=true]',
        },
        {
          key: 4,
          activityIds: 'com.qianniao.main.TabActivity',
          matches:
            '[vid*="close" || vid*="iv_close" || vid*="btn_close" || desc*="关闭" || desc*="close"][clickable=true][visibleToUser=true]',
        },
        {
          key: 5,
          name: '首页广告卡片右上角关闭',
          activityIds: 'com.qianniao.main.TabActivity',
          matches:
            '[vid="lmr_list"] > LinearLayout > FrameLayout[clickable=true] > ImageView[clickable=true][visibleToUser=true]',
        },
        {
          key: 6,
          name: '首页广告卡片关闭',
          activityIds: 'com.qianniao.main.TabActivity',
          matches: '[vid="ptgImgClose"][visibleToUser=true]',
        },
      ],
    },
  ],
});
