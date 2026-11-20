---
title: "SDカードの基礎総まとめ:種類、容量、速度の表示、使い始めとつなぎ方"
description: "SDカードとmicroSDカードの種類、容量の規格、速度の表示、初めて使うときの手順、パソコン・Mac・iPhoneへのつなぎ方を、SD AssociationとAppleの公式資料をもとに1本にまとめました。"
date: 2026-11-20
---

## この記事の要点

SDカードは、カメラ、スマートフォン、ゲーム機、パソコンに挿して使うメモリーカードです。規格はSD Associationが定めており、サイズ・容量・速度の3つの基準で種類が分かれます。

SDカードを買うときは、機器が対応する規格を先に確認します。新しい規格の機器は古い規格のカードを読めますが、逆はできません。

新しいカードは使う機器でフォーマットし、大切な写真は別のストレージにもコピーしておきます。

「SDXC、U3、V30、A2って全部どういう意味?」「microSDをパソコンにどう挿すの?」。SDカードを初めて扱うと、疑問が一度に出てきます。この記事ではSDカードの基礎を1ページにまとめ、テーマごとに詳しい記事へつなぎます。

## SDカードとは何ですか?

SDカードは、電源を切ってもデータが残るフラッシュメモリーのカードです。[SD Association](https://www.sdcard.org/developers/sd-standard-overview/sd-family/)はSDメモリーカードを着脱式の不揮発性メモリーに分類しています。

カードを挿すカメラ、スマートフォン、カードリーダーをホストと呼びます。カードとホストが同じ規格に対応していないと、本来の容量と速度で使えません。カードの表示を一つずつ読む方法は[SDカードとは?](/blog/ja/what-is-sd-card)にあります。

## SDカードのサイズにはどんな種類がありますか?

いまよく使われるサイズは、標準のSDとmicroSDです。寸法は[SD Associationの容量規格の案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)の表によるものです。

| サイズ | 横 x 縦 x 厚さ | 主な機器 |
| --- | --- | --- |
| SD | 32 x 24 x 2.1mm | デジタルカメラ、パソコンのカードスロット |
| microSD | 11 x 15 x 1.0mm | スマートフォン、アクションカメラ、携帯ゲーム機 |

[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)は、microSDとSDの違いをサイズ、ピンの数、書き込み禁止スイッチの有無と説明しています。内部の論理と電子回路は同じです。

- microSDをSDスロットで使う方法:[micro SDとは?](/blog/ja/microsd-vs-sd)
- 商品ページの「TFカード」表記:[TFカードとは?](/blog/ja/tf-card)
- カード側面の小さなつまみ:[SDカードのロックとは?](/blog/ja/sd-card-lock-switch)

## SDカードの容量の規格はどう読みますか?

容量の規格は4つです。カード表面のSD、SDHC、SDXC、SDUCのロゴで見分けます。

| 規格 | 容量 | 標準のファイルシステム |
| --- | --- | --- |
| SD | 2GBまで | FAT12、FAT16 |
| SDHC | 2GB超〜32GB | FAT32 |
| SDXC | 32GB超〜2TB | exFAT |
| SDUC | 2TB超〜128TB | exFAT |

[SD Associationの互換性の案内](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)によると、互換性は一方向です。

1. SDXC対応機器は、SD、SDHC、SDXCカードを使えます。
2. SDHC対応機器は、SDとSDHCカードだけを使えます。
3. SDUCカードはSDUC対応機器でしか使えません。

FAT32は4GBを超えるファイルを保存できません。規格ごとの違いと機器の確かめ方は[SDXCとは?](/blog/ja/sdhc-vs-sdxc)にまとめました。

## SDカードの速度の表示は何を意味しますか?

SDカードには、性格の違う速度の表示が3種類あります。

| 表示 | 意味 | 例 | 詳しい記事 |
| --- | --- | --- | --- |
| バスインターフェース | カードと機器をつなぐ経路の最大速度 | UHS-I、UHS-II、SD Express | [UHSスピードクラスとは?](/blog/ja/uhs-sd-card) |
| スピードクラス | 動画の録画向けの最低書き込み速度 | C10、U3、V30 | [SDカードのV30とは?](/blog/ja/sd-card-speed-class) |
| アプリケーションパフォーマンスクラス | カードに入れたアプリの性能 | A1、A2 | [SDカードのA1・A2とは?](/blog/ja/sd-card-a1-a2) |

[SD Associationのスピードクラス規格](https://www.sdcard.org/developers/sd-standard-overview/speed-class/)は、数字が最低書き込み速度を示すと説明しています。機器が求めるクラスと同じか、それより高いカードを選びます。

[SD Associationのバス速度の案内](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/)によると、UHS-Iは最大104MB/s、UHS-IIは最大312MB/s、SD Expressは最大3,940MB/sです。機器とカードの両方が対応しているときにその速度が出ます。microSDサイズのSD Expressは[microSD Expressとは?](/blog/ja/microsd-express)で扱っています。

[アプリケーションパフォーマンスクラスの案内](https://www.sdcard.org/developers/sd-standard-overview/application-performance-class/)によると、A2の性能はA2対応の機器とカードを組み合わせたときだけ出ます。

## SDカードを買う前に何を確認しますか?

1. 機器の説明書でカードのサイズ(SD、microSD)を確認します。
2. 機器が対応する容量の規格(SDHC、SDXC、SDUC)を確認します。
3. 説明書が求めるスピードクラスを確認します。
4. パソコンにデータを移すなら、カードリーダーの対応規格と端子を確認します。
5. 買ったあとは、表示どおりの容量が使えるか確かめます。

容量を偽ったカードの確かめ方は[SDカードの偽物の見分け方](/blog/ja/fake-sd-card)にあります。ドライブレコーダーのように録画し続ける機器なら[高耐久SDカードとは?](/blog/ja/high-endurance-sd-card)もあわせてご覧ください。リーダーの選び方は[SDカードリーダーの選び方](/blog/ja/choose-sd-card-reader)にまとめました。

## 新しいSDカードはどう使い始めますか?

1. カードを使う機器に入れます。
2. 機器のメニューでカードをフォーマットします。フォーマットするとカードのデータはすべて消えます。
3. 写真を数枚撮るか、ファイルをコピーして、正しく読めるか確かめます。
4. 大切な写真は別のストレージにもコピーしておきます。

パソコンでフォーマットするなら、SD AssociationはOS付属の汎用フォーマットツールではなくSDメモリカードフォーマッターを使うよう[強く推奨しています](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)。手順は[SDカードフォーマッターの使い方](/blog/ja/sd-card-formatter)にあります。

詳しい手順は[SDカードの使い方](/blog/ja/sd-card-first-use)と[マイクロSDカードの使い方](/blog/ja/how-to-use-microsd)で確認してください。

## SDカードをパソコン、Mac、iPhoneにつなぐには?

機器ごとに、つなぎ方と確認する点が違います。

| 機器 | つなぎ方 | 確認する点 | 詳しい記事 |
| --- | --- | --- | --- |
| Windowsパソコン | カードスロットかUSBカードリーダー | 抜く前にハードウェアの安全な取り外し | [SDカードをパソコンにつなぐ方法](/blog/ja/sd-card-to-pc) |
| Mac | SDスロットのあるモデルかカードリーダー | 抜く前に取り出し | [MacでSDカードを使う方法](/blog/ja/sd-card-on-mac) |
| USB-C機器 | USB-Cカードリーダー | カードの向き、リーダーの対応規格 | [USB-C SDカードリーダーの使い方](/blog/ja/usb-c-sd-card-reader) |
| iPhone | 端子に合うSDカードリーダー | ファイル形式、パーティションの数 | [iPhone SDカード総まとめ](/blog/ja/iphone-sd-card-guide) |

[Microsoftの案内](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369)は、データを失わないよう、外す前にハードウェアの安全な取り外しを使うよう説明しています。[AppleのMac SDカードスロットの案内](https://support.apple.com/en-us/102352)も、カードを取り出してから抜き、スリープ中には抜かないよう説明しています。

iPhoneにはSDカードスロットがありません。[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)の対応一覧には、SDSC、SDHC、SDXC、miniSD、microSD、MMCカードがあります。[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)は、データパーティションが1つで、APFS、exFAT、FAT32などの形式である必要があると説明しています。

USBメモリをパソコンで使う手順もほぼ同じです。[USBメモリの使い方](/blog/ja/usb-flash-drive-basics)をご覧ください。

## iPhoneの写真をUSBメモリに保存するには?

次のアプリはUSBメモリを前提に案内します。USBメモリの接続条件は[iPhone用USBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## SDカードのよくある質問

### SDカードとmicroSDカードは何が違いますか?

SD AssociationのFAQによると、サイズ、ピンの数、書き込み禁止スイッチの有無が違います。内部の論理と電子回路は同じです。

### 64GBのSDカードが古いカメラで使えないのはなぜですか?

64GBのカードはSDXC規格です。SDHCにしか対応していない機器ではSDXCカードを使えません。カメラの説明書でSDXC対応かどうか確認してください。

### SDカードは何でフォーマットしますか?

まず、カードを使う機器でフォーマットします。パソコンでフォーマットするなら、SD AssociationはSDメモリカードフォーマッターを推奨しています。

### SDカードをパソコンからそのまま抜いてもいいですか?

抜く前に、Windowsではハードウェアの安全な取り外しを、Macでは取り出しを行います。使用中に抜くとデータを失うことがあります。

### iPhoneでSDカードを使えますか?

iPhoneの端子に合うSDカードリーダーをつないで使えます。カードはデータパーティションが1つで、exFATやFAT32などの対応形式である必要があります。詳しい手順は[iPhone SDカード総まとめ](/blog/ja/iphone-sd-card-guide)にあります。
