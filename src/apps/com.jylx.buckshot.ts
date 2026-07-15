import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jylx.buckshot',
  name: '千鸟互联',
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
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[text="关闭" || text="×" || text="取消"][clickable=true][visibleToUser=true]',
        },
        {
          key: 1,
          matches:
            '[vid*="close" || vid*="iv_close" || vid*="btn_close"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击[以后再说]/[暂不更新]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text*="更新" || text*="升级"][visibleToUser=true]',
            '[text="以后再说" || text="暂不更新" || text="取消"][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-通知权限',
      desc: '点击[暂不开启]/[以后再说]/[取消]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text*="通知" || text*="消息提醒"][visibleToUser=true]',
            '[text="暂不开启" || text="以后再说" || text="取消"][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
