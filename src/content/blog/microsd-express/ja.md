---
title: "microSD Expressとは?普通のmicroSDとの違いと互換性の確かめ方"
description: "microSD Expressとは、microSDの大きさにPCIeとNVMeの方式を加えたカードです。SD Associationの表の速度、普通のmicroSD機器との互換性、Nintendo Switch 2の条件、iPhoneでの使い方をまとめました。"
date: 2026-11-18
---

## 要点まとめ

microSD Expressとは、microSDカードの大きさにPCIeインターフェースとNVMeプロトコルを加えたカードです。PCIeとNVMeは、パソコンのSSDが使う方式です。SD Associationは2019年のSD 7.1規格でmicroSD Expressを導入しました。

SD Associationの表では、SD 8.0規格のmicroSDはPCIe Gen.4の1レーンだけに対応し、この方式の最大バス速度は1970MB/sです。UHS-Iの最大バス速度は104MB/sです。

SD ExpressのカードはUHS-Iのインターフェースも保っています。そのため普通のmicroSDの機器でも使えますが、そのときSD Expressの速度は出ません。

「Switch 2に今までのmicroSDを入れてもいい?」「microSD Expressのカードをスマホやカードリーダーに入れると速くなる?」カードを買い替えるときによく出る疑問です。この記事ではmicroSD Expressとは何か、普通のmicroSDと何が違うかを、SD Associationと任天堂の資料で確かめます。バス方式全体の比較は[UHSスピードクラスとは?](/blog/ja/uhs-sd-card)にあります。

## microSD Expressとは何ですか?

[SD AssociationのmicroSD 20周年の記事](https://www.sdcard.org/press/thoughtleadership/celebrating-20-years-of-microsd/)によると、microSD Expressは2019年のSD 7.1規格で登場しました。最初の設計はPCI Express Gen 3のインターフェースとNVM Expressのプロトコルを組み込みました。同じ記事は、2023年のSD 8.0規格がPCIe Gen 4.0でmicroSD Expressの性能を2GB/sまで高めたと書いています。

| 時期 | 規格 | microSD Expressの変化 |
| --- | --- | --- |
| 2018年 | SD 7.0 | SD ExpressとmicroSDUCを導入 |
| 2019年 | SD 7.1 | microSD Expressを導入、PCIe Gen 3 |
| 2023年 | SD 8.0 | PCIe Gen 4、約2GB/s |

[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)は、SD ExpressのカードをPCIe技術で最大3940MB/sを出す取り外し可能なSSDと説明しています。3940MB/sは、フルサイズのSDカードのPCIe Gen.4・2レーンの値です。microSD Expressは次の表のとおり1レーンです。

## microSD Expressと普通のmicroSDは何が違いますか?

大きさは同じです。違うのは、カードと機器がデータをやり取りする方式です。

| 項目 | 普通のmicroSD(UHS-I) | microSD Express |
| --- | --- | --- |
| バス方式 | UHS-I | PCIe・NVMe、UHS-Iにも対応 |
| 最大バス速度 | 104MB/s(SDR104) | 1970MB/s(SD 8.0、PCIe Gen.4・1レーン) |
| ピン | 1列 | 2列目のピンを追加 |
| 容量規格 | SDHC、SDXC、SDUC | SDHC、SDXC、SDUC |

速度とピンの列は[SD Associationのバス速度の案内](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/)によるものです。この案内は、SD Expressが2列目のピンでデータを送ると説明しています。また「8.00規格のmicroSDはPCIe Gen.4の1レーンだけに対応する」と書いています。

表の速度はバスの最大速度です。SD Associationは、カードの最大速度はバス速度と違い、カードの性能で変わると書いています。この記事ではカードごとの実際の速度を測っていません。

容量規格の違いは[SDXCとは?](/blog/ja/sdhc-vs-sdxc)に、カードの大きさの違いは[micro SDとは?](/blog/ja/microsd-vs-sd)にあります。

## microSD Expressのカードは普通のmicroSDの機器で使えますか?

使えます。SD AssociationのFAQは、SD ExpressのカードがUHS-Iのインターフェースを保っていると書いています。[SD Associationのバス方式の案内](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/)も、速い方式のカードはUHS-I、UHS-II、SD Expressのどの機器でも使えると説明しています。

| カード | 機器 | 結果 |
| --- | --- | --- |
| microSD Express | SD Express非対応の機器 | UHS-Iの方式で動く |
| microSD Express | SD Express対応の機器 | SD Expressの性能 |
| 普通のmicroSD | SD Express対応の機器 | 機器の説明書で確認 |

同じ案内は、SD Expressの機器はSD Expressのカードで性能がもっとも出ると説明しています。普通のmicroSDをSD Expressの機器に入れたときの扱いは機器ごとに違います。次のNintendo Switch 2がその例です。

## Nintendo Switch 2にはなぜmicroSD Expressが必要ですか?

任天堂は、Switch 2でゲームのデータを保存するカードをmicroSD Expressに限っています。[任天堂のmicroSD Expressカードのよくある質問](https://www.nintendo.com/au/support/articles/microsd-express-card-faq/)は、Switch 2でゲームのデータ、ゲーム内の画面写真と動画を保存できるのはmicroSD Expressカードだけと書いています。

| カード | Nintendo Switch 2 | Nintendo Switch |
| --- | --- | --- |
| 普通のmicroSD | 使えない。Switchで撮った画面写真と動画の取り込みだけできる | 使える |
| microSD Express | 使える。2TBまで対応 | 使える。速度は普通のmicroSDと同じ |

表は[任天堂の互換性の案内](https://www.nintendo.com/au/support/articles/microsd-card-and-microsd-express-card-compatibility-with-nintendo-switch-2/)によるものです。同じ案内は、microSD Expressカードを初めて使うときにインターネットでの本体更新が必要と説明しています。ほかのゲーム機やカメラの対応は、各メーカーの説明書で確かめてください。

## microSD Expressのカードはどう見分けますか?

1. カードの表面とパッケージでmicroSD Expressの表記を探します。SD Associationの表は、SD Expressに別のロゴを定めています。
2. カードの裏面のピンを見ます。SD Associationは、SD Expressが2列目のピンを使うと説明しています。ピンが1列ならSD Expressのカードではありません。
3. メーカーのデータシートのインターフェースの項目で、PCIeやNVMeの表記を確かめます。
4. 機器の説明書で、SD Expressへの対応を確かめます。
5. 容量の表示(microSDXCなど)と速度の表示(U3、V30など)も見ます。速度の表示は[SDカードのV30とは?](/blog/ja/sd-card-speed-class)にあります。

この記事では特定の製品をおすすめしません。同じ規格でも、カードごとに実際の速度は違います。

## iPhoneでmicroSD Expressのカードは使えますか?

iPhoneにはカードスロットがないので、カードリーダーをつなぎます。[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)の対応カードの一覧には、SDSC、SDHC、SDXC、microSDがあります。Appleの資料にはSD ExpressやmicroSD Expressの記載がありません。

SD ExpressのカードはUHS-Iのインターフェースも保っています。SD Express非対応のリーダーでは、UHS-Iの方式で読み込まれます。同じAppleの案内は、iPhone 15 Pro、iPhone 15 Pro Max、iPhone 16 Pro、iPhone 16 Pro MaxがUSB 3の転送速度に対応すると書いています。この記事ではiPhoneでのmicroSD Expressのカードの速度を測っていません。

リーダーのつなぎ方は[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)と[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にあります。販売ページの「TFカード」の表記は[TFカードとは?](/blog/ja/tf-card)で確かめてください。

## iPhoneの写真をUSBメモリに保存するには?

次のアプリはUSBメモリを前提に案内します。USBメモリをつなぐ条件は[iPhoneでのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

NextGenAIが作ったU-Saverは、exFATかFAT32の一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## microSD Expressのよくある質問

### microSD Expressとはひと言で何ですか?

microSDの大きさに、SSDと同じPCIe・NVMeの方式を加えたカードです。SD Associationが2019年のSD 7.1規格で導入しました。

### microSD Expressのカードは普通のmicroSDのスロットに入りますか?

入ります。大きさが同じで、UHS-Iのインターフェースも保っています。SD Express非対応の機器では、SD Expressの速度は出ません。

### 普通のmicroSDはNintendo Switch 2で使えますか?

ゲームの保存には使えません。任天堂は、Switch 2でゲームのデータを保存できるのはmicroSD Expressカードだけと案内しています。Switchで撮った画面写真と動画の取り込みだけできます。

### 1970MB/sはカードの実際の速度ですか?

バスの最大速度です。SD Associationは、カードの最大速度はバス速度と違い、カードの性能で変わると書いています。

### microSD Expressのカードを読むにはどのリーダーが必要ですか?

SD Expressの速度で読むには、SD Expressに対応した機器かリーダーが必要です。非対応のリーダーでも、UHS-Iの方式で読めます。リーダーの方式の違いは[UHSスピードクラスとは?](/blog/ja/uhs-sd-card)にまとめました。
