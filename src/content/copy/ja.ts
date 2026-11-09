import { appleGuides, feedbackLimits, refundUrl, site } from "@/content/site";
import type { SiteCopy } from "./types";

const limit = feedbackLimits.messageMax.toLocaleString("en-US");
const externalStorageLink = { label: "Appleの外部ストレージ接続ガイド", href: appleGuides.externalStorage };
const backupLink = { label: "AppleのiPhoneバックアップガイド", href: appleGuides.backup };
const feedbackRetention = "受付日から1年間保管し、その後削除します。";

// アプリ内のメニュー名は u-saver の Localizable.xcstrings の日本語値に合わせる。
export const ja = {
  description: "パソコンなしで一般的なUSBメモリにiPhoneの写真、動画、連絡先をバックアップし、復元できるアプリです。",
  homeTitle: `${site.name} | パソコンなしでiPhoneをUSBメモリにバックアップ`,
  nav: { blog: "ブログ", support: "サポート", privacy: "プライバシーポリシー", language: "言語を選択" },
  updatedLabel: "最終更新",
  operatingSystem: "iOS 26以降",
  home: {
    heroEyebrow: "写真は自分のUSBに",
    heroLines: ["iPhoneの写真を", "パソコンなしでUSBメモリに保存。"],
    heroLead: "動画と連絡先も保存でき、USBメモリの内容はアプリから写真アプリと連絡先に復元できます。",
    price: "韓国では5,000ウォン未満でずっと使えます",
    heroActions: [{ label: "自分のiPhoneで使えるか確認", href: "#conditions", primary: true }],
    optionsEyebrow: "どちらか選ぶだけ",
    optionsTitle: "すべてバックアップしますか、写真のみにしますか?",
    options: [
      { name: "すべてバックアップ", detail: "写真、動画、連絡先をUSBメモリに保存します。" },
      { name: "写真のみ", detail: "写真とLive Photosを保存します。" },
    ],
    stepsEyebrow: "使い方",
    stepsTitle: "USBメモリを挿して、円を長押しするだけ",
    steps: [
      { title: "USBメモリを挿して画面をタップします", detail: "初回のみ、iPhoneのファイル選択画面でUSBメモリを選びます。", screen: "/screens/usb-pick.webp" },
      { title: "空き容量を確認します", detail: "円の中にUSBメモリの空き容量と全体の容量が表示されます。アプリは書き込みと読み込みの速度も測定します。", screen: "/screens/usb-capacity.webp" },
      { title: "円を横にスライドして方式を選びます", detail: "「すべてバックアップ」か「写真のみ」を選びます。", screen: "/screens/mode-all.webp" },
      { title: "円を長押しして開始します", detail: "USBメモリが抜けると、警告を表示して10秒間待機します。", screen: "/screens/mode-photos.webp" },
      { title: "バックアップ履歴で結果を確認します", detail: "完了したかどうかと停止した位置がアプリに残ります。停止したバックアップは履歴から再開できます。", screen: "/screens/history.webp" },
    ],
    conditionsEyebrow: "購入の前に",
    conditionsTitle: "購入前に5つの条件を確認してください",
    conditionsNote: "以下の条件に合っているか、先に確認してください。",
    conditions: [
      { icon: "phone", label: "iPhone", value: "iOS 26以降が必要です。Lightning端子のiPhoneにはUSBアダプタが必要です。" },
      { icon: "drive", label: "USB形式", value: "exFATとFAT32形式のUSBメモリを使えます。" },
      { icon: "bolt", label: "電源", value: "USBメモリの種類によっては、iPhoneに外部電源の接続が必要です。" },
      { icon: "screen", label: "バックアップ中", value: "バックアップ中はアプリを開いたままにしてください。" },
      { icon: "lock", label: "セキュリティ", value: "USBメモリは安全な場所に保管してください。" },
    ],
    supportPrompt: ["ご不明な点は", "サポートページ", "でご確認ください。"],
    faqEyebrow: "まずはこちらを",
    faqTitle: "よくある質問",
    faqs: [
      { q: "U-Saverはどんなアプリですか?", a: "U-Saverは、パソコンなしで一般的なUSBメモリにiPhoneの写真、動画、連絡先を保存するiOSアプリです。USBメモリに保存した内容は、アプリから写真アプリと連絡先に復元できます。" },
      {
        q: "パソコンなしでiPhoneの写真をUSBメモリにバックアップできますか?",
        a: "はい。USBメモリをiPhoneに挿し、アプリの円を長押しするとバックアップが始まります。Appleの案内によると、iPhoneは外部ストレージを直接接続してファイルを移動できます。",
        sources: [externalStorageLink],
      },
      { q: "どのUSBメモリが使えますか?", a: "exFATとFAT32形式のUSBメモリを使えます。4GBを超える動画を保存するにはexFAT形式を選んでください。どちらもAppleが案内しているiPhoneの外部ストレージ形式です。" },
      { q: "U-Saverの価格はいくらですか?", a: "韓国でのU-Saverの価格は4,900ウォンの買い切りです。現在、App Storeでの公開を準備しています。" },
      { q: "バックアップ中にUSBメモリが抜けるとどうなりますか?", a: "アプリが警告を表示して10秒間待機します。その間にUSBメモリを挿し直してください。停止したバックアップはアプリのバックアップ履歴から再開できます。" },
      {
        q: "iCloudバックアップとは何が違いますか?",
        a: "AppleのiPhoneバックアップはiCloudまたはパソコンに保存します。U-Saverは写真、動画、連絡先をUSBメモリに保存します。バックアップ方式は「すべてバックアップ」と「写真のみ」の2つです。",
        sources: [backupLink],
      },
    ],
  },
  support: {
    title: "サポート",
    heading: `${site.name} サポート`,
    description: `${site.name}の問い合わせ先とよくある質問です。USBメモリが表示されないときやバックアップが停止したときの解決方法、返金の方法を案内します。`,
    lead: "USBメモリが表示されない場合やバックアップが停止した場合は、まず下の回答をご確認ください。解決しない場合はメールでお知らせください。",
    emailAction: "メールを送る",
    emailSubject: `${site.name} お問い合わせ`,
    eyebrow: "お手伝いします",
    checklistEyebrow: "早くお答えするために",
    checklistTitle: "メールに次の3項目をご記入ください",
    checklist: ["iPhoneのモデルとiOSのバージョン", "USBメモリの製品名、容量、形式", "画面に表示された文言と発生した時点"],
    faqEyebrow: "まずはこちらを",
    faqTitle: "よくある質問",
    faqs: [
      {
        q: "USBメモリが表示されないときはどうすればいいですか?",
        a: "まずiPhoneのファイルアプリにUSBメモリが表示されるか確認してください。表示されない場合は、形式がexFATまたはFAT32であることを確認し、iPhoneに外部電源を接続してから挿し直してください。",
        sources: [externalStorageLink],
      },
      { q: "USBメモリを挿し直しても再開しないときはどうすればいいですか?", a: "アプリはUSBメモリが抜けると10秒間待機します。画面をタップし、ファイル選択画面で同じUSBメモリをもう一度選んでください。それでも停止したままなら、バックアップ履歴から該当のバックアップを開いて再開してください。" },
      { q: "4GBを超える動画はどう保存しますか?", a: "FAT32形式は1ファイルあたり4GBまで保存できます。それより大きい動画にはexFAT形式のUSBメモリを使ってください。保存できなかった項目は履歴に例外として表示されます。" },
      { q: "画面をロックするとなぜ停止するのですか?", a: "画面がロックされると、システムが処理を終了することがあります。アプリを開いたままにし、停止した場合は履歴から再開してください。" },
      {
        q: "返金はどうすればいいですか?",
        a: "App Storeでの購入はAppleが処理します。下のAppleの「問題を報告する」ページからリクエストしてください。",
        sources: [{ label: "Appleの「問題を報告する」ページを開く", href: refundUrl }],
      },
    ],
  },
  feedback: {
    eyebrow: "ご意見をお待ちしています",
    title: "アプリへのご意見をお聞かせください",
    note: "返信が必要なお問い合わせには、メールアドレスを添えてください。",
    shortcut: "意見を送る",
    categoryLabel: "種類",
    categoryPlaceholder: "選択してください",
    categories: { bug: "不具合や問題", idea: "改善の提案", question: "質問", other: "その他" },
    messageLabel: "内容",
    messageHelp: `${feedbackLimits.messageMin}文字以上${limit}文字以内で入力してください。`,
    emailLabel: "メールアドレス(任意)",
    emailHelp: "メールアドレスは返信にのみ使います。",
    submit: "意見を送信",
    pending: "送信しています",
    success: "ご意見を受け付けました。ありがとうございます。",
    invalidSummary: "入力内容をもう一度ご確認ください。",
    rateLimited: "短時間に複数回送信されました。10分後にもう一度お試しください。",
    unavailable: `現在ご意見を受け付けられませんでした。${site.supportEmail} までメールでお送りください。`,
    errors: {
      category: "種類を選択してください。",
      messageShort: `内容を${feedbackLimits.messageMin}文字以上入力してください。`,
      messageLong: `内容は${limit}文字まで入力できます。`,
      email: "メールアドレスをもう一度ご確認ください。例: name@example.com",
    },
  },
  privacy: {
    eyebrow: "ありのままに記載しています",
    effectiveLabel: "施行日",
    title: "プライバシーポリシー",
    lead: `${site.name}アプリは、写真、動画、連絡先をiPhoneとUSBメモリの外に送信しません。当社が受け取る情報は、意見フォームとメールでお送りいただいた内容、サイトのアクセス記録です。`,
    description: `${site.name}アプリとサイトが扱う情報、保管期間、削除の依頼方法を案内します。`,
    sections: [
      {
        id: "app",
        title: "アプリが扱う情報",
        paragraphs: ["アプリには会員登録がなく、広告や分析ツールもありません。以下の情報はiPhoneとUSBメモリにのみ存在し、当社には送信されません。"],
        records: [
          {
            name: "写真と動画",
            rows: [
              { label: "利用目的", value: "選択した方式に応じてUSBメモリにコピーします。" },
              { label: "保存場所", value: "選択したUSBメモリ" },
            ],
          },
          {
            name: "連絡先",
            rows: [
              { label: "利用目的", value: "連絡先のコピーをvCardファイルにしてUSBメモリに保存します。連絡先の写真も含みます。" },
              { label: "保存場所", value: "選択したUSBメモリ" },
            ],
          },
          {
            name: "共有したファイル",
            rows: [
              { label: "利用目的", value: "共有シートで選択したファイルをUSBメモリに移動します。" },
              { label: "保存場所", value: "USBメモリのU-Saver Filesフォルダ" },
            ],
          },
          {
            name: "バックアップ履歴とアプリの設定",
            rows: [
              { label: "内容", value: "バックアップ日時、USB名、バックアップ方式、結果、保存した項目の数と容量、USB接続情報、テーマ、言語" },
              { label: "保存場所", value: "iPhoneのアプリ用ストレージ" },
            ],
          },
        ],
      },
      {
        id: "usb",
        title: "USBメモリに保存されたファイル",
        notice: "USBメモリに保存されたファイルは暗号化されません。USBメモリを手にした人は、写真、動画、連絡先を開くことができます。",
        paragraphs: ["USBメモリは安全な場所に保管してください。USBメモリ内のデバイス別フォルダ名はランダムな文字で作成し、iPhoneの名前は含めません。"],
      },
      {
        id: "collected",
        title: "当社が受け取る情報",
        paragraphs: ["サイトには分析ツールや広告Cookieはありません。ご意見やメールに、マイナンバーなどの身分証番号、パスワード、健康情報を記載しないでください。"],
        records: [
          {
            name: "意見フォーム",
            rows: [
              { label: "受け取る項目", value: "意見の種類、内容、受付日時、メールアドレス(任意)" },
              { label: "利用目的", value: "お問い合わせへの回答とアプリの改善" },
              { label: "保管期間", value: feedbackRetention },
            ],
          },
          {
            name: "メールでのお問い合わせ",
            rows: [
              { label: "受け取る項目", value: "送信者のメールアドレス、メールの内容" },
              { label: "利用目的", value: "お問い合わせへの回答" },
              { label: "保管期間", value: feedbackRetention },
            ],
          },
          {
            name: "サイトのアクセス記録",
            rows: [
              { label: "受け取る項目", value: "IPアドレス、ブラウザ情報、アクセス日時。アクセス時に自動で作成されます。" },
              { label: "利用目的", value: "サイトの提供とエラーの確認" },
              { label: "保管期間", value: "サイト運営事業者(Vercel)の記録保管期間に従います。" },
            ],
          },
          {
            name: "繰り返し送信の防止",
            rows: [
              { label: "受け取る項目", value: "意見フォームを送信したIPアドレス" },
              { label: "利用目的", value: "10分間に5回を超える繰り返し送信を防ぎます。" },
              { label: "保管期間", value: "サーバーのメモリに一時的に置きます。意見シートには保存しません。" },
            ],
          },
        ],
      },
      {
        id: "purchase",
        title: "購入情報と第三者提供",
        paragraphs: [
          "アプリの購入と返金はAppleが処理します。当社は支払い方法やAppleアカウントの情報を受け取りません。",
          "当社は利用者の情報を販売しません。法令が求める場合を除き、他社に提供しません。",
        ],
      },
      {
        id: "vendors",
        title: "委託先と国外移転",
        paragraphs: ["以下の事業者は米国の会社であり、情報が韓国外で処理されることがあります。意見フォームを使わない場合、意見の内容は移転されません。"],
        records: [
          {
            name: "Vercel Inc.(米国)",
            rows: [
              { label: "委託業務", value: "サイトの運営と意見フォームの中継" },
              { label: "移転項目", value: "サイトのアクセス記録、意見フォームの入力内容" },
              { label: "移転の時点", value: "サイトへのアクセス時または意見の送信時にインターネットで送信します。" },
              { label: "事業者の方針", value: "Vercelプライバシーポリシー", href: "https://vercel.com/legal/privacy-policy" },
            ],
          },
          {
            name: "Google LLC(米国)",
            rows: [
              { label: "委託業務", value: "意見の保存(Googleスプレッドシート)" },
              { label: "移転項目", value: "意見の種類、内容、受付日時、メールアドレス(任意)" },
              { label: "移転の時点", value: "意見の送信時にインターネットで送信します。" },
              { label: "事業者の方針", value: "Googleプライバシーポリシー", href: "https://policies.google.com/privacy" },
            ],
          },
        ],
      },
      {
        id: "rights",
        title: "権利の行使と削除",
        items: [
          "iPhoneの設定のプライバシーメニューで、写真と連絡先へのアクセス権限をいつでもオフにできます。",
          "アプリを削除すると、iPhoneにあるバックアップ履歴とアプリの設定が消去されます。USBメモリのファイルは残るため、ご自身で削除してください。",
          `ご意見やお問い合わせ内容の閲覧、訂正、削除、処理の停止は ${site.supportEmail} までご依頼ください。依頼を受けた日から10日以内に回答します。`,
          "保管期間が終了すると、シートの該当行とメールを復元できないように削除します。",
          "14歳未満の方は、保護者の方が代わりにお問い合わせください。",
        ],
      },
      {
        id: "security",
        title: "安全管理措置",
        items: ["サイトと意見の送信には暗号化された接続(HTTPS)を使います。", "意見シートには秘密の値で確認されたリクエストのみを保存します。"],
      },
      {
        id: "contact",
        title: "お問い合わせ",
        records: [
          {
            name: "個人情報保護の担当",
            rows: [
              { label: "担当", value: `NextGenAI Co. ${site.name} サポート担当` },
              { label: "メール", value: site.supportEmail, href: `mailto:${site.supportEmail}` },
            ],
          },
        ],
      },
      {
        id: "remedy",
        title: "被害救済機関(韓国)",
        paragraphs: ["個人情報の侵害で支援が必要な場合は、韓国の以下の機関に相談できます。"],
        items: ["個人情報侵害申告センター: 118", "個人情報紛争調停委員会: 1833-6972", "大検察庁: 1301", "警察庁: 182"],
      },
      {
        id: "changes",
        title: "ポリシーの変更",
        paragraphs: ["内容を変更する場合は、このページでお知らせし、上記の施行日を更新します。"],
      },
    ],
  },
} as const satisfies SiteCopy;
