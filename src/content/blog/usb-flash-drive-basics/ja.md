---
title: "USBメモリの使い方:パソコンに挿す、ファイルをコピーする、安全に取り外す"
description: "USBメモリの使い方をWindowsパソコンとMacでまとめました。挿した後のドライブの開き方、ファイルのコピー、安全な取り外し、形式の選び方、表示されないときの確認を、MicrosoftとAppleの公式資料をもとに解説します。"
date: 2026-11-20
---

## この記事の要点

USBメモリの使い方は3ステップです。パソコンのUSBポートに挿し、エクスプローラーかFinderで開いてファイルをコピーし、取り出し操作をしてから抜きます。

WindowsとMacの両方で使うUSBメモリは、exFATかFAT32の形式が必要です。FAT32は4GBを超えるファイルを保存できません。大きな動画を移すならexFATを選んでください。

抜く前には取り出し操作をします。Microsoftは、データの損失を防ぐため、USBメモリを外す前に必ず安全な取り外しを行うよう案内しています。

「USBメモリを挿したけど、どこで開くの?」「そのまま抜いていい?」。この記事では、パソコンでUSBメモリを使う基本の手順を扱います。iPhoneにUSBメモリをつなぎたい方は[iPhoneのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide)を読んでください。

## USBメモリの使い方:最初に何を確認しますか?

挿す前に、端子の形とUSBメモリの形式を確かめます。

| 確認すること | 理由 |
| --- | --- |
| 端子の形 | パソコンのポート(USB-A、USB-C)に合わないと挿せません。合わないときは変換アダプタを使います |
| USBメモリの形式 | WindowsとMacで共用するにはexFATかFAT32が必要です |
| 空き容量 | 移すファイルより空き容量が大きい必要があります |
| ファイルサイズ | FAT32のUSBメモリには4GBを超えるファイルを1つも保存できません |

AppleはMacにストレージをつなぐとき、付属のケーブルを使い、端子が合わなければアダプタを使える場合があると案内しています([Appleのストレージ接続の案内](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac))。

## WindowsパソコンでUSBメモリを使う手順

1. USBメモリをパソコンのUSBポートに挿します。
2. 自動再生の画面が出たら、したい操作を選ぶか画面を閉じます。
3. エクスプローラーを開き、PCからUSBドライブを開きます。
4. 移したいファイルをUSBドライブにドラッグするか、コピーして貼り付けます。
5. コピーが終わったら、下の安全な取り外しの手順で取り出してから抜きます。

挿したときに出る画面は自動再生の設定によります。[Microsoftの案内](https://support.microsoft.com/en-us/windows/apps/how-to-install-programs-from-a-disc)によると、スタート > 設定 > Bluetoothとデバイス > 自動再生でオンとオフを切り替えます。リムーバブルドライブの既定の動作も同じ画面で選びます。

## MacでUSBメモリを使う手順

[Appleのストレージ接続の案内](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac)に沿った手順です。

1. USBメモリをMacのポートに挿します。
2. DockのFinderをクリックしてFinderウインドウを開きます。
3. Macのファイルを選び、サイドバーの「場所」の下にあるUSBメモリへドラッグします。
4. USBメモリのファイルをMacに移すときは、サイドバーでUSBメモリを選び、ファイルをMacのフォルダへドラッグします。
5. 使い終わったら取り出してから抜きます。

サイドバーにUSBメモリが表示されないときは、Finderの設定で外部ディスクの表示をオンにします。方法は[Appleの接続中のデバイスを表示する案内](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac)にあります。

## USBメモリはどうやって安全に取り外しますか?

| パソコン | 取り出し方 |
| --- | --- |
| Windows | タスクバーの通知領域にある「ハードウェアを安全に取り外してメディアを取り出す」アイコンを右クリックし、USBメモリの取り出しを選びます |
| Mac | USBメモリを選んで「ファイル」>「取り出す」を選ぶか、Finderのサイドバーで名前の横の取り出しボタンをクリックします |

Windowsは[Microsoftの安全な取り外しの案内](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369)に沿います。アイコンが見えないときは、先に隠れているインジケーターを表示します。安全に取り外せるという通知が出たら抜きます。

Macで取り出せないときは、ほかのアプリがUSBメモリのファイルを使っている可能性があります。開いているファイルとアプリを閉じてから、もう一度取り出します。

## 取り出し操作をせずに抜いてもいいですか?

おすすめしません。Windowsには外部ストレージの取り外しポリシーが2つあります。[Microsoftの取り外しポリシーの案内](https://learn.microsoft.com/en-us/windows/client-management/change-default-removal-policy-external-storage-media)によるものです。

| ポリシー | 動作 |
| --- | --- |
| クイック削除 | 書き込みキャッシュを使わず、いつでも取り外せる状態を保ちます。Windows 10 バージョン1809から既定です |
| 高パフォーマンス | 書き込みキャッシュを使います。抜く前に必ず安全な取り外しが必要で、そのまま抜くとデータを失うおそれがあります |

既定がクイック削除でも、コピー中に抜くとファイルが壊れることがあります。コピーが終わったのを確かめ、取り出してから抜く習慣をつけましょう。

## USBメモリの形式は何を選べばいいですか?

どの機器で使うかに合わせて選びます。ファイルサイズは[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)、iPhoneの形式は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によるものです。

| 形式 | 1ファイルの最大サイズ | 選ぶ場面 |
| --- | --- | --- |
| exFAT | 2^64-1バイト | Windows、Mac、iPhoneで共用し、大きな動画も移すとき |
| FAT32 | 4GiB | 古い機器でも読みたく、4GBを超えるファイルがないとき |
| NTFS | 2^64-1バイト | Windowsパソコンだけで使うとき。AppleのiPhone形式一覧にはありません |
| APFS | - | Macだけで使うとき。AppleはmacOS 10.13以降のMacの標準ファイルシステムと説明しています |

APFSの説明は[Appleのファイルシステム形式の案内](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac)にあります。フォーマットの手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)と[USB FAT32フォーマットの方法](/blog/ja/format-usb-fat32)にまとめました。フォーマットするとUSBメモリのファイルはすべて消えるので、先に別の場所へコピーしてください。

## パソコンにUSBメモリが表示されないときは?

| 症状 | 確認すること |
| --- | --- |
| 挿しても何も反応しません | 別のポートに挿してみます。ハブやアダプタを通しているなら、パソコンに直接挿してみます |
| Macのサイドバーに表示されません | Finderの設定で外部ディスクの表示をオンにします |
| Windowsの安全な取り外しアイコンがありません | Microsoftは、機器がつながっていないか、Windowsが機器を認識していないとアイコンが出ないことがあると説明しています |
| 大きなファイルだけコピーできません | USBメモリがFAT32か確かめます。4GBを超えるファイルはexFATのUSBメモリに保存します |
| フォーマットを求める画面が出ます | すぐにフォーマットしません。先に別のパソコンで開いてみて、残したいファイルがあれば移します |

## iPhoneでUSBメモリを使うには?

この記事はWindowsパソコンとMacが対象です。iPhoneにUSBメモリをつなぎたい方は、次の記事を読んでください。

| やりたいこと | 読む記事 |
| --- | --- |
| iPhoneにUSBメモリを挿してファイルをコピーする | [iPhoneのUSBメモリの使い方](/blog/ja/iphone-flash-drive-guide) |
| iPhoneの写真をUSBメモリに移す | [iPhoneの写真をUSBに移す方法](/blog/ja/iphone-photos-to-usb) |
| 端子、形式、容量をまとめて確認する | [iPhone USBメモリ総まとめ](/blog/ja/iphone-usb-drive-guide) |

SDカードをパソコンにつなぐ手順は[SDカードをパソコンにつなぐ方法](/blog/ja/sd-card-to-pc)にあります。

## USBメモリの使い方 よくある質問

### USBメモリを挿したらどこで開きますか?

Windowsはエクスプローラーの「PC」から、MacはFinderのサイドバーの「場所」の下から開きます。

### USBメモリはそのまま抜いてもいいですか?

おすすめしません。Microsoftは、データの損失を防ぐため、外す前に必ず安全な取り外しを行うよう案内しています。Macでも取り出してから抜きます。

### 4GBを超える動画がUSBメモリにコピーできません。

USBメモリがFAT32の可能性が高いです。FAT32は1ファイル4GiBまでしか保存できません。ファイルを移してからexFATでフォーマットしてください。

### WindowsとMacで共用するならどの形式がいいですか?

exFATを選んでください。AppleはWindowsと共用するディスクが32GB以下ならMS-DOS(FAT)、32GBを超えるならExFATを選ぶよう案内しています([AppleのWindows用フォーマットの案内](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac))。4GBを超えるファイルを移すなら、容量に関係なくexFATが合っています。

### USBメモリの中身は暗号化されますか?

Microsoftの比較表では、exFATとFAT32はファイルシステムレベルの暗号化に対応していません。USBメモリをなくすと他の人が中身を見られるので、保管場所に気をつけてください。
