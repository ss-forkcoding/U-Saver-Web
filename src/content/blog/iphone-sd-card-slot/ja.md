---
title: "iPhoneにSDカードは挿せる?iPhone SDカードの接続に必要なリーダーと使い方"
description: "iPhoneにSDカードスロットはありません。iPhoneでSDカードを使うためのカードリーダー、カードの形式、写真の読み込みと書き出しの手順をAppleの案内をもとにまとめました。"
date: 2026-11-11
---

## この記事の要点

iPhoneにはSDカードスロットがありません。iPhoneでSDカードを使うときは、カードをカードリーダーに入れ、リーダーをiPhoneの充電ポートに接続します。

USB-CのiPhoneは「USB-C - SDカードカメラリーダー」、LightningのiPhoneは「Lightning - SDカードカメラリーダー」を使います。どちらもAppleの案内に記載された製品です。

接続したSDカードはファイルアプリで開けます。写真アプリでは写真やビデオを読み込んだり、カードに書き出したりできます。

「カメラで撮った写真をすぐiPhoneで見たい」「iPhoneの側面にカードを入れる場所はある?」。iPhone SDカードについて調べる人がよく抱く疑問です。スロットの代わりにリーダーを使えば、同じことができます。

## iPhoneにSDカードスロットはありますか?

ありません。たとえば[iPhone 15の技術仕様](https://support.apple.com/en-us/111831)の外部ボタンとコネクタの一覧には、USB-CコネクタとSIMトレイはありますが、カードスロットはありません。

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)では、対応するコネクタやアダプタでSDカードリーダーを充電ポートに接続するよう説明しています。iPhoneでSDカードを使う方法はこの接続です。

## iPhoneの端子ごとにどのSDカードリーダーが必要ですか?

まずiPhoneの端子を確認してください。[Appleの案内](https://support.apple.com/en-us/105099)によると、iPhone 15以降のモデルはUSB-Cです。それより前のモデルはLightningです。

| iPhoneの端子 | Appleの案内にあるリーダー | 別売 |
| --- | --- | --- |
| USB-C | USB-C - SDカードカメラリーダー | はい |
| Lightning | Lightning - SDカードカメラリーダー | はい |

USB-CのiPhoneに関するAppleの案内には、接続できる機器として「SDカードアダプタを使ったSDカード」が挙げられています。この記事ではサードパーティ製のカードリーダーを試していません。使う場合は、接続後にファイルアプリでカードが表示されるか確認してください。

USBメモリの接続に必要なアダプタは[iPhoneのOTG接続条件](/blog/ja/iphone-otg-usb)にまとめました。

## SDカードはどの形式にすればよいですか?

iPhoneはexFAT、FAT32、FAT、APFS、macOS拡張(HFS+)でフォーマットされたストレージを読み取れます。データパーティションは1つである必要があります。出典は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)です。

SDカードは容量の規格ごとにファイルシステムが決まっています。[SD Associationの規格の案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。

| 規格 | 容量 | ファイルシステム |
| --- | --- | --- |
| SD | 2GBまで | FAT12、FAT16 |
| SDHC | 2GB超〜32GB | FAT32 |
| SDXC | 32GB超〜2TB | exFAT |
| SDUC | 2TB超〜128TB | exFAT |

FAT32は4GBを超えるファイルを保存できません。長い動画をカードに移すなら、exFATのカードを使ってください。形式ごとの違いは[exFATフォーマット方法](/blog/ja/format-usb-exfat)の表にまとめました。

## SDカードの写真をiPhoneに読み込む方法

[Appleの写真の読み込みの案内](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios)に沿った手順です。

1. カードリーダーをiPhoneのLightningまたはUSB-Cコネクタに差し込みます。
2. SDカードをリーダーに入れます。向きは1方向だけなので、無理に押し込まないでください。
3. 写真アプリを開きます。
4. 「読み込む」をタップします。
5. 読み込む写真とビデオを選び、読み込み先を選びます。
6. 「すべてを読み込む」をタップするか、項目を選んで「読み込む」、「選択項目を読み込む」の順にタップします。
7. 読み込みが終わったら、カードの写真を残すか削除するかを決め、リーダーを取り外します。

## iPhoneの写真をSDカードに書き出す方法

同じAppleの案内では、接続したメモリカードに写真とビデオを書き出す方法も説明しています。

1. カードを入れたリーダーをiPhoneに接続します。
2. 写真アプリで書き出す写真とビデオを選びます。
3. 共有ボタンをタップし、「未編集のオリジナルを書き出す」をタップします。
4. 「場所」の下のカードの名前をタップし、「保存」をタップします。

編集した写真は、編集前のオリジナルが書き出されます。「非表示」アルバムがロックされていると、その中の写真は移されません。USBメモリに移す同じ手順は[iPhoneの写真をUSBに移す方法](/blog/ja/iphone-photos-to-usb)にあります。

## ファイルアプリでSDカードの中身を見るには?

ファイルアプリで「ブラウズ」をタップし、「場所」の下のカードの名前をタップします。「場所」が表示されないときは、もう一度「ブラウズ」をタップします。使い終わったら、リーダーを充電ポートから取り外します。

カードの名前が表示されないときは、次の順に確認してください。

| 順番 | 確認すること | やること |
| --- | --- | --- |
| 1 | カードの向き | カードを抜き、向きを合わせて入れ直します |
| 2 | カードの形式 | MacかPCで形式を確認します。NTFSはAppleの一覧にありません |
| 3 | パーティションの数 | データパーティションが1つか確認します |
| 4 | リーダー | Appleの案内にあるリーダーか、別のリーダーで接続し直します |

## USBメモリにバックアップするには?

次のアプリはUSBメモリを前提に案内しています。カードリーダーでの動作は確認していません。USBメモリの接続と形式は[iPhone USBメモリ総まとめ](/blog/ja/iphone-usb-drive-guide)をご覧ください。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## iPhone SDカードのよくある質問

### iPhoneにSDカードを直接挿せますか?

挿せません。iPhoneにはSDカードスロットがないので、カードリーダーを充電ポートに接続します。

### SDカードリーダーはどれを買えばよいですか?

iPhoneの端子に合わせて選びます。Appleの案内には「USB-C - SDカードカメラリーダー」と「Lightning - SDカードカメラリーダー」が記載されています。この記事では特定のサードパーティ製品を試しておらず、おすすめもしていません。

### 64GB以上のSDカードもiPhoneで使えますか?

SD Associationによると、32GBを超えるSDXCカードはexFATを使います。exFATはAppleの外部ストレージの形式一覧にあります。

### 写真を読み込むとSDカードの元データは消えますか?

Appleの案内によると、読み込みが終わった後にカードの写真を残すか削除するかを自分で選びます。

### SDカードの中身は暗号化されますか?

SD Associationの表では、SDXCカードの標準の形式はexFATです。[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATはファイルシステムレベルの暗号化に対応していません。カードをなくすと他の人が内容を見られるので、保管には注意してください。
