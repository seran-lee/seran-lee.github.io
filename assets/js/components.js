// 공통 컴포넌트 모듈

const SITE_CONFIG = {
  author: 'Seran Lee (이세란)',
  email: 'srlee617@gmail.com',
  links: {
    scholar: 'https://scholar.google.co.kr/citations?user=eeZwnsEAAAAJ&hl=ko&oi=ao',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
};

const NAV_ITEMS = [
  { href: 'index.html', label: 'Home', id: 'home' },
  { href: 'research.html', label: 'Research', id: 'research' },
  // { href: 'lab.html', label: 'Lab', id: 'lab' },
  { href: 'bibliography.html', label: 'Publications', id: 'bibliography' },
  { href: 'contact.html', label: 'Contact', id: 'contact' },
  // { href: 'assets/files/C.V._Seran Lee.pdf', label: 'CV', id: 'cv' }
];

/**
 * GNB (Global Navigation Bar) 렌더링
 * @param {string} currentPage - 현재 페이지 ID ('home', 'research', 'bibliography')
 */
function renderGNB(currentPage) {
  const navLinks = NAV_ITEMS.map(item => {
    const isActive = item.id === currentPage;
    return `<a href="${item.href}" class="${isActive ? 'text-primary' : 'hover:text-primary transition-colors'}">${item.label}</a>`;
  }).join('');

  const mobileNavLinks = NAV_ITEMS.map(item => {
    const isActive = item.id === currentPage;
    return `<a href="${item.href}" class="block py-2 ${isActive ? 'text-primary' : 'hover:text-primary transition-colors'}">${item.label}</a>`;
  }).join('');

  const gnbHTML = `
    <div class="w-full border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
      <div class="max-w-4xl mx-auto px-6 py-4">
        <header class="flex items-center justify-between whitespace-nowrap">
          <div class="flex items-center gap-3">
            <div class="text-primary">
              <span class="material-symbols-outlined text-2xl">auto_stories</span>
            </div>
            <a href="index.html" class="text-lg font-bold tracking-tight hover:text-primary transition-colors">${SITE_CONFIG.author}</a>
          </div>
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
            ${navLinks}
          </nav>
          <div class="md:hidden">
            <span class="material-symbols-outlined cursor-pointer" onclick="toggleMobileMenu()">menu</span>
          </div>
        </header>
        <nav id="mobile-menu" class="hidden md:hidden pt-4 pb-2 space-y-2 text-sm font-medium">
          ${mobileNavLinks}
        </nav>
      </div>
    </div>
  `;

  document.getElementById('gnb').innerHTML = gnbHTML;
}

/**
 * Footer 렌더링
 */
function renderFooter() {
  const year = new Date().getFullYear();
  
  const footerHTML = `
    <footer class="max-w-4xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8 text-center space-y-4">
      <div class="flex justify-center gap-6 text-xs uppercase tracking-widest">
        <a href="${SITE_CONFIG.links.scholar}" class="text-slate-400 hover:text-primary transition-colors">Google Scholar</a>
        <a href="mailto:${SITE_CONFIG.email}" class="text-slate-400 hover:text-primary transition-colors">Email</a>
      </div>
      <p class="text-xs text-slate-500 font-sans uppercase tracking-tighter">
        © ${year} ${SITE_CONFIG.author}. Academic Research Portfolio.
      </p>
    </footer>
  `;

  document.getElementById('footer').innerHTML = footerHTML;
}

/**
 * 모바일 메뉴 토글
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

/**
 * YAML 파일 로드 유틸리티
 */
async function loadYAML(url) {
  const response = await fetch(url);
  const text = await response.text();
  return jsyaml.load(text);
}

/**
 * 공통 레이아웃 초기화
 * @param {string} currentPage - 현재 페이지 ID
 */
function initLayout(currentPage) {
  renderGNB(currentPage);
  renderFooter();
}
