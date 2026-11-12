---
title: "USB FAT32フォーマットの方法:4GBのファイル制限と64GBのUSBメモリ"
description: "USB FAT32フォーマットの方法を、iPhone、Mac、Windowsの順にまとめました。4GBのファイル制限、64GBのUSBメモリで変わる点、exFATを選ぶべき場合を解説します。"
date: 2026-11-10
---

## この記事の要点

USB FAT32フォーマットは、USBメモリの保存形式をFAT32に変える作業です。フォーマットするとUSBメモリのデータはすべて消えるので、先に別の場所へコピーします。

FAT32は4GBを超えるファイルを保存できません。長い動画を移すUSBメモリなら、FAT32ではなくexFATを選んでください。

AppleはWindowsと共用するディスクが32GB以下ならMS-DOS(FAT)、32GBを超えるならExFATを選ぶよう案内しています。64GBのUSBメモリは、FAT32にする理由が特になければexFATが合っています。

「小さいファイルはコピーできるのに、大きい動画だけできない」「64GBのUSBメモリをFAT32にしたい」。こうした疑問は、FAT32の2つの制限から生まれます。ファイル1つのサイズの制限と、USBメモリの容量の目安です。

## USB FAT32フォーマットはどんなときに選びますか?

FAT32は、容量の小さいUSBメモリに4GB以下のファイルだけを保存するときに選びます。一緒に使う機器の説明書にFAT32だけが書かれている場合もFAT32が必要です。

| 状況 | 選ぶ形式 |
| --- | --- |
| 4GBを超えるファイルを保存します | exFAT |
| 32GBを超えるUSBメモリをWindowsと共用します | exFAT |
| 32GB以下のUSBメモリに4GB以下のファイルだけ保存します | FAT32またはexFAT |
| 一緒に使う機器の説明書にFAT32だけ書かれています | FAT32 |

2つの形式の違いは次のとおりです。

| 項目 | FAT32 | exFAT |
| --- | --- | --- |
| 1ファイルの最大サイズ | 4GiB | 2^64-1バイト |
| AppleのMac案内の目安 | 32GB以下 | 32GB超 |
| iPhoneの外部ストレージ | Appleの一覧にあります | Appleの一覧にあります |

ファイルサイズは[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)、容量の目安は[AppleのWindows用フォーマットの案内](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)、iPhoneで使える形式は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によるものです。

## FAT32の4GB制限とは何ですか?

Microsoftの比較表は、FAT32の最大ファイルサイズを4GiBと記載しています。この記事では一般的な表現に合わせて4GBと書きます。

この制限はファイル1つごとにかかります。小さいファイルは空き容量の分だけ保存できますが、4GBを超える動画1本は空き容量が十分でも保存できません。FAT32でフォーマットし直しても変わりません。

長い動画を移すなら[exFATフォーマット方法](/blog/ja/format-usb-exfat)に沿ってください。動画のサイズを確認する手順は[iPhoneの動画をUSBに移す方法](/blog/ja/iphone-videos-to-usb)にあります。

## 64GBのUSBメモリをFAT32にフォーマットできますか?

64GBのUSBメモリのFAT32フォーマットは、使う環境によって案内が異なります。Appleは32GBを超えるディスクにExFATを選ぶよう説明しています。Windowsはアップデートによってコマンドラインの上限が異なります。

| 環境 | 公式の案内 |
| --- | --- |
| Macのディスクユーティリティ | MS-DOS(FAT)は32GB以下、32GBを超えるならExFATを選びます |
| Windowsの従来の上限 | FAT32のパーティションは最大32GBです。64GBのUSBメモリは32GBだけ使うようにフォーマットします |
| Windowsのコマンドライン(2026年の変更) | FAT32のフォーマット上限が32GBから2TBに上がります |
| iPhoneのファイルアプリ | 容量の上限は記載されていません |

従来の上限は[MicrosoftのWinPE USBの文書](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/winpe--use-a-single-usb-key-for-winpe-and-a-wim-file---wim?view=windows-11)にあります。2TBへの変更は[2026年4月30日のプレビュー更新KB5083631](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/04/april-30-2026-kb5083631-os-builds-26200-8328-and-26100-8328-preview)に記載されています。[Windows Insiderの告知](https://blogs.windows.com/windows-insider/2026/04/17/releasing-windows-11-builds-26100-8313-and-26200-8313-to-the-release-preview-channel/)はこの項目を段階的な展開に分類しており、パソコンによって時期が異なる場合があります。

32GBだけ使うようにフォーマットすると、64GBのUSBメモリの残りの領域は保存に使えません。FAT32しか読めない機器に挿すUSBメモリでなければ、exFATにフォーマットしてください。

## USB FAT32フォーマットの前に何を確認しますか?

フォーマットするとUSBメモリ内のファイルはすべて消えます。残したいデータは、先に別のストレージへコピーします。

名前と容量を見て、フォーマットする機器が合っているか確かめてください。iPhoneで使うUSBメモリは、Appleの案内どおりデータパーティションが1つである必要があります。

## iPhoneでUSBメモリをFAT32にフォーマットする方法

[Appleのファイルアプリの案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)によると、USB-C搭載のiPhoneはファイルアプリでフォーマットを変更できます。FAT32のUSBメモリにするには、一覧の「MS-DOS(FAT)」を選びます。

1. USBメモリをiPhoneに接続します。
2. ファイルアプリを開き、「ブラウズ」をタップします。
3. 「場所」の下のUSBメモリの名前を長押しし、「消去」をタップします。
4. フォーマットの一覧で「MS-DOS(FAT)」を選び、もう一度「消去」をタップします。

LightningのiPhoneはこの案内の対象外です。MacかWindowsパソコンでフォーマットしてください。接続に必要なアダプタは[iPhoneのOTG接続条件](/blog/ja/iphone-otg-usb)にまとめました。

## MacでUSBメモリをFAT32にフォーマットする方法

Macではディスクユーティリティを使います。[Appleのディスクユーティリティの案内](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)に沿った手順です。

1. 「アプリケーション」の「ユーティリティ」フォルダからディスクユーティリティを開きます。
2. メニューで「表示」>「すべてのデバイスを表示」を選びます。
3. サイドバーでUSBメモリの最上位の項目を選び、消去ボタンをクリックします。
4. 「方式」で「GUIDパーティションマップ」を選びます。
5. 「フォーマット」で「MS-DOS(FAT)」を選びます。
6. 名前を入力します。
7. 「消去」をクリックし、「完了」をクリックします。

「方式」のメニューが表示されない場合は、最上位の項目を選んでいません。AppleのWindows用フォーマットの案内によると、名前は11文字まで使えます。

## WindowsでUSBメモリをFAT32にフォーマットする方法

次の手順は[Microsoftのformatコマンドの文書](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)に沿っています。

1. USBメモリをパソコンに接続し、ドライブ文字を確認します。
2. コマンドプロンプトを開きます。
3. `format E: /FS:FAT32 /Q /V:BACKUP`のように入力します。
4. 画面の案内を読んで進めます。

Eは例なので、お使いのUSBメモリのドライブ文字に置き換えてください。文字を間違えると別のドライブが消えます。ボリュームラベルは11文字まで使えます。

`/Q`はクイックフォーマットです。ファイルの一覧を消し、不良領域の検査を省きます。Microsoftは、状態がよいとわかっているドライブにだけ使うよう説明しています。USBメモリでエラーが頻発するなら、`/Q`を外して実行してください。

32GBを超えるUSBメモリでコマンドがエラーで止まるときは、2026年の変更がそのパソコンにまだ適用されていない可能性があります。その場合はexFATにフォーマットしてください。

## USB FAT32フォーマット後にiPhoneで確認する方法

USBメモリをiPhoneに接続し、ファイルアプリの「ブラウズ」画面で「場所」を確認します。USBメモリの名前が表示されれば、ファイルをコピーできます。手順は[iPhone用USBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

## U-SaverにFAT32のUSBメモリは使えますか?

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリで使えます。FAT32のUSBメモリに収まらない動画は記録に例外として表示されるので、4GBを超える動画も保存するならexFATにフォーマットしてください。U-SaverはApp Storeで入手でき、iOS 26以降で使います。韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、USBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## USB FAT32フォーマットのよくある質問

### FAT32にフォーマットするとUSBメモリのデータは消えますか?

消えます。残したいファイルはフォーマット前に別の場所へコピーしてください。

### FAT32のUSBメモリに4GBを超える動画を保存できますか?

保存できません。Microsoftの比較表では、FAT32の最大ファイルサイズは4GiBです。大きい動画はexFATのUSBメモリに保存してください。

### 64GBのUSBメモリはFAT32とexFATのどちらが合っていますか?

Appleの案内ではexFATです。FAT32しか対応していない機器に挿す場合にだけFAT32を検討してください。

### MacのフォーマットメニューのどこにFAT32がありますか?

Appleの案内はこの項目をMS-DOS(FAT)と記載しています。ディスクユーティリティの「フォーマット」メニューで「MS-DOS(FAT)」を選んでください。

### iPhoneでFAT32のUSBメモリを使えますか?

使えます。Appleの外部ストレージの形式一覧にFAT32があります。USBメモリのデータパーティションは1つである必要があります。
