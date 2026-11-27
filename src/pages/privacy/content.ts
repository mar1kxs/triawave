export type PolicyBlock =
  | { type: "paragraph" | "subheading" | "retention-heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "links"; items: { label: string; href: string }[] }
  | { type: "table"; headings: string[]; rows: string[][] };
export interface PolicySection { heading: string; blocks: PolicyBlock[] }

// Policy text transcribed from the supplied Figma design, without legal edits.
export const POLICY_SECTIONS: PolicySection[] = [
  {
    "heading": "1. Who is responsible for your data?",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The controller of your personal data is Dmytro Kurlov, based in the Czech Republic, who operates the Triawave website."
      },
      {
        "type": "paragraph",
        "text": "Triawave is the name used for this project and is not a separate legal entity. In this policy, “we”, “us” and “our” refer to Dmytro Kurlov."
      },
      {
        "type": "paragraph",
        "text": "For questions about this policy or your personal data, contact:"
      },
      {
        "type": "paragraph",
        "text": "hello@triawave.studio"
      }
    ]
  },
  {
    "heading": "2. Information we collect",
    "blocks": [
      {
        "type": "subheading",
        "text": "Information you provide"
      },
      {
        "type": "paragraph",
        "text": "When you submit a form or communicate with us, we collect the information you choose to provide. This may include:"
      },
      {
        "type": "list",
        "items": [
          "Your name and business name.",
          "Your email address, telephone number or messaging username.",
          "Your website address.",
          "The services you are interested in, your estimated budget and project requirements.",
          "Messages, reference links, documents and uploaded files.",
          "Information about how you found us and any referral details.",
          "Correspondence relating to your enquiry."
        ]
      },
      {
        "type": "paragraph",
        "text": "Please provide only information relevant to your request. Do not submit passwords, payment card details, identity documents or sensitive personal information."
      },
      {
        "type": "paragraph",
        "text": "If you share another person’s information, make sure you have a lawful reason to do so."
      },
      {
        "type": "subheading",
        "text": "Technical information"
      },
      {
        "type": "paragraph",
        "text": "Our hosting and infrastructure providers process information needed to deliver, maintain and protect the website. This may include your IP address, browser and device information, requested URLs, timestamps and diagnostic or security records."
      },
      {
        "type": "subheading",
        "text": "Analytics information"
      },
      {
        "type": "paragraph",
        "text": "If you consent to analytics, Google Analytics 4 collects information about your use of the website. This may include:"
      },
      {
        "type": "list",
        "items": [
          "Pages visited and navigation between pages.",
          "Session information and time spent interacting with the website.",
          "Referring websites and campaign information.",
          "Browser, device, language and approximate location.",
          "Cookie-based identifiers.",
          "Interactions such as scrolling, outbound link clicks, file-link clicks and successful form submissions where tracking is configured."
        ]
      },
      {
        "type": "paragraph",
        "text": "We do not send your name, email address, telephone number, uploaded files or the contents of your project enquiry to Google Analytics."
      }
    ]
  },
  {
    "heading": "3. Why we process personal data",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We process personal data for the following purposes and legal bases under the General Data Protection Regulation (“GDPR”):"
      },
      {
        "type": "table",
        "headings": [
          "Purpose",
          "Legal basis"
        ],
        "rows": [
          [
            "Responding to general enquiries and communicating with representatives of businesses",
            "Our legitimate interests in responding to requests and discussing potential projects — Article 6(1)(f)."
          ],
          [
            "Taking steps you request before entering into a contract with you personally",
            "Pre-contractual steps at your request — Article 6(1)(b), where applicable."
          ],
          [
            "Delivering, maintaining and securing the website and preventing abuse",
            "Our legitimate interests in operating a reliable and secure website — Article 6(1)(f)."
          ],
          [
            "Analysing website usage and understanding which channels lead to enquiries",
            "Your consent — Article 6(1)(a)."
          ],
          [
            "Remembering and administering your privacy choices",
            "Compliance with applicable consent requirements — Article 6(1)(c), and our legitimate interest in respecting your choices where applicable — Article 6(1)(f)."
          ],
          [
            "Meeting applicable legal obligations",
            "Compliance with a legal obligation — Article 6(1)(c)."
          ],
          [
            "Establishing, exercising or defending legal claims",
            "Our legitimate interests in protecting our rights — Article 6(1)(f)."
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Providing enquiry information is voluntary. Without the details marked as required in a form, we may be unable to respond or assess your request."
      },
      {
        "type": "paragraph",
        "text": "Submitting an enquiry does not subscribe you to a marketing mailing list. Consent to analytics is optional and is not a condition of contacting us."
      }
    ]
  },
  {
    "heading": "4. Forms, communications and service providers",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We use the following services to operate the website and handle enquiries:"
      },
      {
        "type": "table",
        "headings": [
          "Service",
          "Purpose"
        ],
        "rows": [
          [
            "Vercel",
            "Website hosting, delivery and supporting infrastructure."
          ],
          [
            "Tally",
            "Collecting form submissions and uploaded files."
          ],
          [
            "Make",
            "Transferring enquiry information from Tally to Trello."
          ],
          [
            "Trello, provided by Atlassian",
            "Organising and managing enquiries and related project information."
          ],
          [
            "Google Analytics 4",
            "Website analytics after you give consent."
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "An enquiry submitted through Tally is transferred through Make to Trello. Copies may also remain in Tally and in Make’s execution history until deleted or removed under the relevant retention settings."
      },
      {
        "type": "paragraph",
        "text": "Email and, where you choose them, messaging providers process communications through their services. If you contact us through WhatsApp, Telegram or a social platform, that provider also handles information under its own applicable terms and privacy notice."
      },
      {
        "type": "paragraph",
        "text": "Authorised collaborators may access relevant information where necessary to respond to an enquiry or assist with a project. Access must be limited to what they need and subject to confidentiality obligations."
      },
      {
        "type": "paragraph",
        "text": "We do not sell your personal data. We may disclose relevant information to professional advisers or competent authorities where necessary for legal advice, compliance with law or the protection of legal rights."
      }
    ]
  },
  {
    "heading": "5. Google Analytics and your cookie choices",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We use Google Analytics 4, provided by Google, to understand website usage and improve our content and enquiry process."
      },
      {
        "type": "paragraph",
        "text": "Our analytics setup requires your consent:"
      },
      {
        "type": "list",
        "items": [
          "Before you choose, Google Analytics remains blocked.",
          "If you accept analytics, the analytics tag loads and starts collecting permitted events.",
          "If you reject optional cookies, Google Analytics remains blocked."
        ]
      },
      {
        "type": "paragraph",
        "text": "You can change your choice or withdraw consent through “Cookie settings” in the website footer."
      },
      {
        "type": "paragraph",
        "text": "We do not send analytics events or cookieless analytics pings to Google before you consent or after you reject analytics."
      },
      {
        "type": "paragraph",
        "text": "Withdrawing consent stops further analytics collection through our website and removes the analytics cookies controlled by our implementation. Withdrawal does not make earlier processing unlawful and does not automatically delete information already collected. You may contact us about applicable deletion rights."
      },
      {
        "type": "paragraph",
        "text": "We use analytics to measure website activity, not to build personalised advertising audiences. We do not use Meta Pixel or Google Ads remarketing tags on this website."
      },
      {
        "type": "paragraph",
        "text": "Google explains its handling of information from partner sites at How Google uses information from sites or apps that use its services."
      },
      {
        "type": "paragraph",
        "text": "Further information about cookies, their purposes and duration is provided in our Cookie Policy."
      }
    ]
  },
  {
    "heading": "6. International transfers",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Some providers and their subprocessors operate internationally. Personal data may therefore be processed outside the European Economic Area, including in the United States."
      },
      {
        "type": "paragraph",
        "text": "Where required, international transfers are covered by an applicable European Commission adequacy decision or appropriate safeguards, such as the European Commission’s Standard Contractual Clauses. The mechanism depends on the recipient and the relevant processing arrangement."
      },
      {
        "type": "paragraph",
        "text": "Provider information and contractual safeguards are available here:"
      },
      {
        "type": "links",
        "items": [
          { "label": "Tally data protection information", "href": "https://tally.so/help/data-processing-agreement" },
          { "label": "Make data processing terms", "href": "https://www.make.com/data-processing-agreement.pdf" },
          { "label": "Atlassian Data Processing Addendum", "href": "https://www.atlassian.com/legal/data-processing-addendum" },
          { "label": "Vercel Data Processing Addendum", "href": "https://vercel.com/legal/dpa" },
          { "label": "Google Data Processing Terms", "href": "https://business.safety.google/adsprocessorterms/" }
        ]
      },
      {
        "type": "paragraph",
        "text": "Contact hello@triawave.studio for information about safeguards relevant to your personal data or to request a copy, subject to necessary redactions."
      }
    ]
  },
  {
    "heading": "7. How long we keep information",
    "blocks": [
      {
        "type": "retention-heading",
        "text": "Enquiries"
      },
      {
        "type": "paragraph",
        "text": "If an enquiry does not become a project, we delete or irreversibly anonymise its personal data within six months after discussions end."
      },
      {
        "type": "paragraph",
        "text": "Where discussions remain active, we retain relevant information for that purpose and periodically review whether it is still needed. Routine automated messages do not restart the retention period."
      },
      {
        "type": "retention-heading",
        "text": "Client and contractual records"
      },
      {
        "type": "paragraph",
        "text": "If an enquiry becomes a project, we retain necessary information for delivery and administration of that relationship. Relevant records may be retained afterwards to comply with applicable legal obligations or establish, exercise or defend legal claims."
      },
      {
        "type": "paragraph",
        "text": "The period depends on the type of record, the applicable statutory retention requirements and relevant limitation periods. This does not justify retaining all enquiry materials indefinitely."
      },
      {
        "type": "retention-heading",
        "text": "Analytics"
      },
      {
        "type": "paragraph",
        "text": "We configure Google Analytics’ user-level and event-level data retention setting to two months, with resetting of user-data retention on new activity disabled."
      },
      {
        "type": "paragraph",
        "text": "This setting does not apply to standard aggregated reports, which may remain available for longer. Analytics-cookie lifetimes are separate from this setting and are described in our Cookie Policy."
      },
      {
        "type": "retention-heading",
        "text": "Technical records and privacy preferences"
      },
      {
        "type": "paragraph",
        "text": "Technical records are retained for the period necessary for operational troubleshooting, security and abuse prevention, taking account of the provider’s applicable retention settings and any incident requiring investigation."
      },
      {
        "type": "paragraph",
        "text": "Privacy preferences are retained for as long as necessary to remember and administer your choice. We request a new choice when appropriate, including when relevant processing changes."
      },
      {
        "type": "retention-heading",
        "text": "Deletion and backups"
      },
      {
        "type": "paragraph",
        "text": "Our retention process covers the systems used to handle the information, including Tally, Trello and relevant Make execution records. Archiving a Trello card is not the same as deleting it."
      },
      {
        "type": "paragraph",
        "text": "Residual copies in backups may remain until overwritten or removed under the provider’s backup cycle and are not used for ordinary business purposes."
      }
    ]
  },
  {
    "heading": "8. Your rights",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Subject to the conditions and exceptions in applicable law, you may have the right to:"
      },
      {
        "type": "list",
        "items": [
          "Access your personal data and receive a copy.",
          "Correct inaccurate or incomplete information.",
          "Request deletion.",
          "Restrict processing.",
          "Receive certain data in a portable format.",
          "Object to processing based on legitimate interests, on grounds relating to your particular situation.",
          "Withdraw consent at any time where processing relies on consent."
        ]
      },
      {
        "type": "paragraph",
        "text": "For cookie consent, use “Cookie settings” in the footer. For other requests, contact hello@triawave.studio."
      },
      {
        "type": "paragraph",
        "text": "We may request proportionate information to confirm your identity. We normally respond within one month. If a lawful extension is necessary because of the complexity or number of requests, we will explain the reason within that initial period."
      },
      {
        "type": "paragraph",
        "text": "You may complain to the Czech supervisory authority, Úřad pro ochranu osobních údajů (ÚOOÚ), at uoou.gov.cz. You may also contact the competent supervisory authority in your place of habitual residence, work or the alleged infringement."
      },
      {
        "type": "paragraph",
        "text": "You do not have to contact us before making a complaint."
      }
    ]
  },
  {
    "heading": "9. Automated decision-making",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We do not use personal data for solely automated decisions that produce legal or similarly significant effects on you."
      },
      {
        "type": "paragraph",
        "text": "Transferring an enquiry from Tally to Trello through Make is an administrative workflow, not an automated decision about whether to accept your project."
      }
    ]
  },
  {
    "heading": "10. Changes to this policy",
    "blocks": [
      {
        "type": "paragraph",
        "text": "We may update this policy when our services, tools or processing practices change. The latest version will be published on this page with an updated revision date."
      },
      {
        "type": "paragraph",
        "text": "Where required, we will provide additional notice or request fresh consent before introducing a new use of your personal data."
      }
    ]
  }
];
