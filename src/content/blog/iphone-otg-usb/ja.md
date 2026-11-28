---
title: "iPhoneはOTG接続できる?USBメモリのつなぎ方と認識しないときの確認点"
description: "iPhoneもアダプタが合えばUSBメモリを使えます。USB-CのiPhone 15以降とLightningモデルに必要なアダプタ、ファイルアプリでの開き方、認識しないときのフォーマット・パーティション・電源の確認点をまとめました。"
date: 2026-11-09
updated: 2026-11-27
---

iPhoneでもUSBメモリを使えます。AppleはOTGという言葉を使っておらず、設定でオンにする項目もありません。端子に合うアダプタでつなげば、ファイルアプリでUSBメモリの中身を開けます。必要なアダプタはiPhoneの端子で決まります。

## まずiPhoneの端子を確認します

iPhone 15以降はUSB-C、iPhone 14まではLightningです。USBメモリの端子と組み合わせると、用意するものがわかります。

| iPhoneの端子 | USBメモリの端子 | 必要なもの |
| --- | --- | --- |
| USB-C | USB-C | なし。そのまま挿します |
| USB-C | USB-A | USB-C - USB-Aアダプタ |
| Lightning | USB-A | Lightning - USBカメラアダプタ、またはLightning - USB 3カメラアダプタ |
| Lightning | USB-C | 上のアダプタにUSB-A - USB-C変換が必要です。USB-AのUSBメモリを使うほうが簡単です |

Lightningの2種類のアダプタは、電源ポートがあるかどうかが違います。USB 3カメラアダプタには電源アダプタをつなげるので、電力を多く使う外付けハードディスクに向いています。一般的なUSBメモリなら、電源ポートのないアダプタで足りることが多いです。

## Android用のOTGケーブルは使えますか?

micro USBのOTGケーブルはiPhoneの端子に入りません。USB-CのOTGアダプタはiPhone 15以降に挿せますが、製品によって動作が違います。挿したら、まずファイルアプリにUSBメモリが表示されるかを確かめてください。

## つないだUSBメモリはファイルアプリで開きます

1. USBメモリをiPhoneの充電端子につなぎます。必要ならアダプタを使います。
2. ファイルアプリを開き、「ブラウズ」をタップします。
3. 「場所」の一覧でUSBメモリの名前をタップします。「場所」が見えないときは、もう一度「ブラウズ」をタップします。

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、USBメモリのフォーマットもファイルアプリでできます。MacやPCがなくてもかまいません。フォーマットすると中身はすべて消えるので、必要なデータは先にコピーしておきましょう。

写真とビデオを移す手順は[iPhoneの写真をUSBメモリに移す方法](/blog/ja/iphone-photos-to-usb)に、ファイルアプリでのコピーと取り外しは[iPhoneでUSBメモリを使う方法](/blog/ja/iphone-flash-drive-guide)にまとめています。

## iPhoneがUSBメモリを認識しないときの4つの確認点

| 確認すること | Appleの条件 | 対処 |
| --- | --- | --- |
| フォーマット | APFS、Mac OS拡張(HFS+)、exFAT、FAT32、FAT。NTFSは含まれません | exFATでフォーマットし直します |
| パーティション | データパーティションが1つだけ | 1つのパーティションでフォーマットし直します |
| 電源 | 外付けハードディスクは外部電源が必要なことが多い | USB-CのiPhoneは電源付きUSBハブ、LightningのiPhoneはUSB 3カメラアダプタに電源アダプタをつなぎます |
| アダプタ | 故障や相性 | 別のUSBメモリを挿してアダプタが動くか確かめます |

Windowsで使っていたUSBメモリはNTFSのことがよくあります。形式の変え方は[USBメモリをexFATでフォーマットする方法](/blog/ja/format-usb-exfat)で説明しています。

## 転送速度はモデルとケーブルで決まります

[Appleの案内](https://support.apple.com/en-us/105099)では、USB 3(最大10Gbps)に対応するのはiPhone 15 Pro、16 Pro、17 Pro、18 ProシリーズとiPhone Duoです。ほかのモデルはUSB 2の速度で転送します。

Proモデルでも、同梱のケーブルはUSB 2の速度にしか対応していません。USB 3の速度を出すには、10Gbps対応のUSB 3ケーブルとUSB 3対応のUSBメモリが必要です。写真数枚なら差はわかりにくいですが、数十GBの動画では大きく変わります。

## U-Saverで写真と連絡先をUSBメモリに保存する

NextGenAIが作ったU-Saverは、iPhoneの写真、ビデオ、連絡先を一般的なUSBメモリに保存するアプリです。App Storeで入手でき、iOS 26以降で使えます。価格は韓国で4,900ウォンの買い切りです。USBメモリはexFATかFAT32である必要があり、FAT32は4GBを超えるファイルを保存できません。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、USBメモリに保存した内容は暗号化されません。使う前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をお読みください。

## よくある質問

### iPhone 11でもOTG接続できますか?

できます。iPhone 11はLightning端子なので、Lightning - USBカメラアダプタなどを使ってUSB-AのUSBメモリをつなぎます。

### OTGケーブルは別に買う必要がありますか?

USB-CのiPhoneにUSB-CのUSBメモリを挿すなら不要です。USB-AのUSBメモリを使う場合や、LightningのiPhoneではアダプタが必要です。
