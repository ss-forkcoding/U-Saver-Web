---
title: "iPhone Flash Drive Guide: Ports, Formats, Capacity, and Backups"
description: "Everything to check before using an iPhone flash drive: the right connector, adapter, format, and capacity, plus where to go for photos, videos, and backups."
date: 2026-11-10
---

## Key takeaways

An iPhone flash drive connects to the charging port and opens in the Files app.

Three things need to match first: a connection that fits your iPhone's port, a single data partition, and a supported format.

exFAT is the safe choice. FAT32 can't store files over 4 GB, and NTFS isn't on Apple's list of supported formats.

A drive holds photos, videos, contacts, and files, saved item by item. To keep messages and app data too, use an iCloud or computer backup alongside it.

"Can I use a drive straight out of the box?" "Do I need an adapter?" "Which app moves my photos?" These are the usual questions before connecting a drive for the first time. This guide covers the whole picture and links to detailed steps for each job.

## What can you do with an iPhone flash drive?

The app you use depends on the job. Find yours in the table and follow the link for detailed steps.

| What you want to do | App | Detailed guide |
| --- | --- | --- |
| Open or copy files on the drive | Files | [How to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide) |
| Choose an adapter | None | [iPhone OTG USB: which adapter do you need?](/blog/en/iphone-otg-usb) |
| Move photos | Photos | [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb) |
| Move long videos | Photos | [How to transfer video from iPhone to USB](/blog/en/iphone-videos-to-usb) |
| Back up item by item | Photos, Contacts, Files | [How to back up iPhone to USB](/blog/en/backup-iphone-to-usb) |
| Back up without a computer | iCloud or USB | [Back up iPhone without a computer](/blog/en/backup-iphone-without-computer) |

## Which iPhone flash drive connection do you need?

Your iPhone's port decides the connection. According to [Apple](https://support.apple.com/en-us/105099), iPhone 15 and later models have a USB-C connector.

| iPhone port | Drive connector | What you need |
| --- | --- | --- |
| USB-C | USB-C | Plug it in directly |
| USB-C | USB-A | USB-C to USB-A adapter |
| Lightning | USB-A | Lightning to USB Camera Adapter or Lightning to USB 3 Camera Adapter |

The Lightning adapters are the ones named in [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios). Some drives sold specifically for iPhone need the manufacturer's app, so check the product description before you buy.

Speed depends on the model and cable. Apple says iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models and iPhone Duo support up to 10 Gbit/s with a USB 3 cable. The USB-C cable that comes with an iPhone runs at USB 2 speeds.

## Which format does an iPhone flash drive need?

Apple requires a single data partition on external storage. The supported formats are APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, and FAT.

| Format | Maximum file size | On Apple's list | Good for |
| --- | --- | --- | --- |
| exFAT | 2^64-1 bytes | Yes | Long videos, or sharing with a Windows PC |
| FAT32 | 4 GiB | Yes | Drives that won't hold files over 4 GB |
| NTFS | 2^64-1 bytes | No | Must be reformatted for iPhone |

File sizes come from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). For the steps, see [how to format a USB drive to exFAT](/blog/en/format-usb-exfat) and [how to format USB to FAT32](/blog/en/format-usb-fat32).

Formatting erases everything on the drive. iPhone models with USB-C can format a drive as APFS, ExFAT, or MS-DOS (FAT) in the [Files app](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios). With a Lightning iPhone, use a Mac or a Windows PC.

## How much capacity does an iPhone flash drive need?

The drive needs to be larger than whatever you plan to save. Start by checking how much you have.

1. Open the Settings app.
2. Tap General.
3. Tap iPhone Storage to see how much space each app uses.

These steps follow [Apple's guide to checking storage](https://support.apple.com/en-us/108429). Leave room for the photos and videos you'll take later.

## How to connect an iPhone flash drive for the first time

1. Use the table above to get the right drive or adapter for your port.
2. Check that the drive is exFAT or FAT32, and reformat it if needed.
3. Connect the drive to the iPhone's charging port.
4. Open the Files app, tap Browse, and tap the drive's name under Locations.
5. Copy your files. Photos and videos are exported from the Photos app.
6. When copying finishes, remove the drive from the charging port.

An iPhone doesn't open a window when you connect a drive. If you don't see Locations, tap Browse again. Pulling the drive mid-copy can leave files missing or damaged, so wait for the progress indicator to disappear.

## What if your iPhone doesn't show the flash drive?

If the drive's name isn't under Locations in the Files app, go through this list in order.

| Order | What to check | What to do |
| --- | --- | --- |
| 1 | The connection | Reconnect the drive and adapter firmly |
| 2 | The format | Check it on a PC or Mac. If it's NTFS, move your files off and reformat |
| 3 | The number of partitions | Reformat multiple partitions into one |
| 4 | Power | Use a powered USB hub, or connect a USB power adapter to a Lightning to USB 3 Camera Adapter |

Apple notes that external hard drives often need an external power source. If a flash drive doesn't appear, step 4 is a way to rule out power.

## How do USB, iCloud, and computer backups fit together?

A flash drive keeps a copy of your files in your own hands. [Apple's iPhone backup](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios) saves to iCloud or a computer.

| Data | How to save it to USB | What to use alongside it |
| --- | --- | --- |
| Photos, videos | [Export Unmodified Originals](https://support.apple.com/en-us/111762) in Photos | iCloud Photos if you need it |
| Contacts | [Export a list](https://support.apple.com/guide/iphone/export-contacts-iph075ddebf2/ios) in Contacts | iCloud or computer backup |
| Files | Copy in Files | iCloud Drive or a computer |
| Messages, app data, settings | No built-in method | iCloud or computer backup |

If you're moving to a new iPhone, use an iCloud or computer backup. If you want a separate copy of your photos and contacts, a USB drive fits.

## If you want one app to save photos, videos, and contacts

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is available on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a drive used with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## iPhone flash drive FAQ

### Can I plug a flash drive straight into my iPhone?

A USB-C iPhone takes a USB-C drive directly. A USB-A drive or a Lightning iPhone needs an adapter.

### Can an iPhone flash drive use NTFS?

NTFS isn't on Apple's list of supported formats. Move your files elsewhere and reformat the drive as exFAT.

### Which format do I need for videos over 4 GB?

Use exFAT. FAT32 can't store a single file over 4 GB.

### Can I back up my whole iPhone to a flash drive?

Apple's iPhone backup goes to iCloud or a computer. A flash drive holds photos, videos, contacts, and files, saved item by item.

### Are files on a flash drive safe?

If you lose the drive, someone else can open the files on it. Keep a second copy of anything important, and store the drive somewhere secure.
