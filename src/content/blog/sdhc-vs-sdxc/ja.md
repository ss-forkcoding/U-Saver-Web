---
title: "SDXCとは?SDHC・SDUCとの違い、容量、ファイルシステム、機器の対応の確かめ方"
description: "SDXCとは、32GBを超え2TBまでのSDカードの容量規格です。SDHC、SDUCとは容量の範囲、標準のファイルシステム、使える機器が違います。SD Associationの資料をもとに違いと対応の確かめ方をまとめました。"
date: 2026-11-17
---

## 要点まとめ

SDXCとは、32GBを超え2TBまでのSDカードの容量規格です。SDHCは32GBまで、SDUCは128TBまでです。

規格ごとに標準のファイルシステムが違います。SDHCはFAT32、SDXCとSDUCはexFATです。

上位規格の機器は下位規格のカードを使えます。逆はできません。SDHCにだけ対応した機器では、SDXCカードを使えません。

「64GBのカードを買ったのに、カメラが読み込まない」「SDHCとSDXC、どちらを買えばいい?」カードを選ぶときによく出る疑問です。この記事では3つの規格の違いと、自分の機器に合う規格の確かめ方をまとめます。SDカードの種類全体は[SDカードとは?](/blog/ja/what-is-sd-card)にあります。

## SDXCとは?SDHC・SDUCと何が違いますか?

容量の範囲と標準のファイルシステムが違います。[SD Associationの容量規格の案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)をもとにした表です。

| 規格 | 容量 | 標準のファイルシステム |
| --- | --- | --- |
| SD | 2GBまで | FAT12、FAT16 |
| SDHC | 2GB超〜32GB | FAT32 |
| SDXC | 32GB超〜2TB | exFAT |
| SDUC | 2TB超〜128TB | exFAT |

カードの表面のロゴが規格を示します。microSDも同じ規格に従い、microSDHC、microSDXCのように名前にmicroが付きます。サイズの違いは[micro SDとは?](/blog/ja/microsd-vs-sd)にまとめました。

## SDXCカードはSDHC対応の機器で使えますか?

使えません。[SD Associationの互換性の案内](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)は、機器の規格ごとに使えるカードを次のように定めています。

| 機器の規格 | 使えるカード |
| --- | --- |
| SD機器 | SD |
| SDHC機器 | SD、SDHC |
| SDXC機器 | SD、SDHC、SDXC |
| SDUC機器 | SD、SDHC、SDXC、SDUC |

[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)も、既存のSD機器とSDHC機器はSDXCカードに対応しないと説明しています。SDカードとSDHCカードはSDXC機器で使えます。

SDUCカードはSDUC機器でだけ使えます。2TBを超えるカードを買う前に、機器がSDUCに対応しているか必ず確かめてください。

## 自分の機器がどの規格に対応しているか、どう確かめますか?

SD Associationは、カードを入れる前に機器のSDロゴや取扱説明書で規格を確かめるよう案内しています。

1. 機器の本体やカードスロットの近くで、SDHC、SDXC、SDUCのロゴを探します。
2. ロゴがなければ、取扱説明書のメモリーカードの項目で対応規格と最大容量を見ます。
3. 説明書に書かれていなければ、メーカーのサポートページで型番から探します。
4. 対応規格の範囲で、必要な容量のカードを選びます。

SDXC対応の機器でも、説明書に最大容量を別に書いている場合があります。説明書の数字に従ってください。

## SDHCとSDXC、どちらを選べばいいですか?

機器が両方に対応しているなら、必要な容量とファイルの大きさで選びます。

| 状況 | 合う規格 |
| --- | --- |
| 機器がSDHCまでの対応 | SDHC(32GB以下) |
| 32GBより大きい容量が必要 | SDXC |
| 4GBを超える動画ファイルを保存する | 標準の形式がexFATのSDXC |
| 2TBより大きい容量が必要 | SDUC(SDUC機器が必要) |

FAT32はファイル1つを4GiBまで保存します。[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。SDHCカードに長い動画をそのまま移すと、この制限にかかることがあります。

速度は容量規格とは別に表示されます。Class 10、U3、V30のようなスピードクラスと、UHS-Iのようなバス方式もあわせて見てください。

## SDHC・SDXCカードはiPhoneで使えますか?

カードリーダーをつなげば使えます。[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)の対応一覧には、SDSC、SDHC、SDXC、miniSD、microSD、MMCがあります。

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、iPhoneで使うストレージはデータパーティションが1つでなければなりません。形式はAPFS、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかです。SDHCの標準のFAT32も、SDXCの標準のexFATも一覧にあります。

カードリーダーの使い方は[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にあります。

## SDカードを規格に合わせてフォーマットするには?

SD Associationは、OSの汎用フォーマットツールではなくSD Memory Card Formatterを使うよう勧めています。汎用ツールでフォーマットすると、カードの性能が最適にならない場合があると説明しています。

1. カードの写真やファイルを、先にほかのストレージにコピーします。フォーマットするとカードのデータはすべて消えます。
2. カメラのように、カードを使う機器にフォーマットのメニューがあれば、その機器でフォーマットします。
3. パソコンやMacでフォーマットするときは、SD Memory Card Formatterを使います。

詳しい手順は[SDカードフォーマット方法](/blog/ja/format-sd-card)と[マイクロSDカードフォーマット方法](/blog/ja/format-microsd)にまとめました。カードが認識されないときは[microSDが認識しないときの確認手順](/blog/ja/sd-card-not-working)をご覧ください。

## iPhoneの写真をUSBメモリに保存するには?

次のアプリはUSBメモリを前提に案内します。USBメモリをつなぐ条件は[iPhoneでのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

NextGenAIが作ったU-Saverは、exFATかFAT32の一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## SDXC・SDHC・SDUCのよくある質問

### 32GBのカードはSDHCですか、SDXCですか?

SD Associationの表では、SDHCは2GB超〜32GB、SDXCは32GB超〜2TBです。32GBのカードはSDHCの範囲に入ります。

### SDHC機器に64GBのSDXCカードを入れるとどうなりますか?

SD Associationの互換性の案内によると、SDHC機器はSDカードとSDHCカードだけを使います。64GBのSDXCカードはその機器では使えません。

### SDXC機器でSDHCカードを使えますか?

使えます。SDXC機器はSD、SDHC、SDXCのカードを使います。

### microSDXCとSDXCは同じ規格ですか?

容量規格は同じで、サイズだけが違います。microSDは11 x 15 x 1.0mm、SDは32 x 24 x 2.1mmです。

### SDXCカードはなぜexFATなのですか?

SD AssociationがSDXCの標準のファイルシステムをexFATと定めています。exFATにはFAT32の4GiBのファイル制限がありません。形式の違いは[exFATフォーマット方法](/blog/ja/format-usb-exfat)でご確認ください。
