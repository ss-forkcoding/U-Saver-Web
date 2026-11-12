---
title: "iPhone SDカード総まとめ:必要なリーダー、カードの形式、写真の移し方、認識しないとき"
description: "iPhone SDカードを使う前に確認したいリーダー、カードの種類と形式、写真アプリとファイルアプリの使い分け、認識しないときの手順を、Appleの案内をもとに1か所にまとめました。"
date: 2026-11-13
---

## この記事の要点

iPhone SDカードは、カードリーダーに挿して充電ポートに接続して使います。iPhoneにはSDカードスロットがありません。

先に3つをそろえます。iPhoneのポートに合うリーダー、1つのデータパーティション、Appleの一覧にある形式です。

32GBを超えるSDXCカードの標準の形式はexFATです。FAT32のカードは4GBを超えるファイルを保存できません。

「カメラの写真をiPhoneに移したい」「リーダーを挿してもカードが表示されない」。iPhoneでSDカードを初めて使うときによく出る質問です。この記事では全体の流れをまとめ、作業ごとに詳しい記事へ案内します。

## iPhoneとSDカードで何ができますか?

やりたいことによって使うアプリが違います。表でやりたいことを探し、詳しい記事に進んでください。

| やりたいこと | 使うアプリ | 詳しい記事 |
| --- | --- | --- |
| スロットの有無と必要なリーダーを確認 | なし | [iPhoneにSDカードは挿せる?](/blog/ja/iphone-sd-card-slot) |
| カメラの写真をiPhoneに読み込む | 写真 | [SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader) |
| iPhoneの写真をカードに保存 | 写真 | [iPhoneからSDカードに写真を移す方法](/blog/ja/iphone-photos-to-sd-card) |
| microSDカードを使う | 写真、ファイル | [micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd) |
| SDカードの形式を変える | ファイル | [SDカードフォーマット方法](/blog/ja/format-sd-card) |
| ほかの機器で使ったmicroSDをフォーマットし直す | ファイル | [マイクロSDカードフォーマット方法](/blog/ja/format-microsd) |
| カードが認識しないとき | ファイル | [microSDが認識しないときの確認手順](/blog/ja/sd-card-not-working) |

## iPhoneでSDカードを使うにはどのリーダーが必要ですか?

リーダーはiPhoneのポートで決まります。[Appleの案内](https://support.apple.com/en-us/105099)によると、iPhone 15以降のモデルはUSB-Cコネクタです。それより前のモデルはLightningです。

| iPhoneのポート | Appleの案内にあるリーダー |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader |

リーダーの名前は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)に記載されています。どちらも別売りです。この記事ではほかのメーカーのカードリーダーを試しておらず、特定の製品をおすすめしません。ほかのメーカーのリーダーを使うなら、接続後にファイルアプリの「場所」にカードが表示されるか先に確認してください。

## iPhoneはどのSDカードと形式を読めますか?

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)の対応一覧には、SDSC、SDHC、SDXC、miniSD、microSD、MMCカードがあります。

カードは1つのデータパーティションで、APFS、APFS(暗号化)、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかの形式である必要があります。出典は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)です。NTFSは一覧にありません。

SDカードは容量の規格ごとに標準のファイルシステムが決まっています。[SD Associationの規格の案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。

| 規格 | 容量 | 標準のファイルシステム |
| --- | --- | --- |
| SD | 2GBまで | FAT12、FAT16 |
| SDHC | 2GB超32GBまで | FAT32 |
| SDXC | 32GB超2TBまで | exFAT |
| SDUC | 2TB超128TBまで | exFAT |

[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、1ファイルの最大サイズはFAT32が4GiB、exFATが2^64-1バイトです。長い動画をカードに移すならexFATのカードを使ってください。形式を変える手順は[SDカードフォーマット方法](/blog/ja/format-sd-card)にあります。

## iPhoneにSDカードを初めて接続する手順

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)に沿った手順です。

1. iPhoneのポートに合うリーダーを用意します。
2. カードがexFATかFAT32か確認し、必要ならフォーマットします。
3. リーダーをiPhoneの充電ポートに挿します。
4. SDカードをリーダーに入れます。カードは一方向にしか入らないので、無理に押し込まないでください。
5. ファイルアプリを開き、「ブラウズ」をタップして「場所」の下のカード名をタップします。
6. 使い終わったら、リーダーを充電ポートから抜きます。

iPhoneはリーダーを挿してもウインドウを開きません。「場所」が表示されないときは、もう一度「ブラウズ」をタップしてください。

## 写真アプリとファイルアプリ、どちらを使いますか?

移すファイルの種類で決めます。

| やりたいこと | 使うアプリ | 根拠 |
| --- | --- | --- |
| カメラで撮った写真やビデオをiPhoneに保存 | 写真アプリの読み込み | [Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280) |
| iPhoneの写真やビデオをカードに保存 | 写真アプリの「未編集のオリジナルを書き出す」 | [Appleの読み込みと書き出しの案内](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios) |
| PDFや書類などのファイルをコピー | ファイルアプリ | [Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| カードの名前変更、消去、フォーマット | ファイルアプリ | [Appleのファイル転送の案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios) |

編集した写真を書き出すと、編集前のオリジナルが保存されます。「非表示」アルバムがロックされていると、その中の写真は転送されません。詳しい手順は[iPhoneからSDカードに写真を移す方法](/blog/ja/iphone-photos-to-sd-card)にあります。

USB-C搭載のiPhoneは、ファイルアプリでカードをフォーマットできます。「場所」の下のカード名を長押しし、「消去」をタップして形式を選びます。消去するとカードのデータはすべて削除されます。LightningのiPhoneなら、MacかWindowsパソコンでフォーマットしてください。

## iPhoneでSDカードが表示されない・読み込めないときは?

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)と外部ストレージの案内をまとめた手順です。

| 順番 | 確認すること | やること |
| --- | --- | --- |
| 1 | iOSのバージョン | 写真アプリに「デバイス」がなければ、最新のiOSにアップデートします |
| 2 | リーダーの接続 | リーダーを抜き、30秒待ってから接続し直します |
| 3 | カードの接続 | カードを抜き、30秒待ってから入れ直します |
| 4 | iPhone | iPhoneを再起動します |
| 5 | 形式とパーティション | MacかPCで形式を確認します。NTFSやパーティションが複数ならフォーマットし直します |
| 6 | 別のカード | 別のカードで試します。別のカードで読み込めるなら、元のカードのデータを疑います |

一部の写真だけ表示されないこともあります。Appleのカメラアダプタは、デジタルカメラで撮影したコンテンツだけを読み込みます。名前を変えた、編集した、カードにコピーしたファイルは読み込めないことがあります。こうしたファイルはファイルアプリでコピーしてみてください。カード自体が認識しない場合は[microSDが認識しないときの確認手順](/blog/ja/sd-card-not-working)にまとめました。

## SDカードとUSBメモリは何が違いますか?

iPhoneが読める形式と、ファイルアプリでの手順は同じです。違うのは接続方法です。SDカードにはリーダーが必要で、USB-CのUSBメモリはUSB-CのiPhoneに直接挿せます。

| 項目 | SDカード | USBメモリ |
| --- | --- | --- |
| 接続 | カードリーダーが必要 | USB-CのiPhoneにはUSB-CのUSBメモリを直接接続 |
| 形式 | Appleの一覧の形式、データパーティション1つ | 同じです |
| 使うアプリ | ファイル、写真 | 同じです |

カメラで撮ったカードをそのまま移すなら、SDカードリーダーが手軽です。USBメモリの接続と形式は[iPhone USBメモリ総まとめ](/blog/ja/iphone-usb-drive-guide)をご覧ください。

## USBメモリに定期的にバックアップするには?

下のアプリはUSBメモリを前提に案内しています。カードリーダーでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## iPhone SDカードのよくある質問

### iPhoneにSDカードを直接挿せますか?

挿せません。iPhoneにはSDカードスロットがないので、カードリーダーを充電ポートに接続します。

### microSDカードもiPhoneで読めますか?

Appleのカメラアダプタの案内の対応一覧にmicroSDがあります。お使いのリーダーにmicroSDを挿す場所があるか確認してください。詳しくは[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)をご覧ください。

### 転送速度はどのくらいですか?

Appleのカメラアダプタの案内では、iPhone 15 Pro、iPhone 15 Pro Max、iPhone 16 Pro、iPhone 16 Pro MaxがUSB 3の転送速度に対応し、そのほかのアダプタと機器はUSB 2の速度を使うと記載されています。この記事では実際の速度を測定していません。

### 4GBを超える動画をカードに保存するには?

exFATのカードを使ってください。FAT32は1ファイルが4GiBを超えられません。

### SDカードの内容は暗号化されますか?

[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATとFAT32はファイルシステムレベルの暗号化に対応していません。カードをなくすと他の人が内容を見られるので、保管には注意してください。
