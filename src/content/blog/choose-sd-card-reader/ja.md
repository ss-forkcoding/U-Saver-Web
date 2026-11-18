---
title: "SDカードリーダーの選び方:カードのサイズ、容量規格、UHS方式、接続端子の確かめ方"
description: "SDカードリーダーは、カードのサイズ、容量規格(SDHC・SDXC・SDUC)、バス方式(UHS-I・UHS-II・SD Express)、接続端子の4つで選びます。パソコンとiPhoneで確認する順番を、SD AssociationとAppleの資料をもとにまとめました。"
date: 2026-11-18
---

## 要点まとめ

SDカードリーダーは、カードのサイズ、容量規格、バス方式、接続端子の4つで選びます。リーダーもカードを読む機器です。リーダーがカードより古い規格だと、カードを読めないか、カードの速度が出ません。

SD Associationは、SDXCカードはSDXCかSDUCの機器でだけ使えると書いています。SDUCカードはSDUCの機器でだけ使います。容量の大きいカードほど、リーダーの容量規格を先に確かめます。

UHS-IIカードの速度でコピーするには、UHS-IIのリーダーが必要です。リーダーとパソコンをつなぐUSBポートの速度も転送速度の上限になります。

「どのSDカードリーダーを買えばいい?」「リーダーによって値段がこんなに違うのはなぜ?」カードをパソコンやiPhoneに移すときによく出る疑問です。この記事は特定の製品をすすめません。リーダーの表示を読み、手元のカードと機器に合わせる順番をまとめます。

## SDカードリーダーは何を見て選びますか?

4つを確かめます。最初の3つはカード側、最後はパソコンやiPhone側の条件です。

| 基準 | 確かめること | 合わないと |
| --- | --- | --- |
| カードのサイズ | SDスロット、microSDスロット、または変換アダプター | カードが入りません |
| 容量規格 | SDHC、SDXC、SDUCの対応表示 | カードを使えないことがあります |
| バス方式 | UHS-I、UHS-II、SD Expressの表示 | カードは読めますが、カードの速度は出ません |
| 接続端子 | USB-A、USB-C、Lightningとポートの速度 | つながらないか、ポートの速度に抑えられます |

カード側の情報はカードの表面とパッケージにあります。表示の読み方は[SDカードのスピードクラスの読み方](/blog/ja/sd-card-speed-class)と[SDカードとは?](/blog/ja/what-is-sd-card)にあります。

## パソコンにSDスロットがあればSDカードリーダーはいりませんか?

スロットがカードの規格に対応していれば、いりません。[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)は、パソコンにSDスロットがあればカードを差してデータを移せると書いています。スロットがない場合や、カードより前の規格で作られたスロットの場合は、USBのリーダー/ライターかカードアダプターを使うよう案内しています。

Macはモデルによってスロットの対応が違います。[AppleのMac SDカードスロットの案内](https://support.apple.com/HT204384)の内容は次のとおりです。

| 項目 | Appleの案内 |
| --- | --- |
| 対応カード | MMC、Default Speed、High Speed、UHS-I |
| UHS-II対応モデル | 2022年以降のMac Studio、2021年以降のMacBook Pro、2020年のiMac、iMac Pro |
| miniSD、microSD | アダプターを付けて使用 |
| 非対応のカード | SDIOカード |
| 注意 | 厚さ2.1mmを超えるカードはスロットを傷めることがあります |

スロットがUHS-Iだけに対応していても、UHS-IIカードは読めます。ただしUHS-IIの速度は出ません。UHS-IIの速度が必要なら、UHS-IIのリーダーを別に使います。

## 容量規格とSDカードリーダーの対応はどう確かめますか?

[SD Associationの容量規格の案内](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/)は、機器とカードの対応を次のようにまとめています。リーダーもここでいう機器です。

| リーダー・機器の規格 | 使えるカード |
| --- | --- |
| SD | SD |
| SDHC | SD、SDHC |
| SDXC | SD、SDHC、SDXC |
| SDUC | SD、SDHC、SDXC、SDUC |

[SD Associationの容量の表](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)では、SDHCは2GB超32GB以下、SDXCは32GB超2TB以下、SDUCは2TB超128TB以下です。64GBのカードはSDXCなので、SDXC以上に対応するリーダーが必要です。規格ごとのファイルシステムは[SDXCとは?](/blog/ja/sdhc-vs-sdxc)にあります。

同じ案内は、カードを入れる前に機器のSDロゴや取扱説明書で対応規格を確かめるよう書いています。リーダーのパッケージやメーカーの説明書でSDXC、SDUCの表示を探してください。

## UHS-IIカードにはどのSDカードリーダーが合いますか?

カードと同じバス方式のリーダーが合います。[SD Associationのバス方式の案内](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/)は、速いカードはUHS-I、UHS-II、SD Expressのどの機器でも使えると書いています。性能は、機器が対応するいちばん速い方式に合ったカードで出ます。

| カード | リーダー | 結果 |
| --- | --- | --- |
| UHS-I | UHS-I | UHS-Iの性能 |
| UHS-I | UHS-II | 使える、UHS-Iの性能 |
| UHS-II | UHS-I | 使える、UHS-IIの性能は出ない |
| UHS-II | UHS-II | UHS-IIの性能 |
| SD Express | SD Express非対応 | UHS-I方式で使う |

SD Expressの行は[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)が根拠です。SD ExpressカードはUHS-Iインターフェースを維持しています。方式ごとの最大バス速度とピンの形は[UHSスピードクラスとは?](/blog/ja/uhs-sd-card)にあります。

UHS-Iカードしか使わないなら、UHS-IIのリーダーを買っても速くなりません。この記事はリーダーごとの実際の速度を測っていません。

## microSDカードはSDカードリーダーで読めますか?

リーダーにmicroSDスロットがあれば、そのまま差します。SDスロットしかなければ、microSDをSDサイズにする変換アダプターを使います。AppleもMacのSDスロットでmicroSDを使うときはアダプターを付けるよう案内しています。

アダプターを使っても、カードの容量規格とバス方式は変わりません。リーダーのSDXC、UHSの表示を同じように確かめます。サイズの違いとアダプターの使い方は[micro SDとは?](/blog/ja/microsd-vs-sd)にあります。

## iPhone用のSDカードリーダーは何を確かめますか?

[Appleのカメラアダプターの案内](https://support.apple.com/en-us/118280)は、iPhoneで使うリーダーとしてLightning to SD Card Camera ReaderとApple USB-C to SD Card Readerを挙げています。対応カードはSDSC、SDHC、SDXC、miniSD、microSD、MMCです。

| 確かめること | Appleの案内 |
| --- | --- |
| 端子 | iPhoneのLightningかUSB-C端子に合うリーダー |
| カードの形式 | データパーティションが1つで、exFAT、FAT32、FAT、APFS、macOS拡張(HFS+)のどれか |
| 転送速度 | iPhone 15 Pro、15 Pro Max、16 Pro、16 Pro MaxはUSB 3の速度、ほかの機器とアダプターはUSB 2の速度 |

形式の条件は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)にあります。NTFSは一覧にありません。形式を変える手順は[SDカードフォーマット方法](/blog/ja/format-sd-card)にあります。

この記事は他社製のリーダーをiPhoneで試していません。つなぎ方と写真の読み込みは[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)に、リーダーの種類全体は[iPhone SDカード総まとめ](/blog/ja/iphone-sd-card-guide)にあります。

## SDカードリーダーを選ぶ順番

1. カードの表面で、サイズ(SD、microSD)、容量規格(SDHC、SDXC、SDUC)、バス方式(UHS-I、UHS-II、SD Express)を書き留めます。
2. パソコンにSDスロットがあるか、その規格に対応しているかを取扱説明書で確かめます。対応していればリーダーはいりません。
3. リーダーを差す端子を確かめます。パソコンはUSB-AかUSB-C、iPhoneはLightningかUSB-Cです。
4. リーダーの説明書で、カードの容量規格に対応しているか確かめます。SDXCカードならSDXC以上の表示が必要です。
5. カードがUHS-IIで、その速度でコピーしたいなら、UHS-IIと表示されたリーダーを選びます。
6. microSDを使うなら、microSDスロットのあるリーダーかSD変換アダプターを用意します。
7. 初めてつないだら、カードが表示されるか、ファイルが開けるかを確かめます。

カードの容量が表示と違って見えるときは[SDカードの偽物の見分け方](/blog/ja/fake-sd-card)を確認してください。

## iPhoneの写真をUSBメモリに保存するには?

次のアプリはUSBメモリを前提に案内します。USBメモリをつなぐ条件は[iPhoneでのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

NextGenAIが作ったU-Saverは、exFATかFAT32の一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## SDカードリーダーのよくある質問

### SDHCのリーダーでSDXCカードは読めますか?

SD Associationの案内では、SDHCの機器が使えるのはSDとSDHCのカードだけです。SDXCカードにはSDXC以上に対応するリーダーを使ってください。

### UHS-IIのリーダーならUHS-Iカードも速くなりますか?

なりません。カードがUHS-IならUHS-I方式で読みます。SD Associationは、UHS-IIの機器はUHS-II以上のカードで性能が出ると案内しています。

### MacにSDスロットがあるのに、リーダーを別に買う必要はありますか?

カードの規格によります。Appleの案内でUHS-IIに対応するMacのスロットは、2022年以降のMac Studio、2021年以降のMacBook Pro、2020年のiMac、iMac Proだけです。ほかのモデルでUHS-IIの速度が必要なら、UHS-IIのリーダーを使います。

### iPhoneで他社製のSDカードリーダーを使えますか?

この記事は他社製のリーダーを試していません。Appleの案内はAppleのカメラアダプターが対象です。他社製を使うなら、つないだあとファイルアプリの場所の一覧にカードが出るかを先に確かめてください。

### リーダーの箱にある最大速度でコピーできますか?

保証はされません。SD Associationは、カードの実際の速度はカードの性能や機器によって変わると書いています。リーダーとパソコンをつなぐUSBポートの速度も転送速度の上限になります。
