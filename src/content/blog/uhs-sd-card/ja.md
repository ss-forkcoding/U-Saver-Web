---
title: "UHSスピードクラスとは?UHS-I・UHS-II・SD Expressの違いと確かめ方"
description: "UHSスピードクラス(U1・U3)は動画撮影で保証する最低の書き込み速度で、UHS-I・UHS-II・SD Expressはカードと機器の間のバス方式です。2つの違い、方式ごとの最大バス速度、下位互換、カードリーダーの選び方をSD Associationの資料をもとにまとめました。"
date: 2026-11-17
---

## 要点まとめ

UHSスピードクラスは、U1とU3の2つです。動画撮影でカードが保証する最低の書き込み速度を示します。UHS-I、UHS-II、SD Expressは別の表示で、カードと機器の間の通り道の方式です。

SD Associationの表では、最大バス速度はUHS-Iが104MB/s、UHS-IIが312MB/s、SD Expressが3940MB/sです。これは通り道の上限です。カードの実際の速度はカードの性能で変わります。

速い方式のカードは、遅い方式の機器でも使えます。性能は、機器が対応するいちばん速い方式に合ったカードで出ます。

「UHSスピードクラスとUHS-IIは同じ?」「UHS-IIのカードなのに速くならないのはなぜ?」カードを買い替えるときによく出る疑問です。この記事ではUHSスピードクラスとバス方式の違い、UHS-I・UHS-II・SD Expressの違い、カードとリーダーの選び方をまとめます。カードの種類全体は[SDカードとは?](/blog/ja/what-is-sd-card)にあります。

## UHSスピードクラスとバス方式はどう違いますか?

どちらも「UHS」が付きますが、意味が違います。

| 表示 | 意味 | 例 |
| --- | --- | --- |
| UHSスピードクラス | 動画撮影で保証する最低の書き込み速度 | U1、U3 |
| ビデオスピードクラス | 動画撮影で保証する最低の書き込み速度 | V30、V60、V90 |
| バス方式 | カードと機器の間の通り道の最大速度 | UHS-I、UHS-II、SD Express |

[SD Associationのスピードクラスの案内](https://www.sdcard.org/developers/sd-standard-overview/speed-class/)は、U1とU3をUHS-I、UHS-II、UHS-IIIの方式で使うと位置づけています。V60とV90はUHS-II以上の方式で使います。UHS-Iの方式はV30までです。

SD Associationは、U1がClass 10、V10と同じ毎秒10MBの書き込み速度だと書いています。U3を含む各表示の速度は[SDカードのV30とは?](/blog/ja/sd-card-speed-class)にあります。

UHS-IのカードでもU3の表示を持つことがあります。UHSスピードクラスの数字だけでは、カードがUHS-IかUHS-IIかは分かりません。

## UHS-I、UHS-II、SD Expressとは何ですか?

カードと機器は、決まった方式でデータをやり取りします。この方式をバスインターフェースといいます。[SD Associationのバス速度の案内](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/)は、方式を次のように分けています。

| 方式 | 最大バス速度 | データの通り道 | 規格バージョン |
| --- | --- | --- | --- |
| Default Speed | 12.5MB/s | ピン1列 | 1.01 |
| High Speed | 25MB/s | ピン1列 | 1.10 |
| UHS-I | 50MB/s(SDR50、DDR50)、104MB/s(SDR104) | ピン1列 | 3.01 |
| UHS-II | 156MB/s(全二重)、312MB/s(半二重) | ピン2列 | 4.00 |
| UHS-III | 312MB/s、624MB/s(全二重) | ピン2列 | 6.00 |
| SD Express | 985MB/s、1970MB/s、3940MB/s | PCIe・NVMe | 7.00以降 |

UHSはUltra High Speedの略です。UHS-Iはピン1列のまま速度を上げました。UHS-II、UHS-III、SD Expressは2列目のピンを加え、データの通り道を2本使います。

SD ExpressはPCIeとNVMeを使います。パソコンのSSDが使う方式です。速度はPCIeの世代とレーン数で分かれます。SD Associationは、8.00規格のmicroSDはPCIe Gen.4の1レーンだけに対応すると書いています。

UHSの方式とSD Expressは、SDHC、SDXC、SDUCのカードで使います。容量規格の違いは[SDXCとは?](/blog/ja/sdhc-vs-sdxc)にあります。

SD Associationは、カードの最大速度はバス速度と違うと書いています。実際の速度は、カードの性能、機器、作業の種類、カード内のデータの置かれ方で変わります。

## UHS-IIのカードはUHS-Iの機器で使えますか?

使えます。[SD Associationのバス方式の案内](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/)は、速い方式のカードはUHS-I、UHS-II、SD Expressのどの機器でも使えると説明しています。

性能は機器の方式に合わせると出ます。SD Associationは次のように案内しています。

| 機器の方式 | 性能が出るカード |
| --- | --- |
| UHS-I | UHS-I以上のカード |
| UHS-II | UHS-II以上のカード |
| SD Express | SD Expressのカード |

[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)は、SD ExpressのカードがUHS-Iのインターフェースも保っていると書いています。そのためSD ExpressのカードはUHS-Iの機器でも使えます。このときSD Expressの速度は出ません。

## UHS-II対応のカードリーダーはいつ必要ですか?

UHS-IIのカードの速度でパソコンにコピーするには、UHS-II対応のリーダーが必要です。リーダーも機器の1つです。UHS-IのリーダーにUHS-IIのカードを入れると、読めますがUHS-IIの性能は出ません。

組み合わせごとの結果は次のとおりです。

| カード | リーダー | 結果 |
| --- | --- | --- |
| UHS-I | UHS-I | UHS-Iの性能 |
| UHS-I | UHS-II | 使える。カードがUHS-IなのでUHS-Iの性能 |
| UHS-II | UHS-I | 使える。UHS-IIの性能は出ない |
| UHS-II | UHS-II | UHS-IIの性能 |
| SD Express | SD Express非対応 | UHS-Iの方式で使う |

リーダーのバス方式だけでは決まりません。リーダーとパソコンをつなぐUSBポートの速度も転送速度を左右します。この記事ではリーダーごとの実際の速度を測っていません。

## カードがUHS-IかUHS-IIかはどう確かめますか?

1. カードの表面とパッケージでUHS-I、UHS-II、SD Expressの表記を探します。SD Associationの表は、方式ごとに別のバスマークを定めています。
2. カードの裏面のピンを見ます。SD Associationは、UHS-II、UHS-III、SD Expressが2列目のピンを使うと説明しています。ピンが1列ならUHS-I以下です。
3. メーカーのデータシートでインターフェースの項目を確かめます。
4. 機器の取扱説明書のメモリーカードの項目で、対応するバス方式を確かめます。
5. カードがSDかmicroSDかも確かめます。違いは[micro SDとは?](/blog/ja/microsd-vs-sd)にあります。

## UHS-I、UHS-II、SD Expressのどれを選びますか?

基準は機器の取扱説明書です。順番は次のとおりです。

1. 説明書で、機器が対応するバス方式を確かめます。
2. 同じ項目で、推奨のスピードクラス(U3、V30、V60など)を確かめます。
3. 機器がUHS-Iだけに対応するなら、UHS-Iのカードで足ります。UHS-IIのカードも使えますが、UHS-IIの性能は出ません。
4. 機器がUHS-IIに対応し、V60やV90を求めるなら、UHS-IIのカードを選びます。
5. 機器がSD Expressに対応するなら、SD Expressのカードでその機器の性能がもっとも出ます。
6. カードをパソコンによくコピーするなら、カードと同じ方式のリーダーも用意します。

特定の製品はおすすめしません。同じ方式でも、カードごとに実際の速度は違います。メーカーのデータシートの最大速度は社内テストの値です。

## iPhoneではUHS-IIのカードのほうが速いですか?

iPhoneはカードリーダーでSDカードを読みます。このとき転送速度は、iPhoneのUSBの速度にも左右されます。

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)は、iPhone 15 Pro、iPhone 15 Pro Max、iPhone 16 Pro、iPhone 16 Pro MaxがUSB 3の転送速度に対応すると書いています。そのほかのアダプタと機器はUSB 2の速度です。同じ案内は、SDSC、SDHC、SDXC、microSDのカードを対応一覧に挙げています。この記事ではiPhoneでのUHSの方式ごとの速度を測っていません。

リーダーの使い方は[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にあります。

## iPhoneの写真をUSBメモリに保存するには?

次のアプリはUSBメモリを前提に案内します。USBメモリをつなぐ条件は[iPhoneでのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

NextGenAIが作ったU-Saverは、exFATかFAT32の一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## UHSスピードクラス・UHS-IIのよくある質問

### UHSスピードクラスのU1とU3は何が違いますか?

どちらも動画撮影で保証する最低の書き込み速度です。SD AssociationはU1をClass 10、V10と同じ毎秒10MBと書いています。U3はより速い表示で、SD AssociationのFAQはU3をフルHD〜4Kの撮影向けに分類しています。

### UHSスピードクラスU3のカードはUHS-IIですか?

そうとは限りません。U3は書き込み速度の表示で、UHS-IやUHS-IIはバス方式です。UHS-IのカードでもU3の表示を持つことがあります。

### UHS-IIのカードをUHS-Iのリーダーに入れても大丈夫ですか?

使えます。SD Associationは、速い方式のカードはUHS-Iの機器でも使えると説明しています。UHS-IIの性能は、UHS-IIの機器やリーダーで出ます。

### SD ExpressのカードはSD Express非対応の機器で読めますか?

SD AssociationのFAQは、SD ExpressのカードがUHS-Iのインターフェースを保っていると書いています。機器がSD Expressに対応していなければ、UHS-Iの方式で使います。

### 表の312MB/sはカードの速度ですか?

バスの最大速度です。SD Associationは、カードの最大速度はバス速度と違い、カードの性能で変わると書いています。
