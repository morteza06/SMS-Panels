## Sms panel
- برنامه مدیریت پیامک ها
## ساختار دقیق نقش هر بخش فرانت اند


## Mental Model
UI Layer
Feature Layer
Domain / Logic
Infrastructure
State & Data
Configuration

## Full tree folders

src/
├── app/                          # Routing & Composition (Next.js)
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── (public)/                 # صفحات بدون احراز هویت
│   │   ├── page.tsx              # Landing
│   │   ├── login/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   ├── verify/
│   │   ├── reset-password/
│   │   └── register/
│   │
│   ├── (protected)/              # صفحات امن
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   ├── profile/
│   │   └── settings/
│   │
│   └── api/                      # Route Handlers (Proxy / BFF)
│       └── auth/
│
├── features/                     # Feature-Based Architecture
│   ├── auth/
│   │   ├── components/           # فرم‌ها و UI خاص auth
│   │   ├── hooks/                # useLogin, useSendCode
│   │   ├── services/             # ارتباط با Identity API
│   │   ├── schemas/              # Zod
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   ├── user/
│   └── settings/
│
├── components/                   # Shared UI (Design System)
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Toast.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   │
│   └── feedback/
│
├── services/                     # Infrastructure
│   ├── http/
│   │   ├── axios.ts
│   │   └── interceptors.ts
│   ├── storage/
│   └── logger.ts
│
├── store/                        # Global State (اگر لازم شد)
│   ├── auth.store.ts
│   └── ui.store.ts
│
├── lib/                          # Pure Logic / Helpers
│   ├── auth/
│   │   ├── guard.ts
│   │   └── permissions.ts
│   ├── validators.ts
│   ├── utils.ts
│   └── constants.ts
│
├── hooks/                        # Generic Hooks
│   ├── useDebounce.ts
│   ├── useCountdown.ts
│   └── useMounted.ts
│
├── types/                        # Global Types
│   ├── api.d.ts
│   └── common.d.ts
│
├── styles/                       # Theme & Tokens
│   ├── tailwind.css
│   └── theme.ts
│
├── tests/                        # Testing Strategy
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
└── config/                       # App Configuration
    ├── env.ts
    ├── routes.ts
    └── permissions.ts


## Atomic Design

src/components/
└── landing/
    ├── atoms/
    ├── molecules/
    ├── organisms/
    ├── templates/
    └── index.ts
### Atomic Layers
Atoms       → اجزای پایه (بدون منطق)
Molecules   → ترکیب اتم‌ها
Organisms   → بخش‌های کامل صفحه
Templates   → چیدمان صفحه
Pages       → Route واقعی

### ارتباط Layout با Atomic Design
Layout      → قاب ثابت (خارج از Atomic)
Template    → سطح بالا (نزدیک Organism)
Organisms   → Sectionها
Molecules   → اجزای Section
Atoms       → پایه‌ها

اما قوانین Atomic Design را سخت‌گیرانه رعایت می‌کنیم


2️⃣ رویکرد حرفه‌ای: Feature + Responsibility ✅
components/
├── ui/               # Atoms واقعی
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Badge.tsx
│
├── landing/
│   ├── Hero.tsx
│   ├── FeatureList.tsx
│   ├── Pricing.tsx
│   └── CTA.tsx
│
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx


اینجا Atomic چطور رعایت شده؟
لایه Atomic	        در پروژه کجاست
Atom	        components/ui
Molecule	        داخل هر Feature
Organism        	فایل‌های سطح بالای Feature

