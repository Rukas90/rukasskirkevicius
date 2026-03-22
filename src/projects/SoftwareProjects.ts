import type { Project } from "@types"

export const SecureDashboardProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/secure-dashboard/login",
  },
  title: "Secure Dashboard",
  subtitle: {
    localeKey: "secure_dashboard_sub",
    fallback: "Comprehensive web authentication application",
  },
  details: [
    {
      type: "Summary",
      info: {
        localeKey: "secure_dashboard_summary",
        fallback:
          "A full-stack TypeScript monorepo implementing a comprehensive web authentication and account management system.\nIt features a secure authentication via credentials, OAuth 2.0 and multi-factor. MFA comes with full MFA enrollments, verification, revocation and is supported by backup codes. It also includes sudo re-authentication for sensitive actions. The authorization uses JWT-based access control wuth refresh token rotation.",
      },
    },
    {
      type: "TechStack",
      info: "TypeScript, Express, Postgres, Redis, BullMq, React, Tailwind",
    },
  ],
  afterLink: {
    label: {
      localeKey: "view_on_github",
      fallback: "View on Github",
    },
    url: "https://github.com/Rukas90/SecureDashboard",
    target: "_blank",
  },
}

export const IthoARProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/itho-daalderop-ar/banner",
  },
  title: "Itho Daalderop AR",
  subtitle: {
    localeKey: "itho_ar_sub",
    fallback: "Augmented reality mobile application",
  },
  details: [
    {
      type: "Responsibilities",
      info: {
        localeKey: "itho_ar_responsibilities",
        fallback:
          "Developed the Itho Daalderop AR app during my internship at Studio-X, introducing users to the HRU400 product through an immersive AR experience. I created the AR functionality and UI design, enabling users to interact with a 3D model of the product by scanning a real-life QR image. This app allows product exploration through detailed 3D inspections and animated sequences, showcasing product features all while using an interactive AR interface.",
      },
    },
    {
      type: "TechStack",
      info: "C#, Unity, Vuforia",
    },
  ],
  afterLink: {
    label: {
      localeKey: "view_client",
      fallback: "View Client",
    },
    url: "https://www.ithodaalderop.nl/",
    target: "_blank",
  },
}
