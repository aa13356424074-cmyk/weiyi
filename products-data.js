window.weiyiProductCatalog = {
  // 是否显示“全部”筛选按钮
  showAllTab: true,

  /*
    维护规则：
    1. 每个产品对应产品页里的一个卡片，也可作为详情页的数据源
    2. 图片字段只写文件名，例如 01.jpg
    3. 产品图会自动拼成：
       images/products/分类 folder/文件名
    4. 如果某个产品要出现在首页精选单品里，就填写 featured

    推荐字段顺序尽量保持一致：
    id -> enabled -> image -> title -> description -> badge -> href -> ctaLabel -> alt
    -> price -> status -> materialsLabel -> sizeLabel -> detail -> featured

    detail 说明：
    - image: 详情页主图文件名，可选；不填就复用 product.image
    - gallery: 详情页画廊图片文件名数组，可选；与主图放在同一目录
    - summary: 产品简介
    - story: 设计说明
    - materials: 材质信息，建议写数组
    - care: 保养建议，建议写数组

    featured 说明：
    - enabled: 是否加入首页精选
    - order: 首页排序，同时默认对应 images/home/picks/01.jpg、02.jpg...
    - image: 可选。只有首页精选图不想按 order 命名时才填
    - title / description / href / alt: 可选首页覆盖字段，不填就复用产品本身字段

    复制模板：

    {
      id: 'bracelet-01',
      enabled: true,
      image: '01.jpg',
      title: '产品名称',
      description: '材质 · 工艺简介',
      badge: '',
      href: '',
      ctaLabel: '查看详情',
      alt: '产品替代文本',
      price: '¥698',
      status: '可定制',
      materialsLabel: '925 银 / 锆石',
      sizeLabel: '可调节',
      detail: {
        image: '01.jpg',
        gallery: ['01.jpg', '02.jpg'],
        summary: '一句话产品简介',
        story: '设计说明',
        materials: ['材质 1', '材质 2'],
        care: ['保养建议 1', '保养建议 2']
      },
      featured: {
        enabled: true,
        order: 1
      }
    }
  */
  categories: [
    {
      key: 'bracelet',
      label: '手链',
      folder: 'bracelet',
      products: [
        {
          id: 'bracelet-01',
          enabled: true,
          image: '01.jpg',
          title: '手链产品 01',
          description: '材质 · 工艺简介',
          badge: '主推',
          href: '',
          ctaLabel: '查看详情',
          alt: '手链产品 01',
          price: '¥698',
          status: '可定制',
          materialsLabel: '925 银镀金 / 锆石',
          sizeLabel: '可调节手围',
          detail: {
            image: '01.jpg',
            gallery: ['01.jpg'],
            summary: '适合作为当前产品系列的示例详情结构。',
            story: '可以在这里补充设计灵感、佩戴场景、系列定位或定制说明。',
            materials: [
              '材质信息待补充',
              '如有主石、镀层、金属类型，可拆分成多条填写'
            ],
            care: [
              '避免接触香水、酒精等化学制剂',
              '不佩戴时建议单独收纳，避免与硬物摩擦'
            ]
          },
          featured: {
            enabled: true,
            order: 1
          }
        },
        {
          id: 'bracelet-02',
          enabled: true,
          image: '02.jpg',
          title: '手链产品 02',
          description: '材质 · 工艺简介',
          badge: '',
          href: '',
          ctaLabel: '查看详情',
          alt: '手链产品 02',
          featured: {
            enabled: true,
            order: 2
          }
        },
        {
          id: 'bracelet-03',
          enabled: true,
          image: '03.jpg',
          title: '手链产品 03',
          description: '材质 · 工艺简介',
          badge: '新品',
          href: '',
          ctaLabel: '查看详情',
          alt: '手链产品 03',
          featured: {
            enabled: true,
            order: 3
          }
        }
      ]
    },
    {
      key: 'necklace',
      label: '项链',
      folder: 'necklace',
      products: [
        {
          id: 'necklace-01',
          enabled: true,
          image: '01.jpg',
          title: '项链产品 01',
          description: '材质 · 工艺简介',
          badge: '',
          href: '',
          ctaLabel: '查看详情',
          alt: '项链产品 01',
          featured: {
            enabled: true,
            order: 4
          }
        },
        {
          id: 'necklace-02',
          enabled: true,
          image: '02.jpg',
          title: '项链产品 02',
          description: '材质 · 工艺简介',
          badge: '',
          href: '',
          ctaLabel: '查看详情',
          alt: '项链产品 02',
          featured: {
            enabled: true,
            order: 5
          }
        },
        {
          id: 'necklace-03',
          enabled: true,
          image: '03.jpg',
          title: '项链产品 03',
          description: '材质 · 工艺简介',
          badge: '定制',
          href: '',
          ctaLabel: '查看详情',
          alt: '项链产品 03',
          featured: {
            enabled: true,
            order: 6
          }
        }
      ]
    },
    {
      key: 'couple',
      label: '情侣款',
      folder: 'couple',
      products: [
        {
          id: 'couple-01',
          enabled: true,
          image: '01.jpg',
          title: '情侣款 01',
          description: '材质 · 工艺简介',
          badge: '',
          href: '',
          ctaLabel: '查看详情',
          alt: '情侣款 01'
        },
        {
          id: 'couple-02',
          enabled: true,
          image: '02.jpg',
          title: '情侣款 02',
          description: '材质 · 工艺简介',
          badge: '',
          href: '',
          ctaLabel: '查看详情',
          alt: '情侣款 02'
        }
      ]
    }
  ]
};
