---
title: "Can't Connect External Storage Devices to iPhone? How to Fix a Drive That Isn't Detected"
description: "When you connect external storage devices to iPhone and nothing shows up, check these in order: unlocking and the Wired Accessories setting, power, cables, format and partitions, and a disk check on a computer, based on Apple's and Microsoft's guides."
date: 2026-11-14
---

## Key takeaways

When you connect external storage devices to iPhone and the drive doesn't show up, narrow the cause from the iPhone side to the drive side. Check unlocking, power, the cable, then the format and partitions.

According to Apple, you always need to unlock your iPhone before using a storage accessory. If the drive still isn't recognized after you unlock, disconnect it and connect it again.

External hard drives often need an external power source. A drive formatted as NTFS, or one with more than one data partition, won't appear in the Files app.

"I plugged in my hard drive and nothing shows up in Files." "My flash drive works, but my hard drive doesn't." These questions come up often with external hard drives and SSDs. The first-time setup is covered in [how to connect an external hard drive to iPhone](/blog/en/iphone-hard-drive-connect). This guide covers what to check when the drive is connected but not detected.

## What should you check first when iPhone doesn't detect a drive?

Find the row that matches what you see and start there.

| Symptom | Check first | Section in this guide |
| --- | --- | --- |
| Connected to a locked iPhone, no response | Unlocking, the Wired Accessories setting | Unlocking |
| The drive doesn't spin up or its light stays off | Power to the drive | Power |
| It works with some cables or adapters but not others | Cable standard, adapter type | Cables and adapters |
| The drive powers on but isn't under Locations | Format and number of data partitions | Format and partitions |
| It won't open on a Mac or PC either | Disk check | When a computer can't open it |

We didn't test any particular hard drive, SSD, hub, or cable, and we don't recommend a specific product.

## Do you need to unlock iPhone to connect external storage devices?

Yes. According to [Apple's guide to allowing accessories to connect](https://support.apple.com/en-us/111806), by default an iPhone won't communicate with a USB device until you unlock it. For a storage accessory, you always need to unlock first, whatever the setting.

1. Unlock your iPhone.
2. Connect the drive.
3. If you're asked whether to allow the accessory, allow it.
4. If it still isn't recognized, disconnect the drive, unlock your iPhone, then reconnect the drive.

You can change how accessories are approved in Settings > Privacy & Security, under Security, in Wired Accessories. These are the options in Apple's guide.

| iPhone port | Option | What it does |
| --- | --- | --- |
| USB-C | Always Ask | You approve every accessory, every time |
| USB-C | Ask for New Accessories | You approve new accessories the first time they connect |
| USB-C, Lightning | Automatically Allow When Unlocked | Accessories are approved when they connect to an unlocked iPhone (default) |
| USB-C, Lightning | Always Allow | All accessories are approved when they connect |

If you chose Always Ask, you'll see an approval prompt each time. Apple notes that on supervised devices, an administrator can control this setting.

## Can a lack of power stop iPhone from detecting a drive?

It can. [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says external hard drives often require an external power source when used with iPhone.

| iPhone port | Apple's setup when the drive doesn't supply its own power |
| --- | --- |
| USB-C | Connect through a powered USB hub |
| Lightning | Connect a USB power adapter to the Lightning to USB 3 Camera Adapter, then plug in the drive |

If the drive has a power adapter port, connect the adapter first. If the manufacturer's specs list a power requirement, follow it. We didn't measure any drive's power draw. Adapter types are covered in [iPhone OTG USB: which adapter do you need?](/blog/en/iphone-otg-usb)

## Can a cable or adapter keep the drive from being detected?

It can. [Apple's USB-C guide](https://support.apple.com/en-us/105099) says devices and cables that aren't compliant with the USB-C standard might not work as expected.

1. Make sure the cable is compliant with the USB-C standard.
2. Try a different cable.
3. If you're going through a hub or adapter, try connecting directly. Keep the power setup if the drive needs it.
4. Connect a USB flash drive with the same cable. If the flash drive shows up and the hard drive doesn't, the problem is likely the hard drive.

The same guide says the USB-C cable that comes with iPhone supports USB 2 speeds. If the drive is detected but slow, check whether you need a USB 3 cable that supports 10Gbit/s. The iPhone models that support USB 3 speeds are listed in [connecting an SSD to iPhone](/blog/en/iphone-external-ssd-connect).

## What if the format or partitions hide the drive?

If the drive powers on but isn't in the Files app, check its format and partitions. [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says an external storage device must have only a single data partition. It must be formatted as APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, or FAT.

| Check | Where to check | What to do |
| --- | --- | --- |
| Locations list in Files | Files app on iPhone | Tap Browse again |
| The format is NTFS | Disk Utility on a Mac, File Explorer on Windows | NTFS isn't on Apple's list. Move your files off and format the drive as exFAT |
| More than one data partition | Disk Utility on a Mac, Disk Management on Windows | Move your files off and erase the whole drive with a single format |

As [Microsoft's Disk Management overview](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management) shows, Disk Management lists the partitions on each drive. On a Mac, choose View > Show All Devices in Disk Utility to see the volumes under each storage device.

To erase the whole drive, follow [Apple's Disk Utility erase guide](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac): select the storage device at the top of the sidebar, then choose GUID Partition Map as the scheme. Formatting erases everything on the drive. Detailed exFAT steps for Mac and Windows are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat). That guide uses a flash drive as the example, but the steps are the same for an external hard drive.

An iPhone with USB-C can also format the drive in Files. According to [Apple's guide to transferring files](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios), touch and hold the device's name under Locations, then tap Erase. This only works when the drive appears under Locations.

## What if a computer can't open the drive either?

If a Mac or PC can't open the drive, suspect the drive itself rather than the iPhone. If it holds files you want to keep, check the disk before formatting.

These steps follow [Apple's Disk Utility First Aid guide](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac).

1. Open Disk Utility and choose View > Show All Devices.
2. Select each of the drive's volumes in the sidebar and run First Aid.
3. If there's a container, run First Aid on it too.
4. Finally, select the storage device at the top and run First Aid.

Apple says Disk Utility can't detect or repair every problem. If First Aid fails, try again. If Disk Utility says the disk is about to fail, Apple says you can't repair it, and you should back up your data and replace the disk. In that case, contact the drive manufacturer's support.

The `chkdsk` steps for Windows and what to do when a drive has no drive letter are in [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) That guide uses an SD card as the example, but the Windows steps are the same for an external hard drive.

## What do you do once the drive is detected?

When the drive's name appears under Locations in Files, it's connected. Steps for moving photos, videos, and contacts item by item are in [how to back up iPhone to an external hard drive](/blog/en/backup-iphone-external-drive). If you unplug the drive before a copy finishes, some files might not make it, so wait until the progress indicator is gone.

## How to save to a USB drive regularly

The app below is described for USB flash drives. We haven't checked how it works with external hard drives or SSDs.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: connecting external storage devices to iPhone

### Will a drive connected to a locked iPhone be recognized?

According to Apple, you always need to unlock your iPhone before using a storage accessory. If it still isn't recognized after you unlock, disconnect the drive and reconnect it.

### My flash drive works, but my hard drive doesn't.

Check power first. Apple says external hard drives often require an external power source. On an iPhone with USB-C, use a powered USB hub. On a Lightning iPhone, use the USB 3 Camera Adapter with a USB power adapter.

### A hard drive I used on Windows doesn't show up on iPhone.

Check whether it's formatted as NTFS. NTFS isn't on Apple's list of external storage formats. Move your files elsewhere and format the drive as exFAT, and you can use it on both iPhone and Windows.

### Can I use a hard drive with several partitions?

Apple says the storage device must have only a single data partition. To get down to one partition, move your files off and erase the whole drive.

### My Wi-Fi slows down when the drive is connected.

Apple's USB-C guide says some USB-C accessories and cables can interfere with wireless connections, and performance should return to normal after the accessory is disconnected. Disconnect the drive when you finish, or try a different cable.
