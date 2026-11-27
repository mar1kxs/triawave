/** Existing page placements; order and copy overrides preserve each page's presentation. */
export type ProjectContext = "work" | "strategy" | "uiux" | "wix" | "webflow" | "custom" | "commerce" | "landing" | "support";

export interface ProjectImage {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export interface ProjectPlacement {
  readonly order: number;
  readonly title?: string;
  readonly alt?: string;
  readonly tags?: readonly string[];
}

export interface HomeProjectContent {
  readonly order: number;
}

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly tags: readonly string[];
  readonly alt: string;
  /** Only four existing cases have descriptive copy. Do not invent missing copy. */
  readonly description?: string;
  /** Existing featured-case copy, shared with the home page. */
  readonly subtitle?: string;
  readonly imageTitle?: string;
  readonly imageAlt?: string;
  readonly services?: string;
  readonly href?: string;
  readonly images: {
    /** Wide/16:9 layout asset. Original 895×550 files retain their existing crops. */
    readonly landscape?: ProjectImage;
    /** Square layout asset; original exports can differ by one pixel. */
    readonly square?: ProjectImage;
    readonly squareHover?: ProjectImage;
    /** Optional alternate wide artwork used on the home page (Kuberg). */
    readonly homeLandscape?: ProjectImage;
  };
  readonly placements: Readonly<Partial<Record<ProjectContext, ProjectPlacement>>>;
  readonly home?: HomeProjectContent;
}

/** Single source of project content, artwork, page selection and ordering. */
export const PROJECTS: readonly Project[] = [
  {
    "id": "tuscany-photo-tours",
    "slug": "tuscany-photo-tours",
    "title": "Tuscany Photo Tours",
    "category": "Travel Platform",
    "tags": [
      "Travel Platform",
      "UX/UI",
      "Web Development"
    ],
    "alt": "Tuscany photo tours website displayed on a laptop",
    "images": {
      "landscape": {
        "src": "/projects/work-project-08.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/custom-tuscany-hover.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/custom-tuscany.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 0
      },
      "webflow": {
        "order": 1
      },
      "custom": {
        "order": 1
      },
      "commerce": {
        "order": 1
      },
      "support": {
        "order": 1
      }
    },
    "description": "Website design and development for a photography tour company, pairing immersive imagery with clear tour information to help travellers find their next adventure",
    "home": {
      "order": 2
    },
    "subtitle": "Photography & travel",
    "imageTitle": "Tuscany Photo Tours",
    "imageAlt": "Tuscany photo tour website displayed on a laptop",
    "services": "UI/UX Design · Web Development · CRM Setup",
    "href": "/work"
  },
  {
    "id": "liva-beauty",
    "slug": "liva-beauty",
    "title": "LIVA-BEAUTY",
    "category": "Beauty Salon",
    "tags": [
      "Beauty Salon",
      "UX/UI",
      "Web Development"
    ],
    "alt": "Beauty and ritual website displayed on a laptop",
    "images": {
      "landscape": {
        "src": "/projects/work-project-07.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/uiux-liva-beauty.png",
        "width": 742,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/uiux-hover-liva-beauty.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 1
      },
      "uiux": {
        "order": 3
      },
      "webflow": {
        "order": 3
      },
      "custom": {
        "order": 3
      },
      "landing": {
        "order": 1
      }
    }
  },
  {
    "id": "deftechcluster",
    "slug": "deftechcluster",
    "title": "deftechcluster",
    "category": "Defense Tech",
    "tags": [
      "Defense Tech",
      "UX/UI",
      "Web Development"
    ],
    "alt": "Innovation Bridges website displayed on a smartphone",
    "images": {
      "landscape": {
        "src": "/projects/work-project-06.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/strategy-project-02.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/strategy-hover-03.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 2
      },
      "strategy": {
        "order": 1,
        "alt": "deftechcluster innovation platform displayed on a smartphone"
      },
      "uiux": {
        "order": 0,
        "alt": "Defense technology platform displayed on a smartphone"
      },
      "wix": {
        "order": 1,
        "title": "DEFTECHCLUSTER",
        "alt": "Defense technology platform displayed on a smartphone"
      }
    }
  },
  {
    "id": "schooltogo-online",
    "slug": "schooltogo-online",
    "title": "SCHOOLTOGO.ONLINE",
    "category": "Online School",
    "tags": [
      "Online School",
      "UX/UI",
      "Web Development"
    ],
    "alt": "Online school website displayed on a smartphone",
    "images": {
      "landscape": {
        "src": "/projects/work-project-05.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/uiux-schooltogo.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/uiux-hover-schooltogo.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 3
      },
      "uiux": {
        "order": 2
      },
      "commerce": {
        "order": 3
      },
      "landing": {
        "order": 2
      },
      "support": {
        "order": 3
      }
    }
  },
  {
    "id": "kuberg-app",
    "slug": "kuberg-app",
    "title": "Kuberg in Motion",
    "category": "Electric Motorcycles",
    "tags": [
      "Electric Motorcycles",
      "UX/UI",
      "App Development"
    ],
    "alt": "Kuberg electric bike website displayed on a smartphone",
    "images": {
      "landscape": {
        "src": "/projects/work-project-04.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/ecommerce-kuberg.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/ecommerce-kuberg-hover.png",
        "width": 743,
        "height": 743
      },
      "homeLandscape": {
        "src": "/projects/kuberg-home.png",
        "width": 1600,
        "height": 711
      }
    },
    "placements": {
      "work": {
        "order": 4,
        "title": "KUBERG APP"
      },
      "commerce": {
        "order": 0,
        "alt": "Electric motorcycle app displayed on a smartphone",
        "title": "KUBERG APP"
      },
      "support": {
        "order": 0,
        "alt": "Electric motorcycle app displayed on a smartphone",
        "title": "KUBERG APP"
      }
    },
    "description": "UI/UX design for the Kuberg app, translating the electric motorcycle brand’s bold character into a focused mobile experience",
    "home": {
      "order": 0
    },
    "subtitle": "Electric motorcycles",
    "imageTitle": "Kuberg App",
    "imageAlt": "Kuberg electric motorcycle app shown on a smartphone",
    "services": "UX/UI Design · UI Design",
    "href": "/work"
  },
  {
    "id": "kyiv-energy",
    "slug": "kyiv-energy",
    "title": "Kyiv Energy",
    "category": "Energy Solutions",
    "tags": [
      "Energy Solutions",
      "UX/UI",
      "App Development"
    ],
    "alt": "Kyiv Energy website displayed on a tablet",
    "images": {
      "landscape": {
        "src": "/projects/work-project-03.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/wix-kyiv-energy.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/wix-kyiv-energy-hover.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 5,
        "title": "KYIV ENERGY"
      },
      "wix": {
        "order": 2,
        "alt": "Kyiv Energy website displayed on a laptop",
        "tags": [
          "Energy Solutions",
          "UX/UI",
          "Web Development"
        ],
        "title": "KYIV ENERGY"
      },
      "webflow": {
        "order": 2,
        "alt": "Kyiv Energy website displayed on a laptop",
        "title": "KYIV ENERGY"
      },
      "custom": {
        "order": 2,
        "alt": "Kyiv Energy website displayed on a laptop",
        "title": "KYIV ENERGY"
      },
      "commerce": {
        "order": 2,
        "alt": "Kyiv Energy website displayed on a laptop",
        "title": "KYIV ENERGY"
      },
      "support": {
        "order": 2,
        "alt": "Kyiv Energy website displayed on a laptop",
        "title": "KYIV ENERGY"
      }
    },
    "description": "Designed and built KyivEnergy’s website for backup power and solar solutions. Customers can browse equipment, review technical specifications, place orders, and request a quote for delivery and installation",
    "home": {
      "order": 3
    },
    "subtitle": "Energy solutions",
    "imageTitle": "Kyiv Energy",
    "imageAlt": "Kyiv Energy backup power and solar website displayed on a tablet",
    "services": "UI/UX Design · Web Development · CRM Setup · Ad Creatives · Marketing Support",
    "href": "/work"
  },
  {
    "id": "bml-lab",
    "slug": "bml-lab",
    "title": "BML-LAB",
    "category": "Digital Pathology",
    "tags": [
      "Digital Pathology",
      "UX/UI",
      "App Development"
    ],
    "alt": "Medical laboratory website displayed on a desktop computer",
    "images": {
      "landscape": {
        "src": "/projects/work-project-02.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/strategy-project-04.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/strategy-hover-01.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 6
      },
      "strategy": {
        "order": 3,
        "alt": "BML-LAB digital pathology website displayed on a desktop computer",
        "tags": [
          "Digital Pathology",
          "UX/UI",
          "Web Development"
        ]
      },
      "landing": {
        "order": 3,
        "alt": "Digital pathology website displayed on a desktop computer"
      }
    }
  },
  {
    "id": "panegrip-dev",
    "slug": "panegrip-dev",
    "title": "panegrip.dev",
    "category": "AI Developer Tools",
    "tags": [
      "AI Developer Tools",
      "UX/UI",
      "Web Development"
    ],
    "alt": "AI coding assistant website shown on a desktop monitor",
    "images": {
      "landscape": {
        "src": "/projects/work-project-01.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/wix-panegrip.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/wix-panegrip-hover.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 7,
        "title": "Panegrip.dev",
        "tags": [
          "AI Developer Tools",
          "UX/UI",
          "App Development"
        ]
      },
      "wix": {
        "order": 0,
        "alt": "AI developer tools website displayed on a desktop monitor",
        "title": "Panegrip.dev",
        "tags": [
          "AI Developer Tools",
          "UX/UI",
          "App Development"
        ]
      },
      "webflow": {
        "order": 0,
        "alt": "AI developer tools website displayed on a desktop monitor",
        "title": "Panegrip.dev",
        "tags": [
          "AI Developer Tools",
          "UX/UI",
          "App Development"
        ]
      },
      "custom": {
        "order": 0,
        "alt": "AI developer tools website displayed on a desktop monitor",
        "title": "Panegrip.dev",
        "tags": [
          "AI Developer Tools",
          "UX/UI",
          "App Development"
        ]
      }
    },
    "description": "A website for Panegrip, bringing mobile access to AI coding agents into focus through bold visuals, clear product storytelling and responsive development",
    "home": {
      "order": 1
    },
    "subtitle": "AI Dev Tools",
    "imageTitle": "Panegrip.dev",
    "imageAlt": "Panegrip AI coding agent website displayed on a desktop monitor",
    "services": "UI/UX Design · Web Development",
    "href": "/work"
  },
  {
    "id": "capycasino",
    "slug": "capycasino",
    "title": "CAPYCASINO",
    "category": "Sweepstakes Casino",
    "tags": [
      "Sweepstakes Casino",
      "UX/UI",
      "App Development"
    ],
    "alt": "Sweepstakes casino mobile app displayed on a smartphone",
    "images": {
      "landscape": {
        "src": "/projects/work-project-10.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/strategy-project-01.png",
        "width": 743,
        "height": 742
      },
      "squareHover": {
        "src": "/projects/strategy-hover-04.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 8
      },
      "strategy": {
        "order": 0,
        "alt": "CAPYCASINO sweepstakes casino app displayed on a tablet",
        "tags": [
          "Sweepstakes Casino",
          "UX/UI",
          "Web Development"
        ]
      },
      "uiux": {
        "order": 1,
        "alt": "Sweepstakes casino app displayed on a smartphone",
        "tags": [
          "Sweepstakes Casino",
          "UX/UI",
          "Web Development"
        ]
      }
    }
  },
  {
    "id": "cosmovar",
    "slug": "cosmovar",
    "title": "COSMOVAR",
    "category": "Beauty & Aesthetics",
    "tags": [
      "Beauty & Aesthetics",
      "UX/UI",
      "App Development"
    ],
    "alt": "Beauty and aesthetics website displayed on a laptop",
    "images": {
      "landscape": {
        "src": "/projects/work-project-09.png",
        "width": 895,
        "height": 550
      },
      "square": {
        "src": "/projects/strategy-project-03.png",
        "width": 743,
        "height": 743
      },
      "squareHover": {
        "src": "/projects/strategy-hover-02.png",
        "width": 743,
        "height": 743
      }
    },
    "placements": {
      "work": {
        "order": 9
      },
      "strategy": {
        "order": 2,
        "alt": "COSMOVAR beauty and aesthetics website displayed on a laptop",
        "tags": [
          "Beauty & Aesthetics",
          "UX/UI",
          "Web Development"
        ]
      },
      "wix": {
        "order": 3,
        "alt": "Cosmovar beauty and aesthetics website displayed on a laptop",
        "tags": [
          "Beauty & Aesthetics",
          "UX/UI",
          "Web Development"
        ]
      },
      "landing": {
        "order": 0
      }
    }
  }
];

/** Returns the original objects, never page-specific copies of projects. */
export function projectsFor(context: ProjectContext): Project[] {
  return PROJECTS.filter(project => project.placements[context] !== undefined)
    .sort((a, b) => a.placements[context]!.order - b.placements[context]!.order);
}

export function projectPresentation(project: Project, context: ProjectContext) {
  const placement = project.placements[context];
  return {
    title: placement?.title ?? project.title,
    alt: placement?.alt ?? project.alt,
    tags: placement?.tags ?? project.tags,
  };
}

export function homeProjects() {
  return PROJECTS.filter((project): project is Project & { home: HomeProjectContent } => project.home !== undefined)
    .sort((a, b) => a.home.order - b.home.order);
}

/** Intentional same-format fallback; square artwork is never used for wide layouts. */
export function homeProjectImage(project: Project) {
  return project.images.homeLandscape ?? project.images.landscape;
}
