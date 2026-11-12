---
title: "How to Format a USB Drive to exFAT on iPhone, Mac, and Windows"
description: "Format a USB drive to exFAT from the iPhone Files app, Mac Disk Utility, or Windows. Includes what to check first and how exFAT differs from FAT32."
date: 2026-11-10
---

## Key takeaways

To format a USB drive to exFAT is to change the way it stores files. Formatting erases everything on the drive, so copy your files somewhere else first.

An iPhone with USB-C can format a drive in the Files app. With a Lightning iPhone, use a Mac or a Windows PC.

FAT32 can't store a file larger than 4 GB. Choose exFAT if you plan to move long videos to the drive.

"It says the video is too large to copy." "I plugged in the drive and my iPhone doesn't show it." When that happens, the drive often turns out to be FAT32 or NTFS. Formatting it as exFAT fixes both problems.

## Why format a USB drive to exFAT?

exFAT doesn't have FAT32's 4 GB file limit, and it works across iPhone, Mac, and Windows.

| Format | Maximum file size | iPhone external storage |
| --- | --- | --- |
| exFAT | 2^64-1 bytes | On Apple's list |
| FAT32 | 4 GiB | On Apple's list |
| NTFS | 2^64-1 bytes | Not on Apple's list |

File sizes come from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). The formats an iPhone can use are listed in [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

For disks shared with Windows, Apple's Mac guide recommends MS-DOS (FAT) at 32 GB or less and ExFAT above 32 GB. Even on a drive of 32 GB or less, exFAT is the right choice if you plan to store videos over 4 GB.

## What should you check before formatting?

Formatting removes every file on the drive. Check these three things first.

| Check | What to do |
| --- | --- |
| Files you want to keep | Copy them to another storage device |
| The right device | Confirm the drive's name and capacity so you don't pick another drive |
| Number of partitions | Apple requires a single data partition |

## How to format a USB drive to exFAT on iPhone

According to [Apple's Files guide](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios), iPhone models with a USB-C port can change a drive's format in the Files app.

1. Connect the drive to your iPhone.
2. Open the Files app and tap Browse.
3. Touch and hold the drive's name under Locations, then tap Erase.
4. Select ExFAT as the format, then tap Erase again.

The list also includes APFS and MS-DOS (FAT). Choose ExFAT if you'll use the drive with a Windows PC or with U-Saver.

Lightning iPhones aren't covered by this method, so use a Mac or Windows PC. The adapters you need to connect a drive are in [iPhone OTG USB: which adapter do you need?](/blog/en/iphone-otg-usb)

## How to format a USB drive to exFAT on Mac

On a Mac, use Disk Utility. These steps follow [Apple's Disk Utility guide](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac).

1. Open Disk Utility from the Utilities folder in Applications.
2. Choose View, then Show All Devices.
3. In the sidebar, select the top-level item for your drive and click Erase.
4. Set Scheme to GUID Partition Map.
5. Set Format to ExFAT.
6. Enter a name.
7. Click Erase, then click Done.

If the Scheme menu doesn't appear, you haven't selected the top-level item. [Apple's guide to formatting for Windows](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac) limits the volume name to 11 characters.

## How to format a USB drive to exFAT on Windows

On Windows, format the drive from File Explorer.

1. Connect the drive and open This PC in File Explorer.
2. Right-click the USB drive and choose Format.
3. Set File system to exFAT.
4. Enter a name under Volume label.
5. Click Start and confirm.

Quick Format clears the file table and skips the scan for bad areas. [Microsoft says](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format) to use it only on previously formatted volumes you know are in good condition. If the drive has been throwing errors, turn Quick Format off.

From the command prompt, type something like `format E: /FS:exFAT /Q /V:BACKUP`. E is only an example, so replace it with your drive's letter. The wrong letter erases a different drive.

Windows formats one drive letter at a time. If the USB drive has several partitions, delete the existing volumes in Disk Management and create a single new one.

## How to check the drive on your iPhone after formatting

Connect the drive and look under Locations on the Browse screen in the Files app. If the drive's name appears, you can copy files to it. The steps are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

If the name doesn't appear, the drive may need more power or a different adapter. To move long videos, see [how to transfer video from iPhone to USB](/blog/en/iphone-videos-to-usb).

## Which USB formats does U-Saver need?

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive. The drive must be exFAT or FAT32. APFS and NTFS drives don't work. To save videos over 4 GB, format the drive as exFAT.

U-Saver is available on the App Store and requires iOS 26 or later. In Korea it costs 4,900 KRW as a one-time purchase. It doesn't save messages, app data, or iPhone settings. The contents of the drive aren't encrypted, so keep it somewhere safe. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: format USB to exFAT

### Does formatting to exFAT erase my files?

Yes. Apple's guide says erasing a storage device deletes everything on it. Copy anything you want to keep before you start.

### Can I convert FAT32 to exFAT without formatting?

The iPhone, Mac, and Windows methods in this guide all format the drive. Move your files elsewhere, format, then copy them back.

### Can an iPhone use an NTFS USB drive?

NTFS isn't on Apple's list of external storage formats. To use the drive with an iPhone, format it as exFAT.

### Can I format a drive from a Lightning iPhone?

Apple's Files app method is for iPhones with USB-C. With a Lightning iPhone, use a Mac or a Windows PC.

### Is an exFAT USB drive encrypted?

Microsoft's comparison table lists no file system level encryption for exFAT. If you lose the drive, someone else can read it, so store it carefully.
