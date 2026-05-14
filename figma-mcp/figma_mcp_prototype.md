# Figma MCP Prototype

## Muc tieu prototype

Thiet ke prototype cho ung dung Angular + Spring Boot + MySQL Hello World. Man hinh can the hien duoc trang thai ket noi backend, trang thai database va so lan request API.

File nay co the dung lam brief/prompt khi add vao Figma MCP de tao frame, component va luong prototype.

## Thong tin san pham

- Ten app: Fullstack Hello Dashboard
- Nen tang: Web app
- Frontend: Angular
- Backend: Spring Boot
- Database: MySQL
- API chinh: `GET /api/hello`
- URL backend local: `http://localhost:8080/api/hello`
- URL frontend local: `http://localhost:4200`

## Frame can thiet ke

### 1. Desktop - Ready State

- Frame name: `Desktop / Hello Dashboard / Ready`
- Size: `1440 x 900`
- Noi dung:
  - Header nho: `Angular + Spring Boot + MySQL`
  - Title: `Hello World`
  - Message: `Hello World from Angular + Spring Boot + MySQL!`
  - Database status: `connected`
  - Request count: `1`
  - Button: `Goi lai API`
- Muc tieu:
  - Nguoi dung thay ro backend dang ket noi thanh cong.
  - Khu vuc message la noi noi bat nhat trong man hinh.

### 2. Desktop - Loading State

- Frame name: `Desktop / Hello Dashboard / Loading`
- Size: `1440 x 900`
- Noi dung:
  - Header nho: `Angular + Spring Boot + MySQL`
  - Title: `Hello World`
  - Message loading: `Dang goi backend...`
  - Button disabled: `Dang tai...`
- Muc tieu:
  - The hien ro app dang goi API.
  - Button co trang thai disabled.

### 3. Desktop - Error State

- Frame name: `Desktop / Hello Dashboard / Error`
- Size: `1440 x 900`
- Noi dung:
  - Header nho: `Angular + Spring Boot + MySQL`
  - Title: `Hello World`
  - Error message: `Khong the ket noi backend. Vui long thu lai.`
  - Button: `Goi lai API`
- Muc tieu:
  - Nguoi dung hieu backend dang loi hoac chua chay.
  - Van co hanh dong retry ro rang.

### 4. Mobile - Ready State

- Frame name: `Mobile / Hello Dashboard / Ready`
- Size: `390 x 844`
- Noi dung giong desktop ready state.
- Muc tieu:
  - Layout mot cot.
  - Button rong full width.
  - Text khong tran khoi card/panel.

## Component

### Status Panel

- Chua toan bo noi dung chinh.
- Width desktop: `520 - 640px`
- Width mobile: full width tru padding.
- Border radius: `8px`
- Padding desktop: `32px`
- Padding mobile: `24px`

### Message Box

- Dung de hien thi message API, database status va request count.
- Nen tach thanh component co 3 variants:
  - `ready`
  - `loading`
  - `error`

### Metric Item

- Gom label va value.
- Label:
  - `Database`
  - `Request count`
- Value:
  - `connected`
  - `1`

### Primary Button

- Text variants:
  - `Goi lai API`
  - `Dang tai...`
- States:
  - default
  - hover
  - disabled

## Tailwind theme

Dung Tailwind lam theme chinh cho prototype va frontend. Khi tao frame trong Figma MCP, dat ten color/text style theo token Tailwind ben duoi de dev mapping thang sang class.

### Tailwind config goi y

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#F6F8FA",
          surface: "#FFFFFF",
          text: "#172033",
          muted: "#586174",
          border: "#DDE3EA",
          primary: "#2563EB",
          primaryHover: "#1D4ED8",
          success: "#14804A",
          error: "#C2410C",
          disabled: "#AEB7C4"
        }
      },
      borderRadius: {
        panel: "8px",
        control: "6px"
      },
      spacing: {
        page: "32px",
        panel: "32px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        title: ["40px", { lineHeight: "48px", fontWeight: "700" }],
        body: ["16px", { lineHeight: "24px" }],
        label: ["13px", { lineHeight: "18px", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};
```

### Class mapping

| UI phan tu | Tailwind class |
| --- | --- |
| Page shell | `min-h-screen bg-app-bg text-app-text font-sans flex items-center justify-center p-page` |
| Status panel | `w-full max-w-[640px] rounded-panel border border-app-border bg-app-surface p-panel shadow-sm` |
| Eyebrow | `text-label uppercase text-app-muted` |
| Title | `mt-2 text-title text-app-text` |
| Message box | `mt-6 rounded-control border border-app-border bg-app-bg p-4` |
| Message ready | `text-body text-app-text` |
| Message loading | `text-body text-app-muted` |
| Message error | `text-body text-app-error` |
| Metrics list | `mt-4 grid grid-cols-2 gap-4` |
| Metric label | `text-label text-app-muted` |
| Metric value success | `mt-1 text-body font-semibold text-app-success` |
| Primary button | `mt-6 inline-flex h-11 items-center justify-center rounded-control bg-app-primary px-5 text-body font-semibold text-white hover:bg-app-primaryHover disabled:bg-app-disabled` |
| Mobile panel | `w-full rounded-panel border border-app-border bg-app-surface p-6` |
```

## Prototype interaction

| Tu frame | Hanh dong | Den frame | Ghi chu |
| --- | --- | --- | --- |
| Ready | Click `Goi lai API` | Loading | Bat dau goi backend |
| Loading | After delay `800ms` | Ready | API thanh cong |
| Loading | Error case | Error | Backend loi/chua chay |
| Error | Click `Goi lai API` | Loading | Thu lai request |

## Prompt goi y cho Figma MCP

```text
Create a web app prototype named "Fullstack Hello Dashboard" for an Angular + Spring Boot + MySQL application.

Build four frames:
1. Desktop / Hello Dashboard / Ready, size 1440x900
2. Desktop / Hello Dashboard / Loading, size 1440x900
3. Desktop / Hello Dashboard / Error, size 1440x900
4. Mobile / Hello Dashboard / Ready, size 390x844

Use a clean operational dashboard style, not a marketing landing page. The main content is a compact status panel showing API message, database connection status, request count, and a retry button.

Use Tailwind as the design theme. Create Figma color and text styles from these Tailwind tokens:
- app-bg: #F6F8FA
- app-surface: #FFFFFF
- app-text: #172033
- app-muted: #586174
- app-success: #14804A
- app-error: #C2410C
- app-border: #DDE3EA
- app-primary: #2563EB
- app-primaryHover: #1D4ED8
- app-disabled: #AEB7C4
- radius-panel: 8px
- radius-control: 6px
- font-sans: Inter

Create components for Status Panel, Message Box, Metric Item, and Primary Button. Add button states default, hover, and disabled. Add Message Box variants ready, loading, and error.

Prototype interactions:
- Ready button click goes to Loading.
- Loading auto-returns to Ready after 800ms.
- Error button click goes to Loading.
```

## Mapping voi code hien tai

| Prototype | Frontend hien tai |
| --- | --- |
| Header nho | `.eyebrow` |
| Title | `h1` |
| Status panel | `.status-panel` |
| Message box | `.message-box` |
| Loading text | `Dang goi backend...` |
| Error text | `error()` |
| Retry button | `loadHello()` |

## Checklist khi import vao Figma MCP

- [ ] Tao du 4 frame.
- [ ] Tao component va variants.
- [ ] Gan prototype interactions.
- [ ] Kiem tra desktop frame khong bi trong qua nhieu.
- [ ] Kiem tra mobile frame khong bi tran text.
- [ ] Ten layer ro rang de dev co the mapping lai vao Angular.
