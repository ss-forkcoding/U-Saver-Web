import { appleGuides, feedbackLimits, refundUrl, site } from "@/content/site";
import type { SiteCopy } from "./types";

const limit = feedbackLimits.messageMax.toLocaleString("en-US");
const externalStorageLink = { label: "Apple guide to external storage", href: appleGuides.externalStorage };
const backupLink = { label: "Apple guide to iPhone backup", href: appleGuides.backup };
const feedbackRetention = "Kept for 1 year from the date received, then deleted.";

// 앱 안의 메뉴 이름은 u-saver 의 Localizable.xcstrings 영어 값과 맞춘다.
export const en = {
  description: "Back up and restore iPhone photos, videos, and contacts on a regular USB drive, with no computer.",
  homeTitle: `${site.name} | Back up iPhone to USB without a computer`,
  nav: { blog: "Blog", support: "Support", privacy: "Privacy Policy", language: "Choose language" },
  updatedLabel: "Last updated",
  operatingSystem: "iOS 26 or later",
  home: {
    heroEyebrow: "Your photos, on your USB",
    heroLines: ["Save iPhone photos to USB.", "No computer needed."],
    heroLead: "Save videos and contacts too, then restore them from the USB drive to Photos and Contacts in the app.",
    price: "Under 5,000 KRW in Korea, yours for life",
    heroActions: [{ label: "Check if it fits my iPhone", href: "#conditions", primary: true }],
    optionsEyebrow: "Pick one",
    optionsTitle: "Back up all, or photos only?",
    options: [
      { name: "Back up all", detail: "Saves photos, videos, and contacts to the USB drive." },
      { name: "Photos only", detail: "Saves photos and Live Photos." },
    ],
    stepsEyebrow: "How it works",
    stepsTitle: "Plug in the USB drive and press and hold the circle",
    steps: [
      { title: "Plug in the USB drive and tap the screen", detail: "The first time, choose the drive in the iPhone file picker.", screen: "/screens/usb-pick.webp" },
      { title: "Check the free space", detail: "The circle shows the drive's free and total space. The app also measures write and read speed.", screen: "/screens/usb-capacity.webp" },
      { title: "Slide the circle to choose a mode", detail: "Choose Back up all or Photos only.", screen: "/screens/mode-all.webp" },
      { title: "Press and hold the circle to start", detail: "If the drive comes out, the app shows a warning and waits 10 seconds.", screen: "/screens/mode-photos.webp" },
      { title: "Check the result in Backup history", detail: "The app records whether the backup finished and where it stopped. Resume a stopped backup from the history.", screen: "/screens/history.webp" },
    ],
    conditionsEyebrow: "Before you buy",
    conditionsTitle: "Check these five things first",
    conditionsNote: "Make sure your setup meets the conditions below.",
    conditions: [
      { icon: "phone", label: "iPhone", value: "Requires iOS 26 or later. iPhones with a Lightning port need a USB adapter." },
      { icon: "drive", label: "USB format", value: "Works with exFAT and FAT32 USB drives." },
      { icon: "bolt", label: "Power", value: "Some USB drives need external power connected to the iPhone." },
      { icon: "screen", label: "During a backup", value: "Keep the app open while it backs up." },
      { icon: "lock", label: "Security", value: "Store the USB drive somewhere safe." },
    ],
    supportPrompt: ["Have a question? Visit the ", "support page", "."],
    faqEyebrow: "Quick answers",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "What is U-Saver?", a: "U-Saver is an iOS app that saves iPhone photos, videos, and contacts to a regular USB drive with no computer. The app restores what you saved to Photos and Contacts." },
      {
        q: "Can I back up iPhone photos to USB without a computer?",
        a: "Yes. Plug the USB drive into your iPhone and press and hold the circle in the app to start. According to Apple, iPhone can connect directly to external storage and move files.",
        sources: [externalStorageLink],
      },
      { q: "Which USB drives can I use?", a: "You can use USB drives formatted as exFAT or FAT32. To save videos larger than 4GB, choose exFAT. Apple lists both as supported formats for external storage on iPhone." },
      { q: "How much does U-Saver cost?", a: "In Korea, U-Saver is a one-time purchase of 4,900 KRW. The app is currently being prepared for the App Store." },
      { q: "What happens if the USB drive comes out during a backup?", a: "The app shows a warning and waits 10 seconds. Plug the drive back in during that time. You can resume a stopped backup from Backup history in the app." },
      {
        q: "How is it different from iCloud backup?",
        a: "Apple's iPhone backup saves to iCloud or a computer. U-Saver saves photos, videos, and contacts to a USB drive. It has 2 backup modes: Back up all and Photos only.",
        sources: [backupLink],
      },
    ],
  },
  support: {
    title: "Support",
    heading: `${site.name} Support`,
    description: `Contact email and answers for ${site.name}. Learn what to do when a USB drive does not appear or a backup stops, and how to request a refund.`,
    lead: "If your USB drive does not appear or a backup stopped, check the answers below first. If that does not solve it, email us.",
    emailAction: "Send an email",
    emailSubject: `${site.name} support`,
    eyebrow: "We can help",
    checklistEyebrow: "For a faster reply",
    checklistTitle: "Include these 3 items in your email",
    checklist: ["iPhone model and iOS version", "USB product name, capacity, and format", "The message on screen and when it appeared"],
    faqEyebrow: "Quick answers",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "What should I do if the USB drive does not appear?",
        a: "First, check whether the drive appears in the Files app on your iPhone. If it does not, confirm the drive is formatted as exFAT or FAT32, connect external power to the iPhone, and plug the drive in again.",
        sources: [externalStorageLink],
      },
      { q: "What if the backup does not resume after I plug the drive back in?", a: "The app waits 10 seconds when the drive comes out. Tap the screen and choose the same drive again in the file picker. If it is still stopped, open that backup in Backup history and resume it." },
      { q: "How do I save videos larger than 4GB?", a: "FAT32 stores up to 4GB per file. For larger videos, use a USB drive formatted as exFAT. Items that could not be saved are marked as exceptions in the history." },
      { q: "Why does the backup stop when the screen locks?", a: "When the screen locks, the system can end the task. Keep the app open. If it stopped, resume it from the history." },
      {
        q: "How do I get a refund?",
        a: "Apple handles App Store purchases. Request a refund on the Apple Report a Problem page below.",
        sources: [{ label: "Open Apple Report a Problem", href: refundUrl }],
      },
    ],
  },
  feedback: {
    eyebrow: "We're listening",
    title: "Tell us what you think of the app",
    note: "If you need a reply, include your email address.",
    shortcut: "Send feedback",
    categoryLabel: "Type",
    categoryPlaceholder: "Please choose",
    categories: { bug: "Bug or problem", idea: "Suggestion", question: "Question", other: "Other" },
    messageLabel: "Message",
    messageHelp: `Write between ${feedbackLimits.messageMin} and ${limit} characters.`,
    emailLabel: "Email (optional)",
    emailHelp: "We use your email only to reply to you.",
    submit: "Send feedback",
    pending: "Sending",
    success: "We received your feedback. Thank you.",
    invalidSummary: "Please check what you entered.",
    rateLimited: "You sent several messages in a short time. Please try again in 10 minutes.",
    unavailable: `We could not receive your feedback right now. Please email ${site.supportEmail}.`,
    errors: {
      category: "Please choose a type.",
      messageShort: `Please write at least ${feedbackLimits.messageMin} characters.`,
      messageLong: `Messages can be up to ${limit} characters.`,
      email: "Please check your email address. Example: name@example.com",
    },
  },
  privacy: {
    eyebrow: "Plainly stated",
    effectiveLabel: "Effective",
    title: "Privacy Policy",
    lead: `The ${site.name} app does not send your photos, videos, or contacts outside your iPhone and USB drive. We receive only what you send through the feedback form or email, and site access logs.`,
    description: `What information the ${site.name} app and site handle, how long it is kept, and how to request deletion.`,
    sections: [
      {
        id: "app",
        title: "Information the app handles",
        paragraphs: ["The app has no sign-up, ads, or analytics tools. The information below stays only on your iPhone and USB drive and is not sent to us."],
        records: [
          {
            name: "Photos and videos",
            rows: [
              { label: "Why it is used", value: "Copied to the USB drive according to the mode you choose." },
              { label: "Where it is stored", value: "The USB drive you choose" },
            ],
          },
          {
            name: "Contacts",
            rows: [
              { label: "Why it is used", value: "A copy of your contacts is saved to the USB drive as a vCard file, including contact photos." },
              { label: "Where it is stored", value: "The USB drive you choose" },
            ],
          },
          {
            name: "Shared files",
            rows: [
              { label: "Why it is used", value: "Files you choose in the share sheet are moved to the USB drive." },
              { label: "Where it is stored", value: "The U-Saver Files folder on the USB drive" },
            ],
          },
          {
            name: "Backup history and app settings",
            rows: [
              { label: "Contents", value: "Backup time, USB name, backup mode, result, number and size of saved items, USB connection information, theme, and language" },
              { label: "Where it is stored", value: "The app's storage on your iPhone" },
            ],
          },
        ],
      },
      {
        id: "usb",
        title: "Files saved on the USB drive",
        notice: "Files saved on the USB drive are not encrypted. Anyone who gets the drive can open your photos, videos, and contacts.",
        paragraphs: ["Please keep the USB drive somewhere safe. The per-device folder names on the drive use random characters and do not include your iPhone's name."],
      },
      {
        id: "collected",
        title: "Information we receive",
        paragraphs: ["The site has no analytics tools or advertising cookies. Please do not include national ID numbers, passwords, or health information in feedback or email."],
        records: [
          {
            name: "Feedback form",
            rows: [
              { label: "What we receive", value: "Feedback type, message, time received, and email address (optional)" },
              { label: "Why we use it", value: "To answer inquiries and improve the app" },
              { label: "Retention", value: feedbackRetention },
            ],
          },
          {
            name: "Email inquiries",
            rows: [
              { label: "What we receive", value: "Sender's email address and message content" },
              { label: "Why we use it", value: "To answer inquiries" },
              { label: "Retention", value: feedbackRetention },
            ],
          },
          {
            name: "Site access logs",
            rows: [
              { label: "What we receive", value: "IP address, browser information, and access time. These are created automatically when you visit." },
              { label: "Why we use it", value: "To provide the site and check for errors" },
              { label: "Retention", value: "Follows the log retention period of our site host (Vercel)." },
            ],
          },
          {
            name: "Repeat submission prevention",
            rows: [
              { label: "What we receive", value: "The IP address that submitted the feedback form" },
              { label: "Why we use it", value: "To block more than 5 submissions in 10 minutes" },
              { label: "Retention", value: "Held briefly in server memory. It is not saved to the feedback sheet." },
            ],
          },
        ],
      },
      {
        id: "purchase",
        title: "Purchase information and third parties",
        paragraphs: [
          "Apple handles app purchases and refunds. We do not receive your payment method or Apple account information.",
          "We do not sell user information. We do not provide it to other companies except where the law requires it.",
        ],
      },
      {
        id: "vendors",
        title: "Service providers and transfers abroad",
        paragraphs: ["The companies below are based in the United States, and information may be processed outside Korea. If you do not use the feedback form, your feedback content is not transferred."],
        records: [
          {
            name: "Vercel Inc. (United States)",
            rows: [
              { label: "Role", value: "Running the site and relaying the feedback form" },
              { label: "Information transferred", value: "Site access logs and feedback form entries" },
              { label: "When", value: "Sent over the internet when you visit the site or submit feedback." },
              { label: "Provider policy", value: "Vercel Privacy Policy", href: "https://vercel.com/legal/privacy-policy" },
            ],
          },
          {
            name: "Google LLC (United States)",
            rows: [
              { label: "Role", value: "Storing feedback (Google Sheets)" },
              { label: "Information transferred", value: "Feedback type, message, time received, and email address (optional)" },
              { label: "When", value: "Sent over the internet when you submit feedback." },
              { label: "Provider policy", value: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
            ],
          },
        ],
      },
      {
        id: "rights",
        title: "Your rights and deletion",
        items: [
          "You can turn off access to Photos and Contacts at any time under Privacy in iPhone Settings.",
          "Deleting the app removes the backup history and app settings on your iPhone. Files on the USB drive remain, so please delete them yourself.",
          `To access, correct, delete, or stop the processing of your feedback and inquiries, email ${site.supportEmail}. We reply within 10 days of receiving your request.`,
          "When the retention period ends, we permanently delete the related sheet row and email.",
          "If you are under 14, please have a parent or guardian contact us for you.",
        ],
      },
      {
        id: "security",
        title: "Security measures",
        items: ["The site and feedback submissions use encrypted connections (HTTPS).", "The feedback sheet stores only requests verified with a secret value."],
      },
      {
        id: "contact",
        title: "Contact",
        records: [
          {
            name: "Privacy contact",
            rows: [
              { label: "Contact", value: `NextGenAI Co. ${site.name} Support` },
              { label: "Email", value: site.supportEmail, href: `mailto:${site.supportEmail}` },
            ],
          },
        ],
      },
      {
        id: "remedy",
        title: "Organizations that can help (Korea)",
        paragraphs: ["If you need help with a privacy violation, you can contact the organizations below in Korea."],
        items: ["Privacy Infringement Report Center: 118", "Personal Information Dispute Mediation Committee: 1833-6972", "Supreme Prosecutors' Office: 1301", "National Police Agency: 182"],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        paragraphs: ["If we change this policy, we will post it on this page and update the effective date above."],
      },
    ],
  },
} as const satisfies SiteCopy;
