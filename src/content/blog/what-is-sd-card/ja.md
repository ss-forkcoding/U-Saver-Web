---
title: "SDカードとは?種類と使い道、カードに書かれた表示の読み方"
description: "SDカードとは何か、サイズ・容量・速度による種類の違いをSD Associationの規格をもとにまとめました。カメラ、スマートフォン、iPhoneでの使い道もあわせて確認できます。"
date: 2026-11-17
---

## この記事の要点

SDカードとは、カメラやスマートフォン、ゲーム機などに挿して使う小さなメモリーカードです。規格はSD Associationが定めています。

SDカードの種類は3つの基準で分かれます。サイズ(SD、microSD)、容量(SD、SDHC、SDXC、SDUC)、速度(バスインターフェースとスピードクラス)です。

カードを選ぶときは、機器がどの規格に対応しているかを先に確認します。大容量のカードは、それより古い規格にしか対応していない機器では使えません。

「カードにSDXC、U3、V30と書いてあるけど、どういう意味?」「microSDと普通のSDは何が違うの?」。SDカードを初めて買うときによく出る疑問です。この記事では、カードの表示を一つずつ説明し、機器ごとの使い道をまとめます。

## SDカードとは何ですか?

SDカードは、電源を切ってもデータが残るフラッシュメモリーのカードです。[SD Association](https://www.sdcard.org/developers/sd-standard-overview/sd-family/)はSDメモリーカードを着脱式の不揮発性メモリーに分類しています。この団体は2000年1月にPanasonic、SanDisk、東芝(現KIOXIA)が設立しました。

カードを挿す機器をホストと呼びます。カメラ、スマートフォン、パソコンのカードスロット、カードリーダーはすべてホストです。カードとホストが同じ規格に対応していないと、本来の速度と容量で使えません。

## SDカードの種類はサイズでどう分かれますか?

いまよく使われるサイズは、標準のSDとmicroSDの2つです。寸法は[SD Associationのスピードクラスの案内](https://www.sdcard.org/consumers/speed-class-standards-for-video-recording/)の表によるものです。

| サイズ | 横 x 縦 x 厚さ | 主な機器 |
| --- | --- | --- |
| SD | 32 x 24 x 2.1mm | デジタルカメラ、パソコンのカードスロット |
| microSD | 11 x 15 x 1.0mm | スマートフォン、アクションカメラ、携帯ゲーム機 |

microSDカードをSDスロットで使うときは、アダプタに入れます。iPhoneでmicroSDを使う手順は[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)にまとめました。

## SDカードの種類は容量でどう分かれますか?

容量の規格は4つです。カード表面のロゴで規格がわかります。[SD Associationの容量規格の案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。

| 規格 | 容量 | 標準のファイルシステム |
| --- | --- | --- |
| SD | 2GBまで | FAT12、FAT16 |
| SDHC | 2GB超〜32GB | FAT32 |
| SDXC | 32GB超〜2TB | exFAT |
| SDUC | 2TB超〜128TB | exFAT |

容量の規格は互換性も決めます。[SD Associationの互換性の案内](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)によると、新しい規格の機器は古い規格のカードを読めます。逆はできません。

1. SDXC対応機器は、SD、SDHC、SDXCカードを使えます。
2. SDHC対応機器は、SDとSDHCカードだけを使えます。SDXCカードは使えません。
3. SDUCカードはSDUC対応機器でしか使えません。

古いカメラで64GBのカードが使えないときは、その機器がSDXCに対応しているか説明書で確認してください。

## SDカードに書かれた速度の表示は何ですか?

速度の表示は2種類あります。バスインターフェースは、カードと機器をつなぐ経路の最大速度です。スピードクラスは、動画を撮るときに保証される最低書き込み速度です。

### バスインターフェース:UHS-I、UHS-II、SD Express

[SD Associationのバス速度の案内](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/)によるものです。

| バスインターフェース | バスの最大速度 |
| --- | --- |
| Default Speed | 12.5MB/s |
| High Speed | 25MB/s |
| UHS-I | 50MB/s、104MB/s |
| UHS-II | 156MB/s(全二重)、312MB/s(半二重) |
| UHS-III | 624MB/s |
| SD Express | 985MB/s〜3,940MB/s |

同じ案内では、実際の最大速度はバス速度と異なり、カードの性能によって変わると説明しています。UHS-IIのカードをUHS-Iの機器に挿しても、UHS-IIの速度は出ません。機器とカードの両方がそのバスに対応している必要があります。

### スピードクラス:Class 10、U3、V30

[SD Associationのスピードクラス規格](https://www.sdcard.org/developers/sd-standard-overview/speed-class/)は4種類の表示を定めています。数字は最低書き込み速度を示します。

| 表示の種類 | クラス |
| --- | --- |
| Speed Class | C2、C4、C6、C10 |
| UHS Speed Class | U1、U3 |
| Video Speed Class | V6、V10、V30、V60、V90 |
| SD Express Speed Class | E150、E300、E450、E600 |

スピードクラスは、動画の録画のように一定の速度で書き続ける作業で重要です。カメラの説明書がV30を求めているなら、V30以上のカードを選んでください。

### アプリケーションパフォーマンスクラス:A1、A2

[SD Associationのアプリケーションパフォーマンスクラスの案内](https://www.sdcard.org/developers/sd-standard-overview/application-performance-class/)によると、A1とA2はカードにアプリを入れて使うときの性能を保証する等級です。A2の性能は、機器とカードの両方がA2に対応しているときに出ます。

## SDカードは何に使いますか?

機器によって、カードに任せる役割が違います。

| 機器 | 主な使い道 | 確認する表示 |
| --- | --- | --- |
| デジタルカメラ、ビデオカメラ | 写真と動画の保存 | 容量の規格、スピードクラス |
| Androidスマートフォン | 写真の保存、アプリのインストール | microSD、A1・A2 |
| アクションカメラ、ドローン | 高画質の動画の録画 | microSD、説明書が求めるスピードクラス |
| 携帯ゲーム機 | ゲームデータの保存 | メーカーが指定するカードの種類 |
| iPhone | カードの写真の読み込み、ファイルのコピー | カードリーダーとファイル形式 |

iPhoneにはSDカードスロットがありません。[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)の対応一覧には、SDSC、SDHC、SDXC、miniSD、microSD、MMCカードがあります。カードリーダーでつなぐ手順は[iPhone SDカード総まとめ](/blog/ja/iphone-sd-card-guide)をご覧ください。

## 新しいSDカードはどう使い始めますか?

1. 機器の説明書で、対応するサイズ、容量の規格、スピードクラスを確認します。
2. カードを機器に入れ、機器のメニューでフォーマットします。フォーマットするとカードのデータはすべて消えます。
3. 写真を数枚撮るか、ファイルをコピーして、カードが正しく読めるか確かめます。
4. カードの大切な写真は、別のストレージにもコピーしておきます。

パソコンやMacでフォーマットする手順は[SDカードフォーマット方法](/blog/ja/format-sd-card)にあります。カードが認識されないときは[microSDが認識しない・フォーマットできないときの確認手順](/blog/ja/sd-card-not-working)をご覧ください。

## iPhoneの写真をUSBメモリに保存するには?

次のアプリはUSBメモリを前提に案内します。USBメモリの接続条件は[iPhone用USBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

NextGenAIが作ったU-Saverは、exFATかFAT32の一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## SDカードとはのよくある質問

### SDカードとmicroSDカードは同じ規格ですか?

サイズが違うだけで、同じSD規格に含まれます。SD Associationの表では、SDは32 x 24 x 2.1mm、microSDは11 x 15 x 1.0mmです。

### SDXCカードをSDHCにしか対応していない機器で使えますか?

使えません。SD Associationの案内によると、SDHC対応機器はSDとSDHCカードだけを使えます。

### スピードクラスの数字が大きいカードはいつも速いですか?

スピードクラスは最低書き込み速度を保証する表示です。実際の速度は、機器とカードが対応するバスインターフェース、カードの性能、作業の種類によって変わります。

### SDカードの標準のファイルシステムは何ですか?

SDHCはFAT32、SDXCとSDUCはexFATです。FAT32は4GBを超えるファイルを保存できません。形式の違いは[USBメモリのFAT32フォーマット方法](/blog/ja/format-usb-fat32)にまとめました。

### iPhoneにSDカードを直接挿せますか?

iPhoneにはSDカードスロットがありません。iPhoneの端子に合うカードリーダーをつないで使います。詳しい条件は[iPhoneにSDカードは挿せる?](/blog/ja/iphone-sd-card-slot)にあります。
