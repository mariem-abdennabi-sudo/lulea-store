
  // Products data
  const products = [
    {
      cat: 'CLO3D Course', name: 'دليل CLO3D الشامل للمبتدئين',
      desc: 'كورس PDF شامل يأخذك من الصفر إلى الاحتراف في استخدام CLO3D لمحاكاة الملابس ثلاثية الأبعاد. يشمل كل الأدوات الأساسية والتقنيات المتقدمة مع أمثلة عملية لكل درس.',
      price: '29', bg: 'p1',
      includes: ['90+ صفحة تعليمية', 'مشاريع تطبيقية', 'شرح بالصور التفصيلية', 'تحديثات مجانية', 'دعم عبر الإيميل']
    },
    {
      cat: 'Pattern Making', name: 'باترون البلوزة الكلاسيكية A4',
      desc: 'باترون احترافي للبلوزة الكلاسيكية بمقاسات متعددة، مصمم للطباعة المباشرة على ورق A4. يشمل إرشادات تفصيلية للقص والخياطة.',
      price: '12', bg: 'p2',
      includes: ['مقاسات S, M, L, XL', 'ملفات PDF جاهزة للطباعة', 'تعليمات القص والخياطة', 'بدل الخياطة مضمّنة']
    },
    {
      cat: 'Fashion Illustration', name: 'دليل رسم فيجر الأزياء',
      desc: 'دليل شامل من 40 صفحة لتعلم رسم الجسم الأنثوي والذكوري بالتناسبات الصحيحة لعالم الموضة، مع تقنيات إضافة الملابس والإكسسوارات.',
      price: '18', bg: 'p3',
      includes: ['40 صفحة تعليمية', 'تمارين تدريجية', 'نسب الجسم الصحيحة', 'تقنيات التظليل', 'أمثلة ملوّنة']
    },
    {
      cat: 'Gerber AccuMark', name: 'Gerber AccuMark من الصفر',
      desc: 'تعلم بناء الباترونات الرقمية الاحترافية باستخدام Gerber AccuMark، من أدوات الرسم الأساسية إلى تدرج المقاسات التلقائي.',
      price: '35', bg: 'p4',
      includes: ['80+ صفحة', 'خطوات مفصّلة بالصور', 'تدرج المقاسات', 'التصدير والطباعة', 'دعم مباشر 30 يوماً']
    },
    {
      cat: 'Pattern Making', name: 'باترون الفستان الأساسي',
      desc: 'باترون أساسي للفستان بمقاسات أوروبية كاملة من 36 إلى 48، مع تعليمات تفصيلية لتعديل المقاس والتطبيق.',
      price: '15', bg: 'p5',
      includes: ['مقاسات 36 إلى 48', 'تعليمات التعديل', 'ملفات A4 + A0', 'مخطط المقاسات']
    },
    {
      cat: 'Color & Fabric', name: 'دليل نظرية الألوان للموضة',
      desc: 'دليل متكامل لفهم عجلة الألوان وكيفية بناء لوحات ألوان متناسقة لكل تصميم، مع فصل خاص باختيار الأقمشة المناسبة.',
      price: '14', bg: 'p6',
      includes: ['35 صفحة', 'لوحات ألوان جاهزة', 'دليل الأقمشة', 'أمثلة من بيوت أزياء عالمية']
    },
    {
      cat: 'CLO3D Advanced', name: 'تقنيات CLO3D المتقدمة',
      desc: 'للمن يمتلك الأساسيات — تعلم إنشاء الأنيميشن، التفاصيل الدقيقة للخياطة، وتصدير الملفات بجودة احترافية لعرض التصاميم.',
      price: '42', bg: 'p7',
      includes: ['60+ صفحة', 'تقنيات الأنيميشن', 'التصدير الاحترافي', 'مشاريع كاملة', 'تحديثات مدى الحياة']
    },
    {
      cat: 'Pattern Grading', name: 'دليل تدرج المقاسات',
      desc: 'تعلم أسرار تدرج الباترونات (Pattern Grading) بشكل صحيح ومتناسق انطلاقاً من مقاس أساسي واحد إلى مجموعة كاملة من المقاسات.',
      price: '20', bg: 'p8',
      includes: ['50 صفحة', 'جداول التدرج القياسية', 'أمثلة للقمص والفساتين', 'باترون تدريبي مرفق']
    }
  ];

  let cartCount = 0;

  function addToCart(e) {
    e.stopPropagation();
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    showToast('✓ تمت الإضافة إلى السلة');
  }

  function buyNow() {
    showToast('🔒 جاري الانتقال لصفحة الدفع...');
    setTimeout(() => closeModal(), 1500);
  }

  function toggleCart() {
    showToast(`السلة تحتوي على ${cartCount} منتج`);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  function openModal(idx) {
    const p = products[idx];
    const colors = ['#2C2420','#1C2430','#1A2420','#241828','#2A1C10','#141428','#1A2814','#281414'];
    document.getElementById('modalHeader').style.background = `linear-gradient(135deg, ${colors[idx]}, ${colors[(idx+3)%8]})`;
    document.getElementById('modalCat').textContent = p.cat;
    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modalPrice').textContent = p.price;
    document.getElementById('modalIncludes').innerHTML = p.includes.map(i => `<div class="modal-include-item">${i}</div>`).join('');
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
  }

  function closeModalOutside(e) {
    if (e.target === document.getElementById('productModal')) closeModal();
  }

  function filterTab(btn, cat) {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    filterProducts(cat);
  }

  function filterProducts(cat) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
        card.style.animation = 'fadeUp 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function subscribeEmail() {
    const email = document.getElementById('emailInput').value;
    if (!email || !email.includes('@')) { showToast('⚠ أدخلي بريداً إلكترونياً صحيحاً'); return; }
    showToast('✨ شكراً لتسجيلك في القائمة البريدية!');
    document.getElementById('emailInput').value = '';
  }

  // ── Mobile Navigation ──
  function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('mobileNavOverlay');

    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  }

  // Close mobile nav when clicking a nav link
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('open')) {
          toggleMobileNav();
        }
      });
    });
  });

  // Auto-close mobile nav on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.getElementById('hamburgerBtn');
      const overlay = document.getElementById('mobileNavOverlay');
      if (navLinks) navLinks.classList.remove('open');
      if (hamburger) hamburger.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ── Scroll Reveal Animations ──
  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Run once
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  });
