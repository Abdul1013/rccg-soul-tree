// import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
  "./src/**/*.{ts,tsx,js,jsx}",
  "./pages/**/*.{ts,tsx,js,jsx}",
  "./components/**/*.{ts,tsx,js,jsx}"
],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    }
    ,
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sacred: {
          gold: "hsl(var(--sacred-gold))",
        },
        growth: {
          DEFAULT: "hsl(var(--growth))",
          light: "hsl(var(--growth-light))",
          foreground: "hsl(var(--growth-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "grow-tree": {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.7",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "divine-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.6)",
          },
        },
        "progress-fill": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "var(--progress-value, 0%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "grow-tree": "grow-tree 0.8s ease-out",
        "divine-glow": "divine-glow 3s ease-in-out infinite",
        "progress-fill": "progress-fill 1s ease-out",
      },
      backgroundImage: {
        "gradient-divine": "var(--gradient-divine)",
        "gradient-heavenly": "var(--gradient-heavenly)",
        "gradient-growth": "var(--gradient-growth)",
        "gradient-sacred": "var(--gradient-sacred)",
      },
      boxShadow: {
        divine: "var(--shadow-divine)",
        sacred: "var(--shadow-sacred)",
        growth: "var(--shadow-growth)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
