---
title: "How to Use a Flash Drive on a Computer: Plug In, Copy Files, Eject Safely"
description: "How to use a flash drive on a Windows PC or Mac: open the drive, copy files, eject it safely, pick a format, and check what to do when it doesn't show up. Based on Microsoft and Apple documentation."
date: 2026-11-20
---

## Key takeaways

How to use a flash drive comes down to three steps. Plug it into a USB port, open it in File Explorer or the Finder to copy files, then eject it before you pull it out.

If you'll move the drive between Windows and Mac, it needs to be exFAT or FAT32. FAT32 can't store a file larger than 4 GB. Choose exFAT for large videos.

Eject before you unplug. Microsoft says that to avoid losing data, you should always safely remove USB flash drives before disconnecting them.

"I plugged in the drive. Where do I open it?" "Can I just pull it out?" This guide covers the basic steps for using a flash drive on a computer. If you want to connect a drive to an iPhone, read [flash drive for iPhone: how to use one](/blog/en/iphone-flash-drive-guide).

## How to use a flash drive: what to check first

Before you plug it in, check the connector and the drive's format.

| Check | Why |
| --- | --- |
| Connector type | It has to match the computer's port (USB-A or USB-C). If it doesn't, use an adapter |
| Drive format | To use it on both Windows and Mac, it needs exFAT or FAT32 |
| Free space | The drive needs more free space than the files you're copying |
| File size | A FAT32 drive can't hold a single file larger than 4 GB |

For Mac, Apple says to connect a storage device with the cable that came with it, and that you may be able to use an adapter if the connector doesn't fit ([Apple's guide to connecting storage devices](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac)).

## How do you use a flash drive on a Windows PC?

1. Plug the flash drive into a USB port on the PC.
2. If an AutoPlay prompt appears, choose an action or close it.
3. Open File Explorer and open the USB drive under This PC.
4. Drag files onto the USB drive, or copy and paste them.
5. When copying finishes, eject the drive using the safe removal steps below, then unplug it.

The prompt you see depends on your AutoPlay settings. According to [Microsoft](https://support.microsoft.com/en-us/windows/apps/how-to-install-programs-from-a-disc), you turn AutoPlay on or off in Start > Settings > Bluetooth & devices > AutoPlay. You can also choose AutoPlay defaults for removable drives on the same screen.

## How do you use a flash drive on a Mac?

These steps follow [Apple's guide to connecting storage devices](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac).

1. Plug the flash drive into a port on your Mac.
2. Click the Finder icon in the Dock to open a Finder window.
3. Select files on your Mac and drag them to the drive, listed below Locations in the Finder sidebar.
4. To move files from the drive to your Mac, select the drive in the sidebar and drag files to a folder on your Mac.
5. When you're done, eject the drive, then unplug it.

If the drive doesn't appear in the sidebar, turn on external disks in Finder settings. See [Apple's guide to viewing connected devices](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac).

## How do you safely eject a flash drive?

| Computer | How to eject |
| --- | --- |
| Windows | Right-click the Safely Remove Hardware and Eject Media icon in the taskbar's system tray, then select Eject for the drive |
| Mac | Select the drive and choose File > Eject, or click the eject button next to the drive's name in the Finder sidebar |

On Windows, follow [Microsoft's guide to safely removing hardware](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369). If the icon isn't visible, select Show hidden icons first. Unplug the drive once the Safe To Remove Hardware notification appears.

If a Mac won't eject the drive, another app may be using files on it. Close open files and apps, then eject again.

## Can you unplug a flash drive without ejecting it?

It isn't recommended. Windows has two removal policies for external storage, described in [Microsoft's removal policy guide](https://learn.microsoft.com/en-us/windows/client-management/change-default-removal-policy-external-storage-media).

| Policy | What it does |
| --- | --- |
| Quick removal | Doesn't cache writes, so the device is ready to remove at any time. Default since Windows 10 version 1809 |
| Better performance | Caches writes. You must use Safely Remove Hardware before unplugging, or you risk losing data |

Even with Quick removal, pulling the drive mid-copy can damage the file. Wait for the copy to finish, eject, then unplug.

## Which flash drive format should you choose?

Pick the format based on where you'll use the drive. File sizes come from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison), and iPhone formats from [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

| Format | Maximum file size | Choose it when |
| --- | --- | --- |
| exFAT | 2^64-1 bytes | You'll use the drive on Windows, Mac, and iPhone, including large videos |
| FAT32 | 4 GiB | You need older devices to read it and have no files over 4 GB |
| NTFS | 2^64-1 bytes | You'll only use it on Windows PCs. It isn't on Apple's iPhone format list |
| APFS | - | You'll only use it with Macs. Apple calls it the default file system for macOS 10.13 or later |

APFS is described in [Apple's file system formats guide](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac). For formatting steps, see [how to format a USB drive to exFAT](/blog/en/format-usb-exfat) and [USB format FAT32](/blog/en/format-usb-fat32). Formatting erases everything on the drive, so copy your files somewhere else first.

## What if the computer doesn't show the flash drive?

| Symptom | What to check |
| --- | --- |
| Nothing happens when you plug it in | Try another port. If you went through a hub or adapter, plug the drive straight into the computer |
| The drive isn't in the Mac sidebar | Turn on external disks in Finder settings |
| The Windows safe removal icon is missing | Microsoft says the icon may not appear if no removable device is connected or Windows doesn't recognize it |
| Only large files fail to copy | Check whether the drive is FAT32. Store files over 4 GB on an exFAT drive |
| A prompt asks you to format the drive | Don't format right away. Try the drive on another computer first and move any files you want to keep |

## How do you use a flash drive with an iPhone?

This guide covers Windows PCs and Macs. To connect a flash drive to an iPhone, see these guides.

| What you want to do | Read |
| --- | --- |
| Plug a drive into an iPhone and copy files | [Flash drive for iPhone: how to use one](/blog/en/iphone-flash-drive-guide) |
| Move iPhone photos to a drive | [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb) |
| Ports, formats, and capacity at a glance | [iPhone flash drive guide](/blog/en/iphone-usb-drive-guide) |

To connect an SD card to a computer, see [SD card reader for PC](/blog/en/sd-card-to-pc).

## How to use a flash drive: FAQ

### Where do I open a flash drive after plugging it in?

On Windows, open it under This PC in File Explorer. On a Mac, open it below Locations in the Finder sidebar.

### Can I just pull out the flash drive?

It isn't recommended. Microsoft says to always safely remove USB flash drives before disconnecting them to avoid losing data. On a Mac, eject first, then unplug.

### A video over 4 GB won't copy to my flash drive.

The drive is most likely FAT32, which stores files up to 4 GiB. Move your files off the drive, then format it as exFAT.

### Which format works on both Windows and Mac?

Choose exFAT. For disks shared with Windows, Apple recommends MS-DOS (FAT) at 32 GB or less and ExFAT above 32 GB ([Apple's guide to formatting for Windows](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)). If you'll move files over 4 GB, exFAT is the right choice at any capacity.

### Is a flash drive encrypted?

In Microsoft's comparison, exFAT and FAT32 don't support file system level encryption, so files on them aren't encrypted. If you lose the drive, someone else can read it, so keep it somewhere safe.
