window.weiyiSiteContent = {
  site: {
    brand: {
      name: 'WEIYI',
      subname: '唯意'
    },
    nav: [
      { key: 'home', href: 'index.html', label: '首页' },
      { key: 'about', href: 'about.html', label: '品牌故事' },
      { key: 'products', href: 'products.html', label: '产品展示' },
      { key: 'contact', href: 'contact.html', label: '联系我们' }
    ],
    footer: {
      copyright: '© 2024 WEIYI 唯意 · 保留所有权利',
      contact: 'contact@weiyi.com'
    },
    social: {
      xiaohongshuUrl: 'https://www.xiaohongshu.com/user/profile/63bbd09d00000000260107a7'
    }
  },
  pages: {
    home: {
      title: 'WEIYI 唯意 | 官方网站',
      hero: {
        image: 'images/home/hero/01.jpg',
        imageAlt: 'WEIYI 唯意',
        headingLines: ['WEIYI', '唯意'],
        slogan: '精益求精 · 至善至美'
      },
      intro: [
        '科学有数，唯心无界。',
        '每一件 WEIYI 唯意的作品，都是对极致工艺的诚意诠释。'
      ],
      carousel: {
        heading: '产品系列',
        subheading: 'Collections',
        imageAltPrefix: '首页轮播 ',
        emptyMessage: '请将轮播图按 01.jpg、02.jpg 的命名放入 images/home/carousel/'
      },
      picks: {
        heading: '精选单品',
        subheading: 'Selected Pieces',
        emptyMessage: '请先在 products-data.js 里为产品配置 featured.order。首页图可选放入 images/home/picks/，不放时会自动回退到产品图。',
        defaultDescription: '点击查看产品展示',
        defaultHref: 'products.html',
        defaultAltPrefix: '精选单品 '
      },
      xhs: {
        text: '想看更多搭配灵感与新品动态？',
        linkLabel: '前往小红书 →'
      }
    },
    about: {
      title: '品牌故事 | WEIYI 唯意',
      bannerTitle: '品牌故事',
      bannerKicker: 'Brand Essay / WEIYI',
      bannerCopy: '我们在克制的轮廓、清晰的结构与细微的光泽之间，为首饰寻找一种更安静却更耐看的存在方式。',
      bannerMarks: ['精工细作', '材质先行', '克制表达'],
      columns: [
        {
          index: '01',
          heading: '我们是谁',
          note: 'Origin / Presence',
          lead: 'WEIYI 唯意诞生于对设计秩序与手工温度的共同迷恋。',
          paragraphs: [
            '我们相信，首饰不只是装饰，也不应只是瞬间吸引目光的物件。它更像一种贴近身体的语言，用比例、重量、光泽与触感，留下属于佩戴者的情绪和记忆。',
            '因此，从选材到打样，从结构确认到最后交付，我们始终以稳定的工艺判断为前提，让每一件作品都在细节里保有分寸，在日常中也经得起反复观看。'
          ],
          footnote: '从材料判断开始，到佩戴感受结束。'
        },
        {
          index: '02',
          heading: '我们的方式',
          note: 'Method / Balance',
          lead: '科学有数，唯心无界。',
          paragraphs: [
            '这不是一句口号，而是我们处理设计与工艺关系的方法。理性负责结构、比例与可佩戴性，感性负责气质、留白与审美判断；两者并行，作品才会拥有真正耐看的节奏。',
            'WEIYI 唯意追求的不是过度堆叠的华丽，而是在克制中显出质感，在安静中保留力度。精益求精，至善至美，是我们写进每一道工序里的承诺。'
          ],
          footnote: '让首饰回到它最本质的价值：陪伴、表达，以及被长期珍视。'
        }
      ],
      sloganBlock: {
        headingLines: ['Quiet in form,', 'precise in feeling.'],
        subheading: '克制成形 · 细节见意'
      },
      xhs: {
        text: '在小红书继续看我们的工艺细节、佩戴灵感与上新记录。',
        linkLabel: '前往小红书 →'
      }
    },
    products: {
      title: '产品展示 | WEIYI 唯意',
      bannerTitle: '产品展示',
      bannerKicker: 'Collection Index / WEIYI',
      bannerCopy: '以克制的轮廓、稳定的工艺与清晰的材质表达，整理出当前系列的作品线索。',
      allTabLabel: '全部',
      emptyAllMessage: '请先在 products-data.js 填写产品信息，再把图片放入对应的 images/products/ 分类目录。',
      emptyCategoryMessage: '当前分类暂无可显示产品。请检查 products-data.js 配置，并将对应图片放入 {folder}。',
      defaultCtaLabel: '查看详情',
      xhs: {
        text: '想看更多搭配灵感？',
        linkLabel: '前往小红书 →'
      }
    },
    productDetail: {
      titleSuffix: ' | WEIYI 唯意',
      bannerKicker: 'Selected Piece / WEIYI',
      bannerCopy: '查看单件作品的图像、信息与材质细节。',
      notFoundTitle: '产品未找到',
      notFoundMessage: '没有找到对应产品。请检查链接中的产品 ID，或返回产品展示页重新选择。',
      backToProductsLabel: '返回产品展示',
      defaultActionLabel: '联系咨询',
      defaultActionHref: 'contact.html',
      sectionHeading: '产品信息',
      galleryEmptyMessage: '请将更多产品图放入对应产品目录，详情页会自动按 detail.gallery 里填写的文件名显示。',
      fields: {
        category: '分类',
        badge: '标签',
        id: '编号',
        image: '图片文件',
        price: '参考价格',
        status: '状态',
        materialsLabel: '材质',
        sizeLabel: '尺寸'
      },
      detailSections: {
        summary: {
          title: '产品简介'
        },
        story: {
          title: '设计说明'
        },
        materials: {
          title: '材质信息'
        },
        care: {
          title: '佩戴与保养'
        }
      },
      fallback: {
        summary: '当前产品暂未补充更详细说明，可通过联系页获取更多信息。',
        story: '可前往联系页咨询设计灵感、定制方式与现货情况。',
        materials: ['材质信息待补充', '可通过联系页获取更详细说明'],
        care: ['避免接触化学制剂', '闲置时建议单独收纳']
      },
      relatedHeading: '同类推荐',
      relatedSubheading: 'More From This Collection',
      xhs: {
        text: '想进一步了解佩戴方式、上新动态或定制咨询？',
        linkLabel: '前往小红书 →'
      }
    },
    contact: {
      title: '联系我们 | WEIYI 唯意',
      bannerTitle: '联系我们',
      bannerKicker: 'Consultation / Contact',
      bannerCopy: '无论是定制咨询、现货了解还是搭配建议，都可以从这里开始和我们建立联系。',
      infoHeading: '联系方式',
      infoItems: [
        { label: '微信', value: 'weiyi_official' },
        { label: '邮箱', value: 'contact@weiyi.com' },
        { label: '小红书', value: 'WEIYI 唯意 · 小红书号 5378342973' },
        { label: 'IP 属地', value: '广东' }
      ],
      socialLinks: [
        {
          label: '小红书主页 →',
          href: 'https://www.xiaohongshu.com/user/profile/63bbd09d00000000260107a7'
        }
      ],
      form: {
        heading: '留言咨询（点击提交后自动跳转至邮箱）',
        nameLabel: '您的姓名',
        namePlaceholder: '请输入姓名',
        contactLabel: '联系方式',
        contactPlaceholder: '微信 / 手机 / 邮箱',
        messageLabel: '留言内容',
        messagePlaceholder: '请输入您的留言...',
        submitLabel: '提交留言',
        validationMessage: '请完整填写姓名、联系方式和留言内容。',
        mailSubject: 'WEIYI 官网留言',
        mailRecipient: 'contact@weiyi.com',
        bodyLabels: {
          name: '姓名：',
          contact: '联系方式：',
          message: '留言内容：'
        }
      },
      xhs: {
        text: '也可以在小红书找到我们，查看最新搭配与动态。',
        linkLabel: '前往小红书 →'
      }
    }
  }
};
