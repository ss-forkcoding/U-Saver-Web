---
title: "iPhone USBメモリ総まとめ：接続、形式、容量、バックアップまで"
description: "iPhoneでUSBメモリを使うときに必要な端子、アダプタ、形式、容量を1つにまとめました。写真、動画、バックアップなど目的別の手順もご案内します。"
date: 2026-11-10
---

## この記事の要点

iPhone USBメモリは、充電端子に接続してファイルアプリで開きます。

最初に3つを合わせます。iPhoneの端子に合う接続方法、データパーティションが1つであること、対応している形式です。

形式はexFATが無難です。FAT32は4GBを超えるファイルを保存できず、NTFSはAppleの対応形式の一覧にありません。

USBメモリには、写真、ビデオ、連絡先、ファイルを項目ごとに保存します。メッセージやアプリのデータも残すなら、iCloudかパソコンのバックアップを併用してください。

「USBメモリを買えばすぐ使えますか?」「アダプタは必要ですか?」「写真を移すにはどのアプリを開きますか?」。iPhoneに初めてUSBメモリをつなぐときによく出る疑問です。この記事は全体の流れをまとめ、詳しい手順はそれぞれの記事でご案内します。

## iPhone USBメモリで何ができますか?

やりたいことによって使うアプリが変わります。次の表で目的を探し、詳しい記事に進んでください。

| やりたいこと | 使うアプリ | 詳しい記事 |
| --- | --- | --- |
| USBメモリのファイルを開く、コピーする | ファイル | [iPhone用USBメモリの使い方](/blog/ja/iphone-flash-drive-guide) |
| アダプタを選ぶ | なし | [iPhoneのOTG接続条件](/blog/ja/iphone-otg-usb) |
| 写真を移す | 写真 | [iPhoneの写真をUSBに移す方法](/blog/ja/iphone-photos-to-usb) |
| 長い動画を移す | 写真 | [iPhoneの動画をUSBに移す方法](/blog/ja/iphone-videos-to-usb) |
| 項目ごとにバックアップする | 写真、連絡先、ファイル | [iPhoneバックアップをUSBメモリに取る方法](/blog/ja/backup-iphone-to-usb) |
| パソコンなしでバックアップする | iCloudまたはUSBメモリ | [iPhoneバックアップをパソコンなしで](/blog/ja/backup-iphone-without-computer) |

## iPhone USBメモリの接続に何が必要ですか?

端子によって接続方法が決まります。[Appleの案内](https://support.apple.com/en-us/105099)によると、iPhone 15以降のモデルはUSB-Cコネクタを搭載しています。

| iPhoneの端子 | USBメモリの端子 | 必要なもの |
| --- | --- | --- |
| USB-C | USB-C | そのまま挿します |
| USB-C | USB-A | USB-C - USB-Aアダプタ |
| Lightning | USB-A | Lightning - USBカメラアダプタまたはLightning - USB 3カメラアダプタ |

Lightningのアダプタ名は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)に記載された製品です。iPhone用として売られている製品の中にはメーカーのアプリが必要なものがあるので、購入前に商品説明を確認してください。

速度はモデルとケーブルによって変わります。Appleの案内によると、iPhone 15 Pro、16 Pro、17 Pro、18 ProのシリーズとiPhone Duoは、USB 3ケーブルを使うと最大10Gbit/sに対応します。iPhoneに付属のUSB-CケーブルはUSB 2の速度です。

## iPhone USBメモリの形式は何にしますか?

Appleは、外部ストレージのデータパーティションを1つにするよう案内しています。対応形式はAPFS、APFS(暗号化)、macOS拡張(HFS+)、exFAT、FAT32、FATです。

| 形式 | 1ファイルの最大サイズ | Appleの対応一覧 | 合う場合 |
| --- | --- | --- | --- |
| exFAT | 2^64-1バイト | あります | 長い動画を保存する、Windowsパソコンと併用する |
| FAT32 | 4GiB | あります | 4GBを超えるファイルを保存しない |
| NTFS | 2^64-1バイト | ありません | iPhoneで使うにはフォーマットが必要です |

ファイルサイズは[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)と[USB FAT32フォーマットの方法](/blog/ja/format-usb-fat32)にあります。

フォーマットするとUSBメモリのデータはすべて消えます。USB-CのiPhoneは[ファイルアプリ](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)でAPFS、ExFAT、MS-DOS(FAT)にフォーマットできます。LightningのiPhoneは、MacかWindowsパソコンを使ってください。

## iPhone USBメモリの容量はどのくらい必要ですか?

保存するデータより大きいUSBメモリが必要です。まずデータの大きさを確認してください。

1. 設定アプリを開きます。
2. 「一般」をタップします。
3. 「iPhoneストレージ」をタップすると、アプリごとの使用量が表示されます。

この手順は[Appleのストレージ確認の案内](https://support.apple.com/en-us/108429)に沿ったものです。これから撮る写真や動画の分も考えて、余裕を持たせてください。

## iPhoneにUSBメモリを初めて接続する手順

1. 表を見て、端子に合うUSBメモリやアダプタを用意します。
2. USBメモリがexFATかFAT32か確かめ、必要ならフォーマットします。
3. USBメモリをiPhoneの充電端子に接続します。
4. ファイルアプリを開いて「ブラウズ」をタップし、「場所」にあるUSBメモリの名前をタップします。
5. ファイルをコピーします。写真とビデオは写真アプリから書き出します。
6. コピーが終わったら、充電端子からUSBメモリを抜きます。

iPhoneはUSBメモリを接続しても画面を出しません。「場所」が表示されないときは、もう一度「ブラウズ」をタップします。コピー中に抜くと一部のファイルが欠けたり壊れたりすることがあるので、進行表示が消えてから抜いてください。

## iPhoneにUSBメモリが表示されないときは?

ファイルアプリの「場所」にUSBメモリの名前がないときは、次の順番で確認します。

| 順番 | 確認すること | 対処 |
| --- | --- | --- |
| 1 | 接続状態 | USBメモリとアダプタを奥まで挿し直します |
| 2 | 形式 | パソコンやMacで確認します。NTFSならデータを移してからフォーマットします |
| 3 | パーティションの数 | 複数あれば1つにフォーマットします |
| 4 | 電源 | 電源供給対応のUSBハブを使うか、Lightning - USB 3カメラアダプタにUSB電源アダプタを接続します |

Appleの案内では、外付けハードディスクには外部電源が必要なことが多いと説明しています。USBメモリが表示されないときも、4番の方法で電源を足して確かめられます。

## USBメモリ、iCloud、パソコンのバックアップはどう使い分けますか?

USBメモリは、データのコピーを手元に置く方法です。[AppleのiPhoneバックアップ](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios)の保存先はiCloudかパソコンです。

| データ | USBメモリへの保存方法 | 併用する方法 |
| --- | --- | --- |
| 写真、ビデオ | 写真アプリで[未編集のオリジナルを書き出す](https://support.apple.com/en-us/111762) | 必要ならiCloud写真 |
| 連絡先 | 連絡先アプリで[リストを書き出す](https://support.apple.com/guide/iphone/export-contacts-iph075ddebf2/ios) | iCloudまたはパソコンのバックアップ |
| ファイル | ファイルアプリでコピー | iCloud Driveまたはパソコン |
| メッセージ、アプリのデータ、設定 | 標準の方法はありません | iCloudまたはパソコンのバックアップ |

新しいiPhoneに移るなら、iCloudかパソコンのバックアップを使ってください。写真や連絡先のコピーを別に残すなら、USBメモリが合っています。

## 写真、ビデオ、連絡先を1つのアプリで保存したいなら

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## iPhone USBメモリのよくある質問

### iPhoneにUSBメモリをそのまま挿せますか?

USB-CのiPhoneには、USB-CのUSBメモリをそのまま挿せます。USB-AのUSBメモリやLightningのiPhoneにはアダプタが必要です。

### NTFSのUSBメモリはiPhoneで使えますか?

NTFSはAppleの対応形式の一覧にありません。データを別の場所に移してからexFATにフォーマットしてください。

### 4GBを超える動画を保存するにはどの形式を使いますか?

exFATを使ってください。FAT32は1ファイルが4GBを超えると保存できません。

### USBメモリにiPhoneを丸ごとバックアップできますか?

AppleのiPhoneバックアップの保存先はiCloudとパソコンです。USBメモリには、写真、ビデオ、連絡先、ファイルを項目ごとに保存します。

### USBメモリに保存したファイルは安全ですか?

USBメモリをなくすと、ほかの人が中のファイルを開けます。大切なデータは別の場所にもコピーを置き、USBメモリは安全な場所に保管してください。
