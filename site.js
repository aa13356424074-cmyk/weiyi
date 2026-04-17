(function (global) {
  var MAX_COUNT = 30;
  var probeCache = {};

  function padNumber(value) {
    return String(value).padStart(2, '0');
  }

  function buildImageFileName(index) {
    return padNumber(index) + '.jpg';
  }

  function buildImagePath(folder, index) {
    return buildAssetPath(folder, buildImageFileName(index));
  }

  function buildAssetPath(folder, fileName) {
    return folder + '/' + fileName;
  }

  function probeImage(src) {
    if (!src) {
      return Promise.resolve(null);
    }

    if (probeCache[src]) {
      return probeCache[src];
    }

    probeCache[src] = new Promise(function (resolve) {
      var image = new Image();
      image.onload = function () {
        resolve(src);
      };
      image.onerror = function () {
        resolve(null);
      };
      image.src = src;
    });

    return probeCache[src];
  }

  async function loadSequentialImages(folder, limit) {
    var results = [];
    var max = typeof limit === 'number' ? limit : MAX_COUNT;

    for (var index = 1; index <= max; index += 1) {
      var fileName = buildImageFileName(index);
      var src = await probeImage(buildAssetPath(folder, fileName));

      if (!src) {
        break;
      }

      results.push({
        index: index,
        label: padNumber(index),
        fileName: fileName,
        src: src
      });
    }

    return results;
  }

  function loadNamedImages(folder, fileNames) {
    var ordered = [];
    var seen = {};

    (Array.isArray(fileNames) ? fileNames : []).forEach(function (fileName) {
      if (!fileName || seen[fileName]) {
        return;
      }

      seen[fileName] = true;
      ordered.push(fileName);
    });

    return Promise.all(ordered.map(function (fileName, index) {
      return probeImage(buildAssetPath(folder, fileName)).then(function (src) {
        if (!src) {
          return null;
        }

        return {
          index: index + 1,
          label: padNumber(index + 1),
          fileName: fileName,
          src: src
        };
      });
    })).then(function (items) {
      return items.filter(Boolean);
    });
  }

  function resolveElement(target) {
    if (!target) {
      return null;
    }

    return typeof target === 'string'
      ? document.getElementById(target)
      : target;
  }

  function clearElement(target) {
    var element = resolveElement(target);

    if (!element) {
      return null;
    }

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    return element;
  }

  function appendLineBreak(parent, index) {
    if (index > 0) {
      parent.appendChild(document.createElement('br'));
    }
  }

  function setText(target, text) {
    var element = resolveElement(target);

    if (!element) {
      return null;
    }

    element.textContent = text || '';
    return element;
  }

  function setLines(target, lines) {
    var element = clearElement(target);

    if (!element) {
      return null;
    }

    (Array.isArray(lines) ? lines : []).forEach(function (line, index) {
      appendLineBreak(element, index);
      element.appendChild(document.createTextNode(line));
    });

    return element;
  }

  function setParagraphWithBreaks(target, lines) {
    return setLines(target, lines);
  }

  function getSiteContent() {
    return global.weiyiSiteContent || { site: {}, pages: {} };
  }

  function getPageContent(pageKey) {
    var content = getSiteContent();
    return content.pages && content.pages[pageKey]
      ? content.pages[pageKey]
      : {};
  }

  function getSharedContent() {
    return getSiteContent().site || {};
  }

  function getProductCatalog() {
    return global.weiyiProductCatalog || { categories: [] };
  }

  function getProductEntries() {
    var catalog = getProductCatalog();
    var categories = Array.isArray(catalog.categories) ? catalog.categories : [];
    var entries = [];

    categories.forEach(function (category) {
      var products = Array.isArray(category.products) ? category.products : [];

      products.forEach(function (product) {
        if (!product || product.enabled === false) {
          return;
        }

        entries.push({
          category: category,
          product: product
        });
      });
    });

    return entries;
  }

  function getProductById(productId) {
    if (!productId) {
      return null;
    }

    var match = null;

    getProductEntries().some(function (entry) {
      if (entry.product.id === productId) {
        match = entry;
        return true;
      }

      return false;
    });

    return match;
  }

  function buildProductUrl(productId) {
    return 'product.html?product=' + encodeURIComponent(productId || '');
  }

  function getProductLink(entryOrProduct) {
    var product = entryOrProduct && entryOrProduct.product
      ? entryOrProduct.product
      : entryOrProduct;

    if (!product) {
      return 'products.html';
    }

    return product.href || buildProductUrl(product.id);
  }

  function getRelatedProducts(productId, limit) {
    var current = getProductById(productId);
    var max = typeof limit === 'number' ? limit : 3;

    if (!current) {
      return [];
    }

    return getProductEntries().filter(function (entry) {
      return entry.product.id !== productId &&
        entry.category.key === current.category.key;
    }).slice(0, max);
  }

  function getFeaturedProducts() {
    return getProductEntries().filter(function (entry) {
      var featured = entry.product.featured;

      return featured &&
        featured.enabled !== false &&
        typeof featured.order === 'number';
    }).sort(function (left, right) {
      return left.product.featured.order - right.product.featured.order;
    });
  }

  function setDocumentTitle(title) {
    if (title) {
      document.title = title;
    }
  }

  function createLogo(shared) {
    var logo = document.createElement('a');
    var brand = shared.brand || {};
    var emphasis = document.createElement('em');

    logo.className = 'nav-logo';
    logo.href = 'index.html';
    logo.setAttribute('aria-label', (brand.name || 'WEIYI') + ' homepage');
    logo.appendChild(document.createTextNode((brand.name || '').trim() + ' '));
    emphasis.textContent = brand.subname || '';
    logo.appendChild(emphasis);

    return logo;
  }

  function renderHeader(activePage) {
    var header = clearElement('siteHeader');
    var shared = getSharedContent();

    if (!header) {
      return;
    }

    header.appendChild(createLogo(shared));

    var nav = document.createElement('nav');
    nav.className = 'nav-links';

    (Array.isArray(shared.nav) ? shared.nav : []).forEach(function (item) {
      var link = document.createElement('a');
      link.href = item.href || '#';
      link.textContent = item.label || '';

      if (item.key === activePage) {
        link.classList.add('active');
      }

      nav.appendChild(link);
    });

    header.appendChild(nav);
  }

  function renderFooter() {
    var footer = clearElement('siteFooter');
    var shared = getSharedContent();
    var footerConfig = shared.footer || {};

    if (!footer) {
      return;
    }

    var logo = document.createElement('div');
    logo.className = 'footer-logo footer-brand';
    logo.textContent = (shared.brand && shared.brand.name ? shared.brand.name + ' ' : 'WEIYI ') +
      (shared.brand && shared.brand.subname ? shared.brand.subname : '唯意');

    var copyright = document.createElement('div');
    copyright.className = 'footer-copy';
    copyright.textContent = footerConfig.copyright || '';

    var contact = document.createElement('div');
    contact.className = 'footer-contact';
    contact.textContent = footerConfig.contact || '';

    footer.appendChild(logo);
    footer.appendChild(copyright);
    footer.appendChild(contact);
  }

  function renderXhsStrip(targetId, config) {
    var strip = clearElement(targetId);
    var shared = getSharedContent();
    var social = shared.social || {};

    if (!strip || !config) {
      return;
    }

    var text = document.createElement('p');
    text.textContent = config.text || '';

    var link = document.createElement('a');
    link.href = config.href || social.xiaohongshuUrl || '#';
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = config.linkLabel || '前往小红书 →';

    strip.appendChild(text);
    strip.appendChild(link);
  }

  function makePressableCard(target, activate) {
    var element = resolveElement(target);

    if (!element || typeof activate !== 'function') {
      return null;
    }

    element.tabIndex = 0;
    element.setAttribute('role', 'link');

    element.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      activate(event);
    });

    return element;
  }

  global.weiyiAssets = {
    buildAssetPath: buildAssetPath,
    buildImagePath: buildImagePath,
    buildImageFileName: buildImageFileName,
    loadNamedImages: loadNamedImages,
    loadSequentialImages: loadSequentialImages,
    padNumber: padNumber,
    probeImage: probeImage
  };

  global.weiyiSite = {
    buildProductUrl: buildProductUrl,
    clearElement: clearElement,
    getFeaturedProducts: getFeaturedProducts,
    getPageContent: getPageContent,
    getProductById: getProductById,
    getProductCatalog: getProductCatalog,
    getProductEntries: getProductEntries,
    getProductLink: getProductLink,
    getRelatedProducts: getRelatedProducts,
    makePressableCard: makePressableCard,
    getSharedContent: getSharedContent,
    renderFooter: renderFooter,
    renderHeader: renderHeader,
    renderXhsStrip: renderXhsStrip,
    setDocumentTitle: setDocumentTitle,
    setLines: setLines,
    setParagraphWithBreaks: setParagraphWithBreaks,
    setText: setText
  };
})(window);
