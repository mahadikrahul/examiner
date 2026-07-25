# <img src="public/favicon.svg" width="40" height="40" alt="Examiner Logo" valign="middle" /> Examiner

> **[🔗 Live Demo — mahadikrahul.github.io/Examiner](https://mahadikrahul.github.io/Examiner/)**

Examiner is a web-based, offline-friendly **Worksheet Generator** designed to create educational worksheets for primary school students (targeting Class 1 curricula). Built with React, TypeScript, and Vite, it allows teachers and parents to generate infinite variations of practice sheets, customize ranges, and print them in clean, beautifully optimized print layouts.

---

## 🚀 Features

### 🔢 Mathematics Worksheets

Examiner supports a comprehensive set of early math concepts, including:

*   **Basic Arithmetic (Vertical Math):**
    *   **Single-Digit Addition & Subtraction:** Clamped values ($0$ to $9$). Logic ensures subtraction results are never negative.
    *   **Double-Digit Addition & Subtraction:** Clamped values ($10$ to $99$). Supports carrying/borrowing visualization space. Monospaced vertical alignment ensures ones and tens columns line up perfectly.
    *   **Single-Digit Multiplication:** Formatted vertically with customizable limits ($0$ to $12$).
*   **Number Sense & Sequencing:**
    *   **Number Names:** Practice translating numbers into words (e.g., `45` → `Forty-Five`) and words back to numbers.
    *   **Before, After & Between Numbers:** Find the predecessor, successor, or intermediate number.
    *   **Ascending & Descending Order:** Arrange groups of numbers in increasing or decreasing sequence.
    *   **Skip Counting:** Practice counting intervals (e.g., skip counting by 2s, 5s, 10s).
    *   **Number Comparison:** Identify greater than ($>$), less than ($<$), or equal to ($=$) relationships.
*   **Visual & Spatial Concepts:**
    *   **Place Value:** Exercises to break down double-digit numbers into "tens" and "ones".
    *   **Time (Clocks):** Randomized analog clock faces drawn using dynamic SVGs. Supports two modes: *Read the Time* (O'clock & Half past) or *Draw the Hands*.
    *   **Geometrical Shapes:** Randomly scattered and rotated SVG shapes (circles, squares, rectangles, triangles) in a bounded box. Students must count and log the occurrences.
    *   **Patterns:** Alternating visual shape sequences where students determine the pattern and draw the next missing elements.

---

### 🔤 English Worksheets

*   **Coming Soon:** English worksheets are currently planned and will be added in a future update.

---

## 🛠️ Key Technical Details

*   **Print-First Design:** Fully optimized using custom CSS `@media print` rules. Worksheets are formatted to fit exactly 1 or 2 pages when printed or saved as PDFs, with headers automatically displaying on each page.
*   **Input Guardrails:** Implements boundary validations on the configuration panels. If invalid values are provided, the application automatically clamps numbers to safe ranges (e.g., forcing single digits to $0$–$9$ and double digits to $10$–$99$).
*   **Zero Dependencies for Assets:** Shapes, clock hands, and patterns are generated on-the-fly using inline SVG drawings, keeping the app lightweight and completely usable offline.

---

## 📦 Getting Started

### Prerequisites

*   Node.js (v18+)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/mahadikrahul/Examiner.git
    cd Examiner
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

---

## 🚀 Deployment

This project auto-deploys to GitHub Pages via GitHub Actions on every push to `main`. To set it up on your fork:

1.  Go to **Settings → Pages** in your GitHub repository.
2.  Under **Source**, select **GitHub Actions**.
3.  Push to `main` — the workflow at `.github/workflows/deploy.yml` will build and deploy automatically.

The live site will be available at `https://<your-username>.github.io/Examiner/`.

---

## 👨‍💻 Author

Crafted with ❤️ by **Rahul Mahadik**
- GitHub: [@mahadikrahul](https://github.com/mahadikrahul)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
