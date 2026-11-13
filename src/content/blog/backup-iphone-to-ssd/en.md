---
title: "Backup iPhone to SSD: How to Save Photos, Videos, and Contacts to an External SSD"
description: "A backup iPhone to SSD routine means copying photos, videos, contacts, and files to an external SSD item by item. Here's how to prepare the SSD, the steps for each item, and what an SSD can't hold, based on Apple's guides."
date: 2026-11-13
---

## Key takeaways

A backup iPhone to SSD routine means copying photos, videos, contacts, and files to an external SSD item by item. In the Photos, Contacts, and Files apps, you choose the SSD as the save location.

Apple's iPhone backup feature uses iCloud or a computer as its destination. Apple's guides don't describe a way to pick an external SSD as the backup destination on the iPhone itself.

There's no built-in way to move messages, app data, or iPhone settings to an SSD. Keep those three with iCloud Backup or a computer backup.

"My photos and videos take up hundreds of GB, and a flash drive isn't big enough." "Once they're on the SSD, can I delete them from my iPhone?" These are the reasons people who shoot a lot of video look at external SSDs. This guide covers how to prepare an SSD for backups, the steps for each item, and what to check before you delete anything.

## What can you save when you back up iPhone to SSD?

Once the Files app shows the external SSD as a location, you can save photos, videos, contacts, and files to it. Each item uses a different app.

| Item | Save to SSD | App to use |
| --- | --- | --- |
| Photos, videos | Yes | Photos app, Export Unmodified Originals |
| Contacts | Yes | Contacts app, export as contact cards |
| Documents, downloaded files | Yes | Files app, copy |
| Messages | No built-in method | iCloud or computer backup |
| App data, iPhone settings | No built-in method | iCloud or computer backup |

The items are the same as in [how to back up iPhone to USB](/blog/en/backup-iphone-to-usb). Only the storage device changes. The apps on the iPhone stay the same.

## How to prepare an SSD to back up iPhone

According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), an external storage device must have a single data partition. It must be formatted as APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, or FAT.

| Check | Requirement | What to do |
| --- | --- | --- |
| Format | A format on Apple's list | If it's NTFS, move your files off and reformat |
| Partitions | A single data partition | If there are several, merge them into one on a Mac or PC |
| File size | FAT32 allows up to 4 GiB per file | Save long videos to exFAT or APFS |
| Capacity | Larger than the photos and videos you'll move | Check the Photos size in Settings, General, iPhone Storage |

The 4 GiB FAT32 limit comes from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). If you'll also open the SSD on a Windows PC, exFAT is the right choice. The steps are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat). That guide uses a USB drive as the example, but the iPhone Files app and Mac Disk Utility steps are the same for an external SSD.

Cables, adapters, and power are covered in [connecting an SSD to iPhone](/blog/en/iphone-external-ssd-connect). We didn't test any particular SSD, and we don't recommend one.

## Steps to back up iPhone to SSD by item

### Save photos and videos to the SSD

These steps follow [Apple's guide to downloading iCloud photos](https://support.apple.com/en-us/111762).

1. In the Photos app, go to your Library.
2. Tap Select, then choose the photos and videos to save.
3. Tap the Share button, then tap Export Unmodified Originals.
4. In the Files screen, tap the Back arrow and choose the SSD under Locations.
5. Tap Save.

If you use iCloud Photos, downloading the originals needs Wi-Fi. Apple says to update to the latest version of iOS and connect to Wi-Fi first. Tips for large videos are in [how to transfer video from iPhone to USB](/blog/en/iphone-videos-to-usb).

### Save contacts to the SSD

These steps follow [Apple's guide to exporting contacts](https://support.apple.com/guide/iphone/export-contacts-iph075ddebf2/ios).

1. In the Contacts app, go to the Lists screen.
2. Touch and hold the list you want to export.
3. Tap Export and choose the fields to include.
4. Choose Save to Files as the method, then choose the SSD under Locations.

Menu names may differ slightly between iOS versions.

### Copy documents and files to the SSD

In the Files app, touch and hold the file you want to move and choose Copy. Open a folder on the SSD, touch and hold an empty area, and choose Paste. The source is [Apple's guide to transferring files](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios).

## How is an SSD backup different from an Apple backup?

An SSD backup keeps a separate copy of your files. An Apple backup also saves the iPhone's information and settings.

| | Copy to external SSD | iCloud Backup | Computer backup |
| --- | --- | --- | --- |
| Destination | External SSD | iCloud | Mac or Windows device |
| What's included | Photos, videos, contacts, files | Information that doesn't regularly sync to iCloud, such as device settings and Home Screen layout | The data on your iPhone |
| Messages, app data | Not included | Follows Apple's backup scope | Follows Apple's backup scope |
| Moving to a new iPhone | Add files back one by one | Use the backup to transfer | Use the backup to transfer |

The source is [Apple's guide to backing up iPhone](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios). To move everything to a new iPhone as it was, use an Apple backup. To keep your own copy of photos and videos, use an SSD. Without a computer, see [how to back up an iPhone without a computer](/blog/en/backup-iphone-without-computer).

## Five checks after you back up iPhone to SSD

If any of these five is a "no," don't delete the photos from your iPhone.

1. Photos on the SSD open in the Files app.
2. Your longest video plays to the end.
3. The number of photos and videos on the SSD matches what you selected on the iPhone.
4. The contact card file is on the SSD.
5. Another copy exists somewhere else in case you lose the SSD.

[Microsoft's comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT or FAT32. Anyone who has the SSD can open its contents, so store it carefully.

## Saving to a USB drive on a regular basis

The app below is described for USB flash drives. We haven't checked how it works with external SSDs.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: backup iPhone to SSD

### Can I back up my entire iPhone to an external SSD?

In Apple's guides, iPhone backups go to iCloud or a computer. On an external SSD, you save photos, videos, contacts, and files item by item.

### Does an SSD backup include messages?

No. To keep messages, back up your iPhone with iCloud or a computer.

### Can I back up to an NTFS SSD?

NTFS isn't on Apple's list of external storage formats. Move your files elsewhere, then format the SSD as exFAT.

### Videos over 4 GB won't save to my SSD. Why?

The SSD is likely FAT32, which can't hold a file larger than 4 GiB. Format it as exFAT or APFS, then save again.

### Does an external SSD need its own power?

Apple says external hard drives often require an external power source. If the SSD doesn't appear or keeps disconnecting, try a powered USB hub on a USB-C iPhone. On a Lightning iPhone, try the Lightning to USB 3 Camera Adapter connected to a USB power adapter.
