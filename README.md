# 🇲🇿 Mozambique Elite Chauffeur Services

A modern, high-performance website for a premium chauffeur and tourism service based in Mozambique. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS v4**, this platform offers seamless booking for airport transfers, luxury tours, and corporate shuttles.

## 🌟 Features

-   **Tropical Luxury Design:** A custom color palette inspired by the Indian Ocean and Mozambican sunsets.
-   **Responsive Booking Engine:** A multi-service widget supporting fixed routes, hourly rentals, and group shuttles.
-   **Mobile-First Navigation:** Fully responsive navbar with an intuitive mobile menu.
-   **Performance Optimized:** Leveraging Next.js App Router and server-side rendering for fast load times.
-   **Type-Safe Codebase:** Built entirely with TypeScript for robustness and maintainability.

## 🛠️ Tech Stack

-   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Fonts:** Google Fonts (Inter & Playfair Display via `next/font`)

## 🎨 Design Palette

The design reflects the beauty of Mozambique:
-   **Turquoise Teal:** `#0D9488` (Indian Ocean waters)
-   **Sunset Gold:** `#EAB308` (Premium service & warmth)
-   **Deep Ocean Navy:** `#1e293b` (Professionalism & readability)
-   **Warm Sand:** `#E6DCC3` (Coastal beaches)

## 🚀 Getting Started

### Prerequisites

-   Node.js 18.17 or later
-   npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/mozambique-elite-chauffeur.git
    cd mozambique-elite-chauffeur
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Add a hero image named `hero-car.jpg` or `mozambique-coast.jpg` to the `public/` folder.

4.  Run the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Homepage entry point
│   └── globals.css      # Tailwind v4 theme configuration
├── components/
│   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   ├── Footer.tsx       # Site footer with contact info
│   ├── BookingWidget.tsx # Multi-service booking form
│   └── ServiceCard.tsx  # Reusable card for service offerings
└── types/
    └── index.ts         # Shared TypeScript interfaces
```

## 📝 Customization

To change the brand colors, edit the `@theme` block in `src/app/globals.css`:

```css
@theme {
  --color-brand-teal: #0D9488;
  --color-brand-gold: #EAB308;
  /* ... other colors */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---
*Created by Qwen 3.7 November 14, 2026*
