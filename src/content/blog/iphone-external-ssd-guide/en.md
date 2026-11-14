---
title: "Portable SSD for iPhone: How to Choose, Connect, and Use One"
description: "What to check before you buy a portable SSD for iPhone: port, cable, format, power, speed, and ProRes requirements. Plus how to connect it, move photos, and choose between an SSD and a hard drive, based on Apple's guides."
date: 2026-11-15
---

## Key takeaways

Choosing a portable SSD for iPhone starts with your iPhone, not a product name. Match the port, the cable speed, the drive format, and the power requirements first.

A USB-C iPhone connects to a USB-C SSD with a single cable. A Lightning iPhone needs a camera adapter. Either way, you open the SSD in the Files app.

A fast SSD can't go beyond the limit of a USB 2 connection. Only some Pro models support USB 3 speeds.

"What should I look for in an SSD for my iPhone?" "I bought one and my iPhone doesn't see it." This guide lists what to check, based on Apple and Microsoft documentation, and gathers our guides on connecting, backing up, and troubleshooting in one place. We haven't tested any specific product and don't recommend one.

## What can you do with a portable SSD on iPhone?

Apple's guides describe three uses.

| Use | What you can do | Source |
| --- | --- | --- |
| Store files | Open the SSD in the Files app and copy files to it | [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| Move photos and videos | Export originals from the Photos app and save them to the SSD | [Apple's guide to downloading iCloud Photos](https://support.apple.com/en-us/111762) |
| Record ProRes | Supported Pro models record ProRes directly to the SSD | [Apple's ProRes guide](https://support.apple.com/en-us/109041) |

Files you copy to an SSD aren't the same as an iPhone backup. To see what you can save, item by item, read [backup iPhone to SSD](/blog/en/backup-iphone-to-ssd).

## How do you choose a portable SSD for iPhone?

The criteria below come from Apple and Microsoft documentation. Check each one against the product's specs.

| Check | What to look for | Source |
| --- | --- | --- |
| Port | On a USB-C iPhone, connect an SSD with a USB-C port using a cable with USB-C on both ends. A Lightning iPhone needs the Lightning to USB 3 Camera Adapter or the Lightning to USB Camera Adapter | [Apple's USB-C guide](https://support.apple.com/en-us/105099), [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| Cable | On models with USB 3, use a USB 3 cable that supports 10Gbit/s. The cable that comes with the iPhone runs at USB 2 speeds | [Apple's USB-C guide](https://support.apple.com/en-us/105099) |
| Format and partitions | A single data partition formatted as APFS, Mac OS Extended (HFS+), exFAT, FAT32, or FAT. NTFS isn't on the list | [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| Power | Apple's guide lists no separate power note for external SSDs. External hard drives often need an external power source | [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| ProRes recording | 4K60 needs a write speed of at least 220 MB per second, 4K120 at least 440 MB per second, both with a maximum power draw of 4.5 W | [Apple's ProRes guide](https://support.apple.com/en-us/109041) |
| Encryption | ProRes recording doesn't support password-encrypted drives. exFAT has no file system level encryption | [Apple's ProRes guide](https://support.apple.com/en-us/109041), [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) |

Apple notes that devices and cables that aren't compliant with the USB-C standard might not work as expected. Before you buy, check that the manufacturer lists a USB-C connection and read and write speeds.

## How fast can your iPhone use a portable SSD?

Your iPhone model and cable set the maximum spec. The table combines [Apple's USB-C guide](https://support.apple.com/en-us/105099) and [Apple's camera adapter guide](https://support.apple.com/en-us/118280).

| iPhone | Maximum spec | Condition |
| --- | --- | --- |
| iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models, iPhone Duo | USB 3.2 Gen 2, up to 10Gbit/s | Needs a separate USB 3 cable that supports 10Gbit/s |
| Other USB-C iPhone models | USB 2 | The cable that comes with the iPhone also runs at USB 2 speeds |
| Lightning iPhone models | USB 2 | USB 2 speeds regardless of the adapter |

Over USB 2, even a fast SSD can't go beyond the limit of the connection. These are maximum specs. We haven't measured actual transfer speeds.

## Which format should a portable SSD for iPhone use?

Pick one that fits the other devices you'll use. File size limits come from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison).

| Format | Works well with | Keep in mind |
| --- | --- | --- |
| exFAT | iPhone, Mac, Windows | No file system level encryption. Required for ProRes recording |
| APFS | iPhone, Mac | Apple's list also includes APFS (Encrypted) |
| FAT32 | Older devices too | A single file can't exceed 4 GiB |
| NTFS | Windows | Not on the iPhone's list of external storage formats |

On a USB-C iPhone, you can change the format in the Files app. These steps follow [Apple's file transfer guide](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios).

1. Copy anything you want to keep from the SSD to another location.
2. Connect the SSD to your iPhone, open Files, and tap Browse.
3. Touch and hold the SSD's name below Locations, then tap Erase.
4. Choose ExFAT, APFS, or MS-DOS (FAT), then tap Erase again.

The Mac and Windows steps are in [how to format a drive to exFAT](/blog/en/format-usb-exfat). The guide uses a USB flash drive, but the steps are the same for an external SSD.

## How do you connect the SSD and move photos to it?

Connecting follows [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios). Exporting photos follows [Apple's guide to downloading iCloud Photos](https://support.apple.com/en-us/111762).

1. Plug the cable or adapter into your iPhone's charging port and connect the SSD.
2. In Files, tap Browse and check that the SSD's name appears below Locations.
3. In the Photos app, go to your Library, tap Select, and choose the photos and videos to move.
4. Tap the Share button, then tap Export Unmodified Originals.
5. Tap the Back arrow, choose the SSD below Locations, then tap Save.
6. When you're done, remove the SSD from the charging port.

Cable and adapter setups are in [connecting an SSD to iPhone](/blog/en/iphone-external-ssd-connect). How to free up space after moving photos is in [transfer photos from iPhone to SSD](/blog/en/iphone-photos-to-ssd).

## What should you check if your iPhone doesn't see the SSD?

Narrow it down in this order. Each item comes from Apple's guides.

| Step | Check | What to do |
| --- | --- | --- |
| 1 | Files app | If you don't see Locations, tap Browse again |
| 2 | Format and partitions | If the drive is NTFS or has several partitions, move your files and reformat it |
| 3 | Power | On a USB-C iPhone, use a powered USB hub. On a Lightning iPhone, use the USB 3 Camera Adapter with a USB power adapter |
| 4 | Cable | Try another cable that complies with the USB-C standard |

A more detailed checklist is in [how to fix a drive that isn't detected](/blog/en/iphone-drive-not-detected).

## Should you get an external SSD or an external hard drive?

To connect to an iPhone without a hub, an SSD is simpler. Apple says external hard drives often require an external power source when used with iPhone.

| If you want to | Better fit |
| --- | --- |
| Carry it around and plug it into your iPhone often | External SSD |
| Move large videos often on a Pro model with USB 3 | External SSD |
| Keep a large archive where cost per GB matters | External hard drive |

The manufacturer-based comparison is in [SSD vs HDD speed and more](/blog/en/external-ssd-vs-hdd). Connecting a hard drive is covered in [how to connect an external hard drive to iPhone](/blog/en/iphone-hard-drive-connect).

## All our iPhone SSD guides

| If you want to | Read |
| --- | --- |
| Match the cable, adapter, and power | [Connecting an SSD to iPhone](/blog/en/iphone-external-ssd-connect) |
| Save photos, contacts, and files item by item | [Backup iPhone to SSD](/blog/en/backup-iphone-to-ssd) |
| Move photos and videos and free up space | [Transfer photos from iPhone to SSD](/blog/en/iphone-photos-to-ssd) |
| Compare an SSD with a hard drive | [SSD vs HDD speed and more](/blog/en/external-ssd-vs-hdd) |
| Fix a drive that doesn't appear | [How to fix a drive that isn't detected](/blog/en/iphone-drive-not-detected) |
| Format a drive as exFAT | [How to format a drive to exFAT](/blog/en/format-usb-exfat) |

## Want to save to a USB flash drive regularly?

The app below is described for USB flash drives. We haven't checked how it works with external SSDs.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: portable SSD for iPhone

### Which portable SSD do you recommend for iPhone?

We haven't tested any product and don't recommend one. Compare the port, format, speed, and power items in the table above with the product's specs.

### Does an external SSD need its own power to work with iPhone?

Apple's guide lists no separate power note for external SSDs. If the drive doesn't connect or keeps disconnecting, try it through a powered USB hub. If the manufacturer's specs list a power requirement, follow them.

### Will a faster SSD make transfers faster on my iPhone?

Only if your iPhone supports USB 3. According to Apple, iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models and iPhone Duo support USB 3.2 Gen 2. Other models run at USB 2 speeds.

### How do I save videos over 4 GB to an SSD?

Format the SSD as exFAT or APFS. On FAT32, a single file can't exceed 4 GiB.

### Why does my Wi-Fi slow down when the SSD is connected?

[Apple's USB-C guide](https://support.apple.com/en-us/105099) says some USB-C accessories and cables can interfere with wireless connections. Disconnect the SSD when you're done, or try a different cable.
