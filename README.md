# 📚 Academic Research Portfolio

한남대학교 상담심리학과 이세란 교수의 학술 포트폴리오 웹사이트입니다.

> **GitHub Pages URL**: `https://[username].github.io/[repository-name]/`

---

## 🗂️ 프로젝트 구조

```
├── index.html              # 메인 홈페이지
├── lab.html                # 연구실 소개 페이지
├── bibliography.html       # 출판물 목록 페이지
├── research.html           # 연구 프로젝트 페이지 (선택)
│
├── _data/                  # 📦 데이터 파일 (콘텐츠 수정은 여기서!)
│   ├── profile.yml         # 학력, 경력 정보
│   ├── publications.yml    # 출판물 목록
│   ├── lab.yml             # 연구실 정보, 멤버
│   ├── projects.yml        # 프로젝트 목록
│   └── collaborators.yml   # 협업자 목록
│
├── _includes/              # 📝 텍스트 콘텐츠
│   └── intro.md            # 홈페이지 소개 문구
│
├── assets/
│   ├── js/
│   │   └── components.js   # 🔧 공통 컴포넌트 (GNB, Footer)
│   ├── files/
│   │   └── cv.pdf          # CV 파일
│   └── images/             # 이미지 파일
│
└── .gitignore
```

---

## ✏️ 콘텐츠 수정 가이드

### 1. 학력 / 경력 수정

📁 **파일**: `_data/profile.yml`

```yaml
# 학력 추가
education:
  - degree: "박사"
    field: "상담심리"
    school: "연세대학교"
    year: "2020"           # 선택사항

# 경력 추가
experience:
  - position: "교수"
    organization: "한남대학교 상담심리학과"
    period: "2020 - 현재"
    current: true          # 현재 근무중이면 true
```

---

### 2. 출판물 추가

📁 **파일**: `_data/publications.yml`

```yaml
- title: "논문 제목"
  year: 2024                      # 숫자로 입력
  category: "Articles"            # Monographs / Articles / Essays 중 선택
  publisher: "저널명 또는 출판사"
  link: "https://..."             # 온라인 링크 (없으면 "#")
  pdf: "assets/files/파일명.pdf"  # PDF 경로 (없으면 삭제)
```

**카테고리 종류**:
| 카테고리 | 설명 |
|----------|------|
| `Monographs` | 단행본, 저서 |
| `Articles` | 학술 논문, 저널 기고 |
| `Essays` | 에세이, 칼럼, 비평 |

---

### 3. 연구실 멤버 추가

📁 **파일**: `_data/lab.yml`

```yaml
members:
  - name: "홍길동"
    name_en: "Gildong Hong"
    role: "석사과정"              # 지도교수 / 박사과정 / 석사과정 / 학부연구생
    research: "연구 관심 분야"
    email: "email@example.com"
    image: "이미지 URL"
    year: "2024"                  # 입학 연도
```

**졸업생 추가**:
```yaml
alumni:
  - name: "김철수"
    role: "석사 졸업"
    year: "2024"
    current: "현재 소속/직책"
```

---

### 4. 홈페이지 소개 문구 수정

📁 **파일**: `_includes/intro.md`

마크다운 형식으로 작성합니다. 문단은 빈 줄로 구분합니다.

---

### 5. 네비게이션 메뉴 수정

📁 **파일**: `assets/js/components.js`

```javascript
const NAV_ITEMS = [
  { href: 'index.html', label: 'Home', id: 'home' },
  { href: 'lab.html', label: 'Lab', id: 'lab' },
  { href: 'bibliography.html', label: 'Publications', id: 'bibliography' },
  { href: 'assets/files/cv.pdf', label: 'CV', id: 'cv' }
];
```

---

### 6. 사이트 정보 수정 (이름, 이메일, 소셜 링크)

📁 **파일**: `assets/js/components.js`

```javascript
const SITE_CONFIG = {
  author: 'Seran Lee (이세란)',
  email: 'seran.lee@example.com',
  links: {
    scholar: 'https://scholar.google.com/...',
    github: 'https://github.com/...',
    linkedin: 'https://linkedin.com/in/...'
  }
};
```

---

## 🚀 GitHub Pages 배포 방법

### 최초 배포

```bash
# 1. Git 초기화 (최초 1회)
git init
git add .
git commit -m "Initial commit: Academic portfolio"

# 2. GitHub 저장소 연결
git remote add origin https://github.com/[username]/[repository-name].git
git branch -M main
git push -u origin main
```

### GitHub Pages 활성화

1. GitHub 저장소 → **Settings** → **Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / `/ (root)` 선택
4. **Save** 클릭

### 수정 후 업데이트

```bash
git add .
git commit -m "Update: 변경 내용 설명"
git push
```

> 📌 푸시 후 1~2분 내에 사이트에 반영됩니다.

---

## 🎨 디자인 커스터마이징

### 메인 컬러 변경

각 HTML 파일의 `<script>` 태그에서 Tailwind 설정을 수정합니다:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#607AFB",        // ← 메인 컬러 변경
        "background-light": "#f5f6f8",
        "background-dark": "#0f1323",
      },
    },
  },
};
```

### 프로필 사진 변경

`index.html`에서 이미지 URL을 수정하거나, `assets/images/`에 파일을 업로드 후 경로를 변경합니다.

---

## 📋 파일별 역할 요약

| 파일 | 역할 | 수정 빈도 |
|------|------|----------|
| `_data/profile.yml` | 학력, 경력 | 가끔 |
| `_data/publications.yml` | 출판물 목록 | 자주 |
| `_data/lab.yml` | 연구실 멤버 | 자주 |
| `_includes/intro.md` | 홈 소개 문구 | 가끔 |
| `assets/js/components.js` | GNB, Footer, 사이트 설정 | 드물게 |
| `assets/files/cv.pdf` | CV 파일 | 가끔 |

---

## ⚠️ 주의사항

1. **YAML 파일 수정 시**
   - 들여쓰기는 **스페이스 2칸** 사용 (탭 X)
   - 콜론(`:`)이 포함된 텍스트는 따옴표로 감싸기
   - 연도는 따옴표 없이 숫자로 입력

2. **이미지 추가 시**
   - 외부 URL 또는 `assets/images/` 폴더에 업로드
   - 권장 크기: 프로필 300x300px, 갤러리 600x450px

3. **PDF 추가 시**
   - `assets/files/` 폴더에 업로드
   - 파일명에 공백 대신 하이픈(`-`) 사용

---

## 🛠️ 기술 스택

- **HTML5** + **Tailwind CSS** (CDN)
- **Vanilla JavaScript** (프레임워크 없음)
- **js-yaml** (YAML 파싱)
- **GitHub Pages** (정적 호스팅)

---

## 📞 문의

수정 관련 문의: `seran.lee@example.com`
