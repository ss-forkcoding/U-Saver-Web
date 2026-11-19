---
title: "SD Memory Card Formatter: How to Use It, and Quick vs Overwrite Format"
description: "How to download and use the SD Memory Card Formatter from the SD Association, based on its official manual. Covers supported systems, Quick vs Overwrite format, and what to check when your card doesn't appear."
date: 2026-11-20
---

## Key takeaways

The SD Memory Card Formatter is a free tool from the SD Association (SDA), the group that sets the SD card standards. It runs on Windows, Mac, and Linux.

The SDA strongly recommends it over the formatting tools built into operating systems. It says those tools may not be optimized for SD cards and can result in lower performance.

There are two options. Quick format clears the file list. Overwrite format erases the whole user data area by writing over it. Choose Overwrite format before you give a card away.

"Where do I download the SD memory card formatter?" "Should I pick Quick or Overwrite format?" This guide follows the SDA's official manual and FAQ and focuses on the tool itself. For formatting with the iPhone Files app, Mac Disk Utility, or Windows File Explorer, see [how to format an SD card](/blog/en/format-sd-card).

## What is the SD Memory Card Formatter?

According to the [SDA's formatter page](https://www.sdcard.org/downloads/formatter/), the tool formats SD, SDHC, SDXC, and SDUC cards to the SD File System Specification. It picks the format that matches the card's capacity.

| Item | What the official page says |
| --- | --- |
| Made by | Distributed by the SDA, developed by Tuxera |
| Price | Free |
| Where to get it | The SDA website (sdcard.org) only |
| Windows and Mac version | 5.0.4 |
| Linux version | 1.0.3 (x86_64 and ARM64) |
| Cards it formats | SD, SDHC, SDXC, SDUC |

We checked these versions on the SDA site on November 20, 2026. The [SDA FAQ](https://www.sdcard.org/downloads/formatter/faq/) says not to use formatters found on other websites. The SDA doesn't allow copies of the tool to be hosted elsewhere.

Which format each capacity gets is covered in [SDHC vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).

## Which computers and card readers does it support?

These are the requirements listed on the SDA page.

| Item | What the official page says |
| --- | --- |
| Windows | Windows 10 22H2, Windows 11 22H2, 23H2, and 24H2 |
| Mac | macOS 11 Big Sur through macOS 15 Sequoia |
| Linux | Separate builds for x86_64 and ARM64 |
| Permissions | Administrator rights on both Windows and macOS |
| Connection | A PC's SD card slot, or a USB 2.0, 3.0, 3.1, or USB-C SD card reader |

On a Mac with Apple silicon, you might be asked to install Rosetta when you open the tool. The list above is what the SDA names. We haven't checked how the tool behaves on versions not listed.

The SDA page has no version for iPhone or Android. To format a card on an iPhone, use the Files app. The steps are in [how to format an SD card](/blog/en/format-sd-card).

## What should you check before formatting?

The SDA manual says that once formatting starts, all recorded information will no longer be available. Check these five things first.

| Check | What to do |
| --- | --- |
| Files you want to keep | Copy them to another storage device |
| Write-protect switch | Slide it up to the unlocked position |
| BitLocker To Go encryption | Unlock the card in Windows before formatting |
| Administrator rights | Make sure you're signed in as an administrator |
| Power and sleep | For Overwrite format, plug in the computer and turn off sleep mode |

To find the switch position, see [the SD card lock switch](/blog/en/sd-card-lock-switch). To move the card's photos to your iPhone first, see [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How to use the SD Memory Card Formatter

These steps follow the [SDA user's manual](https://www.sdcard.org/pdf/SD_CardFormatterUserManualEN.pdf).

1. Download the SD Memory Card Formatter for your operating system from the SDA site.
2. Close other apps and run the installer. You must accept the End User License Agreement (EULA) to install it.
3. Put the SD card in a card reader and connect it to your PC or Mac.
4. Open the formatter and select the card in the drive list. If you inserted the card after opening the tool, click Refresh.
5. Check the card type and size to confirm it's the right card.
6. Choose Quick format or Overwrite format.
7. Enter a name in the Volume label field.
8. Click Format, then click Continue in the confirmation window.
9. When formatting finishes, remove the card with the Eject function in Windows or macOS.

Don't remove the card or the card reader while formatting. The volume label can be up to 11 characters. The manual says a label written in non-English characters may not display correctly, so use English characters.

If you have version 4.0 or earlier installed, uninstall it before installing the latest version. The SDA FAQ says older versions are no longer available.

## What's the difference between Quick and Overwrite format?

Both options reset the card's file system parameters. The difference is whether the data inside the files is erased.

| Item | Quick format | Overwrite format |
| --- | --- | --- |
| File and folder entries | Deleted | Deleted |
| Data inside files | Stays on the card | Erased by overwriting the whole user data area |
| Time | Short | Much longer, depending on capacity |
| When to choose it | You'll keep using the card | Before giving away or discarding the card |

The SDA manual says data can remain after a Quick format and may be retrieved with a data recovery tool. To erase it completely, the manual says to use Overwrite format.

If you cancel during an Overwrite format, the user data area isn't overwritten. Only the file system parameters are reset and your volume label is written. Wait for the format to finish so the data is actually erased.

## When should you use CHS Format Size Adjustment?

CHS Format Size Adjustment is available only in the Windows version. It adjusts the formatted capacity to a value calculated from the number of cylinders, heads, and sectors.

The option can be turned on only for cards with a user capacity of 8,032.5 MB (8,422,686,720 bytes) or less. It works with both Quick and Overwrite format. The manual doesn't say which devices need it. Unless the manual for your device asks for it, leave it off.

## What if your card doesn't appear in the list?

These steps come from the SDA manual and FAQ.

1. Remove the card, insert it again, and click Refresh.
2. Check that your card reader supports the card's standard. Some readers work only with SD and SDHC cards.
3. Check whether your computer needs drivers for SD cards.
4. If everything is compatible and the card still doesn't appear, restart the computer and run the formatter again.

SDUC cards over 2 TB need drivers that support SDUC. If internal hard drives show up in the Windows version's list, the FAQ says to uninstall the tool, download it again from the SDA site, and reinstall.

If the computer itself doesn't see the card, or errors keep coming back, follow [what to do when an SD card is corrupted or not recognized](/blog/en/sd-card-not-working).

## Why does the capacity look different after formatting?

The SDA FAQ gives two reasons.

| What you see | Official explanation |
| --- | --- |
| Windows and Mac show different capacities | Windows counts 1 KB as 1,024 bytes, and Mac counts it as 1,000 bytes |
| The tool and the OS show different free space | After formatting, the OS creates hidden folders and files on the card |

If the capacity shown is far below the number printed on the card, the cause may not be the counting method. To check a card's real capacity, see [how to spot a fake SD card](/blog/en/fake-sd-card).

## Using the card with an iPhone?

The formatter runs on Windows, Mac, and Linux. If you want to use an SD card with your iPhone, start with these guides.

| What you want to do | Guide |
| --- | --- |
| Format a card in the iPhone Files app | [How to format an SD card](/blog/en/format-sd-card) |
| Reformat a microSD card | [How to reformat a micro SD card](/blog/en/format-microsd) |
| Move iPhone photos to a card | [Transferring photos from iPhone to SD card](/blog/en/iphone-photos-to-sd-card) |

## SD memory card formatter FAQ

### Is the SD Memory Card Formatter free?

Yes. The SDA FAQ says the download from the SDA site is free and always provides the latest version.

### Can it format USB flash drives or external hard drives?

The SDA manual says not to use the tool on recordable media other than SD, SDHC, SDXC, and SDUC cards. If you format another device by mistake, it says to reformat it with the software made for that device.

### Can I format a card as NTFS or another file system?

The SDA FAQ doesn't recommend reformatting with anything other than the SDA standard FAT file systems. It says doing so can limit how reliably the card moves data between devices.

### Does Quick format erase my files completely?

No. The SDA manual says file data stays on the card after a Quick format. Use Overwrite format to erase it completely.

### Does it format the Protected Area?

No. The Protected Area on SD, SDHC, and SDXC cards is used by CPRM content protection. The SDA says to format it with a PC application or device that supports CPRM. SDUC cards have no Protected Area.
