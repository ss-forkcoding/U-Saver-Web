---
title: "How to Use a Flash Drive on a Mac: Ports, Allow Prompt, Finder, Eject, and Formats"
description: "How to use a flash drive on a Mac: match the port, answer the Allow accessory prompt, copy files in the Finder, eject safely, and fix a drive that won't show up or eject. Based on Apple documentation."
date: 2026-11-21
---

## Key takeaways

How to use a flash drive on a Mac comes down to four steps. Plug the drive into a port that fits, allow it if your Mac asks, copy files in the Finder, then eject it before you unplug it.

Mac laptops with Apple silicon may ask you to allow a new USB accessory. If you click Don't Allow, the Mac won't recognize the drive.

If you'll also use the drive with a Windows PC or an iPhone, format it as exFAT or FAT32. APFS is for Macs. FAT32 can't store a file larger than 4 GB.

"I plugged the drive into my MacBook. Why doesn't anything happen?" "It says the disk can't be ejected." This guide covers only the Mac side of using a flash drive. For Windows PCs as well, read [how to use a flash drive on a computer](/blog/en/usb-flash-drive-basics).

## Which port and adapter does your Mac need?

Check the connector on the drive against the ports on your Mac. Apple lists each port type in [Identify the ports on your Mac](https://support.apple.com/en-us/109523).

| Drive connector | Mac port | What to do |
| --- | --- | --- |
| USB-C | USB-C or Thunderbolt (USB-C) | Plug it in directly |
| USB-A | USB-A | Plug it in directly |
| USB-A | USB-C or Thunderbolt (USB-C) only | Use a USB-C to USB adapter |

[Apple's guide to USB-C cables](https://support.apple.com/guide/mac-help/use-usb-c-cables-mchl447b9239/mac) lists the USB-C to USB Adapter for standard USB devices, including thumb drives. Apple's [guide to connecting storage devices](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac) says that if the cable doesn't fit a port, you may be able to use an adapter. This guide doesn't recommend specific products.

## Why does my Mac ask me to allow the flash drive?

According to [Apple](https://support.apple.com/en-us/102282), Mac laptops with Apple silicon show an alert when you connect a new or unknown USB accessory, Thunderbolt accessory, or SD card.

| Situation | What happens |
| --- | --- |
| You click Allow | The Mac recognizes the drive |
| You click Don't Allow | The Mac won't recognize the drive. It asks again the next time you connect it |
| The Mac is locked | Unlock it before you can allow the drive |
| The Mac has been locked for 3 or more days | You might need to unlock it to use a drive you allowed before |

To change this behavior, choose Apple menu > System Settings > Privacy & Security > Accessories. The default for "Allow accessories to connect" is Ask for new accessories. The other choices are Always ask, Automatically allow when unlocked, and Always allow.

## How do you use a flash drive on a Mac to copy files?

These steps follow [Apple's guide to connecting storage devices](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac).

1. Plug the flash drive into your Mac. Allow it if the alert appears.
2. Click the Finder icon in the Dock to open a Finder window.
3. To copy files to the drive, select files on the desktop or in a folder and drag them to the drive below Locations in the Finder sidebar.
4. To copy files from the drive, select the drive below Locations and drag the files to a location on your Mac.
5. When copying finishes, eject the drive, then unplug it.

If a file on the drive won't open because of permissions, Apple says an administrator may need to authenticate or change Sharing & Permissions for the file. If you're not the administrator, ask them for access.

## How do you eject a flash drive on a Mac?

Apple lists three ways in the same guide.

| Where | How to eject |
| --- | --- |
| Finder menu | Select the drive, then choose File > Eject |
| Finder sidebar | Click the eject button next to the drive's name |
| Desktop | Drag the drive's icon to the Trash |

Wait until copying finishes before you eject, then unplug the drive.

## What if the Mac says the disk can't be ejected?

[Apple says](https://support.apple.com/guide/mac-help/eject-a-disk-mac-app-mh27076/mac) you may not be able to eject a disk while one or more apps are using it.

1. Read the warning. Sometimes it names the app that's using the disk.
2. Press Command-Tab to see which apps are open.
3. Quit the apps that are using the disk, then eject again.
4. If you can't quit an app, close the documents that are on the drive, then eject again.

If another user on the same Mac is using the drive, follow [Apple's guide for disks used by another user](https://support.apple.com/guide/mac-help/eject-a-disk-user-mac-mh27077/mac).

## What if the flash drive doesn't show up on the Mac?

| Symptom | What to check |
| --- | --- |
| Nothing happens when you plug it in | Check whether an Allow alert appeared. If you clicked Don't Allow, unplug the drive and connect it again |
| The drive isn't in the Finder sidebar | In Finder > Settings, turn on external disks in the General and Sidebar tabs |
| It doesn't connect through an adapter or hub | Plug the drive or adapter straight into the Mac |
| Files won't copy or open | Run First Aid in Disk Utility |
| Only files over 4 GB fail to copy | Check whether the drive is FAT32. Store large files on an exFAT drive |

The Finder settings are in [Apple's guide to viewing connected devices](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac).

## How do you run First Aid on a flash drive?

[Apple's Disk Utility guide](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac) says First Aid checks for and fixes errors in a storage device's formatting and directory structure. It can't detect or repair every problem.

1. Open Disk Utility and choose View > Show All Devices.
2. In the sidebar, select a volume on the drive, click First Aid, then click Run.
3. If the drive has containers, run First Aid on each container next.
4. Finally, select the drive itself and run First Aid.

If First Aid fails, Apple says to try again. If that doesn't work, back up as much data as you can and reformat the drive. If Disk Utility says the disk is about to fail, Apple says it can't be repaired, so copy your files and replace it.

## Which format should a flash drive use on a Mac?

Pick the format based on where you'll use the drive. Formats come from [Apple's file system formats guide](https://support.apple.com/guide/disk-utility/file-system-formats-dsku19ed921c/mac). The FAT32 limit comes from [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison).

| Format | Apple's description | Choose it when |
| --- | --- | --- |
| APFS | Default file system for macOS 10.13 or later | You'll use the drive only with Macs |
| APFS (Encrypted) | APFS with an encrypted volume | You'll use it only with Macs and want a password |
| ExFAT | For Windows volumes over 32 GB | You'll also use it with Windows or an iPhone, including files over 4 GB |
| MS-DOS (FAT) | For Windows volumes of 32 GB or less | You need FAT32 and have no files over 4 GB |

To format, Control-click the drive in the Finder sidebar, choose Erase Disk, pick a format, then click Erase. Disk Utility gives you more options. Formatting erases everything on the drive, so copy your files first. The full steps are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat) and [USB format FAT32](/blog/en/format-usb-fat32).

## Can you lock a flash drive with a password on a Mac?

Yes, but the drive has to be erased first. These steps follow [Apple's encryption guide](https://support.apple.com/guide/disk-utility/encrypt-protect-storage-device-password-dskutl35612/mac).

1. Copy any files you want to keep to another device.
2. Open Disk Utility and choose View > Show All Devices.
3. Select the drive and click Erase.
4. Enter a name and set Scheme to GUID Partition Map.
5. Set Format to an encrypted format, such as APFS (Encrypted).
6. Enter and verify a password, then click Choose.
7. Click Erase, then click Done.

Afterward, you enter the password each time you connect the drive. APFS isn't one of the Windows-compatible formats Apple lists. If you need the drive on a Windows PC, don't use this method.

## How do you use a flash drive with an iPhone?

This guide covers Macs. To connect a flash drive to an iPhone, see these guides.

| What you want to do | Read |
| --- | --- |
| Plug a drive into an iPhone and copy files | [Flash drive for iPhone: how to use one](/blog/en/iphone-flash-drive-guide) |
| Move iPhone photos to a drive | [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb) |
| Ports, formats, and capacity at a glance | [iPhone flash drive guide](/blog/en/iphone-usb-drive-guide) |

To use an SD card on a Mac, see [SD card reader for Mac](/blog/en/sd-card-on-mac).

## How to use a flash drive on a Mac: FAQ

### Where do I find the flash drive on my Mac?

Open a Finder window and look below Locations in the sidebar. If it isn't there, turn on external disks in Finder > Settings.

### My MacBook only has USB-C. Can I use a USB-A flash drive?

Yes, with an adapter. Apple lists the USB-C to USB Adapter for standard USB devices, including thumb drives.

### I clicked Don't Allow by mistake. What now?

Unplug the drive and connect it again. Apple says the Mac asks again the next time you connect the accessory.

### Can I unplug the drive without ejecting it?

It isn't recommended. Wait for copying to finish, eject the drive in the Finder, then unplug it.

### Which format works on both Mac and Windows?

Choose exFAT. Apple recommends MS-DOS (FAT) for Windows volumes of 32 GB or less and ExFAT above 32 GB. If you'll move files over 4 GB, exFAT is the right choice at any capacity.

### Is a flash drive encrypted on a Mac?

Not by default. In Microsoft's comparison, exFAT and FAT32 don't support file system level encryption. On a Mac, you can encrypt a drive by erasing it as APFS (Encrypted), but APFS isn't on Apple's list of Windows-compatible formats.
