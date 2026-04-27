/**
 * AI 外贸增长引擎 · 内部作战图
 * 主交互脚本
 *
 * 功能：
 *   1. TOC 点击平滑滚动到对应章节（兼容 iframe / 预览环境）
 *   2. 当前可见章节自动高亮 TOC（IntersectionObserver）
 *   3. 顶部滚动进度条
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------
  // 1. TOC 点击 → 平滑滚动到章节
  //    覆盖 iframe / 预览面板里 hash 跳转失败的情况
  // ---------------------------------------------------------------------
  const tocItems = document.querySelectorAll('.toc-item[href^="#"]');

  tocItems.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // 强制平滑滚动到目标 section 顶部
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // 同步 URL hash（不触发页面跳转）
      if (history.pushState) {
        history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }
    });
  });

  // ---------------------------------------------------------------------
  // 2. 当前章节高亮 TOC
  //    使用 IntersectionObserver 监听 section 可见性
  // ---------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id^="s"]');
  const navMap = new Map();
  tocItems.forEach(function (link) {
    const id = link.getAttribute('href').slice(1);
    navMap.set(id, link);
  });

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          const id = entry.target.getAttribute('id');
          const link = navMap.get(id);
          if (!link) return;
          if (entry.isIntersecting) {
            // 清除其他 active
            tocItems.forEach(function (l) { l.classList.remove('active'); });
            link.classList.add('active');
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  // ---------------------------------------------------------------------
  // 3. 顶部滚动进度条
  // ---------------------------------------------------------------------
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  let ticking = false;
  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = percent + '%';
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    function () {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateProgress();
})();
