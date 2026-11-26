---
title: "SD Card Not Showing Up on Windows? Check These Steps in Order"
description: "When an SD card is not showing up on a Windows PC, check the card and reader standards, the reader driver in Device Manager, and the drive letter in Disk Management. Based on Microsoft and SD Association documentation."
date: 2026-11-27
---

## Key takeaways

When an SD card is not showing up on Windows, don't format it first. Formatting erases everything on the card.

Check three places. Does the card match the slot or reader? Does Device Manager show the reader without problems? Does Disk Management show the card? What to do next depends on where it stops.

If another PC and another reader can't see the card either, suspect the card itself and contact the card maker.

"My SD card works in the camera but not on my laptop." "I put it in the reader and File Explorer shows nothing." This guide covers what to check when a Windows PC can't see an SD card. It doesn't test or recommend any card or reader. If the card shows up but won't format, see [SD card corrupted or not recognized](/blog/en/sd-card-not-working).

## SD card not showing up: where does it stop?

Open File Explorer, Disk Management, and Device Manager in turn, and see how far the card gets. Find your situation in the table.

| Where it appears | What to suspect | Section in this guide |
| --- | --- | --- |
| Nowhere | Reader, port, cable, or standard | Connection and standards |
| Device Manager shows a device with an exclamation point | Reader driver | Device Manager |
| In Disk Management but not in File Explorer | Drive letter or Offline status | Disk Management |
| Disk Management shows RAW or Unallocated | Damaged file system | Disk Management |
| In File Explorer, but a prompt asks you to format | Damaged file system | The format prompt |
| Not on another PC or another reader either | A failing card | When nothing works |

## Should you click Format when Windows asks?

No. [Microsoft's Disk Management troubleshooting guide](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management) says formatting a disk erases all data on it. If you're trying to recover files, it says to skip that step.

1. When a prompt asks you to format the card, select Cancel.
2. Don't save new files to the card.
3. If an error message appeared, write it down.

Format only when there's nothing on the card you need. The steps are in [how to format an SD card](/blog/en/format-sd-card).

## What should you check in the connection and card standard?

These are Microsoft's steps, adapted for SD cards. If the card shows up at any step, skip the rest.

1. Remove the card, put it back in, then select Action > Rescan Disks in Disk Management.
2. Shut down the PC, turn it back on, and insert the card.
3. If the USB reader goes through a hub, plug it straight into a port on the PC.
4. Plug the reader into a different port.
5. If the reader has a cable, try a different one.
6. Try a different PC.

Microsoft says USB disks sometimes don't get enough power from some ports, and that this is especially common with USB hubs. It also says cables fail often.

Next, match the card's capacity standard to the slot or reader. [The SD Association's capacity guide](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/) lists compatibility like this.

| Slot or reader | Cards it can use |
| --- | --- |
| SD | SD |
| SDHC | SD, SDHC |
| SDXC | SD, SDHC, SDXC |
| SDUC | SD, SDHC, SDXC, SDUC |

Compare the SDHC or SDXC mark on the card with the laptop or reader spec sheet. If an older laptop slot supports only up to SDHC, it can't read an SDXC card. Use a USB reader that supports SDXC instead. The standards are explained in [SDHC vs SDXC](/blog/en/sdhc-vs-sdxc), and reader choices in [how to choose an SD card reader](/blog/en/choose-sd-card-reader).

## How do you check the reader in Device Manager?

If the card isn't in Disk Management either, open Device Manager. [Microsoft's guide](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management) says to look for devices with an exclamation point, then select the device and read its status.

1. Right-click the Start button and select Device Manager.
2. Select the arrow next to a category to expand it, and look for a device with an exclamation point.
3. Right-click that device and select Uninstall device.
4. Select Action > Scan for hardware changes.

If that doesn't help, reinstall or update the driver. [Microsoft's Device Manager driver guide](https://support.microsoft.com/en-us/windows/update-drivers-manually-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6) lists these options.

| Situation | What to do | Good to know |
| --- | --- | --- |
| The driver seems broken | Uninstall the device, then restart the PC | After the restart, Windows tries to reinstall the driver |
| It stopped after a recent update | Properties > Driver tab > Roll Back Driver | You need administrator permissions |
| The driver may be out of date | Update driver > Search automatically for updated driver software | If none is found, you get an option to search Windows Update |
| The maker offers a driver | Download it from the maker's site and install it manually | Match your Windows version and architecture |

Microsoft says Windows Update downloads and installs drivers for most hardware automatically. For a built-in laptop slot, look for the card reader driver on the PC maker's support site.

## In Disk Management but not in File Explorer?

To open Disk Management, search for Computer Management on the taskbar, run it as administrator, and go to Storage > Disk Management. Here's what Microsoft's guide says to do for each status.

| Status in Disk Management | What to do | What not to do |
| --- | --- | --- |
| The disk is Offline | Right-click the disk and select Online | Nothing |
| The partition is Healthy with no drive letter | Add a drive letter | Nothing |
| The partition is RAW | Check with another reader and another PC first | Format |
| Unallocated | Check with another reader and another PC first | New Simple Volume |
| Not Initialized | Check with another reader and another PC first | Initialize Disk |

Add a drive letter following [Microsoft's guide to changing a drive letter](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/change-a-drive-letter). You need an administrator account.

1. In Disk Management, right-click the card's volume.
2. Select Change Drive Letter and Paths.
3. Select Add, choose a drive letter, and select OK.

Microsoft says the most common reason a disk or memory card is missing or won't initialize is that the disk is failing. If the card shows up again, copy your files before you run any checks. How to check it after copying is in [repairing an SD card](/blog/en/sd-card-corrupted).

## What if the SD card still doesn't show up?

If it's the same on another PC and another reader, suspect the card. [The SD Association FAQ](https://www.sdcard.org/consumers/faq/) says it's a standards organization that doesn't make or sell SD products, so consumers with technical issues should contact the manufacturer directly.

Microsoft's guide notes that there are apps that try to recover data from a failing disk, and paid data recovery labs. This guide doesn't test or recommend any program or lab. Check the maker's warranty and support first.

The steps for a USB flash drive are almost the same. See [flash drive not showing up](/blog/en/usb-data-rescue) for an order that protects your files.

## How should you remove the card once it shows up?

[Microsoft's guide to safely removing hardware](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369) says to always safely remove a device before unplugging it to avoid losing data.

1. Select the Safely Remove Hardware and Eject Media icon in the taskbar notification area.
2. Select Eject for the card's drive.
3. When the notice says it's safe to remove the hardware, remove the card or the reader.

The basics of connecting a card to a PC and moving files are in [SD card reader for PC](/blog/en/sd-card-to-pc).

## What if your iPhone can't see the SD card?

This guide is for Windows PCs. If you connect a card to an iPhone with a reader and it doesn't appear in the Files app, the cause may be the lock screen, the card format, or the number of data partitions. Start with these guides.

| Situation | Read this |
| --- | --- |
| The card doesn't appear after you connect a reader to iPhone | [How to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader) |
| You want reader types and card formats in one place | [iPhone SD card guide](/blog/en/iphone-sd-card-guide) |
| The PC doesn't recognize the iPhone itself | [Phone not recognized by PC](/blog/en/phone-not-recognized-pc) |

## SD card not showing up: FAQ

### My SD card works in the camera but isn't showing up on my PC.

Suspect the PC's slot, reader, or driver rather than the card. Check that the slot or reader supports the card's standard, and look for a device with an exclamation point in Device Manager.

### Disk Management shows RAW. Should I format right away?

Not if there are files you need. Microsoft says not to format a RAW partition if you're trying to recover files. Check with another reader and another PC first.

### Will uninstalling the driver cause problems?

According to Microsoft, Windows tries to reinstall the driver when you restart after uninstalling the device. If it doesn't, move on to updating the driver or installing the maker's driver.

### My microSD card in an adapter isn't showing up.

Try another adapter or a microSD reader. The adapter doesn't change the card's capacity standard, so the reader still has to support it.

### What if no other PC can see the SD card either?

Suspect a failing card. The SD Association says to contact the card maker about technical issues. Check the warranty terms with the store and the maker.
