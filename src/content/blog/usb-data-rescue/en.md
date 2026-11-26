---
title: "Flash Drive Not Showing Up? Get Your Files Off It Safely"
description: "When a flash drive is not showing up, check things in an order that protects your files: close the format prompt, test ports and cables, then look in Windows Disk Management, Mac Disk Utility, and the iPhone Files app. Based on Microsoft and Apple documentation."
date: 2026-11-26
---

## Key takeaways

When a flash drive is not showing up, don't format it. If a window says you need to format the disk, close it. Formatting erases everything on the drive.

Next, check the connection: another port, another cable or adapter, then another computer. If the drive goes through a hub, plug it straight into the computer.

Once the drive shows up again, copy your most important files to another storage device first. Check and repair the drive after the copy is done. This guide doesn't promise that you'll get your files back.

"My flash drive worked yesterday and now it won't show up." "All I get is a prompt to format it." If you keep photos or documents on the drive, this is a stressful moment. This guide covers only steps you can check in official documentation. It doesn't test or recommend any flash drive or recovery program.

## Flash drive not showing up: what should you check first?

Find the row that matches what you see and start there.

| Symptom | What to suspect | Section in this guide |
| --- | --- | --- |
| A prompt asks you to format the drive | Damaged file system | The format prompt |
| Nothing happens when you plug it in | Port, cable, hub, or power | Checking the connection |
| Shows in Windows Disk Management but not in File Explorer | Drive letter, Offline status, or RAW | Windows Disk Management |
| Doesn't appear in the Finder on a Mac | Allow prompt or Finder settings | Mac |
| Works on a computer but not on iPhone | Lock, format, or number of partitions | iPhone |
| No device can see it | A failing drive | When nothing works |

## Why should you close the format prompt?

Formatting empties the drive and sets it up again. [Microsoft's Disk Management troubleshooting guide](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management) says formatting a disk erases all data on it. If you're trying to recover files from the disk, it says to skip that step.

1. When a prompt asks you to format the drive, select Cancel.
2. Don't save new files to the drive.
3. If an error message appeared, write it down.
4. Check the connection in the order below.

The same guide says that even if a partition shows as RAW or Unallocated, you shouldn't format it or create a new volume if you're trying to recover files.

## How do you tell if it's a connection problem?

These steps follow Microsoft's guide, adapted for flash drives. If the drive shows up at any step, skip the rest.

1. Unplug the drive and plug it back in.
2. Shut down the computer, turn it back on, and plug the drive in again.
3. If you're using a hub, remove it and plug the drive into a port on the computer itself.
4. Try a different port.
5. If you're using an adapter or extension cable, try a different one.
6. Plug the drive into a different computer.

Microsoft says USB disks sometimes don't get enough power from some ports, and that this is especially common with USB hubs. It also says cables fail often. If the drive doesn't work on another computer either, the problem is more likely the drive than your computer.

## What should you look for in Windows Disk Management?

A drive that's missing from File Explorer can still appear in Disk Management. Following [Microsoft's guide](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management), search for Computer Management on the taskbar, run it as administrator, and go to Storage > Disk Management.

| What Disk Management shows | What to do | What not to do |
| --- | --- | --- |
| The disk is Offline | Right-click the disk and select Online | — |
| The partition is Healthy but has no drive letter | Add a drive letter | — |
| The partition is RAW | Try other ports and another computer first | Format |
| Unallocated | Try other ports and another computer first | New Simple Volume |
| Not Initialized | Try other ports and another computer first | Initialize the disk |
| The drive isn't listed at all | Unplug it, plug it back in, then select Action > Rescan Disks | — |

To add a drive letter, follow [Microsoft's guide to changing a drive letter](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/change-a-drive-letter).

1. In Disk Management, right-click the drive's volume.
2. Select Change Drive Letter and Paths.
3. Select Add, then choose Assign the following drive letter.
4. Pick a letter from the list and select OK.

If the drive isn't in Disk Management at all, open Device Manager. Microsoft suggests looking for devices with an exclamation point, uninstalling that device, and then selecting Action > Scan for hardware changes. Microsoft also says the most common reason a disk is missing or fails to initialize is that the disk is failing.

## What should you check when a flash drive isn't showing up on a Mac?

On a Mac laptop with Apple silicon, check the allow prompt first. [Apple's guide to allowing accessories](https://support.apple.com/en-us/102282) says that if you click Don't Allow, your Mac won't recognize the accessory, and it will ask again the next time you connect it. If your Mac has been locked for 3 or more days, you might need to unlock it to use a previously allowed accessory again.

| Symptom | What to check |
| --- | --- |
| Nothing happens when you plug it in | You may have missed the prompt. Unplug the drive, plug it back in, and click Allow |
| Not in the Finder sidebar | In Finder > Settings, open the Sidebar tab and turn on External disks |
| Listed in Disk Utility but won't open | See if you can copy files, then check it with First Aid |

The Finder setting is in [Apple's guide to seeing connected devices](https://support.apple.com/guide/mac-help/see-the-devices-connected-to-your-mac-mchlp1039/mac). In Disk Utility, choose View > Show All Devices to see the volumes under the drive. The basics are in [How to use a flash drive on a Mac](/blog/en/usb-drive-on-mac).

## What if the flash drive isn't showing up only on iPhone?

If a computer can open the drive but your iPhone can't, check the iPhone's requirements. [Apple's guide to allowing accessories](https://support.apple.com/en-us/111806) says you always need to unlock your iPhone before using a storage accessory.

[Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says the device must have only a single data partition. It must be formatted as APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, or FAT. A drive you used as NTFS on Windows won't appear in the Files app.

The drive isn't broken in that case, so copy your files off it on a computer first. Then format it as described in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat), and your iPhone can use it. For lock, power, and cable checks in order, see [Can't connect external storage devices to iPhone?](/blog/en/iphone-drive-not-detected) The same order works for flash drives.

## Once the drive shows up, how do you get your files off?

The moment the drive comes back matters most. It could disappear again, so copy before you check.

1. Copy your most important folders to the computer or another storage device.
2. Don't open files on the drive to edit or save them there.
3. When the copy is done, check the drive with one of the tools below.

Apple says that if Disk Utility can't repair a disk, you should back up as much of your data as possible and then reformat it. If Disk Utility tells you the disk is about to fail, Apple says to back up your data and replace the disk because you can't repair it.

| Tool | Source | What to know |
| --- | --- | --- |
| First Aid in Mac Disk Utility | [Apple's guide to repairing a storage device](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac) | Run it on each volume, each container, and then the drive itself. It can't detect or repair every problem |
| `chkdsk` on Windows | [Microsoft's chkdsk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk) | Without parameters, it only shows status. Add `/f` to fix errors. It requires administrator rights |

Type something like `chkdsk E: /f`. E is only an example, so replace it with your drive's letter. Microsoft doesn't recommend interrupting `chkdsk`. The steps are covered in more detail in [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) That guide uses an SD card as the example, but the steps are the same for a flash drive.

## What if the flash drive still isn't showing up?

If the drive doesn't appear on another computer or in Disk Management, suspect the drive itself. Microsoft suggests asking on the Microsoft community site or contacting the disk manufacturer. The same guide notes that there are apps that try to recover data from a failing disk, and paid data recovery labs.

This guide doesn't test or recommend any program or lab. Check the manufacturer's warranty and support first. For missing files, see also [Repairing an SD card](/blog/en/sd-card-corrupted).

## How do you avoid this next time?

Eject the drive before you unplug it. [Microsoft's guide to safely removing hardware](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369) says that to avoid losing data, you should always safely remove USB flash drives before disconnecting them.

Don't keep your files in only one place. Microsoft says disks fail often, so you should back up files you care about regularly. It calls a disk that sometimes doesn't appear or gives errors a reminder to double-check your backups. For saving iPhone photos and contacts to a flash drive, see [Backup iPhone to USB](/blog/en/backup-iphone-to-usb).

## How can you save iPhone photos to a flash drive?

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## Flash drive not showing up: FAQ

### What happens if I click Format in the prompt?

Everything on the drive is erased. Microsoft's guide says formatting a disk erases all data on it. To get your files off, close the prompt.

### Is it OK to keep unplugging and replugging the drive?

Unplugging and replugging is the first step in Microsoft's guide. But if you unplug it during a copy, some files may not finish copying. Wait for the progress bar to disappear, eject the drive, and then unplug it.

### Should I run chkdsk first?

`chkdsk /f` and First Aid are tools that fix disk errors. Apple says that if a repair fails, you should back up as much data as possible. If you can see your files, copy them first.

### It shows up on another computer but not on mine.

Suspect your computer's ports, hub, or settings rather than the drive. On Windows, check the drive letter in Disk Management. On a Mac, check the allow prompt and Finder settings.

### The drive only doesn't show up on my iPhone.

Check that the iPhone is unlocked, the drive isn't NTFS, and it has a single data partition. NTFS isn't on Apple's list of external storage formats.
