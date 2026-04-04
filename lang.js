// ===== Multi-Language System =====
const translations = {
  ar: {
    // Nav
    navProducts: 'المنتجات',
    navAbout: 'من أنا',
    navHow: 'كيف تشتري',
    navContact: 'التواصل',
    navCart: 'السلة',

    // Hero
    heroTag: 'تصميم رقمي · Fashion Design',
    heroTitle: 'فن التصميم<br><em>في متناول يدك</em>',
    heroSubtitle: 'باترونات احترافية، كورسات CLO3D وGerber، وأدلة تعليمية متخصصة — كل شيء تحتاجه لتطوير مهاراتك في عالم الموضة الرقمية.',
    heroCta: 'تصفح المنتجات',
    heroGhost: 'اعرف أكثر',
    statClients: 'عميل',
    statProducts: 'منتج PDF',
    statRating: 'تقييم',

    // Categories
    catSectionTag: 'ما الذي تبحث عنه؟',
    catSectionTitle: 'تصفح <em>حسب الفئة</em>',
    catPatterns: 'باترونات<br>وأنماط',
    catCourses: 'كورسات<br>CLO3D & Gerber',
    catGuides: 'أدلة الرسم<br>والإيلسترشن',
    catPatternsCount: '5 منتجات متاحة',
    catCoursesCount: '6 كورسات متاحة',
    catGuidesCount: '4 أدلة متاحة',

    // Products
    prodSectionTag: 'المنتجات الرقمية',
    prodSectionTitle: 'مكتبة <em>التصميم</em>',
    filterAll: 'الكل',
    filterPatterns: 'باترونات',
    filterCourses: 'كورسات',
    filterGuides: 'أدلة',

    // Product cards
    bestSeller: 'الأكثر مبيعاً',
    newBadge: 'جديد',
    quickAdd: 'أضف إلى السلة',

    // Modal
    modalIncludes: 'ماذا يشمل هذا المنتج؟',
    modalAddCart: 'أضف للسلة',
    modalBuyNow: 'اشتري الآن ↓',

    // Toast
    toastAdded: '✓ تمت الإضافة إلى السلة',
    toastBuy: '🔒 جاري الانتقال لصفحة الدفع...',
    toastCartCount: 'السلة تحتوي على {count} منتج',
    toastEmailError: '⚠ أدخلي بريداً إلكترونياً صحيحاً',
    toastEmailSuccess: '✨ شكراً لتسجيلك في القائمة البريدية!',

    // Newsletter
    nlTitle: 'كوني أول من <em>يعلم</em>',
    nlDesc: 'اشتركي في القائمة البريدية للحصول على منتجات جديدة وعروض حصرية',
    nlPlaceholder: 'بريدك الإلكتروني...',
    nlButton: 'اشترك',

    // About
    aboutIntro: 'Designer & Educator',
    aboutTitle: 'من أنا؟<br><em>مريم عبدالنبي</em>',
    aboutText: 'مصممة أزياء متخصصة في التصميم الرقمي وبناء الباترونات. أجمع بين الأسلوب التقليدي في تصميم الملابس والتقنيات الحديثة لـ CLO3D وGerber AccuMark، وأشاركك خلاصة خبرتي عبر محتوى تعليمي عالي الجودة.',
    aboutTagFloat: '<strong>4.9★</strong>تقييم من +120 عميل',
    aboutBtn: 'اكتشف المنتجات',

    // How it works
    howTag: 'بسيط وسريع',
    howTitle: 'كيف <em>تشتري؟</em>',
    step1num: '١', step1title: 'اختر منتجك', step1desc: 'تصفح المنتجات واختر الباترون أو الكورس الذي يناسبك',
    step2num: '٢', step2title: 'أضفه للسلة', step2desc: 'انقر على "إضافة إلى السلة" ثم اذهب إلى صفحة الدفع',
    step3num: '٣', step3title: 'أكمل الدفع', step3desc: 'ادفع بأمان عبر PayPal أو بطاقة بنكية — العملية تستغرق دقيقة',
    step4num: '٤', step4title: 'حمّل فوراً', step4desc: 'تصلك رسالة بريد برابط تحميل PDF مباشرة بعد الدفع',

    // Testimonials
    testTag: 'آراء العملاء',
    testTitle: 'ماذا <em>يقولون؟</em>',
    test1text: 'دليل CLO3D غيّر طريقة عملي كلياً. واضح، منظم، ومليء بالأمثلة العملية. أنصح به كل مبتدئ.',
    test1author: 'سارة بن علي', test1country: 'تونس',
    test2text: 'اشتريت باترون الفستان وتمكنت من تطبيقه بسهولة. الشرح دقيق جداً والمقاسات صحيحة 100%.',
    test2author: 'نور الهدى مسعود', test2country: 'الجزائر',
    test3text: 'كورس Gerber أفضل استثمار في مسيرتي المهنية. مريم تشرح بطريقة بسيطة ومفهومة للغاية.',
    test3author: 'إيمان الزهراء', test3country: 'المغرب',

    // Footer
    footerTagline: 'مصممة أزياء رقمية ومعلمة متخصصة في CLO3D وGerber AccuMark.<br>منتجات تعليمية عالية الجودة للمصممين.',
    footerLinks: 'روابط سريعة',
    footerCatTitle: 'الفئات',
    footerContact: 'للتواصل',
    footerCopy: '© 2025 Lulèa · Mariem Abdennabi · جميع الحقوق محفوظة',
    footerRefund: 'سياسة الاسترداد',
    footerPrivacy: 'الخصوصية',
    footerTerms: 'الشروط والأحكام',
    footerCatPatterns: 'باترونات الخياطة',
    footerCatCLO3D: 'كورسات CLO3D',
    footerCatGerber: 'كورسات Gerber',
    footerCatGuides: 'أدلة الرسم',

    // Product card texts
    prodName0: 'دليل CLO3D الشامل للمبتدئين',
    prodDesc0: 'من الصفر إلى المحترف — محاكاة القماش وبناء الملابس ثلاثية الأبعاد',
    prodName1: 'باترون البلوزة الكلاسيكية A4',
    prodDesc1: 'مقاسات S إلى XL — ملفات PDF جاهزة للطباعة',
    prodName2: 'دليل رسم فيجر الأزياء',
    prodDesc2: '40 صفحة تعليمية لرسم الجسم والملابس بالتفصيل',
    prodName3: 'Gerber AccuMark من الصفر',
    prodDesc3: 'تعلم بناء الباترونات الرقمية واستخدام أدوات Gerber الاحترافية',
    prodName4: 'باترون الفستان الأساسي',
    prodDesc4: 'مقاسات كاملة من 36 إلى 48 — مع تعليمات التطبيق',
    prodName5: 'دليل نظرية الألوان للموضة',
    prodDesc5: 'فهم لوحات الألوان واختيار الأقمشة المناسبة لكل تصميم',
    prodName6: 'تقنيات CLO3D المتقدمة',
    prodDesc6: 'الأنيميشن، التفاصيل الدقيقة، وتصدير الملفات الاحترافية',
    prodName7: 'دليل تدرج المقاسات (Grading)',
    prodDesc7: 'أسرار تدرج الباترونات بشكل صحيح من مقاس أساسي واحد',

    // Products data for modals
    products: [
      { name: 'دليل CLO3D الشامل للمبتدئين', desc: 'كورس PDF شامل يأخذك من الصفر إلى الاحتراف في استخدام CLO3D لمحاكاة الملابس ثلاثية الأبعاد.', includes: ['90+ صفحة تعليمية', 'مشاريع تطبيقية', 'شرح بالصور التفصيلية', 'تحديثات مجانية', 'دعم عبر الإيميل'] },
      { name: 'باترون البلوزة الكلاسيكية A4', desc: 'باترون احترافي للبلوزة الكلاسيكية بمقاسات متعددة، مصمم للطباعة المباشرة على ورق A4.', includes: ['مقاسات S, M, L, XL', 'ملفات PDF جاهزة للطباعة', 'تعليمات القص والخياطة', 'بدل الخياطة مضمّنة'] },
      { name: 'دليل رسم فيجر الأزياء', desc: 'دليل شامل من 40 صفحة لتعلم رسم الجسم بالتناسبات الصحيحة لعالم الموضة.', includes: ['40 صفحة تعليمية', 'تمارين تدريجية', 'نسب الجسم الصحيحة', 'تقنيات التظليل', 'أمثلة ملوّنة'] },
      { name: 'Gerber AccuMark من الصفر', desc: 'تعلم بناء الباترونات الرقمية الاحترافية باستخدام Gerber AccuMark.', includes: ['80+ صفحة', 'خطوات مفصّلة بالصور', 'تدرج المقاسات', 'التصدير والطباعة', 'دعم مباشر 30 يوماً'] },
      { name: 'باترون الفستان الأساسي', desc: 'باترون أساسي للفستان بمقاسات أوروبية كاملة من 36 إلى 48.', includes: ['مقاسات 36 إلى 48', 'تعليمات التعديل', 'ملفات A4 + A0', 'مخطط المقاسات'] },
      { name: 'دليل نظرية الألوان للموضة', desc: 'دليل متكامل لفهم عجلة الألوان وبناء لوحات ألوان متناسقة لكل تصميم.', includes: ['35 صفحة', 'لوحات ألوان جاهزة', 'دليل الأقمشة', 'أمثلة من بيوت أزياء عالمية'] },
      { name: 'تقنيات CLO3D المتقدمة', desc: 'تعلم إنشاء الأنيميشن والتفاصيل الدقيقة للخياطة وتصدير الملفات بجودة احترافية.', includes: ['60+ صفحة', 'تقنيات الأنيميشن', 'التصدير الاحترافي', 'مشاريع كاملة', 'تحديثات مدى الحياة'] },
      { name: 'دليل تدرج المقاسات', desc: 'تعلم أسرار تدرج الباترونات بشكل صحيح من مقاس واحد إلى مجموعة كاملة.', includes: ['50 صفحة', 'جداول التدرج القياسية', 'أمثلة للقمص والفساتين', 'باترون تدريبي مرفق'] }
    ]
  },

  en: {
    navProducts: 'Products', navAbout: 'About', navHow: 'How to Buy', navContact: 'Contact', navCart: 'Cart',
    heroTag: 'Digital Design · Fashion Design',
    heroTitle: 'The Art of Design<br><em>At Your Fingertips</em>',
    heroSubtitle: 'Professional patterns, CLO3D & Gerber courses, and specialized guides — everything you need to level up your skills in digital fashion.',
    heroCta: 'Browse Products', heroGhost: 'Learn More',
    statClients: 'Clients', statProducts: 'PDF Products', statRating: 'Rating',

    catSectionTag: 'What are you looking for?',
    catSectionTitle: 'Browse <em>by Category</em>',
    catPatterns: 'Patterns<br>& Templates', catCourses: 'Courses<br>CLO3D & Gerber', catGuides: 'Drawing &<br>Illustration Guides',
    catPatternsCount: '5 products available', catCoursesCount: '6 courses available', catGuidesCount: '4 guides available',

    prodSectionTag: 'Digital Products', prodSectionTitle: 'Design <em>Library</em>',
    filterAll: 'All', filterPatterns: 'Patterns', filterCourses: 'Courses', filterGuides: 'Guides',
    bestSeller: 'Best Seller', newBadge: 'New', quickAdd: 'Add to Cart',

    modalIncludes: 'What\'s Included:', modalAddCart: 'Add to Cart', modalBuyNow: 'Buy Now ↓',
    toastAdded: '✓ Added to cart', toastBuy: '🔒 Redirecting to checkout...', toastCartCount: 'Cart has {count} item(s)',
    toastEmailError: '⚠ Please enter a valid email', toastEmailSuccess: '✨ Thank you for subscribing!',

    nlTitle: 'Be the First <em>to Know</em>', nlDesc: 'Subscribe to our newsletter for free courses, exclusive patterns, and special offers before everyone else.',
    nlPlaceholder: 'Enter your email', nlButton: 'Subscribe Now',

    aboutIntro: 'Designer & Educator',
    aboutTitle: 'Who Am I?<br><em>Mariem Abdennabi</em>',
    aboutText: 'A fashion designer specializing in digital design and pattern making. I combine traditional garment design with modern CLO3D and Gerber AccuMark techniques, sharing my expertise through high-quality educational content.',
    aboutTagFloat: '<strong>4.9★</strong>Rating from 120+ clients',
    aboutBtn: 'Discover Products',

    howTag: 'Simple & Fast', howTitle: 'How to <em>Buy?</em>',
    step1num: '1', step1title: 'Choose Your Product', step1desc: 'Browse our products and pick the pattern or course that suits you',
    step2num: '2', step2title: 'Add to Cart', step2desc: 'Click "Add to Cart" then proceed to the checkout page',
    step3num: '3', step3title: 'Complete Payment', step3desc: 'Pay securely via PayPal or credit card — it takes one minute',
    step4num: '4', step4title: 'Download Instantly', step4desc: 'You\'ll receive an email with a PDF download link right after payment',

    testTag: 'Client Reviews', testTitle: 'What They <em>Say?</em>',
    test1text: 'The CLO3D guide completely changed how I work. Clear, organized, and full of practical examples. I recommend it to every beginner.',
    test1author: 'Sara Ben Ali', test1country: 'Tunisia',
    test2text: 'I bought the dress pattern and was able to apply it easily. The instructions are very precise and the sizes are 100% accurate.',
    test2author: 'Nour El Houda Massoud', test2country: 'Algeria',
    test3text: 'The Gerber course is the best investment in my career. Mariem explains in a simple and clear way.',
    test3author: 'Iman Zahraa', test3country: 'Morocco',

    footerTagline: 'Digital fashion designer and educator specializing in CLO3D and Gerber AccuMark.<br>High-quality educational products for designers.',
    footerLinks: 'Quick Links', footerCatTitle: 'Categories', footerContact: 'Contact Us',
    footerCopy: '© 2025 Lulèa · Mariem Abdennabi · All rights reserved',
    footerRefund: 'Refund Policy', footerPrivacy: 'Privacy', footerTerms: 'Terms & Conditions',
    footerCatPatterns: 'Sewing Patterns', footerCatCLO3D: 'CLO3D Courses', footerCatGerber: 'Gerber Courses', footerCatGuides: 'Drawing Guides',

    prodName0: 'CLO3D Complete Guide for Beginners', prodDesc0: 'From zero to pro — fabric simulation and 3D garment construction',
    prodName1: 'Classic Blouse Pattern A4', prodDesc1: 'Sizes S to XL — print-ready PDF files',
    prodName2: 'Fashion Figure Drawing Guide', prodDesc2: '40 educational pages for drawing the body and garments in detail',
    prodName3: 'Gerber AccuMark from Scratch', prodDesc3: 'Learn to build digital patterns using professional Gerber tools',
    prodName4: 'Basic Dress Pattern', prodDesc4: 'Full sizes from 36 to 48 — with application instructions',
    prodName5: 'Fashion Color Theory Guide', prodDesc5: 'Understand color palettes and choose the right fabrics for each design',
    prodName6: 'Advanced CLO3D Techniques', prodDesc6: 'Animation, fine details, and professional file export',
    prodName7: 'Pattern Grading Guide', prodDesc7: 'Secrets of grading patterns correctly from one base size',

    products: [
      { name: 'CLO3D Complete Guide for Beginners', desc: 'A comprehensive PDF course taking you from zero to pro in CLO3D for 3D garment simulation.', includes: ['90+ educational pages', 'Practical projects', 'Detailed photo tutorials', 'Free updates', 'Email support'] },
      { name: 'Classic Blouse Pattern A4', desc: 'Professional blouse pattern in multiple sizes, designed for direct A4 printing.', includes: ['Sizes S, M, L, XL', 'Print-ready PDF files', 'Cutting & sewing instructions', 'Seam allowances included'] },
      { name: 'Fashion Figure Drawing Guide', desc: 'A 40-page guide to drawing the human body with correct fashion proportions.', includes: ['40 educational pages', 'Progressive exercises', 'Correct body proportions', 'Shading techniques', 'Colored examples'] },
      { name: 'Gerber AccuMark from Scratch', desc: 'Learn to build professional digital patterns using Gerber AccuMark.', includes: ['80+ pages', 'Step-by-step with images', 'Size grading', 'Export & print', '30-day direct support'] },
      { name: 'Basic Dress Pattern', desc: 'Basic dress pattern in full European sizes from 36 to 48.', includes: ['Sizes 36 to 48', 'Alteration instructions', 'A4 + A0 files', 'Size chart'] },
      { name: 'Fashion Color Theory Guide', desc: 'Complete guide to understanding the color wheel and building harmonious palettes.', includes: ['35 pages', 'Ready color palettes', 'Fabric guide', 'Examples from global fashion houses'] },
      { name: 'Advanced CLO3D Techniques', desc: 'Learn animation, fine sewing details, and professional quality file export.', includes: ['60+ pages', 'Animation techniques', 'Professional export', 'Complete projects', 'Lifetime updates'] },
      { name: 'Pattern Grading Guide', desc: 'Master pattern grading from one base size to a complete size range.', includes: ['50 pages', 'Standard grading tables', 'Shirt & dress examples', 'Practice pattern included'] }
    ]
  },

  fr: {
    navProducts: 'Produits', navAbout: 'À propos', navHow: 'Comment acheter', navContact: 'Contact', navCart: 'Panier',
    heroTag: 'Design numérique · Fashion Design',
    heroTitle: 'L\'Art du Design<br><em>À portée de main</em>',
    heroSubtitle: 'Patrons professionnels, cours CLO3D & Gerber, et guides spécialisés — tout ce dont vous avez besoin pour progresser dans la mode numérique.',
    heroCta: 'Parcourir les produits', heroGhost: 'En savoir plus',
    statClients: 'Clients', statProducts: 'Produits PDF', statRating: 'Note',

    catSectionTag: 'Que recherchez-vous ?',
    catSectionTitle: 'Parcourir <em>par catégorie</em>',
    catPatterns: 'Patrons<br>& Modèles', catCourses: 'Cours<br>CLO3D & Gerber', catGuides: 'Guides de<br>dessin & illustration',
    catPatternsCount: '5 produits disponibles', catCoursesCount: '6 cours disponibles', catGuidesCount: '4 guides disponibles',

    prodSectionTag: 'Produits numériques', prodSectionTitle: 'Bibliothèque <em>de design</em>',
    filterAll: 'Tout', filterPatterns: 'Patrons', filterCourses: 'Cours', filterGuides: 'Guides',
    bestSeller: 'Best-seller', newBadge: 'Nouveau', quickAdd: 'Ajouter au panier',

    modalIncludes: 'Ce qui est inclus :', modalAddCart: 'Ajouter au panier', modalBuyNow: 'Acheter maintenant ↓',
    toastAdded: '✓ Ajouté au panier', toastBuy: '🔒 Redirection vers le paiement...', toastCartCount: 'Le panier contient {count} article(s)',
    toastEmailError: '⚠ Veuillez entrer un email valide', toastEmailSuccess: '✨ Merci pour votre inscription !',

    nlTitle: 'Soyez le premier <em>à savoir</em>', nlDesc: 'Abonnez-vous pour des cours gratuits, des patrons exclusifs et des offres spéciales.',
    nlPlaceholder: 'Entrez votre email', nlButton: 'S\'abonner',

    aboutIntro: 'Designer & Éducatrice',
    aboutTitle: 'Qui suis-je ?<br><em>Mariem Abdennabi</em>',
    aboutText: 'Créatrice de mode spécialisée dans le design numérique et la construction de patrons. Je combine les techniques traditionnelles de couture avec les outils modernes CLO3D et Gerber AccuMark, et je partage mon expertise à travers un contenu éducatif de haute qualité.',
    aboutTagFloat: '<strong>4.9★</strong>Note de +120 clients',
    aboutBtn: 'Découvrir les produits',

    howTag: 'Simple & rapide', howTitle: 'Comment <em>acheter ?</em>',
    step1num: '1', step1title: 'Choisissez', step1desc: 'Parcourez les produits et choisissez le patron ou le cours qui vous convient',
    step2num: '2', step2title: 'Ajoutez au panier', step2desc: 'Cliquez sur "Ajouter au panier" puis allez à la page de paiement',
    step3num: '3', step3title: 'Payez en sécurité', step3desc: 'Payez en toute sécurité via PayPal ou carte bancaire — cela prend une minute',
    step4num: '4', step4title: 'Téléchargez', step4desc: 'Vous recevrez un email avec un lien de téléchargement PDF juste après le paiement',

    testTag: 'Avis clients', testTitle: 'Que <em>disent-ils ?</em>',
    test1text: 'Le guide CLO3D a complètement changé ma façon de travailler. Clair, organisé et plein d\'exemples pratiques. Je le recommande à tout débutant.',
    test1author: 'Sara Ben Ali', test1country: 'Tunisie',
    test2text: 'J\'ai acheté le patron de robe et j\'ai pu l\'appliquer facilement. Les instructions sont très précises et les tailles sont 100% exactes.',
    test2author: 'Nour El Houda Massoud', test2country: 'Algérie',
    test3text: 'Le cours Gerber est le meilleur investissement de ma carrière. Mariem explique de manière simple et compréhensible.',
    test3author: 'Iman Zahraa', test3country: 'Maroc',

    footerTagline: 'Créatrice de mode numérique et éducatrice spécialisée en CLO3D et Gerber AccuMark.<br>Produits éducatifs de haute qualité pour les designers.',
    footerLinks: 'Liens rapides', footerCatTitle: 'Catégories', footerContact: 'Contactez-nous',
    footerCopy: '© 2025 Lulèa · Mariem Abdennabi · Tous droits réservés',
    footerRefund: 'Politique de remboursement', footerPrivacy: 'Confidentialité', footerTerms: 'Conditions générales',
    footerCatPatterns: 'Patrons de couture', footerCatCLO3D: 'Cours CLO3D', footerCatGerber: 'Cours Gerber', footerCatGuides: 'Guides de dessin',

    prodName0: 'Guide Complet CLO3D pour Débutants', prodDesc0: 'De zéro à pro — simulation de tissus et construction de vêtements 3D',
    prodName1: 'Patron Blouse Classique A4', prodDesc1: 'Tailles S à XL — fichiers PDF prêts à imprimer',
    prodName2: 'Guide de Dessin de Mode', prodDesc2: '40 pages éducatives pour dessiner le corps et les vêtements en détail',
    prodName3: 'Gerber AccuMark de Zéro', prodDesc3: 'Apprenez à créer des patrons numériques avec les outils professionnels Gerber',
    prodName4: 'Patron Robe de Base', prodDesc4: 'Tailles complètes de 36 à 48 — avec instructions d\'application',
    prodName5: 'Guide Théorie des Couleurs', prodDesc5: 'Comprendre les palettes de couleurs et choisir les bons tissus pour chaque design',
    prodName6: 'Techniques CLO3D Avancées', prodDesc6: 'Animation, détails fins et exportation de fichiers professionnels',
    prodName7: 'Guide de Gradation des Tailles', prodDesc7: 'Les secrets de la gradation correcte des patrons à partir d\'une taille de base',

    products: [
      { name: 'Guide Complet CLO3D pour Débutants', desc: 'Un cours PDF complet vous emmenant de zéro à pro dans CLO3D pour la simulation 3D de vêtements.', includes: ['90+ pages éducatives', 'Projets pratiques', 'Tutoriels photo détaillés', 'Mises à jour gratuites', 'Support par email'] },
      { name: 'Patron Blouse Classique A4', desc: 'Patron professionnel de blouse en plusieurs tailles, conçu pour l\'impression A4.', includes: ['Tailles S, M, L, XL', 'Fichiers PDF prêts à imprimer', 'Instructions de coupe et couture', 'Marges de couture incluses'] },
      { name: 'Guide de Dessin de Mode', desc: 'Guide de 40 pages pour dessiner le corps avec les proportions de mode correctes.', includes: ['40 pages éducatives', 'Exercices progressifs', 'Proportions correctes', 'Techniques d\'ombrage', 'Exemples colorés'] },
      { name: 'Gerber AccuMark de Zéro', desc: 'Apprenez à créer des patrons numériques professionnels avec Gerber AccuMark.', includes: ['80+ pages', 'Étapes détaillées avec images', 'Gradation des tailles', 'Export et impression', 'Support direct 30 jours'] },
      { name: 'Patron Robe de Base', desc: 'Patron de base pour robe en tailles européennes complètes de 36 à 48.', includes: ['Tailles 36 à 48', 'Instructions de modification', 'Fichiers A4 + A0', 'Tableau des tailles'] },
      { name: 'Guide Théorie des Couleurs', desc: 'Guide complet pour comprendre la roue des couleurs et créer des palettes harmonieuses.', includes: ['35 pages', 'Palettes de couleurs prêtes', 'Guide des tissus', 'Exemples de maisons de mode'] },
      { name: 'Techniques CLO3D Avancées', desc: 'Apprenez l\'animation, les détails de couture et l\'exportation de fichiers de qualité professionnelle.', includes: ['60+ pages', 'Techniques d\'animation', 'Export professionnel', 'Projets complets', 'Mises à jour à vie'] },
      { name: 'Guide de Gradation des Tailles', desc: 'Maîtrisez la gradation des patrons d\'une taille de base à une gamme complète.', includes: ['50 pages', 'Tableaux de gradation standard', 'Exemples chemises & robes', 'Patron d\'entraînement inclus'] }
    ]
  }
};

let currentLang = localStorage.getItem('luleaLang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('luleaLang', lang);
  const t = translations[lang];
  const isRTL = lang === 'ar';

  // Direction & lang attribute
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  // Update ALL elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Update the language switcher button text
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    const langNames = { ar: 'العربية', en: 'English', fr: 'Français' };
    langBtn.textContent = '🌐 ' + langNames[lang];
  }

  // Update product data for modals
  if (t.products && typeof products !== 'undefined') {
    t.products.forEach((p, i) => {
      if (products[i]) {
        products[i].name = p.name;
        products[i].desc = p.desc;
        products[i].includes = p.includes;
      }
    });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
