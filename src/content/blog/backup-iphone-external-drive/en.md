---
title: "How to Back Up iPhone to External Hard Drive: Direct and Computer Methods"
description: "To back up iPhone to external hard drive, you copy photos, videos, contacts, and files to the drive item by item. Here are the steps for connecting the drive to your iPhone, the steps through a Mac or Windows PC, and the power requirements, based on Apple and Microsoft guides."
date: 2026-11-14
---

## Key takeaways

To back up iPhone to external hard drive, you copy photos, videos, contacts, and files to the drive item by item. There are two ways. You can connect the hard drive to your iPhone and save with the Files app, or you can import photos to a Mac or Windows PC and choose the hard drive as the save location.

Apple says external hard drives often require an external power source when used with iPhone. If a direct connection doesn't work, check power first.

There's no built-in way to move messages, app data, or iPhone settings to a hard drive. Keep those three with iCloud Backup or a computer backup.

"I already have an external hard drive at home. Can I put my iPhone photos on it?" "I plugged in the hard drive, and my iPhone doesn't show it." Hard drives hold a lot, which makes them a good place to collect photos and videos. This guide covers how to prepare the drive, the two ways to save to it, and what to check before you delete anything.

## What are the ways to back up iPhone to external hard drive?

Whether you have a computer, and how the drive gets power, decide the method.

| | Connect to iPhone directly | Save through a computer |
| --- | --- | --- |
| What you need | Hard drive, a cable or adapter for your iPhone's port | Mac or Windows PC, iPhone cable |
| Apps | Photos, Contacts, Files | Image Capture on Mac, Photos on Windows |
| What's included | Photos, videos, contacts, files | Photos, videos |
| Power | The drive may need an external power source | The drive connects to the computer |
| Drive format | Must be on Apple's list | Any format the computer can read |

Without a computer, use the direct method. If the drive doesn't appear on your iPhone, or it's NTFS and hard to reformat, go through a computer. Backups you can do without a computer are collected in [how to back up an iPhone without a computer](/blog/en/backup-iphone-without-computer).

## How to prepare an external hard drive for iPhone backups

For a direct connection, the hard drive must meet these conditions. According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), an external storage device must have a single data partition. It must be formatted as APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, or FAT.

| Check | Requirement | What to do |
| --- | --- | --- |
| Format | A format on Apple's list | If it's NTFS, move your files off and reformat, or go through a computer |
| Partitions | A single data partition | If there are several, merge them into one on a Mac or PC |
| File size | FAT32 allows up to 4 GiB per file | Save long videos to exFAT or APFS |
| Power | Whether the drive supplies its own power | If it doesn't, use the power options below |

The 4 GiB FAT32 limit comes from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). The same table lists exFAT's maximum file size as 2^64-1 bytes. If you'll also open the drive on a Windows PC, exFAT is the right choice. Formatting erases everything on the drive, so copy your files somewhere else first. The steps are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat). That guide uses a USB drive as the example, but the Mac Disk Utility and Windows steps are the same for a hard drive.

## Does an external hard drive need power to work with iPhone?

Often, yes. [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says external hard drives often require an external power source when used with iPhone. If the drive doesn't supply its own power, use one of these options.

| iPhone port | Power option in Apple's guide |
| --- | --- |
| USB-C | Connect through a powered USB hub |
| Lightning | Use the Lightning to USB 3 Camera Adapter connected to a USB power adapter |

We didn't test any particular hard drive, and we don't recommend one. We also didn't measure power draw. If the manufacturer lists power requirements, follow them. Cables and adapters are covered in [connecting an SSD to iPhone](/blog/en/iphone-external-ssd-connect) and [iPhone OTG requirements](/blog/en/iphone-otg-usb).

## Steps to back up iPhone to external hard drive directly

Connect the hard drive, open the Files app, and tap Browse. Start once you see the drive's name under Locations.

### Save photos and videos to the hard drive

These steps follow [Apple's guide to downloading iCloud photos](https://support.apple.com/en-us/111762).

1. In the Photos app, go to your Library.
2. Tap Select, then choose the photos and videos to save.
3. Tap the Share button, then tap Export Unmodified Originals.
4. In the Files screen, tap the Back arrow and choose the hard drive under Locations.
5. Tap Save.

If you use iCloud Photos, downloading the originals needs Wi-Fi. Tips for large videos are in [how to transfer video from iPhone to USB](/blog/en/iphone-videos-to-usb).

### Save contacts and files to the hard drive

For contacts, follow [Apple's guide to exporting contacts](https://support.apple.com/guide/iphone/export-contacts-iph075ddebf2/ios). In the Contacts app, touch and hold a list and choose Export. Choose Save to Files as the method, then choose the hard drive.

For documents and files, touch and hold the file in the Files app and choose Copy. Open a folder on the hard drive, touch and hold an empty area, and choose Paste. The source is [Apple's guide to transferring files](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios). The steps for each item match [backup iPhone to SSD](/blog/en/backup-iphone-to-ssd).

## Steps to back up iPhone photos to external hard drive through a computer

Connect the hard drive to the computer, then connect your iPhone with a cable. If your iPhone asks whether to trust this computer, tap Trust.

### On a Mac, use Image Capture

These steps follow [Apple's Image Capture guide](https://support.apple.com/guide/image-capture/transfer-images-to-your-mac-imgcp1003/mac).

1. Open the Image Capture app on your Mac.
2. In the sidebar, select your iPhone below Devices.
3. Select the photos and videos you want to import.
4. From the Import To menu at the bottom of the window, choose Other, then choose a folder on the hard drive.
5. Click Download or Download All.

According to Apple, a Live Photo is downloaded as two separate files, a still image and a video.

### On a Windows PC, use the Photos app

[Apple's photo transfer guide](https://support.apple.com/en-us/120267) says to install the Apple Devices app from the Microsoft Store. The next steps follow [Microsoft's guide to importing photos](https://support.microsoft.com/en-us/windows/apps/photos/import-photos-and-videos-from-phone-to-pc).

1. Turn on your iPhone and unlock it. Microsoft says the PC can't find the device if it's locked.
2. Select the Start button, then open Photos.
3. Select Import, then select your connected iPhone.
4. Pick the items to import and choose a folder on the hard drive as the save location.

If you use iCloud Photos, download the originals to your iPhone before importing to the PC. For better compatibility with Windows, Apple suggests going to Settings, Camera, Formats and choosing Most Compatible. This setting applies only to photos and videos you take from then on.

## How is a hard drive backup different from an Apple backup?

A hard drive backup keeps a separate copy of your files. An Apple backup also saves the iPhone's information and settings.

| | Copy to external hard drive | iCloud Backup | Computer backup |
| --- | --- | --- | --- |
| Destination | External hard drive | iCloud | Mac or Windows device |
| What's included | Photos, videos, contacts, files | Information that doesn't regularly sync to iCloud, such as device settings and Home Screen layout | The data on your iPhone |
| Messages, app data | Not included | Follows Apple's backup scope | Follows Apple's backup scope |
| Moving to a new iPhone | Add files back one by one | Use the backup to transfer | Use the backup to transfer |

The source is [Apple's guide to backing up iPhone](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios). Apple describes saving a computer backup on your Mac. Apple's guide doesn't describe changing the backup location to an external hard drive. To move everything to a new iPhone as it was, use an Apple backup, and keep a separate copy of photos and videos on the hard drive.

## Five checks after you back up iPhone to external hard drive

If any of these five is a "no," don't delete the photos from your iPhone.

1. Photos on the hard drive open in the Files app or on the computer.
2. Your longest video plays to the end.
3. The number of photos and videos on the drive matches what you selected.
4. The contact card file is on the drive.
5. Another copy exists somewhere else in case the drive fails or goes missing.

[Microsoft's comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT or FAT32. Anyone who has an exFAT drive can open its contents, so store it carefully.

## Saving to a USB drive on a regular basis

The app below is described for USB flash drives. We haven't checked how it works with external hard drives.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

The steps for backing up to a USB drive are in [how to back up iPhone to USB](/blog/en/backup-iphone-to-usb).

## FAQ: back up iPhone to external hard drive

### Can I back up my entire iPhone to an external hard drive?

In Apple's guides, iPhone backups go to iCloud or a computer. On an external hard drive, you save photos, videos, contacts, and files item by item.

### I plugged in the hard drive, and my iPhone doesn't show it.

Check power first. On a USB-C iPhone, try a powered USB hub. On a Lightning iPhone, try the Lightning to USB 3 Camera Adapter connected to a USB power adapter. If it still doesn't appear, check the format and number of partitions on a Mac or PC.

### Can I back up iPhone photos to an NTFS hard drive?

NTFS isn't on Apple's list of external storage formats, so a direct connection won't work. Through a Windows PC, you can import with the Photos app without changing the format. To use the drive directly, move your files elsewhere and format it as exFAT.

### Videos over 4 GB won't save to my hard drive. Why?

The drive is likely FAT32, which can't hold a file larger than 4 GiB. Format it as exFAT or APFS, then save again.

### Does a hard drive backup include messages?

No. To keep messages, back up your iPhone with iCloud or a computer.
