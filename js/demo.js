/**
 * AI 外贸增长引擎 · 业务流程演示
 * 编排 10 个屏幕的动画时间线
 */

(function () {
  'use strict';

  // ===================================================================
  // STEP DEFINITIONS
  // ===================================================================
  const STEPS = [
    {
      id: 0,
      screen: 0,
      duration: 3500,
      stepLabel: '第 0 步 / 9',
      explTitle: '正在启动<br><em>AI 外贸引擎</em>',
      explText: '一台 Wi-Fi · 一杯咖啡 · 90 秒之内，看 AI 怎么帮你打通一个储能客户。',
      explTag: '⏱ 90 秒动画演示',
      sideTitle: '— 演示数据',
      sideStat: '47 <small>家</small>',
      sideDesc: '基于真实"巴基斯坦商业储能 EPC"场景模拟。所有客户名 / 信号 / 邮件正文均为真实参考。',
      sideSplit: '<strong style="color:white;">点击"暂停"</strong>可在任意环节停下来仔细看；<strong style="color:var(--amber);">"下一步"</strong>可手动跳转。',
      darkStatus: true,
    },
    {
      id: 1,
      screen: 1,
      duration: 9000,
      stepLabel: '第 1 步 / 9',
      explTitle: '首次配置<br><em>产品大脑就绪</em>',
      explText: '业务员第一次使用，把产品资料 / 客户案例 / 差异化卖点 / 公司资料一次性告诉系统 — 之后 AI 写每封信都基于这些"事实源"。',
      explTag: '⏱ 一次性 · 10-15 分钟',
      sideTitle: '— 此刻 AI 在做',
      sideStat: '📦 <small>4/4</small>',
      sideDesc: '把产品资料结构化 + 向量化 + 写入 brain/products/，作为之后 AI 写信的"事实源"。一次配置，永久使用。',
      sideSplit: '<strong style="color:white;">你做：</strong>提供产品资料（一次性）<br><br><strong style="color:var(--amber);">AI 做：</strong>结构化 + 永久记忆 + 之后自动调用',
      darkStatus: false,
      onEnter: animateSetup,
    },
    {
      id: 2,
      screen: 2,
      duration: 8500,
      stepLabel: '第 2 步 / 9',
      explTitle: '定义 ICP<br><em>这次打谁</em>',
      explText: '不需要你提供客户名单。只用大白话告诉 AI："要打谁、卖点是什么"。AI 自己解析。',
      explTag: '⏱ 30 秒输入',
      sideTitle: '— 此刻 AI 在做',
      sideStat: 'NLP <small>解析</small>',
      sideDesc: '把你的话拆成"国家 / 行业 / 公司类型 / 规模 / 卖点"5 个维度，自动推荐切入点。',
      sideSplit: '<strong style="color:white;">你做：</strong>说一句话（30 秒）<br><br><strong style="color:var(--amber);">AI 做：</strong>解析、推荐卖点、准备扫描',
      darkStatus: false,
      onEnter: animateICP,
    },
    {
      id: 3,
      screen: 3,
      duration: 9500,
      stepLabel: '第 3 步 / 9',
      explTitle: 'Hunter 雷达<br><em>全网扫客户</em>',
      explText: '4 个数据源同时扫 — Apollo、LinkedIn、Crunchbase、行业展会。重点不是"找得多"，是<strong>找得准</strong>，优先排出有"买入信号"的公司。',
      explTag: '⏱ 自动 · 10 分钟',
      sideTitle: '— 此刻 AI 在做',
      sideStat: '50<small>+/分钟</small>',
      sideDesc: '4 数据源并行 · 每分钟扫描 50+ 家公司。每家公司打"匹配分"和"信号强度"。',
      sideSplit: '<strong style="color:white;">你做：</strong>等（喝个咖啡）<br><br><strong style="color:var(--amber);">AI 做：</strong>4 源并行扫描 + 评分 + 排序',
      darkStatus: false,
      onEnter: animateHunter,
    },
    {
      id: 4,
      screen: 4,
      duration: 8000,
      stepLabel: '第 4 步 / 9',
      explTitle: '高匹配客户<br><em>47 家公司</em>',
      explText: 'AI 按意向分排序，<strong>买入信号</strong>最强的公司排在最前 — 比如"刚拿到融资"、"刚中标项目"、"官网招中国供应商"。',
      explTag: '⏱ 实时刷新',
      sideTitle: '— 此刻 AI 在做',
      sideStat: '92 <small>分</small>',
      sideDesc: 'Solar Edge Pakistan 排第 1 — 上月中标 12MWh、CEO LinkedIn 公开谈中国供应商、招采购总监。三重信号。',
      sideSplit: '<strong style="color:white;">你做：</strong>挑 1 家想看的<br><br><strong style="color:var(--amber);">AI 做：</strong>每家公司一份独立档案，等你点开',
      darkStatus: false,
      onEnter: animateCompanies,
    },
    {
      id: 5,
      screen: 5,
      duration: 11000,
      stepLabel: '第 5 步 / 9',
      explTitle: 'Profiler 档案<br><em>作战 brief</em>',
      explText: '不是 Excel 表格 — 是像内部销售总监给你准备的 brief。打开就知道"这家客户该怎么聊"。',
      explTag: '⏱ 30 秒/家',
      sideTitle: '— 此刻 AI 在做',
      sideStat: '30<small>+维度</small>',
      sideDesc: '抓官网 + LinkedIn + 行业新闻 + 招聘动态 + 财务公开数据 → 写成一页人话档案。',
      sideSplit: '<strong style="color:white;">你看：</strong>决策人 + 痛点 + 切入点<br><br><strong style="color:var(--amber);">AI 准备：</strong>下一步开发信的"事实源"',
      darkStatus: false,
      onEnter: animateProfile,
    },
    {
      id: 6,
      screen: 6,
      duration: 14000,
      stepLabel: '第 6 步 / 9',
      explTitle: 'Writer 写信<br><em>不是模板</em>',
      explText: '每封信都引用客户<strong>独有</strong>的事实 — 公司名、上月项目、当前供应商、痛点。让客户读起来感觉"是认真研究过我们才写的"。',
      explTag: '⏱ 5 秒/封 · 3 个版本',
      sideTitle: '— 此刻 AI 在做',
      sideStat: '3<small>版本</small>',
      sideDesc: '同一个客户生成 3 个角度（短/长/痛点切入），让你挑最合适的。AI 默认用"刻意降级"语气，避开 AI 痕迹。',
      sideSplit: '<strong style="color:white;">你做：</strong>扫一眼，30 秒决定<br><br><strong style="color:var(--amber);">AI 做：</strong>定制写信 + 多版本 + A/B 学习',
      darkStatus: false,
      onEnter: animateEmail,
    },
    {
      id: 7,
      screen: 7,
      duration: 4500,
      stepLabel: '第 7 步 / 9',
      explTitle: '你审批 → 发送<br><em>人在控制</em>',
      explText: 'AI 不擅自发邮件。每一封信都需要你点"发送"。这是"人始终在回路"的纪律。',
      explTag: '⏱ 30 秒/封',
      sideTitle: '— 投递保障',
      sideStat: '95<small>%</small>',
      sideDesc: 'SPF / DKIM / DMARC 全配，进收件箱率 ≥ 95%。AI 自动避开"AI 痕迹"+ 控制发送速率。',
      sideSplit: '<strong style="color:white;">你做：</strong>点"发送"<br><br><strong style="color:var(--amber);">AI 做：</strong>校验签名 + 发送 + 跟踪打开/点击/回复',
      darkStatus: false,
    },
    {
      id: 8,
      screen: 8,
      duration: 9500,
      stepLabel: '第 8 步 / 9',
      explTitle: 'Outreach 跟进<br><em>14 天剧本</em>',
      explText: '客户不回首封？AI 不让线索"凉掉"。第 5 天不同角度跟进、第 10 天切 LinkedIn、第 12 天客户回复 — 全程不需要你管。',
      explTag: '⏱ 自动跑 14 天',
      sideTitle: '— 跟进策略',
      sideStat: 'D0/D5/D10',
      sideDesc: '不是简单"Just following up" — 每次跟进 AI 切不同角度（提供资料、引用客户新动态、问开放问题）。',
      sideSplit: '<strong style="color:white;">你做：</strong>什么都不做<br><br><strong style="color:var(--amber);">AI 做：</strong>自动跟进 + 切渠道 + 触发"该回复了"提醒',
      darkStatus: false,
      onEnter: animateTracking,
    },
    {
      id: 9,
      screen: 9,
      duration: 11000,
      stepLabel: '第 9 步 / 9',
      explTitle: 'Closer 处理回复<br><em>0.8 秒起草</em>',
      explText: '客户凌晨 3 点回邮件？AI 立刻分析意图 + 起草回复，<strong>等你 8 点起床，回复已经准备好</strong>。常规问题 AI 自答，敏感问题（报价/合同）转你接管。',
      explTag: '⏱ 即时响应',
      sideTitle: '— 此刻 AI 在做',
      sideStat: '0.8<small>秒</small>',
      sideDesc: '意图分类 → 检索历史对话 + brain 记忆 → 生成回复初稿。涉及报价、合同的关键节点自动转人工。',
      sideSplit: '<strong style="color:white;">你做：</strong>30 秒决定"用这版" or "改"<br><br><strong style="color:var(--amber);">AI 做：</strong>分析 + 起草 + 自动接 Calendly',
      darkStatus: false,
      onEnter: animateReply,
    },
    {
      id: 10,
      screen: 10,
      duration: 6000,
      stepLabel: '完成 ✓',
      explTitle: '会议已约定<br><em>12 天 · 1 个客户</em>',
      explText: '从陌生到约见，全程 12 天 · 业务员投入时间 < 30 分钟（其他全是 AI 自动）。<strong>这就是"增长引擎"的真正含义。</strong>',
      explTag: '✓ 演示结束',
      sideTitle: '— 真实业务对照',
      sideStat: '21<small>天</small>',
      sideDesc: '21 天 MVP 北极星目标：约到 ≥ 2 个真实会议。本演示场景预计实现 100%。',
      sideSplit: '<strong style="color:white;">演示结束</strong><br><br>真实业务里：<br>· 业务员每天审批 50 封 + 处理 5 个回复<br>· 一周覆盖 500-1000 客户<br>· 回复率 5-15%',
      darkStatus: false,
    },
  ];

  // Total duration for progress calc
  const TOTAL_DURATION = STEPS.reduce((s, x) => s + x.duration, 0);
  let cumulativeOffsets = [];
  let acc = 0;
  STEPS.forEach((s) => {
    cumulativeOffsets.push(acc);
    acc += s.duration;
  });

  // ===================================================================
  // STATE
  // ===================================================================
  let currentStep = 0;
  let isPlaying = false;
  let stepTimer = null;
  let progressTimer = null;
  let stepStartTime = 0;
  let elapsedBefore = 0;

  // ===================================================================
  // DOM ELEMENTS
  // ===================================================================
  const $ = (id) => document.getElementById(id);
  const els = {
    expStep: $('exp-step'),
    expTitle: $('exp-title'),
    expText: $('explainer-text') || document.querySelector('.explainer-text'),
    expTag: document.querySelector('.explainer-tag'),
    sideStat: $('side-stat'),
    sideDesc: $('side-desc'),
    sideSplit: $('side-split'),
    statusBar: $('status-bar'),
    stepNum: $('step-num'),
    stepDots: $('step-dots'),
    progressFill: $('progress-fill'),
    progressTime: $('progress-time'),
    playPauseBtn: $('play-pause-btn'),
    prevBtn: $('prev-btn'),
    nextBtn: $('next-btn'),
    restartBtn: $('restart-btn'),
    startOverlay: $('start-overlay'),
    startBtn: $('start-btn'),
  };
  const screens = document.querySelectorAll('.screen');
  const sideCards = document.querySelectorAll('.side-info-card .label');

  // ===================================================================
  // STEP TRANSITIONS
  // ===================================================================
  function showStep(idx) {
    if (idx < 0 || idx >= STEPS.length) return;
    currentStep = idx;
    const step = STEPS[idx];

    // Switch screen
    screens.forEach((sc) => sc.classList.remove('active'));
    const targetScreen = document.querySelector(`.screen[data-screen="${step.screen}"]`);
    if (targetScreen) targetScreen.classList.add('active');

    // Update explainer
    els.expStep.textContent = step.stepLabel;
    els.expTitle.innerHTML = step.explTitle;
    document.querySelector('.explainer-text').innerHTML = step.explText;
    els.expTag.textContent = step.explTag;

    // Update side info
    els.sideStat.innerHTML = step.sideStat;
    els.sideDesc.textContent = step.sideDesc;
    els.sideSplit.innerHTML = step.sideSplit;
    sideCards[0].textContent = step.sideTitle;

    // Status bar style
    els.statusBar.classList.toggle('dark', !!step.darkStatus);
    document.querySelector('.home-indicator').classList.toggle('dark', !!step.darkStatus);

    // Step indicator
    els.stepNum.textContent = step.stepLabel;
    document.querySelectorAll('.step-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
      d.classList.toggle('done', i < idx);
    });

    // Reset any previous animations (idempotent)
    resetAllAnimations();

    // Trigger step-specific animation
    if (step.onEnter) {
      setTimeout(() => step.onEnter(), 200);
    }
  }

  function resetAllAnimations() {
    // Reset setup items
    document.querySelectorAll('.setup-item').forEach((el) => el.classList.remove('done', 'loading'));
    const sumEl = $('setup-summary');
    if (sumEl) sumEl.classList.remove('show');

    // Reset ICP typed text
    const icpTyped = $('icp-typed');
    if (icpTyped) icpTyped.textContent = '';
    document.querySelectorAll('.field-chip').forEach((c) => c.classList.remove('show', 'selected'));
    const ctaBtn = $('campaign-cta');
    if (ctaBtn) ctaBtn.classList.remove('ready', 'clicked');

    // Reset scan
    const scanCounter = $('scan-counter');
    if (scanCounter) scanCounter.textContent = '0';
    document.querySelectorAll('.scan-source').forEach((s) => s.classList.remove('active'));

    // Reset companies
    document.querySelectorAll('.company-card').forEach((c) => c.classList.remove('show', 'tapped'));

    // Reset profile
    document.querySelectorAll('.profile-section').forEach((s) => s.classList.remove('in'));

    // Reset email
    const subj = $('email-subject');
    const cont = $('email-content');
    if (subj) subj.innerHTML = '';
    if (cont) cont.innerHTML = '';
    const sendBtn = $('send-btn');
    if (sendBtn) sendBtn.classList.remove('tapped');

    // Reset tracking
    document.querySelectorAll('.tracking-item').forEach((t) => t.classList.remove('fired'));

    // Reset reply
    const aiDraft = $('ai-draft-text');
    if (aiDraft) aiDraft.textContent = '';
  }

  // ===================================================================
  // STEP-SPECIFIC ANIMATIONS
  // ===================================================================

  function animateSetup() {
    const items = document.querySelectorAll('.setup-item');
    const summary = $('setup-summary');
    items.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('loading');
      }, 600 + i * 1200);
      setTimeout(() => {
        item.classList.remove('loading');
        item.classList.add('done');
      }, 1200 + i * 1200);
    });
    setTimeout(() => summary && summary.classList.add('show'), 6000);
  }

  function animateICP() {
    const text = '巴基斯坦商业储能 EPC + Installer · 10kWh-1MWh · 卖点：交期短 + 本地售后';
    const target = $('icp-typed');
    typeWriter(target, text, 50, () => {
      // Show chips
      const chips = document.querySelectorAll('.field-chip');
      chips.forEach((c, i) => {
        setTimeout(() => c.classList.add('show'), i * 150);
      });
      // Select first 2 chips
      setTimeout(() => chips[0] && chips[0].classList.add('selected'), 800);
      setTimeout(() => chips[1] && chips[1].classList.add('selected'), 1200);
      // Show CTA button
      setTimeout(() => $('campaign-cta').classList.add('ready'), 1700);
      // Auto click
      setTimeout(() => $('campaign-cta').classList.add('clicked'), 2900);
    });
  }

  function animateHunter() {
    const counter = $('scan-counter');
    let target = 47;
    let cur = 0;
    const totalMs = 6500;
    const steps = 47;
    const stepMs = totalMs / steps;
    const interval = setInterval(() => {
      cur++;
      if (cur > target) {
        clearInterval(interval);
        return;
      }
      counter.textContent = cur;
    }, stepMs);

    // Light up sources sequentially
    const sources = document.querySelectorAll('.scan-source');
    sources.forEach((src, i) => {
      setTimeout(() => {
        src.classList.add('active');
        src.querySelector('.scan-source-status').textContent = '✓ 完成';
      }, 1000 + i * 1500);
    });
  }

  function animateCompanies() {
    const cards = document.querySelectorAll('.company-card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('show'), 200 + i * 350);
    });
    // Tap on first one (preview)
    setTimeout(() => cards[0] && cards[0].classList.add('tapped'), 6500);
  }

  function animateProfile() {
    const secs = document.querySelectorAll('.profile-section');
    secs.forEach((sec, i) => {
      setTimeout(() => sec.classList.add('in'), 400 + i * 1500);
    });
  }

  function animateEmail() {
    const subj = $('email-subject');
    const cont = $('email-content');
    const sendBtn = $('send-btn');

    const subjectText = 'Solar Edge × 12MWh Karachi 项目 · 中国 LFP 方案';
    const bodyHTML = `Hi <span class="pii">Ali</span>,

看到 <span class="pii">Solar Edge 上月在 Karachi 中标的 12MWh 项目</span> — 恭喜！

我注意到你们目前用的是 <span class="pii">BYD 方案</span>。我们同等容量的 LFP 储能：

• 交期短 30 天（vs BYD 90 天）
• <span class="pii">巴基斯坦本地售后</span>（你们 LinkedIn 提过的痛点）
• 5 年质保 · IEC 61727 认证齐全

附 Karachi 项目参考方案 PDF。下周 15 分钟通话？

Wei`;

    typeWriter(subj, subjectText, 35, () => {
      typeWriterHTML(cont, bodyHTML, 22, () => {
        setTimeout(() => sendBtn.classList.add('tapped'), 1500);
      });
    });
  }

  function animateTracking() {
    const items = document.querySelectorAll('.tracking-item');
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('fired'), 600 + i * 2000);
    });
  }

  function animateReply() {
    const draftText = `Hi Ali,

Thanks for the quick reply.

500 单位的报价 — 已让我们 sales team 准备详细 quote，<strong>明天下午前发你</strong>。

巴基斯坦电网 IEC 61727 认证我们已经有，附测试报告。

下周想 Zoom 30 分钟，深入聊认证 + 交付节奏 — 你方便周四 10:00 PKT？

Wei`;

    setTimeout(() => {
      typeWriter($('ai-draft-text'), draftText, 30);
    }, 2500);
  }

  // ===================================================================
  // TYPEWRITER UTILITIES
  // ===================================================================
  function typeWriter(el, text, speed, done) {
    el.textContent = '';
    let i = 0;
    const tick = () => {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(tick, speed);
      } else if (done) {
        done();
      }
    };
    tick();
  }

  // Type out HTML (preserves <span> tags, types text content)
  function typeWriterHTML(el, html, speed, done) {
    // Parse HTML to text+tag structure
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const fullText = tmp.textContent;
    el.innerHTML = '';
    let i = 0;
    const tick = () => {
      if (i <= fullText.length) {
        // Build partial HTML
        let displayText = fullText.slice(0, i);
        // Reapply highlight by matching text positions
        let result = html;
        // Only show partial — for simplicity, just animate plain text first
        // then swap in the styled version at the end
        if (i < fullText.length) {
          el.textContent = displayText;
        } else {
          el.innerHTML = html;
        }
        i++;
        setTimeout(tick, speed);
      } else if (done) {
        done();
      }
    };
    tick();
  }

  // ===================================================================
  // PLAYBACK CONTROL
  // ===================================================================
  function play() {
    if (currentStep >= STEPS.length - 1) {
      // Auto-restart from beginning if at end
      currentStep = 0;
      showStep(0);
    }
    isPlaying = true;
    els.playPauseBtn.textContent = '⏸ 暂停';
    stepStartTime = Date.now();
    elapsedBefore = cumulativeOffsets[currentStep];
    scheduleNext();
    startProgressTimer();
  }

  function pause() {
    isPlaying = false;
    els.playPauseBtn.textContent = '▶ 继续';
    if (stepTimer) clearTimeout(stepTimer);
    if (progressTimer) {
      cancelAnimationFrame(progressTimer);
      progressTimer = null;
    }
  }

  function scheduleNext() {
    if (stepTimer) clearTimeout(stepTimer);
    const dur = STEPS[currentStep].duration;
    stepTimer = setTimeout(() => {
      if (currentStep < STEPS.length - 1) {
        currentStep++;
        showStep(currentStep);
        stepStartTime = Date.now();
        elapsedBefore = cumulativeOffsets[currentStep];
        scheduleNext();
      } else {
        pause();
      }
    }, dur);
  }

  function startProgressTimer() {
    const update = () => {
      if (!isPlaying) return;
      const elapsed = Date.now() - stepStartTime + elapsedBefore;
      const pct = Math.min(100, (elapsed / TOTAL_DURATION) * 100);
      els.progressFill.style.width = pct + '%';
      els.progressTime.textContent = formatTime(elapsed) + ' / ' + formatTime(TOTAL_DURATION);
      progressTimer = requestAnimationFrame(update);
    };
    update();
  }

  function formatTime(ms) {
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60).toString().padStart(2, '0');
    const s = (total % 60).toString().padStart(2, '0');
    return m + ':' + s;
  }

  function next() {
    if (currentStep < STEPS.length - 1) {
      pause();
      currentStep++;
      showStep(currentStep);
      // Update progress
      els.progressFill.style.width = ((cumulativeOffsets[currentStep] / TOTAL_DURATION) * 100) + '%';
      els.progressTime.textContent = formatTime(cumulativeOffsets[currentStep]) + ' / ' + formatTime(TOTAL_DURATION);
    }
  }

  function prev() {
    if (currentStep > 0) {
      pause();
      currentStep--;
      showStep(currentStep);
      els.progressFill.style.width = ((cumulativeOffsets[currentStep] / TOTAL_DURATION) * 100) + '%';
      els.progressTime.textContent = formatTime(cumulativeOffsets[currentStep]) + ' / ' + formatTime(TOTAL_DURATION);
    }
  }

  function restart() {
    pause();
    currentStep = 0;
    showStep(0);
    els.progressFill.style.width = '0%';
    els.progressTime.textContent = '00:00 / ' + formatTime(TOTAL_DURATION);
    setTimeout(play, 400);
  }

  // ===================================================================
  // INIT
  // ===================================================================
  function init() {
    // Set initial total time display
    els.progressTime.textContent = '00:00 / ' + formatTime(TOTAL_DURATION);

    // Show step 0 immediately (splash)
    showStep(0);

    // Start button
    els.startBtn.addEventListener('click', () => {
      els.startOverlay.classList.add('hidden');
      setTimeout(play, 600);
    });

    // Controls
    els.playPauseBtn.addEventListener('click', () => {
      if (isPlaying) pause();
      else play();
    });
    els.prevBtn.addEventListener('click', prev);
    els.nextBtn.addEventListener('click', next);
    els.restartBtn.addEventListener('click', restart);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        if (isPlaying) pause(); else play();
      } else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'r' || e.key === 'R') restart();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
